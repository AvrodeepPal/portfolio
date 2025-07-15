import Image from 'next/image';
import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { assets } from '../assets/home/assets';

const Navbar = ({ isDark, setDark }) => {

    const toggleDarkMode = (checked) => {
        setDark(checked);
        if (checked) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <nav className="w-full fixed px-5 lg:px-8 xl:px-10 py-2 flex items-center justify-between z-50">
            
            <a href="#top" className={`min-w-55 flex justify-center rounded-full ${isDark ? 'bg-[#171717]' : 'bg-white'} shadow-sm bg-opacity-50`}>
                <Image src={assets.logo} className='min-w-50 w-50 h-auto cursor-pointer transition-smooth' alt='logo'/>
            </a>
            
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-2 ${isDark ? 'bg-[#171717] text-[#ffffff]' : 'bg-white text-black'} shadow-sm bg-opacity-50`}>
                <li><a href="#top" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>Home</a></li>
                <li><a href="#about" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>About</a></li>
                <li><a href="#skills" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>Skills</a></li>
                <li><a href="#projects" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>Projects</a></li>
                <li><a href="#contact" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>Contact</a></li>
            </ul>
            
            <div className="flex items-center gap-2 justify-between">
                
                {/* Dark Mode Toggle */}
                <div className={`flex items-center justify-center p-2 rounded-full ${isDark ? 'bg-[#171717]' : 'bg-white'} shadow-sm bg-opacity-50`}>
                    <DarkModeSwitch
                        checked={isDark}
                        onChange={toggleDarkMode}
                        size={24}
                    />
                </div>
                
                <div className={`lg:flex items-center gap-3 px-4 py-2 border ${isDark ? 'border-gray-400 bg-[#171717] text-[#ffffff]' : 'border-gray-500 bg-white text-black'} rounded-full`}>
                    <span>Connect</span>
                </div>
                
                <div className="block md:hidden ml-3 z-50">
                    <button className={`p-2 rounded-full ${isDark ? 'bg-gray-600 hover:bg-gray-500 text-[#ffffff]' : 'bg-gray-200 hover:bg-gray-300 text-black'}`}>Menu</button>
                </div>
            </div>

            {/* mobile menu */}

            <ul className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-60 top-0 bottom-0 w-60 z-50 h-screen ${isDark ? 'bg-[#171717] text-[#ffffff]' : 'bg-rose-50 text-black'} transition-smooth duration-500`}>
                <li><a href="#top" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>Home</a></li>
                <li><a href="#about" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>About</a></li>
                <li><a href="#skills" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>Skills</a></li>
                <li><a href="#projects" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>Projects</a></li>
                <li><a href="#contact" className={`${isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>Contact</a></li>
            </ul>

        </nav>
    );
};

export default Navbar;