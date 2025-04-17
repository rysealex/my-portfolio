import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// project details
const projects = [
  {
    title: 'Fitness Tracker',
    image: 'fitness-tracker-small.png',
    description: 'Web app fitness tracker.',
    tech: ['React', 'Flask', 'Docker'],
    link: 'https://github.com/rysealex/fitness-tracker',
  },
  {
    title: 'Guitar Store',
    image: 'guitar-store.png',
    description: 'Web app guitar store.',
    tech: ['JavaScript', 'PHP', 'SQL'],
    link: 'https://github.com/rysealex/guitar-store',
  },
];

function Projects() {

  // determines which project is selected
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className='projects-container'>
      <div>
        <h2>Projects</h2>
        <p>
          Here you can view some of the projects I have built and developed.
          <br/>
          <br/>
          I always strive to tackle new projects in my free time to expand my knowledge and experiences!
        </p>
      </div>
      <div className='projects-showcase'>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className='project-card'
              style={{ backgroundImage: `url(${project.image})` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className='overlay'>
                <h3>{project.title}</h3>
              </div>
            </div>  
          );
        })}
      </div>
      {selectedProject && (
        <div className='modal'>
          <div className='modal-container'> 
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <h3>Tech Stack</h3>
            <ul>
              {selectedProject.tech.map((item, i) => (
                <li key={i}><b>{item}</b></li>
              ))}
            </ul> 
            <a href={selectedProject.link} target='_blank'>
              View on GitHub
            </a>
            <span className='close' onClick={() => setSelectedProject(null)}>X</span>
          </div>
        </div>
      )}
      <div className='visit-github'>
        <div>
          <h3>To view all of my projects</h3>
        </div>
        <div className='github-button-container'>
          <a href='https://github.com/rysealex' className='github-button'>
            <b>Visit My GitHub</b> <FontAwesomeIcon icon={faGithub} size="lg"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;