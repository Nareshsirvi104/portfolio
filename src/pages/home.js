// src/pages/home.js
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const roles = ['MERN Stack Developer', 'React.js Enthusiast', 'Full-Stack Engineer', 'UI Craftsman'];

const useTypewriter = (words, speed = 90, pause = 1400) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text === currentWord) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setWordIndex((prev) => prev + 1);
    } else {
      timeout = setTimeout(() => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
        );
      }, deleting ? speed / 2 : speed);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
};

const Home = () => {
  const myEmail = 'nareshsirvi842@gmail.com';
  const subject = 'Job Inquiry From Your Portfolio';
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-5 py-24 sm:p-10 overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* Left Column: Text and Buttons */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-widest text-accent-orange font-semibold mb-3"
          >
            Welcome to my portfolio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-light-text mb-4 text-shadow-glow"
          >
            Hi! I'm <span className="gradient-text">Naresh Sirvi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="min-h-[2.2rem] sm:h-10 mb-4 text-lg sm:text-2xl md:text-3xl font-semibold text-gray-200"
          >
            {typed}
            <span className="inline-block w-[2px] h-5 sm:h-6 md:h-8 bg-accent-orange ml-1 animate-pulse align-middle" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-xl"
          >
            Passionate about code that makes a difference, one pixel at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
          >
            <motion.a
              whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(255,101,47,0.6)' }}
              whileTap={{ scale: 0.96 }}
              href="/Docs/Naresh_Sirvi RESUME.pdf"
              download
              className="bg-accent-orange text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
            >
              Download My CV
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              href={`mailto:${myEmail}?subject=${encodeURIComponent(subject)}`}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-md hover:bg-white hover:text-accent-orange transition-colors duration-300"
            >
              Hire Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center md:justify-start gap-6 text-2xl"
          >
            <a href="https://github.com/Nareshsirvi104" target="_blank" rel="noreferrer" className="hover:text-accent-orange transition-colors">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/naresh-sirvi-526b27277" target="_blank" rel="noreferrer" className="hover:text-accent-orange transition-colors">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/mr_sirvi_11" target="_blank" rel="noreferrer" className="hover:text-accent-orange transition-colors">
              <FaInstagram />
            </a>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 flex justify-center">
          <motion.div
            className="relative w-64 h-64 md:w-96 md:h-96 animate-float"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.6, type: 'spring', stiffness: 80, damping: 10 }}
          >
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-accent-orange via-accent-pink to-accent-orange opacity-70 blur-2xl animate-gradient-x" />
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl outline outline-4 outline-offset-4 outline-accent-orange">
              <img
                src="/images/photo.jpg"
                alt="Naresh"
                className="absolute object-cover w-full h-full"
              />
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400"
      >
        <span className="text-xs tracking-widest uppercase mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-5 h-9 rounded-full border-2 border-gray-500 flex justify-center pt-1"
        >
          <span className="w-1 h-2 bg-accent-orange rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
