import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

const publicPath = new URL(process.env.PUBLIC_URL || "/", window.location.origin).pathname;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={publicPath}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
