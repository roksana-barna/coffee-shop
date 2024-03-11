import React from 'react';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import CoffeeSection from '../../Components/CoffeSection/CoffeeSection';
import MenuSection from '../../Components/MenuSection/MenuSection';
import NewReciepeSection from '../../Components/NewReciepeSection/NewReciepeSection';
import ChefCreations from '../../Components/MenuItem/ChefCreations';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <CoffeeSection></CoffeeSection>
            <MenuSection></MenuSection>
            <NewReciepeSection></NewReciepeSection>
            <ChefCreations></ChefCreations>
        </div>
    );
};

export default Home;