// src/pages/Skills.js
import React from 'react';
import { FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3, FaDocker} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiMysql, SiExpress, SiMongodb, SiRedux } from 'react-icons/si';
import { SiCplusplus } from 'react-icons/si';
import { motion } from 'framer-motion';

// Data array for skills
const skills = [
  { name: 'Java', icon: <FaJava /> },
  { name: 'JavaScript', icon: <IoLogoJavascript /> },
  { name: 'c++', icon: <SiCplusplus /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express.js', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Redux', icon: <SiRedux /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3 /> },
  { name: 'Docker', icon: <FaDocker /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-black/40 text-white relative">
      <div className="container mx-auto px-6">
        {/* Section Heading and Subheading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-accent-orange uppercase tracking-widest text-sm font-semibold">Toolbox</span>
          <h2 className="text-4xl font-bold mb-2 mt-2">
            What I <span className="gradient-text">do</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing measurable proficiency: highlighting specific, teachable abilities and
            quantifiable knowledge in my portfolio.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative flex flex-col items-center p-6 glass rounded-xl shadow-md cursor-pointer border border-white/5 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              whileHover={{ y: -8, scale: 1.04 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/0 via-accent-orange/0 to-accent-pink/0 group-hover:from-accent-orange/10 group-hover:to-accent-pink/10 transition-all duration-300" />
              <motion.div
                className="text-5xl text-white mb-4 relative z-10"
                whileHover={{ rotate: [0, -10, 10, -6, 0], scale: 1.15 }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-white relative z-10">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;