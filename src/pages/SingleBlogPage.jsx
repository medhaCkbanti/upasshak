import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../Features/blogSlice';
import { IoHome } from 'react-icons/io5';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

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

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const shareOnTwitter = () => {
    const text = `${encodeURIComponent(blog.title)}&url=${encodeURIComponent(window.location.href)}`;
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const shareOnLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    window.open(url, "_blank", "width=600,height=400");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Link copied to clipboard!');
    }).catch(() => {
      alert('Failed to copy link.');
    });
  };

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p className="text-center text-red-500 text-lg sm:text-xl">{error}</p>;
  if (!blog) return <p className="text-center text-red-500 text-lg sm:text-xl">Blog not found!</p>;

  return (
    <motion.div
      className="container mx-auto px-3 sm:px-6 lg:px-40 py-4 sm:py-6"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <header className="mb-4 text-center sm:text-left">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-800">
          {blog.title}
        </h1>
        <p className="text-gray-500 mt-1 sm:mt-2 text-sm sm:text-base">
          Published on {new Date(blog.createdAt).toLocaleDateString()}
        </p>
      </header>

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

      <div className="flex justify-center">
        <div className="w-full max-w-5xl px-2 sm:px-4">
          {blog.image && (
            <div className="mb-4 sm:mb-6 flex justify-center">
              <img
                src={blog.image} 
                alt={blog.title}
                className="w-full h-auto max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px] rounded-lg shadow-md object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/placeholder-image.jpg';
                }}
              />
            </div>
          )}

          <article className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-3 sm:space-y-4">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </article>
        </div>
      </div>

      <motion.div className="flex justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-8">
        <motion.button
          onClick={shareOnFacebook}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          whileHover={{ scale: 1.3 }}
          aria-label="Share on Facebook"
        >
          <FaFacebook className="text-2xl sm:text-3xl" />
        </motion.button>

        <motion.button
          onClick={shareOnTwitter}
          className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
          whileHover={{ scale: 1.3 }}
          aria-label="Share on Twitter"
        >
          <FaTwitter className="text-2xl sm:text-3xl" />
        </motion.button>

        <motion.button
          onClick={shareOnLinkedIn}
          className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
          whileHover={{ scale: 1.3 }}
          aria-label="Share on LinkedIn"
        >
          <FaLinkedin className="text-2xl sm:text-3xl" />
        </motion.button>

        <motion.button
          onClick={copyToClipboard}
          className="text-gray-600 hover:text-gray-800 transition-colors duration-300"
          whileHover={{ scale: 1.3 }}
          aria-label="Copy link to clipboard"
        >
          <span className="text-2xl sm:text-3xl">🔗</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default SingleBlogPage;