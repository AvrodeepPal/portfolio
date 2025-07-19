import Image from 'next/image';
import { motion } from 'framer-motion';
import { assets } from '@/app/assets/home/assets';
import { contactInfo, animationVariants } from '@/app/assets/data/contactData';

const ContactInfo = () => {
  return (
    <motion.div 
      variants={animationVariants.slideInLeft}
      className="pr-6"
    >
      <motion.p 
        variants={animationVariants.fadeInUp}
        className="text-lg text-fg/80 mb-12"
      >
        Reach out to me for collaboration, freelancing, or any inquiries. I'm always open to meaningful conversations.
      </motion.p>

      <motion.div
        variants={animationVariants.contactInfoContainer}
      >
        {contactInfo.map((info, index) => (
          <motion.div 
            key={index}
            variants={animationVariants.slideInLeft}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`flex items-start ${index < contactInfo.length - 1 ? 'mb-8' : ''}`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fdd017] text-white">
              <Image src={assets[info.icon]} alt={info.icon} width={20} height={20} />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-medium text-fg mb-1">{info.title}</h3>
              {info.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-fg/80">{detail}</p>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;