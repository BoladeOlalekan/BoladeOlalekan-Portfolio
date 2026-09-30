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

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Form delivery error:", error);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
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
                    href="mailto:lekanseyibolade@gmail.com"
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
                        lekanseyibolade@gmail.com
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
                  {socialLinks.map((link) => {
                    const getIcon = (iconName: string) => {
                      switch (iconName) {
                        case "github":
                          return (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                          );
                        case "linkedin":
                          return (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          );
                        case "dribbble":
                          return (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.89 10.428c-.14-.028-2.613-.508-5.244-.228.455 1.25.84 2.54 1.134 3.842 2.373-.787 3.978-2.57 4.11-3.614zm-4.995-5.918c-1.398 2.38-3.376 4.417-5.71 5.92-.09-.196-.178-.396-.27-.597-1.127-2.45-2.52-4.57-4.108-6.24 2.1-.89 4.417-1.39 6.848-1.39 1.154 0 2.26.177 3.24.507v-.2zm-12.393 2.1c1.517 1.604 2.85 3.64 3.93 6.002-2.905.885-5.986.9-6.324.9-.07-.46-.108-.93-.108-1.41 0-2.02.6-3.89 1.63-5.46l.872-.032zm-1.99 8.39c.32-.008 2.66-.05 5.5-.78.536 1.43 1 2.89 1.38 4.35-3.36-.61-5.74-2.39-6.88-3.57zm9.64 7.02c-.39-1.38-.83-2.76-1.34-4.12 2.39-.34 4.79.08 5.04.13-.59 2.01-1.92 3.69-3.7 4.72v-.73zm4.56-5.87c-.36-.07-2.38-.45-4.47-.18-.3-.89-.63-1.78-.99-2.65 2.16-1.4 4-3.26 5.34-5.44.75 1.5 1.18 3.19 1.18 4.98 0 1.2-.2 2.35-.56 3.42l-.5-.13z" />
                            </svg>
                          );
                        case "pinterest":
                          return (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                            </svg>
                          );
                        default:
                          return null;
                      }
                    };

                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        id={`social-${link.icon}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "0.875rem 1rem",
                          borderRadius: "var(--radius-md)",
                          border: "1px solid var(--border)",
                          textDecoration: "none",
                          fontSize: "0.875rem",
                          fontWeight: 500,
                          color: "var(--text-secondary)",
                          transition: "all var(--transition-fast)",
                          background: "var(--bg-secondary)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = "var(--border-accent)";
                          e.currentTarget.style.color = "var(--accent)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--border)";
                          e.currentTarget.style.color = "var(--text-secondary)";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                          <span style={{ display: "flex", alignItems: "center" }}>{getIcon(link.icon)}</span>
                          <span>{link.name}</span>
                        </div>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 12L12 4M12 4H6M12 4v6" />
                        </svg>
                      </a>
                    );
                  })}
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
