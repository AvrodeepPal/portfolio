'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  experienceSection,
  experienceAnimations
} from '@/app/assets/data/experienceData';

export default function ExperienceHeader() {
  return (
    <>
      <motion.p
        variants={experienceAnimations.fadeInUp}
        className="text-center text-base font-semibold uppercase tracking-wide text-fg"
      >
        {experienceSection.eyebrow}
      </motion.p>

      <motion.h2
        variants={experienceAnimations.fadeInUp}
        className="text-center text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text
          bg-gradient-to-r from-[#F00F00] via-[#FFD000] to-[#FFCE00] mb-6"
      >
        {experienceSection.title}
      </motion.h2>
    </>
  );
}
