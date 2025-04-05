import { useState,useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import {
  FaPaperPlane,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import Map from "../components/Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using mailto
    const mailtoLink = `mailto:medhankarbanti1@gmail.com?subject=New Contact Form Message&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;

    window.location.href = mailtoLink;
  };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      {/* Full-Width Map Section */}
      <Map />

      {/* Breadcrumb Section */}
      <div className="w-full max-w-[1400px] mx-auto p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full h-40 flex flex-col justify-center items-center sm:items-start p-4 sm:p-10"
        >
          <h1 className="text-3xl sm:text-[40px] font-bold mb-5 text-center sm:text-left">
            CONTACT US
          </h1>
          <ul className="flex flex-wrap items-center gap-2 sm:gap-5 text-sm sm:text-[20px]">
            <li className="flex items-center gap-2 sm:gap-4 font-semibold cursor-pointer">
              <span>
                <IoHome />
              </span>
              HOME
            </li>
            <li className="text-xl sm:text-[24px] cursor-pointer">
              <MdKeyboardArrowRight />
            </li>
            <li className="font-semibold text-[#76c04e] cursor-pointer">
              PAGES
            </li>
            <li className="text-xl sm:text-[24px] cursor-pointer">
              <MdKeyboardArrowRight />
            </li>
            <li className="font-semibold text-[#76c04e] cursor-pointer">
              CONTACT US
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Contact Form and Social Media Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col lg:flex-row gap-8 text-center lg:text-left container mx-auto px-4 sm:px-6 lg:px-30"
      >
        {/* Left Side - Write to Us Form */}
        <div className="w-full lg:w-[49%] p-6 sm:p-8 bg-white">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6">
            Write to Us
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col md:flex-row gap-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full md:w-1/2 p-3 sm:p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full md:w-1/2 p-3 sm:p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              className="w-full p-3 sm:p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full sm:w-[150px] bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all"
            >
              <FaPaperPlane className="text-xl" /> Submit
            </motion.button>
          </form>
        </div>

        {/* Right Side - Get In Touch Section */}
        <div className="w-full lg:w-[49%] p-6 sm:p-8 flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6 sm:mb-10">
            Get In Touch
          </h2>

          {/* Address Details */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[300px]">
            <h2 className="text-xl font-semibold font-roboto">Address</h2>
            <p className="mt-2 text-sm sm:text-base">
              Sahbuddin Building (2nd Floor), College Road, Bandarban-4600
            </p>
            <p className="mt-2 text-sm sm:text-base">
              Hours: Sunday-Thursday 8:00AM - 5:00PM
            </p>
            <p className="mt-2 text-sm sm:text-base">
              Phone: +88 02-333302299
            </p>
            <p className="mt-2 text-sm sm:text-base">
              Email: ihumanitarian@yahoo.com
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-5 mt-6 sm:mt-10">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transform transition-transform duration-500 ease-in-out hover:scale-125"
            >
              <FaFacebook className="w-6 h-6 lg:w-7 lg:h-7" />
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-600 transform transition-transform duration-500 ease-in-out hover:scale-125"
            >
              <FaTwitter className="w-6 h-6 lg:w-7 lg:h-7" />
            </a>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-900 transform transition-transform duration-500 ease-in-out hover:scale-125"
            >
              <FaLinkedin className="w-6 h-6 lg:w-7 lg:h-7" />
            </a>
            <a
              href="#"
              className="text-pink-600 hover:text-pink-800 transform transition-transform duration-500 ease-in-out hover:scale-125"
            >
              <FaInstagram className="w-6 h-6 lg:w-7 lg:h-7" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;