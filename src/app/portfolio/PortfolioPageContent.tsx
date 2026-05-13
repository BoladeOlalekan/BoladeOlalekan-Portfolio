"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { useScrollAnimation } from "@/lib/hooks";

type FilterCategory = "all" | "web" | "mobile" | "design";

export default function PortfolioPageContent() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [heroRef, heroVisible] = useScrollAnimation<HTMLElement>(0.1);

  const filters: { label: string; value: FilterCategory }[] = [
    { label: "All Work", value: "all" },
    { label: "Web Development", value: "web" },
    { label: "Mobile Apps", value: "mobile" },
    { label: "Graphic Design", value: "design" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

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
              "radial-gradient(ellipse at 50% 30%, rgba(57, 255, 20, 0.04) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        <div className="container-custom">
          <div
            style={{
              maxWidth: "700px",
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <span className="label" style={{ marginBottom: "0.75rem", display: "block" }}>
              Portfolio
            </span>
            <h1 className="heading-xl" style={{ marginBottom: "1rem" }}>
              Selected <span style={{ color: "var(--accent)" }}>Work</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: "560px" }}>
              A curated collection of projects spanning web applications, mobile apps, and brand
              design — each built with precision and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding" style={{ paddingTop: "2rem" }}>
        <div className="container-custom">
          {/* Filters */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              marginBottom: "3rem",
              padding: "4px",
              background: "var(--bg-secondary)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              width: "fit-content",
              flexWrap: "wrap",
            }}
          >
            {filters.map((filter) => (
              <button
                key={filter.value}
                id={`portfolio-filter-${filter.value}`}
                onClick={() => setActiveFilter(filter.value)}
                style={{
                  padding: "0.5rem 1.25rem",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  borderRadius: "var(--radius-sm)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all var(--transition-fast)",
                  background:
                    activeFilter === filter.value ? "var(--accent)" : "transparent",
                  color:
                    activeFilter === filter.value ? "#0a0a0a" : "var(--text-tertiary)",
                }}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {filteredProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/portfolio/${project.slug}`}
                id={`portfolio-project-${project.slug}`}
                className="card"
                style={{
                  textDecoration: "none",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  animation: `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms both`,
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
                <div
                  style={{
                    padding: "1.5rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
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
                  <h2 className="heading-sm" style={{ marginBottom: "0.5rem" }}>
                    {project.title}
                  </h2>
                  <p className="body-sm" style={{ marginBottom: "1rem", flex: 1 }}>
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                    {project.techStack.map((tech) => (
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
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div
              style={{
                textAlign: "center",
                padding: "4rem 0",
                color: "var(--text-muted)",
              }}
            >
              <p className="body-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
