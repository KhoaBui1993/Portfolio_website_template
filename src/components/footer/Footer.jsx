import React from 'react'
import './Footer.css'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'> KHOA BUI</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#service'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://facebook.com'> <FaFacebook/></a>
        <a href='https://instagram.com'> <FaInstagram/></a>
        <a href='https://twitter.com'> <FaTwitter/></a>
      </div>

      <div className='footer__copyright'>
        <small> &copy; Khoa Bui Portfolio Website. </small>

      </div>
    </footer>
  )
}

export default Footer