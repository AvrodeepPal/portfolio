// app/chatbot/ChatMessage.jsx
"use client";
import { useState } from "react";
import Image from "next/image";
import { assets } from "@/app/assets/connect/assets";

export default function ChatMessage({ sender, content, timestamp, isDark = false, isMobile = false }) {
  const [showTimestamp, setShowTimestamp] = useState(false);
  const isUser = sender === "user";
  const isBot = sender === "bot";

  const formatTime = (date) =>
    new Intl.DateTimeFormat("en-US", { hour: "2-digit", minute: "2-digit", hour12: true }).format(date);

  return (
    <div 
      className={`flex ${isUser ? "justify-end" : "justify-start"} group animate-in slide-in-from-${isUser ? "right" : "left"}-2 fade-in duration-300`} 
      onClick={() => setShowTimestamp((v) => !v)}
    >
      <div
        className={`
          ${isMobile ? 'max-w-[85%]' : 'max-w-[350px]'} px-4 py-3 rounded-2xl transition-all duration-200 cursor-pointer
          ${isUser
            ? `bg-[#FDD000] text-black rounded-br-sm shadow-md hover:shadow-lg hover:bg-[#FFE44D] transform hover:scale-[1.02]`
            : `rounded-bl-sm border border-[#FDD000]/30 shadow-sm hover:shadow-md ${
                isDark
                  ? "bg-slate-800/80 text-white hover:bg-slate-800/90"
                  : "bg-white/95 text-gray-900 hover:bg-white"
              } hover:border-[#FDD000]/50 transform hover:scale-[1.02]`
          }
        `}
      >
        {isBot && (
          <div className="flex items-start space-x-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-[#FDD000]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Image
                src={assets.avro_star}
                alt="AStarBot"
                width={16}
                height={16}
                className="rounded-full"
              />
            </div>
            <span className={`${isDark ? "text-gray-300" : "text-gray-600"} text-xs font-medium`}>
              AStarBot
            </span>
          </div>
        )}

        <div 
          className={`text-sm leading-relaxed whitespace-pre-wrap break-words ${isUser ? "text-black" : isDark ? "text-white" : "text-gray-900"}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {isUser && (
          <div className="flex justify-end mt-1 opacity-70">
            <svg className="w-3 h-3 text-black/50" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      {showTimestamp && (
        <div className={`flex items-end pb-1 px-2 text-xs ${isDark ? "text-gray-400" : "text-gray-500"} ${isUser ? "order-first" : "order-last"} animate-in fade-in duration-200`}>
          <span className="whitespace-nowrap">{formatTime(timestamp)}</span>
        </div>
      )}
    </div>
  );
}
