'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceHeader from './ExperienceHeader';
import ExperienceTimeline from './ExperienceTimeline';
import { experienceAnimations } from '@/app/assets/data/experienceData';

export default function Experience({ isDark }) {
  return (
    <div
      id="experience"
      className="bg-bg z-20 w-full px-4 sm:px-8 md:px-[12%] py-20 scroll-mt-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: '-100px' }}
        variants={experienceAnimations.containerVariants}
      >
        <ExperienceHeader />

        <div className="pt-6">
          <ExperienceTimeline isDark={isDark} />
        </div>
      </motion.div>
    </div>
  );
}
