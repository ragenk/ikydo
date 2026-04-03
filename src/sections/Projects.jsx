import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
import "./Projects.css";

function Projects() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const handleWheel = (e) => {
      const rect = section.getBoundingClientRect();
      const isVisible = Math.abs(rect.top) < window.innerHeight * 0.1;

      if (!isVisible) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isAtStart = scrollLeft <= 0;
      const isAtEnd = Math.ceil(scrollLeft + clientWidth) >= scrollWidth;

      const scrollingUp = e.deltaY < 0;
      const scrollingDown = e.deltaY > 0;

      if (isAtStart && scrollingUp) return;
      if (isAtEnd && scrollingDown) return;

      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    section.addEventListener("wheel", handleWheel, { passive: false });

    return () => section.removeEventListener("wheel", handleWheel);
  }, []);

    const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const firstChild = container.children[0];
    if (!firstChild) return;

    const slideWidth = firstChild.getBoundingClientRect().width;

    const computedStyle = getComputedStyle(container);
    const gap = parseFloat(computedStyle.gap) || 0;

    const fullSlide = slideWidth + gap;

    const index = Math.round(container.scrollLeft / fullSlide);

    const safeIndex = Math.max(0, Math.min(index, projects.length - 1));
    setCurrentIndex(safeIndex);
    setShowHint(false);
  };

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
    <section className="projects" id="projects" ref={sectionRef}>
      <h2>Latest Projects</h2>
      <div
        className="projects-container"
        ref={containerRef}
        onScroll={handleScroll}
      >
        {projectCards}
      </div>

      {/* Indicadores pixel-art */}
      <div className="pixel-indicators" aria-hidden>
        {projects.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {showHint && (
        <p className="carousel-hint" aria-hidden="true">◄ scroll ►</p>
      )}

    </section>
  );
}

export default Projects;
