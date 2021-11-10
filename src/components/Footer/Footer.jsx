import React from 'react';
import FooterInfo from './FooterInfo';
import FooterMenu from './FooterMenu';
import './Footer.scss';

const Footer = ({themeStore})=> {

    return (
        <footer className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <FooterInfo />
                    </div>
                    <div className="col-md-7">
                        <FooterMenu />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;