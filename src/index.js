import React from "react";
import ReactDOM from "react-dom/client";
import { AppStyles } from "providers/AppStyles";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppStyles>
      <App />
    </AppStyles>
  </React.StrictMode>
);
