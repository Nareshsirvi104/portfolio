// src/components/navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const links = [
  { to: 'home', label: 'Home' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'Work', label: 'Work' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full py-4 px-6 md:px-8 z-50 transition-all duration-300 text-white ${
        isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold gradient-text cursor-default"
        >
          Naresh Sirvi
        </motion.h1>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8">
          {isMounted &&
            links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                smooth
                duration={500}
                spy
                onSetActive={() => setActive(link.to)}
                className={`relative text-lg font-bold cursor-pointer transition-colors duration-300 ${
                  active === link.to ? 'text-accent-orange' : 'text-white hover:text-accent-orange'
                }`}
              >
                {link.label}
                {active === link.to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-orange to-accent-pink rounded-full"
                  />
                )}
              </Link>
            ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-3xl z-50"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                className="block"
              >
                <HiX />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                className="block"
              >
                <HiMenu />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden glass mt-4 rounded-xl"
          >
            <div className="flex flex-col items-center py-6 space-y-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={link.to}
                    smooth
                    duration={500}
                    onClick={() => setMenuOpen(false)}
                    className="text-xl font-bold cursor-pointer hover:text-accent-orange transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
