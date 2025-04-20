import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faJava, faPython, faJsSquare, faUbuntu, faPhp, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faX, faDatabase } from '@fortawesome/free-solid-svg-icons';
import TechPieChart from './techPieChart';

// project details
const projects = [
  {
    title: 'Fitness Tracker',
    image: 'fitness-tracker-small.png',
    description: (
      <>
        Developed a fully functional fitness tracker web application with a{' '}
        <b>React</b> frontend and{' '}
        <b>Python Flask</b> backend, leveraging{' '} <b>Docker</b> to create separate Dockerfiles for each service.
        <br />
        Implemented user authentication and features to allow users to update and track personal fitness stats.
        <br />
        Enhanced proficiency in Docker, React, Flask, APIs, and containerized web application architectures.
      </>
    ),
    tech: [
      { id: 0, label: 'React', value: 50 },
      { id: 1, label: 'Flask', value: 30 },
      { id: 2, label: 'Docker', value: 20 }
    ],
    link: 'https://github.com/rysealex/fitness-tracker',
  },
  {
    title: 'Guitar Store',
    image: 'guitar-store.png',
    description: (
      <>
        Designed a responsive guitar store web application using{' '}
        <b>JavaScript</b> and{' '} <b>jQuery</b>, 
        following the ModelView-Controller (MVC) design pattern for maintainable and scalable code.
        <br />
        Built the back end using{' '} <b>PHP</b> and integrated{' '} <b>SQL </b>
        for managing product inventory and user data, utilizing phpMyAdmin for database management.
      </>
    ),
    tech: [
      { id: 0, label: 'JavaScript', value: 50 },
      { id: 1, label: 'PHP', value: 30 },
      { id: 2, label: 'SQL', value: 20 }
    ],
    link: 'https://github.com/rysealex/guitar-store',
  },
];

// tech icons
const techIcons = {
  Java: <FontAwesomeIcon icon={faJava} />,
  Python: <FontAwesomeIcon icon={faPython} />,
  JavaScript: <FontAwesomeIcon icon={faJsSquare} />,
  React: <FontAwesomeIcon icon={faReact} />,
  Linux: <FontAwesomeIcon icon={faUbuntu} />,
  C: <FontAwesomeIcon icon={''} />,
  SQL: <FontAwesomeIcon icon={faDatabase} />,
  PHP: <FontAwesomeIcon icon={faPhp} />,
  Docker: <FontAwesomeIcon icon={faDocker} />,
};

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
            <div className='modal-content'>
              <div className='modal-description'>
                <p>{selectedProject.description}</p>
              </div>
              <div className='modal-tech'>
                <h3>Tech Stack</h3>
                <TechPieChart
                  data={selectedProject.tech}
                  onSliceClick={(label) => {
                    console.log(`Skill clicked: ${label}`);
                    // get the current name of tech stack
                    const targetId = label.toLowerCase();
                    // close the modal 
                    setSelectedProject(null);
                    // scroll to skill section
                    setTimeout(() => {
                      const el = document.getElementById(targetId);
                      if (el) {
                        const yOffset = -200;
                        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                        window.scrollTo({ top: y, behavior: 'smooth' });
                        // get the icon element id
                        const iconEl = document.getElementById(`icon-${targetId}`);
                        if (iconEl) {
                          setTimeout(() => {
                            // add skill pop
                            iconEl.classList.add('skill-pop');
                            // remove after 0.7 sec
                            setTimeout(() => {
                              iconEl.classList.remove('skill-pop');
                            }, 700);
                          }, 600);
                        }
                      }
                    }, 200); // small delay
                  }}
                />
                {/*<ul className='tech-legend'>
                  {selectedProject.tech.map((item, i) => {
                    const techName = item.label;
                    
                    // get the matching icon
                    const icon = techIcons[item];
                    console.log(targetId);
                    return (
                      <li 
                        key={i}
                        onClick={() => {
                          setSelectedProject(null); // close the modal
                          
                        }}
                      >
                        {icon && <span className='tech-icon'>{icon}</span>} <b>{techName}</b> - {item.value}%
                      </li>
                    );
                  })}
                </ul> */}
              </div>
            </div>
            <div className='project-link'>
              <b>View on GitHub: </b>
              <a href={selectedProject.link} target='_blank' rel='noreferrer'>
                {selectedProject.link}
              </a>
            </div>
            <span className='close' onClick={() => setSelectedProject(null)}>
              <FontAwesomeIcon icon={faX} />
            </span>
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