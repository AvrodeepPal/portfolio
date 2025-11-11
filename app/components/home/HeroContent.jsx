"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import TrueFocus from "./TrueFocus";
import ShinyText from "./ShinyText";
import { heroConfig } from "../../assets/data/heroConfig";

const HeroContent = ({ isDark }) => {
  const {
    animations,
    trueFocusConfig,
    cvButtonConfig,
  } = heroConfig;

  const handleCVClick = () => {
    window.open(cvButtonConfig.url, "_blank");
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center text-center gap-4 sm:gap-6 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-4xl w-full mx-auto">
      <motion.p
        {...animations.greeting}
        className="text-sm sm:text-lg font-medium"
        style={{ color: "#fdd700" }}
      >
        Hello!
      </motion.p>

      <motion.h1
        {...animations.title}
        className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-fg text-center w-full break-words leading-tight overflow-visible"
      >
        I'm{" "}
        <span
          style={{
            WebkitTextStroke: isDark ? "0.5px #f0f0f0" : "0.5px #000",
          }}
          className="inline-block leading-tight"
        >
          <ShinyText
            text="Avrodeep Pal"
            disabled={false}
            speed={3.0}
            className="font-bold"
          />
        </span>
        <span
          className="text-lg sm:text-2xl align-text-bottom ml-1 inline-block"
          style={{ color: "#fdd700" }}
        >
          {" "}
          &#9733;
        </span>
      </motion.h1>

      <motion.h2
        {...animations.subtitle}
        className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-medium text-fg flex flex-wrap justify-center items-center gap-1 sm:gap-2 text-center w-full max-w-full px-2"
      >
        <span className="whitespace-nowrap">My focus sharpens around</span>{" "}
        <TrueFocus
          sentence={trueFocusConfig.sentence}
          blurAmount={trueFocusConfig.blurAmount}
          borderColor={trueFocusConfig.borderColor}
          glowColor={trueFocusConfig.glowColor}
          animationDuration={trueFocusConfig.animationDuration}
          pauseBetweenAnimations={trueFocusConfig.pauseBetweenAnimations}
          showAnd={trueFocusConfig.showAnd}
        />
      </motion.h2>

      <motion.p
        {...animations.description}
        className="text-sm xs:text-base sm:text-lg text-fg/80 mt-2 text-center w-full max-w-full px-2"
      >
        Welcome to my Portfolio!
      </motion.p>

      <motion.div
        {...animations.button}
        className="flex flex-col sm:flex-row gap-4 mt-4 justify-center items-center px-2"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCVClick}
          className={`rounded-2xl border-2 border-dashed px-5 py-3 font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-xs xs:text-sm sm:text-base ${
            isDark
              ? "border-white hover:shadow-[-4px_4px_4px_white]"
              : "border-black hover:shadow-[-4px_4px_4px_black]"
          }`}
          style={{
            minWidth: "160px",
            maxWidth: "fit-content",
          }}
        >
          <span className="whitespace-nowrap">Open CV</span> <FiArrowRight />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroContent;