'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets } from '../assets/home/assets';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const timelineVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6, 
      ease: "easeOut"
    }
  }
};

const educationData = [
  {
    title: "Masters in Computer Applications (MCA)",
    institution: "Jadavpur University, Kolkata",
    details: "CGPA (upto 1st sem): 8.33 (2024 - 2026)"
  },
  {
    title: "B.Sc. Computer Science Honours",
    institution: "Barrackpore Rastraguru Surendranath College (affiliated to West Bengal State University)",
    details: "CGPA: 9.91 (2021 - 2024)"
  },
  {
    title: "St. Augustine's Day School, Barrackpore (ISC)",
    institution: "Score: 95.75% (2019 - 2021)",
    details: ""
  },
  {
    title: "St. Augustine's Day School, Barrackpore (ICSE)",
    institution: "Score: 91.80% (upto 2019)",
    details: ""
  }
];

export default function About({ isDark }) {
  return (
    <div id="about" className="bg-bg z-20 w-full px-[12%] py-20 scroll-mt-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-100px" }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3,
              delayChildren: 0.2
            }
          }
        }}
      >
        <motion.p 
          variants={fadeInUp}
          className="text-center text-base font-semibold uppercase tracking-wide text-fg"
        >
          About
        </motion.p>
        
        <motion.h2 
          variants={fadeInUp}
          className="text-center text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text
            bg-gradient-to-r from-[#F00F00] via-[#FFD000] to-[#FFCE00] mb-6"
        >
          My Introduction
        </motion.h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-10">
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-60 sm:w-80 max-w-none rounded-3xl overflow-hidden"
          >
            <Image
              src={assets.photo}
              alt="Profile"
              className="w-full rounded-3xl object-cover"
              priority
            />
          </motion.div>

          <div className="flex flex-1 flex-col gap-6">
            <motion.p 
              variants={fadeInUp}
              className="text-fg/80 leading-relaxed"
            >
              I'm a passionate and creative developer with a love for clean design,
              elegant code, and building meaningful user experiences. My journey
              spans from early coding curiosity to formal computer science education.
              I'm deeply interested in frontend engineering, motion UI, and modern web technologies.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <h4 className="text-2xl font-semibold mb-4 mt-6 text-fg">My Education</h4>

              <div className="flex flex-col md:grid grid-cols-12 relative">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden md:block col-start-2 col-end-3 absolute -top-3 left-1/2 -translate-x-1/2 text-[#ffe31f] text-xl"
                >
                  ▲
                </motion.div>

                {educationData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.3,
                      ease: "easeOut"
                    }}
                    className="flex md:contents"
                  >
                    <div className="col-start-2 col-end-3 mr-10 md:mx-auto relative">
                      <div className="h-full w-6 flex items-center justify-center">
                        <div className="h-full w-1 bg-[#ffe31f] pointer-events-none"></div>
                      </div>
                      <motion.div 
                        variants={timelineVariants}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#ffe31f] shadow"
                      />
                    </div>
                    
                    <motion.div 
                      variants={timelineVariants}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="border-2 border-[#ffe31f] col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto w-full bg-card cursor-pointer"
                    >
                      <h3 className="font-semibold text-xl text-fg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-fg/80">{item.institution}</p>
                      {item.details && (
                        <p className="text-sm text-fg/60">{item.details}</p>
                      )}
                    </motion.div>
                  </motion.div>
                ))}

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="hidden md:block col-start-2 col-end-3 absolute -bottom-4 left-1/2 -translate-x-1/2 text-[#ffe31f] text-xl"
                >
                  ▼
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}