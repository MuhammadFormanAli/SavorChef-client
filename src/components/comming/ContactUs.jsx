import React from "react";
import NavigationBar from "../shared/navbar/NavigationBar";
import Footer from "../shared/footer/Footer";
import { Container } from "react-bootstrap";
import LazyLoad from "react-lazy-load";

const ContactUs = () => {
    return (
        <>
            <NavigationBar></NavigationBar>

            <LazyLoad>
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "50vh", background:`url(${'https://poetic-sable-3448b5.netlify.app/img/banner2.jpg'})` }}
            >
                <h1 style={{backgroundColor:"#03001c8c"}} className="fw-bolder text-info p-lg-5 p-md-3 p-sm-1 rounded">
                    Contact Page is On The Way
                </h1>
            </div>
            </LazyLoad>

            <Footer></Footer>
        </>
    );
};

export default ContactUs;
