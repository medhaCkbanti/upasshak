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
          Deepalaya started in 1979 with 7 founding members with the objective of
          educating not-so-privileged children. Over the years, our focus has
          expanded from providing education only to children to helping
          underprivileged women, youth, and children become self-reliant through
          education and vocational training. Deepalaya is the largest operational
          NGO that has established projects across Delhi, Haryana, Uttar Pradesh,
          Uttarakhand, Punjab, Kerala, Andhra Pradesh, Maharashtra, and
          Telangana.
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg text-gray-700 sm:text-xl"
        >
          We have been working for four decades and contributing to the crusade
          against illiteracy. Every child deserves a chance is what Deepalaya
          strongly believes in and has been working towards it. Over the years,
          Deepalaya has established several projects in the areas of Education
          (Formal/Non-Formal/Remedial), Women Empowerment (Reproductive Health,
          Self Help Groups, Livelihood, Microfinance), Institutional Care,
          Community Health, ECCD, Vocational Training, Environmental
          Sustainability, and Differently Abled. These projects are operational
          across India.
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