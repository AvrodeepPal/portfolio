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

    return (
        <nav className="w-full fixed px-6 lg:px-8 xl:px-10 py-2 flex items-center justify-between z-50">
            <a
                href="#top"
                className="min-w-[200px] flex justify-center p-2 rounded-full 
                            bg-[rgba(255,215,0,0.15)] dark:bg-[rgba(255,255,255,0.1)] 
                            backdrop-blur-[10px] shadow-sm transition-all 
                            hover:bg-[rgba(255,215,0,0.25)] dark:hover:bg-[rgba(255,255,255,0.2)]"
                >
                <Image
                    src={assets.logo}
                    className="min-w-[100px] w-[170px] h-auto cursor-pointer transition-transform hover:scale-105"
                    alt="logo"
            />
            </a>

            
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 px-8 py-3 rounded-full
                           bg-[rgba(255,215,0,0.15)] dark:bg-[rgba(255,255,255,0.1)] 
                           backdrop-blur-[10px] text-fg shadow-sm transition-all">
                <li><a href="#top" className="nav-hover hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="nav-hover hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300">About</a></li>
                <li><a href="#skills" className="nav-hover hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300">Skills</a></li>
                <li><a href="#projects" className="nav-hover hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300">Projects</a></li>
                <li><a href="#contact" className="nav-hover hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
            
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center p-3 rounded-full 
                               bg-[rgba(255,215,0,0.15)] dark:bg-[rgba(255,255,255,0.1)] 
                               backdrop-blur-[10px] shadow-sm transition-all hover:bg-[rgba(255,215,0,0.25)] dark:hover:bg-[rgba(255,255,255,0.2)]">
                    <DarkModeSwitch
                        checked={isDark}
                        onChange={toggleDarkMode}
                        size={24}
                        moonColor="#FFD700"
                        sunColor="#FFD700"
                    />
                </div>

                <div className="block md:hidden z-70">
                    <button 
                        onClick={toggleMobileMenu}
                        className="p-2 rounded-full bg-[rgba(255,215,0,0.15)] dark:bg-[rgba(255,255,255,0.1)] 
                                  backdrop-blur-[10px] shadow-sm hover:bg-[rgba(255,215,0,0.3)] dark:hover:bg-[rgba(255,255,255,0.2)] 
                                  text-fg transition-all"
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            <div className={`fixed top-0 right-0 bottom-0 w-64 z-40 transform transition-transform duration-300 ease-in-out 
                             bg-[rgba(255,215,0,0.2)] dark:bg-[rgba(30,30,30,0.8)] backdrop-blur-[10px] 
                             border-l border-[rgba(255,215,0,0.3)] dark:border-[rgba(255,255,255,0.2)] 
                             ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col gap-6 py-20 px-8 h-full">
                    <a 
                        href="#top" 
                        className="text-fg hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-lg"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a 
                        href="#about" 
                        className="text-fg hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-lg"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        About
                    </a>
                    <a 
                        href="#skills" 
                        className="text-fg hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-lg"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Skills
                    </a>
                    <a 
                        href="#projects" 
                        className="text-fg hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-lg"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Projects
                    </a>
                    <a 
                        href="#contact" 
                        className="text-fg hover:text-[#FFD700] dark:hover:text-white transition-colors duration-300 text-lg"
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