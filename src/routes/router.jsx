import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PrivetRoute from './PrivetRoute';
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../components/shared/errorPage/ErrorPage';
import LoginLayout from '../layouts/LoginLayout';
import RegisterLayout from '../layouts/RegisterLayout';
import ChefDetails from '../components/protectedRoutes/ChefDetails';
import Blogs from '../components/Blogs/Blogs';


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        loader:({params})=>fetch("https://chef-recipe-hunter-server-side-amber.vercel.app/chef"),
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
        element: <PrivetRoute><ChefDetails></ChefDetails></PrivetRoute>,
        loader:({params})=>(fetch(`https://chef-recipe-hunter-server-side-amber.vercel.app/chef/${params.id}`))
    },
    {
        path:"/blogs",
        element:<Blogs></Blogs>
    }
    
]);

export default router;