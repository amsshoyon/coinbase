import React from 'react'
import './Team.scss'

const Team = () => {
    return (
        <section class="container pt-5 pb-lg border-bottom border-4">
            <h2 class="fz28 fw-600 mb-5">Our executive team</h2>
            <div class="row justify-content-center">
                <div className="col-md-9">
                    <div className="row">
                        {[...Array(4)].map((e, i)=>
                        <div className="col-md-3 d-flex justify-content-center" key={i}>
                            <div class="team-member">
                                <a class="d-block mb-2" href="https://www.linkedin.com/in/barmstrong/" rel="noopener noreferrer" target="_blank">
                                    <div className="image mb-3">
                                        <img src="https://images.ctfassets.net/c5bd0wqjc7v0/KJatB7PzZO39yprpEojKW/6a443107e2ce8748d0928516935b4a84/brian.jpeg"
                                            alt="" class="" />
                                    </div>
                                    <p class="title fw-600"> Brian Armstrong</p>
                                </a>
                                <p>
                                    Co-Founder &amp; Chief Executive Officer</p>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
