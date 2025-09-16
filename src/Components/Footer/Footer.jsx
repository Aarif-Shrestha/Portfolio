import React from "react";
import "./Footer.css";
import mail_icon from '../../assets/mail_icon.svg';
import github_icon from '../../assets/github.svg';
import linkedin_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="mailto:aarifshrestha@gmail.com" className="footer-link" aria-label="Email">
          <img src={mail_icon} alt="Email" className="footer-icon" />
          <span className="footer-link-text">aarifshrestha@gmail.com</span>
        </a>
        <a href="https://github.com/Aarif-Shrestha" className="footer-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={github_icon} alt="GitHub" className="footer-icon" />
          <span className="footer-link-text">GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/aarif-shrestha/" className="footer-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={linkedin_icon} alt="LinkedIn" className="footer-icon" />
          <span className="footer-link-text">LinkedIn</span>
        </a>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Aarif Shrestha. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
