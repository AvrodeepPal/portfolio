export const chatBotConfig = {
  name: "AStarBot",
  description: "Avrodeep's Portfolio Assistant",
  maxMessageLength: 1000,
  typingDelay: {
    start: 800,
    response: 2200
  },
  dimensions: {
    button: {
      width: "w-14",
      height: "h-14"
    },
    desktop: {
      width: "w-[550px]",
      height: "h-[650px]",
      maxHeight: "max-h-[calc(100vh-120px)]"
    },
    mobile: {
      breakpoint: 768,
      textareaMaxHeight: 100
    },
    desktop_textarea: {
      maxHeight: 120
    }
  },
  positioning: {
    button: {
      default: "bottom-6 right-6",
      mobileOpen: "bottom-24 right-6"
    },
    chat: {
      desktop: "bottom-[100px] right-6",
      mobile: "inset-0"
    }
  },
  colors: {
    primary: "#FDD000",
    primaryHover: "#FFE44D",
    primaryActive: "#FFDF55",
    focusRing: "rgba(253, 208, 0, 0.2)"
  }
};

export const chatMessages = {
  initial: {
    content: "👋 Hi! I'm AStarBot, your AI assistant. How can I help you today?",
    sender: "bot"
  },
  demo: {
    content: "Thanks for your message! This is a demo response from AStarBot. Ask me anything about the portfolio.",
    sender: "bot"
  },
  typing: {
    content: "AStarBot is typing"
  }
};

export const chatFormConfig = {
  placeholder: "Ask AStarBot anything...",
  maxLength: 1000,
  minHeight: "2.5rem",
  characterWarningThreshold: 100,
  validation: {
    empty: "Please enter a valid message (no empty spaces only).",
    tooLong: "Message is too long. Please keep under 1000 characters."
  },
  instructions: {
    desktop: "Press Enter to send, Shift+Enter for newline",
    mobile: ""
  }
};

export const chatStyles = {
  animations: {
    slideIn: "animate-in slide-in-from-bottom-4 fade-in duration-300",
    messageSlideIn: {
      user: "animate-in slide-in-from-right-2 fade-in duration-300",
      bot: "animate-in slide-in-from-left-2 fade-in duration-300"
    },
    typing: "animate-in slide-in-from-left-2 fade-in duration-300",
    button: "transition-all duration-300 transform hover:scale-110 active:scale-95",
    message: "transition-all duration-200 cursor-pointer hover:shadow-md transform hover:scale-[1.02]"
  },
  backgrounds: {
    light: {
      chat: "bg-white/90",
      header: "bg-[#FDD000]",
      message: {
        user: "bg-[#FDD000] hover:bg-[#FFE44D]",
        bot: "bg-white/95 hover:bg-white"
      },
      form: {
        container: "bg-white/80 border-gray-300/40 focus-within:border-[#FDD000]/60",
        footer: "border-gray-200/50 bg-white/80"
      }
    },
    dark: {
      chat: "bg-slate-900/90",
      message: {
        bot: "bg-slate-800/80 hover:bg-slate-800/90"
      },
      form: {
        container: "bg-slate-800/60 border-slate-600/30 focus-within:border-[#FDD000]/60",
        footer: "border-slate-700/30 bg-slate-800/70"
      }
    }
  },
  borders: {
    light: "border-black/10",
    message: {
      bot: "border-[#FDD000]/30 hover:border-[#FDD000]/50"
    }
  },
  text: {
    light: {
      primary: "text-black",
      secondary: "text-gray-600",
      placeholder: "placeholder-gray-500",
      helper: "text-gray-500"
    },
    dark: {
      primary: "text-white",
      secondary: "text-gray-300",
      placeholder: "placeholder-gray-400",
      helper: "text-gray-400"
    }
  }
};

export const storageConfig = {
  key: "astarbot-messages",
  autoSave: true
};

export const accessibilityLabels = {
  button: {
    open: "Open AStarBot chat",
    close: "Close AStarBot chat"
  },
  chat: {
    dialog: "AStarBot chat assistant",
    messages: "Chat messages"
  },
  form: {
    textarea: "Type your message to AStarBot",
    send: "Send message to AStarBot",
    characterCount: "character-count"
  },
  actions: {
    clear: "Clear chat history",
    close: "Close AStarBot chat"
  }
};