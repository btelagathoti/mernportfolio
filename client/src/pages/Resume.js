
import { motion } from 'framer-motion';
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate, FaUser, FaCode } from 'react-icons/fa';

const Resume = () => {
  const summary = {
    name: "BABUJI TELAGATHOTI",
    contact: "Florida, JACKSONVILLE, USA, 32256 • babuji789.t@gmail.com • +15084100857",
    description: "Full Stack Software Engineer with overall 5 years of experience in developing scalable web applications and microservices across cloud-native and on-prem environments. Proficient in building responsive front-end interfaces using Angular, HTML5, CSS3, and JavaScript, and designing robust back-end systems with Java, Spring Boot, Node.js, and RESTful APIs. Skilled in cloud deployment using AWS (EC2, Lambda, Elastic Beanstalk, IAM) and experienced with Adobe Experience Manager (AEM) for enterprise content management. Strong foundation in MongoDB and MySQL, with expertise in Agile, CI/CD pipelines, TDD, and version control. Passionate about writing clean, maintainable code and contributing to high-performance development teams."
  };

  const skills = {
    "Languages & Frameworks": ["Java", "Spring Boot", "Spring MVC", "Hibernate", "Node.js", "Express.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Pug", "jQuery"],
    "Front-End Technologies": ["Angular", "React", "Redux", "Bootstrap"],
    "Cloud Platforms & DevOps Tools": ["Amazon Web Services (AWS) – EC2", "Lambda", "Elastic Beanstalk", "IAM", "Adobe Experience Manager (AEM)", "Git", "GitHub", "GitLab", "CI/CD Pipelines"],
    "Databases": ["MongoDB", "MySQL", "PostgreSQL (basic)"],
    "Tools & Methodologies": ["Spring Tool Suite (STS)", "Visual Studio Code", "Jira", "Agile Scrum", "Test-Driven Development (TDD)"],
    "APIs & Integration": ["RESTful APIs", "JSON", "React Query", "jQuery AJAX"]
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "Radix",
      location: "Jacksonville, FL",
      period: "Apr 2023 - Present",
      description: [
        "Participated in all phases of the Software Development Lifecycle (SDLC), including analysis, design, development, testing, and deployment of enterprise-level applications.",
        "Built and maintained responsive Single Page Applications (SPAs) using Angular, enabling seamless client-side rendering and efficient data handling.",
        "Developed and deployed scalable Java-based applications on AWS using services like EC2, Lambda, and Elastic Beanstalk.",
        "Secured cloud-based Java applications by configuring AWS IAM roles and policies for fine-grained access control and resource management.",
        "Designed dynamic and mobile-friendly front-end interfaces using Angular, HTML5, CSS3, Bootstrap, and JavaScript.",
        "Implemented RESTful APIs and microservices using Spring Boot and Spring Data JPA to support scalable, distributed systems.",
        "Integrated front-end Angular components with RESTful services to enable real-time content rendering and reduce page reloads.",
        "Used Hibernate ORM for seamless object-relational mapping, database communication, and query optimization.",
        "Improved code maintainability through standardized exception handling, effective use of Java Collection APIs, and clear documentation.",
        "Conducted thorough code reviews, enforced coding standards, and provided mentorship to ensure high-quality software delivery.",
        "Practiced Agile Scrum methodologies including sprint planning, daily stand-ups, retrospectives, and Test-Driven Development (TDD)."
      ],
      environment: "Angular, Java, Spring Boot, Spring MVC, Hibernate, AWS (EC2, Lambda, Elastic Beanstalk, IAM), HTML5, CSS3, Bootstrap, JavaScript, RESTful APIs, Agile Scrum, TDD"
    },
    {
      title: "Software Engineer",
      company: "Cognizant Technology Solutions",
      location: "India",
      period: "Aug 2020 - Nov 2022",
      description: [
        "The design and implementation of reusable components within Adobe Experience Manager (AEM), enabling over 100 successful integrations with existing systems while ensuring seamless updates and minimal downtime.",
        "Utilized Pug templates in conjunction with modern JavaScript frameworks to streamline development workflows, significantly shortening UI iteration cycles and accelerating delivery timelines.",
        "Transformed more than 30 static design prototypes into fully responsive, W3C-compliant HTML5 web pages using advanced CSS3 techniques to support optimal rendering across a wide range of devices.",
        "Developed scalable and modular web components using Node.js and Express, integrating with a MongoDB backend to improve query handling efficiency and enhance overall application performance.",
        "Championed best practices for Git version control in collaborative coding environments, simplifying merge processes and reducing redundant development effort across the engineering team.",
        "Enhanced application hydration and state synchronization across platforms by integrating Redux and React Query, improving the user experience for real-time data interactions.",
        "Integrated and processed JSON responses from RESTful APIs, optimizing dynamic content updates through jQuery to ensure consistent user interfaces across multiple device types."
      ],
      environment: "Adobe Experience Manager (AEM), Pug, JavaScript, HTML5, CSS3, Node.js, Express.js, MongoDB, Git, Redux, React Query, RESTful APIs, JSON, jQuery"
    }
  ];

  const education = [
    {
      degree: "M.S IN INFORMATION TECHNOLOGY",
      school: "St Francis College",
      location: "Brooklyn, New York, USA",
      period: "Jan 2023 - Dec 2024"
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Developer",
      issuer: "AWS",
      period: "2024"
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "AWS",
      period: "In Progress"
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
            <div className="flex gap-3">
              <button
                onClick={() => window.print()}
                className="btn btn-primary flex items-center gap-2 hover:bg-primary-700 transition-colors"
              >
                <FaDownload /> Print/Save as PDF
              </button>
              <a
                href="/resume.docx"
                download="Babuji_Telagathoti_Resume.docx"
                className="btn btn-secondary flex items-center gap-2 hover:bg-gray-700 transition-colors"
              >
                <FaDownload /> Download Word Doc
              </a>
            </div>
          </div>

          {/* Summary Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaUser className="text-2xl text-primary-600 dark:text-primary-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Summary</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{summary.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{summary.contact}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{summary.description}</p>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <FaCode className="text-2xl text-primary-600 dark:text-primary-400" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Skills</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, skillList], index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </section>

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