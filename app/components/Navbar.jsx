import Image from 'next/image';
import React from 'react';
import { assets } from '../assets/home/assets';

const Navbar = () => {
    return (
        <nav className="w-full fixed px-5 lg:px-8 xl:px-10 py-2 flex items-center justify-between z-50">
            
            <a href="#top" className="min-w-55 flex justify-center rounded-full bg-white shadow-sm bg-opacity-50">
                <Image src={assets.logo} className='min-w-50 w-50 h-auto cursor-pointer transition-smooth' alt='logo'/>
            </a>
            
            <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-10 py-2 bg-white shadow-sm bg-opacity-50">
                <li><a href="#top" className="hover:text-gray-700">Home</a></li>
                <li><a href="#about" className="hover:text-gray-700">About</a></li>
                <li><a href="#skills" className="hover:text-gray-700">Skills</a></li>
                <li><a href="#projects" className="hover:text-gray-700">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
            </ul>
            
            <div className="flex items-center gap-2 justify-between">
                
                <div className="lg:flex items-center gap-3 px-4 py-2 border border-gray-500 bg-white rounded-full">
                    <span>Connect</span>
                </div>
                
                <div className="block md:hidden ml-3 z-50">
                    <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">Menu</button>
                </div>
            </div>

            {/* mobile menu */}

            <ul className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-60 top-0 bottom-0 w-60 z-50 h-screen bg-rose-50 transition-smooth duration-500'>
                <li><a href="#top" className="hover:text-gray-700">Home</a></li>
                <li><a href="#about" className="hover:text-gray-700">About</a></li>
                <li><a href="#skills" className="hover:text-gray-700">Skills</a></li>
                <li><a href="#projects" className="hover:text-gray-700">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-700">Contact</a></li>
            </ul>

        </nav>
    );
};

export default Navbar;