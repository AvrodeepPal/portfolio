'use client';
import React from 'react';
import Card from './Card';
import { projects } from '@/app/assets/projects/assets';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="text-center w-full px-[12%] py-20 scroll-mt-0 bg-bg">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.1
            }
          }
        }}
      >
        <motion.p 
          variants={fadeInUp}
          className="text-base font-semibold uppercase tracking-wide text-fg"
        >
          Projects
        </motion.p>
        
        <motion.h2 
          variants={fadeInUp}
          className="text-center text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-[#F00F00] via-[#FFD000] to-[#FFCE00] mb-6"
        >
          Applied Knowledge
        </motion.h2>

        <motion.div 
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 py-6"
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.name}
              image={project.image}
              description={project.description}
              lang={project.lang}
              isLive={project.isLive}
              code={project.code}
              live={project.live}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}