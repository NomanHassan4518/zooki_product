import React from 'react'
import { GiMaterialsScience } from 'react-icons/gi'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { CiShuffle } from 'react-icons/ci'
import {ImDisplay} from 'react-icons/im'

const Features = () => {
    return (
        <>
            <section className="features mt-5" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12  my-5">
                            <div className="title-heading mb-4">
                                <h3 className='text-dark  fw-light mb-1 '>OUR FEATURES</h3>
                                <div className='title-border-simple position-relative'>

                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <div className="features-content">
                                <div className="features-icon">
                                    <GiMaterialsScience className='features-icons' />
                                </div>

                                <h4 className="fw-normal text-dark mb-3 mt-4">Marketing Performance</h4>
                                <p className="text-muted f-14">
                                    Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus asperiores repellat.
                                </p>
                                <p className="text-muted f-14">
                                    Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod maxime placeat facere possimus.
                                </p>
                                <p className="mb-0 text-uppercase f-13">
                                    <a href='/' className='text-primary'>
                                        learn more
                                        <AiOutlineArrowRight />
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="features-img  mt-32">
                                <img src="https://themes.themesbrand.com/zooki/react/static/media/img-1.1bb1c555fb21d91778ad.png" className='img-fluid mx-auto d-block' alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            <section className="features1 mt-5" id="features">
                <div className="container">

                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <div className="features-img  mt-32">
                                <img src="https://themes.themesbrand.com/zooki/react/static/media/img-2.73bbfc3f31770042da4d.png" className='img-fluid mx-auto d-block' alt="" />
                            </div>
                        </div>


                        <div className="col-lg-6">
                            <div className="features-content">
                                <div className="features-icon">
                                    <CiShuffle className='features-icons' />
                                </div>

                                <h4 className="fw-normal text-dark mb-3 mt-4">Marketing Performance</h4>
                                <p className="text-muted f-14">
                                    Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus asperiores repellat.
                                </p>
                                <p className="text-muted f-14">
                                    Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod maxime placeat facere possimus.
                                </p>
                                <p className="mb-0 text-uppercase f-13">
                                    <a href='/' className='text-primary'>
                                        learn more
                                        <AiOutlineArrowRight />
                                    </a>
                                </p>
                            </div>
                        </div>


                    </div>
                </div>

            </section>

            <section className="features mt-5" id="features">
                <div className="container">

                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6">
                            <div className="features-content">
                                <div className="features-icon">
                                    <ImDisplay className='features-icons' />
                                </div>

                                <h4 className="fw-normal text-dark mb-3 mt-4">Marketing Performance</h4>
                                <p className="text-muted f-14">
                                    Itaque earum rerum hic tenetur sapiente delectut reiciendis voluptatibus perspiciatis unde omnis iste natus error sit maiores alias consequatur perferendisthat doloribus asperiores repellat.
                                </p>
                                <p className="text-muted f-14">
                                    Nam libero tempore cum soluta nobis eligendi optio cumque nihil impedit minusidquod maxime placeat facere possimus.
                                </p>
                                <p className="mb-0 text-uppercase f-13">
                                    <a href='/' className='text-primary'>
                                        learn more
                                        <AiOutlineArrowRight />
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="features-img  mt-32">
                                <img src="https://themes.themesbrand.com/zooki/react/static/media/img-3.1dbfd73268f019064e9f.png" className='img-fluid mx-auto d-block' alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Features
