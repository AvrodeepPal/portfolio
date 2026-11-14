"use client";
import { useEffect } from "react";
import Image from "next/image";
import ChatMessage from "./ChatMessage";
import ChatForm from "./ChatForm";
import { useAutoScroll } from "@/app/assets/hooks/useAutoScroll";
import { chatBotConfig, chatMessages, chatStyles, accessibilityLabels } from "@/app/assets/data/chatBotData";
import { assets } from "@/app/assets/connect/assets";

// The open chat panel. Loaded on demand by ChatBot, so react-markdown and the
// rest of this tree stay out of the initial page bundle.
export default function ChatWindow({
  isDark,
  isMobile,
  messages,
  isTyping,
  isBusy,
  chatBodyRef,
  handleSendMessage,
  handleClearChat,
  toggleChat,
  isMaximized = false,
  onToggleMaximize
}) {
  const scrollRef = useAutoScroll([messages, isTyping], { delay: 100 });
  const { desktop, maximized } = chatBotConfig.dimensions;
  const gutter = isMaximized ? maximized.gutter : "px-4";

  // Esc steps back out of maximized; a second Esc is left to the page.
  useEffect(() => {
    if (!isMaximized) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onToggleMaximize?.();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMaximized, onToggleMaximize]);

  return (
    <>
    {isMaximized && (
      <div
        className="fixed inset-0 z-[998] bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-300"
        onClick={onToggleMaximize}
        aria-hidden="true"
      />
    )}
    <div
      className={`
        fixed z-[999] flex flex-col
        ${isMobile
          ? 'inset-0 w-full h-dvh rounded-none'
          : `${isMaximized
              ? `${maximized.position} ${maximized.size}`
              : `${chatBotConfig.positioning.chat.desktop} ${desktop.width} ${desktop.height} ${desktop.maxHeight}`
            } rounded-2xl transition-[width,height,max-height,bottom,right] duration-300 ease-out motion-reduce:transition-none`
        }
        shadow-2xl ${chatStyles.animations.slideIn}
        ${chatStyles.borders.light} backdrop-blur-md
        ${isDark
          ? chatStyles.backgrounds.dark.chat
          : chatStyles.backgrounds.light.chat}
      `}
      role="dialog"
      aria-label={accessibilityLabels.chat.dialog}
      aria-modal={isMobile || isMaximized ? "true" : "false"}
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
          {!isMobile && (
            <button
              onClick={onToggleMaximize}
              className="p-2 rounded-full hover:bg-black/10 transition-colors"
              aria-label={isMaximized ? accessibilityLabels.actions.restore : accessibilityLabels.actions.maximize}
              aria-pressed={isMaximized}
              title={isMaximized ? "Restore (Esc)" : "Maximize"}
            >
              <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMaximized ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4v5H4m11-5v5h5M9 20v-5H4m11 5v-5h5" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9V4h5m6 0h5v5M4 15v5h5m6 0h5v-5" />
                )}
              </svg>
            </button>
          )}
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
        className={`flex flex-col flex-1 min-h-0 overflow-y-auto ${gutter} py-4 space-y-4 ${isMobile ? 'pb-24' : 'pb-20'} scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600`}
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
            isMaximized={isMaximized}
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
                  ${isDark ? "bg-neutral-800/70 text-gray-300" : "bg-white/90 text-gray-600"}
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
          shrink-0 ${gutter} pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] border-t
          ${isDark ? chatStyles.backgrounds.dark.form.footer : chatStyles.backgrounds.light.form.footer}
          ${isMobile ? 'rounded-none' : 'rounded-b-2xl'}
          backdrop-blur-sm
        `}
      >
        <ChatForm onSend={handleSendMessage} isDark={isDark} isMobile={isMobile} isBusy={isBusy} />
      </div>
    </div>
    </>
  );
}
