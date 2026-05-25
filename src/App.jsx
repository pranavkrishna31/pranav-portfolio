import "./App.css";

import { motion } from "framer-motion";

import { useState } from "react";

import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom"; 

import {
  Routes,
  Route,
  Link,
} from "react-router-dom";

import HirePage from "./pages/HirePage";
import BuildPage from "./pages/BuildPage";

export default function App() {
const projects = [
  {
    title:
      "SHOPZILLA — MERN Stack E-Commerce Platform",

    desc:
      "Full-stack MERN e-commerce platform focused on scalable backend systems, optimized APIs, authentication workflows, and performance-driven architecture.",

    status: "Live Project - Internship",

    live:
      "https://shopzillapranavkrishna31.netlify.app/",

    architecture:
      "/shopzilla/Shopzilla_Architecture.html",

    github:
      "https://github.com/pranavkrishna31/SHOPZILLA31.git",

    liveBadge: true,

    stack: [
      "React",
      "Bootstrap",
      "JavaScript",
      "HTML",
      "CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "bcryptjs",
      "REST API",
      "NodeCache",
      "Postman",
      "Lighthouse",
      "Netlify",
      "Render",
      "GitHub",
    ],
  },

  {
    title:
      "Autonomous Vehicle Security — Data Poisoning Threats to Self-Driving Systems",

    desc:
      "Machine learning driven autonomous vehicle security pipeline focused on poisoning attacks, anomaly detection, adversarial defense systems, and secure perception validation.",

    status: "Capstone Research Project",

    architecture:
      "/avs/avs_Architecture.html",

    github:
      "https://github.com/pranavkrishna31/AV-Security-Data-Poisoning.git",

    liveBadge: true,

    stack: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "SciPy",
      "YOLOv8",
      "ResNet-50",
      "DeepLab",
      "CARLA",
      "GTSRB Dataset",
      "KITTI",
      "nuScenes",
      "Grad-CAM",
    ],
  },

  {
    title:
      "PageForge - AI Based Book Demand Predictor(Supply Chain Management System)",

    desc:
      "Analytics and machine learning based recommendation and demand prediction platform using ranking systems and evaluation metrics.",

    status:
      "Architecture Coming Soon",

    live:
      "https://pageforge-bdp.onrender.com",

    architecture:
      "/aibdp/pageforge_Architecture.html",

    github:
      "https://github.com/pranavkrishna31/PageForge-BDP.git",

    liveBadge: true,

    stack: [
      "Python",
      "Flask",
      "MongoDB Atlas",
      "scikit-learn",
      "pymongo",
      "TF-IDF",
    ],
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

  const [terminalInput, setTerminalInput] =
  useState("");
  
  const [terminalOutput, setTerminalOutput] =
  useState(null);



const [hireForm, setHireForm] = useState({
  name: "",
  company_name: "",
  email: "",
  role_title: "",
  message: "",
});

const handleHireChange = (e) => {

  setHireForm({
    ...hireForm,
    [e.target.name]: e.target.value,
  });

};

const submitHireForm = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch(
      "http://localhost:5000/hire",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(hireForm),
      }
    );

    const data = await response.json();

toast.success(data.message);

  } catch (error) {

    console.log(error);

toast.error(
  "Something went wrong."
);

  }

};

const terminalData = {

  shopzilla: {
    title:
      "MERN commerce infrastructure engineered for scalable API workflows.",

    details: [

      "→ Reduced average backend response latency to ~245ms after MongoDB query tuning + caching layer integration.",

      "→ Stress-tested JWT authentication pipelines across 100+ sequential login iterations under simulated production load.",

      "→ Improved frontend rendering efficiency using lazy loading + Lighthouse optimization workflows (FCP ~0.6s | LCP ~0.9s).",

      "→ Architected REST-driven commerce flows using React, Express.js, MongoDB Atlas, and Node.js deployment pipelines.",

      "→ Integrated secure RBAC-oriented authentication workflows using bcrypt hashing + JWT session validation.",

      "→ Deployed distributed frontend/backend architecture using Netlify + Render production environments.",

      "→ Built scalable CRUD inventory pipelines optimized for future payment gateway + order lifecycle integration."

    ]
  },

  avs: {
    title:
      "Autonomous vehicle defense research pipeline against adversarial data poisoning threats.",

    details: [

      "→ Simulated high-risk poisoning attacks including label flipping, backdoor injection, adversarial patches, GPS spoofing, and LiDAR manipulation.",

      "→ Increased malicious input detection rate from 15% to nearly 80% using layered anomaly detection and defense orchestration.",

      "→ Reduced autonomous system safety violation probability from 95% to 6.7% during CARLA simulation validation.",

      "→ Engineered multi-stage perception defense workflows using Isolation Forest, STRIP, Neural Cleanse, and PGD hardening strategies.",

      "→ Validated real-time autonomous perception stability using CARLA simulator-based fail-safe decision pipelines.",

      "→ Built secure computer vision workflows using YOLOv8, ResNet-50, DeepLab, and PyTorch inference systems.",

      "→ Evaluated attack resilience using precision, recall, F1-score, ASR, mAP, and false-positive monitoring metrics."

    ]
  },

  pageforge: {
    title:
      "AI-driven recommendation and demand analytics engine for intelligent supply-chain prediction.",

    details: [

      "→ Engineered TF-IDF + cosine similarity recommendation architecture for personalized book discovery pipelines.",

      "→ Built behavioral ranking systems using interaction signals such as purchases, reviews, carts, and user browsing activity.",

      "→ Designed recommendation scoring workflows optimized using Precision@K, Recall@K, CTR, and engagement analytics.",

      "→ Integrated Flask-driven recommendation services with MongoDB interaction tracking pipelines.",

      "→ Developed scalable preprocessing workflows using scikit-learn vectorization + pymongo-based analytics operations.",

      "→ Structured dynamic recommendation generation pipelines capable of real-time personalization delivery.",

      "→ Focused system design around scalable recommendation infrastructure rather than static keyword matching."

    ]
  }

};

const [pageLoading, setPageLoading] =
useState(false);

const navigate = useNavigate();

const handleNavigation = (path) => {

  setPageLoading(true);

  setTimeout(() => {

    navigate(path);

    setPageLoading(false);

  }, 1200);

};

return (

  <Routes>

    <Route
      path="/"
      element={

        <div className="app premium-app">
{
  pageLoading && (

    <div className="global-loader">

      <div className="loader-ring"></div>

      <h2>
        Initializing Experience
      </h2>

    </div>

  )
}
          {
  pageLoading && (

    <div className="global-loader">

      <div className="loader-ring"></div>

      <h2>
        Initializing Experience
      </h2>

    </div>

  )
}
      <div className="noise"></div>

      <div className="orb orb-1"></div>

      <div className="orb orb-2"></div>

      <div className="orb orb-3"></div>

      {/* NAVBAR */}

      <nav className="navbar-custom">
        <div className="container-fluid">
          <h1>
            KONDAPALLI PRANAV KRISHNA
          </h1>
        </div>
      </nav>

{/* HERO */}

<section className="hero-section">
  <div className="container-fluid hero-container">
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <p className="hero-tag">
        BACKEND DEVELOPMENT • ML •
        ANALYTICS
      </p>

      <motion.h1
        className="hero-title"
        initial={{
          opacity: 0,
          y: 80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        Building
        <br />
        <span>digital</span>
        <br />
        systems.
      </motion.h1>

      <p className="hero-desc">
        Computer Science Engineering
        student focused on scalable
        backend engineering, machine
        learning systems, analytics,
        and security-oriented
        applications.
      </p>

     <button
  className="secondary-btn"

  onClick={() => {

    setPageLoading(true);

    setTimeout(() => {

      window.open(
        "/resume.pdf",
        "_blank"
      );

      setPageLoading(false);

    }, 1200);

  }}
>
  View Resume
</button>

    </motion.div>

    {/* FLOATING SHOWCASE */}

    <div className="floating-showcase">


      {/* CODE CARD 1 */}

      <motion.div
        className="floating-code code-card-1"

        whileInView={{
  y: -10,
}}

whileHover={{
  rotateY: 8,
  rotateX: -4,
  scale: 1.03,
}}

        animate={{
  y: [0, -18, 0],

  rotate: [-5, -3, -5],

  x: [0, 8, 0],
}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="code-header">
          MERN PRODUCT API
        </div>

        <pre>
    {`router.post('/', async (req, res) => {
    try {
    const {
      name,
      price,
      description,
      image,
      countInStock
    } = req.body;

    if (
      !name ||
      !price ||
      !description ||
      !image
    ) {
      return res.status(400).json({
        message:
          'All fields are required'
      });
    }

    const createdProduct =
      await product.save();

    res.status(201).json(
      createdProduct
    );
    } catch (error) {
    res.status(500).json({
      message: error.message
    });}});`}
</pre>
      </motion.div>

      {/* CODE CARD 2 */}

      <motion.div
        className="floating-code code-card-2"

        whileInView={{
  y: -10,
}}

whileHover={{
  rotateY: 8,
  rotateX: -4,
  scale: 1.03,
}}

        animate={{
  y: [0, 16, 0],

  rotate: [5, 3, 5],

  x: [0, -8, 0],
}}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="code-header">
          ADVERSARIAL ML SECURITY
        </div>

      <pre>
    {`def execute_attack(
    self,
    name: str,
    *args,
    **kwargs
     ) -> Any:

    """
    Execute a specific attack.
    """
    attack = self.get_attack(name)

    if attack:
        return attack.generate(*args,**kwargs)

    logger.error(f"Attack {name} not found.")

    return None
    
    def list_attacks(self):
    return [
        attack.name
        for attack
        in self.attacks
    ]`}
</pre>
      </motion.div>

      {/* CODE CARD 3 */}

      <motion.div
        className="floating-code code-card-3"

        whileInView={{
  y: -10,
}}

whileHover={{
  rotateY: 8,
  rotateX: -4,
  scale: 1.03,
}}

        animate={{
  y: [0, -14, 0],

  rotate: [-2, 1, -2],

  scale: [1, 1.02, 1],
}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="code-header">
          AI DEMAND PREDICTION
        </div>

        <pre>
{`
# TF-IDF VECTORIZATION

tfidf = TfidfVectorizer(
    stop_words='english'
)

tfidf_matrix =
    tfidf.fit_transform(corpus)

# COSINE SIMILARITY

similarity_matrix =
    cosine_similarity(
        tfidf_matrix,
        tfidf_matrix
)
recommended_books =
    similarity_matrix.argsort()[
        ::-1
    ]`}
</pre>
      </motion.div>
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
            {projects.map(
              (project, index) => (
                <div
                  className="col-12 col-lg-4"
                  key={index}
                >
                  <motion.div
                    className="project-card premium-card"
                    whileHover={{
                      y: -18,
                      rotateX: 6,
                      rotateY: -6,
                      scale: 1.02,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                    }}
                  >
                    <div className="project-content">

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
        href={
          project.live
        }
        target="_blank"
        className="primary-btn"
      >
        Live Web
      </a>
    )}

    {project.architecture && (
      <a
        href={
          project.architecture
        }
        target="_blank"
        className="secondary-btn"
      >
        Architecture
      </a>
    )}

    <a
      href={
        project.github
      }
      target="_blank"
      className="secondary-btn"
    >
      GitHub Repository
    </a>

  </div>

</div>

<div className="tech-stack">
  {project.stack.map(
    (tech, techIndex) => (
      <span
        key={techIndex}
        className="tech-chip"
      >
        {tech}
      </span>
    )
  )}
</div>
                    
                  </motion.div>
                </div>
              )
            )}
          </div>
        </div>
      </section>


      {/* BUILD / HIRE */}

<section className="build-section">

  <div className="container-fluid">

    <h2 className="section-title">
      Opportunities
    </h2>

    <div className="build-grid">

      {/* HIRE ME */}


      <motion.div
        className="build-card"
        whileHover={{
          y: -10,
          rotateX: 4,
          rotateY: -4,
        }}
      >

        <div className="build-glow"></div>

        <p className="build-label">
          HIRE ME
        </p>

        <h3>
          Backend Engineering,
          ML Systems,
          Full-Stack Infrastructure
        </h3>

        <p className="build-desc">
          Available for internships,
          full-time backend,
          full-stack,
          and ML engineering roles focused on scalable systems.
        </p>

<button
  className="build-btn"

  onClick={() =>
    handleNavigation("/hire")
  }
>
  Hire Me
</button>

      </motion.div>

      {/* BUILD TOGETHER */}

      <motion.div
        className="build-card"
        whileHover={{
          y: -10,
          rotateX: 4,
          rotateY: 4,
        }}
      >

        <div className="build-glow"></div>

        <p className="build-label">
          BUILD TOGETHER
        </p>

        <h3>
          Startups,
          Scalable Systems,
          Engineering Experiments
        </h3>

        <p className="build-desc">
        Interested in collaborating on
        scalable backend systems,
        recommendation platforms,
        analytics-driven products,
        or infrastructure-oriented applications.
      </p>

<button
  className="build-btn secondary-build-btn"
  onClick={() =>
    handleNavigation("/build")
  }
>
  Let's Build
</button>
      
      </motion.div>

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
            {skills.map(
              (skill, index) => (
                <div
                  className="skill-card"
                  key={index}
                >
                  <div className="row align-items-center">
                    <div className="col-12 col-lg-3">
                      <h3>
                        {skill.name}
                      </h3>
                    </div>

                    <div className="col-12 col-lg-9">
                      <p>
                        {skill.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

{/* TERMINAL */}

<section className="terminal-section">

  <div className="container-fluid">

    <h2 className="section-title">
      Engineering Terminal
    </h2>

    <div className="terminal-window">

      <div className="terminal-topbar">

        <span></span>
        <span></span>
        <span></span>

      </div>

      <div className="terminal-body">

       <div className="terminal-console">

  <div className="terminal-output">

<p className="terminal-command">
  root@portfolio:~$
  interactive_console_initialized
</p>


    <p className="terminal-command">
      root@portfolio:~$
      {terminalInput}
    </p>

    <br />
     

 {!terminalOutput && (
  <div className="terminal-idle">

    <p className="idle-glow">
      INTERACTIVE ENGINEERING CONSOLE
    </p>

    <h3 className="idle-title">
      Explore scalable backend systems,
      adversarial ML defense pipelines,
      recommendation architectures,
      and production engineering workflows.
    </h3>

    <div className="idle-box">

      <p>
        ENTER PROJECT ID
      </p>

      <div className="idle-options">

        <span>[ 1 ] SHOPZILLA</span>

        <span>[ 2 ] AVS CAPSTONE</span>

        <span>[ 3 ] PAGEFORGE</span>

      </div>

    </div>

  </div>

)}

    {terminalOutput && (
    <motion.div
      key={terminalOutput.title}
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
    >

      <h3 className="terminal-project-title">
        {
        terminalOutput.title
        }
      </h3>

      <div className="terminal-metrics">

  {terminalOutput.details.map(
    (item, index) => (

      <div
        key={index}
        className="terminal-line"
      >

        <span>
          →
        </span>

        {item}

      </div>

    )
  )}

</div>

    </motion.div>
)}

  </div>

  <div className="terminal-input-row">


<span className="terminal-prefix">
  root@portfolio:~$

  <span className="terminal-cursor">
    _
  </span>
</span>

<input
  type="text"
  maxLength="1"
  className="terminal-input"
  placeholder="Enter 1 / 2 / 3"
  value={terminalInput}
  onChange={(e) => {

    const value = e.target.value;

    setTerminalInput(value);

    if (value === "1") {
      setTerminalOutput(
        terminalData.shopzilla
      );
    }

    else if (value === "2") {
      setTerminalOutput(
        terminalData.avs
      );
    }

    else if (value === "3") {
      setTerminalOutput(
        terminalData.pageforge
      );
    }

else if (value === "") {
  setTerminalOutput(null);
}

else {

  setTerminalOutput({
    title: "INVALID INPUT DETECTED",

    details: [
      "→ Invalid project selection.",
      "→ Please enter 1, 2, or 3.",
      "→ Accepted inputs: SHOPZILLA / AVS / PAGEFORGE."
    ]
  });

}
  }}
/>

  </div>

</div>

  

      </div>

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
          Designed & Developed by
          Kondapalli Pranav Krishna
        </p>
      </footer>
        </div>

      }
    />

    <Route
      path="/hire"
      element={<HirePage />}
    />
<Route
  path="/build"
  element={<BuildPage />}
/>
  </Routes>

);
}