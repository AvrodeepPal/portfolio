'use client';
import React, { useId, useState } from 'react';
import { motion } from 'framer-motion';
import RichText from './RichText';
import {
  experienceAnimations,
  highlightPreviewLines
} from '@/app/assets/data/experienceData';

// Static class names so Tailwind picks them up.
const clampClasses = { 1: 'line-clamp-1', 2: 'line-clamp-2', 3: 'line-clamp-3' };

/**
 * Bulleted achievements, each opened by its own headline. Every point is shown,
 * but clamped to its first couple of lines until "Show more" expands them all.
 * Clamping is pure CSS, so nothing animates height or re-lays out mid-frame.
 */
const HighlightList = ({ highlights = [] }) => {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();

  if (!highlights.length) return null;

  const clamp = expanded ? '' : clampClasses[highlightPreviewLines];

  return (
    <div className="mt-5">
      <motion.ul
        id={listId}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        className="flex flex-col gap-4"
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

            <p className={`text-sm leading-relaxed text-fg-soft ${clamp}`}>
              <span className="font-semibold text-fg">{highlight.title}: </span>
              <RichText text={highlight.description} />
            </p>
          </motion.li>
        ))}
      </motion.ul>

      <button
        type="button"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded}
        aria-controls={listId}
        className="mt-4 ml-5 inline-flex items-center gap-1 text-sm font-medium text-gold
                   transition-opacity duration-200 hover:opacity-80"
      >
        {expanded ? 'Show less' : 'Show more'}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className={`transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <polyline points="2,4 6,8 10,4" />
        </svg>
      </button>
    </div>
  );
};

export default HighlightList;
