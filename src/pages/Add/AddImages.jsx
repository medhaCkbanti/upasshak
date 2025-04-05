import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadImage, fetchImages, resetSuccess } from "../../Features/imageSlice";
import { useNavigate } from "react-router-dom";

const AddImages = () => {
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { images, loading, success } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigate("/gallery/photos");
        dispatch(resetSuccess()); // Reset success after navigating
      }, 200); // Short delay ensures state updates before navigation
    }
  }, [success, navigate, dispatch]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setError(null);
      setImage(file);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !category) {
      setError("Please select an image and a category.");
      return;
    }

    // Reset success before starting a new upload
    dispatch(resetSuccess());

    const formData = new FormData();
    formData.append("image", image);
    formData.append("category", category); // Include category in FormData

    try {
      await dispatch(uploadImage(formData)).unwrap();
    } catch (error) {
      setError(error.message || "Failed to upload image. Please try again.");
    }
  };

  return (
    <div className="mx-auto w-[600px] pt-20">
      <h2 className="text-2xl font-bold mb-6 text-green-900 text-center">
        Upload Image
      </h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          {image && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-md"
              />
            </div>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Select Category</label>
          <select
            value={category}
            onChange={handleCategoryChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          >
            <option value="">Select a category</option>
            <option value="Dragon">Dragon</option>
            <option value="Students Activities">Students Activities</option>
            <option value="Boys">Boys</option>
            <option value="Girls">Girls</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddImages;