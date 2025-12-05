import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import "./Projects.css";

function Projects() {
  const projectCards = projects.map((project) => (
    <ProjectCard
      key={project.id}
      title={project.name}
      description={project.description}
      link={project.link}
      technologies={project.technologies}
      image={project.thumbnail}
    />
  ));
  return (
    <section className="projects" id="projects">
      <h2>Latest Projects</h2>
      <div className="projects-container">
        {projectCards}
      </div>
    </section>
  );
}

export default Projects;
