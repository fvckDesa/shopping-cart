import React from "react";
import ReactDOM from "react-dom/client";
// components
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "@src/App";
// store redux
import store from "./store";
// style
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
