import React from 'react';
import NavigationBar from '../components/shared/navbar/NavigationBar';
import Banner from '../components/banner/Banner';
import Footer from '../components/shared/footer/Footer';
import ChefCard from '../components/chefCard/ChefCard';
import { useLoaderData, useParams } from 'react-router-dom';
import ErrorPage from '../components/shared/errorPage/ErrorPage';
import HappyClients from '../components/happyClients/HappyClients';
import MostLoved from '../components/mostLovedRecipe/MostLoved';

const MainLayout = () => {
  const chefs =  useLoaderData()
  const param = useParams()
  console.log(param)
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Banner></Banner>
            <ChefCard 
            chefs={chefs}
            ></ChefCard>
            <HappyClients></HappyClients>
            <MostLoved></MostLoved>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;