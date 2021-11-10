import React from 'react'
import './Economy.scss'

const Economy = () => {
    return (
        <section class="container pt-5 pb-lg border-top border-bottom border-4">
            <div class="row">
                <div class="col-md-6">
                    <h2 class="fz28 fw-600 mb-5">
                        Coinbase powers the cryptoeconomy</h2>
                    <p class="mb-4">
                        Customers around the world discover and begin their journeys with crypto through Coinbase.
                    </p>
                    <p>
                        Approximately 73 million verified users, 10,000 institutions, and 185,000 ecosystem partners
                        in over 100 countries trust Coinbase to easily and securely invest, spend, save, earn, and
                        use crypto.
                    </p>
                </div>
                <div class="col-md-6">
                    <div className="economy-group">
                        <div className="economy-item">
                            <h2 class="fz28 fw-600">73+M</h2>
                            <p class="">Verified users</p>
                        </div>
                        <div className="economy-item">
                            <h2 class="fz28 fw-600">$327B</h2>
                            <p class="">Quarterly volume traded</p>
                        </div>
                        <div class="economy-item">
                            <h2 class="fz28 fw-600">$255B</h2>
                            <p class="">Assets on platform</p>
                        </div>
                        <div class="economy-item">
                            <h2 class="fz28 fw-600"> 100+</h2>
                            <p class="">Countries</p>
                        </div>
                        <div class="economy-item">
                            <h2 class="fz28 fw-600"> 2700+</h2>
                            <p class="">Employees</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Economy
