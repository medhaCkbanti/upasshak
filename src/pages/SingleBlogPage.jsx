import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../Features/blogSlice';
import { IoHome } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeInOut" } }
};

const SingleBlogPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogs.currentPost);
  const status = useSelector((state) => state.blogs.status);
  const error = useSelector((state) => state.blogs.error);

  useEffect(() => {
    dispatch(getPost(name));
  }, [name, dispatch]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p className="text-center text-red-500 text-lg sm:text-xl">{error}</p>;
  if (!blog) return <p className="text-center text-red-500 text-lg sm:text-xl">Blog not found!</p>;

  // Function to generate social sharing URLs with blog content
  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(blog.title)}`;
    window.open(url, "_blank");
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}&hashtags=blog`;
    window.open(url, "_blank");
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}&summary=${encodeURIComponent(blog.content.substring(0, 200))}&source=${encodeURIComponent(window.location.origin)}`;
    window.open(url, "_blank");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Link copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy link.');
    });
  };

  return (
    <motion.div
      className="container mx-auto px-3 sm:px-6 lg:px-40 py-4 sm:py-6"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Header */}
      <header className="mb-4 text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800">
          {blog.title}
        </h1>
        <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
          Published on {new Date(blog.createdAt).toLocaleDateString()}
        </p>
      </header>

      {/* Breadcrumb */}
      <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5 text-sm sm:text-base">
        <Link to="/">
          <li className="flex items-center gap-2 font-semibold cursor-pointer">
            <IoHome /> HOME
          </li>
        </Link>
        <li className="text-lg sm:text-xl"><MdKeyboardArrowRight /></li>
        <Link to="/blogs">
          <li className="font-semibold text-[#76c04e] cursor-pointer">Blogs</li>
        </Link>
        <li className="text-lg sm:text-xl"><MdKeyboardArrowRight /></li>
        <li className="font-semibold text-[#76c04e] cursor-pointer">{blog.slug}</li>
      </ul>

      {/* Blog Content */}
      <div className="flex justify-center">
        <div className="w-full max-w-5xl px-2 sm:px-4">
          {blog.image && (
            <div className="mb-4 sm:mb-6 flex justify-center">
              <img
                src={blog.image} 
                alt={blog.title}
                className="w-full h-auto max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] rounded-lg shadow-md object-cover object-top"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite loop
                  e.target.src = '/placeholder-image.jpg'; // Fallback image
                }}
              />
            </div>
          )}

          <article className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </article>
        </div>
      </div>

      {/* Social Media Icons */}
      <motion.div className="flex justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-8">
        {/* Facebook Share */}
        <motion.button
          onClick={shareOnFacebook}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div className="text-2xl sm:text-3xl"><FaFacebook /></motion.div>
        </motion.button>

        {/* Twitter Share */}
        <motion.button
          onClick={shareOnTwitter}
          className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div className="text-2xl sm:text-3xl"><FaTwitter /></motion.div>
        </motion.button>

        {/* Instagram */}
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div className="text-2xl sm:text-3xl"><FaInstagram /></motion.div>
        </motion.a>

        {/* LinkedIn Share */}
        <motion.button
          onClick={shareOnLinkedIn}
          className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div className="text-2xl sm:text-3xl"><FaLinkedin /></motion.div>
        </motion.button>

        {/* Copy Link Button */}
        <motion.button
          onClick={copyToClipboard}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          whileHover={{ scale: 1.3 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <motion.div className="text-2xl sm:text-3xl">🔗</motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SingleBlogPage;