import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost, fetchPosts } from '../../Features/blogSlice';
import { MdDelete, MdEdit, MdVisibility } from 'react-icons/md';

const AllBlogs = () => {
    const dispatch = useDispatch();
    const blogs = useSelector((state) => state.blogs.blogs);
    const status = useSelector((state) => state.blogs.status);
    const error = useSelector((state) => state.blogs.error);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    // Handle delete confirmation
  // Updated handleDelete function
  const handleDelete = (slug) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      dispatch(deletePost(slug))
        .unwrap()
        .catch((error) => {
          alert(`Deletion failed: ${error.message}`);
        });
    }
  };

    if (status === 'loading') return <p className="p-4">Loading...</p>;
    if (status === 'failed') return <p className="text-red-500 p-4">Error: {error}</p>;

    return (
        <div className="bg-white rounded-lg p-6">
            <div className="container mx-auto max-w-5xl ml-5">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Author
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {blogs.map((blog) => (
                            <tr key={blog.slug} className="hover:bg-gray-50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-gray-900">
                                        {blog.title}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">
                                        {blog.user || "Admin"}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-500">
                                        {new Date(blog.createdAt).toLocaleDateString()}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                                    <Link
                                        to={`/blogs/${blog.slug}`}
                                        className="text-blue-600 hover:text-blue-900 p-2 rounded-lg hover:bg-blue-50"
                                        title="View"
                                    >
                                        <MdVisibility className="w-5 h-5" />
                                    </Link>
                                    <Link
                                        to={`/admin/edit-blog/${blog.slug}`}
                                        className="text-green-600 hover:text-green-900 p-2 rounded-lg hover:bg-green-50"
                                        title="Edit"
                                    >
                                        <MdEdit className="w-5 h-5" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(blog.slug)}
                                        className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50"
                                        title="Delete"
                                    >
                                        <MdDelete className="w-5 h-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBlogs;