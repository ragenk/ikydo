import React, { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import "./About.css";

function About() {
  const ref = useRef(null);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartTyping(true);    // enter: start typing (mount)
          } else {
            setStartTyping(false);   // leave: stop typing (unmount)
          }
        });
      },
      {
        threshold: 0.6, // ajusta cuando consideras "visible" la sección
        // rootMargin: "0px 0px -20% 0px" // opcional: ajustar el punto de activación
      }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const fullText =
    `<p>Hi, I'm Rafael, or Ikydo online. I'm a Front-End developer with a clean and minimalistic approach to building user experiences.</p>
    <p>My journey started back in 2004, when I took my first web development course. I later graduated as an Electromechanical Engineer (Electronics) at UASD.</p>
    <p>I currently work with WordPress and Shopify, and I’m specializing in React.</p>
    <p>Outside development, I'm a gamer, anime fan, tech lover, crypto curious and now deeply into AI.</p>`;

  return (
    <section className="about" id="about" ref={ref}>
      <h2 className="about-title">About Me</h2>

      <div className="about-text">
        {startTyping ? (
          <ReactTyped
            strings={[fullText]}
            typeSpeed={15}
            showCursor={false}
            loop={false}
          />
        ) : (
          // placeholder vacío para mantener layout cuando Typed está desmontado
          <p aria-hidden="true" style={{ minHeight: "1.2em" }} />
        )}
      </div>
    </section>
  );
}

export default About;
