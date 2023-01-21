import React from 'react'
import parking from '../../assets/Parking.jpg'

const Parking = () => {
  return (
    <>
      <div className="container">
        <div id='Parking' className='animate__animated animate__rollIn '>
          <div className="card">
            <div className='servicesImageContainer text-center card-header py-3'>
              <img src={parking} alt="" className='img-fluid' />
            </div>
            <div className="card-body servicesTextContainer text-white">
              <h2>Parking Count</h2>
              <p>
                Tracking vehicle traffic in and out of a parking lot or commercial location  can be simplified with counts different className, this survey . . . .
              </p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#register-modalparking">Read more..</button>
            </div>
          </div>
        </div>
        <div className="modal" id="register-modalparking">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content animate__animated animate__fadeInTopLeft animate_delay-3s animate__slow">
              <div className="modal-header  text-white">
                <h3>Parking Count</h3>
                <button className="close " id='closeBtn' data-bs-dismiss="modal">
                  <i className="fa fa-circle-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-6 seviceModalImageContainer">
                        <img src={parking} className='img-fluid' />
                      </div>
                      <div className='col-12 col-md-6'>
                        <h1 className='display-6 fw-bold text-primary'>Parking Count</h1>
                        <p>
                          Tracking vehicle traffic in and out of a parking lot or commercial location  can be simplified with counts different className, this survey is ued to identify parking trnds and needs and we will collect the data lent of the stay in the parking lot its will heps to improve the parking lots.
                          These surveys both assess the current parking profile and provide an understanding of the impact on the parking capacity of any new development.
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

export default Parking