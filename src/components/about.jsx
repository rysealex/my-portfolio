import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSubscript, faCircleNodes } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className='about-container'>
      <div className='cwu-container'>
        <a href='https://www.cwu.edu/' className='cwu-logo' target="_blank" rel="noopener noreferrer">
          <img src='cwu-logo.png' alt='cwu-logo'></img>
        </a>
      </div>
      <div className='intro-container'>
        <h2>Hi, I'm Alex Ryse!</h2>
        <p>
          I'm an undergraduate student at Central Washington University, pursuing a Bachelor's degree in Computer Science. 
          My journey into coding began with a fascination for how technology can be built from the ground up to solve real-world problems—and I’ve been hooked ever since.
          What started as curiosity quickly turned into a passion for both creative development and logical problem-solving.
        </p>
        <p>
          Currently, I work as a Mathematics Tutor and Teacher Assistant at my university, where I support students in understanding core concepts and building confidence in their abilities.
          These experiences have deepened my appreciation for both collaboration and communication within technical fields.
        </p>
        <p>
          After graduation, I plan to pursue a Master's degree in Computer Science to further specialize my skills and contribute to innovative projects in the tech industry.
          I'm driven by a desire to continuously grow, learn, and create meaningful technologies that make a difference.
        </p>
      </div>
      <div className='exp-container'>
        <h3>My Experience</h3>
        <ul>
          <li className='exp-item'>
            <div className='icon-text-container'>
              <FontAwesomeIcon icon={faSubscript} className='exp-icon'/>
              <p><b>Mathematics Tutor, Central Washington University</b></p>
            </div>    
            <p>
            Tutored university students and peers in multiple advanced mathematics courses.
            Enhanced students’ conceptual understanding and challenged students to find solutions on their own.
            Helped me develop strong analytical, problem-solving, and communication skills.
            </p>
          </li>
          <li className='exp-item'>
            <div className='icon-text-container'>
              <FontAwesomeIcon icon={faCircleNodes} className='exp-icon'/>
              <p><b>Teacher Assistant (Adv Data Str & File Proc), Central Washington University</b></p>
            </div>
            <p> 
              Mentored students in applying advanced data structure concepts and file processing techniques under the
              supervision of the course instructor. Graded assignments, diagnosed errors in student code, and provided actionable feedback to help debug
              and improve code quality.
            </p>
          </li>
        </ul>
      </div>
      <div className='socials' id='about-socials'>
        <h3>Connect with me!</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/alex-ryse/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://github.com/rysealex" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;