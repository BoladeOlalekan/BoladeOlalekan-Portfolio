"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollAnimation } from "@/lib/hooks";

export default function AboutSection() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>(0.1);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding"
      style={{ position: "relative" }}
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
            About
          </span>
          <h2 className="heading-lg">Who I Am</h2>
        </div>

        {/* Two Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          {/* Left: Avatar + Quick Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "2rem",
              alignItems: "start",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
            }}
          >
            {/* Avatar */}
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "2px solid var(--border)",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <Image
                src="/images/profile-avatar.png"
                alt="Profile avatar"
                fill
                style={{ objectFit: "cover" }}
                sizes="120px"
              />
            </div>

            {/* Bio */}
            <div>
              <p
                className="body-lg"
                style={{ marginBottom: "1rem" }}
              >
                I&apos;m a multidisciplinary developer and designer with a passion for creating
                digital products that are both technically sound and visually refined.
                With experience spanning web development, mobile applications, and graphic
                design, I bring a holistic perspective to every project.
              </p>
              <p
                className="body-md"
                style={{ marginBottom: "1.5rem" }}
              >
                My approach combines clean, maintainable code with thoughtful design decisions.
                I believe the best digital products emerge when engineering precision meets
                creative vision — and I work across both disciplines to deliver exactly that.
              </p>

              <Link href="/about" className="btn btn-secondary" id="about-cta-more" style={{ marginTop: "0.5rem" }}>
                More About Me
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1.5rem",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 400ms",
            }}
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "3", label: "Disciplines" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card"
                style={{
                  padding: "1.5rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.value}
                </div>
                <div className="body-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
