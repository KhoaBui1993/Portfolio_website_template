/* eslint-disable jsx-a11y/img-redundant-alt */
import './About.css'
import React from 'react'
import ME from '../../UploadFile/Me-picture.jpg'
import { FaAward } from 'react-icons/fa'
import { FaUserGraduate } from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Image'></img>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small> Entry Level</small>
              </article>

              <article className='about__card'>
                <FaUserGraduate className='about__icon'/>
                <h5>Education</h5>
                <small> Bachelor of Science in Computer Science </small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small> 3+</small>
              </article>
            </div>
            <p>
                Recent graduate in computer science with progressive experience in developing and deploying high-impact software systems consistent with user requirements. Aspiring to leverage strong analytical, technical, and detail-orientation abilities to secure a challenging software developer/ engineer position in the IT field.
                Offering solid technical skills across a wide range of tools and software applications with a passion to provide full technical support and lead various IT projects. Skilled troubleshooter continually focused on resolving complex hardware and software issues.
                Able to convey complex technologies to a variety of skill levels.

            </p>

            <a href='#contact' className='btn btn-primary' > Let Talk</a>







        </div>
      </div>
    </section>
  )
}

export default About