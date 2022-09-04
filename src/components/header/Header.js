import React from 'react'
import CTA from './CTA'
import './Header.css'
import me from '../../assets/mee.png'
import Socials from './Socials'

const Header = () => {
  return (
   <header>
      
    <div className="container header__container">
      <h5>Hello I'M</h5>
      <h1>Abhiyan Upreti</h1>
      <h5 className="text-light">Developer</h5>
      <CTA/>
      <Socials/>
      <div className="me">
      <img src={me} className='photo' alt="" />
      </div>
      <a href="#contact" className="scroll__down"> Scroll dowm</a>
    </div>
   </header>
  )
}

export default Header