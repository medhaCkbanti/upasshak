import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SuccessContent = () => {
  // Access the location object to get the passed image
  const location = useLocation();
  const imgSrc =
    location.state?.imgSrc || "https://via.placeholder.com/800x400"; // Fallback image

  // Scroll to the top when the component mounts
  useEffect(() => {
    // Delay the scroll to ensure the content is fully rendered
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // Adjust the delay if needed

    // Clear the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }, // Reduce stagger time
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 }, // Reduce initial movement
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Reduce duration
  };

  return (
    <motion.div
      className="container mx-auto px-4 sm:px-8 lg:px-50 py-8" // Responsive padding
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Big Heading */}
      <motion.h4
        className="text-lg text-[#FA471C] font-bold mb-4 text-center sm:text-left" // Center on small screens, left-align on larger screens
        variants={itemVariants}
      >
        Upasshak Impact Stories
      </motion.h4>

      {/* Small Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl font-bold font-serif text-gray-600 mb-8 text-center sm:text-left" // Center on small screens, left-align on larger screens
        variants={itemVariants}
      >
        Explore the World of Possibilities
      </motion.h1>

      {/* Big Image */}
      <motion.div className="mb-8" variants={itemVariants}>
        <img
          src={imgSrc}
          alt="Main Banner"
          className="rounded-lg shadow-lg w-full max-w-3xl max-h-[450px] " // Center the image
          loading="lazy"
        />
      </motion.div>

      {/* Paragraphs */}
      <motion.div
        className="mx-auto text-left space-y-4 px-4 sm:px-0" // Add padding on small screens
        variants={itemVariants}
      >
        <p className="text-[15px] text-gray-700 open-sans">
          However, life was not always so easy for Kasiammal, a mother to four
          daughters and a son, all married now. Her husband, a daily wage earner,
          died in 2019. Kasiammal worked as a contractual cook for thirty years
          in a government school before voluntarily retiring at the age of
          sixty-five, as it was getting physically difficult for her to continue.
          She wished to retire and enjoy her golden years, but her family’s
          financial situation demanded that she continue working to support her
          sons, daughter-in-law, and grandchildren. Today, she is financing her
          grandson’s education and is even saving money to buy a smartphone for
          him. Her son has been working in a local factory as a daily wage, but
          does not earn enough to feed his wife, mother, and son.
        </p>

        <p className="text-[15px] text-gray-700 open-sans">
          However, life was not always so easy for Kasiammal, a mother to four
          daughters and a son, all married now. Her husband, a daily wage earner,
          died in 2019. Kasiammal worked as a contractual cook for thirty years
          in a government school before voluntarily retiring at the age of
          sixty-five, as it was getting physically difficult for her to continue.
          She wished to retire and enjoy her golden years, but her family’s
          financial situation demanded that she continue working to support her
          sons, daughter-in-law, and grandchildren. Today, she is financing her
          grandson’s education and is even saving money to buy a smartphone for
          him. Her son has been working in a local factory as a daily wage, but
          does not earn enough to feed his wife, mother, and son.
        </p>

        <p className="text-[15px] text-gray-600 open-sans">
          However, life was not always so easy for Kasiammal, a mother to four
          daughters and a son, all married now. Her husband, a daily wage earner,
          died in 2019. Kasiammal worked as a contractual cook for thirty years
          in a government school before voluntarily retiring at the age of
          sixty-five, as it was getting physically difficult for her to continue.
          She wished to retire and enjoy her golden years, but her family’s
          financial situation demanded that she continue working to support her
          sons, daughter-in-law, and grandchildren. Today, she is financing her
          grandson’s education and is even saving money to buy a smartphone for
          him. Her son has been working in a local factory as a daily wage, but
          does not earn enough to feed his wife, mother, and son. However, life
          was not always so easy for Kasiammal, a mother to four daughters and a
          son, all married now. Her husband, a daily wage earner, died in 2019.
          Kasiammal worked as a contractual cook for thirty years in a government
          school before voluntarily retiring at the age of sixty-five, as it was
          getting physically difficult for her to continue. She wished to retire
          and enjoy her golden years, but her family’s financial situation
          demanded that she continue working to support her sons, daughter-in-law,
          and grandchildren. Today, she is financing her grandson’s education and
          is even saving money to buy a smartphone for him. Her son has been
          working in a local factory as a daily wage, but does not earn enough to
          feed his wife, mother, and son.
        </p>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div
        className="flex justify-center space-x-6 mt-8"
        variants={itemVariants}
      >
        {[
          { href: "https://facebook.com", icon: <FaFacebook />, color: "text-blue-600" },
          { href: "https://twitter.com", icon: <FaTwitter />, color: "text-blue-400" },
          { href: "https://instagram.com", icon: <FaInstagram />, color: "text-pink-600" },
          { href: "https://linkedin.com", icon: <FaLinkedin />, color: "text-blue-700" },
        ].map(({ href, icon, color }, index) => (
          <motion.a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-600 hover:${color} transition-colors duration-800`}
            whileHover={{ scale: 1.5 }}
            transition={{ duration: 0.4, ease: "easeInOut" }} // Smoother hover transition
          >
            <motion.div className="text-3xl">{icon}</motion.div>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SuccessContent;