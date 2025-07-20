import React from 'react';
import NavLinks from './NavLinks';
import { styleConstants } from '../../assets/data/navbarData';

const MobileMenu = ({ isOpen, onClose }) => {
  const { mobileMenu } = styleConstants;

  return (
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-30 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300"
        />
      )}

      <div
        className={`mobile-menu fixed top-0 right-0 bottom-0 ${mobileMenu.width} z-40 transform transition-transform duration-300 ease-in-out
                    ${mobileMenu.background.light} ${mobileMenu.background.dark} backdrop-blur-[15px]
                    border-l ${mobileMenu.border.light} ${mobileMenu.border.dark}
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                    ${mobileMenu.maxWidth} overflow-hidden`}
        style={{ willChange: 'transform' }}
      >
        <div className={`flex items-center py-6 px-4 border-b ${mobileMenu.border.light} ${mobileMenu.border.dark}`}>
          <span className="text-fg font-bold text-lg">Menu</span>
        </div>
        
        <NavLinks isMobile={true} onLinkClick={onClose} />
      </div>
    </>
  );
};

export default MobileMenu;