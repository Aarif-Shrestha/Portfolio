import React from 'react'
import "./Contact.css"
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import phone_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {
  return (
      <div id = 'contact' className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>I'm currently available for freelance work and collaboration. If you have a project in mind or just want to chat, feel free to reach out!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /> <a href="mailto:aarifshrestha@gmail.com" className="contact-link">aarifshrestha@gmail.com</a>
                    </div>
                    <div className="contact-detail">
                        <img src={phone_icon} alt="" /> <a href="tel:+447496123456" className="contact-link">+44 7496 123456</a>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /> <p>Kalanki,Kathmandu</p>

                    </div>
                </div>
            </div>
            <form className="contact-right">
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder="Enter your name"  name="name"/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name="email"/>
                <label htmlFor="">Your Message</label>
                <textarea name="message" rows = '8' placeholder='Enter your message'></textarea>
                <button className='contact-submit' type="submit">Send Message</button>
            </form>
        </div>
      </div>

  )
}

export default Contact
