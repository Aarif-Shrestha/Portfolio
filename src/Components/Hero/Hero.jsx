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
            <a style={{ textDecoration: 'none', color: 'white' }} href="https://drive.google.com/file/d/1qCSgH97FwOzkOf6DpmP44zYZg4Cqegdq/view?usp=sharing" offset={50} target='_blank'><div className="resume">Resume</div></a>
            <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.linkedin.com/in/aarif-shrestha/" offset={50} target='_blank'><div className="linkedin">LinkedIn</div></a>

        </div>
      </div>
    </div>
  )
}

export default Hero