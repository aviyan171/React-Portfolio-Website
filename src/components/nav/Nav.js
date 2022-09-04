import React, { useState } from 'react'
import './nav.css'
import {FcHome,FcAbout} from 'react-icons/fc'
import {AiFillAccountBook,AiFillCustomerService,AiFillContacts} from 'react-icons/ai'

const Nav = () => {
  const [active,setActive]=useState('#')
  return (

   <nav>
    <a href="#" onClick={()=>setActive('#')} className={active==='#'?'active':''}> <FcHome/></a>
    <a href="#about" onClick={()=>setActive('#about')}  className={active==='#about'?'active':''}> <FcAbout/></a>
    <a href="#experience" onClick={()=>setActive('#experience')} className={active==='#experience'?'active':''} > <AiFillAccountBook/></a>
    <a href="#services" onClick={()=>setActive('#services')} className={active==='#services'?'active':''}> <AiFillCustomerService/></a>
    <a href="#contact" onClick={()=>setActive('#contact')} className={active==='#contact'?'active':''}> <AiFillContacts/></a>
   
   </nav>
  )
}

export default Nav