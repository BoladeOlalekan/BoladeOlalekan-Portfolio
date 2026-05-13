"use client";

import { useState, type FormEvent } from "react";
import { socialLinks } from "@/lib/data";
import { useScrollAnimation } from "@/lib/hooks";

export default function ContactPageContent() {
  const [heroRef, heroVisible] = useScrollAnimation<HTMLElement>(0.1);
  const [formRef, formVisible] = useScrollAnimation<HTMLDivElement>(0.1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputStyles: React.CSSProperties = {
    width: "100%",
    padding: "0.875rem 1rem",
    fontSize: "0.9375rem",
    fontFamily: "inherit",
    color: "var(--text-primary)",
    background: "var(--bg-tertiary)",
    border: "1.5px solid var(--border)",
    borderRadius: "var(--radius-md)",
    transition: "all var(--transition-fast)",
    outline: "none",
  };

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
              "radial-gradient(ellipse at 30% 50%, rgba(57, 255, 20, 0.04) 0%, transparent 50%)",
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
              Contact
            </span>
            <h1 className="heading-xl" style={{ marginBottom: "1rem" }}>
              Let&apos;s <span style={{ color: "var(--accent)" }}>Talk</span>
            </h1>
            <p className="body-lg" style={{ maxWidth: "520px" }}>
              Have a project in mind, a question, or just want to connect?
              Fill out the form below or reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding" style={{ paddingTop: "2rem" }}>
        <div className="container-custom">
          <div
            ref={formRef}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "start",
            }}
          >
            {/* Contact Form */}
            <div
              style={{
                opacity: formVisible ? 1 : 0,
                transform: formVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {isSubmitted ? (
                <div
                  className="card"
                  style={{
                    padding: "3rem",
                    textAlign: "center",
                    animation: "scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: "var(--accent-subtle)",
                      border: "2px solid var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                      fontSize: "1.5rem",
                    }}
                  >
                    ✓
                  </div>
                  <h3 className="heading-md" style={{ marginBottom: "0.75rem" }}>
                    Message Sent
                  </h3>
                  <p className="body-md" style={{ marginBottom: "1.5rem" }}>
                    Thank you for reaching out. I&apos;ll review your message and get back to you
                    within 24-48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form">
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        style={{
                          display: "block",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        style={inputStyles}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-glow)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          display: "block",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        style={inputStyles}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-glow)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        style={{
                          display: "block",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        style={{
                          ...inputStyles,
                          cursor: "pointer",
                          appearance: "none",
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23737373' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 1rem center",
                          paddingRight: "2.5rem",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-glow)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <option value="">Select a topic</option>
                        <option value="web">Web Development Project</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="design">Graphic Design & Branding</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        style={{
                          display: "block",
                          fontSize: "0.8125rem",
                          fontWeight: 600,
                          color: "var(--text-secondary)",
                          marginBottom: "0.5rem",
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Tell me about your project, goals, and timeline..."
                        style={{
                          ...inputStyles,
                          resize: "vertical",
                          minHeight: "140px",
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = "var(--accent)";
                          e.currentTarget.style.boxShadow = "0 0 0 3px var(--accent-glow)";
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="btn btn-primary"
                      id="contact-submit"
                      disabled={isSubmitting}
                      style={{
                        width: "100%",
                        padding: "1rem",
                        fontSize: "0.9375rem",
                        opacity: isSubmitting ? 0.7 : 1,
                        cursor: isSubmitting ? "not-allowed" : "pointer",
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span
                            style={{
                              width: "16px",
                              height: "16px",
                              border: "2px solid transparent",
                              borderTopColor: "#0a0a0a",
                              borderRadius: "50%",
                              animation: "spin 0.6s linear infinite",
                              display: "inline-block",
                            }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M2 14l12-6L2 2v4.67L10 8 2 9.33V14z" fill="currentColor" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div
              style={{
                opacity: formVisible ? 1 : 0,
                transform: formVisible ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 200ms",
              }}
            >
              {/* Direct Contact */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h3 className="heading-sm" style={{ marginBottom: "1.5rem" }}>
                  Direct Contact
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <a
                    href="mailto:hello@portfolio.dev"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      textDecoration: "none",
                      padding: "1rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border)",
                      transition: "all var(--transition-fast)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--border-accent)";
                      e.currentTarget.style.background = "var(--accent-subtle)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--accent-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="3" width="14" height="10" rx="1.5" />
                        <path d="M1 3l7 5 7-5" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-primary)" }}>
                        Email
                      </div>
                      <div style={{ fontSize: "0.8125rem", color: "var(--accent)" }}>
                        hello@portfolio.dev
                      </div>
                    </div>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "1rem",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--accent-subtle)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="8" cy="8" r="6" />
                        <path d="M8 4v4l2.5 1.5" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-primary)" }}>
                        Response Time
                      </div>
                      <div style={{ fontSize: "0.8125rem", color: "var(--text-tertiary)" }}>
                        Usually within 24 hours
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h3 className="heading-sm" style={{ marginBottom: "1.5rem" }}>
                  Find Me Online
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      id={`social-${link.icon}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.75rem 1rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border)",
                        textDecoration: "none",
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "var(--text-secondary)",
                        transition: "all var(--transition-fast)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-accent)";
                        e.currentTarget.style.color = "var(--accent)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text-secondary)";
                      }}
                    >
                      {link.name}
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12L12 4M12 4H6M12 4v6" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "var(--radius-md)",
                  background: "var(--accent-subtle)",
                  border: "1px solid var(--border-accent)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.75rem" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      animation: "pulse-glow 2s infinite",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                    }}
                  >
                    Currently Available
                  </span>
                </div>
                <p className="body-sm">
                  Open to freelance projects, collaborations, and full-time opportunities.
                  Let&apos;s discuss how I can help with your next project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
