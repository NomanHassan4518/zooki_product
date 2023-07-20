import React from 'react'
import { BsFillDatabaseFill } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { BiPalette } from 'react-icons/bi'
import { BsGraphUpArrow, BsYinYang } from 'react-icons/bs'
import { MdKeyboardCommandKey } from 'react-icons/md'
import { TbHexagonLetterH } from 'react-icons/tb'

const Services = (props) => {

    const service = [
        {
            icon: <BsFillDatabaseFill/>,
            title: "Awesome Support",
            desc: "Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam."
        },

        {
            icon:<BiPalette/>,
            title: "Unlimited Colors",
            desc: "Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam."
        },

        {
            icon:<BsGraphUpArrow/>,
            title: "Strategy Solutions",
            desc: "Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam."
        },

        {
            icon:<BsYinYang/>,
            title: "Digital Design",
            desc: "Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam."
        },

        {
            icon:<MdKeyboardCommandKey />,
            title: "Easy to customize",
            desc: "Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam."
        },

        {
            icon:<TbHexagonLetterH />,
            title: "Truly Multipurpose",
            desc: "Sed ut perspiciatis unde sit omnise iste natus voluptatem site accusantium doloremque laudantium combined with a handful totam."
        },
    ];



    return (



        <section className="services pt-5" id="services">


            <div className="container">
                <div className="row">
                    <div className="col-lg-12  my-5">
                        <div className="title-heading mb-4">
                            <h3 className='text-dark  fw-light mb-1 '>OUR SERVICES</h3>
                            <div className='title-border-simple position-relative'>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

{
service.map((a)=>(


                    <div className="col-md-6 col-lg-4">
                        <div className="service-box rounded mt-4 p-4">
                            <div className="service-icon mb-3 " >
                                <span className='service_icons p-3' >{a.icon} </span>
                            </div>
                            <div className="service-desc">
                                <div className="service-title mb-2 position-relative">
                                    <h5 className="fw-normal mb-3">
                                        <a href='/'>{a.title}</a>
                                    </h5>

                                    <p className="text-muted mb-3 f-14">
                                        {a.desc}
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
)
)
}
                </div>
            </div>
        </section>
    )
}

export default Services
