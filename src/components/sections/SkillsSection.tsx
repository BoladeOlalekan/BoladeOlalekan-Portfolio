"use client";

import { skillCategories } from "@/lib/data";
import { useScrollAnimation } from "@/lib/hooks";

// Simple icon component using Unicode/emoji-style representations
function SkillIcon({ name }: { name: string }) {
  const getIcon = () => {
    switch (name) {
      case "html": return "⟨/⟩";
      case "css": return "{ }";
      case "javascript": return "JS";
      case "typescript": return "TS";
      case "react": case "react-native": return "⚛";
      case "nextjs": return "N";
      case "nodejs": return "◇";
      case "tailwind": return "≋";
      case "flutter": return "◈";
      case "cordova": return "⊕";
      case "dart": return "▷";
      case "firebase": return "🔥";
      case "api": return "⇋";
      case "figma": return "◉";
      case "photoshop": return "Ps";
      case "illustrator": return "Ai";
      case "aftereffects": return "Ae";
      case "branding": return "◎";
      case "uiux": return "▣";
      default: return "●";
    }
  };

  return (
    <span
      style={{
        fontSize: "0.75rem",
        fontWeight: 700,
        color: "var(--accent)",
        fontFamily: "var(--font-mono)",
        letterSpacing: "-0.02em",
      }}
    >
      {getIcon()}
    </span>
  );
}

export default function SkillsSection() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>(0.1);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding"
      style={{
        position: "relative",
        background: "var(--bg-secondary)",
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          style={{
            marginBottom: "4rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="label" style={{ marginBottom: "0.75rem", display: "block" }}>
            Skills
          </span>
          <h2 className="heading-lg">What I Work With</h2>
        </div>

        {/* Skill Categories */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className="card"
              style={{
                padding: "2rem",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${200 + catIndex * 150}ms`,
              }}
            >
              {/* Category Header */}
              <div style={{ marginBottom: "1.5rem" }}>
                <h3 className="heading-sm" style={{ marginBottom: "0.5rem" }}>
                  {category.title}
                </h3>
                <p className="body-sm">{category.description}</p>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "var(--border)",
                  marginBottom: "1.5rem",
                }}
              />

              {/* Skills Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: "0.75rem",
                }}
              >
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.625rem",
                      padding: "0.625rem 0.75rem",
                      borderRadius: "var(--radius-sm)",
                      background: "var(--bg-tertiary)",
                      border: "1px solid transparent",
                      transition: "all var(--transition-fast)",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-accent)";
                      e.currentTarget.style.background = "var(--accent-subtle)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "transparent";
                      e.currentTarget.style.background = "var(--bg-tertiary)";
                    }}
                  >
                    <SkillIcon name={skill.icon} />
                    <span
                      style={{
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
