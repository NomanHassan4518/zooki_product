import React from 'react'

const Blog = () => {
    const blog = [
        {
            img: "https://themes.themesbrand.com/zooki/react/static/media/img-1.f19acca3adc39c364415.jpg",
            date: "01 Jun 2019",
            expert: "UI/UX Designer",
            title: "Quis autem reprehenderit",
            desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis deleniti corrupti.",
        },
        {
            img: "https://themes.themesbrand.com/zooki/react/static/media/img-1.f19acca3adc39c364415.jpg",
            date: "02 Jun 2019",
            expert: "WEB DEVELOPER",
            title: "At vero eos accusamus",
            desc: "Et harum quidem rerum it facilis est et expedita distinctio a libero tempore cumsoluta.",
        },
        {
            img: "https://themes.themesbrand.com/zooki/react/static/media/img-1.f19acca3adc39c364415.jpg",
            date: "03 Jun 2019",
            expert: "WEB DESIGNER",
            title: "Et harum quidem rerum",
            desc: "Temporibus autemes quibusdam et aut offici debitis rerum necessitatibus recusandae.",
        }
    ]
    return (
        <section className="blog " id='blog'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12  my-5">
                        <div className="title-heading mb-4">
                            <h3 className='text-dark  fw-light mb-1 text-uppercase' >The BLOG</h3>
                            <div className='title-border-simple position-relative'>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">

                    {
                        blog.map((a) => (


                            <div className="col-lg-4">
                                <div className="blog1 position-relative">
                                    <div className="blog-img position-relative mt-4">
                                        <div className="blog-date">
                                            <p className="mb-0 fw-light text-white f-15">{a.date}</p>
                                        </div>

                                        <img src={a.img} alt="" className="img-fluid mx-auto d-block rounded" />
                                    </div>

                                    <div className="position-relative">
                                        <div className="blog-content bg-white text-center p-4">
                                            <p className="text-uppercase mb-2 f-13 text-muted">
                                               {a.expert}
                                            </p>

                                            <h5 className="fw-normal f-18">
                                                <a className='text-dark' href='/' style={{ textDecoration: "none" }}>{a.title}</a>
                                            </h5>
                                            <p className="text-muted f-14">
                                              {a.desc}
                                            </p>

                                            <div className="read-more">
                                                <a className='text-primary f-15' href='/' style={{ textDecoration: "none" }}>
                                                    Read more
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Blog
