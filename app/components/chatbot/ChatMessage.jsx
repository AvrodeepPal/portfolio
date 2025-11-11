"use client";
import Image from "next/image";
import { useChatMessage } from "@/app/assets/hooks/useChatBot";
import { chatBotConfig, chatStyles } from "@/app/assets/data/chatBotData";
import { assets } from "@/app/assets/connect/assets";

export default function ChatMessage({ sender, content, timestamp, isDark = false, isMobile = false }) {
  const { showTimestamp, formatTime, toggleTimestamp } = useChatMessage();
  
  const isUser = sender === "user";
  const isBot = sender === "bot";

  return (
    <div 
      className={`flex ${isUser ? "justify-end" : "justify-start"} group ${isUser ? chatStyles.animations.messageSlideIn.user : chatStyles.animations.messageSlideIn.bot}`} 
      onClick={toggleTimestamp}
    >
      <div
        className={`
          ${isMobile ? 'max-w-[85%]' : 'max-w-[350px]'} px-4 py-3 rounded-2xl ${chatStyles.animations.message}
          ${isUser
            ? `${chatStyles.backgrounds.light.message.user} ${chatStyles.text.light.primary} rounded-br-sm shadow-md hover:shadow-lg`
            : `rounded-bl-sm ${chatStyles.borders.message.bot} shadow-sm ${
                isDark
                  ? `${chatStyles.backgrounds.dark.message.bot} ${chatStyles.text.dark.primary}`
                  : `${chatStyles.backgrounds.light.message.bot} ${chatStyles.text.light.primary}`
              }`
          }
        `}
      >
        {isBot && (
          <div className="flex items-start space-x-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-[#FDD000]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Image
                src={assets.avro_star}
                alt={chatBotConfig.name}
                width={16}
                height={16}
                className="rounded-full"
              />
            </div>
            <span className={`${isDark ? chatStyles.text.dark.secondary : chatStyles.text.light.secondary} text-xs font-medium`}>
              {chatBotConfig.name}
            </span>
          </div>
        )}

        <div 
          className={`text-sm leading-relaxed whitespace-pre-wrap break-words ${isUser ? chatStyles.text.light.primary : isDark ? chatStyles.text.dark.primary : chatStyles.text.light.primary}`}
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
        <div className={`flex items-end pb-1 px-2 text-xs ${isDark ? chatStyles.text.dark.helper : chatStyles.text.light.helper} ${isUser ? "order-first" : "order-last"} animate-in fade-in duration-200`}>
          <span className="whitespace-nowrap">{formatTime(timestamp)}</span>
        </div>
      )}
    </div>
  );
}