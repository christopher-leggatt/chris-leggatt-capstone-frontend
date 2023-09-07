import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // setProducts: (state, action) => {
    //   state.items = action.payload;
    // },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.product];
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((product) => product.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload.id) {
          product.count++;
        }
        return product;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((product) => {
        if (product.id === action.payload.id && product.count > 1) {
          product.count--;
        }
        return product;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
