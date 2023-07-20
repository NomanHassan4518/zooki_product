import React from 'react'
import { PiLightbulbLight } from "react-icons/pi"
import { PiProjectorScreenLight } from "react-icons/pi"
import { MdOutlineNature } from "react-icons/md"
import { BsDot } from 'react-icons/bs'
const About = () => {
    const about = [
        {
            icons: <PiLightbulbLight style={{
                fontSize: "36px",
            }} />,
            title: "Creative Design",
            desc: "  Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni."
        },
        {
            icons: <PiProjectorScreenLight style={{
                fontSize: "36px",
            }} />,
            title: "Strategy Solutions",
            desc: "  Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni."
        },
        {
            icons: <MdOutlineNature style={{ fontSize: "36px" }} />,
            title: "Dynamic Growth",
            desc: "  Nemo enim ipsam voluptatem quia voluptas sit aspernatur at aut odit aut fugit sed quia consequuntur magni."
        }
    ]
    return (
        <section className='about pt-5' id='about'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12  my-5">
                        <div className="title-heading mb-4">
                            <h3 className='text-dark  fw-light mb-1 '>ABOUT US</h3>
                            <div className='title-border-simple position-relative'>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    {
                        about.map((a) => (


                            <div className="col-lg-4">
                                <div className="about-box about-light text-center p-3">
                                    <div className="about-icon mb-3">
                                        <span className='about_icons p-3' style={{
                                            display: "inline-block",
                                            width: "67px",
                                            height: "67px",
                                            borderRadius: "50%",
                                            fontWeight: "100",
                                        }}
                                        >{a.icons}</span>
                                    </div>
                                    <h4 className='fw-light'>
                                        <a className='text-dark' style={{ textDecoration: "none", fontSize: "1.75rem", fontWeight: "350" }} href='/'>{a.title}</a>
                                    </h4>
                                    <p className=" f-14 ">
                                        {a.desc}
                                    </p>

                                </div>
                            </div>
                        ))
                    }

                </div>


                <div className="d-flex align-items-center mt-5 row">
                    <div className="col-md-6 " >
                        <div className="about_text">
                            <h3 className="text-dark mb-3 fw-light">
                                Performancect Solution For Small Businesses
                            </h3>
                            <p className="text-muted f-15 lh-2">
                                Temporibus autem quibusdam a aut officiis debitis rerum necessitatibus saepeeveniet ut et voluptates repudiandae sint a molestiae recusandae itaque earum rerum hic tenetur a sapiente delectus ut at aut reiciendis voluptatibus maiores alias consequatur perferendis doloribus asperiores rerum necessitat saepeeveniet.
                            </p>

                            <div className="about-buy">
                                <p className="mb-0 fw-light">
                                    <a href='/about' className='text-dark' style={{ textDecoration: "none", fontSize: "20px" }}>
                                        <BsDot className='text-warning' />
                                        Lrean More
                                        <span className='text-custom' style={{ color: "#ff8700" }}> About Us </span>
                                    </a>

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="about-img light-img postion-relative p-4">
                            <img src="	https://themes.themesbrand.com/zooki/react/static/media/about-img.cb735e1c0599d2b5739c.jpg" className='img-fluid mx-auto d-block' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
