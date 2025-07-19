"use client";
import React from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useHeroAnimations } from "@/app/assets/hooks/useHeroAnimations";

const HeroBackground = ({ isDark, children }) => {
  const { backgroundImage, starColor } = useHeroAnimations(isDark);

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen h-screen place-content-center overflow-hidden px-3 xs:px-4 sm:px-6 py-16 sm:py-24 text-fg w-full max-w-full"
      role="main"
      aria-label="Hero Section"
    >
      {children}
      
      {isDark && (
        <div className="absolute inset-0 z-0 overflow-hidden">
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

export default HeroBackground;