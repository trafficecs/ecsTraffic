import React from 'react'
import bicycles from '../../assets/Bicycles.jpg'

const Bicycles = () => {
  return (
    <>
      <div className="container">
        <div id='Bicycles' className='animate__animated animate__rollIn'>
          <div className="card">
            <div className='servicesImageContainer text-center card-header py-3'>
              <img src={bicycles} alt="" className='img-fluid' />
            </div>
            <div className="card-body servicesTextContainer text-white">
              <h2>Bicycles Count</h2>
              <p>
                We will provide a bicycle count in traffic surveys for all kinds of bicycle, which helps during the traffic data analysis, thus helping and supporting the . . . . .
              </p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#register-modalbicycles">Read more..</button>
            </div>
          </div>
        </div>
        <div className="modal" id="register-modalbicycles">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content animate__animated animate__fadeInTopLeft animate_delay-3s animate__slow">
              <div className="modal-header  text-white">
                <h1>Bicycles Count</h1>
                <button className="close " id='closeBtn' data-bs-dismiss="modal">
                  <i className="fa fa-circle-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-6 seviceModalImageContainer">
                        <img src={bicycles} className='img-fluid' />
                      </div>
                      <div className='col-12 col-md-6'>
                        <h1 className='display-6 fw-bold text-primary'>Bicycles Count</h1>
                        <p>
                          We will provide a bicycle count in traffic surveys for all kinds of bicycle, which helps during the traffic data analysis, thus helping and supporting the achievement of ultimate goals.
                          We will extract pedestrian & bicycle junction turning counts for collecting turning movement data at pedestrian & bike specific locations. Junction count can include locations like a street corner, intersecting paths in park or retail storeentrance.
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

export default Bicycles