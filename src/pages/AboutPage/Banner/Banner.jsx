import React from 'react'

const Banner = () => {
    return (
        <section class="about-banner pt-5 pb-lg">
            <div className="container">
                <div class="row align-items-center">
                    <div class="col-md-6 pe-md-5">
                        <img src="https://images.ctfassets.net/c5bd0wqjc7v0/3zKOX9Ce6joHJiXNa70wtd/f4a6709acd4495817081821638e641ae/corporate-about-page-hero-image.jpeg?fl=progressive&amp;q=80" alt="" />
                    </div>
                    <div class="col-md-6 ps-md-5">
                        <h1 class="fz62 fw-600 mb-4">About <br/> Coinbase</h1>
                        <p className="mb-3">
                            We are building the cryptoeconomy – a more fair, accessible, efficient, and transparent
                            financial system enabled by crypto.</p>
                        <p>
                            We started in 2012 with the radical idea that anyone, anywhere, should be able to easily and
                            securely send and receive Bitcoin. Today, we offer a trusted and easy-to-use platform for
                            accessing the broader cryptoeconomy.</p>
                    </div>
                   
                </div>
            </div>
        </section>
    )
}

export default Banner
