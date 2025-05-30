import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaTools,
  FaPalette,
  FaSearch,
  FaChartLine,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description:
        "I create clean, minimalist websites with intuitive navigation, responsive layouts, high-quality visuals, fast loading, seamless interactions, and subtle animations.",
    },

    {
      icon: <FaPalette />,
      title: "Web Designing",
      description:
        "I design visually engaging, user-friendly websites with responsive layouts, intuitive navigation, and seamless experiences to captivate and retain visitors across all devices",
    },
    {
      icon: <FaSearch />,
      title: "Search Engine Optimization",
      description:
        "Boost your site's visibility with keyword research, on-page optimization, and technical SEO strategies to drive organic traffic and improve rankings.",
    },
    {
      icon: <FaTools />,
      title: "Website Maintenance",
      description:
        "Keep your site updated, secure, and bug-free with ongoing maintenance, performance checks, and prompt issue resolution.",
    },
    {
      icon: <FaChartLine />,
      title: "Web Consultancy",
      description:
        "Receive expert guidance on strategy, design, and development for impactful, scalable web solutions.",
    },
  ];

  return (
    <section
      className="max-w-[1200px] mx-auto rounded-3xl py-10 sm:py-20 px-4 sm:px-10 bg-gray-50 dark:bg-black"
      id="services"
    >
      <div className="container mx-auto px-2 sm:px-6 text-center">
        <h2 className="text-5xl font-bold text-gray-300 mb-10 md:mb-20 uppercase text-center">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
            >
              <div className="text-blue-500 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
