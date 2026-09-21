import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronDown,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

function Home() {
  // Smooth scroll handler with floating nav offset
  const handleScrollTo = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    const navHeight = 70;

    if (section) {
      const yOffset = -navHeight;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `radial-gradient(circle at 50% 20%, rgba(56, 189, 248, 0.14) 0%, transparent 55%), radial-gradient(circle at 85% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%), linear-gradient(180deg, rgba(9, 13, 22, 0.72) 0%, rgba(9, 13, 22, 0.98) 100%), url(${process.env.PUBLIC_URL}/background2.jpg)`,
      }}
    >
      {/* Live Status Pill */}
      <div className="status-badge">
        <span className="status-dot"></span>
        <span>MS CSSE @ UW Bothell &bull; Prev. @ AT&T Labs</span>
      </div>

      {/* Avatar */}
      <div className="pic-container">
        <img src="upd_profile_pic.jpg" alt="Alex Ryse profile" />
      </div>

      {/* Headline & Tagline */}
      <h1 className="hero-title">
        Hi, I'm <span className="gradient-text">Alex Ryse</span>
      </h1>
      {/* <p className="hero-tagline">
        Software Engineer specializing in{" "}
        <strong>Full-Stack Development</strong>,{" "}
        <strong>Distributed Systems</strong>, and{" "}
        <strong>Human-Computer Interaction (HCI)</strong>.
      </p> */}

      {/* Domain Chips
      <div className="hero-chips">
        <span className="hero-chip">Distributed Systems</span>
        <span className="hero-chip">HCI & Frontend</span>
        <span className="hero-chip">Telemetry & ETL</span>
        <span className="hero-chip">Cloud & DevOps</span>
      </div> */}

      {/* Action Buttons */}
      <div className="hero-actions">
        <button
          className="btn-primary"
          onClick={(e) => handleScrollTo(e, "projects")}
        >
          <span>Explore Projects</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button
          className="btn-secondary"
          onClick={(e) => handleScrollTo(e, "about")}
        >
          <span>About Me</span>
        </button>
        <a
          href="Resume_Alex_Ryse.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <FontAwesomeIcon icon={faFilePdf} />
          <span>Resume</span>
        </a>
      </div>

      {/* Social Quick Links */}
      <div className="hero-socials">
        <a
          href="https://www.linkedin.com/in/alex-ryse/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          href="https://github.com/rysealex"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:aryse54@gmail.com" aria-label="Email Alex Ryse">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="hero-scroll-indicator"
        onClick={(e) => handleScrollTo(e, "about")}
        aria-label="Scroll to About section"
      >
        <FontAwesomeIcon icon={faChevronDown} />
      </a>
    </div>
  );
}

export default Home;
