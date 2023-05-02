import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { RouterProvider } from "react-router-dom";
// import App from "./App";

import AuthProvider from "./contexts/AuthProvider";
import router from "./routes/router";
// import Login from "./components/login/Login";
// import Register from "./components/register/Register";
// import PrivetRoute from "./routes/PrivetRoute";
// import ProtectedDemo from "./components/protectedRoutes/ProtectedDemo";
// import Pricing from "./components/protectedRoutes/Pricing";

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App></App>,
//     },
//     {
//         path: "/login",
//         element: <Login></Login>,
//     },
//     {
//         path: "/register",
//         element: <Register></Register>,
//     },
//     {
//         path: "/protected",
//         element: <PrivetRoute><ProtectedDemo></ProtectedDemo></PrivetRoute>
//     },
//     {
//         path: "/price",
//         element: <PrivetRoute><Pricing></Pricing></PrivetRoute>
//     },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
