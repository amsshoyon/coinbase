import React from 'react';
import FadeTransition from '../../components/common/FadeTransition/FadeTransition';
import Banner from './Banner/Banner';
import BottomBanner from './BottomBanner/BottomBanner';
import Counter from './Counter/Counter';
import Earning from './Earning/Earning';
import './HomePage.scss';
import Listing from './Listing/Listing';
import Portfolio from './Portfolio/Portfolio';
import Steps from './Steps/Steps';
import TrustedCrypto from './TrustedCrypto/TrustedCrypto';

const HomePage = ()=> {
    return (
        <FadeTransition>
            <Banner />
            <Listing />
            <Earning />
            <Portfolio />
            <TrustedCrypto />
            <Counter />
            <Steps />
            <BottomBanner />
        </FadeTransition>
    )
}

export default HomePage;