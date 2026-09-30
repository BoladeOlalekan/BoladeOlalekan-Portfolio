import type { Metadata } from "next";
import { ThemeProvider } from "@/lib/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = { variable: "--font-geist-sans" };
const geistMono = { variable: "--font-geist-mono" };

export const metadata: Metadata = {
  title: {
    default: "Portfolio - Web Developer, Mobile App Developer & Graphic Designer",
    template: "%s - Portfolio",
  },
  description:
    "Multidisciplinary creator specializing in web development, mobile app development, and graphic design. Building fast, accessible, and visually compelling digital products.",
  keywords: [
    "web developer",
    "mobile app developer",
    "graphic designer",
    "portfolio",
    "react",
    "next.js",
    "flutter",
    "ui/ux",
    "frontend developer",
    "full-stack developer",
  ],
  openGraph: {
    title: "Portfolio - Web Developer, Mobile App Developer & Graphic Designer",
    description:
      "Multidisciplinary creator specializing in web development, mobile app development, and graphic design.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="theme-color" content="#fafafa" />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem("portfolio-theme");
                if (stored === "dark") {
                  document.documentElement.setAttribute("data-theme", "dark");
                  const meta = document.querySelector('meta[name="theme-color"]');
                  if (meta) meta.setAttribute("content", "#0a0a0a");
                } else {
                  document.documentElement.setAttribute("data-theme", "light");
                  const meta = document.querySelector('meta[name="theme-color"]');
                  if (meta) meta.setAttribute("content", "#fafafa");
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ThemeProvider>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
