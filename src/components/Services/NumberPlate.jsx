import React from 'react'
import numberPlate from '../../assets/NumberPlate.jpg'

const NumberPlate = () => {
  return (
    <>
      <div className="container">
        <div id='NumberPlate' className='animate__animated animate__rollIn animate__delay-2s'>
          <div className="card">
            <div className='servicesImageContainer text-center card-header py-3'>
              <img src={numberPlate} alt="" className='img-fluid' />
            </div>
            <div className="card-body servicesTextContainer text-white">
              <h2>NumberPlate Count</h2>
              <p>
              We will provide the ANPR with an accurate and reliable way to monitor traffic movement, this ANPR great assets to law enforcement, parking, highway . . . .
              </p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#register-modalnumberPlate">Read more..</button>
            </div>
          </div>
        </div>
        <div className="modal" id="register-modalnumberPlate">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content animate__animated animate__fadeInTopLeft animate_delay-3s animate__slow">
              <div className="modal-header  text-white">
                <h3>NumberPlate Count</h3>
                <button className="close " id='closeBtn' data-bs-dismiss="modal">
                  <i className="fa fa-circle-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-6 seviceModalImageContainer">
                        <img src={numberPlate} className='img-fluid' />
                      </div>
                      <div className='col-12 col-md-6'>
                      <h1 className='display-6 fw-bold text-primary'>Numberplate Count</h1>
                        <p>
                          We will provide the ANPR with an accurate and reliable way to monitor traffic movement, this ANPR great assets to law enforcement, parking, highway monitoring and any location parking to monitor day by day traffic flows.
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

export default NumberPlate