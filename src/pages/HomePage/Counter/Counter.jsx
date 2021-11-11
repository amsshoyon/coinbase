import React from 'react'
import './Counter.scss'

const Counter = () => {
    return (
        <div className="home-counter bg-primary py-5">
            <div className="container">
                <div className="row text-center text-light">
                    <div className="col-md-4 mb-5 mb-sm-0">
                        <div className="fz56 fw-700">$327B</div>
                        <div className="opacity-75">Quarterly volume traded</div>
                    </div>
                    <div className="col-md-4 mb-5 mb-sm-0">
                        <div className="fz56 fw-700">100+</div>
                        <div className="opacity-75">Countries supported</div>
                    </div>
                    <div className="col-md-4 mb-5 mb-sm-0">
                        <div className="fz56 fw-700">73+M</div>
                        <div className="opacity-75">Verified users</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Counter
