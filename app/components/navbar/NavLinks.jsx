import React from 'react';
import { navLinks, styleConstants } from '../../assets/data/navbarData';

const NavLinks = ({ isMobile = false, onLinkClick, activeSection, onNavClick }) => {
  const { colors } = styleConstants;

  if (isMobile) {
    return (
      <div className="flex flex-col gap-4 py-6 px-4 h-full overflow-y-auto">
        <ul className="nav-list flex flex-col gap-2">
          {navLinks.map((link) => (
            <li 
              key={link.href}
              className={`nav-list-item transition-all duration-300 ${activeSection === link.id ? 'active' : ''}`}
            >
              <a
                href={link.href}
                className={`text-fg transition-colors duration-300 text-base xs:text-lg font-medium py-2 px-3 rounded-lg hover:bg-[rgba(255,215,0,0.1)] block ${
                  activeSection === link.id ? 'text-[#FF0000]' : ''
                }`}
                onClick={(e) => {
                  onNavClick(e, link.href);
                  onLinkClick();
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <ul className="nav-list hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 px-4 lg:px-6 xl:px-8 py-3 rounded-full
                   bg-[rgba(255,215,0,0.15)] dark:bg-[rgba(255,255,255,0.1)] 
                   backdrop-blur-[10px] text-fg shadow-sm transition-all max-w-full overflow-hidden">
      {navLinks.map((link) => (
        <li 
          key={link.href}
          className={`nav-list-item transition-all duration-300 ${activeSection === link.id ? 'active' : ''}`}
        >
          <a
            href={link.href}
            className={`nav-hover transition-colors duration-300 text-sm lg:text-base whitespace-nowrap px-2 py-1 ${
              activeSection === link.id ? 'text-[#FF0000]' : `${colors.hoverLight} ${colors.hoverDark}`
            }`}
            onClick={(e) => onNavClick(e, link.href)}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;