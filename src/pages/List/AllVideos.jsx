import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideos, deleteVideo } from "../../Features/videoSlice";
import VideoCard from "../VideoCard";
import { motion } from "framer-motion";

const AllVideos = () => {
    const dispatch = useDispatch();
    const { videos, loading, error } = useSelector((state) => state.videos);

    useEffect(() => {
        dispatch(fetchVideos());
    }, [dispatch]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this video?")) {
            dispatch(deleteVideo(id));
        }
    };

    if (loading) return <div className="text-center py-8">Loading...</div>;
    if (error) return <div className="text-red-500 text-center py-8">{error}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8">All Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <VideoCard
                        key={video._id}
                        video={video}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllVideos;