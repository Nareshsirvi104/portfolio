// src/pages/Work.js
import React from 'react';
import { BsCalendarFill } from 'react-icons/bs'; // Importing the calendar icon

const experienceData = [
  {
    id: 1,
    title: 'Full-Stack Developer Intern',
    company: 'Mission Minded Foundation, Jaipur',
    dates: 'Aug, 2024',
    duties: [
      'Worked on real-world projects involving Firebase for backend services, including authentication, integrated with React.',
      'Used Bootstrap CSS to create responsive, modern, and visually appealing web interfaces.',
      'Implemented Firebase’s real-time database to build applications that update data dynamically as users interact.',
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
    <section id="Work" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section Heading and Subheading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">My Experience</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing measurable proficiency: Highlighting specific, teachable abilities and quantifiable knowledge in my portfolio.
          </p>
        </div>

        {/* Experience Cards Container */}
        <div className="flex flex-col space-y-8">
          {experienceData.map((job) => (
            <div key={job.id} className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{job.title}</h3>
                <p className="text-gray-400 text-sm flex items-center space-x-2">
                  <BsCalendarFill className="text-accent-orange" />
                  <span>{job.dates}</span>
                </p>
              </div>
              <h4 className="text-lg text-gray-300 font-semibold mb-4">{job.company}</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {job.duties.map((duty, index) => (
                  <li key={index}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
