import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img1 from "../assets/Home_01.jpg";
import img2 from "../assets/Slide-02.jpg";

const Galary = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing function
      } 
    },
  };

  // Smooth button animations
  const buttonVariants = {
    rest: { 
      scale: 1,
      backgroundColor: "#4F46E5",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.05,
      backgroundColor: "#6366f1",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: { 
      scale: 0.98,
      transition: {
        duration: 0.15,
        ease: "easeInOut"
      }
    }
  };

  // Image hover animation
  const imageHoverVariants = {
    rest: {
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <div className="bg-[#ebe9e6] pt-14 pb-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-3xl sm:text-4xl font-extrabold text-gray-800 mb-10"
        >
          TAKE A LOOK
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 justify-center">
          {/* Photo Gallery Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
          >
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="overflow-hidden"
            >
              <motion.img
                src={img1}
                alt="Photo Gallery"
                className="h-[280px] w-full object-cover"
                variants={imageHoverVariants}
              />
            </motion.div>
            <div className="text-center py-6">
              <Link to="/gallery/photos">
                <motion.button
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md"
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
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl"
          >
            <motion.div
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="overflow-hidden"
            >
              <motion.img
                src={img2}
                alt="Video Gallery"
                className="h-[280px] w-full object-cover"
                variants={imageHoverVariants}
              />
            </motion.div>
            <div className="text-center py-6">
              <Link to="/gallery/videos">
                <motion.button
                  variants={buttonVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md"
                >
                  VIEW VIDEO GALLERY
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Galary;