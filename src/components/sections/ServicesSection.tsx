"use client";

import Link from "next/link";
import { services } from "@/lib/data";
import { useScrollAnimation } from "@/lib/hooks";

function ServiceIcon({ type }: { type: string }) {
  if (type === "web") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="24" height="16" rx="2" />
        <path d="M8 24h12M14 20v4" />
        <path d="M8 10l3 3-3 3M13 16h4" />
      </svg>
    );
  }
  if (type === "mobile") {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="16" height="24" rx="3" />
        <path d="M12 22h4" />
        <circle cx="14" cy="8" r="0.5" fill="var(--accent)" />
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

export default function ServicesSection() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>(0.1);

  return (
    <section
      id="services"
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
            Services
          </span>
          <h2 className="heading-lg">What I Offer</h2>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card"
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 150}ms`,
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "var(--radius-md)",
                  background: "var(--accent-subtle)",
                  border: "1px solid var(--border-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <ServiceIcon type={service.icon} />
              </div>

              {/* Title & Description */}
              <h3 className="heading-sm" style={{ marginBottom: "0.75rem" }}>
                {service.title}
              </h3>
              <p className="body-sm" style={{ marginBottom: "1.5rem" }}>
                {service.description}
              </p>

              {/* Deliverables */}
              <div style={{ marginBottom: "1.5rem", flex: 1 }}>
                <div
                  style={{
                    fontSize: "0.6875rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "var(--text-muted)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Deliverables
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  {service.deliverables.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        fontSize: "0.8125rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          fontSize: "0.75rem",
                          marginTop: "2px",
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.375rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      padding: "0.25rem 0.5rem",
                      fontSize: "0.6875rem",
                      fontWeight: 500,
                      borderRadius: "var(--radius-sm)",
                      background: "var(--bg-tertiary)",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "3rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 700ms",
          }}
        >
          <Link href="/services" className="btn btn-secondary" id="services-cta-more">
            Explore Services
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
