import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages } from "../Features/imageSlice";
import { MdArrowForwardIos, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import img1 from "../assets/01-700x300.jpg"

const Photos = () => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.images);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All"); // State for selected category
  const [categories, setCategories] = useState([]); // State for available categories

  useEffect(() => {
    dispatch(fetchImages());
    window.scrollTo(0, 0);
  }, [dispatch]);

  // Extract unique categories from images
  useEffect(() => {
    if (images.length > 0) {
      const uniqueCategories = [...new Set(images.map((image) => image.category))];
      setCategories(["All", ...uniqueCategories]); // Add "All" as the default category
    }
  }, [images]);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Filter images based on the selected category
  const filteredImages = selectedCategory === "All"
    ? images
    : images.filter((image) => image.category === selectedCategory);

  // Sort images in descending order based on createdAt
  const sortedImages = [...filteredImages].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="bg-slate-50"
    >
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="w-full h-80"
      >
        <img
          src={img1}
          className="w-full h-full object-cover"
          alt="Banner"
        />
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto sm:px-6 lg:px-40">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="pt-5 text-[28px] text-gray-600 font-semibold"
        >
          Images
        </motion.h1>

        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="flex mt-10 items-center gap-3"
        >
          <Link to="/" className="text-[#E25A56] font-semibold text-[17px]">
            Home
          </Link>
          <MdArrowForwardIos />
          <p>Images of Upasshak</p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
          className="mt-10"
        >
          <label htmlFor="category" className="text-lg font-medium text-gray-700">
            Filter by Category:
          </label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="ml-3 p-2 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="mt-10 flex items-center justify-center gap-5 flex-wrap"
        >
          {sortedImages.map((image, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeInOut" }}
              className="w-80 h-72 bg-slate-200 flex items-center justify-center cursor-pointer overflow-hidden group"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.imageUrl} // Use Cloudinary URL directly
                alt={`Image ${i + 1}`}
                className="w-[295px] h-[265px] object-cover group-hover:scale-105 group-hover:translate-y-[-5px] group-hover:opacity-80 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for displaying the selected image */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative"
              >
                <img
                  src={selectedImage.imageUrl} // Use Cloudinary URL directly
                  alt="Large View"
                  className="max-w-[90vw] max-h-[90vh] object-contain"
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="absolute top-5 right-5 bg-gray-600 text-white p-2 rounded-full hover:bg-red-500 transition duration-300"
                  aria-label="Close"
                >
                  <MdClose size={24} />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Photos;