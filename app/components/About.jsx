'use client';
import Image from 'next/image';
import { assets } from '../assets/home/assets';

export default function About({ isDark }) {
  return (
    <div id="about" className="bg-bg z-20 w-full px-[12%] py-20 scroll-mt-0">
      <p className="text-center text-base font-semibold uppercase tracking-wide text-[#fdd017]">About</p>
      <h2 className="text-center text-3xl sm:text-5xl font-bold tracking-tight text-fg mb-6">My Introduction</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="w-60 sm:w-80 max-w-none rounded-3xl overflow-hidden">
          <Image
            src={assets.photo}
            alt="Profile"
            className="w-full rounded-3xl object-cover"
            priority
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-1 flex-col gap-6">
          <p className="text-fg/80 leading-relaxed">
            I'm a passionate and creative developer with a love for clean design,
            elegant code, and building meaningful user experiences. My journey
            spans from early coding curiosity to formal computer science education.
            I'm deeply interested in frontend engineering, motion UI, and modern web technologies.
          </p>

          <div>
            <h4 className="text-2xl font-semibold mb-4 mt-6 text-fg">My Education</h4>

            <div className="flex flex-col md:grid grid-cols-12 relative">
              {/* ↑ Arrow */}
              <div className="hidden md:block col-start-2 col-end-3 absolute -top-3 left-1/2 -translate-x-1/2 text-[#ffe31f] text-xl animate-bounce">
                ▲
              </div>

              {/* Entry 1 */}
              <div className="flex md:contents">
                <div className="col-start-2 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-[#ffe31f] pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#ffe31f] shadow"></div>
                </div>
                <div className="border-2 border-[#ffe31f] col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto w-full bg-card">
                  <h3 className="font-semibold text-xl text-fg mb-1">
                    Masters in Computer Applications (MCA)
                  </h3>
                  <p className="text-fg/80">Jadavpur University, Kolkata</p>
                  <p className="text-sm text-fg/60">CGPA (upto 1st sem): <strong>8.33</strong></p>
                </div>
              </div>

              {/* Entry 2 */}
              <div className="flex md:contents">
                <div className="col-start-2 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-[#ffe31f] pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#ffe31f] shadow"></div>
                </div>
                <div className="border-2 border-[#ffe31f] col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto w-full bg-card">
                  <h3 className="font-semibold text-xl text-fg mb-1">
                    B.Sc. Computer Science Honours
                  </h3>
                  <p className="text-fg/80">
                    Barrackpore Rastraguru Surendranath College (affiliated to West Bengal State University)
                  </p>
                  <p className="text-sm text-fg/60">CGPA: <strong>9.91</strong></p>
                </div>
              </div>

              {/* Entry 3 */}
              <div className="flex md:contents">
                <div className="col-start-2 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-[#ffe31f] pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#ffe31f] shadow"></div>
                </div>
                <div className="border-2 border-[#ffe31f] col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto w-full bg-card">
                  <h3 className="font-semibold text-xl text-fg mb-1">
                    St. Augustine's Day School, Barrackpore (ISC)
                  </h3>
                  <p className="text-fg/80">Score: <strong>95.75%</strong></p>
                </div>
              </div>

              {/* Entry 4 */}
              <div className="flex md:contents">
                <div className="col-start-2 col-end-3 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-[#ffe31f] pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#ffe31f] shadow"></div>
                </div>
                <div className="border-2 border-[#ffe31f] col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto w-full bg-card">
                  <h3 className="font-semibold text-xl text-fg mb-1">
                    St. Augustine's Day School, Barrackpore (ICSE)
                  </h3>
                  <p className="text-fg/80">Score: <strong>91.80%</strong></p>
                </div>
              </div>

              {/* ↓ Arrow */}
              <div className="hidden md:block col-start-2 col-end-3 absolute -bottom-4 left-1/2 -translate-x-1/2 text-[#ffe31f] text-xl animate-bounce">
                ▼
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}