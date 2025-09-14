import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
// import cwuLogo from '../cwu-logo.png';

function About() {
  return (
    <div className='about-container'>
      <div className='cwu-container'>
        <a href='https://www.cwu.edu/' className='cwu-logo' target="_blank" rel="noopener noreferrer">
          <img src='cwu-logo.png' alt='cwu-logo'></img>
        </a>
      </div>
      <div className='intro-container'>
        <h2>Hi, I'm Alex Ryse!</h2>
        <p>
          I'm a fourth-year Computer Science student at Central Washington University, set to graduate in the spring of 2026. 
          My journey into coding began four years ago, driven by a curiosity about how to build technology that solves real-world problems. 
          What started as curiosity quickly blossomed into a passion for <b>full-stack development</b>, and I love the challenge of bringing an entire application to life, from the user interface all the way to the database.
        </p>
        <p>
          I've spent the past few years building my skills across the stack through personal and academic projects. 
          I've built projects using popular frameworks and libraries like <b>React</b> for dynamic front-ends and <b>Node.js/Express.js</b> for powerful back-ends, all while managing data with <b>MySQL</b> and <b>AWS RDS</b>. 
          This hands-on experience has given me a deep appreciation for the entire development lifecycle, and I'm always looking for ways to build more efficient and scalable solutions.
        </p>
        <p>
          I'm excited to bring this passion and experience to a full-time software engineering role after graduation, where I can collaborate with a team to build impactful and innovative technology.
          I am particularly eager to join a culture where I can continue to learn and grow alongside experienced professionals.
        </p>
        {/* <p>
          I'm currently a fourth-year student at Central Washington University, pursuing a Bachelor's degree in Computer Science with a minor in mathematics, and I'm on track to graduate in the spring of 2026. 
          My journey into coding began four years ago with a fascination for how technology can be built from the ground up to solve real-world problems—and I’ve been hooked ever since.
        </p>
        <p>
          My passion for coding and problem-solving has grown from a simple curiosity into a foundation for my work. 
          I thrive on both the creative process of building new things and the logical challenge of optimizing solutions. 
          I am eager to apply this passion to a professional setting. 
          After graduation, I'm excited to transition into a full-time software engineering role where I can continue to learn and contribute to a team building innovative technology.
        </p> */}
        {/* <p>
          Currently, I work as a Mathematics Tutor and Teacher Assistant at my university, where I support students in understanding core concepts and building confidence in their abilities.
          These experiences have deepened my appreciation for both collaboration and communication within technical fields.
        </p> */}
        {/* <p>
          After graduation, I plan to pursue a Master's degree in Computer Science to further specialize my skills and contribute to innovative projects in the tech industry.
          I'm driven by a desire to continuously grow, learn, and create meaningful technologies that make a difference.
        </p> */}
      </div>
      {/* <div className='exp-container'>
        <h3>My Experience</h3>
        <ul>
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
      <div className='socials' id='about-socials'>
        <h3>Connect with me!</h3>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/alex-ryse/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a href="https://github.com/rysealex" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;