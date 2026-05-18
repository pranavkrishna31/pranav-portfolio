import "./App.css";

export default function App() {
const projects = [
  {
    title:
      "SHOPZILLA — MERN Stack E-Commerce Platform",

    desc:
      "Full-stack MERN e-commerce platform focused on scalable backend systems, optimized APIs, authentication workflows, and performance-driven architecture.",

    status: "Live Project - Internship",

    live: "https://shopzillapranavkrishna31.netlify.app/",

    architecture: "/shopzilla/Shopzilla_InterviewPrep.html",

    github: "https://github.com/pranavkrishna31/SHOPZILLA31.git",

    liveBadge: true,
  },

  {
    title:
      "Autonomous Vehicle Security — Data Poisoning Threats to Self-Driving Systems",

    desc:
      "Machine learning driven autonomous vehicle security pipeline focused on poisoning attacks, anomaly detection, adversarial defense systems, and secure perception validation.",

    status: "Capstone Research Project",

    architecture: "/avs/avs_interview_prep.html",

    github: "https://github.com/pranavkrishna31/AV-Security-Data-Poisoning.git",

    liveBadge: true,
  },

  {
    title:
      "PageForge - AI Based Book Demand Predictor(Supply Chain Management System)",

    desc:
      "Analytics and machine learning based recommendation and demand prediction platform using ranking systems and evaluation metrics.",

    status: "Architecture Coming Soon",

    live: "https://pageforge-bdp.onrender.com",

    architecture: "/aibdp/pageforge_Interview_prep.html",

    github: "https://github.com/pranavkrishna31/PageForge-BDP.git",

    liveBadge: true,
  },
];
  const skills = [
    {
      name: "Java",

      desc:
        "Primary language for backend systems, DSA, and object-oriented programming.",
    },

    {
      name: "Python",

      desc:
        "Used in machine learning systems, analytics workflows, and AI-based applications.",
    },

    {
      name: "C",

      desc:
        "Programming fundamentals, memory concepts, and low-level logic building.",
    },

    {
      name: "React",

      desc:
        "Frontend framework used in SHOPZILLA and responsive interfaces.",
    },

    {
      name: "Node.js",

      desc:
        "Backend runtime environment for scalable APIs and services.",
    },

    {
      name: "MongoDB",

      desc:
        "Database architecture used in MERN applications.",
    },

    {
      name: "Machine Learning",

      desc:
        "Applied in autonomous vehicle security and demand prediction systems.",
    },

    {
      name: "Analytics",

      desc:
        "Used in KPI analysis and recommendation workflows.",
    },

    {
      name: "MySQL",

      desc:
        "Relational database systems and backend integration (MySQL Workbench).",
    },

    {
      name: "REST APIs",

      desc:
        "API integrations and backend communication systems.",
    },

    {
      name: "JWT Authentication",

      desc:
        "Authentication and authorization workflows.",
    },

    {
      name: "Spring Boot",

      desc:
        "Backend framework for scalable enterprise Java systems.",
    },

    {
      name: "AWS Fundamentals",

      desc:
        "Currently learning cloud infrastructure and deployment fundamentals.",
    },

    {
      name: "Power BI",

      desc:
        "Currently learning dashboards and visualization systems.",
    },

    {
      name: "Rust",

      desc:
        "Basic systems programming familiarity and syntax exploration.",
    },

    {
      name: "C++",

      desc:
        "Programming familiarity and syntax exploration.",
    },

    {
      name: "MATLAB",

      desc:
        "Explored independently for computational experimentation.",
    },
  ];

  return (
    <div className="app">
      {/* NAVBAR */}

      <nav className="navbar-custom">
        <div className="container-fluid">
          <h1>KONDAPALLI PRANAV KRISHNA</h1>
        </div>
      </nav>

      {/* HERO */}

      <section className="hero-section">
        <div className="container-fluid hero-container">
          <p className="hero-tag">
            BACKEND DEVELOPMENT • ML • ANALYTICS
          </p>

          <h1 className="hero-title">
            Building
            <br />
            <span>digital</span>
            <br />
            systems.
          </h1>

          <p className="hero-desc">
            Computer Science Engineering student
            focused on scalable backend
            engineering, machine learning systems,
            analytics, and security-oriented
            applications.
          </p>

          <div className="hero-buttons">
            <a
              href="/resume.pdf"
              target="_blank"
              className="secondary-btn"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* PROJECTS */}

      <section
        className="projects-section"
        id="projects"
      >
        <div className="container-fluid">
          <h2 className="section-title">
            Featured Projects
          </h2>

          <div className="row g-4">
            {projects.map((project, index) => (
              <div
                className="col-12 col-lg-4"
                key={index}
              >
                <div className="project-card">
                  <p className="project-status">
                    {project.status}
                  </p>

<h3 className="project-title">
  {project.title}

  {project.liveBadge && (
    <span className="live-indicator-title">
      <span className="live-dot"></span>
    </span>
  )}
</h3>
                  <p className="project-desc">
                    {project.desc}
                  </p>

<div className="project-buttons">
  {project.live && (
    <a
      href={project.live}
      target="_blank"
      className="primary-btn"
    >
      Live Web
    </a>
  )}

  {project.architecture && (
    <a
      href={project.architecture}
      target="_blank"
      className="secondary-btn"
    >
      Architecture
    </a>
  )}

  <a
    href={project.github}
    target="_blank"
    className="secondary-btn"
  >
    GitHub Repository
  </a>
</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section className="skills-section">
        <div className="container-fluid">
          <h2 className="section-title">
            Skills & Technologies
          </h2>

          <div className="skills-stack">
            {skills.map((skill, index) => (
              <div
                className="skill-card"
                key={index}
              >
                <div className="row align-items-center">
                  <div className="col-12 col-lg-3">
                    <h3>{skill.name}</h3>
                  </div>

                  <div className="col-12 col-lg-9">
                    <p>{skill.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="contact-section">
        <div className="container-fluid">
          <div className="contact-row">
            <h2 className="section-title contact-title">
              Connect
            </h2>

            <div className="contact-buttons">
              <a
                href="mailto:kpranavk31@gmail.com"
                className="contact-btn"
              >
                <i className="bi bi-envelope-fill"></i>
                Email
              </a>

              <a
                href="https://linkedin.com/in/kondapalli-pranav-krishna-496494249"
                target="_blank"
                className="contact-btn"
              >
                <i className="bi bi-linkedin"></i>
                LinkedIn
              </a>

              <a
                href="https://github.com/pranavkrishna31"
                target="_blank"
                className="contact-btn"
              >
                <i className="bi bi-github"></i>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="footer">
        <p>
          Designed & Developed by Kondapalli
          Pranav Krishna
        </p>
      </footer>
    </div>
  );
}