import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Link } from "react-router-dom";

const Vision = () => {
  // Animation variants for heading and content
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-40 py-16 bg-[#FFFFFF]">
      {/* Header */}
      <motion.h1
        initial="hidden"
        whileInView="visible"
        variants={headingVariants}
        viewport={{ once: true, amount: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Mission and Vision
      </motion.h1>

      {/* Two-column layout */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Vision Section (Left Side) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={contentVariants}
            viewport={{ once: true, amount: 0.5 }}
            className="p-6"
          >
            <h2 className="text-3xl font-bold text-blue-600 mb-6">Vision</h2>
            <p className="text-gray-600 text-lg mb-6">
              Our vision is to create a world where every individual has access to quality education, healthcare, and opportunities to thrive. We aim to empower communities and foster sustainable development for a brighter future.
            </p>
          </motion.div>

          {/* Mission Section (Right Side) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={contentVariants}
            viewport={{ once: true, amount: 0.5 }}
            className="p-6"
          >
            <h2 className="text-3xl font-bold text-purple-600 mb-6">Mission</h2>
            <p className="text-gray-600 text-lg mb-6">
              Our mission is to drive positive change by implementing innovative projects in education, healthcare, and women empowerment. We strive to reach the most remote areas and make a lasting impact on the lives of millions.
            </p>
          </motion.div>
        </div>

        {/* Single Read More Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={buttonVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="flex justify-center mt-8"
        >
          <Link to="/about-us">
            <motion.button
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              className="flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;