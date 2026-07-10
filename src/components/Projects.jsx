import talentTrack from "../assets/talenttrack.png";
import carParking from "../assets/car-parking.png";
import travelBloom from "../assets/travelbloom.png";
import game2048 from "../assets/2048-game.png";
import todoApp from "../assets/todo-app.jpg";
import portfolio from "../assets/portfolio.png";

import "./Projects.css";

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Talent Track - Student Job Portal",
      description:
        "A full-stack student job portal that connects students with recruiters, allowing job searching, applications, profile management, and internship opportunities.",
      image: talentTrack,
      github: "https://github.com/hardi25vekariya/Talent-Track",
      live: "#",
    },
    {
      id: 2,
      title: "Smart Car Parking System",
      description:
        "An IoT-based smart parking solution combining hardware and software to detect available parking spaces.",
      image: carParking,
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "TravelBloom Website",
      description:
        "A modern travel website built using HTML, CSS, JavaScript, and React.",
      image: travelBloom,
      github: "#",
      live: "#",
    },
    {
      id: 4,
      title: "2048 Game",
      description:
        "A browser-based 2048 game with smooth animations and responsive design.",
      image: game2048,
      github: "#",
      live: "#",
    },
    {
      id: 5,
      title: "To-Do Application",
      description:
        "A React-based task management application using Local Storage.",
      image: todoApp,
      github: "#",
      live: "#",
    },
    {
      id: 6,
      title: "Personal Portfolio Website",
      description:
        "A modern portfolio built with React featuring animations and responsive design.",
      image: portfolio,
      github: "#",
      live: "#",
    },
  ];

  return (
    <section className="projects-section">
      <div className="section-container">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;