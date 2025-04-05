import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos } from "../Features/videoSlice";
import VideoCard from "./VideoCard";
import { motion } from "framer-motion";

const VideosPage = () => {
    const dispatch = useDispatch();
    const { videos } = useSelector((state) => state.videos);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        dispatch(fetchVideos());
    }, [dispatch]);

    useEffect(() => {
        if (videos.length > 0) {
            const uniqueCategories = [...new Set(videos.map(v => v.category))];
            setCategories(["All", ...uniqueCategories]);
        }
    }, [videos]);

    const filteredVideos = selectedCategory === "All"
        ? videos
        : videos.filter(video => video.category === selectedCategory);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto px-4 py-8"
        >
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <h1 className="text-3xl font-bold">Video Gallery</h1>
                <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="p-2 border rounded-lg"
                >
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVideos.map(video => (
                    <VideoCard
                        key={video._id}
                        video={video}
                        onDelete={() => {}}
                    />
                ))}
            </div>
        </motion.div>
    );
};

export default VideosPage;