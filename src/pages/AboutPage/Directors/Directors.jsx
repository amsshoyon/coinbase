import React from 'react'

const Directors = () => {
    return (
        <section class="container pt-5 pb-lg border-bottom border-4">
            <h2 class="fz28 fw-600 mb-5">Our board of directors</h2>
            <div class="row justify-content-center">
                <div className="col-md-9">
                    <div className="row">
                        {[...Array(4)].map((e, i)=>
                        <div className="col-md-3 d-flex justify-content-center" key={i}>
                            <div class="team-member">
                                <a class="d-block mb-2" href="https://www.linkedin.com/in/barmstrong/" rel="noopener noreferrer" target="_blank">
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

export default Directors
