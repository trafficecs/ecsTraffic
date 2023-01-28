import React from 'react'
import ContactUsForm from './ContactUsForm';

const ContactUs = () => {

  const sendMail = () => {
    window.location = "mailto:info@trafficservice.com";
  }

  const copyMail = () => {
    navigator.clipboard.writeText("info@trafficservice.com")
    alert("Mail copied successfully")
  }
  const callNow = () => {
    window.open('tel:+91 9346680401');
  }
  const copyContact = () => {
    navigator.clipboard.writeText("+91 9346680401")
    alert("Contact copied successfully")
  }

  return (
    <div id='ContactUs'>
      <div className="contentContainer">
        <div id="backBackground">
          <div className="textContainers">
            <h1>Get in touch</h1>
            <p>Want to get in touch? We'd love to hear from you. Here's how you can reach us...</p>
          </div>
        </div>
        <div id="reachUsContainer">
          <div className="card reachUsCard shadow-lg">
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="reachUsContent text-center">
                <h1 ><i className='fa fa-envelope fw-bold'></i></h1>
                <h1 className='text-primary'>Mail us</h1>
                <h5 className='text-primary'>info@ecstrafficservice.com</h5>
                <button className="btn fw-bold btnZoomContact" onClick={sendMail} title="Click to send mail now"><i className='fa fa-envelope fw-bold me-2 text-success'></i>Send Mail</button>
                <button className="btn fw-bold btnZoomContact" onClick={copyMail} title="Copy to clipboard"><i className='fa-solid fa-copy text-primary fw-bold'></i> Copy</button>
              </div>
            </div>
          </div>
          <div className="card reachUsCard shadow-lg">
            <div className="card-body d-flex flex-column justify-content-center">
              <div className="reachUsContent text-center">
                <h1><i className='fa fa-phone fw-bold'></i></h1>
                <h1 className='text-info '>Call us</h1>
                <h5 className='text-info '>+91 9346680401</h5>
                <button className="btn fw-bold btnZoomContact" onClick={callNow} title="Click to call +91 9346680401"><i className='fa fa-phone fw-bold me-2 text-success'></i>Call now</button>
                <button className="btn fw-bold btnZoomContact" onClick={copyContact} title="Copy to clipboard"><i className='fa-solid fa-copy text-primary fw-bold'></i> Copy</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUsForm />
    </div>
  )
}

export default ContactUs