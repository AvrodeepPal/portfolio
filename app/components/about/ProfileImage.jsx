'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets } from '../../assets/home/assets';
import { animationVariants } from '@/app/assets/data/educationData';

export default function ProfileImage() {
  return (
    <motion.div 
      variants={animationVariants.fadeInUp}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="w-48 sm:w-60 md:w-80 max-w-full rounded-3xl overflow-hidden"
    >
      <Image
        src={assets.photo}
        alt="Profile"
        className="w-full rounded-3xl object-cover"
        priority
      />
    </motion.div>
  );
}