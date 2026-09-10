'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { experienceAnimations } from '@/app/assets/data/experienceData';

/** "Technologies" label plus the chip row for a single role. */
const TechStack = ({ technologies = [] }) => {
  if (!technologies.length) return null;

  return (
    <div className="mt-5">
      <h4 className="text-sm font-semibold text-fg mb-2">Technologies</h4>

      <motion.div
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }}
        className="flex flex-wrap gap-2"
      >
        {technologies.map((tech) => (
          <motion.span
            key={tech}
            variants={experienceAnimations.chipVariants}
            className="cursor-pointer rounded-md border border-border bg-bg-soft px-2.5 py-1
                       text-[11px] sm:text-xs font-medium text-fg-soft
                       transition-colors duration-200 hover:border-[#ffe31f] hover:text-fg"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
