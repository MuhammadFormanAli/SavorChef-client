import React from 'react';
import NavigationBar from '../components/shared/navbar/NavigationBar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/footer/Footer';
import { Container } from 'react-bootstrap';
import Login from '../components/login/Login';

const LoginLayout = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Login></Login>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default LoginLayout;