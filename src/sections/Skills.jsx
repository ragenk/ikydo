import { useEffect, useRef, useState } from "react";
import SkillIcon from "../components/SkillIcon";
import skills from "../data/skills";
import "./Skills.css";

const CATEGORIES = [
  { label: "Front-End", color: "var(--nes-secondary)" },
  { label: "CMS", color: "var(--nes-warning)" },
  { label: "Automation", color: "var(--nes-success)" },
  { label: "Infrastructure", color: "var(--nes-primary)" },
  { label: "Tools", color: "#c77dff" },
];

function Skills() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="skills" id="skills" ref={ref}>
      <h2 className="skills-title">SKILLS</h2>

      <div className={`skills-grid ${visible ? "visible" : ""}`}>
        {CATEGORIES.map(({ label, color }) => {
          const catSkills = skills.filter((s) => s.category === label);
          if (!catSkills.length) return null;
          return (
            <div key={label} className="skills-category pixel-frame">
              <span className="category-label" style={{ color }}>
                {label}
              </span>
              <div className="category-skills">
                {catSkills.map((s) => (
                  <SkillIcon key={s.name} name={s.name} category={s.category} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
