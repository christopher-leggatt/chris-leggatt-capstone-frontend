import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';
import { apiSlice } from "./apiSlice";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
