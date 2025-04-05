import React from 'react';
import Banner from '../components/Banner';
import WhoWeAre from '../components/WhoWeAre';
import OurWork from '../components/OurWork';
import Vision from '../components/Vision';
import Galary from '../components/Galary';
import Commitment from '../components/Commitment';
import Success from '../components/Success';
import Teacher from '../components/Teacher';

const Home = () => {
    return (
        <div>
            <Banner/>
            <WhoWeAre/>
            <OurWork/>
            <Vision/>
            <Galary/>
            <Commitment/>
            <Success/>
            <Teacher/>
        </div>
    );
};

export default Home;