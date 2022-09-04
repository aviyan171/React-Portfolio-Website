
import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn btn-primary' href={CV} download> Downlaod CV</a>
        <a href="#contact" className='btn'> Let's Talk</a>

    </div>
  )
}

export default CTA