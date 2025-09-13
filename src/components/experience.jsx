import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSubscript, faCircleNodes } from '@fortawesome/free-solid-svg-icons';
import ZigZag from './zigzag';

function Experience() {
  return (
    <div className='experience-container'>
			<h2>Experience</h2>
      {/* <div className='exp-container'>
        <ul>
          <li className='exp-item'>
            <div className='icon-text-container'>
              <FontAwesomeIcon icon={faSubscript} className='exp-icon'/>
              <p><b>Software Engineer Intern, Nomms</b></p>
            </div>    
            <p>
							Tutored university students and peers in multiple advanced mathematics courses.
							Enhanced students’ conceptual understanding and challenged students to find solutions on their own.
							Helped me develop strong analytical, problem-solving, and communication skills.
            </p>
          </li>
          <li className='exp-item'>
            <div className='icon-text-container'>
              <FontAwesomeIcon icon={faSubscript} className='exp-icon'/>
              <p><b>International Drone Competition, Tokyo Denki University</b></p>
            </div>    
            <p>
							Tutored university students and peers in multiple advanced mathematics courses.
							Enhanced students’ conceptual understanding and challenged students to find solutions on their own.
							Helped me develop strong analytical, problem-solving, and communication skills.
            </p>
          </li>
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
      </div> */}
      <ZigZag />
    </div>
  );
}

export default Experience;