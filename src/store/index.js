import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";

const initialState = {
  products: [],
};

// Thunks

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await api.get("/products");
      const { data } = response;
      console.log(response.data);
      // return response.data;
      return data;

    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const getCategorizedProducts = createAsyncThunk(
  "products/getCategorizedProducts",

  async (category) => {
    try {
      const response = await api.get(`/products/category/${category}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const getProductItem = createAsyncThunk(
  "products/getProductItem",

  async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",

  async (product) => {
    try {
      const response = await api.post("/products", product);
      return response.data;
    } catch (error) {
      console.error("Error adding products:", error);
      throw error;
    }
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",

  async ({ id, data }) => {
    try {
      const response = await api.put(`/products/${id}`, data);
      return response.data;
    } catch (error) {
      console.error("Error editing products:", error);
      throw error;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",

  async (id) => {
    try {
      await api.delete(`/products/${id}`);
      return id;
    } catch (error) {
      console.error("Error deleting products:", error);
      throw error;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  // initialState: { products: [] },
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      // return action.payload;
    },
    [getCategorizedProducts.fulfilled]: (state, action) => {
      state = action.payload;
      // return action.payload;
    },
    [getProductItem.fulfilled]: (state, action) => {
      state = action.payload;
      // return action.payload;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.push(action.payload);
      // return action.payload;
    },
    [editProduct.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
      // return action.payload;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      const index = state.products.findIndex((product) => product.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      // return action.payload;
    },
  },
});

export default productsSlice.reducer;
