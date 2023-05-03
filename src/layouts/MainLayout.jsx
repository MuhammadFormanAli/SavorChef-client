import React, { useContext } from 'react';
import NavigationBar from '../components/shared/navbar/NavigationBar';
import Banner from '../components/banner/Banner';
import Footer from '../components/shared/footer/Footer';
import ChefCard from '../components/chefCard/ChefCard';
import { useLoaderData, useParams } from 'react-router-dom';
import HappyClients from '../components/happyClients/HappyClients';
import MostLoved from '../components/mostLovedRecipe/MostLoved';
import { AuthContext } from '../contexts/AuthProvider';
import { Spinner } from 'react-bootstrap';

const MainLayout = () => {
  const chefs =  useLoaderData()
  const{loading} = useContext(AuthContext)
  
  
  if(loading){
    return <div className='w-100 h-100 bg-secondary mx-auto d-flex align-items-center justify-content-center'><Spinner animation="border" variant="light" /></div>
}

  const param = useParams()
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