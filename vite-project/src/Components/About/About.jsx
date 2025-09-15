import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/about_profile.svg';

const tools = [
  { name: 'Figma', desc: 'Design tool', icon: '🖌️' },
  { name: 'CSS', desc: 'User Interface', icon: '🎨' },
  { name: 'JavaScript', desc: 'Interaction', icon: '💻' },
  { name: 'NodeJS', desc: 'Web Server', icon: '🌐' },
  { name: 'ExpressJS', desc: 'Node Framework', icon: '🚀' },
  { name: 'MongoDB', desc: 'Database', icon: '🍃' },
  { name: 'React', desc: 'Framework', icon: '⚛️' },
  { name: 'TailwindCSS', desc: 'User Interface', icon: '🌊' },
];

const About = () => {
  return (
    <section className="about-container">

        <div className="about">
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-section">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> I'm Aarif, a web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise, I turn ideas into digital masterpieces that excel in both appearance and performance.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sunt corrupti libero sint suscipit at, voluptatibus dolor, excepturi facere ratione possimus velit rem corporis, quibusdam repellendus dolorem fugiat omnis provident numquam voluptates commodi iste. Reprehenderit dolor iusto odio rerum molestiae eligendi sapiente totam! Delectus, sed id. Quod deleniti ad in?</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias perferendis libero atque tempore blanditiis explicabo velit nostrum nulla illum sed non, fugiat voluptatibus repudiandae aliquid voluptas temporibus corporis eum omnis ut recusandae? Mollitia libero, perferendis alias ex, cupiditate sed, rem omnis laboriosam velit veritatis excepturi modi et eius. Quidem.</p>
                    </div>
                </div> 
            </div>
             <div className="about-achievements">
                    <div className="achievement">
                        <h1>10+</h1>
                        <p>YEARS OF EXPERIENCE</p>
                    </div>
                    <hr />
                    <div className="achievement">
                        <h1>15+</h1>
                        <p>PROJECTS COMPLETED</p>
                    </div>
                    <hr />
                    <div className="achievement">
                        <h1>10+</h1>
                        <p>CLIENTS SATISFIED</p>
                    </div>
                
                </div>
         
        </div>
         <div className="tools-section">
        <h2>Essential Tools I use</h2>
        <p className="tools-desc">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
        </p>
        <div className="tools-grid">
          {tools.map((tool) => (
            <div className="tool-card" key={tool.name}>
              <span className="tool-icon">{tool.icon}</span>
              <div>
                <span className="tool-name">{tool.name}</span>
                <span className="tool-desc">{tool.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
    );
};

export default About;