"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/lib/hooks";
import type { Project } from "@/lib/data";

export default function CaseStudyContent({ project }: { project: Project }) {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLElement>(0.05);
  const [detailsRef, detailsVisible] = useScrollAnimation<HTMLDivElement>(0.1);
  const [processRef, processVisible] = useScrollAnimation<HTMLDivElement>(0.1);

  const categoryLabel =
    project.category === "web"
      ? "Web Development"
      : project.category === "mobile"
      ? "Mobile Development"
      : "Graphic Design";

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        style={{
          paddingTop: "8rem",
          paddingBottom: "3rem",
          position: "relative",
        }}
      >
        <div className="container-custom">
          {/* Breadcrumb */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "2rem",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <Link
              href="/portfolio"
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                transition: "color var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-muted)";
              }}
            >
              Portfolio
            </Link>
            <span style={{ color: "var(--text-muted)", fontSize: "0.75rem" }}>/</span>
            <span style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)" }}>
              {project.title}
            </span>
          </div>

          {/* Header */}
          <div
            style={{
              maxWidth: "800px",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 100ms",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <span
                style={{
                  padding: "0.25rem 0.75rem",
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  background: "var(--accent-subtle)",
                  color: "var(--accent)",
                  borderRadius: "100px",
                  border: "1px solid var(--border-accent)",
                }}
              >
                {categoryLabel}
              </span>
              <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                {project.role}
              </span>
            </div>

            <h1 className="heading-xl" style={{ marginBottom: "1rem" }}>
              {project.title}
            </h1>
            <p className="body-lg">{project.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section style={{ paddingBottom: "4rem" }}>
        <div className="container-custom">
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingTop: "50%",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border)",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "scale(1)" : "scale(0.97)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 300ms",
            }}
          >
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-custom">
          <div
            ref={detailsRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
              marginBottom: "4rem",
            }}
          >
            {/* Tech Stack */}
            <div
              className="card"
              style={{
                padding: "1.5rem",
                opacity: detailsVisible ? 1 : 0,
                transform: detailsVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <h3
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                Tech Stack
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: "0.375rem 0.75rem",
                      fontSize: "0.8125rem",
                      fontWeight: 500,
                      borderRadius: "var(--radius-sm)",
                      background: "var(--bg-tertiary)",
                      color: "var(--text-secondary)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div
              className="card"
              style={{
                padding: "1.5rem",
                opacity: detailsVisible ? 1 : 0,
                transform: detailsVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 150ms",
              }}
            >
              <h3
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                Links
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--accent)",
                      textDecoration: "none",
                      transition: "opacity var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 9v4a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4M8 8l6-6M10 2h4v4" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      color: "var(--text-secondary)",
                      textDecoration: "none",
                      transition: "color var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-secondary)"; }}
                  >
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    View Source
                  </a>
                )}
              </div>
            </div>

            {/* Role */}
            <div
              className="card"
              style={{
                padding: "1.5rem",
                opacity: detailsVisible ? 1 : 0,
                transform: detailsVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 300ms",
              }}
            >
              <h3
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--text-muted)",
                  marginBottom: "1rem",
                }}
              >
                My Role
              </h3>
              <p style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--text-primary)" }}>
                {project.role}
              </p>
              <p className="body-sm" style={{ marginTop: "0.5rem" }}>
                {categoryLabel}
              </p>
            </div>
          </div>

          {/* Case Study Process */}
          <div ref={processRef}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                { title: "Problem", content: project.problem, num: "01" },
                { title: "Process", content: project.process, num: "02" },
                { title: "Solution", content: project.solution, num: "03" },
                { title: "Results", content: project.results, num: "04" },
              ].map((step, index) => (
                <div
                  key={step.title}
                  style={{
                    opacity: processVisible ? 1 : 0,
                    transform: processVisible ? "translateY(0)" : "translateY(30px)",
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        fontFamily: "var(--font-mono)",
                        color: "var(--accent)",
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "var(--accent-subtle)",
                        border: "1px solid var(--border-accent)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {step.num}
                    </span>
                    <h3 className="heading-sm">{step.title}</h3>
                  </div>
                  <p className="body-md" style={{ paddingLeft: "44px" }}>
                    {step.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Portfolio */}
      <section style={{ padding: "3rem 0" }}>
        <div className="container-custom" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <Link
            href="/portfolio"
            className="btn btn-secondary"
            id="back-to-portfolio"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            All Projects
          </Link>
          <Link
            href="/contact"
            className="btn btn-primary"
            id="case-study-contact"
          >
            Start a Project
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
