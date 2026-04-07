const skills = [
  // Tier 1: Foundations
  { id: "html_css", name: "HTML & CSS", category: "Front-End", tier: 1, requires: [] },
  { id: "domain_setup", name: "Domain Setup", category: "Infrastructure", tier: 1, requires: [] },
  { id: "git", name: "Git", category: "Tools", tier: 1, requires: [] },

  // Tier 2: Intermediate
  { id: "js", name: "JavaScript", category: "Front-End", tier: 2, requires: ["html_css"] },
  { id: "email_config", name: "Email Config", category: "Infrastructure", tier: 2, requires: ["domain_setup"] },
  { id: "site_migration", name: "Site Migration", category: "Infrastructure", tier: 2, requires: ["domain_setup"] },
  { id: "wordpress", name: "WordPress", category: "CMS", tier: 2, requires: ["domain_setup"] },
  { id: "shopify", name: "Shopify", category: "CMS", tier: 2, requires: ["domain_setup"] },

  // Tier 3: Advanced
  { id: "react", name: "React", category: "Front-End", tier: 3, requires: ["js"] },
  { id: "vite", name: "Vite", category: "Tools", tier: 3, requires: ["js", "git"] },
  { id: "elementor", name: "Elementor", category: "CMS", tier: 3, requires: ["wordpress"] },
  { id: "n8n", name: "n8n", category: "Automation", tier: 3, requires: ["email_config"] }
];

export default skills;
