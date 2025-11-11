'use client';
import Image from 'next/image';
import { assets, footerSocialLinks } from '@/app/assets/home/assets';

export default function Footer({ isDark }) {
  const getIconSrc = (social) => {
    return isDark ? social.iconLight : social.iconDark;
  };

  return (
    <footer className="w-full py-7 px-4 flex flex-col items-center text-center border-t bg-bg border-border">
      <h6 className="text-sm text-fg/80 mb-4">
        &copy; 2025. Made with{' '}
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
        {footerSocialLinks.map((social) => (
          <li key={social.key}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-fg/60 ${social.hoverColor} transition flex items-center justify-center w-5 h-5`}
            >
              <Image 
                src={getIconSrc(social)} 
                alt={social.alt} 
                width={20} 
                height={20} 
                className="w-full h-full object-contain" 
              />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
