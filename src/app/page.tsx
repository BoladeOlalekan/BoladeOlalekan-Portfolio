import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";

import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <AboutSection />
      <SkillsSection />
      <div className="section-divider" />
      <PortfolioSection />
      <ServicesSection />
      <div className="section-divider" />

      <ContactSection />
    </>
  );
}
