import { Button } from '@mui/material'
import React from 'react'
import './Earning.scss'

const Earning = () => {
    return (
        <section className="earnings pb-lg">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-md-4">
                        <h2 className="fz32 fw-600 mb-3"> Earn up to $26 worth of crypto</h2>
                        <p className="mb-4 fz14 text-dark">Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for
                            yourself.</p>
                        <Button variant="contained" className="fw-600">
                            Start earning
                        </Button>
                    </div>
                    <div className="col-md-6">
                        <div className="group mb-4">
                            {[...Array(4)].map((e, i)=>
                            <div className="group-data d-flex justify-content-between" key={i}>
                                <div className="">
                                    <img src="https://static-assets.coinbase.com/earn/campaigns/clover-finance/asset-logo.svg"
                                        alt="Clover Finance" className="icon" />
                                    <span className="fz22 fw-600 me-2">Clover Finance</span>
                                    <span className="fz20 fw-600"> CLV</span>
                                </div>
                                <div className="fz20 fw-600 text-green">Earn $3 CLV</div>
                            </div>
                            )}
                        </div>
                        <a href="/earn" className="d-block fw-600 text-primary ms-4">View more > </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Earning
