// src/components/Preloader.js
import React from 'react';
import { motion } from 'framer-motion';

const letters = "Naresh Sirvi".split('');

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-dark-blue"
    >
      <div className="flex text-3xl md:text-5xl font-bold text-white mb-6">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.4 }}
            className={letter === ' ' ? 'mr-2' : 'gradient-text'}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <motion.div
        className="h-1 w-40 bg-white/10 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-accent-orange to-accent-pink"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
