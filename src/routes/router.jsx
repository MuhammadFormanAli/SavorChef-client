import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import PrivetRoute from './PrivetRoute';
import ProtectedDemo from '../components/protectedRoutes/ProtectedDemo';
import Pricing from '../components/protectedRoutes/Pricing';
import MainLayout from '../layouts/MainLayout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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

export default router;