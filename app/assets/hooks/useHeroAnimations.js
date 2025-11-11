import { useEffect } from "react";
import { useMotionValue, useMotionTemplate, animate } from "framer-motion";

const BG_COLORS = ["#ff0000", "#ff4d00", "#fdd700", "#ffffff"];
const STAR_COLORS = ["#ff0000", "#ff4d00", "#fdd700"];

export const useHeroAnimations = (isDark) => {
  const color = useMotionValue(BG_COLORS[0]);
  const starColor = useMotionValue(STAR_COLORS[0]);

  useEffect(() => {
    animate(color, BG_COLORS, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });

    animate(starColor, isDark ? STAR_COLORS : [STAR_COLORS[0]], {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [isDark, color, starColor]);

  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 135% at 50% 0%, var(--bg) 55%, ${color})
  `;

  return {
    backgroundImage,
    starColor,
  };
};