import React from 'react';
import NavigationBar from '../shared/navbar/NavigationBar';
import Footer from '../shared/footer/Footer';
import LazyLoad from 'react-lazy-load';

const AboutUs = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <LazyLoad>
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ height: "50vh", background: `url(${'https://imaginative-praline-9d7d15.netlify.app/img/banner3.jpg'})` }}
                >
                    <h1 style={{ backgroundColor: "#03001c8c" }} className="fw-bolder text-info p-lg-5 p-md-3 p-sm-1 rounded">
                        About Page is On The Way
                    </h1>
                </div>
            </LazyLoad>

            <Footer></Footer>

        </div>
    );
};

export default AboutUs;