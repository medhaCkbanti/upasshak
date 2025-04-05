import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk action for fetching all blogs
export const fetchPosts = createAsyncThunk('blogs/fetchPosts', async () => {
    const response = await axios.get('http://localhost:5000/api/blogs');
    return response.data;
});

// Async thunk action for fetching a single blog post by slug
export const getPost = createAsyncThunk('blogs/getPost', async (slug) => {
    const response = await axios.get(`http://localhost:5000/api/blogs/${slug}`);
    return response.data;
});

export const deletePost = createAsyncThunk(
    'blogs/deletePost',
    async (slug, { rejectWithValue }) => {
      try {
        await axios.delete(`http://localhost:5000/api/blogs/${slug}`);
        return slug; // Return the slug to use in reducer
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

const blogSlice = createSlice({
    name: 'blogs',
    initialState: {
        blogs: [],
        currentPost: null,
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Fetch all blogs
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.blogs = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

            // Fetch single blog post
            .addCase(getPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.currentPost = action.payload;
            })
            .addCase(getPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })

              // Handle delete blog
      .addCase(deletePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        // Remove the deleted blog from the state
        state.blogs = state.blogs.filter(blog => blog.slug !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Failed to delete blog';
      });
    },
});

export default blogSlice.reducer;
