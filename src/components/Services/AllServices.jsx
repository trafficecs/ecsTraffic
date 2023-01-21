import React, { useState } from 'react'
import Bicycles from './Bicycles'
import IntersectionCount from './IntersectionCount'
import MidBlock from './MidBlock'
import NumberPlate from './NumberPlate'
import Parking from './Parking'
import Pedstrains from './Pedstrains'
import Queue from './Queue'
import RoundAbout from './RoundAbout'
import TrafficViolations from './TrafficViolations'

const AllServices = () => {
  return (
    <div id='allServices' className='container my-3'>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <IntersectionCount />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4  mb-4">
          <RoundAbout />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <Pedstrains />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <TrafficViolations />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <Queue />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <NumberPlate />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <MidBlock />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <Parking />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <Bicycles />
        </div>
        {/* <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <Test />
        </div> */}
      </div>
    </div>
  )
}

export default AllServices