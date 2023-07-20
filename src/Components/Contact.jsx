import React from 'react'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { MdOutlineMail } from 'react-icons/md'
import { HiLocationMarker } from 'react-icons/hi'
import { AiOutlineGooglePlus, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
import {TbHeadphonesFilled} from 'react-icons/tb'

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12  my-5">
                        <div className="title-heading mb-4">
                            <h3 className='text-dark  fw-light mb-1 text-uppercase' >get in touch</h3>
                            <div className='title-border-simple position-relative'>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <div className="contact-box p-5">
                            <div className="row d-flex">
                                <div className="col-md-6 col-lg-8">
                                    <div className="custom-form p-3">
                                        <form name='myForm'>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <input name="name" id="name" placeholder="Name" type="text" className="form-control form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-6">
                                                    <div className="mb-3">
                                                        <input name="email" id="email" placeholder="Email" type="email" className="form-control form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <input name="subject" id="subject" placeholder="Subject" type="text" className="form-control form-control" />
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="mb-3">
                                                        <textarea name="comments" id="comments" rows="5" className="form-control" placeholder="Message"></textarea>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-12 btn-cu btn " style={{ textAlign: "left" }}>
                                                        <input type="submit" id="submit" name="send" className="submitBnt " value="Send Message" />
                                                    </div>
                                                </div>

                                            </div>
                                        </form>

                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="contact-cantent p-3">
                                        <div className="contact-details">
                                            <div className="float-start  me-3 mt-2">
                                                <TbHeadphonesFilled className='contact-icons text-muted p-2' />
                                            </div>

                                            <div className="app-contact-desc text-muted pt-1">
                                                <p className="mb-2 info-title f-13">Call :</p>
                                                <p className="mb-2 f-13">012-345-6789</p>
                                            </div>

                                        </div>
                                        <div className="contact-details">
                                            <div className="float-start  me-3 mt-2">
                                                <MdOutlineMail className='contact-icons text-muted p-2' />
                                            </div>

                                            <div className="app-contact-desc text-muted pt-1">
                                                <p className="mb-2 info-title f-13">Email :</p>
                                                <p className="mb-2 f-13">youremailid@gmail.com</p>
                                            </div>

                                        </div>
                                        <div className="contact-details">
                                            <div className="float-start  me-3 mt-2">
                                                <HiLocationMarker className='contact-icons text-muted p-2' />
                                            </div>

                                            <div className="app-contact-desc  pt-1">
                                                <p className="mb-2 text-muted info-title f-10">Location  :</p>
                                                <p className="mb-2 text-muted font f-13 ">3179 Raccoon Run Seattle, WA 98109</p>
                                            </div>

                                        </div>

                                    </div>

                                    <div className="follow mt-4 container">
                                        <h4 className="text-dark mb-3">Follow</h4>
                                        <ul id='follow-icon' className="list-inline mt-32 mb-0">
                                            <li className="list-inline-item f-15">
                                                <BsFacebook className='follow-icon '/>
                                            </li>
                                            <li className="list-inline-item f-15">
                                                <BsTwitter className='follow-icon '/>
                                            </li>
                                            <li className="list-inline-item f-15">
                                                <AiOutlineGooglePlus className='follow-icon '/>
                                            </li>
                                            <li className="list-inline-item f-15">
                                                <AiFillLinkedin className='follow-icon '/>
                                            </li>
                                            <li className="list-inline-item f-15">
                                                <AiOutlineWhatsApp className='follow-icon '/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Contact
