import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Abraham from "../assets/management-team/Abraham.jpg";
import Moung from "../assets/management-team/Moung.jpg";
import Amar from "../assets/management-team/Amar shanti.jpeg";
import Mong from "../assets/management-team/Mong-Haineo.jpeg";
import MongShai from "../assets/management-team/Mong shai u.jpeg";
import Lusia from "../assets/management-team/Lusia.jpg";
import Bijoy from "../assets/teachers/bijoy.jpg";
import Ukyo from "../assets/teachers/u ku toai.jpg";
import Medhankar from "../assets/teachers/medha.jpg";
import Manti from "../assets/teachers/manti.jpg";
import Soma from "../assets/teachers/somasing.jpg";


const ManagementTeam = () => {
  const teamMembers = [
    { id: 1, name: "Abraham Tripura", role: "President Executive Committee", image: Abraham },
    { id: 2, name: "Moung Moung Shing", role: "Executive Director", image: Moung },
    { id: 3, name: "Amar Shanti Chakma", role: "Program Director", image: Amar },
    { id: 4, name: "Mong Haineo Marma", role: "Administrative Officer", image: Mong },
    { id: 5, name: "Mong Sai U Marma", role: "Accountant", image: MongShai },
    { id: 6, name: "Lusia Chakma", role: "Documentation and Child Protection Officer", image: Lusia },
  ];

  const teacherMemer = [
    { id: 7, name: "Bijoy Chakma", role: "Boys Hostel Supervisor", image: Bijoy },
    { id: 9, name: "U Kyo Thowai", role: "Teacher", image: Ukyo },
    { id: 10, name: "Medhankar Chakma", role: "English and ICT Teacher", image: Medhankar },
    { id: 11, name: "Manti Chakma", role: "Girls Hostel Supervisor", image: Manti },
    { id: 12, name: "Soma Sing", role: "Teacher", image: Soma },

  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <div className="mt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-40">
        {/* Management Team Section */}
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="text-center mb-16 text-3xl sm:text-4xl md:text-5xl font-bold text-[#6EC1E4]"
        >
          Our Management Team
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <div className="relative group h-60 overflow-hidden cursor-pointer">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />

                <motion.div
                  className="absolute inset-0 bg-gray-900/80 flex flex-col justify-center items-center p-6 text-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl font-extrabold text-white mb-2">{member.name}</h3>
                  <p className="text-lg font-semibold text-gray-300">{member.role}</p>
                </motion.div>
              </div>

              {/* Updated Social Icons */}
              <div className="flex justify-center space-x-4 py-4">
                <a
                  href="#"
                  className="text-white bg-green-600 p-2 rounded-full hover:bg-green-500 transition-transform duration-300 ease-in-out transform hover:scale-125"
                >
                  <FaFacebookF className="w-3 h-3" />
                </a>
                <a
                  href="#"
                  className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-400 transition-transform duration-300 ease-in-out transform hover:scale-125"
                >
                  <FaTwitter className="w-3 h-3" />
                </a>
                <a
                  href="#"
                  className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                  <FaLinkedinIn className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Teachers Section */}
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="text-center mt-20 mb-16 text-3xl sm:text-4xl md:text-5xl font-bold text-[#6EC1E4]"
        >
          Our Teachers
        </motion.h1>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center"
        >
          {teacherMemer.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <div className="relative group h-60 overflow-hidden cursor-pointer">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gray-900/80 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 text-center">
                  <h3 className="text-3xl font-extrabold text-white mb-2">{teacher.name}</h3>
                  <p className="text-lg font-semibold text-gray-300">{teacher.role}</p>
                </div>
              </div>

              <div className="flex justify-center space-x-4 py-4">
                <a
                  href="#"
                  className="text-white bg-green-600 p-2 rounded-full hover:bg-green-500 transition-transform duration-300 ease-in-out transform hover:scale-125"
                >
                  <FaFacebookF className="w-3 h-3" />
                </a>
                <a
                  href="#"
                  className="text-white bg-blue-500 p-2 rounded-full hover:bg-blue-400 transition-transform duration-300 ease-in-out transform hover:scale-125"
                >
                  <FaTwitter className="w-3 h-3" />
                </a>
                <a
                  href="#"
                  className="text-white bg-blue-700 p-2 rounded-full hover:bg-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                  <FaLinkedinIn className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ManagementTeam;