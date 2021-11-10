import React from 'react';
import FadeTransition from '../../components/common/FadeTransition/FadeTransition';
import Banner from './Banner/Banner';
import Earning from './Earning/Earning';
import './HomePage.scss';
import Listing from './Listing/Listing';
import Portfolio from './Portfolio/Portfolio';

const HomePage = ()=> {
    return (
        <FadeTransition>
            <Banner />
            <Listing />
            <Earning />
            <Portfolio />
        </FadeTransition>
    )
}

export default HomePage;