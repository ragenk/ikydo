const CATEGORY_COLORS = {
  "Front-End": "#82d4ff",
  "CMS": "#f9c74f",
  "Automation": "#90be6d",
  "Infrastructure": "#f4845f",
  "Tools": "#c77dff",
};

function SkillIcon({ name, category }) {
  const color = CATEGORY_COLORS[category] ?? "#82d4ff";
  return (
    <div className="skill-icon" style={{ "--skill-color": color }}>
      {name}
    </div>
  );
}

export default SkillIcon;
