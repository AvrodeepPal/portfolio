'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets } from '../../assets/home/assets';
import { animationVariants } from '@/app/assets/data/educationData';

export default function ProfileImage() {
  return (
    <motion.div 
      variants={animationVariants.fadeInUp}
      className="relative w-48 sm:w-60 md:w-80 max-w-full"
    >
      <motion.div
        className="absolute -inset-2 rounded-[2rem] pointer-events-none z-0 animate-profile-gradient"
        style={{
          background: 'linear-gradient(130deg, #FFFD00, #FF3C00, #FFFD00)',
          backgroundSize: '200% 200%',
        }}
        transition={{ duration: 0.3 }}
        whileHover={{
          scale: 1.05,
          opacity: 1,
          filter: 'drop-shadow(0 0 15px #FFD700) saturate(1.5) blur(2px)',
        }}
      />

      <div className="relative rounded-3xl overflow-hidden bg-white p-1 z-10">
        <Image
          src={assets.photo}
          alt="Profile"
          className="w-full rounded-3xl object-cover shadow-xl"
          sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, 320px"
          placeholder="blur"
        />
      </div>

      <motion.div
        initial={{ opacity: 0.25 }}
        whileHover={{ opacity: 0.5 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-r from-yellow-300/20 to-red-500/20 blur-xl z-0 pointer-events-none"
      />
    </motion.div>
  );
}
