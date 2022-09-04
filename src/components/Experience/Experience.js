import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have?</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
              <BsFillPatchCheckFill className='icons'/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
          </article>
          <article className='experience__details'>
              <BsFillPatchCheckFill className='icons'/>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
              <BsFillPatchCheckFill className='icons'/>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
              <BsFillPatchCheckFill className='icons'/>
              <h4>React-Native</h4>
              <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
              <BsFillPatchCheckFill className='icons'/>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
          </article>
        </div>
      </div>
      

      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
              <BsFillPatchCheckFill className='icons'/>
              <h4>Oracle MySQL</h4>
              <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
              <BsFillPatchCheckFill className='icons'/>
              <h4>Django</h4>
              <small className='text-light'>Intermediate</small>
          </article>
          <article className='experience__details'>
              <BsFillPatchCheckFill className='icons'/>
              <h4>Node</h4>
              <small className='text-light'>Intermediate</small>
          </article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience