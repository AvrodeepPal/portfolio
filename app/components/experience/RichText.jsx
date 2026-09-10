'use client';
import React from 'react';

/**
 * Renders a string where **spans** are emphasised, keeping the data files free
 * of JSX. Anything outside the markers stays plain text.
 */
const RichText = ({ text, className = '' }) => {
  if (!text) return null;

  const segments = text.split(/\*\*(.+?)\*\*/g);

  return (
    <span className={className}>
      {segments.map((segment, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-fg">
            {segment}
          </strong>
        ) : (
          <React.Fragment key={index}>{segment}</React.Fragment>
        )
      )}
    </span>
  );
};

export default RichText;
