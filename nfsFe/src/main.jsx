import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, Router, RouterProvider, Routes } from "react-router-dom";
//import App from "./App";
import Root from "./pages/router";
import { AuthProvider } from "./helpers/contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <BrowserRouter>
    <Root />
  </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
