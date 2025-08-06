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
  FaAngular,
  FaBootstrap,
  FaGithub,
  FaGitlab,
  FaJira,
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTailwindcss, 
  SiSpringboot, 
  SiPostgresql, 
  SiMysql,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiRedux,
  SiHibernate,
  SiPug,
  SiVisualstudiocode,
  SiJson,
  SiReactquery,
  SiAdobe,
  SiAmazonaws,
  SiAwslambda,
  SiAmazonec2,
  SiAmazoniam,
} from 'react-icons/si';

const About = () => {
  const skills = [
    // Languages & Frameworks
    { name: 'Java', icon: <FaJava className="h-8 w-8" /> },
    { name: 'Spring Boot', icon: <SiSpringboot className="h-8 w-8" /> },
    { name: 'Spring MVC', icon: <SiSpringboot className="h-8 w-8" /> },
    { name: 'Hibernate', icon: <SiHibernate className="h-8 w-8" /> },
    { name: 'Node.js', icon: <FaNodeJs className="h-8 w-8" /> },
    { name: 'Express.js', icon: <SiExpress className="h-8 w-8" /> },
    { name: 'JavaScript', icon: <SiJavascript className="h-8 w-8" /> },
    { name: 'TypeScript', icon: <SiTypescript className="h-8 w-8" /> },
    { name: 'HTML5', icon: <SiHtml5 className="h-8 w-8" /> },
    { name: 'CSS3', icon: <SiCss3 className="h-8 w-8" /> },
    { name: 'Pug', icon: <SiPug className="h-8 w-8" /> },
    { name: 'jQuery', icon: <SiJquery className="h-8 w-8" /> },
    
    // Front-End Technologies
    { name: 'Angular', icon: <FaAngular className="h-8 w-8" /> },
    { name: 'React.js', icon: <FaReact className="h-8 w-8" /> },
    { name: 'Redux', icon: <SiRedux className="h-8 w-8" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="h-8 w-8" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="h-8 w-8" /> },
    
    // Cloud Platforms & DevOps Tools
    { name: 'AWS', icon: <FaAws className="h-8 w-8" /> },
    { name: 'AWS EC2', icon: <SiAmazonec2 className="h-8 w-8" /> },
    { name: 'AWS Lambda', icon: <SiAwslambda className="h-8 w-8" /> },
    { name: 'AWS IAM', icon: <SiAmazoniam className="h-8 w-8" /> },
    { name: 'AEM', icon: <SiAdobe className="h-8 w-8" /> },
    { name: 'Git', icon: <FaGitAlt className="h-8 w-8" /> },
    { name: 'GitHub', icon: <FaGithub className="h-8 w-8" /> },
    { name: 'GitLab', icon: <FaGitlab className="h-8 w-8" /> },
    { name: 'Jenkins', icon: <FaJenkins className="h-8 w-8" /> },
    { name: 'Docker', icon: <FaDocker className="h-8 w-8" /> },
    { name: 'Jira', icon: <FaJira className="h-8 w-8" /> },
    
    // Databases
    { name: 'MongoDB', icon: <SiMongodb className="h-8 w-8" /> },
    { name: 'MySQL', icon: <SiMysql className="h-8 w-8" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="h-8 w-8" /> },
    
    // Tools & Methodologies
    { name: 'VS Code', icon: <SiVisualstudiocode className="h-8 w-8" /> },
    
    // APIs & Integration
    { name: 'REST APIs', icon: <SiJson className="h-8 w-8" /> },
    { name: 'JSON', icon: <SiJson className="h-8 w-8" /> },
    { name: 'React Query', icon: <SiReactquery className="h-8 w-8" /> },
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
               Full Stack Software Engineer with overall 5 years of experience in developing scalable web applications and microservices across cloud-native and on-prem environments. Proficient in building responsive front-end interfaces using Angular, HTML5, CSS3, and JavaScript, and designing robust back-end systems with Java, Spring Boot, Node.js, and RESTful APIs. Skilled in cloud deployment using AWS (EC2, Lambda, Elastic Beanstalk, IAM) and experienced with Adobe Experience Manager (AEM) for enterprise content management. Strong foundation in MongoDB and MySQL, with expertise in Agile, CI/CD pipelines, TDD, and version control. Passionate about writing clean, maintainable code and contributing to high-performance development teams.
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