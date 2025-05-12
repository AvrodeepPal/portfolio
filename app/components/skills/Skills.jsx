'use client';
import { coding, tech, tools, webdev } from '@/app/assets/skills/assets';
import React from 'react';
import Tile from './Tile';

export default function Skills() {
  return (
    <section id="skills" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

      <div className="flex flex-col gap-12">

        <div>
          <h3 className="text-xl font-semibold mb-4">Coding</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {coding.map((skill, index) => (
              <Tile key={index} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Development</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {webdev.map((skill, index) => (
              <Tile key={index} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {tools.map((skill, index) => (
              <Tile key={index} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Technologies</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {tech.map((skill, index) => (
              <Tile key={index} name={skill.name} image={skill.image} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
