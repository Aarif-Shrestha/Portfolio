import React from 'react'
import './Navbar.css'
import Anchorlink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>

      <ul className="nav-menu">
        <li className="nav-item"><Anchorlink className='anchor-link' offset={50} href="#hero">Home</Anchorlink></li>
        <li className="nav-item"><Anchorlink className='anchor-link' offset={50} href="#about">About Me</Anchorlink></li>
        <li className="nav-item"><Anchorlink className='anchor-link' offset={50} href="#skills">Skills</Anchorlink></li>
        <li className="nav-item"><Anchorlink className='anchor-link' offset={50} href="#projects">Projects</Anchorlink></li>
        <li className="nav-item"><Anchorlink className='anchor-link' offset={50} href="#contact">Contact</Anchorlink></li>
      </ul>

      <div className="nav-buttons">
       <Anchorlink className='anchor-link' offset={50} href="#contact">Connect with me</Anchorlink>
      </div>
    </div>
  )
}

export default Navbar
