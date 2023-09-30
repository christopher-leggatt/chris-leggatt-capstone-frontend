import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../store/api";

export const createOrder = createAsyncThunk(
  "orders/createOrder",

  async (order) => {
    try {
      console.log("🚀 ~ file: index.js:9 ~ order:", order)
      const response = await api.post("/orders", order);
      return response.data;
    } catch (error) {
      console.log("🚀 ~ file: index.js:9 ~ order:", error.response.data)
      console.error("Error adding order:", error);
      throw error;
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: [],
  reducers: {},
  extraReducers: {
    [createOrder.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default orderSlice.reducer;
