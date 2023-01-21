import React from 'react'
import queue from '../../assets/Queues.jpg'
const Queue = () => {
  return (
    <>
      <div className="container">
        <div id='Queue' className='animate__animated animate__rollIn animate__delay-1s'>
          <div className="card">
            <div className='servicesImageContainer text-center card-header py-3'>
              <img src={queue} alt="" className='img-fluid' />
            </div>
            <div className="card-body servicesTextContainer text-white">
              <h2>Queues Count</h2>
              <p>
                We will do the lents its turning moviment and passing the junction (right or left) with accurate counts and we will provide 24hrs round the number . . . . .
              </p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#register-modalqueue">Read more..</button>
            </div>
          </div>
        </div>
        <div className="modal" id="register-modalqueue">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content animate__animated animate__fadeInTopLeft animate_delay-3s animate__slow">
              <div className="modal-header  text-white">
                <h3>Queues Count</h3>
                <button className="close " id='closeBtn' data-bs-dismiss="modal">
                  <i className="fa fa-circle-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-6 seviceModalImageContainer">
                        <img src={queue} className='img-fluid' />
                      </div>
                      <div className='col-12 col-md-6'>
                      <h1 className='display-6 fw-bold text-primary'>Queue Count</h1>
                        <p>
                          We will do the lents its turning moviment and passing the junction (right or left) with accurate counts and we will provide 24hrs round the number of vehicals,pedistain etc.
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

export default Queue