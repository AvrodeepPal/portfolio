import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ show, type, message, onClose }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-xl text-white flex items-center gap-3 max-w-xl ${
            type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
        >
          {/* Emoji */}
          <span className="text-xl">
            {type === 'success' ? '✅' : '❌'}
          </span>

          {/* Message */}
          <span className="font-medium flex-1">{message}</span>

          {/* Close button */}
          <button
            onClick={onClose}
            className="ml-2 text-white hover:text-gray-200 text-xl font-bold focus:outline-none"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;
