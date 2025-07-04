import React from 'react';
import { motion } from 'framer-motion';
import my_photo from '../docs/Babuji_picture_contactPage.jpeg'
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaJava,
  FaJenkins,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiSpringboot, SiPostgresql, SiMysql } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React.js', icon: <FaReact className="h-8 w-8" /> },
    { name: 'Node.js', icon: <FaNodeJs className="h-8 w-8" /> },
    { name: 'MongoDB', icon: <SiMongodb className="h-8 w-8" /> },
    { name: 'Express.js', icon: <SiExpress className="h-8 w-8" /> },
    { name: 'Java', icon: <FaJava className="h-8 w-8" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="h-8 w-8" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="h-8 w-8" /> },
    { name: 'MySQL', icon: <SiMysql className="h-8 w-8" /> },
    { name: 'Git', icon: <FaGitAlt className="h-8 w-8" /> },
    { name: 'Docker', icon: <FaDocker className="h-8 w-8" /> },
    { name: 'AWS', icon: <FaAws className="h-8 w-8" /> },
    { name: 'Jenkins', icon: <FaJenkins className="h-8 w-8" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="h-8 w-8" /> },
  ];

  return (
    <div className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading text-center">About Me</h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <img
                src={my_photo}
                alt="Babuji Telagathoti"
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Full Stack Developer
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                AI-focused Full Stack Developer with 4+ years of experience building scalable, real-time web applications using React.js, Node.js, and AWS cloud-native services. Demonstrated expertise in AI-integrated healthcare solutions and e-commerce platforms. Proficient in designing high-performance front-end systems, serverless backends using AWS Lambda, S3, EC2, and delivering production-grade ML-enhanced solutions.CI/CD pipelines, infrastructure-as-code, and Agile delivery environments. Currently pursuing AWS Certified Solutions Architect.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I hold a Master's degree in Information Technology from St. Francis College and 
                am constantly expanding my skills in cloud technologies and DevOps practices.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-center mb-8">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
                >
                  <div className="text-primary-600 dark:text-primary-400 mb-2">
                    {skill.icon}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 