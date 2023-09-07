import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/themes/theme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './state';
import productsReducer from './store';

const store = configureStore({
  reducer: { cart: cartReducer, products: productsReducer },
});


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
