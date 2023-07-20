import React from 'react'

const Pricing = () => {

  
    const pricing = [
        {
            type: "Basic",
            price: "19.00",
            Bandwidth: "Bandwidth: 1GB",
            Onlinespace: "Onlinespace: 100MB",
            Support: "Support: No",
            Domain: "Domain: 05",
            Hidden_Fees: "Hidden Fees: No",
        },
        {
            type: "Popular",
            price: "39.00",
            Bandwidth: "Bandwidth: 2GB",
            Onlinespace: "Onlinespace: 500MB",
            Support: "Support: Yes",
            Domain: "Domain: 10",
            Hidden_Fees: "Hidden Fees: No",
        },
        {
            type: "Advance",
            price: "80.00",
            Bandwidth: "Bandwidth: 2GB",
            Onlinespace: "Onlinespace: 1GB",
            Support: "Support: Yes",
            Domain: "Domain: 15",
            Hidden_Fees: "Hidden Fees: No",
        },
        {
            type: "Premium",
            price: "119.00",
            Bandwidth: "Bandwidth: 2.5GB",
            Onlinespace: "Onlinespace: 1.5GB",
            Support: "Support: No",
            Domain: "Domain: 20",
            Hidden_Fees: "Hidden Fees: Yes",
        }
    ]
    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12  my-5">
                        <div className="title-heading mb-4">
                            <h3 className='text-dark  fw-light mb-1 '>OUR PRICING</h3>
                            <div className='title-border-simple position-relative'>

                            </div>
                        </div>
                    </div>

                    <div className="row d-flex align-items-center">
                        {

                            pricing.map((a) => (


                                <div className="col-md-6 col-lg-3" >
                                    <div className="pricing-box mt-4">
                                        <div className="price bg-light position-relative p-4">
                                            <div className="float-start">
                                                <h5 className="text-dark title mt-2 mb-0 fw-normal f-18">{a.type}</h5>
                                            </div>
                                            <div>
                                                <h2 className="text-dark fw-normal text-end mb-0">
                                                    <sub>$</sub>
                                                    {a.price}

                                                </h2>
                                            </div>
                                        </div>

                                        <div className="p-4 pricing-list">
                                            <ul className="list-unstyled mb-0">
                                                <li className="text-muted f-14">{a.Bandwidth}</li>
                                                <li className="text-muted f-14">{a.Onlinespace}</li>
                                                <li className="text-muted f-14">{a.Support}</li>
                                                <li className="text-muted f-14">{a.Domain}</li>
                                                <li className="text-muted mb-0 f-14">{a.Hidden_Fees}</li>
                                            </ul>
                                        </div>

                                        <div className="ps-4 mb-4 mt-2 pricing_btn">
                                            <a className="btn btn-outline-primary btn-md" href="/" role="button">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }



                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
