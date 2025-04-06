import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true when window finishes loading
    const handleLoad = () => {
      setIsLoaded(true); // Set state to true once page is loaded
    };

    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    // detecting which section is in view
    const observerOptions = {
      rootMargin: '0px',
      threshold: 0.5, // triggered when 50% of the section is in view 
    };

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log('IntersectionObserver:', entry.target.id);
        if (entry.isIntersecting) {
          console.log('In view:', entry.target.id);
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // observe each section
    sections.forEach(section => observer.observe(section));

    // cleanup observer on unmount
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    const toggleScrollButtonVisibility = () => {
      // if scroll down 200px, show the button
      if (window.scrollY > 200) {
        scrollToTopButton.classList.add('show');
      } else {
        scrollToTopButton.classList.remove('show');
      }
    };

    window.addEventListener('scroll', toggleScrollButtonVisibility);
    return () => window.removeEventListener('scroll', toggleScrollButtonVisibility);
  }, []);

  return (
    <div id='page-top'>
      <nav>
        <div className='nav-left'>
          <a href='#page-top' className='name-logo'><b>Alex Ryse</b></a>
        </div>
        <ul>
          <li><a href="#home" className={isLoaded && activeSection === 'home' ? 'active' : ''}>HOME</a></li>
          <li><a href="#about" className={isLoaded && activeSection === 'about' ? 'active' : ''}>ABOUT</a></li>
          <li><a href="#skills" className={isLoaded && activeSection === 'skills' ? 'active' : ''}>SKILLS</a></li>
          <li><a href="#projects" className={isLoaded && activeSection === 'projects' ? 'active' : ''}>PROJECTS</a></li>
          <li><a href="Resume Alex Ryse Upd.pdf" target='_blank'><FontAwesomeIcon icon={faFilePdf} /> <b>RESUME</b></a></li>
        </ul>
      </nav>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <a className="scroll-to-top" href="#page-top">
        <FontAwesomeIcon icon={faAngleUp} />
      </a>
    </div>
  );
}

export default App;
