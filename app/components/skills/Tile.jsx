'use client';
import Image from 'next/image';
import React from 'react';

const Tile = ({ name, image, isDark }) => {
  return (
    <div
      className={`flex-shrink-0 m-3 overflow-hidden rounded-xl backdrop-blur-md 
        w-40 h-40 ${isDark ? 'border-gray-600' : 'border-black/15'} border transition-transform transform hover:-translate-y-2 ${isDark ? 'bg-[#171717]' : 'bg-white'}`}
      style={{
        boxShadow: '4px 4px 0 #fdd017',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = isDark ? '#333333' : '#ffffee';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = isDark ? '#171717' : 'transparent';
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
        <span className={`block ${isDark ? 'text-[#ffffff]' : 'text-black'} font-semibold text-sm tracking-wide`}>
          {name}
        </span>
      </div>
    </div>
  );
};

export default Tile;