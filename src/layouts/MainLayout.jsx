import React from 'react';
import NavigationBar from '../components/shared/navbar/NavigationBar';
import Banner from '../components/banner/Banner';
import Footer from '../components/shared/footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;