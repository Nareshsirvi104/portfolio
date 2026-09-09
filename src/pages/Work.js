// src/pages/Work.js
import React from 'react';
import { motion } from 'framer-motion';
import { BsCalendarFill, BsBriefcaseFill } from 'react-icons/bs';

const experienceData = [
  {
    id: 1,
    title: 'React.js Developer Intern',
    company: 'Celebal Technologies, Jaipur',
    dates: 'May, 2025',
    duties: [
      'Trained in MERN stack technologies, including MongoDB, Express.js, React.js, and Node.js. Developed and optimized full-stack web applications with responsive and user-friendly interfaces.',
    ],
  },
  {
    id: 2,
    title: 'Front-End Developer Intern',
    company: 'Grras Solution Pvt. Ltd., Jaipur',
    dates: 'Aug, 2023',
    duties: [
      'Worked hands-on with HTML, CSS, JavaScript, and Bootstrap for responsive web development.',
      'Followed tutorials on frontend development to build interactive UIs, gaining experience in web technologies.',
      'Skilled in designing, styling, and optimizing web pages for better user experience.',
    ],
  },
];

const Work = () => {
  return (
    <section id="Work" className="py-20 bg-black/40 text-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-orange uppercase tracking-widest text-sm font-semibold">Journey</span>
          <h2 className="text-4xl font-bold mt-2 mb-2">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing measurable proficiency: highlighting specific, teachable abilities and quantifiable knowledge.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10 md:pl-12">
          <div className="absolute left-4 md:left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-orange via-accent-pink to-transparent" />

          <div className="flex flex-col space-y-12">
            {experienceData.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline node */}
                <motion.div
                  whileInView={{ scale: [0.5, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="absolute -left-10 md:-left-12 top-1 w-8 h-8 rounded-full bg-dark-blue border-2 border-accent-orange flex items-center justify-center text-accent-orange shadow-lg shadow-accent-orange/30"
                >
                  <BsBriefcaseFill className="text-sm" />
                </motion.div>

                <div className="glass p-8 rounded-xl border border-white/5 hover:border-accent-orange/40 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{job.title}</h3>
                    <p className="text-gray-400 text-sm flex items-center space-x-2">
                      <BsCalendarFill className="text-accent-orange" />
                      <span>{job.dates}</span>
                    </p>
                  </div>
                  <h4 className="text-lg text-accent-orange font-semibold mb-4">{job.company}</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                    {job.duties.map((duty, i) => (
                      <li key={i}>{duty}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
