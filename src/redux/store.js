import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../Features/blogSlice';
import studentReducer from '../Features/studentSlice';
import imageReducer from '../Features/imageSlice';

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    students: studentReducer,
    images: imageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ⚠️ Only use if necessary
    }),
});

export default store;
