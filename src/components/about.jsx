import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSubscript, faCircleNodes } from '@fortawesome/free-solid-svg-icons';

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