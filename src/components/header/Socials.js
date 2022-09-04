import React from 'react'
import {BsLinkedin,BsGithub,BsInstagram} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abhiyan-upreti-9749a4202/" target='_blank'> <BsLinkedin/></a>
        <a href="https://github.com/aviyan171" target='_blank'> <BsGithub/></a>
        <a href="https://www.instagram.com/abhi_yan11/" target='_blank'> <BsInstagram/></a>

    </div>
  )
}

export default Socials