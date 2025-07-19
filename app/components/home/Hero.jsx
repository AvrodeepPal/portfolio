"use client";
import React from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import Connection from "./Connection";

const Hero = ({ isDark }) => {
  return (
    <HeroBackground isDark={isDark}>
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 px-4">
        <div className="flex-1 max-w-2xl">
          <HeroContent isDark={isDark} />
        </div>
        <div className="flex-shrink-0">
          <Connection isDark={isDark} />
        </div>
      </div>
    </HeroBackground>
  );
};

export default Hero;