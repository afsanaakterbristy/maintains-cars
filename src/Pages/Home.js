import React from 'react';
import About from './Home/About';
import Banner from './Home/Banner';
import Services from './Home/Services';

const Home = () => {
    return (
        <div>
        <Banner></Banner> 
        <About></About>
        <Services></Services>
        </div>
    );
};

export default Home;