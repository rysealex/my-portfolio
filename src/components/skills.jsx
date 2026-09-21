import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJava,
  faPython,
  faJsSquare,
  faReact,
  faLinux,
  faDocker,
  faAws,
  faNodeJs,
  faGitAlt,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLayerGroup,
  faCode,
  faCloud,
  faDatabase,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  CSharpIcon,
  CPlusPlusIcon,
  TypeScriptIcon,
  PostgreSQLIcon,
  SQLiteIcon,
  MySQLIcon,
  FirebaseIcon,
  DotNetIcon,
  StreamlitIcon,
  TailwindIcon,
  AzureIcon,
  FlaskIcon,
} from "./skillIcons";

const skillsData = [
  // ==========================================
  // 1. LANGUAGES
  // ==========================================
  {
    id: "python",
    name: "Python",
    category: "languages",
    categoryLabel: "Language",
    badge: "Enterprise & Automation",
    iconType: "fa",
    faIcon: faPython,
    description:
      "Core language for full-stack telemetry, automation, and distributed systems. Developed at AT&T Labs for 5G network telemetry, FirstPass on Raspberry Pi 5, and autonomous drone navigation algorithms.",
    projects: [
      { name: "AT&T Labs", target: "experience" },
      { name: "FirstPass", target: "projects" },
      { name: "Drone Competition", target: "experience" },
      { name: "J.A.K.E. Weather", target: "projects" },
    ],
  },
  {
    id: "csharp",
    name: "C#",
    category: "languages",
    categoryLabel: "Language",
    badge: "Enterprise & Capstone",
    iconType: "custom",
    render: CSharpIcon,
    description:
      "Utilized across Microsoft enterprise stacks. Architected C# Web APIs and Entity Framework Core backends for CS Study Cat, and engineered ASP.NET features with Azure Functions at Nomms.",
    projects: [
      { name: "CS Study Cat", target: "projects" },
      { name: "Nomms Internship", target: "experience" },
    ],
  },
  {
    id: "c++",
    name: "C / C++",
    category: "languages",
    categoryLabel: "Language",
    badge: "Systems & Security",
    iconType: "custom",
    render: CPlusPlusIcon,
    description:
      "Applied in cybersecurity research for Red/Blue Team tooling and attack validation. Developed Sets Game utilizing C++ with CMake and Qt, mastering memory management and pointers.",
    projects: [
      { name: "Sets Game", target: "projects" },
      { name: "CWU Research", target: "experience" },
    ],
  },
  {
    id: "java",
    name: "Java",
    category: "languages",
    categoryLabel: "Language",
    badge: "4+ Years & TA",
    iconType: "fa",
    faIcon: faJava,
    description:
      "Foundational OOP language developed over 4+ years. Engineered a real-time Android chat application with Firebase, and supported students as Teaching Assistant in Advanced Data Structures.",
    projects: [
      { name: "Chat App", target: "projects" },
      { name: "Data Structures TA", target: "experience" },
    ],
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "languages",
    categoryLabel: "Language",
    badge: "Modern Frontend",
    iconType: "custom",
    render: TypeScriptIcon,
    description:
      "Engineered typed, production-ready React client applications. Utilized in LZM Landscaping LLC to enforce strict type contracts, client-side routing, and accessible UI components.",
    projects: [{ name: "LZM Landscaping", target: "projects" }],
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "languages",
    categoryLabel: "Language & Web",
    badge: "Full-Stack Web",
    iconType: "fa",
    faIcon: faJsSquare,
    description:
      "Essential language for interactive web dashboards, asynchronous data streaming, and REST API integration across React, Node.js, and browser tooling.",
    projects: [
      { name: "FirstPass", target: "projects" },
      { name: "TabiTime", target: "projects" },
      { name: "Wildcat Credit Union", target: "projects" },
    ],
  },
  {
    id: "sql",
    name: "SQL",
    category: "languages",
    categoryLabel: "Query Language",
    badge: "DBMS TA & Big Data",
    iconType: "fa",
    faIcon: faDatabase,
    description:
      "Expertise in relational database schema design, complex JOIN queries, normalization, and optimization across PostgreSQL, MySQL, and SQLite. Mentored 40+ students as CWU DBMS TA.",
    projects: [
      { name: "DBMS Teaching Assistant", target: "experience" },
      { name: "AT&T Labs", target: "experience" },
    ],
  },
  {
    id: "php",
    name: "PHP",
    category: "languages",
    categoryLabel: "Language",
    badge: "MVC Architecture",
    iconType: "fa",
    faIcon: faPhp,
    description:
      "Developed backend MVC services, database integrations, and dynamic server-side routing in PHP and MySQL for full-stack web applications.",
    projects: [{ name: "Guitar Store", target: "projects" }],
  },

  // ==========================================
  // 2. DATABASES
  // ==========================================
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "databases",
    categoryLabel: "Relational Database",
    badge: "AT&T Labs Telemetry",
    iconType: "custom",
    render: PostgreSQLIcon,
    description:
      "Engineered PostgreSQL databases at AT&T Labs, storing and querying parsed telemetric logs from 50+ CSV files (up to 1GB+ each) of raw 5G RAN data across distributed servers.",
    projects: [{ name: "AT&T Labs", target: "experience" }],
  },
  {
    id: "sqlite",
    name: "SQLite",
    category: "databases",
    categoryLabel: "Embedded Database",
    badge: "Local Persistence",
    iconType: "custom",
    render: SQLiteIcon,
    description:
      "Integrated SQLite with Entity Framework Core in CS Study Cat for zero-latency local curriculum queries, and engineered a persistent multi-process job database for FirstPass on Raspberry Pi 5.",
    projects: [
      { name: "CS Study Cat", target: "projects" },
      { name: "FirstPass", target: "projects" },
    ],
  },
  {
    id: "mysql",
    name: "MySQL",
    category: "databases",
    categoryLabel: "Relational Database",
    badge: "AWS RDS & Full-Stack",
    iconType: "custom",
    render: MySQLIcon,
    description:
      "Configured MySQL relational databases hosted on AWS RDS and containerized Docker environments for user authentication, transactional ledgers, and dynamic querying.",
    projects: [
      { name: "Fitness Tracker", target: "projects" },
      { name: "J.A.K.E. Weather", target: "projects" },
      { name: "Wildcat Credit Union", target: "projects" },
    ],
  },
  {
    id: "firebase",
    name: "Firebase",
    category: "databases",
    categoryLabel: "NoSQL & Auth",
    badge: "Real-Time Cloud",
    iconType: "custom",
    render: FirebaseIcon,
    description:
      "Integrated Firebase Authentication and Realtime Database into an Android mobile application, enabling instant message synchronization, user profile management, and cloud data rules.",
    projects: [{ name: "Chat App", target: "projects" }],
  },

  // ==========================================
  // 3. LIBRARIES & FRAMEWORKS
  // ==========================================
  {
    id: "react",
    name: "React",
    category: "frameworks",
    categoryLabel: "Frontend Library",
    badge: "Core Framework",
    iconType: "fa",
    faIcon: faReact,
    description:
      "Built performant single-page applications with Context API state management, reducing redundant API fetches by 80%. Implemented JWT authentication and dynamic interactive dashboards.",
    projects: [
      { name: "Fitness Tracker", target: "projects" },
      { name: "J.A.K.E. Weather", target: "projects" },
      { name: "LZM Landscaping", target: "projects" },
    ],
  },
  {
    id: "dotnet",
    name: ".NET 9 & Blazor",
    category: "frameworks",
    categoryLabel: "Web Framework",
    badge: "Senior Capstone",
    iconType: "custom",
    render: DotNetIcon,
    description:
      "Led development of CS Study Cat using .NET 9 and Blazor with C# Web API and Entity Framework Core, architecting cross-platform N-tier components and curriculum-accurate AI tutors.",
    projects: [{ name: "CS Study Cat", target: "projects" }],
  },
  {
    id: "flask",
    name: "Flask",
    category: "frameworks",
    categoryLabel: "Python Backend",
    badge: "AT&T Labs & Edge",
    iconType: "custom",
    render: FlaskIcon,
    description:
      "Developed robust Python REST APIs and backend microservices at AT&T Labs, FirstPass on Raspberry Pi 5, and Fitness Tracker with JWT security.",
    projects: [
      { name: "AT&T Labs", target: "experience" },
      { name: "FirstPass", target: "projects" },
      { name: "Fitness Tracker", target: "projects" },
    ],
  },
  {
    id: "streamlit",
    name: "Streamlit & Plotly",
    category: "frameworks",
    categoryLabel: "Analytics & UI",
    badge: "AT&T Labs Dashboards",
    iconType: "custom",
    render: StreamlitIcon,
    description:
      "Engineered high-frequency interactive Plotly analytics dashboards and Streamlit UI at AT&T Labs to visualize 5G telemetric KPIs, speeding up team root-cause diagnostics by 90%.",
    projects: [{ name: "AT&T Labs", target: "experience" }],
  },
  {
    id: "nodejs",
    name: "Node.js & Express.js",
    category: "frameworks",
    categoryLabel: "Backend & API",
    badge: "RESTful Banking API",
    iconType: "fa",
    faIcon: faNodeJs,
    description:
      "Architected backend REST APIs with Express.js for Wildcat Credit Union, incorporating account security lockdown logic, password encryption, and MySQL transactions.",
    projects: [{ name: "Wildcat Credit Union", target: "projects" }],
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "frameworks",
    categoryLabel: "CSS Framework",
    badge: "Zero-Inbox UI",
    iconType: "custom",
    render: TailwindIcon,
    description:
      "Engineered modern responsive user interfaces and dark-mode dashboards with Tailwind CSS for FirstPass and financial data analytics platforms.",
    projects: [
      { name: "FirstPass", target: "projects" },
      { name: "Financial Data App", target: "projects" },
    ],
  },

  // ==========================================
  // 4. CLOUD, DEVOPS & TOOLS
  // ==========================================
  {
    id: "docker",
    name: "Docker",
    category: "cloud",
    categoryLabel: "Containerization",
    badge: "Reproducible Envs",
    iconType: "fa",
    faIcon: faDocker,
    description:
      "Containerized multi-tier web applications into decoupled microservice containers across J.A.K.E. Weather, Fitness Tracker, and Wildcat Credit Union.",
    projects: [
      { name: "J.A.K.E. Weather", target: "projects" },
      { name: "Fitness Tracker", target: "projects" },
      { name: "Wildcat Credit Union", target: "projects" },
    ],
  },
  {
    id: "aws",
    name: "AWS (Amazon Web Services)",
    category: "cloud",
    categoryLabel: "Cloud Platform",
    badge: "AWS RDS MySQL",
    iconType: "fa",
    faIcon: faAws,
    description:
      "Hosted production relational databases using AWS RDS MySQL for the Fitness Tracker application, managing secure credential environments and automated cloud backups.",
    projects: [{ name: "Fitness Tracker", target: "projects" }],
  },
  {
    id: "azure",
    name: "Microsoft Azure",
    category: "cloud",
    categoryLabel: "Cloud Platform",
    badge: "Serverless Automation",
    iconType: "custom",
    render: AzureIcon,
    description:
      "Engineered an Azure Function serverless automation solution at Nomms that cut user-facing latency by 98%. Performed cloud schema migrations and monitored telemetry.",
    projects: [{ name: "Nomms Internship", target: "experience" }],
  },
  {
    id: "linux",
    name: "Linux (Ubuntu & Kali)",
    category: "cloud",
    categoryLabel: "Operating Systems",
    badge: "Security & Edge",
    iconType: "fa",
    faIcon: faLinux,
    description:
      "Daily command-line mastery across Ubuntu servers, Kali Linux VMs for MITRE ATT&CK cybersecurity research, and headless Raspberry Pi 5 background daemons.",
    projects: [
      { name: "CWU Research", target: "experience" },
      { name: "FirstPass", target: "projects" },
      { name: "TabiTime", target: "projects" },
    ],
  },
  {
    id: "git",
    name: "Git & GitHub",
    category: "cloud",
    categoryLabel: "Version Control",
    badge: "Team Collaboration",
    iconType: "fa",
    faIcon: faGitAlt,
    description:
      "Directed team source control as Capstone Lead for 6 engineers. Managed Git workflows, branching strategies, automated GitHub Pages pipelines, and open-source contributions.",
    projects: [
      { name: "CS Study Cat Lead", target: "projects" },
      { name: "CWU Cybersecurity Repo", target: "experience" },
    ],
  },
];

const categories = [
  { id: "all", label: "All Skills", icon: faLayerGroup },
  { id: "languages", label: "Languages", icon: faCode },
  { id: "databases", label: "Databases", icon: faDatabase },
  { id: "frameworks", label: "Libraries & Frameworks", icon: faLaptopCode },
  { id: "cloud", label: "Cloud & DevOps", icon: faCloud },
];



function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const scrollToTarget = (e, targetSectionId) => {
    e.preventDefault();
    const section = document.getElementById(targetSectionId);
    const navHeight = 70;
    if (section) {
      const yOffset = -navHeight;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  const renderIcon = (skill) => {
    if (skill.iconType === "custom" && skill.render) {
      const CustomIcon = skill.render;
      return <CustomIcon />;
    }
    return <FontAwesomeIcon icon={skill.faIcon} className="skill-fa-icon" />;
  };

  return (
    <div className="skills-container" id="skills">
      {/* Section Header */}
      <div className="skills-header">
        <span className="section-eyebrow">TECHNICAL ARSENAL</span>
        <h2>Skills & Technologies</h2>
        <p className="section-subtitle">
          A comprehensive engineering toolkit verified across enterprise
          telemetry at AT&T Labs, cloud engineering, cybersecurity research, and
          full-stack distributed systems.
        </p>
      </div>

      {/* Filter Category Tabs */}
      <div className="skills-filter-tabs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`skills-tab-btn ${
              activeCategory === cat.id ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat.id)}
          >
            <FontAwesomeIcon icon={cat.icon} className="tab-icon" />
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid">
        {filteredSkills.map((skill) => (
          <div key={skill.id} className="skill-card" id={skill.id}>
            {/* Card Header: Icon + Name + Badge */}
            <div className="skill-card-header">
              <div className="service-icon" id={`icon-${skill.id}`}>
                {renderIcon(skill)}
              </div>
              <div className="skill-title-block">
                <span className="skill-cat-pill">{skill.categoryLabel}</span>
                <h3 className="skill-name">{skill.name}</h3>
                {skill.badge && (
                  <span className="skill-badge">{skill.badge}</span>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="skill-desc">{skill.description}</p>

            {/* Associated Projects Links */}
            <div className="skill-projects-box">
              <span className="skill-applied-label">Applied in:</span>
              <div className="skill-project-chips">
                {skill.projects.map((proj, pIdx) => (
                  <span
                    key={pIdx}
                    className="skill-project-chip"
                    onClick={(e) => scrollToTarget(e, proj.target)}
                    title={`Scroll to ${proj.name}`}
                  >
                    {proj.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
