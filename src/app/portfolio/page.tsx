import type { Metadata } from "next";
import PortfolioPageContent from "./PortfolioPageContent";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected projects across web development, mobile app development, and graphic design. Each case study showcases the problem, process, solution, and results.",
};

export default function PortfolioPage() {
  return <PortfolioPageContent />;
}
