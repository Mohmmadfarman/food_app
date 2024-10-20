import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";
import StoreContextProvider from "./context/Store.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/food_app">
   <StoreContextProvider>
      <App />
   </StoreContextProvider>
  </BrowserRouter>
);
