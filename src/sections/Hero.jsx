import { ReactTyped } from "react-typed";
import { soundManager } from "../utils/soundManager";
import "./Hero.css";

function Hero() {
  const handleCtaClick = (e) => {
    e.preventDefault();
    soundManager.playCoin();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      <h1 className="fade-in">IKYDO</h1>

      <h2 className="typed-wrapper fade-in delay-1">
        <ReactTyped
          strings={[
            "Software Engineer",
            "Front-End Developer",
            "AI and Automation Architect",
            "Systems-Minded Problem Solver",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h2>

      <p className="fade-in delay-2">
        Engineering scalable web solutions and intelligent automated workflows.
      </p>

      <a
        href="#projects"
        className="pixel-btn hero-cta fade-in delay-3"
        onClick={handleCtaClick}
      >
        INSERT COIN / VIEW PROJECTS
      </a>

      <div className="scroll-hint blink" aria-hidden="true">
        <span className="scroll-hint-label">PRESS START TO SCROLL</span>
        <span className="scroll-hint-arrow">▼</span>
      </div>
    </section>
  );
}

export default Hero;
