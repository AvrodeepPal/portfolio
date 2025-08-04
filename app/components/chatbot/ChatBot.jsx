"use client";
import Image from "next/image";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";
import { useAutoScroll } from "@/app/assets/hooks/useAutoScroll";
import { useChatBot } from "@/app/assets/hooks/useChatBot";
import { chatBotConfig, chatMessages, chatStyles, accessibilityLabels } from "@/app/assets/data/chatBotData";
import { assets } from "@/app/assets/connect/assets";

export default function ChatBox({ isDark = false }) {
  const {
    isOpen,
    messages,
    isTyping,
    isMobile,
    chatBodyRef,
    handleSendMessage,
    handleClearChat,
    toggleChat
  } = useChatBot();

  const scrollRef = useAutoScroll([messages, isTyping], { delay: 100 });

  return (
    <>
      <div className={`fixed ${isOpen && isMobile ? chatBotConfig.positioning.button.mobileOpen : chatBotConfig.positioning.button.default} z-[1000] ${chatStyles.animations.button}`}>
        <button
          onClick={toggleChat}
          className={`
            relative ${chatBotConfig.dimensions.button.width} ${chatBotConfig.dimensions.button.height} rounded-full shadow-lg ${chatStyles.animations.button}
            bg-[${chatBotConfig.colors.primary}] hover:bg-[${chatBotConfig.colors.primaryHover}] text-black
            ${isOpen ? "rotate-180" : "rotate-0"}
            focus:outline-none
          `}
          aria-label={isOpen ? accessibilityLabels.button.close : accessibilityLabels.button.open}
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
              : `${chatBotConfig.positioning.chat.desktop} ${chatBotConfig.dimensions.desktop.width} ${chatBotConfig.dimensions.desktop.height} ${chatBotConfig.dimensions.desktop.maxHeight} rounded-2xl`
            }
            shadow-2xl ${chatStyles.animations.slideIn}
            ${chatStyles.borders.light} backdrop-blur-md
            ${isDark
              ? chatStyles.backgrounds.dark.chat
              : chatStyles.backgrounds.light.chat}
          `}
          role="dialog"
          aria-label={accessibilityLabels.chat.dialog}
          aria-modal={isMobile ? "true" : "false"}
        >
          <div
            className={`
              flex items-center justify-between p-4 border-b
              ${chatStyles.backgrounds.light.header} ${chatStyles.text.light.primary}
              ${isMobile ? 'rounded-none' : 'rounded-t-2xl'}
            `}
          >
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-full bg-black/10 flex items-center justify-center border-2 border-black/20">
                <Image
                  src={assets.avro_star}
                  alt={`${chatBotConfig.name} Logo`}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="font-bold text-sm">{chatBotConfig.name}</h3>
                <p className="text-black/70 text-xs">{chatBotConfig.description}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <button
                onClick={handleClearChat}
                className="p-2 rounded-full hover:bg-black/10 transition-colors"
                aria-label={accessibilityLabels.actions.clear}
                title="Clear chat"
              >
                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button
                onClick={toggleChat}
                className="p-2 rounded-full hover:bg-black/10 transition-colors"
                aria-label={accessibilityLabels.actions.close}
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
              <div className={`flex justify-start ${chatStyles.animations.typing}`}>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#FDD000]/20 flex items-center justify-center">
                    <Image
                      src={assets.avro_star}
                      alt={`${chatBotConfig.name} typing`}
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
                      <span className="text-sm">{chatMessages.typing.content}</span>
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
              ${isDark ? chatStyles.backgrounds.dark.form.footer : chatStyles.backgrounds.light.form.footer}
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