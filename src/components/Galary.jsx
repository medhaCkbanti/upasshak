import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { Link } from "react-router-dom";
import img1 from "../assets/Home_01.jpg";
import img2 from "../assets/Slide-02.jpg";

const Galary = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variants for buttons
  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#4F46E5", transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  // Animation variants for images
  const imageVariants = {
    hover: { 
      scale: 1.1, 
      transition: { 
        duration: 0.5, // Slower duration for smoother effect
        ease: "easeInOut", // Smooth easing function
      } 
    },
  };

  return (
    <div className="bg-[#ebe9e6] pt-14 pb-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800 mb-10"
        >
          TAKE A LOOK
        </motion.h1>

        {/* Grid for Photo and Video Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 justify-center">
          {/* Photo Gallery Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.img
              src={img1}
              alt="Photo Gallery"
              className="h-[280px] w-full object-cover"
              variants={imageVariants}
              whileHover="hover"
            />
            <div className="text-center py-6">
              <Link to="/gallery/photos">
                <motion.button
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300"
                >
                  VIEW PHOTO GALLERY
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Video Gallery Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <motion.img
              src={img2}
              alt="Video Gallery"
              className="h-[280px] w-full object-cover"
              variants={imageVariants}
              whileHover="hover"
            />
            <div className="text-center py-6">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md transition-all duration-300"
              >
                VIEW VIDEO GALLERY
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Galary;