"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { useScrollAnimation } from "@/lib/hooks";

type FilterCategory = "all" | "web" | "mobile" | "design";

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>(0.1);

  const filters: { label: string; value: FilterCategory }[] = [
    { label: "All Work", value: "all" },
    { label: "Web", value: "web" },
    { label: "Mobile", value: "mobile" },
    { label: "Design", value: "design" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects.slice(0, 4)
      : projects.filter((p) => p.category === activeFilter).slice(0, 4);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="section-padding"
      style={{ position: "relative" }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1.5rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div>
            <span className="label" style={{ marginBottom: "0.75rem", display: "block" }}>
              Portfolio
            </span>
            <h2 className="heading-lg">Selected Work</h2>
          </div>

          {/* Filters */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              padding: "4px",
              background: "var(--bg-secondary)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
            }}
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                id={`filter-${filter.value}`}
                onClick={() => setActiveFilter(filter.value)}
                style={{
                  padding: "0.5rem 1rem",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  borderRadius: "var(--radius-sm)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                  background:
                    activeFilter === filter.value
                      ? "var(--accent)"
                      : "transparent",
                  color:
                    activeFilter === filter.value
                      ? "#0a0a0a"
                      : "var(--text-tertiary)",
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filteredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              id={`project-${project.slug}`}
              className="card"
              style={{
                textDecoration: "none",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 120}ms`,
              }}
            >
              {/* Thumbnail */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                  overflow: "hidden",
                  background: "var(--bg-tertiary)",
                }}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                  }}
                />

                {/* Category Badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "0.75rem",
                    right: "0.75rem",
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    background: "rgba(10, 10, 10, 0.8)",
                    color: "var(--accent)",
                    borderRadius: "100px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {project.category === "web"
                    ? "Web Dev"
                    : project.category === "mobile"
                    ? "Mobile"
                    : "Design"}
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "var(--text-muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {project.role}
                </div>
                <h3 className="heading-sm" style={{ marginBottom: "0.5rem" }}>
                  {project.title}
                </h3>
                <p className="body-sm" style={{ marginBottom: "1rem", flex: 1 }}>
                  {project.shortDescription}
                </p>

                {/* Tech Stack */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.375rem",
                  }}
                >
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "0.25rem 0.5rem",
                        fontSize: "0.6875rem",
                        fontWeight: 500,
                        borderRadius: "var(--radius-sm)",
                        background: "var(--bg-tertiary)",
                        color: "var(--text-tertiary)",
                        fontFamily: "var(--font-mono)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span
                      style={{
                        padding: "0.25rem 0.5rem",
                        fontSize: "0.6875rem",
                        fontWeight: 500,
                        borderRadius: "var(--radius-sm)",
                        background: "var(--bg-tertiary)",
                        color: "var(--text-muted)",
                      }}
                    >
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 700ms",
          }}
        >
          <Link href="/portfolio" className="btn btn-secondary" id="portfolio-view-all">
            View All Projects
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
