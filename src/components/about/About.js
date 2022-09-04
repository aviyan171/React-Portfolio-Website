import React from 'react'
import './about.css'
import Aboutme from '../../assets/Aboutme.jpg'
import {FiAward,FiUsers} from 'react-icons/fi'
import { AiFillProject } from 'react-icons/ai'
const About = () => {
  return (
<section id='about'>
    <h5>Get to know</h5>
    <h2>About me</h2>
    <div className="container about__container">
      <div className="about__me">
      <div className="about__me-image">
        <img src={Aboutme} alt="About me" />
      </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
          <FiAward className='about_icon'/>
          <h5>Experience</h5>
          <small>Worked as Intern</small>
          </article>
          <article className="about__card">
          <FiUsers className='about_icon'/>
          <h5>Clients</h5>
          <small>Not Now</small>
          </article>
          <article className="about__card">
          <AiFillProject className='about_icon'/>
          <h5>Projects</h5>
          <small> 10 + Projects</small>
          </article>
        </div>
        <p>
          Hi I am Abhiyan.  A aspiring Developer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis reprehenderit labore, neque illo cum non optio at veniam minus corrupti omnis aperiam dolorem eos exercitationem nemo, sit consequatur cupiditate! Praesentium.
        </p>
        <a href="#contact" className='btn btn-primary'> Lets Talk</a>
      </div>
    </div>
</section>
  )
}

export default About