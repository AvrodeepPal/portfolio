'use client';
import React from 'react';
import Image from 'next/image';

const Card = ({ title, image, description, lang, live }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-6 rounded-xl overflow-hidden
        border border-black/15 transition-transform hover:scale-[1.02]
        bg-white backdrop-blur-sm w-full min-w-[25rem]"
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
      <h3 className="text-xl font-semibold text-left w-full mb-4">{title}</h3>

      <div className="w-full h-52 md:h-64 relative mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <p className="text-gray-700 text-sm mb-4 w-full text-left leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 justify-start w-full mb-4">
        {lang.map((tech, index) => (
          <span
            key={index}
            className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="w-full flex justify-center">
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-yellow-400 text-white font-medium rounded-lg hover:bg-yellow-500 transition"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default Card;
