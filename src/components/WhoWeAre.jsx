import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

const WhoWeAre = () => {
  // Animation variants for text and button
  const textVariants = {
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
    <div className="bg-[#FFFFFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-40 py-16 md:py-24 text-center">
        {/* Text Content */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg text-gray-700 sm:text-xl pb-5"
        >
      Upasshak Hostel, founded in 2009 in Bandarban, Bangladesh, is a sanctuary for hill tribe children from the Chakma, 
      Marma, Mro, and Tripura communities. Partnering with CO-OPERAID Switzerland, we provide free residential education 
      to 75 students annually, blending rigorous academics with cultural preservation. Our holistic model includes 
      SSC exam coaching, digital literacy programs, and life skills training, while traditional dance, music, and festivals 
      like Sangrai keep indigenous heritage alive.
    
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg text-gray-700 sm:text-xl"
        >
          Girls, once sidelined, now comprise half our student body, empowered through scholarships and mentorship. 
           Beyond classrooms, sustainable income-generating activities—dragon fruit orchards, cow farming—fund operations 
           and teach agribusiness skills. Each child’s journey here defies poverty, geography, and societal norms, 
           transforming dormitories into launchpads for doctors, artists, and leaders.

        </motion.p>

        {/* Read More Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={buttonVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-10 flex items-center justify-center gap-2 text-lg sm:text-xl text-blue-600 hover:text-blue-800 cursor-pointer transition-all"
        >
          <Link to="/about-us">
            <motion.div
              whileHover="hover"
              whileTap="tap"
              variants={buttonVariants}
              className="flex items-center"
            >
              <Link to="/about-us"> <span>Read more</span> </Link>
              <IoMdArrowRoundForward className="mt-1.5" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default WhoWeAre;