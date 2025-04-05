import React, { useEffect } from "react"; // Import useEffect
import { motion } from "framer-motion";
import BlogListItem from "./BlogListItem";
import { IoHome } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogList = () => {
  const medias = [
    { id: 1, name: "Blogs", slug: "blog" },
    { id: 2, name: "Travel", slug: "travel" },
    { id: 3, name: "Photo Gallery", slug: "photo" },
    { id: 4, name: "Video Gallery", slug: "video" },
  ];

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Start slightly below and invisible
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth transition
      viewport={{ once: true, amount: 0.5 }} // Trigger when 50% of the element is in view
      className="bg-[#FFFFFF]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-40 pt-10">
        {/* Header Section */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-2xl font-bold pb-2"
        >
          Blog Posts
        </motion.h2>

        {/* Header Section with Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-center mb-5"
        >
          <ul className="flex items-center gap-3 sm:gap-5 mb-4 sm:mb-0">
            <li className="flex items-center gap-2 sm:gap-4 text-sm sm:text-[17px] font-semibold cursor-pointer">
              <span>
                <IoHome />
              </span>
              HOME
            </li>
            <li className="text-xl sm:text-[22px] cursor-pointer">
              <MdKeyboardArrowRight />
            </li>
            <li className="text-sm sm:text-[17px] font-semibold text-[#76c04e] cursor-pointer">
              Blogs
            </li>
          </ul>

          <Link
            to="/admin/addBlog"
            className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300 text-sm sm:text-base"
          >
            Create a Blog
          </Link>
        </motion.div>

        {/* Blog List */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Blog List (Full width on small screens, 80% on larger screens) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full lg:w-[80%]"
          >
            <div className="flex flex-col gap-8">
              <BlogListItem />
            </div>
          </motion.div>

          {/* Right Side - Media Section (Full width on small screens, 20% on larger screens) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
            className="w-full lg:w-[20%] mt-8 lg:mt-10"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                Media
              </h2>
              <ul className="space-y-2">
                {medias.map((category) => (
                  <motion.li
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 * category.id }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <Link
                      to={`/category/${category.slug}`}
                      className="text-gray-600 hover:text-blue-600 transition duration-300 text-sm sm:text-base"
                    >
                      {category.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogList;