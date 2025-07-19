'use client';
import { motion } from 'framer-motion';
import ProfileImage from './ProfileImage';
import EducationTimeline from './EducationTimeline';
import { animationVariants } from '@/app/assets/data/educationData';

export default function AboutContent() {
  return (
    <div className="flex w-full flex-col lg:flex-row items-center gap-10">
      <ProfileImage />

      <div className="flex flex-1 flex-col gap-6">
        <motion.p 
          variants={animationVariants.fadeInUp}
          className="text-fg/80 leading-relaxed"
        >
          I'm a passionate and creative developer with a love for clean design,
          elegant code, and building meaningful user experiences. My journey
          spans from early coding curiosity to formal computer science education.
          I'm deeply interested in frontend engineering, motion UI, and modern web technologies.
        </motion.p>

        <EducationTimeline />
      </div>
    </div>
  );
}