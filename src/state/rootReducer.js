import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import storeReducer from './storeSlice';
import orderReducer from './orderSlice';
import authReducer from './authSlice';
import { apiSlice } from "./apiSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  store: storeReducer,
  order: orderReducer,
  auth: authReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;