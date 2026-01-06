// src/pages/home.js
import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
const Home = () => {
    const myEmail='nareshsirvi842@gmail.com';
    const subject='Job Inquiry From Your Portfolio';
  return (
    <section id="home" className="h-screen flex items-center justify-center p-10 bg-dark-blue">
      <div className="container mx-auto flex flex-col md:flex-row items-center">

        {/* Left Column: Text and Buttons */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-light-text mb-4"
          >
            Hi! I'm Naresh Sirvi<br />MERN Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-400 mb-8"
          >
           Passionate about code that makes a difference, one pixel at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center md:justify-start space-x-4"
          >
            <a
    href="/Docs/Naresh_Sirvi RESUME.pdf"
    download // This attribute tells the browser to download the file
    className="bg-accent-orange text-white font-bold py-3 px-6 rounded-md hover:bg-orange-600 transition-colors duration-300"
  >
    Download My CV
  </a>

           <a
              href={`mailto:${myEmail}?subject=${encodeURIComponent(subject)}`}
             className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-md hover:bg-white hover:text-accent-orange transition-colors duration-300"
            >
              Hire Me
            </a>



          </motion.div>
        </div>

        {/* Right Column: Image */}
       <div className="md:w-1/2 flex justify-center">
          <motion.div
            className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg outline outline-4 outline-offset-4 outline-accent-orange"
            initial={{ opacity: 0, y: 50, scale: 0.8 }} // Initial vertical offset and smaller scale
            animate={{ opacity: 1, y: 0, scale: 1 }} // Animates to final position
            transition={{
              duration: 1.5,
              delay: 0.6,
              type: 'spring',
              stiffness: 80,
              damping: 10, // Adjust damping for the bounce effect
            }}
          >
            <img
              src="/images/photo.jpg"
              alt="Naresh"
              className="absolute object-cover w-full h-full"
            />
          </motion.div>
        </div>

      </div>
        <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </section>
  );
};

export default Home;