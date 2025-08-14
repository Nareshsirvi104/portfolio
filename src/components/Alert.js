// src/components/Alert.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Alert = ({ message, type, isVisible, onClose }) => {
  if (!isVisible) return null;

  const baseClasses = "fixed bottom-5 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-xl text-white";
  const typeClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
  };
  const iconClasses = {
    success: "✅",
    error: "❌",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className={`${baseClasses} ${typeClasses[type]}`}
      >
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{iconClasses[type]}</span>
          <span>{message}</span>
          <button onClick={onClose} className="ml-4 text-white text-lg font-bold">
            &times;
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;