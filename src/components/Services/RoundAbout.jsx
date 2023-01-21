import React from 'react'
import roundAbout from '../../assets/RoundAbout.jpg'

const RoundAbout = () => {
  return (
    <>
      <div className="container">
        <div id='RoundAbout' className='animate__animated animate__rollIn animate__delay-1s'>
          <div className="card">
            <div className='servicesImageContainer text-center card-header py-3'>
              <img src={roundAbout} alt="" className='img-fluid' />
            </div>
            <div className="card-body servicesTextContainer text-white">
              <h1>Roundabout Count</h1>
              <p>
                We will provide very complex level of camera roundabout junctions with quality and in time production with line by line tracking, our members are . . . .
              </p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#register-modalroundAbout">Read more..</button>
            </div>
          </div>
        </div>
        <div className="modal" id="register-modalroundAbout">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content animate__animated animate__fadeInTopLeft animate_delay-3s animate__slow">
              <div className="modal-header  text-white">
                <h3>Roundabout count</h3>
                <button className="close " id='closeBtn' data-bs-dismiss="modal">
                  <i className="fa fa-circle-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-6 seviceModalImageContainer">
                        <img src={roundAbout} className='img-fluid' />
                      </div>
                      <div className='col-12 col-md-6'>
                        <h1 className='display-6 fw-bold text-primary'>Roundabout Counts</h1>
                        <p>
                          We will provide very complex level of camera roundabout junctions with quality and in time production with line by line tracking, our members are experienced if  there is a  high  volume of vehicles with different className  passing the roundabout junctons, we will provide good output.
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

export default RoundAbout