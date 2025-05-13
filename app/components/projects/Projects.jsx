'use client';
import React from 'react';
import Card from './Card';
import { projects } from '@/app/assets/projects/assets';

export default function Projects() {
  return (
    <section id="projects" className="w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.name}
            image={project.image}
            description={project.description}
            lang={project.lang}
            live={project.live.startsWith('http') ? project.live : project.live.slice(1)}
          />
        ))}
      </div>
    </section>
  );
}
