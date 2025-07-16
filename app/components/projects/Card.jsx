'use client';
import React from 'react';
import Image from 'next/image';

const Card = ({ title, image, description, lang, isLive, code, live }) => {
  return (
    <div
      className="bg-transparent backdrop-blur-[20px] bg-[linear-gradient(120deg,rgba(255,255,255,0.3),rgba(0,0,0,0.2))] p-6 rounded-xl shadow-lg
        flex flex-col items-center justify-center overflow-hidden
        border-border border transition-transform hover:scale-[1.02]
        w-full min-w-[25rem]"
      style={{
        boxShadow: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '5px 5px 5px 5px #fdd017';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <h3 className="text-xl font-semibold text-left w-full mb-4 text-fg">{title}</h3>

      <div className="w-full h-52 md:h-64 relative mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 800vw, 33vw"
        />
      </div>

      <p className="text-fg/70 text-sm mb-4 w-full text-left leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 justify-start w-full mb-4">
        {lang.map((tech, index) => (
          <span
            key={index}
            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100 px-3 py-1 rounded-full text-xs font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="w-full flex justify-center gap-4">
        <a
          href={code}
          target="_blank"
          className="px-6 py-2 text-white text-xl font-medium rounded-lg
            focus:ring ring-black ring-opacity-10 gradient element-to-rotate transition"
        >
          Code
        </a>
        
        {isLive === 1 && (
          <a
            href={live}
            target="_blank"
            className="px-6 py-2 text-white text-xl font-medium rounded-lg
              focus:ring ring-black ring-opacity-10 gradient element-to-rotate transition"
          >
            Live
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;