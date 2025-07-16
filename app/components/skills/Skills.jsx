'use client';
import { coding, tech, tools, webdev } from '@/app/assets/skills/assets';
import React from 'react';
import Tile from './Tile';
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

const slideInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function Skills() {
  const skillSections = [
    { title: "Coding:", skills: coding },
    { title: "Development:", skills: webdev },
    { title: "Tools:", skills: tools },
    { title: "Technologies:", skills: tech }
  ];

  return (
    <section id="skills" className="text-center w-full px-[12%] py-20 scroll-mt-0 bg-bg">
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
          Skills
        </motion.p>
        
        <motion.h2 
          variants={fadeInUp}
          className="text-center text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text 
          bg-gradient-to-r from-[#F00F00] via-[#FFD000] to-[#FFCE00] mb-6"
        >
          Technical Toolbox
        </motion.h2>
        
        <motion.div 
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
              }
            }
          }}
          className="text-left flex flex-col gap-6 py-6"
        >
          {skillSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.4,
                    ease: "easeOut"
                  }
                }
              }}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <motion.h3 
                variants={slideInLeft}
                className="text-xl font-semibold mb-0 text-fg min-w-[150px]"
              >
                {section.title}
              </motion.h3>
              
              <motion.div 
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.1
                    }
                  }
                }}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3"
              >
                {section.skills.map((skill, index) => (
                  <Tile 
                    key={index} 
                    name={skill.name} 
                    image={skill.image} 
                    index={index + sectionIndex * 10}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}