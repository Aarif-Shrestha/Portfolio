import React from 'react'
import './Skill.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const Skill = () => {
  return (
    <div>
      <div id='skill' className="skills">
        <div className="skill-title">
            <h1>My Skills</h1>
            <img src={theme_pattern}alt="" />
        </div>
        <div className="skill-container">
            {Services_Data.map((service,index) => {
                return <div key = {index}className="skill-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className="skill-readmore">
                        <p>Read More</p>
                        <img src={arrow_icon} alt="" />
                    </div>
                </div>
            })}

        </div>
      </div>
    </div>
  )
}

export default Skill
