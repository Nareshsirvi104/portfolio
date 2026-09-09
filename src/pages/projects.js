// src/pages/projects.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    name: 'BillCraft',
    description: 'BILLCRAFT is a full-featured MERN stack invoicing application for creating and managing invoices efficiently.',
    tech: ['React', 'Express.js', 'Axios','Bootstrap'],
    link: 'https://github.com/Nareshsirvi104/BillCraft',
    github: 'https://github.com/Nareshsirvi104/BillCraft',
  },
  {
    name: 'Laptop Galaxy',
    description: 'An e-commerce style laptop store with auth, routing and live data.',
    tech: ['React', 'Firebase', 'Tailwind', 'React-Router'],
    link: 'https://laptop-galaxy.vercel.app/',
    github: 'https://github.com/Nareshsirvi104/Laptop-Galaxy.git',
  },
   {
    name: 'Rupee Ledger',
    description:'Expense Tracker is a full-stack app for tracking expenses, visualizing spending, setting budgets, and exporting records as CSV.',
    tech: ['React', 'Node.js', 'Recharts','Vercel' ,'Render'],
    link: 'https://expense-tracker-kohl-five.vercel.app/',
    github: 'https://github.com/Nareshsirvi104/Expense-Tracker'
  },
  {
    name: 'CarHub',
   description:'CarHub is a MERN stack car-buying platform featuring advanced car filtering, browsing, purchasing, and an AI chatbot to help users find suitable vehicles.',
    tech: ['React',' Node.js', 'MongoDB','Express.js','Render'],
    link: 'https://github.com/Nareshsirvi104/carhub',
    github: 'https://github.com/Nareshsirvi104/carhub'
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-black/40 text-white py-20 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14 max-w-2xl mx-auto"
      >
        <span className="text-accent-orange uppercase tracking-widest text-sm font-semibold">Portfolio</span>
        <h2 className="text-4xl font-bold mt-2 mb-2">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-gray-400">
          A few things I've built while learning and shipping real features end-to-end.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            variants={item}
            whileHover={{ y: -10 }}
            className="group relative glass rounded-2xl p-8 border border-white/5 overflow-hidden"
          >
            {/* animated gradient border glow on hover */}
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-accent-orange via-accent-pink to-accent-orange opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">
                  {proj.name}
                </h3>
                <div className="flex gap-3 text-xl">
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    href={proj.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${proj.name} GitHub repository`}
                    className="text-gray-300 hover:text-accent-orange transition-colors"
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${proj.name} live demo`}
                    className="text-gray-300 hover:text-accent-orange transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </div>

              <p className="text-gray-400 mb-5">{proj.description}</p>

              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-accent-orange hover:text-accent-pink transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold text-gray-300 hover:text-white transition-colors"
                >
                  Source Code →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
