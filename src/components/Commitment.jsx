import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import img1 from "../assets/SMP02766.jpg";

const Commitment = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoId] = useState("vBv__3DHBb8"); // Replace with your YouTube video ID

  const handleVideoOpen = () => {
    setShowVideo(true);
    document.body.style.overflow = "hidden";
  };

  const handleVideoClose = () => {
    setShowVideo(false);
    document.body.style.overflow = "auto";
  };

  // Animation variants
  const videoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="mt-0">
      {/* Video Modal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={handleVideoClose}
        >
          <div className="relative w-full max-w-4xl px-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleVideoClose}
              className="absolute -top-8 right-0 text-white hover:text-red-500 transition-colors z-50"
            >
              <FaTimes className="text-3xl" />
            </button>
            
            <div className="aspect-video w-full rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Page Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <div className="bg-white py-10 px-4 sm:px-6 lg:px-20">
          {/* Heading Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#DA291C]">
              OUR COMMITMENT TO BE THE UPASSHAK OF <br className="hidden md:block" /> CHILDREN'S FUTURE
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base md:text-lg font-serif">
              We invite you behind the scenes to witness the transformations made
              possible by donors like you. Through poignant video testimonials,
              you'll see the tangible impact your compassion has already made in
              the lives of underprivileged children in India.
            </p>
          </motion.div>

          {/* Video and Content Row */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Video Section */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={videoVariants}
              viewport={{ once: true, amount: 0.5 }}
              className="flex-shrink-0 w-full lg:w-[50%] cursor-pointer"
              onClick={handleVideoOpen}
            >
              <div className="relative group overflow-hidden rounded-lg shadow-lg w-full h-56 sm:h-72 md:h-80 lg:h-96">
                <img
                  src={img1}
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-full bg-[#89807F] w-12 sm:w-16 h-12 sm:h-16 flex items-center justify-center transition-transform duration-300"
                  >
                    <FaPlay className="text-white text-lg sm:text-xl" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.5 }}
              className="w-full lg:w-[50%] text-center lg:text-left"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#DA291C] mb-4">
                Bal Raksha Bharat's Ongoing Mission to <br className="hidden md:block" /> Empower 4 Million Children!
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mb-3 font-serif">
                At Bal Raksha Bharat, we believe in creating a secure future by
                ensuring every child has a secure childhood.
              </p>
              <p className="text-gray-600 text-sm sm:text-base mb-3 font-serif">
                India's children possess immense potential, yet they face numerous
                challenges. Our mission recognizes that similar efforts may not yield the
                same results for every child, and we tailor our support to their unique
                needs.
                <a
                  href="/online-donation"
                  className="text-red-600 font-semibold underline ml-1"
                >
                  Online donation India
                </a>
              </p>
              <p className="text-gray-600 text-sm sm:text-base font-serif">
                Join us in building a world where every child has access to equal
                opportunities and can grow with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commitment;