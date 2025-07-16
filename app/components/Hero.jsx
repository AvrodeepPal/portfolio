"use client";
import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import TrueFocus from "./effects/TrueFocus";
import ShinyText from "./effects/ShinyText";

const BG_COLORS = ["#ff0000", "#ff4d00", "#fdd700", "#ffffff"];
const STAR_COLORS = ["#ff0000", "#ff4d00", "#fdd700"];

const Hero = ({ isDark }) => {
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

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid h-screen place-content-center overflow-hidden px-4 py-24 text-fg"
      role="main"
      aria-label="Hero Section"
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-top gap-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="text-lg font-medium"
          style={{ color: "#fdd700" }}
        >
          Hello!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.7, duration: 1.0, ease: "easeOut" }}
          className="text-4xl sm:text-6xl font-bold text-fg"
        >
          I'm{" "}
          <span
            style={{
              WebkitTextStroke: isDark ? "0.5px #f0f0f0" : "0.5px #000",
            }}
          >
            <ShinyText
              text="Avrodeep Pal"
              disabled={false}
              speed={3.0}
              className="font-bold"
            />
          </span>
          <sub
            className="text-2xl align-bottom ml-1"
            style={{ color: "#fdd700" }}
          >
            {" "}
            &#9733;
          </sub>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          className="text-2xl sm:text-3xl font-medium text-fg flex flex-wrap justify-center items-center gap-2"
        >
          My focus sharpens around{" "}
          <TrueFocus
            sentence={[" Data Science ", " Web Development "]}
            blurAmount={4}
            borderColor="#fdd700"
            glowColor="rgba(253, 215, 0, 0.6)"
            animationDuration={0.7}
            pauseBetweenAnimations={1.5}
            showAnd={true}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 1.3, duration: 0.7, ease: "easeOut" }}
          className="text-base sm:text-lg text-fg/80 mt-2"
        >
          Welcome to my Portfolio!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 1.5, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1biiOnfbyn7DnGQesvgodBLi3PhMoXwoM/view?usp=sharing",
                "_blank"
              )
            }
            className={`rounded-2xl border-2 border-dashed px-6 py-3 font-semibold uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
              isDark
                ? "border-white hover:shadow-[-4px_4px_4px_white]"
                : "border-black hover:shadow-[-4px_4px_4px_black]"
            }`}
          >
            Open CV <FiArrowRight />
          </motion.button>
        </motion.div>
      </div>

      {isDark && (
        <div className="absolute inset-0 z-0">
          <Canvas>
            <Stars
              radius={10}
              count={1000}
              factor={3}
              fade
              speed={1}
              color={starColor}
            />
          </Canvas>
        </div>
      )}
    </motion.section>
  );
};

export default Hero;