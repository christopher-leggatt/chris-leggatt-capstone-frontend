import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import api from "./api";

const initialState = {
  products: [],
  categorizedProducts: [],
  currentProduct: null,
};

// Thunks

export const getProducts = createAsyncThunk("getProducts", async () => {
  try {
    const response = await api.get("/products");
    const { data } = response;
    console.log(response.data);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
});

export const getCategorizedProducts = createAsyncThunk(
  "getCategorizedProducts",

  async (category) => {
    try {
      const response = await api.get(`/products/category/${category}`);
      const { data } = response;
      console.log(response.data);
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const getCurrentProduct = createAsyncThunk(
  "getCurrentProduct",

  async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      const { data } = response;
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const createProduct = createAsyncThunk(
  "createProduct",

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
  "editProduct",

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
  "deleteProduct",

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

const storeSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getCategorizedProducts.fulfilled]: (state, action) => {
      state.categorizedProducts = action.payload;
    },
    [getCurrentProduct.fulfilled]: (state, action) => {
      state.currentProduct = action.payload[0];
    },
    [createProduct.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [editProduct.fulfilled]: (state, action) => {
      const index = state.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    [deleteProduct.fulfilled]: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export default storeSlice.reducer;
