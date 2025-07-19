import { motion } from 'framer-motion';
import { animationVariants } from '@/app/assets/data/contactData';

const ContactForm = ({ onSubmit, isSubmitting }) => {
  return (
    <motion.div 
      variants={animationVariants.slideInRight}
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
          variants={animationVariants.fadeInUp}
          className="text-2xl font-bold mb-6 text-fg"
        >
          Any message for me?
        </motion.h2>
        
        <motion.form 
          onSubmit={onSubmit} 
          className="space-y-6"
          variants={animationVariants.formContainer}
        >
          <motion.input
            variants={animationVariants.fadeInUp}
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full rounded-md border border-input-border bg-input-bg text-fg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff1e1e] placeholder:text-fg/50"
            required
            disabled={isSubmitting}
          />

          <motion.div 
            variants={animationVariants.fadeInUp}
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
            variants={animationVariants.fadeInUp}
            name="message"
            rows="5"
            placeholder="Write your message..."
            className="w-full rounded-md border border-input-border bg-input-bg text-fg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ff1e1e] placeholder:text-fg/50"
            required
            disabled={isSubmitting}
          />

          <motion.button
            variants={animationVariants.fadeInUp}
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
  );
};

export default ContactForm;