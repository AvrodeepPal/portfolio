import { useState, useRef, useEffect, useCallback } from "react";
import { chatBotConfig, chatApiConfig, chatMessages, storageConfig } from "@/app/assets/data/chatBotData";

const makeMessage = (sender, content) => ({
  id: crypto.randomUUID(),
  sender,
  content,
  timestamp: new Date().toISOString(),
});

const initialMessage = (content = chatMessages.initial.content) =>
  makeMessage(chatMessages.initial.sender, content);

// The backend is stateless: the client owns the conversation memory and sends
// it with every request. This mirrors interfaces/session.py in AStarBot.
const trimWindow = (turns, max) => turns.slice(-max);

const clipForApi = (text) => text.slice(0, chatApiConfig.maxMessageChars);

const loadSaved = () => {
  try {
    localStorage.removeItem(storageConfig.legacyKey);
    const saved = JSON.parse(localStorage.getItem(storageConfig.key) || "null");
    if (saved && Array.isArray(saved.messages) && saved.messages.length > 0) return saved;
  } catch (error) {
    console.error("Failed to load chat history:", error);
  }
  return null;
};

export const useChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const chatBodyRef = useRef(null);

  // Backend memory. Refs, not state: they are read inside async callbacks
  // that would otherwise capture stale values.
  const apiWindowRef = useRef([]); // [{ role: "user" | "assistant", content }]
  const summaryRef = useRef(null);
  const windowPolicyRef = useRef(chatApiConfig.window);
  const greetingRef = useRef(chatMessages.initial.content);
  const abortRef = useRef(null);
  const busyRef = useRef(false);
  const conversationRef = useRef(0); // bumped on clear, so late replies are dropped
  const loadedRef = useRef(false);

  // Fires only when the breakpoint is crossed, not on every resize event.
  useEffect(() => {
    const query = window.matchMedia(`(max-width: ${chatBotConfig.dimensions.mobile.breakpoint - 0.02}px)`);
    const checkMobile = () => setIsMobile(query.matches);

    checkMobile();
    query.addEventListener('change', checkMobile);
    return () => query.removeEventListener('change', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, isOpen]);

  // Restore history, then fetch the greeting and window policy. The /version
  // call also wakes a sleeping Render instance; it waits for the browser to go
  // idle so it doesn't compete with the page's own loading.
  useEffect(() => {
    const saved = loadSaved();
    if (saved) {
      setMessages(saved.messages);
      apiWindowRef.current = Array.isArray(saved.apiWindow) ? saved.apiWindow : [];
      summaryRef.current = saved.summary || null;
    } else {
      setMessages([initialMessage()]);
    }
    loadedRef.current = true;

    if (!chatApiConfig.baseUrl) return;
    const controller = new AbortController();
    const fetchVersion = () => fetch(`${chatApiConfig.baseUrl}/version`, { cache: "no-store", signal: controller.signal })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (!data) return;
        const policy = data.client_window || {};
        windowPolicyRef.current = {
          maxRecentMessages: policy.max_recent_messages ?? chatApiConfig.window.maxRecentMessages,
          messagesAfterSummary: policy.messages_after_summary ?? chatApiConfig.window.messagesAfterSummary,
          summaryTriggerAfter: policy.summary_trigger_after ?? chatApiConfig.window.summaryTriggerAfter,
        };
        if (data.initial_message) {
          greetingRef.current = data.initial_message;
          // Swap the fallback greeting only if the chat hasn't started.
          setMessages((prev) =>
            prev.length === 1 && prev[0].sender === "bot" && !saved
              ? [{ ...prev[0], content: data.initial_message }]
              : prev
          );
        }
      })
      .catch(() => {});

    let cancelIdle;
    if (window.requestIdleCallback) {
      const id = window.requestIdleCallback(fetchVersion, { timeout: 2000 });
      cancelIdle = () => window.cancelIdleCallback(id);
    } else {
      const id = setTimeout(fetchVersion, 1000);
      cancelIdle = () => clearTimeout(id);
    }
    return () => {
      cancelIdle();
      controller.abort();
    };
  }, []);

  const persist = useCallback((nextMessages) => {
    if (!storageConfig.autoSave || !loadedRef.current) return;
    try {
      localStorage.setItem(
        storageConfig.key,
        JSON.stringify({ messages: nextMessages, apiWindow: apiWindowRef.current, summary: summaryRef.current })
      );
    } catch {
      // Storage full or blocked: the chat still works for this visit.
    }
  }, []);

  // Skip writes while a reply streams in; save once it settles.
  useEffect(() => {
    if (!isBusy && messages.length > 0) persist(messages);
  }, [messages, isBusy, persist]);

  useEffect(() => () => abortRef.current?.abort(), []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && isMobile) {
        setIsOpen(false);
      }
    };

    if (isOpen && isMobile) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, isMobile]);

  const summarize = async (turns, previousSummary, conversation) => {
    try {
      const res = await fetch(`${chatApiConfig.baseUrl}/summarize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recent_messages: turns, summary: previousSummary }),
      });
      if (!res.ok) return;
      const { updated_summary: updated } = await res.json();
      if (
        updated &&
        updated !== previousSummary &&
        conversationRef.current === conversation &&
        summaryRef.current === previousSummary
      ) {
        summaryRef.current = updated;
        // Trim the live window, which may already hold a newer turn.
        apiWindowRef.current = trimWindow(apiWindowRef.current, windowPolicyRef.current.messagesAfterSummary);
        setMessages((prev) => [...prev]); // persist the new memory
      }
    } catch (error) {
      console.error("Chat summarisation failed:", error);
    }
  };

  const handleSendMessage = async (content) => {
    const question = content.trim();
    if (question.length === 0 || question.length > chatBotConfig.maxMessageLength || busyRef.current) return;

    setMessages((prev) => [...prev, makeMessage("user", question)]);

    if (!chatApiConfig.baseUrl) {
      setMessages((prev) => [...prev, makeMessage("bot", chatMessages.errors.notConfigured)]);
      return;
    }

    busyRef.current = true;
    setIsBusy(true);
    setIsTyping(true);
    const conversation = conversationRef.current;

    const controller = new AbortController();
    abortRef.current = controller;
    const timeout = setTimeout(() => controller.abort("timeout"), chatApiConfig.requestTimeoutMs);

    const botId = crypto.randomUUID();
    let answer = "";

    try {
      const res = await fetch(`${chatApiConfig.baseUrl}/chat/stream`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          recent_messages: apiWindowRef.current,
          summary: summaryRef.current,
        }),
        signal: controller.signal,
      });
      if (!res.ok || !res.body) throw new Error(`AStarBot API returned ${res.status}`);

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        if (!chunk) continue;
        const first = answer.length === 0;
        answer += chunk;
        if (first) {
          setIsTyping(false);
          setMessages((prev) => [...prev, { ...makeMessage("bot", answer), id: botId }]);
        } else {
          const text = answer;
          setMessages((prev) => prev.map((m) => (m.id === botId ? { ...m, content: text } : m)));
        }
      }
      answer += decoder.decode();
    } catch (error) {
      const aborted = controller.signal.aborted;
      if (aborted && controller.signal.reason !== "timeout") return; // chat cleared or unmounted
      if (answer) {
        // Keep the partial answer on screen, but out of the backend memory.
        const text = `${answer}\n\n${chatMessages.errors.interrupted}`;
        setMessages((prev) => prev.map((m) => (m.id === botId ? { ...m, content: text } : m)));
      } else {
        const text = aborted ? chatMessages.errors.timeout : chatMessages.errors.network;
        setMessages((prev) => [...prev, makeMessage("bot", text)]);
      }
      console.error("AStarBot request failed:", error);
      return;
    } finally {
      clearTimeout(timeout);
      if (abortRef.current === controller) {
        abortRef.current = null;
        busyRef.current = false;
        setIsTyping(false);
        setIsBusy(false);
      }
    }

    if (!answer.trim() || conversationRef.current !== conversation) return;

    const policy = windowPolicyRef.current;
    const turns = trimWindow(
      [
        ...apiWindowRef.current,
        { role: "user", content: question },
        { role: "assistant", content: clipForApi(answer) },
      ],
      policy.maxRecentMessages
    );
    apiWindowRef.current = turns;
    setMessages((prev) => {
      const text = answer;
      return prev.map((m) => (m.id === botId ? { ...m, content: text } : m));
    });

    // /chat/stream never returns a summary; fold the window once it is full.
    if (turns.length >= policy.summaryTriggerAfter) {
      summarize(turns, summaryRef.current, conversation);
    }
  };

  const handleClearChat = () => {
    abortRef.current?.abort();
    abortRef.current = null;
    conversationRef.current += 1;
    busyRef.current = false;
    setIsTyping(false);
    setIsBusy(false);
    apiWindowRef.current = [];
    summaryRef.current = null;
    setMessages([initialMessage(greetingRef.current)]);
  };

  const toggleChat = () => setIsOpen((v) => !v);

  return {
    isOpen,
    messages,
    isTyping,
    isBusy,
    isMobile,
    chatBodyRef,
    
    handleSendMessage,
    handleClearChat,
    toggleChat
  };
};

export const useChatForm = (onSend, isMobile = false, isBusy = false) => {
  const [message, setMessage] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "2.5rem";
      const computed = window.getComputedStyle(textarea);
      const height =
        parseInt(computed.getPropertyValue("border-top-width"), 10) +
        parseInt(computed.getPropertyValue("padding-top"), 10) +
        textarea.scrollHeight +
        parseInt(computed.getPropertyValue("padding-bottom"), 10) +
        parseInt(computed.getPropertyValue("border-bottom-width"), 10);
      
      const maxHeight = isMobile 
        ? chatBotConfig.dimensions.mobile.textareaMaxHeight 
        : chatBotConfig.dimensions.desktop_textarea.maxHeight;
      textarea.style.height = Math.min(height, maxHeight) + "px";
    }
  }, [message, isMobile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    
    if (trimmedMessage.length === 0 || trimmedMessage.length > chatBotConfig.maxMessageLength || isComposing || isBusy) {
      return;
    }
    
    onSend(trimmedMessage);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !isComposing) {
      e.preventDefault();
      const trimmedMessage = message.trim();
      if (trimmedMessage.length > 0 && trimmedMessage.length <= chatBotConfig.maxMessageLength && !isBusy) {
        onSend(trimmedMessage);
        setMessage("");
      }
    }
  };

  const isDisabled = isBusy || message.trim().length === 0 || message.length > chatBotConfig.maxMessageLength;
  const charactersLeft = chatBotConfig.maxMessageLength - message.length;
  const isNearLimit = charactersLeft < 100;

  return {
    message,
    isComposing,
    textareaRef,
    isDisabled,
    charactersLeft,
    isNearLimit,
    
    setMessage,
    setIsComposing,
    handleSubmit,
    handleKeyDown
  };
};

export const useChatMessage = () => {
  const [showTimestamp, setShowTimestamp] = useState(false);

  const formatTime = (date) =>
    new Intl.DateTimeFormat("en-US", { 
      hour: "2-digit", 
      minute: "2-digit", 
      hour12: true 
    }).format(new Date(date));

  const toggleTimestamp = () => setShowTimestamp((v) => !v);

  return {
    showTimestamp,
    formatTime,
    toggleTimestamp
  };
};