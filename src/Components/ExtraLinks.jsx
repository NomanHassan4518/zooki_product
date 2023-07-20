import React from 'react'

const ExtraLinks = () => {
  return (
    <section className="extraLink" id="extraLink">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 extra" >
                  <p>ABOUT US</p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem that is doloremque totam that laudantiume.
                </div>
                <div className="col-lg-3 extra" >
                    <p>COMPANY</p>
                    <a href='/' className=' '>Monitoring Grader</a>
                    <a href='/' className=' '>Job Opening</a>
                    <a href='/' className=' '>Customers</a>
                    <a href='/' className=' '>Privacy</a>
                </div>

                <div className="col-lg-3 extra">
                <p>SUPPORT</p>
                    <a href='/' className=' '>Get Started</a>
                    <a href='/' className=' '>Job Opening</a>
                    <a href='/' className=' '>Blog</a>
                    <a href='/' className=' '>Knowledge Base</a>
                </div>
                <div className="col-lg-3 extra">
                <p>LEGAL</p>
                    <a href='/' className=' '>Terms & Conditions</a>
                    <a href='/' className=' '>Privacy Policy</a>
                    <a href='/' className=' '>Customers</a>
                    <a href='/' className=' '>Pricing</a>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default ExtraLinks