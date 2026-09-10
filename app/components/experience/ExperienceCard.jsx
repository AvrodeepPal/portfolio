'use client';
import React from 'react';
import { motion } from 'framer-motion';
import CompanyHeader from './CompanyHeader';
import TechStack from './TechStack';
import HighlightList from './HighlightList';
import { GlowingEffect } from '../ui/GlowingEffect';
import { experienceAnimations } from '@/app/assets/data/experienceData';

/**
 * One role, rendered as a card hanging off the timeline. The card itself stays
 * put — the only hover response is the glowing border tracking the pointer.
 */
const ExperienceCard = ({ experience, isDark, isCurrent }) => (
  <motion.div
    variants={experienceAnimations.timelineVariants}
    className="relative h-full rounded-2xl border border-border p-2 md:rounded-3xl md:p-3"
  >
    <GlowingEffect
      blur={0}
      borderWidth={3}
      spread={80}
      glow={true}
      disabled={false}
      proximity={64}
      inactiveZone={0.01}
    />

    <div className="relative flex h-full flex-col overflow-hidden rounded-xl bg-card p-5 text-left sm:p-6">
      <CompanyHeader
        experience={experience}
        isDark={isDark}
        isCurrent={isCurrent}
      />

      <TechStack technologies={experience.technologies} />
      <HighlightList highlights={experience.highlights} />
    </div>
  </motion.div>
);

export default ExperienceCard;
