import Home from './components/home.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import './App.css';

function App() {
  return (
    <div id='page-top'>
      <nav>
        <div className='nav-container'>
          <a href='#page-top'><b>Alex Ryse</b></a>
          <button>Menu</button>
          <div>
            <ul>
              <li><a href="#home">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#skills">SKILLS</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#resume">RESUME</a></li>
            </ul>
          </div>
        </div>
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
    </div>
  );
}

export default App;
