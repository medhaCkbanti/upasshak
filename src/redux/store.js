import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../Features/blogSlice';
import studentReducer from '../Features/studentSlice';
import imageReducer from '../Features/imageSlice';
import videoReducer from "../Features/videoSlice"

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    students: studentReducer,
    images: imageReducer,
    videos: videoReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ⚠️ Only use if necessary
    }),
});

export default store;
