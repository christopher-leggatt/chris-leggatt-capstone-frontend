import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import storeReducer from './storeSlice';
import orderReducer from './orderSlice';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  store: storeReducer,
  order: orderReducer,
  auth: authReducer,
});

export default rootReducer;