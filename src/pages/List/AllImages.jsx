import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImages, deleteImage } from "../../Features/imageSlice";
import { MdDelete } from "react-icons/md";

const AllImages = () => {
  const dispatch = useDispatch();
  const { images, loading, error } = useSelector((state) => state.images);
  const [hoveredImage, setHoveredImage] = useState(null);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      await dispatch(deleteImage(id)).unwrap();
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-40 py-10">
      <h2 className="text-2xl font-bold mb-6 text-green-900 text-center">
        All Images
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image._id}
            className="relative group aspect-square bg-slate-200 flex items-center justify-center cursor-pointer overflow-hidden rounded-lg"
            onMouseEnter={() => setHoveredImage(image._id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <img
              src={`http://localhost:5000${image.imageUrl}`}
              alt="Uploaded"
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
            />

            {/* Delete Icon - Visible on Hover */}
            {hoveredImage === image._id && (
              <button
                onClick={() => handleDelete(image._id)}
                className="absolute top-3 right-3 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition duration-300"
              >
                <MdDelete size={24} />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllImages;