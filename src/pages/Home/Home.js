import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Brands from './Brands';
import ExtraBanner from './ExtraBanner';
import HowWorks from './HowWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowWorks></HowWorks>
            <Brands></Brands>
            <Advertise></Advertise>
            <ExtraBanner></ExtraBanner>
        </div>
    );
};

export default Home;