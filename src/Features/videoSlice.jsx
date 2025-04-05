import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchVideos = createAsyncThunk('videos/fetchVideos', 
  async () => {
    const response = await axios.get('/api/videos');
    return response.data;
  }
);

export const addVideo = createAsyncThunk('videos/addVideo', 
  async (formData) => {
    const response = await axios.post('/api/videos', formData);
    return response.data;
  }
);

export const deleteVideo = createAsyncThunk('videos/deleteVideo',
  async (id) => {
    await axios.delete(`/api/videos/${id}`);
    return id;
  }
);

const videoSlice = createSlice({
  name: 'videos',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addVideo.fulfilled, (state, action) => {
        state.items.unshift(action.payload);
      })
      .addCase(deleteVideo.fulfilled, (state, action) => {
        state.items = state.items.filter(video => video._id !== action.payload);
      });
  }
});

export default videoSlice.reducer;