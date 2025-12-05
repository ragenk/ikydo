import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import "./About.css";
import Rafa from "../assets/Rafa-8Bit.png";

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
        threshold: 0.6,
      }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const fullText =
    `<p>Hi, I'm Rafael, or Ikydo online. I’m a Front-End developer with experience building professional websites using WordPress, Shopify, and React.</p>
    <p>My work also covers technical infrastructure, including domain setup, business email configuration, and website migration.</p>
    <p>I create automation workflows with n8n that help businesses streamline operations through smart and efficient integrations.</p>`;

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-me-pic-container  pixel-frame">
        <img src={Rafa} alt="Rafa Profile Pic" className="about-me-pic" />
      </div>

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
          <p aria-hidden="true" style={{ minHeight: "1.2em" }} />
        )}
      </div>
    </section>
  );
}

export default About;
