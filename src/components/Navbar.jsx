import React from 'react'
import { Link } from 'react-router-dom'
import businessLogo from '../assets/logo.jpg'
import ContactUs from './ContactUs'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to={'/'} className="navbar-brand text-white fw-bold">
            <img src={businessLogo} alt="" id='businessLogo' />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 pages">
              <li className="nav-item">
                <Link to={'/'} className="nav-link text-white fw-bold" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/allServices'} className="nav-link text-white fw-bold">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/contactUs'} className="nav-link text-white fw-bold">
                  Contact Info
                </Link>
              </li>
            </ul>
            <ul className='d-flex navbar-nav  navSocialMedial'>
              <li className="nav-item socialMedias me-2">
                <a href='https://www.instagram.com/ecstraffic' target={'_blank'} className="instagram">
                  <i className="fa fa-instagram fs-4"></i>
                </a>
                <a href='https://www.facebook.com/profile.php?id=100089704023015' target={'_blank'} className="facebook">
                  <i className="fa fa-facebook fs-4 "></i>
                </a>
                <a href='https://twitter.com/traffic_ecs' target={'_blank'} className="twitter">
                  <i className="fa fa-twitter fs-4 "></i>
                </a>
                <a href='https://www.linkedin.com/in/ecs-traffic-2a5412262' target={'_blank'} className="linkedin">
                  <i className="fa fa-linkedin fs-4 "></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar