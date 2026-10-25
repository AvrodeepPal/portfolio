export const heroConfig = {
  animations: {
    greeting: {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.1, duration: 0.6, ease: "easeOut" },
    },
    title: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.25, duration: 0.7, ease: "easeOut" },
    },
    subtitle: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.45, duration: 0.6, ease: "easeOut" },
    },
    description: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.6, duration: 0.5, ease: "easeOut" },
    },
    now: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.65, duration: 0.5, ease: "easeOut" },
    },
    button: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.7, duration: 0.5, ease: "easeOut" },
    },
  },
  trueFocusConfig: {
    sentence: [" LLM Infrastructure ", " Reasoning Models "],
    blurAmount: 4,
    borderColor: "#fdd700",
    glowColor: "rgba(253, 215, 0, 0.6)",
    animationDuration: 0.7,
    pauseBetweenAnimations: 1.5,
    showAnd: true,
  },
  cvButtonConfig: {
    url: "https://drive.google.com/file/d/10GftRhc4D74p6BKakwCvMkIYNl3HSFSj/view?usp=sharing",
  },
  nowConfig: {
    reading: "DeepSeek-R1",
    building: {
      label: "ReasoningPractice",
      url: "https://github.com/AvrodeepPal/ReasoningPractice",
    },
  },
};