import React from 'react'
import businessVedio from '../assets/Teja Business.mp4'

const Home = () => {
  return (
    <div id='home' className='container mt-2' >
      <div className="container videoCont ">
        <video muted autoPlay loop id="homeVideo">
          <source src={businessVedio} type="video/mp4" />
        </video>
        <div id="textBox">
          <div className='animate-charecter'>
            <h1 className='text-center companyNameTxt'>ECS</h1>
            <h1 className=''>TRAFFIC SERVICES</h1>
          </div>
        </div>
      </div>
      <div className='underVideoContent my-4'>
        <p>
          <b>ECS</b> is a traffic data survey  company. It is new to the market but we have a minimum 5 years experience team we have, our head quaters in Gorantla Anatapur dist Andhra Pradesh India. But we have the capacity to analyse any traffic data from around the globe. We work as a team with clients to find better solutions and client satisfaction.
        </p>
        <p>
          <b>ECS</b> Traffic Data Services offers worldwide traffic data collection and a detailed data analysis service for all aspects of the traffic.
          Our methods are demonstrated and perfected on roadways around the world and have been tweaked to suit the roads. Our efforts bring you detailed reports on the traffic situations in various cities across the country to help in building a futuristic & sustainable mobility infrastructure.
          <b> ECS</b> Traffic Survey provides industry-specific guidance in Traffic Data Analysis to help customers envision, design and align their strategies-creating an adaptive technology infrastructure that can streamline operations and support new and cost-effective sources of productivity and growth. We understand how to leverage powerful thinking inside an organization and integrate those innovative ideas with better processes and technologies to deliver superior top-line and bottom-line results.
        </p>

      </div>
    </div>
  )
}

export default Home