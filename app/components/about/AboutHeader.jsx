'use client';
import { motion } from 'framer-motion';
import { animationVariants } from '@/app/assets/data/educationData';

export default function AboutHeader() {
  return (
    <>
      <motion.p 
        variants={animationVariants.fadeInUp}
        className="text-center text-base font-semibold uppercase tracking-wide text-fg"
      >
        About
      </motion.p>
      
      <motion.h2 
        variants={animationVariants.fadeInUp}
        className="text-center text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text
          bg-gradient-to-r from-[#F00F00] via-[#FFD000] to-[#FFCE00] mb-6"
      >
        My Introduction
      </motion.h2>
    </>
  );
}