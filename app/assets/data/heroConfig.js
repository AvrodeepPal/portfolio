export const heroConfig = {
  animations: {
    greeting: {
      initial: { opacity: 0, y: -20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { delay: 0.3, duration: 0.8, ease: "easeOut" },
    },
    title: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { delay: 0.7, duration: 1.0, ease: "easeOut" },
    },
    subtitle: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { delay: 1.0, duration: 0.8, ease: "easeOut" },
    },
    description: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { delay: 1.3, duration: 0.7, ease: "easeOut" },
    },
    button: {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { delay: 1.5, duration: 0.7, ease: "easeOut" },
    },
  },
  trueFocusConfig: {
    sentence: [" AI Engineering ", " Web Development "],
    blurAmount: 4,
    borderColor: "#fdd700",
    glowColor: "rgba(253, 215, 0, 0.6)",
    animationDuration: 0.7,
    pauseBetweenAnimations: 1.5,
    showAnd: true,
  },
  cvButtonConfig: {
    url: "https://drive.google.com/file/d/1biiOnfbyn7DnGQesvgodBLi3PhMoXwoM/view?usp=sharing",
  },
};