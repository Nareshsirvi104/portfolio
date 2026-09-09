// src/components/Footer.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black/60 border-t border-white/5 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          {[
            { icon: <FaGithub />, href: 'https://github.com/Nareshsirvi104' },
            { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/naresh-sirvi-526b27277' },
            { icon: <FaInstagram />, href: 'https://www.instagram.com/mr_sirvi_11' },
          ].map((s, i) => (
            <motion.a
              key={i}
              whileHover={{ scale: 1.2, y: -3 }}
              href={s.href}
              className="text-2xl hover:text-accent-orange transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400">
          Copyright © 2025 <span className="text-accent-orange">Naresh Sirvi</span> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;