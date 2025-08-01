// app/chatbot/ChatBox.jsx
"use client";
import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";
import { assets } from "@/app/assets/home/assets";

export default function ChatBox({ isDark = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const messagesEndRef = useRef(null);
  const chatBodyRef = useRef(null);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lock body scroll when mobile chat is open
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

  // Load messages from localStorage on mount
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

  // Save messages to localStorage when they change
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

  // Smart auto-scroll: only scroll if user is near bottom
  useEffect(() => {
    if (messagesEndRef.current && isOpen && chatBodyRef.current) {
      const { scrollHeight, scrollTop, clientHeight } = chatBodyRef.current;
      const isNearBottom = scrollHeight - scrollTop <= clientHeight + 100;
      
      if (isNearBottom) {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      }
    }
  }, [messages, isOpen, isTyping]);

  // Handle sending new message with validation and sanitization
  const handleSendMessage = (content) => {
    const trimmedContent = content.trim();
    if (trimmedContent.length === 0 || trimmedContent.length > 1000) return;

    // Basic HTML escaping for XSS prevention
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
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage = {
        id: crypto.randomUUID(),
        sender: "bot",
        content: "Thanks for your message! This is a demo response from AStarBot. Ask me anything about the portfolio.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1200);
  };

  // Clear chat history
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

  // Handle escape key to close chat in mobile fullscreen
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
      {/* Floating Toggle Button - Always Visible */}
      <div className={`fixed ${isOpen && isMobile ? 'bottom-6 right-6 z-[60]' : 'bottom-6 right-6 z-[1000]'}`}>
        <button
          onClick={toggleChat}
          className={`
            relative w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95
            ${isDark
              ? "bg-[#FDD000] hover:bg-[#FFDF55] text-black"
              : "bg-[#FDD000] hover:bg-[#FFE44D] text-black"}
            ${isOpen ? "rotate-180" : "rotate-0"}
            focus:outline-none focus:ring-4 focus:ring-[#FDD000]/30
          `}
          aria-label={isOpen ? "Close AStarBot chat" : "Open AStarBot chat"}
          role="button"
        >
          <span className="text-xl">{isOpen ? "✕" : "💬"}</span>
        </button>
      </div>

      {/* Chat Panel - Responsive positioning */}
      {isOpen && (
        <div
          className={`
            fixed z-[50]
            ${isMobile 
              ? 'inset-0 w-screen h-screen rounded-none' 
              : 'bottom-[90px] right-6 w-[525px] h-[600px] max-h-[calc(100vh-120px)] rounded-2xl'
            }
            shadow-xl transition-all duration-300 transform origin-bottom-right
            ${isDark
              ? "bg-slate-900/95 backdrop-blur-md"
              : "bg-white/95 backdrop-blur-md border border-red-400"}
          `}
          role="dialog"
          aria-label="AStarBot chat assistant"
          aria-modal={isMobile ? "true" : "false"}
        >
          {/* Header */}
          <div
            className={`
              flex items-center justify-between p-4 border-b
              ${isDark ? "border-slate-700/30 bg-slate-800/50" : "border-gray-200/50 bg-white/70"}
              ${isMobile ? 'rounded-none' : 'rounded-t-2xl'}
            `}
          >
            <div className="flex items-center space-x-3">
              <img 
                src="/favicon.png" 
                alt="AStarBot Icon" 
                className="w-8 h-8 rounded-full border-2 border-[#FDD000]"
                onError={(e) => {
                  // Fallback if favicon doesn't exist
                  e.target.style.display = 'none';
                }}
              />
              <div>
                <h3 className={`${isDark ? "text-white" : "text-gray-900"} font-semibold text-sm`}>
                  AStarBot
                </h3>
                <p className={`${isDark ? "text-gray-300" : "text-gray-600"} text-xs`}>
                  Always here to help
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={handleClearChat}
                className={`
                  p-2 rounded-lg transition-colors
                  ${isDark ? "hover:bg-slate-700/50 text-gray-300" : "hover:bg-gray-100/50 text-gray-600"}
                  focus:outline-none focus:ring-2 focus:ring-[#FDD000]/30
                `}
                aria-label="Clear chat history"
                title="Clear chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
              <button
                onClick={toggleChat}
                className={`
                  p-2 rounded-lg transition-colors
                  ${isDark ? "hover:bg-slate-700/50 text-gray-300" : "hover:bg-gray-100/50 text-gray-600"}
                  focus:outline-none focus:ring-2 focus:ring-[#FDD000]/30
                `}
                aria-label="Close AStarBot chat"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Body - Proper spacing to avoid input overlap */}
          <div 
            ref={chatBodyRef} 
            className={`
              flex-1 overflow-y-auto p-4 space-y-4 
              ${isMobile ? 'h-[calc(100vh-140px)] pb-20' : 'h-[calc(100%-140px)] pb-4'}
              scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600
            `}
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

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2">
                  <Image 
                    src={assets.avr} 
                    alt="AStarBot" 
                    className="w-6 h-6 rounded-full border border-[#FDD000]/30"
                    onError={(e) => {
                      // Fallback if favicon doesn't exist  
                      e.target.style.display = 'none';
                    }}
                  />
                  <div
                    className={`
                      px-4 py-3 rounded-2xl rounded-bl-sm
                      ${isDark ? "bg-slate-800/70 text-gray-300" : "bg-white/90 text-gray-600"}
                      border border-[#FDD000]/20
                    `}
                  >
                    <div className="flex items-center space-x-1">
                      <span className="text-sm">AStarBot is typing</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-1 bg-[#FDD000] rounded-full animate-bounce"></div>
                        <div className="w-1 h-1 bg-[#FDD000] rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                        <div className="w-1 h-1 bg-[#FDD000] rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer - Fixed at bottom */}
          <div
            className={`
              ${isMobile ? 'fixed bottom-0 left-0 right-0' : 'relative'}
              p-4 border-t
              ${isDark ? "border-slate-700/30 bg-slate-800/50" : "border-gray-200/50 bg-white/70"}
              ${isMobile ? 'rounded-none' : 'rounded-b-2xl'}
            `}
          >
            <ChatForm onSend={handleSendMessage} isDark={isDark} isMobile={isMobile} />
          </div>
        </div>
      )}
    </>
  );
}
