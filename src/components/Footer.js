// src/components/Footer.js
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Social Media Icons */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="https://github.com/Nareshsirvi104" className="text-2xl hover:text-accent-orange transition-colors duration-300" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/naresh-sirvi-526b27277" className="text-2xl hover:text-accent-orange transition-colors duration-300" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/mr_sirvi_11" className="text-2xl hover:text-accent-orange transition-colors duration-300" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm">
          Copyright © 2025 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;