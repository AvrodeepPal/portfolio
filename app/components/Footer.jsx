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
            className="text-fg/60 hover:text-fg transition"
          >
            <Image src={assets.github} alt="GitHub" width={20} height={20} />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/avrodeeppal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fg/60 hover:text-blue-500 transition"
          >
            <Image src={assets.linkedin} alt="LinkedIn" width={20} height={20} />
          </a>
        </li>
      </ul>
    </footer>
  );
}