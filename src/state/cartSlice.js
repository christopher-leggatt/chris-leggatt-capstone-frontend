import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {    

    addToCart: (state, action) => {
      const foundProduct = state?.cart?.find(
        (product) => product.id === action.payload.product.id
      );
      if (foundProduct) {
        foundProduct.count = action.payload.product.count;
      } else {
        state.cart = [...state.cart, { ...action.payload.product, count: action.payload.product.count }];
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state?.cart?.filter(
        (product) => product.id !== action.payload.id
      );
    },

    increaseCount: (state, action) => {
      state.cart = state?.cart?.map((product) => {
        if (product.id === action.payload.id) {
          if (!product.count) {
            product.count = 1;
          }
          product.count++;
        }
        return product;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state?.cart?.map((product) => {
        if (product.id === action.payload.id && !!product.count && product.count > 1) {
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
