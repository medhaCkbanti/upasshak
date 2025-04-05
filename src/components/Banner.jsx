import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pic1 from "../assets/Banner/Home_01.jpg";
import pic2 from "../assets/Banner/group.JPG";
import pic3 from "../assets/Banner/girls.jpg";
import pic4 from "../assets/Banner/boys.JPG";


const images = [pic1, pic2,  pic3, pic4];

export default function Banner() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative w-full h-[50vh] md:h-[700px]  overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }} // Slow fade-in on load
    >
      {/* Banner Images with Sliding Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }} // Smooth slide transition
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={images[currentImageIndex]}
            alt={`Banner ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay Text with Entrance Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-40 text-white text-center px-4"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Upasshak</h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Empowering communities through education, innovation, and collaboration.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-6 md:px-8 py-2 md:py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* Dots for Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? "bg-white scale-125" : "bg-gray-400"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </motion.div>
  );
}
