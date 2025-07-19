'use client';
import { useContactForm } from '@/app/assets/hooks/useContactForm';
import { motion } from 'framer-motion';
import Toast from './Toast';
import { animationVariants } from '@/app/assets/data/contactData';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function Contact({ isDark }) {
  const {
    result,
    isSubmitting,
    showToast,
    toastType,
    onSubmit,
    hideToast
  } = useContactForm();

  return (
    <section id="contact" className="w-full px-4 sm:px-8 md:px-[12%] py-20 scroll-mt-0 bg-bg">
      <div className="max-w-7xl mx-auto">
        <Toast
          show={showToast}
          type={toastType}
          message={result}
          onClose={hideToast}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={animationVariants.staggerContainer}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.p 
              variants={animationVariants.fadeInUp}
              className="text-base font-semibold uppercase tracking-wide text-fg"
            >
              Contact
            </motion.p>
            <motion.h2 
              variants={animationVariants.fadeInUp}
              className="text-center text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text
              bg-gradient-to-r from-[#F00F00] via-[#FFD000] to-[#FFCE00] mb-6"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              variants={animationVariants.fadeInUp}
              className="text-xl text-fg/80"
            >
              I'd love to hear from you! Let's create something great together.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <ContactInfo />
            <ContactForm onSubmit={onSubmit} isSubmitting={isSubmitting} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}