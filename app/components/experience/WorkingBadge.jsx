'use client';
import React from 'react';
import { workingBadge } from '@/app/assets/data/experienceData';

/** Blinking green dot + label, shown beside the current company only. */
const WorkingBadge = ({ label = workingBadge.label }) => (
  <span
    className="inline-flex items-center gap-1.5 rounded-full border border-[var(--working)]/40
               bg-[var(--working)]/10 px-2.5 py-[3px] text-[11px] font-semibold
               text-working whitespace-nowrap"
  >
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--working)] opacity-75 animate-working-ping" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--working)] animate-working-blink" />
    </span>
    {label}
  </span>
);

export default WorkingBadge;
