'use client';
import React, { useId } from 'react';

// Same sun/moon morph as react-toggle-dark-mode, driven by CSS transitions
// instead of react-spring. Only transforms and opacity animate, so it stays
// on the compositor. The overshooting curve stands in for the old spring.
const motion = 'transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] motion-reduce:transition-none';

const rays = [
  [12, 1, 12, 3],
  [12, 21, 12, 23],
  [4.22, 4.22, 5.64, 5.64],
  [18.36, 18.36, 19.78, 19.78],
  [1, 12, 3, 12],
  [21, 12, 23, 12],
  [4.22, 19.78, 5.64, 18.36],
  [18.36, 5.64, 19.78, 4.22]
];

const ThemeToggle = ({ checked, onChange, size = 24, color = 'currentColor' }) => {
  const maskId = `theme-toggle-mask-${useId()}`;

  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      aria-label={checked ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={checked}
      className="flex cursor-pointer"
      style={{ color }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={motion}
        style={{ transform: `rotate(${checked ? 40 : 90}deg)` }}
      >
        <mask id={maskId}>
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          {/* Bites the moon's crescent out of the disc; parked off-canvas for the sun. */}
          <circle
            cx="24"
            cy="0"
            r="9"
            fill="black"
            className={motion}
            style={{ transform: checked ? 'translate(-12px, 5.52px)' : 'none' }}
          />
        </mask>

        <g mask={`url(#${maskId})`}>
          {/* Scaled rather than resized, so the mask above stays put. */}
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="currentColor"
            className={`${motion} [transform-box:fill-box] origin-center`}
            style={{ transform: `scale(${checked ? 1 : 0.6})` }}
          />
        </g>

        <g className={motion} style={{ opacity: checked ? 0 : 1 }}>
          {rays.map(([x1, y1, x2, y2]) => (
            <line key={`${x1}-${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </g>
      </svg>
    </button>
  );
};

export default ThemeToggle;
