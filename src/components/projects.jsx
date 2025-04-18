import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

// project details
const projects = [
  {
    title: 'Fitness Tracker',
    image: 'fitness-tracker-small.png',
    description: 'Developed a fully functional fitness tracker web application with a React frontend and Python Flask ' +
                  'backend, leveraging Docker to create separate Dockerfiles for each service.\n' +
                  'Implemented user authentication and features to allow users to update and track personal fitness stats.\n' +
                  'Enhanced proficiency in Docker, React, Flask, APIs, and containerized web application architectures',
    tech: ['React', 'Flask', 'Docker'],
    link: 'https://github.com/rysealex/fitness-tracker',
  },
  {
    title: 'Guitar Store',
    image: 'guitar-store.png',
    description: 'Designed a responsive guitar store web application using JavaScript and jQuery, ' +
                  'following the ModelView-Controller (MVC) design pattern for maintainable and scalable code.\n' +
                  'Built the back end using PHP and integrated SQL for managing product inventory and user data, ' +  
                  'utilizing phpMyAdmin for database management.',
    tech: ['JavaScript', 'PHP', 'SQL'],
    link: 'https://github.com/rysealex/guitar-store',
  },
];

function Projects() {

  // determines which project is selected
  const [selectedProject, setSelectedProject] = useState(null);

  // disable the scroll when modal open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => (document.body.style.overflow = '');
  }, [selectedProject]);

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
                <h3></h3>
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
              {selectedProject.tech.map((item, i) => {
                // get the current name of tech stack
                const targetId = typeof item === 'string' ? item.toLowerCase() : null;
                console.log(targetId);
                return (
                  <li 
                    key={i}
                    onClick={() => {
                      setSelectedProject(null); // close the modal
                      setTimeout(() => {
                        const el = document.getElementById(targetId);
                        if (el) {
                          const yOffset = -100;
                          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }, 200); // small delay
                    }}
                  >
                    <b>{item}</b>
                  </li>
                );
              })}
            </ul> 
            <b>View on GitHub: </b>
            <a href={selectedProject.link} target='_blank' rel='noreferrer'>
              {selectedProject.link}
            </a>
            <span className='close' onClick={() => setSelectedProject(null)}><FontAwesomeIcon icon={faX} /></span>
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