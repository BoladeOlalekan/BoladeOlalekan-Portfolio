"use client";

import Link from "next/link";
import { useScrollAnimation } from "@/lib/hooks";

export default function ContactSection() {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>(0.1);

  return (
    <section
      id="contact-cta"
      ref={sectionRef}
      className="section-padding"
      style={{
        position: "relative",
        background: "var(--bg-secondary)",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(57, 255, 20, 0.04) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container-custom"
        style={{
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="label" style={{ marginBottom: "0.75rem", display: "block" }}>
            Get Started
          </span>
          <h2 className="heading-lg" style={{ marginBottom: "1rem" }}>
            Have a project in mind?
          </h2>
          <p
            className="body-lg"
            style={{ marginBottom: "2.5rem" }}
          >
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Let&apos;s build something great together.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn btn-primary" id="contact-cta-reach">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <a
              href="mailto:hello@portfolio.dev"
              className="btn btn-secondary"
              id="contact-cta-email"
            >
              hello@portfolio.dev
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
