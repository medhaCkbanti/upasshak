import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation
import img1 from "../assets/13-12-2023.jpg";
import img2 from "../assets/01-700x300.jpg";
import img3 from "../assets/activity-2-600x576.jpg";

const successData = [
  {
    title: "EDUCATION",
    description:
      "We are working on high-quality education, spreading awareness about the importance of education.",
    imgSrc: img1,
  },
  {
    title: "INSTITUTIONAL CARE",
    description:
      "Deepalaya started its Institutional Care program at Deepalaya Gram.",
    imgSrc: img2,
  },
  {
    title: "DIFFERENTLY ABLED",
    description:
      "We strongly believe that differently-abled children can live a healthy life.",
    imgSrc: img3,
  },
];

const Success = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Animation variants for images
  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Animation variants for buttons
  const buttonVariants = {
    hover: { scale: 1.05, backgroundColor: "#2563EB", transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 lg:px-40 py-10">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8"
      >
        Success Stories
      </motion.h2>

      {/* Grid for Success Stories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {successData.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.5 }}
            className="bg-white shadow-lg rounded-lg overflow-hidden p-4"
          >
            {/* Wrap the entire card content in a Link */}
            <Link to={`/success?imgSrc=${item.imgSrc}`} state={{ imgSrc: item.imgSrc }}>
              {/* Image */}
              <motion.div
                className="overflow-hidden rounded-lg"
                style={{ overflow: "hidden" }} // Ensure overflow is hidden
              >
                <motion.img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-60 object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 mt-2 open-sans">{item.description}</p>

              {/* Button */}
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Read More
              </motion.button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Success;