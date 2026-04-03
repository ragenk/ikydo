import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import "./About.css";
import Rafa from "../assets/Rafa-8Bit.png?w=300&format=webp";

function About() {
  const ref = useRef(null);
  const [startTyping, setStartTyping] = useState(false);
  const [isEncounter, setIsEncounter] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartTyping(true);
            setIsEncounter(true);
          } else {
            setStartTyping(false);
            setIsEncounter(false);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const fullText =
    `<p>HI, I'M RAFAEL, OR IKYDO ONLINE. I’M A FRONT-END DEVELOPER WITH EXPERIENCE BUILDING PROFESSIONAL WEBSITES USING WORDPRESS, SHOPIFY, AND REACT.</p>
    <p>MY WORK ALSO COVERS TECHNICAL INFRASTRUCTURE, INCLUDING DOMAIN SETUP, BUSINESS EMAIL CONFIGURATION, AND WEBSITE MIGRATION.</p>
    <p>I CREATE AUTOMATION WORKFLOWS WITH N8N THAT HELP BUSINESSES STREAMLINE OPERATIONS THROUGH SMART AND EFFICIENT INTEGRATIONS.</p>`;

  return (
    <section className="about" id="about" ref={ref}>
      {isEncounter && (
        <div className="boss-warning blink">
          <span>WARNING: CHALLENGER APPROACHING</span>
        </div>
      )}

      <div className="boss-area">
        <div className={`boss-sprite-container ${isEncounter ? "slide-in" : ""}`}>
          <div className="boss-stats">
            <span className="boss-name">RAFAEL (IKYDO)</span>
            <div className="health-bar-container">
              <div className={`health-bar-fill ${isEncounter ? "fill-up" : ""}`}></div>
            </div>
            <span className="boss-title">LVL 99 DEVELOPER</span>
          </div>
          <div className="about-me-pic-container pixel-frame">
            <img src={Rafa} alt="Rafa Profile Pic" className="about-me-pic" />
          </div>
        </div>

        <div className={`pixel-frame about-text ${isEncounter ? "fade-in-boss" : ""}`}>
          <h2 className="title">SYSTEM LOG</h2>
          {startTyping ? (
            <ReactTyped
              strings={[fullText]}
              typeSpeed={15}
              showCursor={true}
              cursorChar="&#9608;"
              loop={false}
            />
          ) : (
            <p aria-hidden="true" style={{ minHeight: "1.2em" }} />
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
