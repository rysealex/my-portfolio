import Home from './components/home.jsx';
import About from './components/about.jsx';
import Skills from './components/skills.jsx';
import Projects from './components/projects.jsx';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
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
    </div>
  );
}

export default App;
