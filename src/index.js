import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/themes/theme";
import { Provider } from "react-redux";
import store from "./state/store";

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
