import React from 'react';
import { navLinks, styleConstants } from '../../assets/data/navbarData';

const NavLinks = ({ isMobile = false, onLinkClick }) => {
  const { colors } = styleConstants;

  if (isMobile) {
    return (
      <div className="flex flex-col gap-4 py-6 px-4 h-full overflow-y-auto">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`text-fg ${colors.hoverLight} ${colors.hoverDark} transition-colors duration-300 text-base xs:text-lg font-medium py-2 px-3 rounded-lg hover:bg-[rgba(255,215,0,0.1)]`}
            onClick={onLinkClick}
          >
            {link.label}
          </a>
        ))}
      </div>
    );
  }

  return (
    <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 px-4 lg:px-6 xl:px-8 py-3 rounded-full
                   bg-[rgba(255,215,0,0.15)] dark:bg-[rgba(255,255,255,0.1)] 
                   backdrop-blur-[10px] text-fg shadow-sm transition-all max-w-full overflow-hidden">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={`nav-hover ${colors.hoverLight} ${colors.hoverDark} transition-colors duration-300 text-sm lg:text-base whitespace-nowrap`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;