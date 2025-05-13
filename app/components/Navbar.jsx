import Image from 'next/image';
import React from 'react';
import { assets } from '../assets/home/assets';

const Navbar = () => {
    return (
        <nav className="w-full fixed px-5 lg:px-8 xl:px-10 py-2 flex items-center justify-between z-50 bg-white bg-opacity-50 shadow-sm">
            
            <a href="#top" className="inline-block">
                <Image src={assets.logo} className='min-w-50 w-50 h-auto cursor-pointer transition-smooth' alt='logo'/>
            </a>
            
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-2">
                <li><a href="#top" className="hover:text-gray-700">Home</a></li>
                <li><a href="#about" className="hover:text-gray-700">About</a></li>
                <li><a href="#skills" className="hover:text-gray-700">Skills</a></li>
                <li><a href="#projects" className="hover:text-gray-700">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
            </ul>
            
            <div className="flex items-center gap-4">
                
                <div className="hidden lg:flex items-center gap-3 px-4 py-2 border border-gray-500 rounded-full">
                    <span>Connect</span>
                </div>
                
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">Toggle</button>
                </div>
                
                <div className="block md:hidden ml-3 z-50">
                    <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">Menu</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;