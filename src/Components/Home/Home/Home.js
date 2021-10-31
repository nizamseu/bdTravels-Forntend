import React from 'react';
import Navbar from '../Header/Navbar';
import MainItem from '../MainItem/MainItem';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <MainItem></MainItem>
        </div>
    );
};

export default Home;