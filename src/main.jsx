import React from "react";

import ReactDOM from "react-dom/client";

import { Toaster } from "react-hot-toast";

import {
  BrowserRouter,
} from "react-router-dom";

import App from "./App";

import "bootstrap-icons/font/bootstrap-icons.css";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(

<React.StrictMode>

  <Toaster
    position="top-center"

    toastOptions={{

      duration: 3000,

      style: {

        background: "rgba(10,10,10,0.95)",

        color: "#ffffff",

        border: "1px solid rgba(255,140,60,0.25)",

        padding: "14px 18px",

        borderRadius: "16px",

        fontSize: "14px",

        backdropFilter: "blur(10px)",

        boxShadow: "0 0 25px rgba(255,120,40,0.15)",

        fontWeight: "500",

        zIndex: 999999,
      },
    }}
  />

  <BrowserRouter>
    <App />
  </BrowserRouter>

</React.StrictMode>
);