import React from 'react'
import './Hero.css'
import profile_img from '../../assets/pp.png'

const Hero = () => {
  return (
    <div>
      <div id = 'hero' className="hero">
        <h2>Welcome to my Portfolio</h2>
        <img src={profile_img} alt="Profile" />
        <h1><span>I'm Aarif Shrestha</span>, an aspiring and passionate developer.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aperiam sapiente dolore error! Ex dolore sunt, doloribus eveniet et ea!</p>
        <div className='hero-action'>
            <div className="resume">Resume</div>
            <div className="linkedin">LinkedIn</div>

        </div>
      </div>
    </div>
  )
}

export default Hero