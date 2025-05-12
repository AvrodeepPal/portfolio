'use client';
import Image from 'next/image';
import React from 'react';

const Tile = ({ name, image }) => {
  return (
    <div
      className="flex-shrink-0 m-4 overflow-hidden rounded-xl backdrop-blur-md 
        w-48 h-48 border border-black/15 transition-transform transform hover:-translate-y-1"
      style={{
        boxShadow: '5px 5px 0 #fdd017',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#ffffee';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      <div className="pt-6 px-6 flex items-center justify-center">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="w-20 h-20 object-contain"
        />
      </div>

      <div className="text-center px-4 pb-4 mt-4">
        <span className="block text-black font-semibold text-md tracking-wide">
          {name}
        </span>
      </div>
    </div>
  );
};

export default Tile;
