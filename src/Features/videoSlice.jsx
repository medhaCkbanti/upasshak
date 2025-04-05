import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/videos";

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
    const response = await axios.get(API_URL);
    return response.data;
});

export const addVideo = createAsyncThunk("videos/addVideo", async (videoData) => {
    const response = await axios.post(API_URL, videoData); // Remove /upload from the URL
    return response.data;
});

export const deleteVideo = createAsyncThunk("videos/deleteVideo", async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id;
});

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        videos: [],
        loading: false,
        error: null,
        success: false
    },
    reducers: {
        resetVideoSuccess: (state) => {
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addVideo.pending, (state) => {
                state.loading = true;
                state.success = false;
            })
            .addCase(addVideo.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.videos.push(action.payload);
            })
            .addCase(addVideo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(deleteVideo.fulfilled, (state, action) => {
                state.videos = state.videos.filter(video => video._id !== action.payload);
            });
    }
});

export const { resetVideoSuccess } = videoSlice.actions;
export default videoSlice.reducer;