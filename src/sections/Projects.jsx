import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import "./Projects.css";

function Projects() {
  console.log(projects);
  const projectCards = projects.map((project) => (
    <ProjectCard
      key={project.id}
      title={project.name}
      description={project.description}
      link={project.link}
      image={project.thumbnail}
    />
  ));
  return (
  <section className="projects" id="projects">
    <h2 className="projects-title">Latest Projects</h2>
    <div className="projects-container">
      {projectCards}
    </div>
  </section>
  );
}

export default Projects;
