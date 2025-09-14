import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import Home from './components/home.jsx';
import About from './components/about.jsx';
import Experience from './components/experience.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
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
      threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      //threshold: 0.5, // triggered when 50% of the section is in view 
    };

    const sections = document.querySelectorAll('section');
    /*const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        console.log('IntersectionObserver:', entry.target.id);
        if (entry.isIntersecting) {
          console.log('In view:', entry.target.id);
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);*/
    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter(entry => entry.isIntersecting);
      if (visibleEntries.length > 0) {
        const mostVisibleEntry = visibleEntries.reduce((prev, current) => {
          return prev.intersectionRatio > current.intersectionRatio ? prev : current;
        });
        setActiveSection(mostVisibleEntry.target.id);
      }
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

  // handle the nav bar scroll behavior
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    
    const section = document.getElementById(sectionId);
    const navHeight = 60;

    if (section) {
      const yOffset = -navHeight;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth'});
    }
  };

  return (
    <div id='page-top'>
      <nav>
        <div className='nav-left'>
          <a href='#page-top' className='name-logo'><b>Alex Ryse</b></a>
        </div>
        <ul>
          <li>
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className={isLoaded && activeSection === 'home' ? 'active' : ''}>
              HOME
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className={isLoaded && activeSection === 'about' ? 'active' : ''}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => handleScroll(e, 'experience')} className={isLoaded && activeSection === 'experience' ? 'active' : ''}>
              EXPERIENCE
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className={isLoaded && activeSection === 'skills' ? 'active' : ''}>
              SKILLS
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className={isLoaded && activeSection === 'projects' ? 'active' : ''}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className={isLoaded && activeSection === 'contact' ? 'active' : ''}>
              CONTACT
            </a>
          </li>
          <li>
            <a href="Resume Alex Ryse 3.0.pdf" target='_blank'><FontAwesomeIcon icon={faFilePdf} /> 
              <b>RESUME</b>
            </a>
          </li>
        </ul>
      </nav>
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
      <a className="scroll-to-top" href="#page-top">
        <FontAwesomeIcon icon={faAngleUp} />
      </a>
    </div>
  );
}

export default App;
