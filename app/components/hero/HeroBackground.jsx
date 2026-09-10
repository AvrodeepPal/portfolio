"use client";
import React from "react";
import { Spotlight } from "./HeroSpotlight";

const HeroBackground = ({ isDark, children }) => {
  return (
    <section
      className="relative grid min-h-screen h-screen place-content-center overflow-hidden px-3 xs:px-4 sm:px-6 py-16 sm:py-24 text-fg w-full max-w-full"
      role="main"
      aria-label="Hero Section"
    >
      {isDark && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Spotlight />
        </div>
      )}

      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
};

export default HeroBackground;
