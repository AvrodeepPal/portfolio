"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useChatBot } from "@/app/assets/hooks/useChatBot";
import { chatBotConfig, chatStyles, accessibilityLabels } from "@/app/assets/data/chatBotData";
import { useTheme } from "../ThemeProvider";

// Fetched on first hover/focus of the launcher, so it is usually ready by the click.
const loadChatWindow = () => import("./ChatWindow");
const ChatWindow = dynamic(loadChatWindow, { ssr: false });

export default function ChatBox() {
  const { isDark } = useTheme();
  const chat = useChatBot();
  const { isOpen, isMobile, toggleChat } = chat;

  // Desktop-only. Lives here, not in ChatWindow, because the launcher has to
  // hide while the window covers its corner.
  const [maximized, setMaximized] = useState(false);
  const isMaximized = maximized && isOpen && !isMobile;

  useEffect(() => {
    if (!isOpen) setMaximized(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isMaximized) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMaximized]);

  return (
    <>
      {/* Full-screen on mobile or maximized, so the header's close button takes over from the launcher. */}
      {!(isOpen && (isMobile || isMaximized)) && (
        <div className={`fixed ${chatBotConfig.positioning.button.default} z-[1000] ${chatStyles.animations.button}`}>
          <button
            onClick={toggleChat}
            onPointerEnter={loadChatWindow}
            onFocus={loadChatWindow}
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
      )}

      {isOpen && (
        <ChatWindow
          {...chat}
          isDark={isDark}
          isMaximized={isMaximized}
          onToggleMaximize={() => setMaximized((v) => !v)}
        />
      )}
    </>
  );
}
