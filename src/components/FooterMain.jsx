import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { IoIosArrowForward } from "react-icons/io";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const FooterMain = () => {
  return (
    <div className="bg-[#202020] min-h-[500px] py-10 flex items-center justify-center">
      <div className="container max-w-[1400px] mx-auto px-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
          {/* Deprived Aid Section */}
          <div className="w-full">
            <h1 className="text-[white] text-2xl font-extrabold mb-7">
              Deprived Aid
            </h1>
            <div className="w-16 h-[2px] bg-[white] mb-7"></div>
            <p className="text-[#d9d9d9] text-[17px] leading-relaxed mb-8">
              Deprived Aid, a socio-economic development organization/NGO based
              in Bandarban Hill District, is working to bring a positive change
              in the lives of the impoverished.
            </p>
          </div>

          {/* Latest News Section */}
          <div className="w-full">
            <h1 className="text-[white] text-2xl font-extrabold mb-7">
              Latest News
            </h1>
            <div className="w-16 h-[2px] bg-[white] mb-7"></div>
            <ul className="space-y-4">
              <li className="flex items-center gap-2 text-[#d9d9d9]">
                <IoIosArrowForward className="text-sm" />
                <span>Success of Upasshak Hostel</span>
              </li>
              <li className="text-[#d9d9d9] flex items-center gap-2">
                <IoIosArrowForward className="text-sm" />
                <span>Hello world!</span>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="w-full">
            <h1 className="text-[white] text-2xl font-extrabold mb-7">
              Quick Links
            </h1>
            <div className="w-16 h-[2px] bg-[white] mb-7"></div>
            <ul className="space-y-4">
              {/* Add Link components for routing */}
              <Link to="/who-we-are">
                <li className="text-[#d9d9d9] flex items-center gap-2 hover:text-white transition-colors duration-300">
                  <IoIosArrowForward className="text-sm" />
                  <span>About Us</span>
                </li>
              </Link>
              <Link to="/blogs">
                <li className="text-[#d9d9d9] flex items-center gap-2 hover:text-white transition-colors duration-300">
                  <IoIosArrowForward className="text-sm" />
                  <span>Blog</span>
                </li>
              </Link>
              <Link to="/contact-us">
                <li className="text-[#d9d9d9] flex items-center gap-2 hover:text-white transition-colors duration-300">
                  <IoIosArrowForward className="text-sm" />
                  <span>Contact</span>
                </li>
              </Link>
              <Link to="/">
                <li className="text-[#d9d9d9] flex items-center gap-2 hover:text-white transition-colors duration-300">
                  <IoIosArrowForward className="text-sm" />
                  <span>Home</span>
                </li>
              </Link>
              <Link to="/projects">
                <li className="text-[#d9d9d9] flex items-center gap-2 hover:text-white transition-colors duration-300">
                  <IoIosArrowForward className="text-sm" />
                  <span>Projects</span>
                </li>
              </Link>
              <Link to="/who-we-are">
                <li className="text-[#d9d9d9] flex items-center gap-2 hover:text-white transition-colors duration-300">
                  <IoIosArrowForward className="text-sm" />
                  <span>Vision & Mission</span>
                </li>
              </Link>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="w-full">
            <h1 className="text-[white] text-2xl font-extrabold mb-7">
              Contact Info
            </h1>
            <div className="w-16 h-[2px] bg-[white] mb-7"></div>
            <p className="text-[#d9d9d9] text-[17px] leading-relaxed mb-4">
              Sahbuddin Building (1st Floor) College Road, Bandarban (adjacent
              to fire service), <br />
              Bandarban Hill District-4600 Bangladesh
            </p>
            <p className="text-[#d9d9d9] mb-2">Phone: +8801556623383</p>
            <p className="text-[#d9d9d9] mb-2">E-mail: chakma_amar@yahoo.com</p>
            <p className="text-[#d9d9d9]">Website: deprivedaid.org</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 justify-center mt-8">
          <a
            href="#"
            className="bg-[#1d1d1d] p-3 rounded-full text-white hover:bg-[#555] text-lg transform transition-transform duration-300 hover:scale-125"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-[#1d1d1d] p-3 rounded-full text-white hover:bg-[#555] text-lg transform transition-transform duration-300 hover:scale-125"
          >
            <FaGooglePlusG />
          </a>
          <a
            href="#"
            className="bg-[#1d1d1d] p-3 rounded-full text-white hover:bg-[#555] text-lg transform transition-transform duration-300 hover:scale-125"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="bg-[#1d1d1d] p-3 rounded-full text-white hover:bg-[#555] text-lg transform transition-transform duration-300 hover:scale-125"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-[#1d1d1d] p-3 rounded-full text-white hover:bg-[#555] text-lg transform transition-transform duration-300 hover:scale-125"
          >
            <FaYoutube />
          </a>
          <a
            href="#"
            className="bg-[#1d1d1d] p-3 rounded-full text-white hover:bg-[#555] text-lg transform transition-transform duration-300 hover:scale-125"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterMain;