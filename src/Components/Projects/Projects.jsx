
import React from "react";
import "./Projects.css";
import theme_pattern from '../../assets/theme_pattern.svg';
import project_1 from '../../assets/project_1.svg';
import project_2 from '../../assets/project_2.svg';
import project_3 from '../../assets/project_3.svg';
import project_4 from '../../assets/project_4.svg';
import project_5 from '../../assets/project_5.svg';
import project_6 from '../../assets/project_6.svg';

const projects = [
  {
    name: "Derma Vision",
    description: "A skin analysis platform leveraging AI for accurate dermatological insights.",
    github: "https://github.com/Aarif-Shrestha/Derma-Vision",
    demo: "#",
  image: project_1,
  },
  {
    name: "Text Editor",
    description: "A modern, minimal text editor for distraction-free writing and coding.",
    github: "https://github.com/Aarif-Shrestha/Simple-Text-Editor",
    demo: "#",
  image: project_2,

  },
  {
    name: "Spark Community News",
    description:
      "An intelligent AI-powered news platform that brings real-time AI developments to your community with interactive surveys and comprehensive analytics.",
    github: "https://github.com/Aarif-Shrestha/Youth-Hackathon-2025",
    demo: "#",
  image: project_3,

  },
  {
    name: "Mental Health Chatbot",
    description: "A supportive chatbot designed to promote mental well-being and provide helpful resources.",
    github: "https://github.com/Aarif-Shrestha/Mental_Health_bot",
    demo: "#",
  image: project_4,

  },
  {
    name: "EchoNote",
    description:
      "Converts speech to text and uses a chatbot to summarize meeting audio and discussions for easy review.",
    github: "https://github.com/Aarif-Shrestha/EchoNote",
    demo: "#",
  image: project_5,

  },
  {
    name: "Automation Platform",
    description: "A robust platform to automate repetitive tasks and workflows, boosting productivity.",
    github: "https://github.com/Aarif-Shrestha/Team_Incognito_Hack4Nepal",
    demo: "#",
  image: project_6,

  },
];

const Projects = () => {
  return (
    <section id='projects' className="projects-section">
      <div className="projects-title">
        <h1>Projects</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <p className="projects-description">
        Welcome to my portfolio! Here you'll find a selection of my favorite projects, each reflecting my passion for technology, AI, and user-centric design. Explore the code and see how I bring ideas to life.
      </p>
      <div className="projects-list">
        {projects.map((project, idx) => (
          <div className="project-card" key={idx}>
            <img src={project.image} alt={project.name} className="project-image-vertical" />
            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-btn-group">
                <a
                  href={project.github}
                  target="_blank"
                  className="project-github-btn"
                >
                  &#128187; Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
