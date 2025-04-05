import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";

const VideoCard = ({ video, onDelete }) => {
    const [showVideo, setShowVideo] = useState(false);
    const videoId = new URLSearchParams(new URL(video.youtubeLink).searchParams.get("v"));

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
            <div className="relative">
                <img
                    src={video.thumbnail}
                    alt="Video thumbnail"
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => setShowVideo(true)}
                />
                
                <button
                    onClick={() => onDelete(video._id)}
                    className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                >
                    <MdDelete size={20} />
                </button>
            </div>
            
            <div className="p-4">
                <p className="text-sm font-semibold text-gray-600">{video.category}</p>
            </div>

            {showVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg w-full max-w-4xl relative">
                        <button
                            onClick={() => setShowVideo(false)}
                            className="absolute -top-8 right-0 text-white text-2xl"
                        >
                            ×
                        </button>
                        <iframe
                            width="100%"
                            height="400"
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            )}
        </motion.div>
    );
};

export default VideoCard;