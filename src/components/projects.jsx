import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faXmark,
  faPlay,
  faArrowUpRightFromSquare,
  faCircleNotch,
  faAnglesDown,
  faStar,
  faLaptopCode,
  faNetworkWired,
  faBolt,
  faLayerGroup,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import TechPieChart from "./techPieChart";
import WordCloudForm from "./wordCloudForm";

// Project catalog with enriched metadata
const projects = [
  {
    id: "cs-study-cat",
    title: "CS Study Cat",
    tag: "Senior Capstone & AI",
    categories: ["featured", "fullstack", "tools"],
    featured: true,
    summary:
      "Full-stack .NET 9 Blazor educational platform built with C# Web API, SQLite, and Google Gemini Flash LLM via Context-Augmented Generation (CAG). Directed team of 6 engineers.",
    images: [
      { src: "cs-study-cat-black.png", desc: "CS Study Cat Dashboard" },
      { src: "cs-study-cat-logo.png", desc: "Logo" },
    ],
    demo: "cs-study-cat-demo-hq.mp4",
    description: (
      <>
        This <b>.NET Blazor</b> educational platform, built with a{" "}
        <b>C# Web API</b> and <b>SQLite</b> via <b>Entity Framework Core</b>,
        was developed as a senior capstone following the <b>SDLC</b> and{" "}
        <b>Agile Methodology</b>. As <b>Project Manager</b> and{" "}
        <b>Team Lead</b>, I directed a team of six through the full software
        lifecycle, managing all SRS/SDD documentation and overseeing the N-tier
        architecture for cross-platform deployment. Key features include
        AI-powered tutoring, automated flashcards, and diagnostic quizzes, all
        grounded in CWU Computer Science syllabi. We successfully integrated the{" "}
        <b>Google Gemini 3 Flash LLM</b> using{" "}
        <b>Context-Augmented Generation (CAG)</b> to ensure curriculum-accurate
        responses and strict academic integrity. This project validated my
        skills in technical leadership, sophisticated LLM orchestration, and the
        delivery of secure, AI-driven full-stack systems.
      </>
    ),
    tech: [
      { id: 0, label: "C#", value: 89.9 },
      { id: 2, label: "HTML", value: 6.2 },
      { id: 3, label: "CSS", value: 3.9 },
    ],
    link: "https://github.com/nood-leog/CSLLMCapstone",
    currDev: false,
    wordCloudInteractive: false,
  },
  {
    id: "first-pass",
    title: "FirstPass - SWE Job Discovery Engine",
    tag: "Edge Engine & Automation",
    categories: ["featured", "systems", "tools"],
    featured: true,
    summary:
      "Autonomous edge scraper platform on Raspberry Pi 5 eliminating job application latency with Python, Flask, SQLite, multi-process scrapers, pygame audio alerts, and Tailwind CSS zero-inbox dashboard.",
    images: [{ src: "FirstPassLogo.png", desc: "FirstPass Engine" }],
    demo: "FirstPassDemo.mp4",
    description: (
      <>
        A high-frequency job discovery engine engineered for the{" "}
        <b>Raspberry Pi 5</b> to provide a competitive advantage in the software
        engineering job market through real-time data acquisition and
        multi-process automation. Developed as a full-stack solution using{" "}
        <b>Python</b>, <b>Flask</b>, and <b>SQLite</b>, the platform eliminates
        application latency by monitoring job boards in the background and
        instantly alerting the user via randomized audio notifications the
        moment a new role is posted. The project features a decoupled
        architecture where a persistent scraper engine manages high-intensity
        data polling and <b>pygame-based</b> audio alerts, while a responsive{" "}
        <b>Tailwind CSS</b> dashboard provides a "zero-inbox" management system
        for new, saved, and deleted roles. Optimizing the application for the
        Raspberry Pi 5 deepened my expertise in developing resilient, low-power
        internal tooling and managing asynchronous background processes to solve
        real-world productivity bottlenecks during a professional job hunt.
      </>
    ),
    tech: [
      { id: 0, label: "Python", value: 44.7 },
      { id: 1, label: "JavaScript", value: 31.3 },
      { id: 2, label: "TailwindCSS", value: 16.0 },
      { id: 3, label: "HTML", value: 8.0 },
    ],
    link: "https://github.com/rysealex/first-pass",
    currDev: false,
    wordCloudInteractive: false,
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    tag: "Full-Stack & Cloud",
    categories: ["featured", "fullstack"],
    featured: true,
    summary:
      "Containerized React and Python Flask fitness platform with AWS RDS MySQL database, JWT authentication, and React Context API state management reducing redundant API fetches by 80%.",
    images: [
      { src: "fitness-tracker-logo.png", desc: "Fitness Tracker Logo" },
      { src: "fitness-tracker-small.png", desc: "Dashboard Preview" },
    ],
    demo: "FitnessTrackerDemo.mp4",
    description: (
      <>
        This full-stack fitness tracker web application, a personal project
        built with a <b>React</b> frontend, a <b>Python Flask</b> backend, and a{" "}
        <b>MySQL</b> database on <b>AWS RDS</b>, was designed with the core
        functionalities of user management, calorie counting, workout logging,
        and goal tracking. To optimize application performance, I implemented a{" "}
        <b>React Context API</b> to reduce redundant data fetches by <b>80%</b>{" "}
        and a <b>JSON Web Token (JWT)</b> authentication system to secure all
        backend requests. The entire application was containerized using{" "}
        <b>Docker</b> for streamlined deployment. This project enhanced my
        skills in full-stack development, database management, and implementing
        secure, performant web applications.
      </>
    ),
    tech: [
      { id: 0, label: "React", value: 62.4 },
      { id: 2, label: "Flask", value: 27.5 },
      { id: 3, label: "CSS", value: 8.1 },
      { id: 4, label: "Docker", value: 1.2 },
      { id: 5, label: "AWS", value: 0.8 },
    ],
    link: "https://github.com/rysealex/fitness-tracker",
    currDev: false,
    wordCloudInteractive: false,
  },
  {
    id: "tabi-time",
    title: "Tabi旅Time - Personal Travel Nexus",
    tag: "Distributed Systems & HCI",
    categories: ["featured", "systems"],
    featured: true,
    summary:
      "Edge-computing travel dashboard for Raspberry Pi 5 with Tailscale private mesh, Syncthing real-time P2P media pipeline, ExifTool metadata extraction, and ergonomic Leaflet.js journal.",
    images: [{ src: "tabi-time.png", desc: "TabiTime Dashboard" }],
    demo: "",
    description: (
      <>
        An edge-computing travel dashboard engineered for the{" "}
        <b>Raspberry Pi 5</b> to automate high-fidelity journey documentation
        across Japan. Built with <b>Python (Flask)</b> and <b>Tailscale</b>, the
        platform facilitates a secure, private <b>P2P pipeline</b> using{" "}
        <b>Syncthing</b> to beam media from iOS devices to a US-based home
        server in real-time. The system leverages an event-driven{" "}
        <b>Watcher Service</b> and <b>ExifTool</b> to extract GPS metadata from
        HEIC containers, populating a dynamic <b>Leaflet.js</b> journal and a
        touch-optimized photo gallery. I prioritized Human-Computer Interaction
        (HCI) by designing an ergonomic mobile lightbox with "Thumb Zone" button
        placement and a NihonGo! language feature for JLPT N5 preparation. This
        project demonstrates my ability to architect complex Distributed Systems
        that solve real-world data fragmentation while maintaining strict Data
        Sovereignty through a localized mesh network.
      </>
    ),
    tech: [
      { id: 0, label: "HTML", value: 46.4 },
      { id: 2, label: "JavaScript", value: 32.3 },
      { id: 3, label: "Python", value: 12.6 },
      { id: 4, label: "TailwindCSS", value: 8.7 },
    ],
    link: "https://github.com/rysealex/tabi-time",
    currDev: true,
    wordCloudInteractive: false,
  },
  {
    id: "jake-weather",
    title: "J.A.K.E. Weather",
    tag: "Full-Stack & APIs",
    categories: ["fullstack", "tools"],
    featured: false,
    summary:
      "Interactive weather platform built with React, Python Flask, MySQL, and Docker. Integrates Google Maps JavaScript and Open-Meteo APIs for dynamic forecasts and meteorological overlays.",
    images: [{ src: "jake-logo.png", desc: "J.A.K.E. Weather" }],
    demo: "jake-weather-demo.mp4",
    description: (
      <>
        This full-stack weather platform, built with a <b>React</b> frontend,{" "}
        <b>Python Flask</b> backend, and <b>MySQL</b> database, was developed
        following the <b>SDLC</b> and <b>Agile Methodology</b> with thorough
        documentation via Microsoft Visio and Project. As <b>Project Manager</b>{" "}
        and <b>Team Lead</b> for three developers, I was responsible for
        directing team efforts, managing all project documentation, and
        overseeing the entire architecture from code to <b>Docker</b>{" "}
        containerization. Key features include a real-time 7-day forecast,
        secure user authentication, personalized favorite location management,
        and advanced location searching. We successfully integrated multiple
        complex APIs, including <b>Google Maps (Geocoding/Maps JavaScript)</b>{" "}
        and <b>OpenWeather/Open-Meteo</b>, to deliver a dynamic weather map with
        customizable overlays for wind speed, precipitation, and temperature.
        This project significantly enhanced my skills in{" "}
        <b>technical leadership</b>, robust system design, containerized
        deployment, and sophisticated external API integration.
      </>
    ),
    tech: [
      { id: 0, label: "React", value: 64.8 },
      { id: 2, label: "Flask", value: 19.4 },
      { id: 3, label: "CSS", value: 14.4 },
      { id: 4, label: "SQL", value: 1.0 },
      { id: 5, label: "Docker", value: 0.4 },
    ],
    link: "https://github.com/rysealex/jake-weather",
    currDev: false,
    wordCloudInteractive: false,
  },
  {
    id: "wildcat-credit-union",
    title: "Wildcat Credit Union",
    tag: "Banking API & Docker",
    categories: ["fullstack"],
    featured: false,
    summary:
      "Full-stack banking web platform with React, Node.js, Express.js, and MySQL. Implemented password encryption, lockdown logic, fund transactions, and Google Maps ATM Locator.",
    images: [{ src: "wcu-logo.png", desc: "Wildcat Credit Union" }],
    demo: "WCU-Demo-Vid.mp4",
    description: (
      <>
        This full-stack banking web application, built with a <b>React</b>{" "}
        frontend, <b>Node.js/Express.js</b> backend, and <b>MySQL</b> database,
        was developed following the SDLC with thorough documentation via
        Microsoft Visio and Project. As team lead for three developers, I
        oversaw the implementation of <b>Docker</b> for containerization and
        integrated the <b>Google Maps API</b> for an ATM Locator feature,
        enabling users to find Wildcat Credit Union ATMs around Central
        Washington University and get directions. Key features include secure
        user authentication, account creation with password encryption and an
        account lockdown mechanism, fund transfers, and deposit/receive
        functionalities. This project enhanced my skills in modern web
        technologies, team management, and structured development.
      </>
    ),
    tech: [
      { id: 0, label: "React", value: 53.6 },
      { id: 1, label: "Node.js/Express.js", value: 32.3 },
      { id: 2, label: "CSS", value: 9.6 },
      { id: 3, label: "SQL", value: 2.9 },
      { id: 4, label: "Docker", value: 1.6 },
    ],
    link: "https://github.com/rysealex/wildcat-credit-union",
    currDev: false,
    wordCloudInteractive: false,
  },
  {
    id: "word-cloud-generator",
    title: "Word Cloud Generator",
    tag: "Data Visualization",
    categories: ["tools"],
    featured: false,
    summary:
      "Algorithmic text visualization tool using Python and matplotlib, querying Datamuse APIs with spiral geometry layouts and rtree collision bounds. Includes an interactive live generator.",
    images: [{ src: "python.png", desc: "Word Cloud" }],
    demo: "WordCloudGenDemo.mp4",
    description: (
      <>
        This <b>Python</b>-based Word Cloud Generator empowers users to create
        visual representations of text through data visualization and API
        integration. Utilizing <b>matplotlib</b>, the application generates
        customizable word clouds based on a user-provided theme, sourcing
        related words and definitions from the Datamuse and Dictionary APIs. The
        project incorporates a spiral layout for aesthetic appeal and the{" "}
        <b>rtree</b> library for efficient, non-overlapping word placement. An
        interactive hover effect displays word definitions, enhancing the user
        experience. This project deepened my understanding of Python libraries
        for data handling and visualization in the context of building
        interactive command-line tools.
      </>
    ),
    tech: [{ id: 0, label: "Python", value: 100 }],
    link: "https://github.com/rysealex/word-cloud-generator",
    currDev: false,
    wordCloudInteractive: true,
  },
  {
    id: "lzm-landscaping",
    title: "LZM Landscaping LLC",
    tag: "Client Production Site",
    categories: ["fullstack"],
    featured: false,
    summary:
      "High-performance digital storefront engineered with React, TypeScript, and EmailJS. Mobile-first accessible UI with automated GitHub Pages deployment for a local Washington business.",
    images: [{ src: "lzm-dark.png", desc: "LZM Landscaping Site" }],
    demo: "",
    liveLink: "https://lzmlandscapingllc.com",
    description: (
      <>
        Developed a professional-grade web application for a local landscaping
        business, focusing on high-performance delivery and lead generation.
        Built with <b>React</b> and <b>TypeScript</b>, the platform utilizes{" "}
        <b>React Router</b> for seamless client-side navigation and a
        mobile-first UI to ensure accessibility across all devices. I integrated{" "}
        <b>EmailJS</b> to handle secure, serverless form submissions and
        leveraged responsive layouts for a high-impact project gallery. By
        managing the full lifecycle from requirements gathering to automated
        deployment via <b>GitHub Pages</b>, I delivered a robust digital
        storefront that helps the client connect with their community through a
        modern, user-centric interface.
      </>
    ),
    tech: [
      { id: 0, label: "React/TypeScript", value: 51.6 },
      { id: 1, label: "CSS", value: 46.1 },
      { id: 2, label: "HTML", value: 2.3 },
    ],
    link: "https://github.com/rysealex/lzm-landscaping-llc",
    currDev: false,
    wordCloudInteractive: false,
  },
  {
    id: "chat-app",
    title: "Real-Time Android Chat App",
    tag: "Mobile Development",
    categories: ["systems"],
    featured: false,
    summary:
      "Native Android application developed with Java and XML, leveraging Firebase Authentication and Realtime Database for instantaneous peer messaging and scalable cloud synchronization.",
    images: [
      { src: "chat-app-logo2.0.png", desc: "Chat App Logo" },
      { src: "chat-app.png", desc: "Chat UI" },
    ],
    demo: "chat-app-vid.mp4",
    description: (
      <>
        Developed a real-time chat application using <b>Android Studio</b> with{" "}
        <b>Java</b> and <b>XML</b> for the front end. Integrated <b>Firebase</b>{" "}
        to handle user authentication, store user data, and manage real-time
        messaging updates between users. This project gave me hands-on
        experience with mobile app development and working with cloud-based
        backend services for scalable, real-time communication.
      </>
    ),
    tech: [{ id: 0, label: "Java", value: 100 }],
    link: "https://github.com/rysealex/Chat-App",
    currDev: false,
    wordCloudInteractive: false,
  },
  {
    id: "guitar-store",
    title: "Guitar Store MVC",
    tag: "MVC Architecture",
    categories: ["fullstack"],
    featured: false,
    summary:
      "E-commerce web application engineered with PHP, MySQL, JavaScript, and jQuery structured around Model-View-Controller design pattern for product catalog and inventory queries.",
    images: [
      { src: "guitar-store-logo2.0.png", desc: "Guitar Store Logo" },
      { src: "guitar-store.png", desc: "Store UI" },
    ],
    demo: "guitar-store-vid.mp4",
    description: (
      <>
        Created a responsive guitar store web application using{" "}
        <b>JavaScript</b> and <b>jQuery</b>, structured around the
        Model-View-Controller (MVC) design pattern to ensure clean and scalable
        architecture. Developed the back end with <b>PHP</b> and implemented{" "}
        <b>MySQL</b> as the relational database to manage product inventory and
        user data. This project strengthened my understanding of full-stack web
        development, database integration, and dynamic content rendering.
      </>
    ),
    tech: [
      { id: 0, label: "PHP", value: 72.6 },
      { id: 1, label: "JavaScript", value: 12.9 },
      { id: 2, label: "CSS", value: 12.8 },
      { id: 3, label: "SQL", value: 1.7 },
    ],
    link: "https://github.com/rysealex/guitar-store",
    currDev: false,
    wordCloudInteractive: false,
  },
  {
    id: "sets-game",
    title: "Sets Game Recreation",
    tag: "C++ & Desktop GUI",
    categories: ["systems"],
    featured: false,
    summary:
      "Desktop recreation of the classic card game Set using C++, CMake, and Qt for event-driven GUI gameplay, memory pointer management, and combinatorial pattern algorithms.",
    images: [
      { src: "sets-game-canva-logo.png", desc: "Sets Game Logo" },
      { src: "sets-game.png", desc: "Gameplay" },
    ],
    demo: "",
    description: (
      <>
        A recreation of the classic card game <i>Set</i>, developed using{" "}
        <b>C++</b>, <b>CMake</b>, and <b>Qt</b>. This project marks my first
        experience using Qt for game development, introducing me to event-driven
        programming and GUI design in C++. I’m currently working to complete the
        game, focusing on refining the gameplay logic, improving the interface,
        and enhancing the overall user experience. This project has deepened my
        understanding of C++ concepts like pointers and memory management while
        giving me hands-on experience with building interactive desktop
        applications.
      </>
    ),
    tech: [
      { id: 0, label: "C++", value: 92.7 },
      { id: 1, label: "CMake", value: 7.3 },
    ],
    link: "https://github.com/rysealex/sets-game",
    currDev: true,
    wordCloudInteractive: false,
  },
  {
    id: "financial-data-app",
    title: "Financial Data Filtering App",
    tag: "Financial Analytics",
    categories: ["fullstack", "tools"],
    featured: false,
    summary:
      "Client-side financial analysis application built with React and Tailwind CSS. Fetches live annual statements via REST APIs with dynamic sorting, filtering, and responsive metrics tables.",
    images: [
      { src: "fdfa-canva-logo.png", desc: "App Logo" },
      { src: "fdfa.png", desc: "Table UI" },
    ],
    demo: "FDFA-vid.mp4",
    liveLink: "https://rysealex.github.io/financial-data-filtering-app/",
    description: (
      <>
        Built a lightweight financial data filtering application using{" "}
        <b>React</b> and <b>TailwindCSS</b>. The app fetches annual income
        statements for Apple (AAPL) from a real-world financial API—my first
        experience working with a live company data source. It includes features
        to filter and sort data by date, revenue, and net income, with results
        displayed in a dynamic, responsive table. The project is deployed via{" "}
        <a
          href="https://rysealex.github.io/financial-data-filtering-app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>GitHub Pages</b>
        </a>{" "}
        and helped reinforce my skills in API integration, UI design, and
        client-side data manipulation.
      </>
    ),
    tech: [
      { id: 0, label: "React", value: 87.1 },
      { id: 1, label: "HTML", value: 7.8 },
      { id: 2, label: "TailwindCSS", value: 5.1 },
    ],
    link: "https://github.com/rysealex/financial-data-filtering-app",
    currDev: false,
    wordCloudInteractive: false,
  },
];

const filterCategories = [
  { id: "all", label: "All Works", icon: faLayerGroup },
  { id: "featured", label: "Featured", icon: faStar },
  { id: "fullstack", label: "Full-Stack Web", icon: faLaptopCode },
  { id: "systems", label: "Systems & Edge", icon: faNetworkWired },
  { id: "tools", label: "AI & Tools", icon: faBolt },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const videoRef = useRef(null);
  const wordCloudRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => {
        videoRef.current.play();
      }, 500);
    }
  };

  const handleWordCloudScroll = () => {
    if (wordCloudRef.current) {
      wordCloudRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  const handleSliceClick = (label) => {
    console.log(`Skill clicked: ${label}`);
    let targetId = label.toLowerCase();
    switch (targetId) {
      case "css":
      case "html":
        targetId = "javascript";
        break;
      case "c":
      case "cmake":
        targetId = "c++";
        break;
      case "flask":
        targetId = "flask";
        break;
      case "react/typescript":
        targetId = "react";
        break;
      case "c#":
        targetId = "csharp";
        break;
      case "tailwind":
      case "tailwindcss":
        targetId = "tailwind";
        break;
      case "sqlite":
        targetId = "sqlite";
        break;
      case "sql":
        targetId = "sql";
        break;
      default:
        break;
    }
    setSelectedProject(null);
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        const yOffset = -120;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
        const iconEl = document.getElementById(`icon-${targetId}`);
        if (iconEl) {
          setTimeout(() => {
            iconEl.classList.add("skill-pop");
            setTimeout(() => {
              iconEl.classList.remove("skill-pop");
            }, 700);
          }, 600);
        }
      }
    }, 200);
  };

  return (
    <div className="projects-container" id="projects">
      {/* Section Header */}
      <div className="projects-header">
        <span className="section-eyebrow">FEATURED PORTFOLIO</span>
        <h2>Engineering Projects</h2>
        <p className="section-subtitle">
          Production web applications, low-power edge computing systems, AI
          orchestration pipelines, and open-source developer tooling.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="projects-filter-tabs">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            className={`projects-tab-btn ${
              activeFilter === cat.id ? "active" : ""
            }`}
            onClick={() => setActiveFilter(cat.id)}
          >
            <FontAwesomeIcon icon={cat.icon} className="tab-icon" />
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Projects Grid Showcase */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${
              project.featured ? "featured-card" : ""
            }`}
            onClick={() => setSelectedProject(project)}
          >
            {/* Visual Media Header */}
            <div className="project-card-media">
              <div
                className="project-media-bg"
                style={{ backgroundImage: `url(${project.images[0].src})` }}
              />
              <div className="project-media-overlay" />

              {/* Floating Badges */}
              <div className="project-media-top">
                <span className="project-tag-badge">{project.tag}</span>
                {project.currDev && (
                  <span className="project-status-badge dev">
                    <FontAwesomeIcon
                      icon={faCircleNotch}
                      className="status-spin"
                    />
                    <span>Developing</span>
                  </span>
                )}
                {project.liveLink && !project.currDev && (
                  <span className="project-status-badge live">
                    <span className="live-dot" />
                    <span>Live</span>
                  </span>
                )}
                {project.demo && !project.currDev && !project.liveLink && (
                  <span className="project-status-badge demo">
                    <FontAwesomeIcon icon={faPlay} className="mini-play" />
                    <span>Demo</span>
                  </span>
                )}
              </div>
            </div>

            {/* Card Content Body */}
            <div className="project-card-body">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-summary">{project.summary}</p>

              {/* Tech Pills */}
              <div className="project-tech-tags">
                {project.tech.slice(0, 4).map((t, tIdx) => (
                  <span key={tIdx} className="project-tech-tag">
                    {t.label}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="project-tech-tag more">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
            </div>

            {/* Card Footer Actions */}
            <div className="project-card-footer">
              <span className="project-inspect-link">
                <span>View Architecture</span>
                <FontAwesomeIcon icon={faEye} className="inspect-icon" />
              </span>

              <div className="project-card-actions">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn"
                    title="View GitHub Repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-btn live"
                    title="Open Live Website"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Detail Modal */}
      {selectedProject && (
        <div className="modal" onClick={() => setSelectedProject(null)}>
          <div
            className="modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header-bar">
              <div>
                <span className="modal-eyebrow">
                  {selectedProject.tag}
                </span>
                <h2 className="modal-title">{selectedProject.title}</h2>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            {/* Modal Content Bento */}
            <div className="modal-content">
              {/* Left Column: Narrative & Media */}
              <div className="modal-description-col">
                {selectedProject.currDev && (
                  <div className="curr-dev-banner">
                    <FontAwesomeIcon
                      icon={faCircleNotch}
                      className="spinner-icon"
                    />
                    <div>
                      <strong>Active Development in Progress</strong>
                      <p>
                        System architecture, schemas, and core backend services
                        are operational. Interactive live demo in progress.
                      </p>
                    </div>
                  </div>
                )}

                <div className="modal-narrative">
                  <p>{selectedProject.description}</p>
                </div>

                {/* Video Demo */}
                {selectedProject.demo && (
                  <div className="modal-demo-section">
                    <div className="demo-header" onClick={handlePlay}>
                      <FontAwesomeIcon icon={faPlay} className="demo-play-icon" />
                      <span>Video Walkthrough Demo</span>
                      <FontAwesomeIcon icon={faAnglesDown} />
                    </div>
                    <div className="video-wrapper">
                      <video
                        className="demo-video"
                        ref={videoRef}
                        width="100%"
                        controls
                        loop
                      >
                        <source src={selectedProject.demo} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                )}

                {/* Interactive Word Cloud Form */}
                {selectedProject.wordCloudInteractive && (
                  <div className="modal-wordcloud-section">
                    <div
                      className="demo-header"
                      onClick={handleWordCloudScroll}
                    >
                      <FontAwesomeIcon icon={faBolt} className="demo-play-icon" />
                      <span>Interactive Live Generator</span>
                      <FontAwesomeIcon icon={faAnglesDown} />
                    </div>
                    <div ref={wordCloudRef} className="wordcloud-wrapper">
                      <WordCloudForm key="word-cloud-generator-form" />
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Tech Breakdown */}
              <div className="modal-tech-col">
                <div className="modal-tech-card">
                  <h3>Tech Stack Distribution</h3>
                  <div className="chart-box">
                    <TechPieChart
                      data={selectedProject.tech}
                      onSliceClick={handleSliceClick}
                    />
                  </div>
                  <p className="chart-hint">
                    💡 Click any chart slice to jump directly to verified skill
                    metrics in Technical Arsenal.
                  </p>

                  <div className="tech-breakdown-list">
                    {selectedProject.tech.map((item, i) => (
                      <div
                        key={i}
                        className="tech-breakdown-item"
                        onClick={() => handleSliceClick(item.label)}
                        title={`Explore ${item.label} in skills`}
                      >
                        <span className="tech-name">{item.label}</span>
                        <span className="tech-pct">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project External Links Box */}
                <div className="modal-links-card">
                  <h4>Project Links</h4>
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-cta-btn live"
                    >
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                      <span>Open Live Website</span>
                    </a>
                  )}
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-cta-btn github"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                      <span>Explore Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* GitHub Callout Banner */}
      <div className="projects-github-cta">
        <div className="github-cta-glow" />
        <div className="github-cta-content">
          <div className="github-cta-icon-box">
            <FontAwesomeIcon icon={faGithub} />
          </div>
          <div className="github-cta-text">
            <h3>Explore More Repositories</h3>
            <p>
              Dive deeper into 40+ public repositories, telemetry scripts,
              open-source tools, and academic courseware on my GitHub.
            </p>
          </div>
          <a
            href="https://github.com/rysealex"
            className="github-cta-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Visit @rysealex on GitHub</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
