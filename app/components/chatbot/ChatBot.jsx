// app/chatbot/ChatBox.jsx
"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";
import { useAutoScroll } from "@/app/assets/hooks/useAutoScroll";
import { assets } from "@/app/assets/connect/assets";

export default function ChatBox({ isDark = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const chatBodyRef = useRef(null);
  const scrollRef = useAutoScroll([messages, isTyping], { delay: 100 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
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
    const saved = localStorage.getItem("astarbot-messages");
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
    if (messages.length > 0) {
      localStorage.setItem("astarbot-messages", JSON.stringify(messages));
    }
  }, [messages]);

  const setInitialMessage = () => {
    setMessages([
      {
        id: crypto.randomUUID(),
        sender: "bot",
        content: "👋 Hi! I'm AStarBot, your AI assistant. How can I help you today?",
        timestamp: new Date(),
      },
    ]);
  };

  const handleSendMessage = (content) => {
    const trimmedContent = content.trim();
    if (trimmedContent.length === 0 || trimmedContent.length > 1000) return;

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
    }, 800);

    setTimeout(() => {
      const botMessage = {
        id: crypto.randomUUID(),
        sender: "bot",
        content: "Thanks for your message! This is a demo response from AStarBot. Ask me anything about the portfolio.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 2200);
  };

  const handleClearChat = () => {
    const initialMessage = {
      id: crypto.randomUUID(),
      sender: "bot",
      content: "👋 Hi! I'm AStarBot, your AI assistant. How can I help you today?",
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
    localStorage.setItem("astarbot-messages", JSON.stringify([initialMessage]));
  };

  const toggleChat = () => setIsOpen((v) => !v);

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

  return (
    <>
      <div className={`fixed ${isOpen && isMobile ? 'bottom-24 right-6' : 'bottom-6 right-6'} z-[1000] transition-all duration-300`}>
        <button
          onClick={toggleChat}
          className={`
            relative w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95
            bg-[#FDD000] hover:bg-[#FFE44D] text-black
            ${isOpen ? "rotate-180" : "rotate-0"}
            focus:outline-none focus:ring-4 focus:ring-[#FDD000]/30
          `}
          aria-label={isOpen ? "Close AStarBot chat" : "Open AStarBot chat"}
          role="button"
        >
          <span className="text-xl font-medium">{isOpen ? "✕" : "💬"}</span>
        </button>
      </div>

      {isOpen && (
        <div
          className={`
            fixed z-[999] flex flex-col
            ${isMobile 
              ? 'inset-0 w-screen h-screen rounded-none' 
              : 'bottom-[100px] right-6 w-[550px] h-[650px] max-h-[calc(100vh-120px)] rounded-2xl'
            }
            shadow-2xl transition-all duration-300 transform origin-bottom-right
            border border-black/10 backdrop-blur-md
            ${isDark
              ? "bg-slate-900/90"
              : "bg-white/90"}
            animate-in slide-in-from-bottom-4 fade-in duration-300
          `}
          role="dialog"
          aria-label="AStarBot chat assistant"
          aria-modal={isMobile ? "true" : "false"}
        >
          <div
            className={`
              flex items-center justify-between p-4 border-b
              bg-[#FDD000] text-black
              ${isMobile ? 'rounded-none' : 'rounded-t-2xl'}
            `}
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center border-2 border-black/20">
                <Image
                  src={assets.avro_star}
                  alt="AStarBot Logo"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm">AStarBot</h3>
                <p className="text-black/70 text-xs">Avrodeep's Portfolio Assistant</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={handleClearChat}
                className="p-2 rounded-full hover:bg-black/10 transition-colors"
                aria-label="Clear chat history"
                title="Clear chat"
              >
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button
                onClick={toggleChat}
                className="p-2 rounded-full hover:bg-black/10 transition-colors"
                aria-label="Close AStarBot chat"
              >
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div 
            ref={chatBodyRef} 
            className={`flex flex-col flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-4 ${isMobile ? 'pb-24' : 'pb-20'} scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600`}
            aria-live="polite"
          >
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                sender={message.sender}
                content={message.content}
                timestamp={message.timestamp}
                isDark={isDark}
                isMobile={isMobile}
              />
            ))}

            {isTyping && (
              <div className="flex justify-start animate-in slide-in-from-left-2 fade-in duration-300">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#FDD000]/20 flex items-center justify-center">
                    <Image
                      src={assets.avro_star}
                      alt="AStarBot typing"
                      width={20}
                      height={20}
                      className="rounded-full"
                    />
                  </div>
                  <div
                    className={`
                      px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm
                      ${isDark ? "bg-slate-800/70 text-gray-300" : "bg-white/90 text-gray-600"}
                      border border-[#FDD000]/30
                    `}
                  >
                    <div className="flex items-center space-x-1">
                      <span className="text-sm">AStarBot is typing</span>
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-[#FDD000] rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-[#FDD000] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-1.5 h-1.5 bg-[#FDD000] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={scrollRef} />
          </div>

          <div
            className={`
              shrink-0 p-4 border-t
              ${isDark ? "border-slate-700/30 bg-slate-800/70" : "border-gray-200/50 bg-white/80"}
              ${isMobile ? 'rounded-none' : 'rounded-b-2xl'}
              backdrop-blur-sm
            `}
          >
            <ChatForm onSend={handleSendMessage} isDark={isDark} isMobile={isMobile} />
          </div>
        </div>
      )}
    </>
  );
}
