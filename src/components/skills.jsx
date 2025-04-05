import React from 'react';
import { faJava, faPython, faJsSquare, faReact, faUbuntu, faPhp, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills() {
  return (
    <div className='skills-container'>
      <div>
        <h2>Skills</h2>
        <p>
          Below are some of my technical skills, including programming langauges, software, and more.
          <br/>
          I am always looking to improve and learn new skills as I grow!
        </p>
      </div>
      {/* Skill 1 */}
      <div className='row' style={{ marginBottom: '48px' }}>
        <div className="col-lg-4 col-md-6 mb-5">
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary">
            <FontAwesomeIcon icon={faJava} className="fa-4x" />
          </span>
          <h3><b>Java</b></h3>
          <p className="text-faded mb-0">
            I have over 3 years of experience in Java. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary">
            <FontAwesomeIcon icon={faPython} className="fa-4x" />
          </span>
          <h3><b>Python</b></h3>
          <p className="text-faded mb-0">
            I have over 2 years of experience in Python.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary">
            <FontAwesomeIcon icon={faJsSquare} className="fa-4x" />
          </span>
          <h3><b>JavaScript, HTML, CSS</b></h3>
          <p className="text-faded mb-0">
            I have over 2 years of experience in JavaScript, HTML, and CSS.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary">
            <FontAwesomeIcon icon={faReact} className="fa-4x" />
          </span>
          <h3><b>React.js</b></h3>
          <p className="text-faded mb-0">
            I have over 2 years of experience in JavaScript React.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary">
            <FontAwesomeIcon icon={faUbuntu} className="fa-4x" />
          </span>
          <h3><b>Linux (Ubuntu)</b></h3>
          <p className="text-faded mb-0">
            I have 1 year of experience using the Linux Ubuntu distribution.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary">
            <i className='mfizz-cplusplus'></i>
          </span>
          <h3><b>C/C++</b></h3>
          <p className="text-faded mb-0">
            I have 1 year of experience in C/C++.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary">
            <FontAwesomeIcon icon={faDatabase} className="fa-4x" />
          </span>
          <h3><b>SQL</b></h3>
          <p className="text-faded mb-0">
            I have 1 year of experience in SQL.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary">
            <FontAwesomeIcon icon={faPhp} className="fa-4x" />
          </span>
          <h3><b>PHP</b></h3>
          <p className="text-faded mb-0">
            I have 1 year of experience in PHP.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary">
            <FontAwesomeIcon icon={faDocker} className="fa-4x" />
          </span>
          <h3><b>Docker</b></h3>
          <p className="text-faded mb-0">
            I have 1 year of experience using Docker for containerization.
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. 
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. 
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;