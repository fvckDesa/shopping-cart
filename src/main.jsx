import React from "react";
import ReactDOM from "react-dom/client";
// components
import { BrowserRouter } from "react-router-dom";
import App from "@src/App";
// style
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
