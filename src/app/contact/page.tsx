import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your next project. Available for web development, mobile app development, and graphic design work.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
