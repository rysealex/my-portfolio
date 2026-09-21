import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faGraduationCap,
  faBriefcase,
  faLaptopCode,
  faLocationDot,
  faEnvelope,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

function About() {
  return (
    <div className="about-container">
      {/* Section Header */}
      <div className="about-header">
        <span className="section-eyebrow">ABOUT ME</span>
        <h2>Designing Systems Where Power Meets Usability</h2>
        <p className="section-subtitle">
          Passionate about building scalable architectures and transforming
          complex data into intuitive, human-centered interfaces.
        </p>
      </div>

      <div className="about-layout">
        {/* Left Column: Profile Card */}
        <div className="about-profile-card">
          <div className="about-pic-wrapper">
            <img
              src="profile_pic.png"
              alt="Alex Ryse Profile"
              className="about-profile-img"
            />
          </div>

          <div className="about-profile-info">
            <h3>Alex Ryse</h3>
            <span className="profile-role">Software Engineer</span>

            <div className="profile-meta">
              <div className="meta-item">
                <FontAwesomeIcon icon={faLocationDot} className="meta-icon" />
                <span>Greater Seattle Area, WA</span>
              </div>
              <div className="meta-item">
                <FontAwesomeIcon icon={faGraduationCap} className="meta-icon" />
                <span>MS CSSE @ UW Bothell</span>
              </div>
              <div className="meta-item">
                <FontAwesomeIcon icon={faBriefcase} className="meta-icon" />
                <span>Prev. @ AT&T Labs</span>
              </div>
            </div>

            <div className="about-social-links">
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
              <a href="mailto:aryse54@gmail.com" aria-label="Email Alex">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
              <a
                href="Resume_Alex_Ryse.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
                className="resume-quick-link"
              >
                <FontAwesomeIcon icon={faFilePdf} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Bento Narrative Grid */}
        <div className="about-bento-grid">
          {/* Card 1: Core Journey */}
          <div className="bento-card bento-card-featured">
            <div className="bento-icon-badge">
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <div className="bento-content">
              <h4>Engineering Journey</h4>
              <p>
                I am a recent Computer Science graduate from{" "}
                <b>Central Washington University</b> with a minor in
                mathematics, heading to the{" "}
                <b>University of Washington Bothell</b> for my{" "}
                <b>
                  Master of Science in Computer Science & Software Engineering
                  (MSCSSE)
                </b>
                . My passion lies at the intersection of robust backend
                distributed systems and elegant, ergonomic interfaces.
              </p>
            </div>
          </div>

          {/* Card 2: Industry Impact */}
          <div className="bento-card">
            <div className="bento-icon-badge accent-blue">
              <FontAwesomeIcon icon={faBriefcase} />
            </div>
            <div className="bento-content">
              <h4>Enterprise & Industry Impact</h4>
              <p>
                As a <b>Software Engineer Intern at AT&T Labs</b> (Redmond CTO
                organization), I automated 5G Radio Access Network (RAN) test
                telemetry—architecting an ETL pipeline that reduced processing
                time by <b>over 90%</b>. Previously at <b>Nomms</b>, I
                engineered full-stack features, optimized latency, and performed
                database migrations.
              </p>
            </div>
          </div>

          {/* Card 3: Research & Mentorship */}
          <div className="bento-card">
            <div className="bento-icon-badge accent-purple">
              <FontAwesomeIcon icon={faShieldHalved} />
            </div>
            <div className="bento-content">
              <h4>Research & Mentorship</h4>
              <p>
                At CWU, I served as an <b>Undergraduate Research Assistant</b>,
                authoring Red/Blue Team cybersecurity lab manuals mapped to the{" "}
                <b>MITRE ATT&CK</b> framework on an ESXi virtualized range.
                Dedicated to mentorship, I also served as a{" "}
                <b>Teaching Assistant</b> for Advanced Data Structures and
                Database Management Systems (DBMS).
              </p>
            </div>
          </div>

          {/* Card 4: Graduate Specialization - HCI */}
          <div className="bento-card bento-card-wide">
            <div className="bento-icon-badge accent-cyan">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <div className="bento-content">
              <h4>Graduate Focus: Human-Computer Interaction (HCI)</h4>
              <p>
                Beginning in September 2026 at UW Bothell, my graduate research
                focuses on <b>Human-Computer Interaction (HCI)</b>. My goal is
                to apply cognitive ergonomics and data visualization principles
                to complex distributed backends—ensuring powerful systems remain
                intuitive, accessible, and frictionless for the people who rely
                on them.
              </p>
            </div>
          </div>

          {/* Card 5: Highlight Metric Badges */}
          {/* <div className="bento-metrics-row">
            <div className="metric-pill">
              <span className="metric-num">9×</span>
              <span className="metric-label">Dean’s List Honors</span>
            </div>
            <div className="metric-pill">
              <span className="metric-num">2×</span>
              <span className="metric-label">SWE Internships</span>
            </div>
            <div className="metric-pill">
              <span className="metric-num">&gt;90%</span>
              <span className="metric-label">ETL Speedup</span>
            </div>
            <div className="metric-pill">
              <span className="metric-num">HCI</span>
              <span className="metric-label">MSCSSE Focus</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default About;
