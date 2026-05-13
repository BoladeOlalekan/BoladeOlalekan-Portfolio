"use client";

import Link from "next/link";
import { services } from "@/lib/data";
import { useScrollAnimation } from "@/lib/hooks";

function ServiceIcon({ type }: { type: string }) {
  if (type === "web") {
    return (
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="24" height="16" rx="2" />
        <path d="M8 24h12M14 20v4" />
        <path d="M8 10l3 3-3 3M13 16h4" />
      </svg>
    );
  }
  if (type === "mobile") {
    return (
      <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="16" height="24" rx="3" />
        <path d="M12 22h4" />
      </svg>
    );
  }
  return (
    <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

export default function ServicesPageContent() {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLElement>(0.1);
  const [cardsRef, cardsVisible] = useScrollAnimation<HTMLDivElement>(0.1);
  const [processRef, processVisible] = useScrollAnimation<HTMLDivElement>(0.1);

  const processSteps = [
    {
      num: "01",
      title: "Discovery",
      description:
        "We start with a detailed conversation about your goals, audience, and requirements. I ask the right questions to understand your vision clearly.",
    },
    {
      num: "02",
      title: "Planning",
      description:
        "I create a project roadmap with clear milestones, wireframes or mockups, and technical specifications. You know exactly what to expect.",
    },
    {
      num: "03",
      title: "Development",
      description:
        "Building begins with regular check-ins and progress updates. I write clean, documented code and design with purpose at every step.",
    },
    {
      num: "04",
      title: "Delivery",
      description:
        "Thorough testing, refinements, and deployment. I hand over everything with documentation and provide post-launch support as needed.",
    },
  ];

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
              "radial-gradient(ellipse at 70% 30%, rgba(57, 255, 20, 0.04) 0%, transparent 50%)",
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
              Services
            </span>
            <h1 className="heading-xl" style={{ marginBottom: "1rem" }}>
              What I <span style={{ color: "var(--accent)" }}>Offer</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: "560px" }}>
              End-to-end digital product services — from concept to launch. Clear deliverables,
              transparent process, professional results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section className="section-padding" style={{ paddingTop: "2rem" }}>
        <div className="container-custom">
          <div
            ref={cardsRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className="card"
                style={{
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  opacity: cardsVisible ? 1 : 0,
                  transform: cardsVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "var(--radius-md)",
                    background: "var(--accent-subtle)",
                    border: "1px solid var(--border-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "2rem",
                  }}
                >
                  <ServiceIcon type={service.icon} />
                </div>

                {/* Title & Description */}
                <h2 className="heading-md" style={{ marginBottom: "1rem" }}>
                  {service.title}
                </h2>
                <p className="body-md" style={{ marginBottom: "2rem" }}>
                  {service.description}
                </p>

                {/* Deliverables */}
                <div style={{ marginBottom: "2rem", flex: 1 }}>
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--text-muted)",
                      marginBottom: "1rem",
                    }}
                  >
                    What You Get
                  </div>
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.75rem",
                          fontSize: "0.875rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.5,
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent)",
                            fontSize: "0.875rem",
                            marginTop: "1px",
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
                    paddingTop: "1.5rem",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--text-muted)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Tools I Use
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        style={{
                          padding: "0.375rem 0.75rem",
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          borderRadius: "var(--radius-sm)",
                          background: "var(--bg-tertiary)",
                          color: "var(--text-tertiary)",
                          fontFamily: "var(--font-mono)",
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
                          e.currentTarget.style.color = "var(--text-tertiary)";
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
        <div className="container-custom">
          <div
            ref={processRef}
            style={{
              opacity: processVisible ? 1 : 0,
              transform: processVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              marginBottom: "4rem",
            }}
          >
            <span className="label" style={{ marginBottom: "0.75rem", display: "block" }}>
              Process
            </span>
            <h2 className="heading-lg" style={{ marginBottom: "0.5rem" }}>
              How I Work
            </h2>
            <p className="body-lg" style={{ maxWidth: "560px" }}>
              A structured, transparent approach from first conversation to final delivery.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {processSteps.map((step, index) => (
              <div
                key={step.num}
                style={{
                  opacity: processVisible ? 1 : 0,
                  transform: processVisible ? "translateY(0)" : "translateY(30px)",
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 150}ms`,
                  position: "relative",
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    fontSize: "3rem",
                    fontWeight: 800,
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent)",
                    opacity: 0.15,
                    lineHeight: 1,
                    marginBottom: "-0.5rem",
                    letterSpacing: "-0.05em",
                  }}
                >
                  {step.num}
                </div>
                <h3 className="heading-sm" style={{ marginBottom: "0.75rem" }}>
                  {step.title}
                </h3>
                <p className="body-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div
          className="container-custom"
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
        >
          <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
            Ready to start a project?
          </h2>
          <p className="body-lg" style={{ marginBottom: "2rem" }}>
            Let&apos;s discuss your requirements and find the best approach for your goals.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary" id="services-cta-contact">
              Get in Touch
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/portfolio" className="btn btn-secondary" id="services-cta-work">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
