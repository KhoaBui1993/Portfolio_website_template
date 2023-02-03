import React from 'react'
import './Porfolio.css'
import IMG1 from '../../UploadFile/porfolio1.png'

const data =[
  {
    id: 1,
    image: IMG1,
    title: 'Website Travel Review',
    github: 'https://github.com/KhoaBui1993/TravelWebsite',
    demo:'http://216.218.162.36/'
  }
]




const Porfolio = () => {
  return (
    <section id='porfolio'>
      <h5>My Recent Work</h5>
      <h2>Porfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title}></img>
              </div>
              <h3> {title} </h3>
              <div className='portfolio__item-cta'>
                <a href= {github} className='btn' target='_blank'> Github</a>
                <a href= {demo} className='btn btn-primary' target='_blank'> Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Porfolio