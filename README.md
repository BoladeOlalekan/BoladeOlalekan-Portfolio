# Bolade Olalekan - Personal Portfolio

A sleek, modern, and high-performance personal portfolio built to showcase a multi-disciplinary skill set spanning Web Development, Mobile App Development, and Graphic Design.

Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, this portfolio emphasizes visual excellence, fluid micro-interactions, responsive design, and fast load times.

---

## 🚀 Key Features

- **Multi-Disciplinary Showcase**: Dedicated sections highlighting projects across Web Development, Mobile Apps, and Graphic Design.
- **Light & Dark Mode**:
  - Light mode by default with clean, high-contrast aesthetics.
  - Dark mode with sleek charcoal surfaces and vibrant neon accents.
  - Zero-FOUC (Flash of Unstyled Content) initial render via inline script.
  - Fluid, optimized 400ms transitions across all surfaces with an animated rotating Sun/Moon toggle.
- **Interactive Skills Section**:
  - Synchronized skills data between Home and Services.
  - Smart 7-skill visible limit per discipline with an interactive `+N more` floating card on hover.
- **Dynamic Selected Works Mix**:
  - Curated mix of 6 projects (2 Web, 2 Mobile, 2 Graphic Design) under the "All Work" tab.
  - Individual case study pages (`/portfolio/[slug]`) statically prerendered with SSG.
- **Serverless Contact Form**:
  - Integrated via server-side Next.js route handler (`/api/contact`) powered by Web3Forms.
  - Secure environment variable handling with user feedback states.
- **CV / Resume Download**: Direct download configured with the exact formatted filename (`Bolade Olalekan CV.pdf`).
- **Direct Social Integration**: Linked profiles for GitHub, LinkedIn, Pinterest, and Dribbble.

---

## 🛠️ Tech Stack

### Frontend & Framework
- **Framework**: Next.js 16 (App Router with Turbopack)
- **Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 & custom CSS design tokens
- **Typography**: Geist Sans & Geist Mono

### Core Domains & Capabilities
- **Web Development**: React, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, Express, NoSQL, PostgreSQL, Supabase
- **Mobile Development**: Flutter, Dart, React Native, Cordova, Riverpod, Firebase, NoSQL, SQLite
- **Graphic Design**: Figma, Adobe Photoshop, Adobe Illustrator, Affinity, Lightroom, Brand Identity, Canva, Poster & Flyer Design

---

## 📂 Project Structure

```text
├── public/                     # Static assets (images, icons, resume PDF)
│   ├── images/
│   │   ├── projects/           # Screenshots and preview flyers
│   │   └── ...                 # Profile portraits and hero images
│   ├── Bolade-Olalekan-CV.pdf  # Downloadable resume
│   └── resume.pdf
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/              # About page
│   │   ├── api/
│   │   │   └── contact/        # Server-side Web3Forms contact API route
│   │   ├── contact/            # Contact page with interactive form
│   │   ├── portfolio/          # Portfolio catalog and [slug] case studies
│   │   ├── services/           # Services breakdown
│   │   ├── globals.css         # Design tokens, keyframes, fluid theme transitions
│   │   ├── layout.tsx          # Root layout with theme initialization script
│   │   └── page.tsx            # Main homepage
│   ├── components/             # Reusable UI components
│   │   ├── sections/           # Hero, About, Skills, Portfolio, Services, Contact
│   │   ├── Header.tsx          # Sticky navigation with animated theme toggle
│   │   └── Footer.tsx          # Global footer with social links
│   └── lib/                    # Data sources, custom hooks, and context
│       ├── data.ts             # Single source of truth for projects, skills, services
│       ├── hooks.ts            # Scroll and intersection observer hooks
│       └── theme-provider.tsx  # Light/Dark mode state and transition orchestration
├── .gitignore                  # Git ignore rules (protects .env files)
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies and build scripts
└── tsconfig.json               # TypeScript configuration
```

---

## 📬 Contact & Connect

- **Portfolio**: [Live Website](https://github.com/BoladeOlalekan/BoladeOlalekan-Portfolio)
- **GitHub**: [@BoladeOlalekan](https://github.com/BoladeOlalekan)
- **LinkedIn**: [Olalekan Bolade](https://www.linkedin.com/in/olalekan-bolade-a7921a243)
- **Pinterest**: [@bolexi_01](https://www.pinterest.com/bolexi_01/)
- **Dribbble**: [@Bolexis](https://dribbble.com/Bolexis)
- **Email**: boladeolalekan01@gmail.com

---

## 📝 License

This project is created and maintained by **Bolade Olalekan**. All rights reserved.
