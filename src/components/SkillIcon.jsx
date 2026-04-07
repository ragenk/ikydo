import React from 'react';

const CATEGORY_COLORS = {
  "Front-End": "#82d4ff",
  "CMS": "#f9c74f",
  "Automation": "#90be6d",
  "Infrastructure": "#f4845f",
  "Tools": "#c77dff",
};

const SkillIcon = React.forwardRef(({ name, category, active, dimmed, onMouseEnter, onMouseLeave }, ref) => {
  const color = CATEGORY_COLORS[category] ?? "#82d4ff";
  
  let className = "skill-icon";
  if (active) className += " active";
  if (dimmed) className += " dimmed";

  return (
    <div 
      className={className} 
      style={{ "--skill-color": color }}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {name}
    </div>
  );
});

export default SkillIcon;

