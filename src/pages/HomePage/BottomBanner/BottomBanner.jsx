import { Button } from '@mui/material'
import React from 'react'
import './BottomBanner.scss'

const BottomBanner = () => {
    return (
        <section className="bg-banner py-lg" style={{backgroundColor: '#f5f8ff'}}>
            <div className="container">
                <div className="text-center text-sm-start mx-auto mx-md-0" style={{maxWidth: '350px'}}>
                    <h2 className="fz32 fw-500 mb-3">Earn up to $26 worth of crypto</h2>
                    <p className="text-dark fz14 mb-3">Discover how
                        specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.</p>
                    <div>
                        <Button variant="contained" color="primary" size="large" className="fw-600">Start earning </Button>
                    </div>
                </div>
                <div className="image d-none d-md-block">
                    <img src="https://assets.coinbase.com/assets/earn-upsell-desktop.7ac67bac6fdea56ce4ca11961fc8f95d.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default BottomBanner
