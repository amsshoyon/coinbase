import React from 'react';
import FadeTransition from '../../components/common/FadeTransition/FadeTransition';
import Header from '../../components/Header/Header';
import Banner from './Banner/Banner';
import BottomBanner from './BottomBanner/BottomBanner';
import Counter from './Counter/Counter';
import Earning from './Earning/Earning';
import Listing from './Listing/Listing';
import Portfolio from './Portfolio/Portfolio';
import Steps from './Steps/Steps';
import TrustedCrypto from './TrustedCrypto/TrustedCrypto';

const HomePage = ()=> {
    return (
        <React.Fragment>
            <Header />
            <main className="main">
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
            </main>
        </React.Fragment>
    )
}

export default HomePage;