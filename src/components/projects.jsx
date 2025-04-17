import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Projects() {
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
        <div>
          <img></img>
          <h3>Fitness Tracker</h3>
          <p>Web app fitness tracker.</p>
          <div>
            <span>React</span>
            <span>Flask</span>
            <span>Docker</span>
          </div>
          <div>
            <a>View on my GitHub</a>
          </div>
        </div>
      </div>
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