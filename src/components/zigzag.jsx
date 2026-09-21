import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faLocationDot,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

const experiences = [
  {
    id: "att-labs",
    role: "Software Engineer Intern",
    company: "AT&T Labs",
    location: "Redmond, WA (CTO Organization)",
    period: "Summer 2026",
    badge: "Enterprise Telemetry & Automation",
    impact: "Reduced telemetric report processing time by >90% (1 hr → <5 min)",
    description: (
      <>
        My internship at AT&T Labs provided hands-on experience in{" "}
        <b>enterprise telemetry and big data automation</b> within the CTO
        organization. I engineered a full-stack platform using{" "}
        <b>Flask, Streamlit, and PostgreSQL</b> to automate 5G network test
        analytics for a 20+ engineer Radio Access Network (RAN) team. By
        designing an automated ETL pipeline for massive telemetric datasets, I
        reduced report processing time by over 90%—from 1 hour to under 5
        minutes. This experience strengthened my technical leadership through
        weekly engineering demos and cross-functional collaboration.
      </>
    ),
    tech: [
      "Python",
      "Flask",
      "Streamlit",
      "PostgreSQL",
      "ETL Pipelines",
      "5G RAN Telemetry",
      "Hardware Validation",
    ],
    logo: "att-white.jpg",
    links: [
      {
        label: "AT&T Labs Official Page",
        url: "https://about.att.com/sites/labs/work-with-us",
        type: "external",
      },
      {
        label: "LinkedIn Post",
        url: "https://www.linkedin.com/posts/alex-ryse_att-attlabs-lifeatatt-activity-7437384829681360896-bUrl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQxvA8By1W3Eq1TwDOzvbiApA_mBZUc_Vo",
        type: "linkedin",
      },
    ],
  },
  {
    id: "nomms",
    role: "Software Engineer Intern",
    company: "Nomms",
    location: "Ellensburg, WA (Remote)",
    period: "Summer 2025",
    badge: "Full-Stack Development",
    impact: "Latency reduction, agile workflows & database migrations",
    description: (
      <>
        My internship at Nomms provided hands-on experience in{" "}
        <b>full-stack software development</b>. I engineered a solution that
        dramatically improved application performance and user experience by
        reducing latency. I also managed database migrations and contributed to
        front-end features as part of a collaborative team. This opportunity
        helped me grow as a developer and taught me the importance of
        communication and agile practices in a professional setting.
      </>
    ),
    tech: [
      "Full-Stack SWE",
      "Database Migrations",
      "Latency Optimization",
      "Azure",
      "C# / .NET",
      "Agile",
    ],
    logo: "nomms.jpg",
    links: [
      {
        label: "Nomms Official Page",
        url: "https://ordernomms.com/",
        type: "external",
      },
      {
        label: "Resume",
        url: "Resume_Alex_Ryse.pdf",
        type: "resume",
      },
    ],
  },
  {
    id: "cwu-research",
    role: "Undergraduate Research Assistant",
    company: "Central Washington University",
    location: "Ellensburg, WA",
    period: "Sep 2026 - Mar 2026",
    badge: "Cybersecurity & Virtualization",
    impact: "MITRE ATT&CK framework lab manuals tested on ESXi range",
    description: (
      <>
        My role as an <b>Undergraduate Research Assistant</b> involved in-depth
        research and the design of educational cybersecurity content. I worked
        as part of a three-person team to create comprehensive{" "}
        <b>Red/Blue Team lab manuals</b> that directly simulated real-world
        cyber threats. We structured the content around the <b>MITRE ATT&CK</b>{" "}
        framework to ensure modern, relevant training. Furthermore, I managed
        and utilized an <b>ESXi</b> lab range to rigorously test and validate
        all attack and defense scenarios using essential security tools,
        ensuring the educational material was technically sound and ready for
        institutional deployment.
      </>
    ),
    tech: [
      "MITRE ATT&CK",
      "ESXi Virtualization",
      "Red/Blue Teaming",
      "Kali Linux",
      "Threat Emulation",
      "Bash / Python",
    ],
    logo: "cwu-cybersecurity.png",
    links: [
      {
        label: "CWU Cybersecurity GitHub",
        url: "https://github.com/CWU-cybersecurity",
        type: "github",
      },
      {
        label: "Resume",
        url: "Resume_Alex_Ryse.pdf",
        type: "resume",
      },
    ],
  },
  {
    id: "tdu-drone",
    role: "International Drone Competition",
    company: "Tokyo Denki University",
    location: "Tokyo, Japan",
    period: "Jul 2025 - Aug 2025",
    badge: "Computer Vision & Robotics",
    impact: "Autonomous drone navigation & object detection in Python",
    description: (
      <>
        I had the unique opportunity to participate in an international drone
        competition at Tokyo Denki University, representing Central Washington
        University. In a collaborative, fast-paced environment, my team
        developed{" "}
        <b>Python-based algorithms for drone navigation and object detection</b>
        . We were able to leverage computer vision principles to successfully
        complete all challenges. This experience was not only a fantastic
        technical challenge but also a lesson in cross-cultural teamwork and
        communication.
      </>
    ),
    tech: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "Robotics",
      "Autonomous Navigation",
      "Cross-Cultural Teamwork",
    ],
    logo: "tdu.jpg",
    links: [
      {
        label: "TDU Official Page",
        url: "https://www.dendai.ac.jp/about/international/gakunai.html/international_workshop_english.html",
        type: "external",
      },
      {
        label: "LinkedIn Post",
        url: "https://www.linkedin.com/posts/alex-ryse_python-opencv-robotics-activity-7359496300502945792-6Qas/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEQxvA8By1W3Eq1TwDOzvbiApA_mBZUc_Vo",
        type: "linkedin",
      },
    ],
  },
  {
    id: "cwu-ta",
    role: "Teaching Assistant & Mathematics Tutor",
    company: "Central Washington University",
    location: "Ellensburg, WA",
    period: "Sep 2024 - Mar 2026",
    badge: "CS & Mathematics Mentorship",
    impact: "Mentored students in Data Structures, DBMS & Advanced Math",
    description: (
      <>
        As a student at Central Washington University, I held multiple academic
        roles foundational to my professional growth. As a{" "}
        <b>
          Teacher Assistant for Advanced Data Structures and Database Management
          Systems (DBMS)
        </b>
        , I honed my technical abilities by mentoring students and diagnosing
        errors in complex student code. As a <b>Mathematics Tutor</b>, I
        developed strong communication skills by guiding students through
        advanced multi-variable and calculus concepts. These experiences taught
        me not only how to solve difficult problems, but how to mentor others to
        think algorithmically.
      </>
    ),
    tech: [
      "Advanced Data Structures",
      "DBMS / SQL",
      "Code Diagnostics",
      "Advanced Mathematics",
      "Pedagogy & Mentorship",
    ],
    logo: "cwu-logo.png",
    links: [
      {
        label: "Teacher Assistant Info",
        url: "https://catalog.acalog.cwu.edu/preview_course_nopop.php?catoid=67&coid=156420",
        type: "external",
      },
      {
        label: "Mathematics Tutor Center",
        url: "https://www.cwu.edu/academics/academic-resources/learning-commons/tutoring/math-center/index.php",
        type: "external",
      },
    ],
  },
];

function ZigZag() {
  const renderLinkIcon = (type) => {
    switch (type) {
      case "linkedin":
        return <FontAwesomeIcon icon={faLinkedinIn} />;
      case "github":
        return <FontAwesomeIcon icon={faGithub} />;
      case "resume":
        return <FontAwesomeIcon icon={faFilePdf} />;
      default:
        return <FontAwesomeIcon icon={faArrowUpRightFromSquare} />;
    }
  };

  return (
    <div className="experience-timeline">
      {experiences.map((exp, index) => (
        <div key={exp.id} className="timeline-item">
          {/* Central Timeline Anchor Node */}
          <div className="timeline-node-container">
            <div className="timeline-node"></div>
          </div>

          {/* Timeline Card */}
          <div className="experience-card">
            {/* Card Header with Logo, Role & Meta */}
            <div className="exp-card-header">
              <div className="exp-logo-wrapper">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="exp-company-logo"
                />
              </div>

              <div className="exp-title-meta">
                <div className="exp-top-badges">
                  <span className="exp-badge">{exp.badge}</span>
                  <span className="exp-period">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="period-icon"
                    />
                    {exp.period}
                  </span>
                </div>

                <h3 className="exp-role-title">{exp.role}</h3>
                <div className="exp-company-location">
                  <span className="exp-company-name">{exp.company}</span>
                  <span className="exp-dot-sep">•</span>
                  <span className="exp-location-text">
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="loc-icon"
                    />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Impact Metric Highlight */}
            {exp.impact && (
              <div className="exp-impact-banner">
                <FontAwesomeIcon icon={faBolt} className="impact-bolt" />
                <span>{exp.impact}</span>
              </div>
            )}

            {/* Narrative Body */}
            <div className="exp-body-text">{exp.description}</div>

            {/* Tech Stack Pills */}
            <div className="exp-tech-chips">
              {exp.tech.map((skill, sIdx) => (
                <span key={sIdx} className="exp-tech-chip">
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="exp-actions-row">
              {exp.links.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exp-action-btn"
                >
                  <span className="exp-btn-icon">
                    {renderLinkIcon(link.type)}
                  </span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ZigZag;
