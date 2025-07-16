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
            
            <a href="#top" className="min-w-55 flex justify-center rounded-full bg-bg shadow-sm bg-opacity-50">
                <Image src={assets.logo} className='min-w-50 w-50 h-auto cursor-pointer transition-smooth' alt='logo'/>
            </a>
            
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-2 bg-bg text-fg shadow-sm bg-opacity-50">
                <li><a href="#top" className="nav-hover">Home</a></li>
                <li><a href="#about" className="nav-hover">About</a></li>
                <li><a href="#skills" className="nav-hover">Skills</a></li>
                <li><a href="#projects" className="nav-hover">Projects</a></li>
                <li><a href="#contact" className="nav-hover">Contact</a></li>
            </ul>
            
            <div className="flex items-center gap-2 justify-between">
                
                {/* Dark Mode Toggle */}
                <div className="flex items-center justify-center p-2 rounded-full bg-bg shadow-sm bg-opacity-50">
                    <DarkModeSwitch
                        checked={isDark}
                        onChange={toggleDarkMode}
                        size={24}
                    />
                </div>
                
                <div className="lg:flex items-center gap-3 px-4 py-2 border border-gray-400 dark:border-gray-500 bg-bg text-fg rounded-full">
                    <span>Connect</span>
                </div>
                
                <div className="block md:hidden ml-3 z-50">
                    <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-500 text-fg">Menu</button>
                </div>
            </div>

            {/* mobile menu */}
            <ul className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-60 top-0 bottom-0 w-60 z-50 h-screen bg-rose-50 dark:bg-bg text-fg transition-smooth duration-500">
                <li><a href="#top" className="nav-hover">Home</a></li>
                <li><a href="#about" className="nav-hover">About</a></li>
                <li><a href="#skills" className="nav-hover">Skills</a></li>
                <li><a href="#projects" className="nav-hover">Projects</a></li>
                <li><a href="#contact" className="nav-hover">Contact</a></li>
            </ul>

        </nav>
    );
};

export default Navbar;