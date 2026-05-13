"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/lib/hooks";
import { skillCategories } from "@/lib/data";

export default function AboutPageContent() {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLElement>(0.1);
  const [storyRef, storyVisible] = useScrollAnimation<HTMLDivElement>(0.1);
  const [techRef, techVisible] = useScrollAnimation<HTMLDivElement>(0.1);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          paddingTop: "8rem",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(57, 255, 20, 0.04) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        <div className="container-custom">
          <div
            style={{
              maxWidth: "800px",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span className="label" style={{ marginBottom: "0.75rem", display: "block" }}>
              About
            </span>
            <h1 className="heading-xl" style={{ marginBottom: "1.5rem" }}>
              Building at the intersection of
              <span style={{ color: "var(--accent)" }}> code</span> and
              <span style={{ color: "var(--accent)" }}> design</span>.
            </h1>
            <p className="body-lg" style={{ maxWidth: "600px" }}>
              A multidisciplinary creator with expertise in web development, mobile applications,
              and graphic design — focused on delivering products that are technically excellent
              and visually refined.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-custom">
          <div
            ref={storyRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Image Column */}
            <div
              style={{
                position: "relative",
                opacity: storyVisible ? 1 : 0,
                transform: storyVisible ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "120%",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                }}
              >
                <Image
                  src="/images/profile-avatar.png"
                  alt="Profile photo"
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>

              {/* Experience Badge */}
              <div
                className="card"
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  padding: "1rem 1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  animation: "pulse-glow 3s infinite",
                }}
              >
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    lineHeight: 1,
                  }}
                >
                  5+
                </div>
                <div>
                  <div style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--text-primary)" }}>
                    Years of
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-tertiary)" }}>
                    Experience
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div
              style={{
                opacity: storyVisible ? 1 : 0,
                transform: storyVisible ? "translateX(0)" : "translateX(30px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
              }}
            >
              <h2 className="heading-md" style={{ marginBottom: "1.5rem" }}>
                My Background
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <p className="body-md">
                  I started my journey in tech by building websites from scratch — hand-coding HTML and CSS
                  before moving into JavaScript frameworks. That foundation taught me the importance of
                  understanding every layer of the stack.
                </p>
                <p className="body-md">
                  Over the years, I expanded into mobile development with Flutter and React Native,
                  creating cross-platform applications that feel native on every device. My graphic design
                  background ensures every interface I build isn&apos;t just functional — it&apos;s intentional.
                </p>
                <p className="body-md">
                  Today, I work with clients ranging from startups to established businesses, helping them
                  turn ideas into polished digital products. Whether it&apos;s a responsive web app, a mobile
                  experience, or a complete brand identity — I bring the same level of care and precision
                  to every project.
                </p>
              </div>

              {/* Philosophy */}
              <div
                style={{
                  marginTop: "2rem",
                  padding: "1.5rem",
                  borderRadius: "var(--radius-md)",
                  background: "var(--accent-subtle)",
                  border: "1px solid var(--border-accent)",
                }}
              >
                <h3 className="heading-sm" style={{ marginBottom: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span style={{ color: "var(--accent)" }}>◈</span>
                  Design Philosophy
                </h3>
                <p className="body-sm">
                  I believe the best digital products emerge when engineering precision meets creative
                  vision. Clean code should produce clean experiences. Every pixel, interaction, and
                  transition should serve a purpose — communicating clearly, guiding naturally, and
                  performing flawlessly.
                </p>
              </div>

              {/* CV Download */}
              <div style={{ marginTop: "2rem" }}>
                <a
                  href="/resume.pdf"
                  className="btn btn-primary"
                  id="download-cv"
                  download
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 11v2a2 2 0 002 2h8a2 2 0 002-2v-2M8 2v9M5 8l3 3 3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Tools */}
      <section className="section-padding">
        <div className="container-custom">
          <div
            ref={techRef}
            style={{
              opacity: techVisible ? 1 : 0,
              transform: techVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
              Tools & Technologies
            </h2>
            <p className="body-lg" style={{ marginBottom: "3rem", maxWidth: "600px" }}>
              The technologies I use daily to build modern, performant digital products.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="card"
                style={{
                  padding: "2rem",
                  opacity: techVisible ? 1 : 0,
                  transform: techVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 150}ms`,
                }}
              >
                <h3 className="heading-sm" style={{ marginBottom: "0.5rem" }}>
                  {category.title}
                </h3>
                <p className="body-sm" style={{ marginBottom: "1.5rem" }}>
                  {category.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      style={{
                        padding: "0.375rem 0.75rem",
                        fontSize: "0.8125rem",
                        fontWeight: 500,
                        borderRadius: "var(--radius-sm)",
                        background: "var(--bg-tertiary)",
                        color: "var(--text-secondary)",
                        border: "1px solid transparent",
                        transition: "all var(--transition-fast)",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "transparent";
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
