import { motion } from 'framer-motion';
import { animationVariants } from '@/app/assets/data/contactData';

const ContactForm = ({ onSubmit, isSubmitting, errors = {}, validateField }) => {
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (validateField) {
      validateField(name, value);
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target;
    if (errors[name] && validateField) {
      validateField(name, '');
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClasses = "w-full rounded-md border bg-input-bg text-fg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 placeholder:text-[#a0a0a0] transition-colors";
    const errorClasses = errors[fieldName] 
      ? "border-red-500 focus:ring-red-500" 
      : "border-input-border focus:ring-[#ff1e1e]";
    
    return `${baseClasses} ${errorClasses}`;
  };

  const ErrorMessage = ({ fieldName }) => {
    if (!errors[fieldName]) return null;
    
    return (
      <motion.p 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-red-500 text-sm mt-1 flex items-center gap-1"
      >
        <span className="text-xs">⚠️</span>
        {errors[fieldName]}
      </motion.p>
    );
  };

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
          noValidate
        >
          <motion.div variants={animationVariants.fadeInUp}>
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              className={getInputClassName('name')}
              required
              disabled={isSubmitting}
              onBlur={handleBlur}
              onFocus={handleFocus}
              autoComplete="name"
            />
            <ErrorMessage fieldName="name" />
          </motion.div>

          <motion.div 
            variants={animationVariants.fadeInUp}
            className="flex flex-col md:flex-row gap-4"
          >
            <div className="w-full md:flex-1">
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                className={getInputClassName('email')}
                required
                disabled={isSubmitting}
                onBlur={handleBlur}
                onFocus={handleFocus}
                autoComplete="email"
              />
              <ErrorMessage fieldName="email" />
            </div>
            
            <div className="w-full md:flex-1">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone No. (optional)"
                className={getInputClassName('phone')}
                disabled={isSubmitting}
                onBlur={handleBlur}
                onFocus={handleFocus}
                autoComplete="tel"
                pattern="^\+?[0-9\s\-().]{7,20}$"
                title="Please enter a valid phone number"
              />
              <ErrorMessage fieldName="phone" />
            </div>
          </motion.div>

          <motion.div variants={animationVariants.fadeInUp}>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message... *"
              className={getInputClassName('message')}
              required
              disabled={isSubmitting}
              onBlur={handleBlur}
              onFocus={handleFocus}
            />
            <ErrorMessage fieldName="message" />
          </motion.div>

          <motion.button
            variants={animationVariants.fadeInUp}
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 font-semibold rounded-md cursor-pointer transition-all duration-200 ${
              isSubmitting 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-[#ff1e1e] hover:bg-red-600 hover:shadow-lg'
            } text-white`}
          >
            <span className="flex items-center justify-center gap-2">
              {isSubmitting && (
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              )}
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </span>
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;