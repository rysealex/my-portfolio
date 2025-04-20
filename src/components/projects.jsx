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
        Implemented user authentication and features to allow users to update and track personal fitness stats.
        Enhanced proficiency in Docker, React, Flask, APIs, and containerized web application architectures.
      </>
    ),
    tech: [
      { id: 0, label: 'React', value: 81.9 },
      { id: 2, label: 'CSS', value: 10.5},
      { id: 3, label: 'Flask', value: 6 },
      { id: 4, label: 'Docker', value: 1.6 }
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
        Built the back end using{' '} <b>PHP</b> and integrated{' '} <b>SQL </b>
        for managing product inventory and user data, utilizing phpMyAdmin for database management.
      </>
    ),
    tech: [
      { id: 0, label: 'PHP', value: 72.6 },
      { id: 1, label: 'JavaScript', value: 12.9 },
      { id: 2, label: 'CSS', value: 12.8 },
      { id: 3, label: 'SQL', value: 1.7 },
    ],
    link: 'https://github.com/rysealex/guitar-store',
  },
  {
    title: 'Financial Data Filtering App',
    image: 'fdfa.png',
    description: (
      <>
        This is a take-home project for the ValueGlance Full Stack Software Engineer Intern Position. 
        This app, built using{' '} <b>React</b> and {' '}<b>TailwindCSS</b>, 
        fetches annual income statements for AAPL (Apple) from an API endpoint. 
        It provides filtering and sorting options (by date, revenue, and net income), and displays the filtered data in a table. 
        This app is deployed using{' '} <a href='https://rysealex.github.io/financial-data-filtering-app/'><b>GitHub Pages</b></a>.
      </>
    ),
    tech: [
      { id: 0, label: 'React', value: 87.1 },
      { id: 1, label: 'HTML', value: 7.8 },
      { id: 2, label: 'TailwindCSS', value: 5.1 }
    ],
    link: 'https://github.com/rysealex/financial-data-filtering-app',
  },
  {
    title: 'Sets Game',
    image: 'sets-game.png',
    description: (
      <>
        Recreation of the classic card game 'Set'.
        Software used:{' '} <b>Qt Software</b>,{' '} <b>C++</b>,{' '} and <b>CMake</b>.
        Rules: The object of the game is to find sets of 3 cards

                Each card has 4 features: shape, color, number, and shading

                Shape: ovals, rectangles, or diamonds

                Color: red, purple, or green

                Number, one, two, or three

                Shading: solid, striped, or outlined

                A valid set consists of 3 cards where each of the cards' features are the same or different on each card

                The game continues until the deck is depleted or no more valid sets can be found
      </>
    ),
    tech: [
      { id: 0, label: 'C++', value: 92.7 },
      { id: 1, label: 'CMake', value: 7.3 },
    ],
    link: 'https://github.com/rysealex/sets-game',
  },
  {
    title: 'Chat App',
    image: 'chat-app.png',
    description: (
      <>
        Built a chat application using{' '} 
        <b>Android Studio</b>,{' '} <b>Java</b>, and {' '}<b>XML</b>.
        Implemented a real time database using{' '} <b>Firebase</b>.
      </>
    ),
    tech: [
      { id: 0, label: 'Java', value: 90 },
      { id: 1, label: 'Firebase', value: 10 }
    ],
    link: 'https://github.com/rysealex/Chat-App',
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