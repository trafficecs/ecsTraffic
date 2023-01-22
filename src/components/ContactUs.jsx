import React from 'react'
import axios from 'axios'

const ContactUs = () => {
  const url = "https://backend-ruby-zeta.vercel.app/api/sending_individual_mail"
  const sendingMail = () => {
    axios.post(url,{
      "email" : "rajeshvarma0322@gmail.com",
      "subject" : "Here completed",
      "message" : "Finally completed"
    }).then( response => {
      console.log(response)
      console.log("Complte")
    }).catch(error => {
      console.log(error)
    })
  }
  return (
    <div id='ContactUs'>
      <div class="modal-header text-white">
        <h1>Contact Us</h1>
        <button class="close" data-bs-dismiss="modal">
          <i class="fa fa-times-circle"></i>
        </button>
      </div>
      <div class="modal-body">
        <ul>
          <li><i className="fa-solid fa-phone me-1"></i> +91 9346680401</li>
          <li><i class="fa-solid fa-envelope me-1"></i> info@ecstrafficservice.com</li>
          <li><i className="fa-solid fa-location-dot me-1"></i> Gorantla, Andhra Pradesh, India,  515231.</li>
        </ul>
      </div>
      <button className="btn" onClick={() => sendingMail()}>Click Me</button>
    </div>
  )
}

export default ContactUs