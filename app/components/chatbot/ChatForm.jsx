// app/chatbot/ChatForm.jsx
"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatForm({ onSend, isDark = false, isMobile = false }) {
  const [message, setMessage] = useState("");
  const [isComposing, setIsComposing] = useState(false);
  const textareaRef = useRef(null);

  // Auto-resize textarea with proper height constraints
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "2.5rem"; // Reset to min height
      const computed = window.getComputedStyle(textarea);
      const height =
        parseInt(computed.getPropertyValue("border-top-width"), 10) +
        parseInt(computed.getPropertyValue("padding-top"), 10) +
        textarea.scrollHeight +
        parseInt(computed.getPropertyValue("padding-bottom"), 10) +
        parseInt(computed.getPropertyValue("border-bottom-width"), 10);
      
      // Max height varies by screen size
      const maxHeight = isMobile ? 100 : 128; // ~3 lines on mobile, 4 on desktop
      textarea.style.height = Math.min(height, maxHeight) + "px";
    }
  }, [message, isMobile]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    
    // Enhanced validation
    if (trimmedMessage.length === 0 || trimmedMessage.length > 1000 || isComposing) {
      return;
    }
    
    onSend(trimmedMessage);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && !isComposing) {
      e.preventDefault();
      const trimmedMessage = message.trim();
      if (trimmedMessage.length > 0 && trimmedMessage.length <= 1000) {
        onSend(trimmedMessage);
        setMessage("");
      }
    }
  };

  const isDisabled = message.trim().length === 0 || message.length > 1000;
  const charactersLeft = 1000 - message.length;
  const isNearLimit = charactersLeft < 100;

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Input Container */}
      <div
        className={`
          relative rounded-xl border transition-all duration-200
          ${isDark
            ? "bg-slate-800/50 border-slate-600/30 focus-within:border-[#FDD000]/50"
            : "bg-white/70 border-gray-300/30 focus-within:border-[#FDD000]/50"}
          focus-within:ring-2 focus-within:ring-[#FDD000]/20
        `}
      >
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          placeholder="Type your message to AStarBot..."
          className={`
            w-full px-4 py-3 pr-12 rounded-xl resize-none border-none outline-none
            bg-transparent text-sm leading-relaxed
            ${isDark ? "text-white placeholder-gray-400" : "text-gray-900 placeholder-gray-500"}
            min-h-[2.5rem] ${isMobile ? 'max-h-[100px]' : 'max-h-[128px]'} overflow-auto
          `}
          rows={1}
          aria-label="Type your message to AStarBot"
          aria-describedby="send-button character-count"
          maxLength={1000}
        />

        {/* Send Button */}
        <button
          type="submit"
          disabled={isDisabled}
          className={`
            absolute right-2 bottom-2 w-8 h-8 rounded-lg flex items-center justify-center
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-[#FDD000]/50 focus:ring-offset-2
            ${isDark ? "focus:ring-offset-slate-800/50" : "focus:ring-offset-white/70"}
            ${isDisabled
              ? `opacity-40 cursor-not-allowed ${isDark ? "bg-gray-600" : "bg-gray-300"}`
              : `bg-[#FDD000] hover:bg-[#FFE44D] active:bg-[#FFDF55] cursor-pointer transform hover:scale-110 active:scale-95 shadow-sm hover:shadow-md`}
          `}
          aria-label="Send message to AStarBot"
          id="send-button"
          role="button"
        >
          <svg className={`w-4 h-4 ${isDisabled ? "text-gray-500" : "text-black"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>

      {/* Helper & Character Count - Hide on mobile to save space */}
      {!isMobile && (
        <div className={`flex items-center justify-between text-xs ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          <span>Press Enter to send, Shift+Enter for newline</span>
          <span 
            id="character-count"
            className={`${isNearLimit ? "text-red-500 font-medium" : ""}`}
          >
            {charactersLeft} characters left
          </span>
        </div>
      )}

      {/* Mobile character count - simplified */}
      {isMobile && isNearLimit && (
        <div className={`text-xs text-center ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          <span 
            id="character-count"
            className={`${isNearLimit ? "text-red-500 font-medium" : ""}`}
          >
            {charactersLeft} characters left
          </span>
        </div>
      )}

      {/* Error Messages */}
      {message.length > 1000 && (
        <div
          className={`
            text-xs px-3 py-2 rounded-lg
            ${isDark ? "bg-red-900/20 text-red-400 border border-red-800/30" : "bg-red-50 text-red-600 border border-red-200"}
          `}
          role="alert"
        >
          Message is too long. Please keep under 1000 characters.
        </div>
      )}

      {message.trim().length === 0 && message.length > 0 && (
        <div
          className={`
            text-xs px-3 py-2 rounded-lg
            ${isDark ? "bg-yellow-900/20 text-yellow-400 border border-yellow-800/30" : "bg-yellow-50 text-yellow-600 border border-yellow-200"}
          `}
          role="alert"
        >
          Please enter a valid message (no empty spaces only).
        </div>
      )}
    </form>
  );
}
