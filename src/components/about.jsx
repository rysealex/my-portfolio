import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

function About() {
  return (
    <div className='about-container'>
      <div className='cwu-container'>
        <a href='https://www.cwu.edu/' className='cwu-logo'>
          <img src='cwu-logo.png' alt='cwu-logo'></img>
        </a>
      </div>
      <div className='intro-container'>
        <h2>Hi, I'm Alex Ryse!</h2>
        <p>
          I am currently an undergraduate student at Central Washington University, pursuing a Bachelor's Degree in Computer Science.
          My passion for computer science drives me to continuosly explore and deepend my knowledge in this dynamic field.
          I am very eager to learn, grow, and apply my skills to solve real-world challenges.
          Currently, I am a Mathematics Tutor and Teacher Assistant at my University, where I help support students.
          After graduation, I plan to pursue a Master's Degree in Computer Science to further specialize my skills and enhance my ability to contribute to innovative projects in the tech industry.
        </p>
      </div>
      <div className='exp-container'>
        <h3>My Experiences</h3>
        <ul>
          <li>Mathematics Tutor</li>
          <li>Teacher Assistant</li>
        </ul>
      </div>
      <div className='socials'>
        <h3>My Socials</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/alex-ryse/">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://github.com/rysealex">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;