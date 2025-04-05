import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import bijoy from "../assets/teachers/bijoy.jpg";
import medha from "../assets/teachers/medha.jpg";
import ukya from "../assets/teachers/u ku toai.jpg";
import manti from "../assets/teachers/manti.jpg";
import soma from "../assets/teachers/somasing.jpg";

const teacherData = [
  {
    uniqueId: uuidv4(),
    name: "Bijoy Chakma",
    image: bijoy,
    phone: "01532200862",
    email: "bijoyamorbijoy@gmail.co,",
    address: "Balaghata,Bandarban Sadar,Bandarban",
    bloodGroup: "O+",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  {
    uniqueId: uuidv4(),
    name: "Medhankar Chakma",
    image: medha,
    phone: "01618632418",
    email: "medhankarchakma1444@gmail.com",
    address: "MDS area,Karbari para, W-02, Bandarban Sadar,Bandarban ",
    bloodGroup: "O+",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  {
    uniqueId: uuidv4(),
    name: "Manti Chakma",
    image: manti,
    phone: "01576953372",
    email: "manti@example.com",
    address: "Chittrosen Boiddho Para,Bandarban Sadar,Bandarban",
    bloodGroup: "B+",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  {
    uniqueId: uuidv4(),
    name: "U Kyo Thowai",
    image: ukya,
    phone: "01750924188",
    email: "ukyo@example.com",
    address: "321 Thowai Street, Chakma Land",
    bloodGroup: "AB+",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
  {
    uniqueId: uuidv4(),
    name: "Swema Ching Marma",
    image: soma,
    phone: "01575450697",
    email: "soma@example.com",
    address: "654 Soma Road, Chakma Land",
    bloodGroup: "O-",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
  hover: { scale: 1.08, transition: { duration: 0.3 } },
};

const Teacher = () => {
  return (
    <div className="mt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-40">
        <h1 className="text-center mb-16 text-3xl sm:text-4xl md:text-5xl font-bold text-[#6EC1E4]">
          Hostel Teachers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {teacherData.map((teacher) => (
            <motion.div
              key={teacher.uniqueId}
              className="relative w-full max-w-xs overflow-hidden rounded-lg shadow-lg bg-white"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover="hover"
            >
              <Link to={`/details/${teacher.name}`} state={{ teacher }}>
                <motion.img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <p className="text-center text-black text-lg sm:text-xl md:text-2xl font-bold">
                    {teacher.name}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teacher;