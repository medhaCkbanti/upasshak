import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideo, resetVideoSuccess } from "../../Features/videoSlice";
import { useNavigate } from "react-router-dom";

const AddVideo = () => {
    const [youtubeLink, setYoutubeLink] = useState("");
    const [category, setCategory] = useState("");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, success } = useSelector((state) => state.videos);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        
        if (!youtubeLink || !category) {
            setError("Please provide both YouTube link and category");
            return;
        }
    
        try {
            const response = await dispatch(addVideo({ youtubeLink, category })).unwrap();
            dispatch(resetVideoSuccess());
            navigate("/gallery/videos");
        } catch (error) {
            setError(error.message || "Failed to add video. Please check the URL and try again.");
        }
    };
    return (
        <div className="mx-auto max-w-2xl py-20 px-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Add Video</h2>
            {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
            
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium mb-2">YouTube URL</label>
                    <input
                        type="url"
                        value={youtubeLink}
                        onChange={(e) => setYoutubeLink(e.target.value)}
                        className="w-full p-3 border rounded-lg"
                        placeholder="https://www.youtube.com/watch?v=..."
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full p-3 border rounded-lg"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Tutorials">Tutorials</option>
                        <option value="Events">Events</option>
                        <option value="Interviews">Interviews</option>
                        <option value="Documentaries">Documentaries</option>
                    </select>
                </div>
                
                <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
                        loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                >
                    {loading ? "Adding..." : "Add Video"}
                </button>
            </form>
        </div>
    );
};

export default AddVideo;