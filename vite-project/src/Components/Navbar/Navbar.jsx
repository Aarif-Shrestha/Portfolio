import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Center nav links */}
      <ul className="nav-menu">
        <li className="nav-item">Home</li>
        <li className="nav-item">About Me</li>
        <li className="nav-item">Skills</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Contact</li>
      </ul>

      <div className="nav-buttons">
        Connect with me
      </div>
    </div>
  )
}

export default Navbar
