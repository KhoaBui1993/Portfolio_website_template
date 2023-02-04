import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5> What I Did </h5>
      <h2> My Journey</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h4>Dec 2021 - May 2022</h4>
            <h3>Software Quality Assurance Intern</h3>
            <small>Netgear Inc., San Jose, CA</small>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conducted thorough regression testing on the UI platform.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Writing of effective smoke test scripts by using Python for automation testing after each release.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Carried out detailed post-release E2E testing during the software QA cycle.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Leveraged excellent writing skills to compose test plans and 60+ test cases for the application.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Eliminated Jira by validating the functionality to be implemented correctly before deployment.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsible for monitoring, documenting, and reporting the status of defects and test cases to team leads.</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service__head'>
            <h4>Jan 2021 - Dec 2021</h4>
            <h3>IT/Virtual Private Server</h3>
            <small>Interdata.VN, Vietnam</small>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Identified risks, opportunities, faults, and areas for development within the company's IT framework.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Led the administration and maintenance of server networks and server environments.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Met and exceeded customer requirements by providing expert advice and guidance on computer configurations</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensured the installation and testing of network equipment by configuring and defining parameters.</p>
            </li>
          </ul>
        </article>

        
        {/* END OF CONTENT CREATION */}


      </div>



    </section>
  )
}

export default Services