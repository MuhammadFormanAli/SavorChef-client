import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import AuthProvider from "./contexts/AuthProvider";
import App from "./App";
import ProtectedDemo from "./components/protectedRoutes/ProtectedDemo";
import PrivetRoute from "./components/privetRoute/PrivetRoute";
import Pricing from "./components/protectedRoutes/Pricing";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },
    {
        path: "/protected",
        element: <PrivetRoute><ProtectedDemo></ProtectedDemo></PrivetRoute>
    },
    {
        path: "/price",
        element: <PrivetRoute><Pricing></Pricing></PrivetRoute>
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
