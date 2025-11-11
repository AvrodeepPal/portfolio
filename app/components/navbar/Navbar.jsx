import Image from 'next/image';
import React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Divide as Hamburger } from 'hamburger-react';
import { assets } from '../../assets/home/assets';
import { useNavbar } from '../../assets/hooks/useNavbar';
import { brandConfig, styleConstants } from '../../assets/data/navbarData';
import NavLinks from './NavLinks';
import MobileMenu from './MobileMenu';

const Navbar = ({ isDark, setDark }) => {
  const {
    mobileMenuOpen,
    activeSection,
    toggleDarkMode,
    toggleMobileMenu,
    closeMobileMenu,
    handleNavClick
  } = useNavbar(isDark, setDark);

  const { glassBackground, colors } = styleConstants;

  return (
    <nav className="w-full max-w-full overflow-x-hidden fixed px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-10 py-2 flex items-center justify-between z-50">
      <a
        href={brandConfig.href}
        className={`flex-shrink-0 min-w-0 max-w-[160px] xs:max-w-[180px] sm:max-w-[200px] flex justify-center p-2 rounded-full 
                    ${glassBackground.light} ${glassBackground.dark} 
                    backdrop-blur-[10px] shadow-sm transition-all 
                    ${glassBackground.hoverLight} ${glassBackground.hoverDark}`}
        onClick={(e) => handleNavClick(e, brandConfig.href)}
      >
        <Image
          src={assets.logo}
          className="w-full max-w-[150px] xs:max-w-[150px] sm:max-w-[200px] h-auto cursor-pointer transition-transform hover:scale-105"
          alt={brandConfig.alt}
          priority
        />
      </a>

      <NavLinks 
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
      
      <div className="flex items-center gap-2 xs:gap-3 flex-shrink-0">
        <div className={`flex items-center justify-center p-3 xs:p-3 rounded-full 
                       ${glassBackground.light} ${glassBackground.dark} 
                       backdrop-blur-[10px] shadow-sm transition-all ${glassBackground.hoverLight} ${glassBackground.hoverDark}`}>
          <DarkModeSwitch
            checked={isDark}
            onChange={toggleDarkMode}
            size={24}
            moonColor={colors.accent}
            sunColor={colors.accent}
          />
        </div>

        <div className="block md:hidden z-70">
            <div className={`menu-button rounded-full -p-[10px] flex items-center justify-center
                            ${glassBackground.light} ${glassBackground.dark} 
                            backdrop-blur-[10px] shadow-sm hover:bg-[rgba(255,215,0,0.3)] ${glassBackground.hoverDark} 
                            transition-all`}>
                <Hamburger
                toggled={mobileMenuOpen}
                toggle={toggleMobileMenu}
                size={18}
                direction="right"
                duration={0.8}
                color={isDark ? '#FFD700' : '#1f2937'}
                rounded
                label="Show menu"
                />
            </div>
        </div>
      </div>

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={closeMobileMenu}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </nav>
  );
};

export default Navbar;