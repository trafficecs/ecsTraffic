import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='footer pt-3 '>
      <div className="row px-5">
        <div className='col-12 col-sm-12 col-md-6 col-lg-4 text-white'>
          <h3>About Us</h3>
          <p>Ecs works hard and most up-to-date, accurate and reliable technologies to ensure data quality and time management is the highest standards in traffic services.</p>
        </div>
        <div className='col-12 col-sm-12 col-md-4 col-lg-3 text-white '>
          <h3 className='text-center' id='ServicesOffered'>Services Offered</h3>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <ul id='servicesFooter' >
              <Link to={'/allServices'}><li>Intersection Count</li></Link>
              <Link to={'/allServices'}><li>Roundabout Counts</li></Link>
              <Link to={'/allServices'}><li>Pedestrain Count</li></Link>
              <Link to={'/allServices'}><li>Parking Surveys</li></Link>
              <Link to={'/allServices'}><li>Queue Length Surveys</li></Link>
              <Link to={'/allServices'}><li>Traffic Violations</li></Link>
              <Link to={'/allServices'}><li>Mid-Block Counts</li></Link>
              <Link to={'/allServices'}><li>Number Plate Recognition</li></Link>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-5 contactUs">
          <div className="d-flex flex-row justify-content-between">
            <div className='text-white'>
              <h3>Contact Us</h3>
              <ul>
                <li><i className="fa-solid fa-phone me-1"></i> +91 9346680401</li>
                <li><i class="fa-solid fa-envelope me-1"></i> info@ecstrafficservice.com</li>
                <li><i className="fa-solid fa-location-dot me-1"></i> Gorantla, Andhra Pradesh, 515231.</li>
              </ul>
            </div>
            <div className="footerSocialMedias">
              <div className=" footerSocialMediaIcons mt-1 text-center">
                <div className='px-2'>
                  <a href='https://www.instagram.com/ecstraffic' target={'_blank'}>
                    <i className="fa fa-instagram fs-3 fw-bold"></i>
                  </a>
                </div>
                <div className='px-2'>
                  <a href='https://www.facebook.com/profile.php?id=100089704023015' target={'_blank'}>
                    <i className="fa fa-facebook fs-3 my-1 fw-bold"></i>
                  </a>
                </div>
                <div className='px-2'>
                  <a href='https://twitter.com/traffic_ecs' target={'_blank'}>
                    <i className="fa fa-twitter fs-3 fw-bold"></i>
                  </a>
                </div>
                <div className='px-2'>
                  <a href='https://www.linkedin.com/in/ecs-traffic-2a5412262' target={'_blank'}>
                    <i className="fa fa-linkedin fs-3 mt-1 fw-bold"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center copyRight">
        <h6 className='text-white'>Copyright <i className="fa-solid fa-copyright text-white"></i> {year}. All rights reserved</h6>
      </div>
    </footer >
  )
}

export default Footer