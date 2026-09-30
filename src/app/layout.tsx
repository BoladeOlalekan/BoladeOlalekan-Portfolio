import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/lib/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = { variable: "--font-geist-sans" };
const geistMono = { variable: "--font-geist-mono" };

export const viewport: Viewport = {
  themeColor: "#fafafa",
};

export const metadata: Metadata = {
  title: {
    default: "Portfolio- Bolade Olalekan",
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
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Portfolio- Bolade Olalekan",
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
      <body
        suppressHydrationWarning
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var s=localStorage.getItem("portfolio-theme");if(s==="dark")document.documentElement.setAttribute("data-theme","dark");}catch(e){}`,
          }}
        />
        <ThemeProvider>
          <Header />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
