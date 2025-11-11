"use client";
import { useChatForm } from "@/app/assets/hooks/useChatBot";
import { chatFormConfig, chatBotConfig, chatStyles, accessibilityLabels } from "@/app/assets/data/chatBotData";

export default function ChatForm({ onSend, isDark = false, isMobile = false }) {
  const {
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
  } = useChatForm(onSend, isMobile);

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div
        className={`
          relative rounded-xl border-2 transition-all duration-200
          ${isDark
            ? chatStyles.backgrounds.dark.form.container
            : chatStyles.backgrounds.light.form.container}
          focus-within:ring-2 focus-within:ring-[${chatBotConfig.colors.primary}]/20 focus-within:shadow-lg
        `}
      >
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          onCompositionStart={() => setIsComposing(true)}
          onCompositionEnd={() => setIsComposing(false)}
          placeholder={chatFormConfig.placeholder}
          className={`
            w-full px-4 py-3 pr-14 rounded-xl resize-none border-none outline-none
            bg-transparent text-sm leading-relaxed
            ${isDark 
              ? `${chatStyles.text.dark.primary} ${chatStyles.text.dark.placeholder}` 
              : `${chatStyles.text.light.primary} ${chatStyles.text.light.placeholder}`}
            ${chatFormConfig.minHeight} ${isMobile ? 'max-h-[100px]' : 'max-h-[120px]'} overflow-auto
          `}
          rows={1}
          aria-label={accessibilityLabels.form.textarea}
          aria-describedby="send-button character-count"
          maxLength={chatFormConfig.maxLength}
        />

        <button
          type="submit"
          disabled={isDisabled}
          className={`
            absolute right-2 bottom-2 w-10 h-10 rounded-xl flex items-center justify-center
            transition-all duration-200
            focus:outline-none focus:ring-2 focus:ring-[${chatBotConfig.colors.primary}]/50 focus:ring-offset-2
            ${isDark ? "focus:ring-offset-slate-800/60" : "focus:ring-offset-white/80"}
            ${isDisabled
              ? `opacity-40 cursor-not-allowed ${isDark ? "bg-gray-600" : "bg-gray-300"}`
              : `bg-[${chatBotConfig.colors.primary}] hover:bg-[${chatBotConfig.colors.primaryHover}] active:bg-[${chatBotConfig.colors.primaryActive}] cursor-pointer transform hover:scale-110 active:scale-95 shadow-md hover:shadow-lg`}
          `}
          aria-label={accessibilityLabels.form.send}
          id="send-button"
          role="button"
        >
          <svg className={`w-5 h-5 ${isDisabled ? "text-gray-500" : "text-black"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>

      {!isMobile && (
        <div className={`flex items-center justify-between text-xs ${isDark ? chatStyles.text.dark.helper : chatStyles.text.light.helper}`}>
          <span>{chatFormConfig.instructions.desktop}</span>
          <span 
            id={accessibilityLabels.form.characterCount}
            className={`flex items-center space-x-1 ${isNearLimit ? "text-red-500 font-medium" : ""}`}
          >
            <span>{charactersLeft}</span>
            <span>characters left</span>
          </span>
        </div>
      )}

      {isMobile && isNearLimit && (
        <div className={`text-xs text-center ${isDark ? chatStyles.text.dark.helper : chatStyles.text.light.helper}`}>
          <span 
            id={accessibilityLabels.form.characterCount}
            className={`${isNearLimit ? "text-red-500 font-medium" : ""}`}
          >
            {charactersLeft} characters left
          </span>
        </div>
      )}

      {message.length > chatBotConfig.maxMessageLength && (
        <div
          className={`
            text-xs px-3 py-2 rounded-lg flex items-center space-x-1
            ${isDark ? "bg-red-900/20 text-red-400 border border-red-800/30" : "bg-red-50 text-red-600 border border-red-200"}
          `}
          role="alert"
        >
          <span>⚠️</span>
          <span>{chatFormConfig.validation.tooLong}</span>
        </div>
      )}

      {message.trim().length === 0 && message.length > 0 && (
        <div
          className={`
            text-xs px-3 py-2 rounded-lg flex items-center space-x-1
            ${isDark ? "bg-yellow-900/20 text-yellow-400 border border-yellow-800/30" : "bg-yellow-50 text-yellow-600 border border-yellow-200"}
          `}
          role="alert"
        >
          <span>💡</span>
          <span>{chatFormConfig.validation.empty}</span>
        </div>
      )}
    </form>
  );
}