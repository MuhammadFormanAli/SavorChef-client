import React from 'react';
import NavigationBar from '../shared/navbar/NavigationBar';
import ChefDetails from './ChefDetails';
import Footer from '../shared/footer/Footer';

const ChefDetailsLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <ChefDetails></ChefDetails>
            <Footer></Footer>
        </div>
    );
};

export default ChefDetailsLayout;