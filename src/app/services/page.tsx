import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional web development, mobile app development, and graphic design services. Custom solutions built with modern technologies and delivered with precision.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
