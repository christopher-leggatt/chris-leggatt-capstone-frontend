import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./state/store";
import MuiTheme from "./styles/themes/MuiTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MuiTheme>
        <App />
      </MuiTheme>
    </Provider>
  </React.StrictMode>
);
