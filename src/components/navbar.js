// src/components/navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // New state to manage delay

  useEffect(() => {
    // Delay setting isMounted to true
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 100); // 100ms delay to ensure all elements are in the DOM

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer); // Clean up the timer
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full py-5 px-8 z-55 transition-colors duration-300 text-white ${isScrolled ? 'bg-gray-900 shadow' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center max-w-full">
        <h1 className="text-2xl font-bold">Naresh Sirvi</h1>
        <div className="space-x-9">
          {isMounted && ( // Conditionally render links after the delay
            <>
              <Link to="home" smooth duration={500} className=" text-lg font-bold cursor-pointer hover:text-orange-400">Home</Link>
              <Link to="skills" smooth duration={500} className="text-lg font-bold cursor-pointer hover:text-orange-400">Skills</Link>
              <Link to="projects" smooth duration={500} className="text-lg font-bold  cursor-pointer hover:text-orange-400">Projects</Link>
              <Link to="Work" smooth duration={500} className=" text-lg font-bold cursor-pointer hover:text-orange-400">Work</Link>
              <Link to="contact" smooth duration={500} className="text-lg font-bold cursor-pointer hover:text-orange-400">Contact</Link>

            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;