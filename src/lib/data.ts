// ===== Portfolio Data & Content =====

export interface Project {
  slug: string;
  title: string;
  role: string;
  category: "web" | "mobile" | "design";
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  techStack: string[];
  problem: string;
  process: string;
  solution: string;
  results: string;
  liveUrl?: string;
  githubUrl?: string;
  images: string[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface Service {
  title: string;
  description: string;
  deliverables: string[];
  tools: string[];
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

// ===== Navigation =====
export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

// ===== Skills Data =====
export const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications with modern frameworks and best practices.",
    skills: [
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Tailwind CSS", icon: "tailwind" },
    ],
  },
  {
    title: "Mobile Development",
    description:
      "Crafting native-like mobile experiences across iOS and Android with cross-platform frameworks.",
    skills: [
      { name: "Flutter", icon: "flutter" },
      { name: "React Native", icon: "react-native" },
      { name: "Cordova", icon: "cordova" },
      { name: "Dart", icon: "dart" },
      { name: "Firebase", icon: "firebase" },
      { name: "Supabase", icon: "supabase" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    title: "Graphic Design",
    description:
      "Creating compelling visual identities, illustrations, and brand systems that communicate with clarity.",
    skills: [
      { name: "Figma", icon: "figma" },
      { name: "Photoshop", icon: "photoshop" },
      { name: "Illustrator", icon: "illustrator" },
      { name: "Canva", icon: "canva" },
      { name: "Branding", icon: "branding" },
      { name: "UI/UX Design", icon: "uiux" },
    ],
  },
];

// ===== Projects Data =====
export const projects: Project[] = [
  {
    slug: "luxe-ecommerce",
    title: "Luxe E-Commerce Platform",
    role: "Full-Stack Web Developer",
    category: "web",
    shortDescription:
      "A premium online fashion store with real-time inventory, seamless checkout, and personalized recommendations.",
    fullDescription:
      "Luxe is a high-end e-commerce platform built for a luxury fashion retailer. The project required a visually stunning storefront with enterprise-grade performance, capable of handling thousands of concurrent users during flash sales.",
    thumbnail: "/images/projects/ecommerce.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL", "Prisma"],
    problem:
      "The client's existing WordPress-based store couldn't handle traffic spikes, had slow page loads, and lacked mobile responsiveness. Conversion rates were declining and the user experience felt outdated.",
    process:
      "I began with a thorough UX audit and competitive analysis. Wireframes were designed in Figma, followed by a component-driven development approach using Next.js App Router. Performance budgets were set from day one.",
    solution:
      "Built a fully server-rendered Next.js application with optimistic UI updates, edge-cached product pages, and a headless CMS for content management. Stripe integration handles payments with PCI compliance.",
    results:
      "Page load times dropped from 4.2s to 1.1s. Mobile conversion rate increased by 35%. The platform successfully handled 10x traffic during launch day with zero downtime.",
    liveUrl: "https://luxe-demo.vercel.app",
    githubUrl: "https://github.com/username/luxe-ecommerce",
    images: ["/images/projects/ecommerce.png"],
  },
  {
    slug: "fitpulse-mobile",
    title: "FitPulse Fitness Tracker",
    role: "Mobile App Developer",
    category: "mobile",
    shortDescription:
      "A cross-platform fitness tracking app with workout plans, progress analytics, and social features.",
    fullDescription:
      "FitPulse is a comprehensive fitness tracking application built with Flutter, designed to help users track workouts, monitor progress, and stay motivated through social accountability features.",
    thumbnail: "/images/projects/fitness-app.png",
    techStack: ["Flutter", "Dart", "Firebase", "Cloud Functions", "Figma"],
    problem:
      "Existing fitness apps were either too complex for beginners or too simple for intermediate users. There was a gap in the market for an app that could scale with the user's fitness journey.",
    process:
      "User research with 50+ fitness enthusiasts informed the feature prioritization. I designed the UI in Figma with accessibility in mind, then built the app using Flutter's widget system with BLoC state management.",
    solution:
      "A cross-platform app with adaptive workout plans, real-time progress charts, social workout sharing, and integration with wearable devices via Bluetooth LE. Firebase handles auth, storage, and real-time sync.",
    results:
      "4.7 star rating on both App Store and Play Store. 15,000+ downloads in the first month. Daily active user retention at 42%, well above the industry average of 25%.",
    liveUrl: "https://fitpulse.app",
    githubUrl: "https://github.com/username/fitpulse",
    images: ["/images/projects/fitness-app.png"],
  },
  {
    slug: "nexus-brand-identity",
    title: "Nexus Brand Identity",
    role: "Graphic Designer",
    category: "design",
    shortDescription:
      "A complete brand identity system for a tech startup, including logo, color system, typography, and brand guidelines.",
    fullDescription:
      "Nexus is a B2B SaaS startup that needed a complete visual identity that communicated innovation, trust, and technical sophistication to enterprise clients.",
    thumbnail: "/images/projects/brand-identity.png",
    techStack: ["Illustrator", "Photoshop", "Figma", "After Effects"],
    problem:
      "The startup had no cohesive visual identity. Marketing materials were inconsistent, and the brand failed to differentiate from competitors in the crowded SaaS landscape.",
    process:
      "I conducted brand workshops with the founding team to define brand values, personality, and positioning. Mood boards and concept explorations led to three distinct directions before final refinement.",
    solution:
      "Delivered a comprehensive brand system including primary and secondary logos, color palette, typography hierarchy, iconography set, business cards, social templates, and a 40-page brand guidelines document.",
    results:
      "The rebrand contributed to a 60% increase in qualified leads through improved brand perception. Investor deck response rates improved by 45% after the visual refresh.",
    liveUrl: "https://behance.net/nexus-brand",
    images: ["/images/projects/brand-identity.png"],
  },
  {
    slug: "analytics-dashboard",
    title: "InsightFlow Analytics Dashboard",
    role: "Full-Stack Web Developer",
    category: "web",
    shortDescription:
      "A real-time analytics dashboard for SaaS companies to monitor key metrics, user behavior, and revenue trends.",
    fullDescription:
      "InsightFlow is an enterprise analytics platform that aggregates data from multiple sources into a unified, real-time dashboard with customizable widgets and automated reporting.",
    thumbnail: "/images/projects/dashboard.png",
    techStack: ["React", "TypeScript", "D3.js", "Node.js", "MongoDB", "WebSocket"],
    problem:
      "The client's team was spending 8+ hours per week manually compiling reports from multiple data sources. Decision-making was delayed by outdated information and data silos.",
    process:
      "I mapped out all data sources and designed a unified data schema. The UI was prototyped in Figma with a focus on information density without overwhelming the user. Real-time updates were implemented via WebSockets.",
    solution:
      "A modular dashboard with drag-and-drop widgets, real-time data streaming, automated PDF report generation, and role-based access control. Custom D3.js visualizations provide actionable insights.",
    results:
      "Reduced weekly reporting time from 8 hours to 15 minutes. The dashboard processes 2M+ events daily with sub-second latency. Client NPS improved by 20 points.",
    liveUrl: "https://insightflow-demo.vercel.app",
    githubUrl: "https://github.com/username/insightflow",
    images: ["/images/projects/dashboard.png"],
  },
  {
    slug: "tastebud-delivery",
    title: "TasteBud Food Delivery App",
    role: "Mobile App Developer",
    category: "mobile",
    shortDescription:
      "A food delivery mobile app connecting local restaurants with customers through a seamless ordering experience.",
    fullDescription:
      "TasteBud is a food delivery platform built with React Native, featuring real-time order tracking, restaurant management tools, and an intelligent recommendation engine.",
    thumbnail: "/images/projects/food-app.png",
    techStack: ["React Native", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Mapbox"],
    problem:
      "Local restaurants in the area lacked a unified delivery platform. Existing solutions charged excessive commissions, and customers had to switch between multiple apps to compare options.",
    process:
      "I conducted user interviews with both restaurant owners and customers. The app architecture was designed for scalability from the start, with separate modules for customer, restaurant, and driver experiences.",
    solution:
      "A three-sided marketplace with real-time GPS tracking, intelligent order routing, push notifications, in-app chat, and a restaurant analytics dashboard. Payments handled via Stripe Connect.",
    results:
      "Onboarded 120+ restaurants in the first quarter. Average delivery time of 28 minutes. 4.8 star rating with 92% customer satisfaction rate.",
    liveUrl: "https://tastebud.app",
    githubUrl: "https://github.com/username/tastebud",
    images: ["/images/projects/food-app.png"],
  },
];

// ===== Services Data =====
export const services: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks, optimized for performance, accessibility, and scalability. From landing pages to complex SaaS platforms.",
    deliverables: [
      "Responsive website or web application",
      "CMS integration & content management",
      "API development & third-party integrations",
      "Performance optimization & SEO",
      "Deployment & hosting setup",
    ],
    tools: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL"],
    icon: "web",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications that deliver native-like performance on both iOS and Android. Built with scalable architecture and intuitive user experiences.",
    deliverables: [
      "Cross-platform iOS & Android app",
      "Backend API & database architecture",
      "Push notifications & real-time features",
      "App Store & Play Store submission",
      "Post-launch support & maintenance",
    ],
    tools: ["Flutter", "React Native", "Firebase", "Dart", "REST APIs", "Supabase"],
    icon: "mobile",
  },
  {
    title: "Graphic Design & Branding",
    description:
      "Strategic visual identities and design systems that communicate your brand's value clearly. From logos to complete brand guidelines and marketing materials.",
    deliverables: [
      "Logo design & brand identity system",
      "Brand guidelines document",
      "Marketing & social media templates",
      "UI/UX design for digital products",
      "Print-ready collateral design",
    ],
    tools: ["Figma", "Adobe Illustrator", "Photoshop", "After Effects", "InDesign"],
    icon: "design",
  },
];

// ===== Testimonials Data =====
export const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "CEO",
    company: "TechVentures Inc.",
    content:
      "Working with this team transformed our digital presence completely. The e-commerce platform they built exceeded our performance targets and our customers love the new experience. Highly professional and detail-oriented.",
    avatar: "SM",
  },
  {
    name: "James Okoro",
    role: "Product Manager",
    company: "FitLife Solutions",
    content:
      "The mobile app delivered was exactly what we envisioned — intuitive, performant, and beautifully designed. The development process was transparent, and every milestone was hit on time. A true professional.",
    avatar: "JO",
  },
  {
    name: "Emily Chen",
    role: "Marketing Director",
    company: "Nexus Systems",
    content:
      "The brand identity work was outstanding. Every element, from the logo to the guidelines document, was crafted with intention and clarity. Our brand now communicates exactly who we are. Exceptional work.",
    avatar: "EC",
  },
];

// ===== Social Links =====
export const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "Dribbble", url: "https://dribbble.com", icon: "dribbble" },
  { name: "Behance", url: "https://behance.net", icon: "behance" },
];
