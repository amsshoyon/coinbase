import React from 'react';
import FadeTransition from '../../components/common/FadeTransition/FadeTransition';
import Header from '../../components/Header/Header';
import Banner from './Banner/Banner';
import Career from './Career/Career';
import Directors from './Directors/Directors';
import Economy from './Economy/Economy';
import Team from './Team/Team';

const AboutPage = ()=> {
    const headerExtend = ()=> {
        return (
            <div className="header-bottom">
                <div className="d-flex justify-content-center align-items-center">
                    <a href="/about" className="active">About</a>
                    <a href="/careers">Careers</a>
                    <a href="/mission">Mission</a>
                    <a href="/press">Press</a>
                </div>
            </div>
        )
    }
    return (
        <React.Fragment>
            <Header Extend={headerExtend}/>
            <main className="main">
                <FadeTransition>
                    <Banner />
                    <Economy />
                    <Team />
                    <Directors />
                    <Career />
                </FadeTransition>
            </main>
        </React.Fragment>
    )
}

export default AboutPage;