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
    <section id="skills" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Section Heading and Subheading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">What I do</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing Measurable Proficiency: Highlighting Specific, Teachable Abilities and
            Quantifiable Knowledge in my Portfolio.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-md cursor-pointer border border-transparent hover:border-gray-500 transition-colors duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl text-white mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-white">
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