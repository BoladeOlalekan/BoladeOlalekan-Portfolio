"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
              <h1 className="heading-xl" style={{ marginBottom: "0.5rem", lineHeight: 1.1 }}>
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
              visually compelling — from responsive websites to cross-platform
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
                src="/images/hero-profile.png"
                alt="Profile portrait"
                fill
                style={{ 
                  objectFit: "cover",
                  filter: "grayscale(100%) contrast(1.15) brightness(1.05)"
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
