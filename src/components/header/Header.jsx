import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from  '../../UploadFile/Me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Khoa Bui</h1>
          <h5 className='text-light'>Software Developer</h5>
          <CTA/>
          <HeaderSocials/>

        <div className='me'>
          <img src={Me} alt='me'></img>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header