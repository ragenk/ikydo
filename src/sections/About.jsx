import { useEffect, useRef, useState } from "react";
import { soundManager } from "../utils/soundManager";
import "./About.css";
import Rafa from "../assets/Rafa-8Bit.png?w=300&format=webp";

function About() {
  const ref = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const [isEncounter, setIsEncounter] = useState(false);
  const [canType, setCanType] = useState(false);
  const encounterTimeoutRef = useRef(null);
  const typingIndexRef = useRef(0);

  const fullText = `HI, I'M RAFAEL, OR IKYDO ONLINE. I’M A FRONT-END DEVELOPER WITH EXPERIENCE BUILDING PROFESSIONAL WEBSITES USING WORDPRESS, SHOPIFY, AND REACT.\n\nMY WORK ALSO COVERS TECHNICAL INFRASTRUCTURE, INCLUDING DOMAIN SETUP, BUSINESS EMAIL CONFIGURATION, AND WEBSITE MIGRATION.\n\nI CREATE AUTOMATION WORKFLOWS WITH N8N THAT HELP BUSINESSES STREAMLINE OPERATIONS THROUGH SMART AND EFFICIENT INTEGRATIONS.`;

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the "Dwell" check - 250ms to ignore fast scrolls
            if (encounterTimeoutRef.current) clearTimeout(encounterTimeoutRef.current);
            
            encounterTimeoutRef.current = setTimeout(() => {
              setIsEncounter(true);
              soundManager.playBossSiren();
              
              // Delay typing to match faster CSS fade-in
              setTimeout(() => {
                setCanType(true);
              }, 800);

            }, 250);

          } else {
            // Immediately kill everything if we scroll out
            setIsEncounter(false);
            setCanType(false);
            setDisplayText("");
            typingIndexRef.current = 0;
            if (encounterTimeoutRef.current) clearTimeout(encounterTimeoutRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) obs.observe(ref.current);
    return () => {
      obs.disconnect();
      if (encounterTimeoutRef.current) clearTimeout(encounterTimeoutRef.current);
    };
  }, []);

  // Custom typing interval
  useEffect(() => {
    if (!canType || !isEncounter) return;

    const interval = setInterval(() => {
      if (typingIndexRef.current < fullText.length) {
        const nextChar = fullText[typingIndexRef.current];
        setDisplayText((prev) => prev + nextChar);
        typingIndexRef.current += 1;
        
        if (nextChar !== " " && nextChar !== "\n") {
          soundManager.playBlip();
        }
      } else {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [canType, isEncounter]);

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
          <div className="dialogue-content">
            <p>
              {displayText.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
              <span className="cursor-blink"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
