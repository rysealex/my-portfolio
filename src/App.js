import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import './App.css';

function App() {
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
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#resume"><FontAwesomeIcon icon={faFilePdf} /> RESUME</a></li>
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
        <button>Up</button>
      </a>
    </div>
  );
}

export default App;
