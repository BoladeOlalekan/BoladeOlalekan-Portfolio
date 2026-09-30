"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "@/lib/data";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animated grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 60;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      ctx.strokeStyle = "rgba(57, 255, 20, 0.04)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * spacing;
        const wave = Math.sin(time * 0.5 + i * 0.1) * 2;
        ctx.beginPath();
        ctx.moveTo(x + wave, 0);
        ctx.lineTo(x - wave, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let j = 0; j < rows; j++) {
        const y = j * spacing;
        const wave = Math.sin(time * 0.3 + j * 0.15) * 2;
        ctx.beginPath();
        ctx.moveTo(0, y + wave);
        ctx.lineTo(canvas.width, y - wave);
        ctx.stroke();
      }

      // Intersection dots
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing;
          const y = j * spacing;
          const dist = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          );
          const maxDist = Math.sqrt(
            Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2)
          );
          const opacity = Math.max(0, 0.15 - (dist / maxDist) * 0.15);
          const pulse = Math.sin(time * 0.8 + dist * 0.005) * 0.5 + 0.5;

          ctx.fillStyle = `rgba(57, 255, 20, ${opacity * pulse})`;
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 0.016;
      animationId = requestAnimationFrame(drawGrid);
    };

    resize();
    drawGrid();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-start md:justify-center overflow-hidden pt-32 pb-20 md:pt-32 md:pb-16"
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      />

      {/* Gradient Orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "20%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(57, 255, 20, 0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "10%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(57, 255, 20, 0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      {/* Content */}
      <div
        className="container-custom"
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "center",
            marginTop: "8rem",
          }}
        >
          {/* Text Content */}
          <div
            className="text-center md:text-left"
          >

            {/* Title */}
            <div
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "400ms",
                marginBottom: "1.5rem",
              }}
            >
              <h1 className="heading-xl" style={{ 
                marginBottom: "0.5rem", 
                lineHeight: 1.1 
              }}>
                I am Bolade Olalekan.
              </h1>
              <h2 
                style={{ 
                  color: "var(--text-secondary)", 
                  fontSize: "clamp(1.25rem, 2vw + 0.5rem, 1.75rem)", 
                  fontWeight: 600,
                  lineHeight: 1.4,
                  letterSpacing: "-0.01em"
                }}
              >
                Web Developer. <span style={{ color: "var(--accent)" }}>Mobile App Developer.</span> Graphic Designer.
              </h2>
            </div>

            {/* Subtitle */}
            <p
              className="body-lg mx-auto md:mx-0"
              style={{
                maxWidth: "600px",
                marginBottom: "2.5rem",
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "600ms",
              }}
            >
              I design and build digital products that are fast, accessible, and
              visually compelling - from responsive websites to cross-platform
              mobile apps and cohesive brand identities.
            </p>

            {/* CTAs */}
            <div
              className="justify-center md:justify-start"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "800ms",
              }}
            >
              <Link href="/portfolio" className="btn btn-primary" id="hero-cta-work">
                View Work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: "4px" }}>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/contact" className="btn btn-secondary" id="hero-cta-contact">
                Contact Me
              </Link>
            </div>

            {/* Social Links */}
            <div
              className="justify-center md:justify-start"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.875rem",
                marginTop: "1.75rem",
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                transitionDelay: "950ms",
              }}
            >
              <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)", fontWeight: 500 }}>
                Connect:
              </span>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {socialLinks.map((link) => {
                  const getHeroIcon = (iconName: string) => {
                    switch (iconName) {
                      case "github":
                        return (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                          </svg>
                        );
                      case "linkedin":
                        return (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        );
                      case "dribbble":
                        return (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.89 10.428c-.14-.028-2.613-.508-5.244-.228.455 1.25.84 2.54 1.134 3.842 2.373-.787 3.978-2.57 4.11-3.614zm-4.995-5.918c-1.398 2.38-3.376 4.417-5.71 5.92-.09-.196-.178-.396-.27-.597-1.127-2.45-2.52-4.57-4.108-6.24 2.1-.89 4.417-1.39 6.848-1.39 1.154 0 2.26.177 3.24.507v-.2zm-12.393 2.1c1.517 1.604 2.85 3.64 3.93 6.002-2.905.885-5.986.9-6.324.9-.07-.46-.108-.93-.108-1.41 0-2.02.6-3.89 1.63-5.46l.872-.032zm-1.99 8.39c.32-.008 2.66-.05 5.5-.78.536 1.43 1 2.89 1.38 4.35-3.36-.61-5.74-2.39-6.88-3.57zm9.64 7.02c-.39-1.38-.83-2.76-1.34-4.12 2.39-.34 4.79.08 5.04.13-.59 2.01-1.92 3.69-3.7 4.72v-.73zm4.56-5.87c-.36-.07-2.38-.45-4.47-.18-.3-.89-.63-1.78-.99-2.65 2.16-1.4 4-3.26 5.34-5.44.75 1.5 1.18 3.19 1.18 4.98 0 1.2-.2 2.35-.56 3.42l-.5-.13z" />
                          </svg>
                        );
                      case "pinterest":
                        return (
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
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
                      title={link.name}
                      aria-label={link.name}
                      id={`hero-social-${link.icon}`}
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "var(--radius-sm)",
                        background: "var(--bg-secondary)",
                        border: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--text-tertiary)",
                        textDecoration: "none",
                        transition: "all var(--transition-fast)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "var(--border-accent)";
                        e.currentTarget.style.color = "var(--accent)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--border)";
                        e.currentTarget.style.color = "var(--text-tertiary)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      {getHeroIcon(link.icon)}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div
            style={{
              position: "relative",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateX(0)" : "translateX(40px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: "500ms",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "450px",
                aspectRatio: "4/5",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow-lg)",
              }}
            >
              <Image
                src="/images/profile-portrait-new.jpg"
                alt="Profile portrait"
                fill
                style={{ 
                  objectFit: "cover",
                }}
                priority
                sizes="(max-width: 768px) 100vw, 450px"
              />
              
              {/* Decorative Frame Elements */}
              <div
                style={{
                  position: "absolute",
                  inset: "1rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "calc(var(--radius-xl) - 0.5rem)",
                  pointerEvents: "none",
                }}
              />
            </div>
            
            {/* Background Accent for Image */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "-10%",
                width: "100%",
                height: "80%",
                background: "var(--accent-subtle)",
                borderRadius: "var(--radius-xl)",
                zIndex: -1,
                transform: "rotate(6deg)",
              }}
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: isLoaded ? 0.5 : 0,
            transition: "opacity 1s ease 1.2s",
          }}
        >
          <span className="body-sm" style={{ color: "var(--text-muted)", fontSize: "0.6875rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "linear-gradient(to bottom, var(--accent), transparent)",
              animation: "grid-move 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
