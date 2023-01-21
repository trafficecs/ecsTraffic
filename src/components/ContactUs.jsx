import React from 'react'

const ContactUs = () => {
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
    </div>
  )
}

export default ContactUs