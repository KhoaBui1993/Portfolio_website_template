import React from 'react'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Porfolio from './components/portfolio/Porfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
export const App = () => {
  return (
    <>
        <Header />
        <Footer />
        <Nav />
        <About/>
        <Contact/>
        <Experience/>
        <Porfolio/>
        <Services/>
        <Testimonials/>
    </>
  )
}
export default App