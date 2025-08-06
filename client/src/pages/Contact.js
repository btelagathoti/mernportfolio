import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import BabujiContactpicture from "../docs/Babuji_picture_contactPage.jpeg"
const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      label: 'Email',
      value: 'babuji789.t@gmail.com',
      link: 'mailto:babuji789.t@gmail.com'
    },
    {
      icon: <FaGithub className="h-6 w-6" />,
      label: 'GitHub',
      value: 'github.com/btelagathoti',
      link: 'https://www.linkedin.com/in/babuji-telagathoti-2142b6357/'
    },
    {
      icon: <FaLinkedin className="h-6 w-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/btelagathoti',
      link: 'www.linkedin.com/in/babuji-telagathoti-2142b6357'
    },
    {
      icon: <FaInstagram className="h-6 w-6" />,
      label: 'Instagram',
      value: '@babuji_bob',
      link: 'https://instagram.com/babuji_bob'
    }
  ];

  return (
    <div className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="heading text-center">Contact Me</h1>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-12 mb-16"
            >
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                  <img
                    src={BabujiContactpicture}
                    alt="Babuji Telagathoti"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl">💬</span>
                </div>
              </div>

              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's Connect!
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                <div className="grid gap-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="text-primary-600 dark:text-primary-400 mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {info.label}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact; 