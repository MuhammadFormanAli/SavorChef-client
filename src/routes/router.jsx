import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import PrivetRoute from './PrivetRoute';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../components/shared/errorPage/ErrorPage';
import ChefDetailsLayout from '../components/protectedRoutes/ChefDetailsLayout';
import LoginLayout from '../layouts/LoginLayout';
import RegisterLayout from '../layouts/RegisterLayout';


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        loader:({params})=>fetch('../../public/chefData.json'),
        errorElement:<ErrorPage></ErrorPage>
        
    },
    {
        path: "login",
        element: <LoginLayout></LoginLayout>,
        
    },
    {
        path:"/register",
        element:<RegisterLayout></RegisterLayout>
    },
    {
        path: "/chef-details/:id",
        element: <PrivetRoute><ChefDetailsLayout></ChefDetailsLayout></PrivetRoute>

    },
    
]);

export default router;