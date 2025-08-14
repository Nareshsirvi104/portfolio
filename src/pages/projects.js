import React from 'react';

const projects = [
  {
    name: 'VideoCallApp',
    tech: 'React, Simple Peer, Socket.io,Bootstrap',
    link: 'https://yourfoodapp.netlify.app',
    github: 'https://github.com/Nareshsirvi104/videocallapp.git'
  },
  {
    name: 'Laptop Galaxy',
    tech: 'React, Firebase, Tailwind,React-Router',
    link: 'https://laptop-galaxy.vercel.app/',
    github: 'https://github.com/Nareshsirvi104/Laptop-Galaxy.git'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen bg-black text-white p-10">
        <br></br>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-gray-800 p-6 rounded shadow">
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="text-gray-400">{proj.tech}</p>
            <div className="mt-2">
              <a href={proj.link} className="text-blue-400 mr-4" target="_blank" rel="noreferrer">Live</a>
              <a href={proj.github} className="text-blue-400" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
