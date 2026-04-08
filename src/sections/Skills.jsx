import { useEffect, useRef, useState, useLayoutEffect, useCallback } from "react";
import SkillIcon from "../components/SkillIcon";
import skills from "../data/skills";
import { soundManager } from "../utils/soundManager";
import "./Skills.css";

// Group skills by tier
const tiers = [1, 2, 3].map(t => skills.filter(s => s.tier === t));

// Build a dependency map: childId -> [parentIds]
const dependencyMap = {};
skills.forEach(s => {
  dependencyMap[s.id] = s.requires || [];
});

function Skills() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const nodeRefs = useRef({});
  const [lines, setLines] = useState([]);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Set intersection observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  // Compute connecting lines
  const updateLines = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const scrollLeft = containerRef.current.scrollLeft;
    const scrollTop = containerRef.current.scrollTop;
    
    const newLines = [];
    skills.forEach(skill => {
      const childEl = nodeRefs.current[skill.id];
      if (!childEl) return;

      const childRect = childEl.getBoundingClientRect();
      const childCenterX = (childRect.left - containerRect.left) + scrollLeft + childRect.width / 2;
      const childCenterY = (childRect.top - containerRect.top) + scrollTop + childRect.height / 2;

      (skill.requires || []).forEach(parentId => {
        const parentEl = nodeRefs.current[parentId];
        if (!parentEl) return;

        const parentRect = parentEl.getBoundingClientRect();
        const parentCenterX = (parentRect.left - containerRect.left) + scrollLeft + parentRect.width / 2;
        const parentCenterY = (parentRect.top - containerRect.top) + scrollTop + parentRect.height / 2;

        newLines.push({
          id: `${parentId}-${skill.id}`,
          parent: parentId,
          child: skill.id,
          x1: parentCenterX,
          y1: parentCenterY,
          x2: childCenterX,
          y2: childCenterY
        });
      });
    });

    setLines(newLines);
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      updateLines();
    };

    // Use ResizeObserver to catch layout shifts from flex-wrap
    const resizeObserver = new ResizeObserver(() => {
      updateLines();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      // Also observe the inner wrapper to catch wrap changes
      const wrapper = containerRef.current.querySelector('.tiers-wrapper');
      if (wrapper) resizeObserver.observe(wrapper);
    }

    // Delay slightly to ensure layout and fonts have fully rendered before measuring
    const timer = setTimeout(() => {
      updateLines();
    }, 200);
    
    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [updateLines]);

  const handleRef = useCallback((id, el) => {
    if (el) {
      nodeRefs.current[id] = el;
    }
  }, []);

  const handleMouseEnter = (id) => {
    soundManager.playBlip();
    setHoveredNode(id);
  };

  const handleMouseLeave = () => {
    setHoveredNode(null);
  };

  // Determine active nodes (the hovered node and its prerequisites)
  const getActiveNodes = (id) => {
    if (!id) return new Set();
    const active = new Set([id]);
    let queue = [id];
    
    while (queue.length > 0) {
      const curr = queue.shift();
      const parents = dependencyMap[curr] || [];
      parents.forEach(p => {
        if (!active.has(p)) {
          active.add(p);
          queue.push(p);
        }
      });
    }
    return active;
  };

  const activeNodes = hoveredNode ? getActiveNodes(hoveredNode) : new Set();

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">SKILL TREE</h2>

      <div 
        className={`skill-tree-container pixel-frame ${visible ? "visible" : ""}`} 
        ref={containerRef}
      >
        {/* SVG layer for connections */}
        <svg className="connections-layer">
          {lines.map(line => {
            // Draw an orthogonal line (stair-step)
            // Midpoint for the horizontal or vertical break
            const isHovered = activeNodes.has(line.child) && activeNodes.has(line.parent);
            const lineClass = isHovered ? "tree-line active" : hoveredNode ? "tree-line dimmed" : "tree-line";
            
            let d;
            if (isMobile) {
              // Vertical stair-step (for mobile)
              const midY = line.y1 + (line.y2 - line.y1) / 2;
              d = `M ${line.x1} ${line.y1} L ${line.x1} ${midY} L ${line.x2} ${midY} L ${line.x2} ${line.y2}`;
            } else {
              // Horizontal stair-step (for desktop)
              const midX = line.x1 + (line.x2 - line.x1) / 2;
              d = `M ${line.x1} ${line.y1} L ${midX} ${line.y1} L ${midX} ${line.y2} L ${line.x2} ${line.y2}`;
            }
            
            return (
              <path
                key={line.id}
                d={d}
                className={lineClass}
                fill="none"
              />
            );
          })}
        </svg>

        {/* Nodes Layer */}
        <div className="tiers-wrapper">
          {tiers.map((tierSkills, index) => (
            <div key={`tier-${index}`} className="tier-column">
              <span className="tier-label">TIER {index + 1}</span>
              {tierSkills.map(skill => {
                const isActive = activeNodes.has(skill.id);
                const isDimmed = hoveredNode && !isActive;

                return (
                  <SkillIcon
                    key={skill.id}
                    ref={(el) => handleRef(skill.id, el)}
                    name={skill.name}
                    category={skill.category}
                    active={isActive}
                    dimmed={isDimmed}
                    onMouseEnter={() => handleMouseEnter(skill.id)}
                    onMouseLeave={handleMouseLeave}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
