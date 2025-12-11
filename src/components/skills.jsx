import React from 'react';
import { faJava, faPython, faJsSquare, faReact, faLinux, faPhp, faDocker, faAws, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills() {

  // get the project section component
  const projectSection = document.getElementById('projects');
  // handle scroll to projects section
  const handleScroll = () => {
    const offset = 60; // height above projects header
    const top = projectSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  // get the exeperience section component
  const experienceSection = document.getElementById('experience');
  // handle scroll to experience section
  const handleScrollToExperience = () => {
    const offset = 60; // height above experience header
    const top = experienceSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className='skills-container' id='skills'>
      <div>
        <h2>Skills</h2>
        <p>
          Below are some of the programming languages, frameworks, libraries, tools, and platforms I’ve worked with.
          <br/><br/>
          I’m passionate about creating, and I spend a lot of my free time working on personal 
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
          Java was the first programming language I learned, and I've been developing with it for over 4 years.
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
          I use Python for both scripting and web development. I have built several full-stack applications, including a {' '}
          <b className='skills-project-link' onClick={handleScroll}>Fitness Tracker</b> {' '} and the {' '}
          <b className='skills-project-link' onClick={handleScroll}>J.A.K.E. Weather</b> web app, {' '}
          both powered by a Python Flask backend.
          This builds upon my experience developing a{' '}
          <b className='skills-project-link' onClick={handleScroll}>Word Cloud Generator</b>, 
          which involved API integration, data visualization, and efficient data handling.
          Additionally, I have experience using Python scripts for autonomous drone navigation and collision detection
          during an <b className='skills-project-link' onClick={handleScrollToExperience}>International Drone Competition</b> in Tokyo, Japan.
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
          Since then, I’ve used React extensively in projects like my {' '}
          <b className='skills-project-link' onClick={handleScroll}>J.A.K.E. Weather</b>, {' '}
          <b className='skills-project-link' onClick={handleScroll}>Fitness Tracker</b>, {' '}
          <b className='skills-project-link' onClick={handleScroll}>Wilcat Credit Union</b> {' '} and {' '}
          <b className='skills-project-link' onClick={handleScroll}>Financial Data Filtering App</b>.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='nodejs'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-nodejs'>
            <FontAwesomeIcon icon={faNodeJs} className="fa-4x" />
          </span>
          <h3><b>Node.js, Express.js</b></h3>
          <p className="text-faded mb-0">
          My expertise in Node.js and Express.js was a critical component of my work on the {' '} 
          <b className='skills-project-link' onClick={handleScroll}>Wildcat Credit Union</b> banking web application. 
          I led a three-developer team through the entire SDLC, where I personally engineered the complete backend.
          This involved developing a robust Node.js/Express.js backend that would serve a RESTful API to manage data.
          I'm eager to continue leveraging these technologies to build scalable and efficient backends for future projects.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='sql'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-sql'>
            {/* <img src='mysql.svg' alt='mysql-logo' id='mysql-logo' /> */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt='MySQL-logo' style={{ width: '5rem', height: '5rem', filter: 'brightness(0%)' }} />
          </span>
          <h3><b>MySQL</b></h3>
          <p className="text-faded mb-0">
          I’ve used MySQL as the relational database in my full-stack{' '}
          <b className='skills-project-link' onClick={handleScroll}>J.A.K.E. Weather</b>, {' '}
          <b className='skills-project-link' onClick={handleScroll}>Fitness Tracker</b>, {' '}
          <b className='skills-project-link' onClick={handleScroll}>Wildcat Credit Union</b>, {' '}
          <b className='skills-project-link' onClick={handleScroll}>Guitar Shop</b> {' '}
          web applications—handling tasks like querying, inserting, and updating data across tables.
          These experiences helped me gain a strong foundation in relational databases and efficient data handling.
          I plan to continue using MySQL in upcoming full-stack projects to build more dynamic, data-driven applications.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='c++'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-c++'>
            <img src='c.svg' alt='c-logo' id='c-logo' />
          </span>
          <h3><b>C/C++</b></h3>
          <p className="text-faded mb-0">
          I recently started learning C and C++, and quickly fell in love with the power and control these languages offer.
          {/* Working with pointers and manual memory allocation was something I hadn’t experienced before. */}
          I'm currently applying C in my <b className='skills-project-link' onClick={handleScrollToExperience}>Undergraduate Research</b> position, 
          specifically by developing tools and scripts to support our Red/Blue Team lab manuals.
          Additionally, I am working on{' '}
          <b className='skills-project-link' onClick={handleScroll}>Sets Game</b>{' '}
          , a card-matching game built in C++ with CMake for project management 
          and Qt for the graphical user interface.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='csharp'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-csharp'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-line.svg" alt='C#-logo' style={{ width: '4.5rem', height: '4.5rem', filter: 'brightness(0%)' }} />
          </span>
          <h3><b>C#</b></h3>
          <p className="text-faded mb-0">
          My experience with C# was primarily honed during my <b className='skills-project-link' onClick={handleScrollToExperience}>Software Engineer Internship</b> at Nomms. 
          In this role, I engineered a serverless automation solution using an Azure Function written in C#.
          This experience not only strengthened my backend development skills but also my ability to contribute to the front end and collaborate within a full Microsoft stack environment.
          </p>
        </div>
        {/* <div className="col-lg-4 col-md-6 mb-5" id='php'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-php'>
            <FontAwesomeIcon icon={faPhp} className="fa-4x" />
          </span>
          <h3><b>PHP</b></h3>
          <p className="text-faded mb-0">
          I have experience using PHP as a backend language in my full-stack{' '}
          <b className='skills-project-link' onClick={handleScroll}>Guitar Shop</b> {' '}
          web application.
          In this project, I used PHP to handle server-side logic, manage dynamic content, 
          and connect to a MySQL database for data storage and retrieval.
          It gave me valuable hands-on experience working with server responses, form validation, 
          and database integration in a real-world scenario.
          </p>
        </div> */}
        <div className="col-lg-4 col-md-6 mb-5" id='azure'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-azure'>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain.svg" alt='Azure-logo' style={{ width: '4rem', height: '4rem', filter: 'brightness(0%)' }} />
          </span>
          <h3><b>Azure</b></h3>
          <p className="text-faded mb-0">
          My understanding and hands-on experience with Microsoft Azure were primarily developed during my <b className='skills-project-link' onClick={handleScrollToExperience}>Software Engineer Internship</b> at Nomms. 
          I gained practical experience with managing database schema and implementing data migrations to support new features, all while ensuring data integrity.
          I also developed a strong foundation for building, deploying, and maintaining cloud-native applications in an Azure environment.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='linux'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-linux'>
            <FontAwesomeIcon icon={faLinux} className="fa-4x" />
          </span>
          <h3><b>Linux</b></h3>
          <p className="text-faded mb-0">
          I began my journey with Linux while learning C, starting with Ubuntu. 
          I quickly came to appreciate the control and flexibility of the Linux environment, a skill I now leverage extensively in my{' '} 
          <b className='skills-project-link' onClick={handleScrollToExperience}>Undergraduate Research</b>. 
          For the Red/Blue Team lab manuals, I use Kali Linux and Ubuntu VMs to simulate, execute, and analyze attack scenarios. 
          I enjoy leveraging the command line for compiling C code, managing files, and interacting with core security and development tools.
          {/* I began my journey with Linux while learning C, starting with Ubuntu. 
          I quickly came to appreciate the control and flexibility of the Linux environment. 
          Currently, I am expanding my skills with Kali Linux for cybersecurity exploration and learning. 
          I enjoy leveraging the command line for tasks such as compiling code, managing files, and interacting with various development tools. */}
          {/* Using Linux has helped me better understand system-level operations and strengthened my overall workflow as a developer. */}
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='docker'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-docker'>
            <FontAwesomeIcon icon={faDocker} className="fa-4x" />
          </span>
          <h3><b>Docker</b></h3>
          <p className="text-faded mb-0">
          I've utilized Docker in both my full-stack{' '}
          <b className='skills-project-link' onClick={handleScroll}>J.A.K.E. Weather</b> and {' '}
          <b className='skills-project-link' onClick={handleScroll}>Fitness Tracker</b> {' '}
          web applications,
          where I created separate Dockerfiles for the different services to streamline development and deployment.
          I also leveraged Docker for containerization in my{' '} 
          <b className='skills-project-link' onClick={handleScroll}>Wildcat Credit Union</b> {' '}
          full-stack banking web application, 
          enabling consistent environments and simplified deployment.
          I’m planning to continue leveraging Docker and containerization in future projects.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 mb-5" id='aws'>
          <span className="service-icon rounded-circle mx-auto mb-3 text-secondary" id='icon-aws'>
            <FontAwesomeIcon icon={faAws} className="fa-4x" />
          </span>
          <h3><b>AWS</b></h3>
          <p className="text-faded mb-0">
          My experience with AWS centers on leveraging its cloud services to support my full-stack <b className='skills-project-link' onClick={handleScroll}>Fitness Tracker</b> web application. 
          For this project, I used AWS RDS to host a MySQL database, which served as the secure and scalable backend for all user data.
          Looking ahead, I am keen to explore additional AWS services and features to integrate into future projects.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;