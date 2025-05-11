'use client';
import Image from 'next/image';
import { assets } from '../assets/home/assets'; // Adjust path as needed

export default function About() {
  return (
    <div id="about" className="
        w-full px-[12%] py-10 scroll-mt-20">
      
      <h3 className="text-center mb-2 text-lg text-gray-600">Introduction</h3>
      <h4 className="text-center text-5xl font-semibold">About Me</h4>

      <div className="flex w-full flex-col lg:flex-row items-center gap-10 my-20">
        {/* Left Side: Profile Image */}
        <div className="w-60 sm:w-80 max-w-none rounded-3xl overflow-hidden">
          <Image
            src={assets.photo}
            alt="Profile"
            className="w-full rounded-3xl object-cover"
            priority
          />
        </div>

        {/* Right Side: Description + Education */}
        <div className="flex flex-1 flex-col gap-6">
          <div>
            <p className="text-gray-700 leading-relaxed">
              I’m a passionate and creative developer with a love for clean design, elegant
              code, and building meaningful user experiences. My journey spans from early
              coding curiosity to formal computer science education. I'm deeply interested
              in frontend engineering, motion UI, and modern web technologies.
            </p>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-2">My Education</h4>
            <div>
              {/* Education Timeline Placeholder */}
              <p className="text-gray-500 italic">[Timeline structure to be added later]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}