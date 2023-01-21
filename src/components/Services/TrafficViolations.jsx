import React from 'react'
import trafficViolations from '../../assets/TrafficViolation.jpg'

const TrafficViolations = () => {
  return (
    <>
      <div className="container">
        <div id='TrafficViolations' className='animate__animated animate__rollIn '>
          <div className="card">
            <div className='servicesImageContainer text-center card-header py-3'>
              <img src={trafficViolations} alt="" className='img-fluid' />
            </div>
            <div className="card-body servicesTextContainer text-white">
              <h2>Traffic Violations</h2>
              <p>
                Traffic violations can be easily defined as an act that violates the traffic laws of the concerned state and country. With the rise  in the cases of traffic rule. . . .
              </p>
              <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#register-modaltrafficViolations">Read more..</button>
            </div>
          </div>
        </div>
        <div className="modal" id="register-modaltrafficViolations">
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content animate__animated animate__fadeInTopLeft animate_delay-3s animate__slow">
              <div className="modal-header  text-white">
                <h3>Traffic Violations</h3>
                <button className="close " id='closeBtn' data-bs-dismiss="modal">
                  <i className="fa fa-circle-xmark"></i>
                </button>
              </div>
              <div className="modal-body">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-12 col-md-6 seviceModalImageContainer">
                        <img src={trafficViolations} className='img-fluid' />
                      </div>
                      <div className='col-12 col-md-6'>
                      <h1 className='display-6 fw-bold text-primary'>Trafficviolation Count</h1>
                        <p>
                          Traffic violations can be easily defined as an act that violates the traffic laws of the concerned state and country. With the rise in the cases of traffic rule breaks, accident cases will also rise. We will provide traffic violations count also, because it will help you to find the person who is violating the rules and sometimes there may happen accidents too, if we track this type of violated vehicle to find them and reduce the unavoidable things from these violations, we will provide them with accurate production in this type of className.
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
    // <div id='TrafficViolations' className='animate__animated animate__rollIn'>
    //   <div className="card">
    //     <div className='servicesImageContainer text-center card-header py-3'>
    //       <img src={trafficViolations} alt="" className='img-fluid' />
    //     </div>
    //     <div className="card-body servicesTextContainer text-white">
    //       <h1>Traffic Violations</h1>
    //       {
    //         showParagraph ?
    //           <>
    //             <p>
    //               Traffic violations can be easily defined as an act that violates the traffic laws of the concerned state and country.
    //               With the rise in the cases of traffic rule breaks, accident cases also rise.we will provide traffic voilations alsso why because it will helps to find the who voilating the rules and  some times it may happen accidents too,
    //               if we track thisb type of voilation vehical to fine them and reduce the unaviodeble things from this of voilations we will provide with accerate prodution in this type of className.
    //             </p>
    //             <button className="btn btn-warning" onClick={() => setShowParagraph(false)}>Close</button>
    //           </>
    //           :
    //           <>
    //             <p>
    //               Traffic violations can be easily defined as an act that violates the traffic laws of the concerned state and country.
    //               With the rise . . . .
    //             </p>
    //             <button className="btn btn-primary" onClick={() => setShowParagraph(true)}>Read more</button>
    //           </>
    //       }

    //     </div>
    //   </div>
    // </div>

  )
}

export default TrafficViolations