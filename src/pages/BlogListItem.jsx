import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../Features/blogSlice';

const BlogListItem = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.blogs);
    const status = useSelector((state) => state.blogs.status);
    const error = useSelector((state) => state.blogs.error);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div className="bg-[#FFFFFF] py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-12">
                    {blogs.map((blog) => (
                        <div
                            key={blog.slug}
                            className="flex flex-col xl:flex-row gap-8 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 relative z-10"
                        >
                            {blog.image && (
                                <div className="md:hidden xl:block xl:w-1/2">
                                    <img
                                        src={blog.image} // Directly use the Cloudinary URL
                                        alt={blog.title}
                                        className="rounded-2xl w-[500px] h-[220px] object-cover"
                                    />
                                </div>
                            )}
                            <div className="flex flex-col gap-2 xl:w-2/3">
                                <Link
                                    to={`/blogs/${blog.slug}`}
                                    className="text-2xl inter font-semibold hover:text-blue-600 transition-colors duration-300"
                                >
                                    {blog.title}
                                </Link>
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <span className='roboto'> Written by </span>
                                    <span className="roboto text-blue-800">{blog.user || "Admin"}</span>
                                    <span className='roboto'> • {new Date(blog.createdAt).toLocaleDateString()} </span>
                                </div>
                                <p className="text-gray-600 open-sans">
                                    {blog.content.replace(/<[^>]+>/g, '').slice(0, 150)}...
                                </p>
                                <Link
                                    to={`/blogs/${blog.slug}`}
                                    className="px-6 py-3 bg-[#EB880F] rounded-lg w-max text-white hover:bg-[#D97A0E] transition-colors duration-300"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogListItem;