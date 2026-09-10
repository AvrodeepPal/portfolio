'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import {
  sortedExperiences,
  currentExperienceId
} from '@/app/assets/data/experienceData';

/**
 * Vertical rail on the left with one dot per role; latest role sits on top.
 * Each row owns its slice of the rail, so the line stays continuous no matter
 * how many experiences are added.
 */
export default function ExperienceTimeline({ isDark }) {
  const lastIndex = sortedExperiences.length - 1;

  return (
    <div className="relative pt-7">
      {/* Latest-first marker — the rail only gets an arrow at the top. Drawn as
          an SVG rather than a glyph so it centres on the rail exactly. */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute top-[5px] left-0 flex w-4 justify-center text-[#ffe31f]"
        aria-hidden="true"
      >
        <svg width="12" height="10" viewBox="0 0 12 10" fill="currentColor">
          <polygon points="6,0 12,10 0,10" />
        </svg>
      </motion.div>

      <motion.div
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.25 } } }}
        className="flex flex-col"
      >
        {sortedExperiences.map((experience, index) => {
          const isCurrent = experience.id === currentExperienceId;
          const isLast = index === lastIndex;

          return (
            <motion.div
              key={experience.id}
              variants={{ hidden: {}, visible: {} }}
              className="flex gap-4 sm:gap-6"
            >
              <div className="relative flex w-4 flex-shrink-0 justify-center">
                <span
                  className={`absolute top-0 w-[2px] bg-[#ffe31f] ${isLast ? 'h-11' : 'bottom-0'}`}
                  aria-hidden="true"
                />

                <motion.span
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: {
                      scale: 1,
                      opacity: 1,
                      transition: { type: 'spring', stiffness: 400, damping: 20 }
                    }
                  }}
                  className={`absolute top-7 h-4 w-4 rounded-full bg-[#ffe31f] ring-4 ring-[var(--bg)]
                              ${isCurrent ? 'shadow-[0_0_0_3px_rgba(255,227,31,0.35)]' : ''}`}
                  aria-hidden="true"
                />
              </div>

              <div className={`min-w-0 flex-1 ${isLast ? '' : 'pb-8'}`}>
                <ExperienceCard
                  experience={experience}
                  isDark={isDark}
                  isCurrent={isCurrent}
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
