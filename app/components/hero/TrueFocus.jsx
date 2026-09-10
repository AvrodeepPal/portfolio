import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TrueFocus = ({
  sentence,
  blurAmount = 3,
  borderColor = "#fdd700",
  glowColor = "rgba(255, 225, 20, 0.6)",
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  showAnd = false,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const words = Array.isArray(sentence) ? sentence : sentence.split(" ");

  useEffect(() => {
    if (words.length === 0) return;

    const animateNextWord = () => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, animationDuration * 1000);
    };

    const interval = setInterval(animateNextWord, (animationDuration + pauseBetweenAnimations) * 1000);

    return () => clearInterval(interval);
  }, [words.length, animationDuration, pauseBetweenAnimations]);

  return (
    <div className="inline-flex flex-wrap gap-1 justify-center">
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <motion.span
            className={`inline-block font-semibold transition-all duration-300 ${
              index === currentWordIndex ? "text-[#fdd700]" : "text-fg/60"
            }`}
            style={{
              filter: index === currentWordIndex ? "blur(0px)" : `blur(${blurAmount}px)`,
              textShadow: index === currentWordIndex ? `0 0 10px ${glowColor}` : "none",
              border: index === currentWordIndex ? `1px solid ${borderColor}` : "1px solid transparent",
              borderRadius: "4px",
              padding: "2px 6px",
              boxShadow: index === currentWordIndex ? `0 0 15px ${glowColor}` : "none",
            }}
            animate={{
              scale: index === currentWordIndex ? 1.05 : 1,
              opacity: index === currentWordIndex ? 1 : 0.7,
            }}
            transition={{
              duration: animationDuration,
              ease: "easeInOut",
            }}
          >
            {word}
          </motion.span>
          {showAnd && index === words.length - 2 && (
            <span className="text-fg mx-1">and</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default TrueFocus;