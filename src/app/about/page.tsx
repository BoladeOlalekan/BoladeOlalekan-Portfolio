import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about my background, design philosophy, technical expertise, and the tools I use to build digital products across web, mobile, and graphic design.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
