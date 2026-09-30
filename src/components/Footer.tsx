"use client";

import Link from "next/link";
import { navLinks, socialLinks } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-secondary)",
        padding: "4rem 0 2rem",
      }}
    >
      <div className="container-custom">
        {/* Top Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                color: "var(--text-primary)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "var(--accent)",
                  display: "inline-block",
                }}
              />
              ƁƠԼЄ×͜×
            </Link>
            <p className="body-sm" style={{ maxWidth: "280px" }}>
              Building digital experiences that combine clean code, intuitive design, and measurable results.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              Navigation
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-tertiary)",
                    textDecoration: "none",
                    transition: "color var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-tertiary)"; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              Connect
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
              {socialLinks.map((link) => {
                const getFooterIcon = (iconName: string) => {
                  switch (iconName) {
                    case "github":
                      return (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      );
                    case "linkedin":
                      return (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      );
                    case "dribbble":
                      return (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.89 10.428c-.14-.028-2.613-.508-5.244-.228.455 1.25.84 2.54 1.134 3.842 2.373-.787 3.978-2.57 4.11-3.614zm-4.995-5.918c-1.398 2.38-3.376 4.417-5.71 5.92-.09-.196-.178-.396-.27-.597-1.127-2.45-2.52-4.57-4.108-6.24 2.1-.89 4.417-1.39 6.848-1.39 1.154 0 2.26.177 3.24.507v-.2zm-12.393 2.1c1.517 1.604 2.85 3.64 3.93 6.002-2.905.885-5.986.9-6.324.9-.07-.46-.108-.93-.108-1.41 0-2.02.6-3.89 1.63-5.46l.872-.032zm-1.99 8.39c.32-.008 2.66-.05 5.5-.78.536 1.43 1 2.89 1.38 4.35-3.36-.61-5.74-2.39-6.88-3.57zm9.64 7.02c-.39-1.38-.83-2.76-1.34-4.12 2.39-.34 4.79.08 5.04.13-.59 2.01-1.92 3.69-3.7 4.72v-.73zm4.56-5.87c-.36-.07-2.38-.45-4.47-.18-.3-.89-.63-1.78-.99-2.65 2.16-1.4 4-3.26 5.34-5.44.75 1.5 1.18 3.19 1.18 4.98 0 1.2-.2 2.35-.56 3.42l-.5-.13z" />
                        </svg>
                      );
                    case "pinterest":
                      return (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
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
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-tertiary)",
                      textDecoration: "none",
                      transition: "color var(--transition-fast)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-tertiary)"; }}
                  >
                    <span style={{ display: "flex", alignItems: "center" }}>{getFooterIcon(link.icon)}</span>
                    <span>{link.name}</span>
                    <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>↗</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: "1rem",
              }}
            >
              Get in Touch
            </h4>
            <a
              href="mailto:lekanseyibolade@gmail.com"
              style={{
                fontSize: "0.875rem",
                color: "var(--accent)",
                textDecoration: "none",
                transition: "opacity var(--transition-fast)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              lekanseyibolade@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.5rem" }} />

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p className="body-sm" style={{ color: "var(--text-muted)" }}>
            © {currentYear} ƁƠԼЄ×͜×. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
