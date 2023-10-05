import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';
import storeReducer from './storeSlice';
import orderReducer from './orderSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  store: storeReducer,
  order: orderReducer,
});

export default rootReducer;