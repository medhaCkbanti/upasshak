import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/images";

// Fetch images
export const fetchImages = createAsyncThunk("images/fetchImages", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// Upload image
export const uploadImage = createAsyncThunk("images/uploadImage", async (formData) => {
  const response = await axios.post(`${API_URL}/upload`, formData);
  return response.data.image;
});

// Delete image
export const deleteImage = createAsyncThunk("images/deleteImage", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const imageSlice = createSlice({
  name: "images",
  initialState: {
    images: [],
    loading: false,
    error: null,
    success: false, // Add success state
  },
  reducers: {
    resetSuccess: (state) => {
      state.success = false; // Reset success after navigation
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(uploadImage.pending, (state) => {
        state.loading = true;
        state.success = false; // Reset success before new upload
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true; // Set success to true after upload
        state.images.push(action.payload);
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteImage.fulfilled, (state, action) => {
        state.images = state.images.filter((image) => image._id !== action.payload);
      });
  },
});

export const { resetSuccess } = imageSlice.actions;
export default imageSlice.reducer;
