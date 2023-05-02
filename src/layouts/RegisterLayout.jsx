import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationBar from '../components/shared/navbar/NavigationBar';
import Footer from '../components/shared/footer/Footer';
import Register from '../components/register/Register';

const RegisterLayout = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Register></Register>
            <Footer></Footer>
        </>
    );
};

export default RegisterLayout;