"use client";
import React from "react";
import Image from "next/image";
import { assets, socialMediaLinks } from "@/app/assets/connect/assets";

const Connection = ({ isDark }) => {
  const radius = 80;

  const getIconSrc = (item) => {
    if (item.key === "github" || item.key === "twitterx") {
      return isDark ? item.iconDark : item.iconLight;
    }
    return item.icon;
  };

  const getIconPosition = (index, totalItems) => {
    const angle = (360 / totalItems) * index;
    const x = radius * Math.cos((angle * Math.PI) / 180).toFixed(6);
    const y = radius * Math.sin((angle * Math.PI) / 180).toFixed(6);
    return { x, y };
  };

  return (
    <div className="group relative w-[220px] h-[220px] mx-auto flex items-center justify-center z-20">

      <div className="absolute w-16 h-16 rounded-full bg-white dark:bg-neutral-800 shadow-lg flex items-center justify-center z-30">
        <Image
          src={assets.avro_star}
          alt="Avro Logo"
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
      
      <div className="absolute w-full h-full animate-spin-slow group-hover:animate-none">
        {socialMediaLinks.map((item, index) => {
          const { x, y } = getIconPosition(index, socialMediaLinks.length);
          const iconSrc = getIconSrc(item);

          return (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute w-8 h-8"
              style={{ 
                left: '50%',
                top: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` 
              }}
              aria-label={item.alt}
            >

              <div className="animate-counter-spin-slow group-hover:animate-none w-full h-full">
                <Image
                  src={iconSrc}
                  alt={item.alt}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Connection;