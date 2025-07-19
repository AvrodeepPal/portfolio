'use client';
import Image from 'next/image';
import { assets } from '@/app/assets/home/assets';

export default function Footer({ isDark }) {
  return (
    <footer className="w-full py-7 px-4 flex flex-col items-center text-center border-t bg-bg border-border">
      <h6 className="text-sm text-fg/80 mb-4">
        © 2025. Made with{' '}
        <Image
          src={assets.heart}
          alt="Heart"
          width={16}
          height={16}
          className="inline mx-1 animate-pulse"
        />{' '}
        by <span className="text-[#fdd017] font-medium">Avrodeep Pal</span>. All Rights Reserved.
      </h6>

      <ul className="flex justify-center gap-6 mt-2">
        <li>
          <a
            href="https://github.com/AvrodeepPal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg/60 hover:text-fg transition flex items-center justify-center w-5 h-5"
          >
            <Image src={assets.github} alt="GitHub" width={20} height={20} className="w-full h-full object-contain" />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/avrodeeppal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg/60 hover:text-blue-500 transition flex items-center justify-center w-5 h-5"
          >
            <Image src={assets.linkedin} alt="LinkedIn" width={20} height={20} className="w-full h-full object-contain" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/avrodeeppal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg/60 hover:text-pink-500 transition flex items-center justify-center w-5 h-5"
          >
            <Image src={assets.instagram} alt="Instagram" width={20} height={20} className="w-full h-full object-contain" />
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/u/AvrodeepPal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg/60 hover:text-orange-500 transition flex items-center justify-center w-5 h-5"
          >
            <Image src={assets.leetcode} alt="LeetCode" width={20} height={20} className="w-full h-full object-contain" />
          </a>
        </li>
      </ul>
    </footer>
  );
}