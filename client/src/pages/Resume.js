import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Resume = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "UF Health",
      location: "Jacksonville, FL",
      period: "Aug 2023 – Present",
      description: [
        "Developed AI-powered patient billing and diagnostics dashboard using React.js and Python, streamlining medical checkout flows by 45% ",
        "Integrated GenAI-driven recommendation engine for appointment and insurance suggestions ",
        "Managed MongoDB schemas using Mongoose and implemented RESTful APIs to support secure CRUD operations.",
        "Migrated modules to Azure Functions and Cosmos DB, enhancing fault tolerance and uptime to 99.95%",
        "Improved system latency by 60% via REST API optimization and frontend performance tuning ",
        "Designed secure APIs and deployed serverless applications using AWS Lambda, API Gateway, and S3"
      ],
      environment: "React.js, Bootstrap, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+), Node.js, Express.js, Java/J2EE, MongoDB, SQL, JWT, Postman, AWS, CI/CD tools"
    },
    {
      title: "Front-End React Developer",
      company: "Cognizant Technology Solutions",
      location: "India",
      period: "Aug 2020 – Dec 2022",
      description: [
        "Led front-end architecture and state management in a MERN-based enterprise portal for product lifecycle automation.",
        "Created 20+ reusable components using React, Redux, Tailwind CSS to support content delivery.",
        "Integrated REST and GraphQL APIs, reducing load times by 30% in internal knowledge systems - Built unit test coverage to 85% and contributed to CI/CD pipelines with GitHub Actions"
      ],
      environment: "React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Bootstrap, Tailwind CSS, Sass / SCSS, jQuery, Adobe Experience Manager (AEM), Axios, Postman, Mock API tools"
    },
    {
      title: "Academic Experience (Capstone)",
      company: "St Francis College",
      location: "Brooklyn, NY, USA",
      period: "Jan 2023-Dec 2024",
      description: [
        "Developed a subscription-based film platform supporting 500+ users with actor/director-based discovery",
        "Created 15+ performant REST APIs with <200ms response time using Node and Express",
        "Enabled fast actor/director search with MongoDB indexing; reduced lookup latency by 40%",
        "Secured app using JWT authentication and achieved 99.9% uptime in test deployment"

      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Information Technology",
      school: "St. Francis College",
      location: "Brooklyn, NY",
      period: "Completed: Dec 2024"
    },
    {
      degree: "Bachelor of Engineering in Electrical and Electronics",
      school: "KL University",
      location: "Vijayawada, India",
      period: "Completed: May 2021"
    }
  ];

  const certifications = [
     {
      title: "AWS Certified Developer ",
      issuer: "AWS",
      period: "2024"
    },
    {
      title: "AWS Certified Solutions Architect – Associate ",
      issuer: "AWS",
      period: "InProgress"
    },
    {
      title: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      period: "2024"
    },
    {
      title: "E-Commerce with ReactJS",
      issuer: "Udemy",
      period: "2024"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Resume</h1>
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary flex items-center gap-2"
            >
              <FaDownload /> Download CV
            </a>
          </div>

          {/* Experience Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaBriefcase className="text-2xl text-primary-600 dark:text-primary-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Professional Experience</h2>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{exp.company} – {exp.location}</p>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.period}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  {exp.environment && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-medium">Environment:</span> {exp.environment}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaGraduationCap className="text-2xl text-primary-600 dark:text-primary-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{edu.school} – {edu.location}</p>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{edu.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <FaCertificate className="text-2xl text-primary-600 dark:text-primary-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Certifications</h2>
            </div>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">{cert.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume; 