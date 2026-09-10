'use client';
import React from 'react';
import Image from 'next/image';
import WorkingBadge from './WorkingBadge';
import {
  companyLinkIcon,
  formatLocation
} from '@/app/assets/data/experienceData';

/**
 * Top row of a card: company logo, name + website link, "Working" badge,
 * role, and the duration / location block on the right.
 */
const CompanyHeader = ({ experience, isDark, isCurrent }) => {
  const { company, role, duration, location, type, employment } = experience;
  const logo = isDark ? company.logo.dark : company.logo.light;

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className="relative h-12 w-12 sm:h-14 sm:w-14 flex-shrink-0 overflow-hidden
                     rounded-xl border border-border bg-bg"
        >
          <Image
            src={logo}
            alt={company.alt || `${company.name} logo`}
            fill
            sizes="56px"
            className="object-contain"
          />
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {/* The globe stays inline with the name so it never wraps alone. */}
            <h3 className="text-lg sm:text-xl font-bold text-fg">
              {company.name}
              {company.site && (
                <a
                  href={company.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${companyLinkIcon.label} - ${company.site}`}
                  aria-label={`${companyLinkIcon.label} of ${company.name}`}
                  className="ml-2 inline-block align-middle text-sm font-normal leading-none
                             opacity-70 transition-opacity duration-200 hover:opacity-100"
                >
                  {companyLinkIcon.glyph}
                </a>
              )}
            </h3>

            {isCurrent && <WorkingBadge />}
          </div>

          <p className="mt-1 text-sm sm:text-base text-fg-soft">
            {role}
            {employment && (
              <span className="text-fg-faint"> &middot; {employment}</span>
            )}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:items-end sm:text-right flex-shrink-0">
        <span className="text-sm font-medium text-fg-soft">{duration.label}</span>
        <span className="text-sm text-fg-faint">
          {formatLocation({ location, type })}
        </span>
      </div>
    </div>
  );
};

export default CompanyHeader;
