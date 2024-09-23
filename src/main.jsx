import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./contexts/theme";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
