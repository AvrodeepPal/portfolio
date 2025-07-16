'use client';
import Image from 'next/image';
import { assets } from '../assets/home/assets';
import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

export default function Contact({ isDark }) {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastType, setToastType] = useState('success');

  const showToastMessage = (type, message) => {
    setToastType(type);
    setResult(message);
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 10000);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "78f6d9d8-39e1-454f-976b-81c97531756a");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        showToastMessage('success', "Message sent successfully! Will contact back asap!");
        event.target.reset();
      } else {
        console.log("Error", data);
        showToastMessage('error', data.message || "Something went wrong! Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      showToastMessage('error', "Network error! Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full px-[12%] py-20 scroll-mt-0 bg-bg">
      <div className="max-w-7xl mx-auto">
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
              toastType === 'success' 
                ? 'bg-toast-success text-white' 
                : 'bg-toast-error text-white'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{result}</span>
              <button 
                onClick={() => setShowToast(false)}
                className="ml-4 text-white hover:text-gray-200"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
              }
            }
          }}
        >
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.p 
              variants={fadeInUp}
              className="text-base font-semibold uppercase tracking-wide text-fg"
            >
              Contact
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className="text-center text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text
              bg-gradient-to-r from-[#F00F00] via-[#FFD000] to-[#FFCE00] mb-6"
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-fg/80"
            >
              I'd love to hear from you! Let's create something great together.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <motion.div 
              variants={slideInLeft}
              className="pr-6"
            >
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-fg/80 mb-12"
              >
                Reach out to me for collaboration, freelancing, or any inquiries. I'm always open to meaningful conversations.
              </motion.p>

              <motion.div
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.2
                    }
                  }
                }}
              >
                <motion.div 
                  variants={slideInLeft}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start mb-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fdd017] text-white">
                    <Image src={assets.location} alt="location" width={20} height={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-fg mb-1">Address</h3>
                    <p className="text-fg/80">7/23 Poddar Nagar, Jadavpur</p>
                    <p className="text-fg/80">Kolkata, India</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={slideInLeft}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start mb-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fdd017] text-white">
                    <Image src={assets.calling} alt="phone" width={20} height={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-fg mb-1">Phone</h3>
                    <p className="text-fg/80">+91 85838 42681</p>
                  </div>
                </motion.div>

                <motion.div 
                  variants={slideInLeft}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex items-start"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-[#fdd017] text-white">
                    <Image src={assets.email} alt="email" width={20} height={20} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-fg mb-1">Email</h3>
                    <p className="text-fg/80">avrodeep.pal17@gmail.com</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={slideInRight}
              className="relative"
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute inset-0 bg-gradient-to-r from-[#ffe31f] to-[#ff1e1e] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl z-0"
              />

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative z-10 bg-card rounded-3xl p-6 md:p-10 shadow-xl border border-border"
              >
                <motion.h2 
                  variants={fadeInUp}
                  className="text-2xl font-bold mb-6 text-fg"
                >
                  Any message for me?
                </motion.h2>
                
                <motion.form 
                  onSubmit={onSubmit} 
                  className="space-y-6"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.2
                      }
                    }
                  }}
                >
                  <motion.input
                    variants={fadeInUp}
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full rounded-md border border-input-border bg-input-bg text-fg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff1e1e] placeholder:text-fg/50"
                    required
                    disabled={isSubmitting}
                  />

                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-col xl:flex-row gap-4"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="flex-1 rounded-md border border-input-border bg-input-bg text-fg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff1e1e] placeholder:text-fg/50"
                      required
                      disabled={isSubmitting}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      className="flex-1 rounded-md border border-input-border bg-input-bg text-fg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff1e1e] placeholder:text-fg/50"
                      disabled={isSubmitting}
                    />
                  </motion.div>

                  <motion.textarea
                    variants={fadeInUp}
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full rounded-md border border-input-border bg-input-bg text-fg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff1e1e] placeholder:text-fg/50"
                    required
                    disabled={isSubmitting}
                  />

                  <motion.button
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 font-semibold rounded-md cursor-pointer transition ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-[#ff1e1e] hover:bg-red-600'
                    } text-white`}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </motion.button>
                </motion.form>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}