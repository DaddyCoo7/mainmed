import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FloatingChatButtonProps {
  onOpen: () => void;
}

const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-3 mr-2 max-w-[280px]"
          >
            <div className="bg-white rounded-2xl shadow-xl px-5 py-4 border border-blue-100">
              <p className="text-sm font-semibold text-gray-900 mb-1">
                Got a Query?
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Chat with our AI RCM Specialist
              </p>
            </div>
            <div className="w-4 h-4 bg-white border-r border-b border-blue-100 transform rotate-45 absolute -bottom-1 right-8"></div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={onOpen}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="cursor-pointer group relative"
        style={{
          width: '192.5px',
          height: '192.5px',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        aria-label="Open chat with AI RCM Specialist"
      >
        <motion.div
          className="relative w-full h-full"
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="relative z-10">
            <img
              src="/medchatlogo.svg"
              alt="MedChat AI"
              className="w-full h-full object-contain drop-shadow-xl"
            />
          </div>

          <span className="absolute -top-2 -left-2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white animate-pulse shadow-lg z-20"></span>
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingChatButton;
