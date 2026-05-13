"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/theme-provider";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        id="site-header"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: isScrolled ? "0.75rem 0" : "1.25rem 0",
          background: isScrolled
            ? "rgba(var(--bg-primary-rgb, 10, 10, 10), 0.85)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: isScrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="container-custom" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <Link
            href="/"
            id="site-logo"
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "color var(--transition-fast)",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "var(--accent)",
                display: "inline-block",
                boxShadow: "0 0 12px rgba(57, 255, 20, 0.4)",
              }}
            />
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: pathname === link.href ? "var(--accent)" : "var(--text-tertiary)",
                  textDecoration: "none",
                  transition: "color var(--transition-fast)",
                  position: "relative",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== link.href) {
                    e.currentTarget.style.color = "var(--text-primary)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.href) {
                    e.currentTarget.style.color = "var(--text-tertiary)";
                  }
                }}
              >
                {link.label}
                {pathname === link.href && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-6px",
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: "var(--accent)",
                      borderRadius: "1px",
                    }}
                  />
                )}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              id="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                border: "1.5px solid var(--border)",
                background: "transparent",
                color: "var(--text-tertiary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all var(--transition-fast)",
                fontSize: "1rem",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--text-tertiary)";
              }}
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
          </nav>

          {/* Mobile Controls */}
          <div className="hide-desktop" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1.5px solid var(--border)",
                background: "transparent",
                color: "var(--text-tertiary)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.875rem",
              }}
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-sm)",
                border: "1.5px solid var(--border)",
                background: "transparent",
                color: "var(--text-primary)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: isMobileMenuOpen ? "0" : "5px",
                padding: "8px",
              }}
            >
              <span
                style={{
                  width: "16px",
                  height: "2px",
                  background: "currentColor",
                  borderRadius: "1px",
                  transition: "all var(--transition-fast)",
                  transform: isMobileMenuOpen ? "translateY(1px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  width: "16px",
                  height: "2px",
                  background: "currentColor",
                  borderRadius: "1px",
                  transition: "all var(--transition-fast)",
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  width: "16px",
                  height: "2px",
                  background: "currentColor",
                  borderRadius: "1px",
                  transition: "all var(--transition-fast)",
                  transform: isMobileMenuOpen ? "translateY(-1px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 999,
          background: "var(--bg-primary)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
          transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: pathname === link.href ? "var(--accent)" : "var(--text-primary)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isMobileMenuOpen ? 1 : 0,
              transitionDelay: `${i * 80}ms`,
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
}
