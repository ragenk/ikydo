function ProjectCard(props) {
  return <>
    <div className="project-card">
      <h3 className="project-title">{props.title}</h3>
      <div className="pixel-frame">
        <img src={props.image} alt={`${props.title} Thumbnail`} className="project-image" />
            <a href={props.link} className="project-link" target="_blank" rel="noopener noreferrer"></a>
      </div>
        <p className="project-description">{props.description}</p>
        <div className="project-technologies">          
            {props.technologies.map((tech, index) => (
              <span key={index} className="badge">{tech}</span>
            ))}
        </div>
    </div>
  </>;
}

export default ProjectCard;
