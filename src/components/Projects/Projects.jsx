import { useState } from "react";
import {
  FaFigma,
  FaCode,
  FaRobot,
  FaTimes,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import "./Projects.css";
import watch from "../../assets/projects/watch.png";
import movies from "../../assets/projects/movies.png";
import game from "../../assets/projects/game.png";
import weather from "../../assets/projects/weather.png";
import doctor from "../../assets/projects/doctor.png";


function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const uiuxProjects = [
    {
      id: 1,
      title: "Apple Watch UI",
      description:
        "Modern and sleek Apple Watch interface design with intuitive navigation and smooth animations.",
      figmaLink: "https://www.figma.com/proto/DrDDnypwfWRYKO44RrTQrl/Untitled?node-id=1-4&starting-point-node-id=1%3A4",
      previewImage: watch,
      tags: ["UI Design", "Wearable", "iOS"],
    },
    {
      id: 2,
      title: "Ticket Booking App",
      description:
        "User-friendly ticket booking application with seamless payment integration and real-time seat selection.",
      figmaLink:
        "https://www.figma.com/design/SE6DXSa5mSZKntBZXMNWLR/Untitled?node-id=0-1&p=f&t=IFUd497nJgBVKGjI-0",
      previewImage: movies,
      tags: ["Mobile App", "Booking", "UX"],
    },
    {
      id: 3,
      title: "Gaming Platform",
      description:
        "Immersive gaming platform design with dynamic layouts and engaging user experience.",
      figmaLink:
        "https://www.figma.com/design/tHkPLZtNHyD9n1KZa8pnGo/Hydra-Landing-Page--Community-?node-id=0-1&p=f&t=D8kiUH6X3ZU3XxTQ-0",
      previewImage: game,
      tags: ["Gaming", "Web Design", "Interactive"],
    },
  ];

  const webDevProjects = [
    {
      id: 4,
      title: "Weather App",
      description:
        "Real-time weather application with location-based forecasts and beautiful UI.",
      liveLink: "https://your-weather-app.com",
      githubLink: "https://github.com/your-username/weather-app",
      previewImage: weather,
      tags: ["HTML", "CSS", "JAVASCRIPT", "API", "Weather"],
    },
    {
      id: 5,
      title: "Doctor Online Consultation",
      description:
        "Telemedicine platform connecting patients with doctors for online consultations and prescriptions.",
      liveLink: "https://your-doctor-consultation.com",
      githubLink: "https://github.com/your-username/doctor-consultation",
      previewImage: doctor,
      tags: ["Healthcare", "Full Stack", "WebRTC"],
    },
  ];

  const genAIProjects = [
    {
      id: 6,
      title: "ASKDOC : PDF Reader AI",
      description:
        "AI-powered PDF reader that extracts, summarizes, and answers questions from PDF documents.",
      githubLink: "https://github.com/an04jali/AskDoc",
      previewImage:
        "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&h=600&fit=crop",
      tags: ["AI", "NLP", "Python"],
    },
    {
      id: 7,
      title: "DSA Instructor Chatbot",
      description:
        "Intelligent chatbot that teaches Data Structures and Algorithms with interactive examples.",
      githubLink: "https://github.com/your-username/dsa-instructor",
      previewImage:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      tags: ["Chatbot", "Education", "ML"],
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <p className="projects-subtitle">
        A collection of my work in UI/UX Design, Web Development, and
        Generative AI
      </p>

      {/* UI/UX Projects Section */}
      <section className="project-section">
        <div className="section-header">
          <FaFigma className="section-icon" />
          <h2>UI/UX Design</h2>
        </div>
        <div className="projects-grid">
          {uiuxProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.previewImage} alt={project.title} />
                <div className="project-overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Web Development Section */}
      <section className="project-section">
        <div className="section-header">
          <FaCode className="section-icon" />
          <h2>Web Development</h2>
        </div>
        <div className="projects-grid">
          {webDevProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.previewImage} alt={project.title} />
                <div className="project-overlay">
                  <span>View Details</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Generative AI Section */}
      <section className="project-section">
        <div className="section-header">
          <FaRobot className="section-icon" />
          <h2>Generative AI: On the process</h2>
        </div>
        <div className="projects-grid">
          {genAIProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.previewImage} alt={project.title} />
                <div className="project-overlay">
                  <span>View Details: on the process</span>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>
              <FaTimes />
            </button>

            <div className="modal-image">
              <img
                src={selectedProject.previewImage}
                alt={selectedProject.title}
              />
            </div>

            <div className="modal-details">
              <h2>{selectedProject.title}</h2>
              <p className="modal-description">
                {selectedProject.description}
              </p>

              <div className="modal-tags">
                {selectedProject.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="modal-links">
                {selectedProject.figmaLink && (
                  <a
                    href={selectedProject.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link figma-link"
                  >
                    <FaFigma /> View in Figma
                  </a>
                )}
                {selectedProject.liveLink && (
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link live-link"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                  >
                    <FaGithub /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;