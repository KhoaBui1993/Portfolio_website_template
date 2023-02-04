import React from 'react'
import './Experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Technical Skills</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Programing Language</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JAVA</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PYTHON</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>C++</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>C</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>SQL</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Scripting Language</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END FRONTENT */}
        <div className='experience__backend'>
          <h3>Tools and Frameworks</h3>
          <div className="experience__content">
          <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Git</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Github</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>IntelliJ IDEA</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PyCharm</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Linux</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Django</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Flask</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JIRA</h4>
              <small className='text-light' >Intermediate</small>
              </div>
            </article>
            
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience