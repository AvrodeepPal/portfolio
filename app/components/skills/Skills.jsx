'use client';
import { coding, tech, tools, webdev } from '@/app/assets/skills/assets';
import React from 'react';
import Tile from './Tile';

export default function Skills({ isDark }) {
  return (
    <section id="skills" className={`text-center w-full px-[12%] py-20 scroll-mt-0 ${isDark ? 'bg-[#171717]' : 'bg-white'}`}>

      <p className="text-base font-semibold uppercase tracking-wide text-[#fdd017]">Skills</p>
      <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${isDark ? 'text-[#ffffff]' : 'text-gray-900'} mb-4`}>Technical Toolbox</h2>
      
      <div className="text-left flex flex-col gap-6 py-6">

        <div>
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-[#ffffff]' : 'text-black'}`}>Coding</h3>
          {/* Increased columns by 1 at each breakpoint & reduced gap */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {coding.map((skill, index) => (
              <Tile key={index} name={skill.name} image={skill.image} isDark={isDark} />
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-[#ffffff]' : 'text-black'}`}>Development</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {webdev.map((skill, index) => (
              <Tile key={index} name={skill.name} image={skill.image} isDark={isDark} />
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-[#ffffff]' : 'text-black'}`}>Tools</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {tools.map((skill, index) => (
              <Tile key={index} name={skill.name} image={skill.image} isDark={isDark} />
            ))}
          </div>
        </div>

        <div>
          <h3 className={`text-xl font-semibold mb-4 ${isDark ? 'text-[#ffffff]' : 'text-black'}`}>Technologies</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3">
            {tech.map((skill, index) => (
              <Tile key={index} name={skill.name} image={skill.image} isDark={isDark} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}