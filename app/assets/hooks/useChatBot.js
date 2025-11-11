import { useState, useRef, useEffect } from "react";
import { chatBotConfig, chatMessages, storageConfig } from "@/app/assets/data/chatBotData";

export const useChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const chatBodyRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < chatBotConfig.dimensions.mobile.breakpoint);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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

  useEffect(() => {
    const saved = localStorage.getItem(storageConfig.key);
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (error) {
        console.error("Failed to load chat history:", error);
        setInitialMessage();
      }
    } else {
      setInitialMessage();
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0 && storageConfig.autoSave) {
      localStorage.setItem(storageConfig.key, JSON.stringify(messages));
    }
  }, [messages]);

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

  const setInitialMessage = () => {
    const initialMessage = {
      id: crypto.randomUUID(),
      sender: chatMessages.initial.sender,
      content: chatMessages.initial.content,
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  };

  const handleSendMessage = (content) => {
    const trimmedContent = content.trim();
    if (trimmedContent.length === 0 || trimmedContent.length > chatBotConfig.maxMessageLength) return;

    const sanitizedContent = trimmedContent
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;");

    const userMessage = {
      id: crypto.randomUUID(),
      sender: "user",
      content: sanitizedContent,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      setIsTyping(true);
    }, chatBotConfig.typingDelay.start);

    setTimeout(() => {
      const botMessage = {
        id: crypto.randomUUID(),
        sender: chatMessages.demo.sender,
        content: chatMessages.demo.content,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, chatBotConfig.typingDelay.response);
  };

  const handleClearChat = () => {
    const initialMessage = {
      id: crypto.randomUUID(),
      sender: chatMessages.initial.sender,
      content: chatMessages.initial.content,
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
    localStorage.setItem(storageConfig.key, JSON.stringify([initialMessage]));
  };

  const toggleChat = () => setIsOpen((v) => !v);

  return {
    isOpen,
    messages,
    isTyping,
    isMobile,
    chatBodyRef,
    
    handleSendMessage,
    handleClearChat,
    toggleChat
  };
};

export const useChatForm = (onSend, isMobile = false) => {
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
    
    if (trimmedMessage.length === 0 || trimmedMessage.length > chatBotConfig.maxMessageLength || isComposing) {
      return;
    }
    
    onSend(trimmedMessage);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !isComposing) {
      e.preventDefault();
      const trimmedMessage = message.trim();
      if (trimmedMessage.length > 0 && trimmedMessage.length <= chatBotConfig.maxMessageLength) {
        onSend(trimmedMessage);
        setMessage("");
      }
    }
  };

  const isDisabled = message.trim().length === 0 || message.length > chatBotConfig.maxMessageLength;
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
    }).format(date);

  const toggleTimestamp = () => setShowTimestamp((v) => !v);

  return {
    showTimestamp,
    formatTime,
    toggleTimestamp
  };
};