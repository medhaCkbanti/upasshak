import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import RichTextEditor from './RichTextEditor';

const AddBlog = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [editorContent, setEditorContent] = useState('');

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    image: null,
    user: 'current-user-id', // Make sure this is a valid user ID
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    try {
      const formPayload = new FormData();
      formPayload.append('title', formData.title);
      formPayload.append('slug', formData.slug);
      formPayload.append('content', editorContent);
      formPayload.append('user', formData.user);
      formPayload.append('image', formData.image);
  
      const response = await axios.post('http://localhost:5000/api/blogs', formPayload, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
  
      // Always navigate if we get a 201 response
      if (response.status === 201) {
        navigate('/blogs');
      }
    } catch (err) {
      console.error('Error creating blog:', err);
      setError(err.response?.data?.message || 
              'Failed to create blog post. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && (
          <div className="text-red-500 p-3 bg-red-100 rounded">
            {error}
          </div>
        )}
        
        <div>
          <label className="block mb-2 font-medium">Title*</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleInputChange} 
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-300 focus:border-blue-500" 
            required 
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Slug* (URL-friendly version)</label>
          <input 
            type="text" 
            name="slug" 
            value={formData.slug} 
            onChange={handleInputChange} 
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-300 focus:border-blue-500" 
            required 
            placeholder="e.g., my-awesome-blog-post"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">Featured Image*</label>
          <input 
            type="file" 
            name="image"
            onChange={(e) => setFormData((prev) => ({ 
              ...prev, 
              image: e.target.files[0] 
            }))} 
            className="w-full p-2 border rounded file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
            accept="image/*"
            required
          />
          <p className="text-sm text-gray-500 mt-1">
            Recommended size: 1200x630 pixels
          </p>
        </div>

        <div>
          <label className="block mb-2 font-medium">Content*</label>
          <RichTextEditor 
            onContentChange={handleEditorChange} 
            initialContent={editorContent}
          />
        </div>

        <div className="flex justify-end gap-4">
          <button 
            type="button" 
            onClick={() => navigate('/blogs')}
            className="px-6 py-2 border rounded text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            disabled={loading} 
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400 flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Publishing...
              </>
            ) : 'Publish Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;