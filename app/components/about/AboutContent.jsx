'use client';
import { motion } from 'framer-motion';
import ProfileImage from './ProfileImage';
import EducationTimeline from './EducationTimeline';
import { animationVariants } from '@/app/assets/data/educationData';

export default function AboutContent() {
  return (
    <div className="flex w-full flex-col lg:flex-row items-center gap-10">
      <ProfileImage />

      <div className="flex flex-1 flex-col gap-2">
        <motion.p 
          variants={animationVariants.fadeInUp}
          className="text-fg/80 leading-relaxed"
        >
          Developer by skill, Student by status and Problem Solver by spirit. Obsessed with clean UIs, clever logic and LLMs that actually make sense. <br/>
          A huge believer in Parkinson’s Law, clean commit histories and non-caffeinated debugging (prefer black-tea @ midnight). <br/>
          Currently on a mission to blend design and AI to build things that matter.
        </motion.p>

        <EducationTimeline />
      </div>
    </div>
  );
}