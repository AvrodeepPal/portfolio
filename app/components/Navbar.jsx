import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { assets } from '../assets/home/assets';

const Navbar = ({ isDark, setDark }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleDarkMode = (checked) => {
        setDark(checked);
        if (checked) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
                setMobileMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [mobileMenuOpen]);

    return (
        <nav className="w-full max-w-full overflow-x-hidden fixed px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-10 py-2 flex items-center justify-between z-50">
            <a
                href="#top"
                className="flex-shrink-0 min-w-0 max-w-[140px] xs:max-w-[160px] sm:max-w-[200px] flex justify-center p-2 rounded-full 
                            bg-[rgba(255,215,0,0.15)] dark:bg-[rgba(255,255,255,0.1)] 
                            backdrop-blur-[10px] shadow-sm transition-all 
                            hover:bg-[rgba(255,215,0,0.25)] dark:hover:bg-[rgba(255,255,255,0.2)]"
            >
                <Image
                    src={assets.logo}
                    className="w-full max-w-[100px] xs:max-w-[120px] sm:max-w-[170px] h-auto cursor-pointer transition-transform hover:scale-105"
                    alt="logo"
                    priority
                />
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8 px-4 lg:px-6 xl:px-8 py-3 rounded-full
                           bg-[rgba(255,215,0,0.15)] dark:bg-[rgba(255,255,255,0.1)] 
                           backdrop-blur-[10px] text-fg shadow-sm transition-all max-w-full overflow-hidden">
                <li><a href="#top" className="nav-hover hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-sm lg:text-base whitespace-nowrap">Home</a></li>
                <li><a href="#about" className="nav-hover hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-sm lg:text-base whitespace-nowrap">About</a></li>
                <li><a href="#skills" className="nav-hover hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-sm lg:text-base whitespace-nowrap">Skills</a></li>
                <li><a href="#projects" className="nav-hover hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-sm lg:text-base whitespace-nowrap">Projects</a></li>
                <li><a href="#contact" className="nav-hover hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-sm lg:text-base whitespace-nowrap">Contact</a></li>
            </ul>
            
            {/* Right side controls */}
            <div className="flex items-center gap-2 xs:gap-3 flex-shrink-0">
                {/* Theme Toggle */}
                <div className="flex items-center justify-center p-2 xs:p-3 rounded-full 
                               bg-[rgba(255,215,0,0.15)] dark:bg-[rgba(255,255,255,0.1)] 
                               backdrop-blur-[10px] shadow-sm transition-all hover:bg-[rgba(255,215,0,0.25)] dark:hover:bg-[rgba(255,255,255,0.2)]">
                    <DarkModeSwitch
                        checked={isDark}
                        onChange={toggleDarkMode}
                        size={20}
                        moonColor="#FFD700"
                        sunColor="#FFD700"
                    />
                </div>

                {/* Mobile Menu Button */}
                <div className="block md:hidden z-70">
                    <button 
                        onClick={toggleMobileMenu}
                        className="menu-button p-2 xs:p-3 rounded-full bg-[rgba(255,215,0,0.15)] dark:bg-[rgba(255,255,255,0.1)] 
                                  backdrop-blur-[10px] shadow-sm hover:bg-[rgba(255,215,0,0.3)] dark:hover:bg-[rgba(255,255,255,0.2)] 
                                  text-fg transition-all"
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xs:h-6 xs:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 xs:h-6 xs:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Menu Slide Panel */}
            <div
                className={`mobile-menu fixed top-0 right-0 bottom-0 w-48 xs:w-56 sm:w-64 z-40 transform transition-transform duration-300 ease-in-out
                            bg-[rgba(255,215,0,0.2)] dark:bg-[rgba(30,30,30,0.95)] backdrop-blur-[15px]
                            border-l border-[rgba(255,215,0,0.3)] dark:border-[rgba(255,255,255,0.2)]
                            ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                            max-w-[80vw] overflow-hidden`}
                style={{ willChange: 'transform' }}
            >
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-4 border-b border-[rgba(255,215,0,0.3)] dark:border-[rgba(255,255,255,0.2)]">
                    <span className="text-fg font-semibold text-sm xs:text-base">Menu</span>
                    <button 
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2 text-fg hover:text-[#FFD700] transition-colors"
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                
                {/* Mobile Menu Links */}
                <div className="flex flex-col gap-4 py-6 px-4 h-full overflow-y-auto">
                    <a 
                        href="#top" 
                        className="text-fg hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-base xs:text-lg font-medium py-2 px-3 rounded-lg hover:bg-[rgba(255,215,0,0.1)]"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a 
                        href="#about" 
                        className="text-fg hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-base xs:text-lg font-medium py-2 px-3 rounded-lg hover:bg-[rgba(255,215,0,0.1)]"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        About
                    </a>
                    <a 
                        href="#skills" 
                        className="text-fg hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-base xs:text-lg font-medium py-2 px-3 rounded-lg hover:bg-[rgba(255,215,0,0.1)]"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Skills
                    </a>
                    <a 
                        href="#projects" 
                        className="text-fg hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-base xs:text-lg font-medium py-2 px-3 rounded-lg hover:bg-[rgba(255,215,0,0.1)]"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a 
                        href="#contact" 
                        className="text-fg hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-base xs:text-lg font-medium py-2 px-3 rounded-lg hover:bg-[rgba(255,215,0,0.1)]"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;