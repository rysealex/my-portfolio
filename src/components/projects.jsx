import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faJava, faPython, faJsSquare, faUbuntu, faPhp, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faX, faDatabase, faCircleNotch, faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import TechPieChart from './techPieChart';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import WordCloudForm from './wordCloudForm';

// tech icon colors
/*const techColors = {
  Java: '#AF7219',
  Python: '#3573A6',
  Flask: '#3573A6',
  JavaScript: '#F1E15A',
  CSS: '#663398',
  HTML: '#E44C27',
  React: '#61DAFB',
  Linux: '#F47421',
  C: '#555555',
  'C++': '#F34B7E',
  CMake: '#DA3434',
  SQL: '#E38C00',
  PHP: '#4E5D94',
  Docker: '#061D2F'
};*/

// project details
const projects = [
  {
    title: 'Fitness Tracker',
    images: [
      {
        src: 'fitness-tracker-logo.png',
        desc: '',
      },
      {
        src: 'fitness-tracker-small.png',
        desc: 'Description 1Description 1Description 1Description 1Description 1Description 1',
      },
      {
        src: 'fitness-tracker-small.png',
        desc: 'Description 2',
      },
    ],
    demo: 'FitnessTrackerDemo.mp4',
    description: (
      <>
        This full-stack fitness tracker web application, a personal project built with a{' '} <b>React</b>
        {' '} frontend, a{' '} <b>Python Flask</b> {' '} backend, and a{' '} <b>MySQL</b> {' '} database on{' '} <b>AWS RDS</b>, was designed with the core functionalities of user management, calorie counting, workout logging, and goal tracking. 
        To optimize application performance, I implemented a{' '} <b>React Context API</b> {' '} to reduce redundant data fetches by{' '} <b>80%</b> {' '} and a{' '} <b>JSON Web Token (JWT)</b> {' '} authentication system to secure all backend requests. 
        The entire application was containerized using{' '} <b>Docker</b> {' '} for streamlined deployment. 
        This project enhanced my skills in full-stack development, database management, and implementing secure, performant web applications.
      </>
    ),
    tech: [
      { id: 0, label: 'React', value: 62.4 },
      { id: 2, label: 'Flask', value: 27.5 },
      { id: 3, label: 'CSS', value: 8.1 },
      { id: 4, label: 'Docker', value: 1.2 },
      { id: 5, label: 'AWS', value: 0.8 }
    ],
    link: 'https://github.com/rysealex/fitness-tracker',
    currDev: false,
    wordCloudInteractive: false,
  },
  {
    title: 'Wildcat Credit Union',
    images: [
      {
        src: 'wcu-logo.png',
        desc: '',
      },
      {
        src: 'wcu-logo.png',
        desc: 'Description 1',
      },
      {
        src: 'wcu-logo.png',
        desc: 'Description 2',
      },
    ],
    demo: 'WCU-Demo-Vid.mp4',
    description: (
      <>
        This full-stack banking web application, built with a{' '} <b>React</b>
        {' '} frontend, {' '} <b>Node.js/Express.js</b> backend, and {' '} <b>MySQL</b>
        {' '} database, was developed following the SDLC with thorough documentation via 
        Microsoft Visio and Project. As team lead for three developers, I oversaw the 
        implementation of {' '} <b>Docker</b> for containerization and integrated the 
        {' '} <b>Google Maps API</b> for an ATM Locator feature, enabling users to find 
        Wildcat Credit Union ATMs around Central Washington University and get directions. 
        Key features include secure user authentication, account creation with password encryption and an 
        account lockdown mechanism, fund transfers, and deposit/receive functionalities. 
        This project enhanced my skills in modern web technologies, team management, and structured development.
      </>
    ),
    tech: [
      { id: 0, label: 'React', value: 53.6 },
      { id: 1, label: 'Node.js/Express.js', value: 32.3 },
      { id: 2, label: 'CSS', value: 9.6 },
      { id: 3, label: 'SQL', value: 2.9 },
      { id: 4, label: 'Docker', value: 1.6 }
    ],
    link: 'https://github.com/rysealex/wildcat-credit-union',
    currDev: false,
    wordCloudInteractive: false,
  },
  {
    title: 'Word Cloud Generator',
    images: [
      {
        src: 'python.png',
        desc: '',
      },
      {
        src: 'python.png',
        desc: 'Description 1',
      },
      {
        src: 'python.png',
        desc: 'Description 2',
      },
    ],
    demo: 'WordCloudGenDemo.mp4',
    description: (
      <>
        This{' '} <b>Python</b>-based Word Cloud Generator empowers users to create visual representations 
        of text through data visualization and API integration. 
        Utilizing {' '} <b>matplotlib</b>, the application generates customizable word clouds based on a 
        user-provided theme, sourcing related words and definitions from the Datamuse and Dictionary APIs.
        The project incorporates a spiral layout for aesthetic appeal and the 
        {' '} <b>rtree</b> library for efficient, non-overlapping word placement. 
        An interactive hover effect displays word definitions, enhancing the user experience.
        This project deepened my understanding of Python libraries for data handling and visualization 
        in the context of building interactive command-line tools.
      </>
    ),
    tech: [
      { id: 0, label: 'Python', value: 100 },
    ],
    link: 'https://github.com/rysealex/word-cloud-generator',
    currDev: false,
    wordCloudInteractive: true,
  },
  {
    title: 'Chat App',
    images: [
      {
        src: 'chat-app-logo2.0.png',
        desc: '',
      },
      {
        src: 'chat-app.png',
        desc: 'Description 1',
      },
      {
        src: 'chat-app.png',
        desc: 'Description 2',
      },
    ],
    demo: 'chat-app-vid.mp4',
    description: (
      <>
        Developed a real-time chat application using <b>Android Studio</b> with <b>Java</b> and <b>XML</b> for the front end.
        Integrated <b>Firebase</b> to handle user authentication, store user data, and manage real-time messaging updates between users.
        This project gave me hands-on experience with mobile app development and working with 
        cloud-based backend services for scalable, real-time communication.
      </>
    ),
    tech: [
      { id: 0, label: 'Java', value: 100 },
    ],
    link: 'https://github.com/rysealex/Chat-App',
    currDev: false,
    wordCloudInteractive: false,
  },
  {
    title: 'Guitar Store',
    images: [
      {
        src: 'guitar-store-logo2.0.png',
        desc: '',
      },
      {
        src: 'guitar-store.png',
        desc: 'Description 1',
      },
      {
        src: 'guitar-store.png',
        desc: 'Description 2',
      },
    ],
    demo: 'guitar-store-vid.mp4',
    description: (
      <>
        Created a responsive guitar store web application using{' '}
        <b>JavaScript</b> and <b>jQuery</b>, structured around the Model-View-Controller (MVC) 
        design pattern to ensure clean and scalable architecture.
        Developed the back end with <b>PHP</b> and implemented <b>MySQL</b> as the relational database to manage product inventory and user data.
        This project strengthened my understanding of full-stack web development, database integration, and dynamic content rendering.
      </>
    ),
    tech: [
      { id: 0, label: 'PHP', value: 72.6 },
      { id: 1, label: 'JavaScript', value: 12.9 },
      { id: 2, label: 'CSS', value: 12.8 },
      { id: 3, label: 'SQL', value: 1.7 },
    ],
    link: 'https://github.com/rysealex/guitar-store',
    currDev: false,
    wordCloudInteractive: false,
  },
  {
    title: 'Sets Game',
    images: [
      {
        src: 'sets-game-canva-logo.png',
        desc: '',
      },
      {
        src: 'sets-game.png',
        desc: 'Description 1',
      },
      {
        src: 'sets-game.png',
        desc: 'Description 2',
      },
    ],
    demo: '',
    description: (
      <>
        A recreation of the classic card game{' '} <i>Set</i>, developed using{' '} <b>C++</b>, <b>CMake</b>, and <b>Qt</b>.
        This project marks my first experience using Qt for game development, introducing me to event-driven programming and GUI design in C++.
        I’m currently working to complete the game, focusing on refining the 
        gameplay logic, improving the interface, and enhancing the overall user experience.
        This project has deepened my understanding of C++ concepts like pointers and memory management 
        while giving me hands-on experience with building interactive desktop applications.
      </>
    ),
    tech: [
      { id: 0, label: 'C++', value: 92.7 },
      { id: 1, label: 'CMake', value: 7.3 },
    ],
    link: 'https://github.com/rysealex/sets-game',
    currDev: true,
    wordCloudInteractive: false,
  },
  {
    title: 'Financial Data Filtering App',
    images: [
      {
        src: 'fdfa-canva-logo.png',
        desc: ''
      },
      {
        src: 'fdfa.png',
        desc: 'Description 1'
      },
      {
        src: 'fdfa.png',
        desc: 'Description 2'
      },
    ],
    demo: 'FDFA-vid.mp4',
    description: (
      <>
        Built a lightweight financial data filtering application using{' '} <b>React</b> and{' '} <b>TailwindCSS</b>. {' '}
        The app fetches annual income statements for Apple (AAPL) from a 
        real-world financial API—my first experience working with a live company data source.
        It includes features to filter and sort data by date, revenue, and net income, with results displayed in a dynamic, responsive table.
        The project is deployed via{' '}
        <a href='https://rysealex.github.io/financial-data-filtering-app/' target="_blank" rel="noopener noreferrer"><b>GitHub Pages</b></a>
        {' '}and helped reinforce my skills in API integration, UI design, and client-side data manipulation.
      </>
    ),
    tech: [
      { id: 0, label: 'React', value: 87.1 },
      { id: 1, label: 'HTML', value: 7.8 },
      { id: 2, label: 'TailwindCSS', value: 5.1 }
    ],
    link: 'https://github.com/rysealex/financial-data-filtering-app',
    currDev: false,
    wordCloudInteractive: false,
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

  // project video demos
  const videoRef = useRef(null);
  // start the video demos on command
  const handlePlay = () => {
    if (videoRef.current) {
      // scroll to the video demo
      videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // delay the video demo play
      setTimeout(() => {
        videoRef.current.play();
      }, 500);
    }
  };

  // scroll to the built in word cloud generator
  const wordCloudRef = useRef(null);
  const handleWordCloudScroll = () => {
    if (wordCloudRef.current) {
      wordCloudRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };  

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
          Here you can view some of the projects I have built and developed—ranging 
          from full-stack web applications to system-level tools.
          <br/><br/>
          In my free time, I enjoy creating, problem-solving, and learning through hands-on projects.
          <br/><br/>
          Every project is an opportunity to grow and push the limits of what I can build!
        </p>
      </div>
      <div className='projects-showcase'>
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className='project-card'
              style={{ backgroundImage: `url(${project.images[0].src})` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className='overlay'>
                {project.currDev && (
                  <div className='curr-dev-circle'>
                    <FontAwesomeIcon icon={faCircleNotch} size='lg' />
                  </div>
                )}
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
                {selectedProject.currDev && (
                  <div className='curr-dev-container'>
                    <h4><b>Currently Developing</b></h4>
                    <FontAwesomeIcon icon={faCircleNotch} size='lg' className='spinner' />
                  </div>
                )}
                <p>{selectedProject.description}</p>
              </div>
              <div className='modal-tech'>
                <h3>Tech Stack</h3>
                <TechPieChart
                  data={selectedProject.tech}
                  onSliceClick={(label) => {
                    console.log(`Skill clicked: ${label}`);
                    // get the current name of tech stack
                    let targetId = label.toLowerCase();
                    // check if targetId is a special case
                    switch(targetId) {
                      case 'css':
                        targetId = 'javascript';
                        break;
                      case 'html':
                        targetId = 'javascript';
                        break;
                      case 'tailwindcss':
                        targetId = 'javascript';
                        break;
                      case 'c':
                        targetId = 'c++';
                        break;
                      case 'cmake':
                        targetId = 'c++';
                        break;
                      case 'flask':
                        targetId = 'python';
                        break;
                      case 'node.js/express.js':
                        targetId = 'javascript';
                        break;
                      default:
                        break;
                    }
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
            {/*<div className='screenshots-header'>
              <h3>Screenshots</h3>
            </div>*/}
            <div className='demo-container'>
              {selectedProject.currDev && (
                <div>
                  <h3 id='demo-soon'>Demo coming soon!</h3>
                </div>
              )}
              {!selectedProject.currDev && (
                <div>
                  <h3 onClick={handlePlay}>
                    <FontAwesomeIcon icon={faAnglesDown} /> Demo <FontAwesomeIcon icon={faAnglesDown} />
                  </h3>
                  <video className='demo-video' ref={videoRef} width="100%" controls loop>
                    <source src={selectedProject.demo} type='video/mp4' />
                  </video>
                </div>
              )}
            </div>
            {/*<div className='carousel-container'>
              <Carousel 
                selectedItem={0}
                showThumbs={false}
                showIndicators={false}
                infiniteLoop 
                autoPlay
                interval={5000}
                showStatus={false}
                swipeable
                dynamicHeight={false}
              >
                {selectedProject.images?.slice(1).map((img, idx) => (
                  <div key={idx}>
                    <img src={img.src} alt={`${selectedProject.title} screenshot ${idx + 2}`} />
                    <p className='carousel-desc'>{img.desc}</p>
                  </div>
                ))}
              </Carousel>
            </div>*/}
            {selectedProject.wordCloudInteractive && (
              <div className='word-cloud-container'>
                <h3 id='try-self' onClick={handleWordCloudScroll}>
                  <FontAwesomeIcon icon={faAnglesDown} /> Try Yourself <FontAwesomeIcon icon={faAnglesDown} />
                </h3>
                <div ref={wordCloudRef}>
                  <WordCloudForm key="word-cloud-generator-form" />
                </div>
              </div>
            )}
            <div className='project-link'>
              <b>View on GitHub: </b>
              <a href={selectedProject.link} target='_blank' rel='noreferrer'>
                {selectedProject.link}
              </a>
            </div>
            <span className='close' onClick={() => setSelectedProject(null)} >
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
          <a href='https://github.com/rysealex' className='github-button' target="_blank" rel="noopener noreferrer">
            <b>Visit My GitHub</b> <FontAwesomeIcon icon={faGithub} size="lg"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;