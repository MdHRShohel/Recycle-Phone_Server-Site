import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Brands from './Brands';
import ExtraBanner from './ExtraBanner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Advertise></Advertise>
            <ExtraBanner></ExtraBanner>
        </div>
    );
};

export default Home;