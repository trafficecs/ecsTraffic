import React from 'react'
import midBlock from '../../assets/Queues.jpg'

const MidBlock = () => {
  return (
    <>
      <div className="container">
        <div id='MidBlock' className='animate__animated animate__rollIn '>
          <div className="card">
            <div className='servicesImageContainer text-center card-header py-3'>
              <img src={midBlock} alt="" className='img-fluid' />
            </div>
            <div className="card-body servicesTextContainer text-white">
              <h2>MidBlock Count</h2>
              <p>
                In Midblock, we will help you to find the volume of vehicles to travel and different vehicle className on any road for straightway from some distance . . . .
              </p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#register-modalmidBlock">Read more..</button>
            </div>
          </div>
        </div>
        <div className="modal" id="register-modalmidBlock">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content animate__animated animate__fadeInTopLeft animate_delay-3s animate__slow">
              <div className="modal-header  text-white">
                <h3>MidBlock Count</h3>
                <button className="close " id='closeBtn' data-bs-dismiss="modal">
                  <i className="fa fa-circle-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-6 seviceModalImageContainer">
                        <img src={midBlock} className='img-fluid' />
                      </div>
                      <div className='col-12 col-md-6'>
                        <h1 className='display-6 fw-bold text-primary'>Midblock Count</h1>
                        <p>
                          In Midblock, we will help you to find the volume of vehicles to travel and different vehicle className on any road for straightway  from some distance from an intersection. It will helps the recording of vehicle type.
                          We will process videos and provide mid-block counts data. Mid Block Counts also referred as Link className Counts. Let the links be single lane each direction or 6 lanes each direction, let the recording be from a normal single cam for both the directions or two cams (one for each direction) or from a drone, let the links be inside a city or a motor way, let the className be just totals (volume only counts) or FHWA 13 vehicle className or customized vehicle className.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default MidBlock