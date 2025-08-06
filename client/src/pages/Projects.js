import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import axios from 'axios';
import hotelBooking from '../docs/hotelBooking.jpg';
import filmClub from '../docs/filmClub.jpg';
import portfolio from '../docs/portfolio.png';

const Projects = () => {
  const [projects] = useState([
    {
      title: "Hotel Booking Platform",
      description: "Developed booking system using React.js and Java backend with MongoDB; implemented GET/fetch methods and Bootstrap UI.",
      image: hotelBooking,
      technologies: ["React.js", "Java", "MongoDB", "Bootstrap"],
      github: "https://github.com/btelagathoti",
      live: "https://hotel-booking-platform-2025.netlify.app/"
    },
    {
      title: "Film Club Web App",
      description: "Built a dynamic MERN stack application with React frontend, Node.js/Express backend, and MongoDB; implemented full CRUD operations, Axios integration, and API testing using Postman.",
      image: filmClub,
      technologies: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Axios", "Postman"],
      github: "https://github.com/btelagathoti",
      live: "https://film-club-app-2025.netlify.app/"
    },
    {
      title: "Portfolio Website",
      description: "Designed and deployed a personal portfolio showcasing frontend projects using React, hosted via Netlify.",
      image: portfolio,
      technologies: ["React", "Tailwind CSS", "Netlify"],
      github: "https://github.com/btelagathoti",
      live: "https://babujit.netlify.app/"
    }
  ]);

  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const technologies = ['All', ...new Set(projects.flatMap(project => project.technologies))];

  useEffect(() => {
    if (filter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.technologies.includes(filter)
      ));
    }
  }, [filter, projects]);

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">My Projects</h1>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${filter === tech 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900'
                  }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-400 transition-colors"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-400 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects; 