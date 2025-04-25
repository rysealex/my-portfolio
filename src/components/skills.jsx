import React from 'react';
import { faJava, faPython, faJsSquare, faReact, faUbuntu, faPhp, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills() {

  // get the project section component
  const projectSection = document.getElementById('projects');
  // handle scroll to projects section
  const handleScroll = () => {
    const offset = 80; // height above projects header
    const top = projectSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className='skills-container' id='skills'>
      <div>
        <h2>Skills</h2>
        <p>
          Below are some of the programming languages, frameworks, libraries, tools, and platforms I’ve worked with.
          <br/><br/>
          I’m passionate about creating, and I spend a lot of my free time working on personal and 
          projects that challenge me to grow as a developer.
          <br/><br/>
          I’m always eager to learn new technologies and expand my skillset as I continue to explore the world of software development!
        </p>
      </div>
      {/* Skill 1 */}
      <div className='row' style={{ marginBottom: '48px' }}>
        <div className="col-lg-4 col-md-6 mb-5" id='java'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-java'>
            <FontAwesomeIcon icon={faJava} className="fa-4x" />
          </span>
          <h3><b>Java</b></h3>
          <p className="text-faded mb-0">
          Java was the first programming language I learned, and I've been developing with it for over 3 years.
          I've built a variety of projects—including a real-time{' '} 
          <b className='skills-project-link' onClick={handleScroll}>Chat App</b>—which helped 
          me deepen my understanding of object-oriented programming and backend logic.
          Java laid the foundation for my development journey, and I continue to use it to explore new concepts and solve real-world problems.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='python'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-python'>
            <FontAwesomeIcon icon={faPython} className="fa-4x" />
          </span>
          <h3><b>Python</b></h3>
          <p className="text-faded mb-0">
          I use Python for both scripting and web development. Currently, I'm building a full-stack{' '}
          <b className='skills-project-link' onClick={handleScroll}>Fitness Tracker</b> {' '}
          web application using a Python Flask backend, where I’m implementing user authentication, workout tracking, 
          and dynamic data visualization.
          Working with Python has strengthened my skills in API design, database integration, and server-side logic.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='javascript'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-javascript'>
            <FontAwesomeIcon icon={faJsSquare} className="fa-4x" />
          </span>
          <h3><b>JavaScript, HTML, CSS</b></h3>
          <p className="text-faded mb-0">
          I have significant experience working with JavaScript, HTML, and CSS to build responsive, user-friendly web applications.
          These technologies have been essential in developing full-stack projects where I design intuitive front-end interfaces 
          and integrate them with backend services.
          I enjoy bringing ideas to life in the browser—translating designs into functional, accessible, and clean web experiences.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='react'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-react'>
            <FontAwesomeIcon icon={faReact} className="fa-4x" />
          </span>
          <h3><b>React</b></h3>
          <p className="text-faded mb-0">
          React is my most frequently used front-end framework for building modern, scalable web applications.
          My journey with React began after earning a LinkedIn Learning certificate, 
          which helped me quickly grasp core concepts like component structure, props, and state.
          Since then, I’ve used React extensively in projects like my{' '}
          <b className='skills-project-link' onClick={handleScroll}>Fitness Tracker</b> {' '} and {' '}
          <b className='skills-project-link' onClick={handleScroll}>Financial Data Filtering App</b>.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='c++'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-c++'>
            <img src='c.svg' alt='c-logo' id='c-logo' />
          </span>
          <h3><b>C/C++</b></h3>
          <p className="text-faded mb-0">
          I recently started learning C and C++, and quickly fell in love with the power and control these languages offer.
          Working with pointers and manual memory allocation was something I hadn’t experienced before.
          I'm currently working on{' '}
          <b className='skills-project-link' onClick={handleScroll}>Sets Game</b>{' '}
          , a card-matching game built in C++ with CMake for project management 
          and Qt for the graphical user interface.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='php'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-php'>
            <FontAwesomeIcon icon={faPhp} className="fa-4x" />
          </span>
          <h3><b>PHP</b></h3>
          <p className="text-faded mb-0">
          I have experience using PHP as a backend language in my full-stack{' '}
          <b className='skills-project-link' onClick={handleScroll}>Guitar Shop</b> {' '}
          web application.
          In this project, I used PHP to handle server-side logic, manage dynamic content, 
          and connect to a SQL database for data storage and retrieval.
          It gave me valuable hands-on experience working with server responses, form validation, 
          and database integration in a real-world scenario.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='sql'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-sql'>
          <img src='mysql.svg' alt='mysql-logo' id='mysql-logo' />
          </span>
          <h3><b>MySQL</b></h3>
          <p className="text-faded mb-0">
          I’ve used MySQL as the relational database in my full-stack{' '}
          <b className='skills-project-link' onClick={handleScroll}>Guitar Shop</b> {' '} web application—handling 
          tasks like querying, inserting, and updating data across tables.
          This experience helped me gain a strong foundation in relational databases and efficient data handling.
          I plan to continue using MySQL in upcoming full-stack projects to build more dynamic, data-driven applications.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='linux'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-linux'>
            <FontAwesomeIcon icon={faUbuntu} className="fa-4x" />
          </span>
          <h3><b>Linux (Ubuntu)</b></h3>
          <p className="text-faded mb-0">
          I first started using Ubuntu while learning C, and quickly grew to appreciate the control and flexibility the Linux environment offers.
          I enjoy working with the terminal for compiling code, managing files, and interacting with development tools.
          Using Linux has helped me better understand system-level operations and strengthened my overall workflow as a developer.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='docker'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-docker'>
            <FontAwesomeIcon icon={faDocker} className="fa-4x" />
          </span>
          <h3><b>Docker</b></h3>
          <p className="text-faded mb-0">
          Currently, I am utilizing Docker in my full-stack{' '}
          <b className='skills-project-link' onClick={handleScroll}>Fitness Tracker</b> {' '}
          web application,
          where I created separate Dockerfiles for the different services to streamline development and deployment.
          I’m planning to continue leveraging Docker and containerization in future projects 
          to improve consistency across environments and simplify the deployment process.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;