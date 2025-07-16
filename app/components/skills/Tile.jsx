'use client';
import Image from 'next/image';
import React from 'react';

const Tile = ({ name, image }) => {
  return (
    <div
      className="bg-transparent backdrop-blur-[20px] bg-[linear-gradient(120deg,rgba(255,255,255,0.5),rgba(255,220,20,0.05))] p-6 rounded-xl shadow-lg
        flex-shrink-0 m-3 overflow-hidden cursor-pointer
        w-40 h-40 border-border border transition-transform transform hover:-translate-y-2"
      style={{
        boxShadow: '4px 4px 0 #fdd017',
      }}
    >
      <div className="pt-4 px-4 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={64}
          height={64}
          className="w-16 h-16 object-contain"
        />
      </div>

      <div className="text-center px-4 pb-4 mt-2">
        <span className="block text-fg font-semibold text-sm tracking-wide">
          {name}
        </span>
      </div>
    </div>
  );
};

export default Tile;