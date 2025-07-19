"use client";
import React from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

const Hero = ({ isDark }) => {
  return (
    <HeroBackground isDark={isDark}>
      <HeroContent isDark={isDark} />
    </HeroBackground>
  );
};

export default Hero;