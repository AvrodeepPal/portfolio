"use client";

import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion, useMotionValue, useMotionTemplate, animate } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import TrueFocus from "./effects/TrueFocus";
import ShinyText from "./effects/ShinyText";

const COLORS_TOP = ["#fdd700", "#ffc72c", "#fbb034", "#ffac1c"];
const COLORS_TOP_DARK = ["#333333", "#444444", "#555555", "#666666"];
const STAR_COLORS = ["#ff0000", "#ff4d00", "#ff9900", "#ffe660"];

const Hero = ({ isDark }) => {
  const color = useMotionValue(isDark ? COLORS_TOP_DARK[0] : COLORS_TOP[0]);
  const starColor = useMotionValue(STAR_COLORS[0]);

  useEffect(() => {
    animate(color, isDark ? COLORS_TOP_DARK : COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });

    animate(starColor, STAR_COLORS, {
      ease: "easeInOut",
      duration: 8,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [isDark]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, ${isDark ? '#171717' : '#ffffff'} 60%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className={`relative grid h-screen place-content-center overflow-hidden ${isDark ? 'bg-[#171717]' : 'bg-white'} px-4 py-24 ${isDark ? 'text-[#ffffff]' : 'text-gray-800'}`}
      role="main"
      aria-label="Hero Section"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-top gap-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg font-medium"
          style={{ color: "#fdd700" }}
        >
          Hello!
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`text-4xl sm:text-6xl font-bold ${isDark ? 'text-[#ffffff]' : 'text-gray-900'}`}
        >
          I'm{" "}
          <span
            style={{
              WebkitTextStroke: isDark ? "0.5px #ffffff" : "0.5px #000",
            }}
          >
            <ShinyText 
              text="Avrodeep Pal" 
              disabled={false} 
              speed={3} 
              className="font-bold" 
            />
          </span>
          <sub className="text-2xl align-bottom ml-1" style={{ color: "#fdd700" }}>
            {" "}
            &#9733;
          </sub>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={`text-2xl sm:text-3xl font-medium ${isDark ? 'text-[#ffffff]' : 'text-gray-800'} flex flex-wrap justify-center items-center gap-2`}
        >
          My focus sharpens around{" "}
          <TrueFocus
            sentence={[" Data Science ", " Web Development "]}
            blurAmount={4}
            borderColor="#fdd700"
            glowColor="rgba(253, 215, 0, 0.6)"
            animationDuration={0.6}
            pauseBetweenAnimations={1.2}
            showAnd={true}
          />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className={`text-base sm:text-lg ${isDark ? 'text-[#ffffff]' : 'text-gray-600'} mt-2`}
        >
          Welcome to my Portfolio!
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ border, boxShadow }}
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1biiOnfbyn7DnGQesvgodBLi3PhMoXwoM/view?usp=sharing",
                "_blank"
              )
            }
            className={`flex items-center gap-2 px-6 py-2 ${isDark ? 'bg-[#171717] text-[#ffffff]' : 'bg-white text-black'} border rounded-lg font-medium transition-colors`}
          >
            Open CV <FiArrowRight />
          </motion.button>
        </motion.div>
      </div>

      {/* Golden Stars Background */}
      <div className="absolute inset-0 z-0">
        <Canvas frameloop="always" dpr={[1, 2]}>
          <Stars
            radius={50}
            count={2000}
            factor={3.5}
            fade
            speed={1.5}
            color={starColor.get()} // bind live animated value
          />
        </Canvas>
      </div>
    </motion.section>
  );
};

export default Hero;