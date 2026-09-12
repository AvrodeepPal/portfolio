'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Tile = ({ name, image, index }) => {
  const tileVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: index * 0.05
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: index * 0.05
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        delay: index * 0.05
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={tileVariants}
      whileTap={{ scale: 0.95 }}
      className="bg-transparent backdrop-blur-sm bg-[linear-gradient(120deg,rgba(255,255,255,0.5),rgba(255,225,220,0.05))] 
                p-2 rounded-xl shadow-[3px_3px_0_#fdd017] flex-shrink-0 overflow-hidden cursor-pointer
                w-[96px] h-[96px] flex flex-col items-center justify-center
                border border-border transition-transform duration-200 transform hover:-translate-y-1.5"
    >
      <motion.div
        variants={imageVariants}
        className="flex items-center justify-center h-11"
      >
        <Image
          src={image}
          alt={name}
          width={40}
          height={40}
          className="w-10 h-10 object-contain"
        />
      </motion.div>

      <motion.div
        variants={textVariants}
        className="text-center px-1 mt-1.5 w-full"
      >
        <span className="block text-fg font-semibold text-xs leading-tight tracking-wide line-clamp-1">
          {name}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default Tile;