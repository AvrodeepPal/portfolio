'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Card = ({ title, image, description, lang, isLive, code, live, index }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: index * 0.1
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1 + 0.2
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        delay: index * 0.1 + 0.3
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      className="bg-transparent backdrop-blur-[20px] bg-[linear-gradient(120deg,rgba(255,255,255,0.3),rgba(255,255,20,0.05))] p-6 rounded-xl shadow-lg
        flex flex-col items-center justify-center overflow-hidden
        border-border border transition-all duration-300 transform hover:-translate-y-2
        w-full min-w-[25rem]"
      style={{
        boxShadow: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '5px 5px 5px 5px #fdd017';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <motion.h3 
        variants={contentVariants}
        className="text-xl font-semibold text-left w-full mb-4 text-fg"
      >
        {title}
      </motion.h3>

      <motion.div 
        variants={imageVariants}
        className="w-full h-52 md:h-64 relative mb-4 overflow-hidden rounded-lg"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 800vw, 33vw"
        />
      </motion.div>

      <motion.p 
        variants={contentVariants}
        className="text-fg/70 text-sm mb-4 w-full text-left leading-relaxed"
      >
        {description}
      </motion.p>

      <motion.div 
        variants={contentVariants}
        className="flex flex-wrap gap-2 justify-start w-full mb-4"
      >
        {lang.map((tech, techIndex) => (
          <motion.span
            key={techIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.1 + 0.4 + techIndex * 0.05,
              ease: "easeOut"
            }}
            whileHover={{ scale: 1.1 }}
            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-yellow-100 px-3 py-1 rounded-full text-xs font-semibold"
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      <motion.div 
        variants={contentVariants}
        className="w-full flex justify-center gap-4"
      >
        <motion.a
          href={code}
          target="_blank"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 text-white text-xl font-medium rounded-lg cursor-pointer
            focus:ring ring-black ring-opacity-10 gradient element-to-rotate transition-all duration-300"
        >
          Code
        </motion.a>
        
        {isLive === 1 && (
          <motion.a
            href={live}
            target="_blank"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 text-white text-xl font-medium rounded-lg cursor-pointer
              focus:ring ring-black ring-opacity-10 gradient element-to-rotate transition-all duration-300"
          >
            Live
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Card;