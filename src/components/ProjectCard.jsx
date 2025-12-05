function ProjectCard(props) {
  return <>
    <div className="project-card">
      <div className="project-info">
        <h3 className="project-title">{props.title}</h3>
        <p className="project-description">{props.description}</p>
        <div className="project-technologies">          
            {props.technologies.map((tech, index) => (
              <span key={index} className="badge">{tech}</span>
            ))}
        </div>
      </div>
      <div className="pixel-frame">
        <img src={props.image} alt={`${props.title} Thumbnail`} className="project-image" />
            <a href={props.link} className="project-link" target="_blank" rel="noopener noreferrer"></a>
      </div>
    </div>
  </>;
}

export default ProjectCard;
