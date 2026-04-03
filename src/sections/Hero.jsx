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
            "Front-End Developer",
            "WordPress and Shopify Specialist",
            "React Developer",
            "Automation Builder (n8n)",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h2>

      <p className="fade-in delay-2">
        Building modern websites, technical solutions, and smart automations.
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