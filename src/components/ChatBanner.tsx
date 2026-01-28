import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

interface ChatBannerProps {
  onOpen: () => void;
}

const ChatBanner: React.FC<ChatBannerProps> = ({ onOpen }) => {
  return (
    <motion.div
      className="fixed left-1/2 transform -translate-x-1/2 z-40 pointer-events-none w-[90%] sm:w-[85%] md:w-[70%] lg:w-[50%] xl:w-[40%]"
      style={{ top: '90px' }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <motion.button
        onClick={onOpen}
        className="relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 py-3 sm:py-3.5 rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group pointer-events-auto w-full"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        style={{
          backdropFilter: 'blur(8px)',
          boxShadow: '0 8px 32px rgba(37, 99, 235, 0.25), 0 0 20px rgba(37, 99, 235, 0.15)',
        }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Bot className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
        </motion.div>

        <span className="text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap">
          Chat with AI RCM Specialist
        </span>

        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>

        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
          initial={false}
        />
      </motion.button>
    </motion.div>
  );
};

export default ChatBanner;
