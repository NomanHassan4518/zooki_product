import React from 'react'

const Home = () => {
  return (
    <div className='home '>
   <div className="item text-light">

      <div className=" mx-lg-5 row d-flex justify-content-center align-items-center  w-100">
      <div className="col-md-5 col-lg-5 d-flex  justify-content-lg-center align-items-sm-center align-items-md-start  h-lg-100 h-md-25 h-sm-75">
      <div className="text w-lg-75  w-sm-100">
      <h1 className='fw-normal home-2-title display-4 mb-0'>Make Your Marketing Real.</h1>
      <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis at suscipit laboriosam nisi ut aliquid a commodi consequatur Quis autem.</p>
      <button className='btn btn-custom '>Learn More</button>
    </div>
      </div>

      <div className="col-md-7 col-lg-7 d-flex  justify-content-lg-center align-items-center">
      <div className="image">
      <img src="https://themes.themesbrand.com/zooki/react/static/media/home-2-img.1c7314c691a2af56e41b.png" className='mover-img' alt="" />
    </div>
      </div>
      </div>
      </div>
   </div>
  )
}

export default Home
