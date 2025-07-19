'use client';
import { motion } from 'framer-motion';
import AboutHeader from './AboutHeader';
import AboutContent from './AboutContent';
import { animationVariants } from '@/app/assets/data/educationData';

export default function About({ isDark }) {
  return (
    <div id="about" className="bg-bg z-20 w-full px-4 sm:px-8 md:px-[12%] py-20 scroll-mt-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={animationVariants.containerVariants}
      >
        <AboutHeader />
        <AboutContent />
      </motion.div>
    </div>
  );
}