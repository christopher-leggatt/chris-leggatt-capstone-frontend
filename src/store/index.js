import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api";

// Thunks

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await api.get("/products");
    return response.data;
  }
);

export const fetchCategorizedProducts = createAsyncThunk(
  "products/fetchCategorizedProducts",
  async (category) => {
    const response = await api.get(`/products/category/${category}`);
    return response.data;
  }
);

export const fetchProductItem = createAsyncThunk(
  "products/fetchProductItem",
  async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product) => {
    const response = await api.post("/products", product);
    return response.data;
  }
);

export const editProduct = createAsyncThunk(
  "products/editProduct",
  async ({ id, data }) => {
    const response = await api.put(`/products/${id}`, data);
    return response.data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    await api.delete(`/products/${id}`);
    return id;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      return action.payload;
    },
    [fetchCategorizedProducts.fulfilled]: (state, action) => {
      return action.payload;
    },
    [fetchProductItem.fulfilled]: (state, action) => {
        return action.payload;
      },
    [addProduct.fulfilled]: (state, action) => {
      state.push(action.payload);
    },
    [editProduct.fulfilled]: (state, action) => {
        const index = state.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
            state[index] = action.payload;
          }
      },
      [deleteProduct.fulfilled]: (state, action) => {
        const index = state.findIndex(product => product.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
  },
});

export default productsSlice.reducer;
