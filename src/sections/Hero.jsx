import React from "react";
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
            "React Developer",
            "WordPress Expert",
            "Shopify E-commerce Builder",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </h2>

      <p className="fade-in delay-2">
        Building seamless and modern web experiences.
      </p>
    </section>
  );
}

export default Hero;