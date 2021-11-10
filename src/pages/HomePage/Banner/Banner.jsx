import { Button } from '@mui/material'
import React from 'react'
import IconArrowRight from '../../../components/icons/IconArrowRight'
import IconBitcoin from '../../../components/icons/IconBitcoin'
import BannerImage from './BannerImage'
import './Banner.scss'

const Banner = () => {
    return (
        <section className="banner pt-lg">
            <div className="container sm">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center mb-3">
                            <IconBitcoin />
                            <span className="text-primary fz16 fw-600 mx-2">Jump start your portfolio </span> 
                            <IconArrowRight />
                        </div>
                        <h1 className="fz62 fw-600 title mb-3">Jump start your crypto portfolio</h1>
                        <h3 className="fz20 fw-600 mb-4">
                            Coinbase is the easiest place to buy and sell cryptocurrency. Sign up and get started today.
                        </h3>
                        <form className="subscribe-form">
                            <div className="form-group d-flex">
                                <input placeholder="Email address"
                                    autocomplete="off" 
                                    autocorrect="off" 
                                    autocapitalize="off" 
                                    spellcheck="false"
                                    name="email" 
                                    className="form-control me-3" 
                                />
                                <Button variant="contained" color="primary" size="large" className="px-5 fz16 fw-600">Get started</Button>
                            </div>
                        </form>
                        <div>
                            <a className="fz10 text-primary" href="/">
                                * Terms apply
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="ps-md-5">
                            <BannerImage />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
