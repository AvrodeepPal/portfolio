'use client';
import { motion } from 'framer-motion';
import { educationData, animationVariants } from '@/app/assets/data/educationData';

export default function EducationTimeline() {
  return (
    <motion.div variants={animationVariants.fadeInUp}>
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
                variants={animationVariants.timelineVariants}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-[#ffe31f] shadow"
              />
            </div>
            
            <motion.div 
              variants={animationVariants.timelineVariants}
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
  );
}