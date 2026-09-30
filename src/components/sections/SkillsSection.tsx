"use client";

import { useState } from "react";
import { skillCategories, Skill } from "@/lib/data";
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
      case "riverpod": return "R";
      case "cordova": return "⊕";
      case "dart": return "▷";
      case "firebase": return "🔥";
      case "supabase": return "⚡";
      case "nosql": return "⛁";
      case "api": return "⇋";
      case "figma": return "◉";
      case "photoshop": return "Ps";
      case "illustrator": return "Ai";
      case "lightroom": return "Lr";
      case "affinity": return "Aff";
      case "aftereffects": return "Ae";
      case "branding": return "◎";
      case "uiux": return "▣";
      case "canva": return "C";
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
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        minWidth: "16px",
      }}
    >
      {getIcon()}
    </span>
  );
}

// Overflow tag with high z-index floating dropdown
function SkillOverflowTag({
  hiddenSkills,
  categoryTitle,
}: {
  hiddenSkills: Skill[];
  categoryTitle: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        id={`skill-more-${categoryTitle.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.375rem",
          padding: "0.5rem 0.875rem",
          borderRadius: "var(--radius-sm)",
          background: isOpen ? "var(--accent-subtle)" : "var(--bg-tertiary)",
          border: `1px solid ${isOpen ? "var(--border-accent)" : "var(--border)"}`,
          fontSize: "0.8125rem",
          fontWeight: 600,
          color: isOpen ? "var(--accent)" : "var(--text-secondary)",
          cursor: "pointer",
          transition: "all var(--transition-fast)",
        }}
      >
        <span>+{hiddenSkills.length} more</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform var(--transition-fast)",
          }}
        >
          <path d="M4 6l4 4 4-4" />
        </svg>
      </button>

      {/* Floating Hover/Dropdown Tooltip */}
      <div
        style={{
          position: "absolute",
          top: "calc(100% + 8px)",
          left: 0,
          transform: isOpen
            ? "translateY(0) scale(1)"
            : "translateY(-6px) scale(0.96)",
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
          transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          zIndex: 100,
          minWidth: "260px",
          maxWidth: "320px",
          padding: "1rem",
          borderRadius: "var(--radius-md)",
          background: "var(--bg-card)",
          border: "1px solid var(--border-accent)",
          boxShadow: "0 16px 36px rgba(0, 0, 0, 0.35), 0 0 20px rgba(57, 255, 20, 0.12)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "0.75rem",
            paddingBottom: "0.5rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <span
            style={{
              fontSize: "0.6875rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
            }}
          >
            {categoryTitle} - More
          </span>
          <span
            style={{
              fontSize: "0.6875rem",
              color: "var(--accent)",
              fontFamily: "var(--font-mono)",
              fontWeight: 600,
            }}
          >
            +{hiddenSkills.length} skills
          </span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {hiddenSkills.map((skill) => (
            <div
              key={skill.name}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.375rem",
                padding: "0.375rem 0.625rem",
                borderRadius: "var(--radius-sm)",
                background: "var(--bg-tertiary)",
                border: "1px solid var(--border)",
                fontSize: "0.75rem",
                fontWeight: 500,
                color: "var(--text-primary)",
              }}
            >
              <SkillIcon name={skill.icon} />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Arrow pointer */}
        <div
          style={{
            position: "absolute",
            bottom: "100%",
            left: "1.5rem",
            width: 0,
            height: 0,
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderBottom: "6px solid var(--border-accent)",
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>(0.1);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const VISIBLE_LIMIT = 7;

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
          {skillCategories.map((category, catIndex) => {
            const visibleSkills = category.skills.slice(0, VISIBLE_LIMIT);
            const hiddenSkills = category.skills.slice(VISIBLE_LIMIT);
            const isCardActive = activeCard === catIndex;

            return (
              <div
                key={category.title}
                className="card"
                onMouseEnter={() => setActiveCard(catIndex)}
                onMouseLeave={() => setActiveCard(null)}
                style={{
                  padding: "2rem",
                  position: "relative",
                  zIndex: isCardActive ? 30 : 1,
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

                {/* Skills Tags List */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.625rem",
                    alignItems: "center",
                  }}
                >
                  {visibleSkills.map((skill) => (
                    <div
                      key={skill.name}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem 0.875rem",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--bg-tertiary)",
                        border: "1px solid var(--border)",
                        transition: "all var(--transition-fast)",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-accent)";
                        e.currentTarget.style.background = "var(--accent-subtle)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
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

                  {/* Overflow Tag with Hover Dropdown */}
                  {hiddenSkills.length > 0 && (
                    <SkillOverflowTag
                      hiddenSkills={hiddenSkills}
                      categoryTitle={category.title}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
