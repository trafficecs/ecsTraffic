import React from 'react'
import interSection from '../../assets/InterSection.jpg'

const IntersectionCount = () => {
  return (
    <>
      <div className="container">
        <div id='IntersectionCount' className='animate__animated animate__rollIn '>
          <div className="card">
            <div className='servicesImageContainer text-center card-header py-3'>
              <img src={interSection} alt="" className='img-fluid' />
            </div>
            <div className="card-body servicesTextContainer text-white">
              <h1>Intersection Count</h1>
              <p>
                Intersection count reports on the directional volume of traffic as it moves through a signalized and non-signalized junction. Also called a turning . . . .
              </p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#register-modal">Read more..</button>
            </div>
          </div>
        </div>
        <div className="modal" id="register-modal">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content animate__animated animate__fadeInTopLeft animate_delay-3s animate__slow">
              <div className="modal-header  text-white">
                <h3>Intersection count</h3>
                <button className="close " id='closeBtn' data-bs-dismiss="modal">
                  <i className="fa fa-circle-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-6 seviceModalImageContainer">
                        <img src={interSection} className='img-fluid' />
                      </div>
                      <div className='col-12 col-md-6'>
                        <h1 className='display-6 fw-bold text-primary'>Intersection Count</h1>
                        <p className='text-dark'>
                          Intersection count reports on the directional volume of traffic as it moves through a signalized and non-signalized junction. Also called a turning movement count, TMC. Our intersection count  study tabulates the number of left-turns, right-turns, u-turns and through movements for each approach. Our team have good experience in intersection. They will do any kind of intersections like T-junctions, and more complex levels of junctions with 100 percent quality.
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

export default IntersectionCount