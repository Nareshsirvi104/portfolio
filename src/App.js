// App.js
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/navbar';
import Home from './pages/home';

import Projects from './pages/projects';
import Contact from './pages/contact';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Work from './pages/Work';

import AmbientBackground from './components/AmbientBackground';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>

      <AmbientBackground />
      <ScrollProgress />

      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Work />
      <Contact />
      <Footer />

      <BackToTop />
    </>
  );
}

export default App;

// service_c9eyevp
// 2i_8Xs0yJ3Qd-le14
