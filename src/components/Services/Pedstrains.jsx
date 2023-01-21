import React from 'react'
import pedestrains from '../../assets/Pedestrains.jpg'

const Pedstrains = () => {
  return (
    <>
      <div className="container">
        <div id='Pedstrains' className='animate__animated animate__rollIn animate__delay-2s'>
          <div className="card">
            <div className='servicesImageContainer text-center card-header py-3'>
              <img src={pedestrains} alt="" className='img-fluid' />
            </div>
            <div className="card-body servicesTextContainer text-white">
              <h1>Pedestrains Count</h1>
              <p>
                We will provide pedestrians with all the className, it will helps you to find how many of crossing the roads and moving in roads and parks . . . .
              </p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#register-modalpedestrains">Read more..</button>
            </div>
          </div>
        </div>
        <div className="modal" id="register-modalpedestrains">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content animate__animated animate__fadeInTopLeft animate_delay-3s animate__slow">
              <div className="modal-header  text-white">
                <h3>Pedestrains Count</h3>
                <button className="close " id='closeBtn' data-bs-dismiss="modal">
                  <i className="fa fa-circle-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-6 seviceModalImageContainer">
                        <img src={pedestrains} className='img-fluid' />
                      </div>
                      <div className='col-12 col-md-6'>
                        <h1 className='display-6 fw-bold text-primary'>Pedestrains Count</h1>
                        <p>
                          We will provide pedestrians with all the className, it will helps you to find how many of crossing the roads and moving in roads and parks to build better ways.
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

export default Pedstrains