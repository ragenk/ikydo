import { ReactTyped } from "react-typed";
import "./Hero.css";

function Hero() {
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
    </section>
  );
}

export default Hero;