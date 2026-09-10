'use client';
import React from 'react';
import { motion } from 'framer-motion';
import RichText from './RichText';
import { experienceAnimations } from '@/app/assets/data/experienceData';

/** Bulleted achievements, each opened by its own headline. */
const HighlightList = ({ highlights = [] }) => {
  if (!highlights.length) return null;

  return (
    <motion.ul
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
      className="mt-5 flex flex-col gap-4"
    >
      {highlights.map((highlight) => (
        <motion.li
          key={highlight.title}
          variants={experienceAnimations.fadeInUp}
          className="flex gap-3"
        >
          <span
            className="mt-[7px] h-2 w-2 flex-shrink-0 rounded-full bg-[#ffe31f]
                       ring-2 ring-[#ffe31f]/30"
            aria-hidden="true"
          />

          <p className="text-sm leading-relaxed text-fg-soft">
            <span className="font-semibold text-fg">{highlight.title}: </span>
            <RichText text={highlight.description} />
          </p>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default HighlightList;
