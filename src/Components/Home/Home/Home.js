import React from 'react';
import Navbar from '../Header/Navbar';
import MainItem from '../MainItem/MainItem';
import Banner from '../Banner/Banner';
import Subscribe from '../../Subscribe/Subscribe';
import About from '../../About/About'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <MainItem></MainItem>
           <About></About>
           <Subscribe></Subscribe>
        </div>
    );
};

export default Home;