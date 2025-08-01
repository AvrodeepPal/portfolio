// app/chatbot/ChatMessage.jsx
"use client";
import { useState } from "react";

export default function ChatMessage({ sender, content, timestamp, isDark = false, isMobile = false }) {
  const [showTimestamp, setShowTimestamp] = useState(false);
  const isUser = sender === "user";
  const isBot = sender === "bot";

  const formatTime = (date) =>
    new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }).format(date);

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} group`} onClick={() => setShowTimestamp((v) => !v)}>
      <div
        className={`
          ${isMobile ? 'max-w-[85%]' : 'max-w-[320px]'} px-4 py-3 rounded-2xl transition-all duration-200 cursor-pointer
          ${isUser
            ? `bg-[#FDD000] text-black rounded-br-sm ${isDark ? "shadow-lg" : "shadow-md"} hover:bg-[#FFE44D] transform hover:scale-[1.02]`
            : `rounded-bl-sm border border-[#FDD000]/20 ${
                isDark
                  ? "bg-slate-800/70 text-white hover:bg-slate-800/90"
                  : "bg-white/90 text-gray-900 hover:bg-white"
              } hover:border-[#FDD000]/40 transform hover:scale-[1.02]`
          }
        `}
      >
        {isBot && (
          <div className="flex items-start space-x-2 mb-1">
            <img 
              src="/favicon.png" 
              alt="AStarBot" 
              className="w-5 h-5 rounded-full border border-[#FDD000]/50 flex-shrink-0 mt-0.5"
              onError={(e) => {
                // Fallback if favicon doesn't exist
                e.target.style.display = 'none';
              }}
            />
            <span className={`${isDark ? "text-gray-300" : "text-gray-600"} text-xs font-medium`}>
              AStarBot
            </span>
          </div>
        )}

        <div 
          className={`text-sm leading-relaxed whitespace-pre-wrap break-words ${isUser ? "text-black" : isDark ? "text-white" : "text-gray-900"}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {/* Removed tick marks as requested - no delivery indicators */}
      </div>

      {showTimestamp && (
        <div className={`flex items-end pb-1 px-2 text-xs ${isDark ? "text-gray-400" : "text-gray-500"} ${isUser ? "order-first" : "order-last"}`}>
          <span className="whitespace-nowrap">{formatTime(timestamp)}</span>
        </div>
      )}
    </div>
  );
}
