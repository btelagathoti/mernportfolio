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
        "Engineered and maintained MERN stack applications, delivering reusable React.js components integrated with Node.js/Express APIs and MongoDB.",
        "Modernized legacy Classic ASP platforms by redesigning the frontend in React and backend in Node.js, improving system reliability by 30%.",
        "Managed MongoDB schemas using Mongoose and implemented RESTful APIs to support secure CRUD operations.",
        "Utilized JWT for token-based authentication and tested all backend endpoints using Postman for robust security and data integrity.",
        "Contributed to Java/Spring Boot service layer integrations for internal microservices, collaborating with backend teams on scalable service architecture.",
        "Assisted in refactoring legacy Java/J2EE modules to Spring Boot-based microservices to support interoperability between old and modern platforms.",
        "Designed responsive, cross-device UIs with React Hooks, Redux, Bootstrap, and Tailwind CSS, enhancing user experience for healthcare staff.",
        "Collaborated in Agile teams, participating in daily stand-ups, sprint planning, and code reviews to maintain delivery velocity.",
        "Contributed to cloud infrastructure tasks using AWS, supporting scalable deployments and database resilience."
      ],
      environment: "React.js, Bootstrap, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+), Node.js, Express.js, Java/J2EE, MongoDB, SQL, JWT, Postman, AWS, CI/CD tools"
    },
    {
      title: "Front-End React Developer",
      company: "Cognizant Technology Solutions",
      location: "India",
      period: "Aug 2020 – Dec 2022",
      description: [
        "Worked on an internal enterprise project focused entirely on front-end development using React.js.",
        "Developed new components and enhanced existing ones using HTML5, CSS3, JavaScript (ES6+), React.js, Redux, Bootstrap, Tailwind CSS, jQuery, and Sass.",
        "Created custom Sass Mixins for consistent styling across multiple components.",
        "Defined custom variables, utilized nesting, and followed modular CSS practices for maintainable code.",
        "Collaborated closely with the Adobe Experience Manager (AEM) team, enabling seamless integration of React components for drag-and-drop functionality within AEM pages.",
        "Assisted the AEM team in identifying and resolving component rendering issues, ensuring smooth handoff and cross-functional efficiency.",
        "Followed Agile methodology and participated in sprint-based development cycles, collaborating with designers and QA engineers.",
        "Refined user interfaces to be fully responsive and accessible across browsers and devices, ensuring consistent user experiences.",
        "Contributed to the creation of reusable UI libraries to accelerate feature development across modules.",
        "Integrated REST APIs provided by backend teams using Axios and tested data flows with mock responses and tools like Postman.",
        "Maintained clean, maintainable codebases through code reviews, documentation, and adherence to modern React best practices."
      ],
      environment: "React.js, Redux, JavaScript (ES6+), HTML5, CSS3, Bootstrap, Tailwind CSS, Sass / SCSS, jQuery, Adobe Experience Manager (AEM), Axios, Postman, Mock API tools"
    },
    {
      title: "Academic Experience (Capstone)",
      company: "St Francis College",
      location: "Brooklyn, NY, USA",
      period: "Jan 2023-Dec 2024",
      description: [
        "Built a dynamic, responsive Film Club web app using React.js for an interactive front-end experience.",
        "Built RESTful APIs using Node JS to handle backend logic, user requests, and data management.",
        "Integrated MongoDB for storing film data, user profiles, and club discussions.",
        "Enabled features such as browsing movies, joining clubs, and posting reviews with secure data handling.",
        "Implemented full CRUD operations for film listings and user content.",
        "Designed a clean UI using reusable React components and Bootstrap for responsive layout.",
        "Ensured smooth frontend-backend communication with Axios, and tested API endpoints using Postman."
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