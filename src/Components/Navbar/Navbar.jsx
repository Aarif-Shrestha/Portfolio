import React, { useState, useEffect } from 'react'
import './Navbar.css'
import Anchorlink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
      ></div>

      <div className='navbar'>
        {/* Hamburger Menu */}
        <div 
          className="navbar-hamburger" 
          onClick={toggleMobileMenu}
        >
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
          <span className={isMobileMenuOpen ? 'active' : ''}></span>
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Anchorlink className='anchor-link' offset={50} href="#hero" onClick={closeMobileMenu}>
              Home
            </Anchorlink>
          </li>
          <li className="nav-item">
            <Anchorlink className='anchor-link' offset={50} href="#about" onClick={closeMobileMenu}>
              About Me
            </Anchorlink>
          </li>
          <li className="nav-item">
            <Anchorlink className='anchor-link' offset={50} href="#skills" onClick={closeMobileMenu}>
              Skills
            </Anchorlink>
          </li>
          <li className="nav-item">
            <Anchorlink className='anchor-link' offset={50} href="#projects" onClick={closeMobileMenu}>
              Projects
            </Anchorlink>
          </li>
          <li className="nav-item">
            <Anchorlink className='anchor-link' offset={50} href="#contact" onClick={closeMobileMenu}>
              Contact
            </Anchorlink>
          </li>
        </ul>

        <div className="nav-buttons">
         <Anchorlink className='anchor-link' offset={50} href="#contact">Connect with me</Anchorlink>
        </div>
      </div>
    </>
  )
}

export default Navbar
