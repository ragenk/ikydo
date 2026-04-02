function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3 className="project-title">{props.title}</h3>
      <div className="pixel-frame project-thumbnail-wrapper">
        <img src={props.image} alt={`${props.title} Thumbnail`} className="project-image" />
      </div>
      <p className="project-description">{props.description}</p>
      <div className="project-technologies">
        {props.technologies.map((tech, index) => (
          <span key={index} className="badge">{tech}</span>
        ))}
      </div>
      <a
        href={props.link}
        className="pixel-btn project-btn"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project ▶
      </a>
    </div>
  );
}

export default ProjectCard;
