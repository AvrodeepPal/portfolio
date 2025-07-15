'use client';
import React from 'react';
import Card from './Card';
import { projects } from '@/app/assets/projects/assets';

export default function Projects({ isDark }) {
  return (
    <section id="projects" className={`text-center w-full px-[12%] py-20 scroll-mt-0 ${isDark ? 'bg-[#171717]' : 'bg-white'}`}>

      <p className="text-base font-semibold uppercase tracking-wide text-[#fdd017]">Projects</p>
      <h2 className={`text-3xl sm:text-5xl font-bold tracking-tight ${isDark ? 'text-[#ffffff]' : 'text-gray-900'} mb-4`}>Applied Knowledge</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 py-6">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.name}
            image={project.image}
            description={project.description}
            lang={project.lang}
            isLive={project.isLive}
            link={project.link}
            isDark={isDark}
          />
        ))}
      </div>
    </section>
  );
}