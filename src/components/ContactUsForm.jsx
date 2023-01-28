import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const ContactUsForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [comment, setComment] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [formSubmissionStatus, setFormSubmissionStatus] = useState(false)
  const [isPending, setIsPending] = useState(false)

  const url = "https://backend-ruby-zeta.vercel.app/api/sending_individual_mail"

  const sendingMail = (e) => {
    e.preventDefault()
    setIsPending(true)
    axios.post(url, {
      "email": 'trafficecs@gmail.com',
      "subject": subject,
      "message": `Hi, Iam " ${firstName} ${lastName} " and my email is " ${email} " and my phone number is " ${phoneNumber} ". My comment is " ${comment} " `
    }).then(response => {
      setFirstName("")
      setLastName("")
      setEmail("")
      setSubject("")
      setComment("")
      setPhoneNumber("")
      setFormSubmissionStatus(true)
      setIsPending(false)
    }).catch(error => {
      console.log(error)
      setFormSubmissionStatus(false)
      alert("Please try again later.")
    })
  }

  return (
    <>
      <div id='ContactUsForm'>
        <div className="contactFormText container">
          <h1>Have some Questions ?</h1>
          <h5>Please fillout the quick form and we will be in touch morethan a lightning speed.</h5>
        </div>
        <div className="row mx-5 my-5 ">
          <div className="col-12 col-md-4 order-2 order-md-1 d-flex flex-column justify-content-center align-items-center contactAddressContent">
            <div className='iconMail'>
              <i className="fa-solid fa-envelope-open-text text-center"></i>
            </div>
            <div className="contactAddress">
              <h1>We're here</h1>
              <p>Our door is always open for you.</p>
              <div>
                <h3>Our Address</h3>
                <p>Gorantla, Anantapur</p>
                <p>Andhra Pradesh</p>
                <p>India</p>
                <p>515231.</p>
                <div>
                  <a href='https://www.instagram.com/ecstraffic' target={'_blank'}>
                    <i className="fa fa-instagram fs-3 fw-bold"></i>
                  </a>
                  <a href='https://www.facebook.com/profile.php?id=100089704023015' target={'_blank'}>
                    <i className="fa fa-facebook fs-3 mx-3 fw-bold"></i>
                  </a>
                  <a href='https://twitter.com/traffic_ecs' target={'_blank'}>
                    <i className="fa fa-twitter fs-3 me-3 fw-bold"></i>
                  </a>
                  <a href='https://www.linkedin.com/in/ecs-traffic-2a5412262' target={'_blank'}>
                    <i className="fa fa-linkedin fs-3  fw-bold"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 order-1 order-md-2">
            <div className="card formCard shadow-lg contactForm">
              <div className="card-header text-center">
                <h1 className='display-4 fw-bold'>Contact us</h1>
              </div>
              <div className="card-body">
                <form onSubmit={sendingMail}>
                  <div className="row">
                    <div className='col-lg-6 mb-3'>
                      <label htmlFor="firstName">First name</label>
                      <input type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        id='firstName'
                        className='form-control'
                        required
                      />
                    </div>
                    <div className='col-lg-6 mb-3'>
                      <label htmlFor="lastName">Last name</label>
                      <input type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        id='lastName'
                        className='form-control' />
                    </div>
                    <div className='col-lg-6 mb-3'>
                      <label htmlFor="email">Email</label>
                      <input type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id='email'
                        className='form-control in-valid'
                        required
                      />
                    </div>
                    <div className='col-lg-6 mb-3'>
                      <label htmlFor="phoneNumber">Phone Number</label>
                      <input type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        id='phoneNumber'
                        className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject">Subject</label>
                      <input type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        id='subject'
                        className='form-control' />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="comment">Comment</label>
                      <textarea name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        id="comment"
                        rows="4"
                        className='form-control'></textarea>
                    </div>

                    {/* {checkStatus ?
                      formSubmissionStatus ?
                        <div className='mb-3 text-success'>Sent Successfully.</div>
                        :
                        <div className='mb-3 text-danger'>Please try again later.</div>
                      :
                      ""
                    } */}
                  </div>
                  <div className='text-center'>
                  
                    {!isPending && !formSubmissionStatus && <input type="submit" className="btnSubmit fw-bold" />}
                    {isPending && <button disabled className="btn" style={{ backgroundColor: 'deeppink' }}><span className="spinner-border spinner-border-sm text-white"></span> <span className="text-white">Submitting...</span></button>}
                    {formSubmissionStatus && <p className='text-center fw-bold fs-3 text-black'>Submitted <i className="fa-solid fa-circle-check text-success fs-2"></i></p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUsForm