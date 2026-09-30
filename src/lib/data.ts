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
export const webSkills: Skill[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "JavaScript", icon: "javascript" },
  { name: "HTML5 & CSS3", icon: "html" },
  { name: "Node.js", icon: "nodejs" },
  { name: "REST APIs", icon: "api" },
  { name: "NoSQL", icon: "nosql" },
];

export const mobileSkills: Skill[] = [
  { name: "Flutter", icon: "flutter" },
  { name: "Dart", icon: "dart" },
  { name: "Riverpod", icon: "riverpod" },
  { name: "React Native", icon: "react-native" },
  { name: "Cordova", icon: "cordova" },
  { name: "Firebase", icon: "firebase" },
  { name: "Supabase", icon: "supabase" },
  { name: "NoSQL", icon: "nosql" },
  { name: "Mobile UI/UX", icon: "uiux" },
  { name: "REST APIs", icon: "api" },
];

export const designSkills: Skill[] = [
  { name: "Figma", icon: "figma" },
  { name: "Adobe Photoshop", icon: "photoshop" },
  { name: "Adobe Illustrator", icon: "illustrator" },
  { name: "Affinity", icon: "affinity" },
  { name: "Lightroom", icon: "lightroom" },
  { name: "Brand Identity", icon: "branding" },
  { name: "Canva", icon: "canva" },
  { name: "Poster & Flyer Design", icon: "branding" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and scalable web applications with modern frameworks and best practices.",
    skills: webSkills,
  },
  {
    title: "Mobile Development",
    description:
      "Crafting native-like mobile experiences across iOS and Android with cross-platform frameworks.",
    skills: mobileSkills,
  },
  {
    title: "Graphic Design",
    description:
      "Creating compelling visual identities, illustrations, and brand systems that communicate with clarity.",
    skills: designSkills,
  },
];

// ===== Projects Data =====
export const projects: Project[] = [
  {
    slug: "peernet-platform",
    title: "PeerNet Student Resource & Networking Hub",
    role: "Lead Full-Stack & Mobile Developer",
    category: "mobile",
    shortDescription:
      "A comprehensive student networking platform facilitating academic collaboration, event updates, resource sharing, and AI assistance within university communities.",
    fullDescription:
      "PeerNet is an all-in-one academic collaboration platform designed for students and educators. It combines real-time resource sharing, campus event management, student interest groups, and an integrated AI assistant to streamline university life.",
    thumbnail: "/images/projects/peernet.png",
    techStack: ["Flutter", "Dart", "JavaScript", "Tailwind CSS", "Firebase", "REST APIs"],
    problem:
      "Students struggled to find reliable study groups, stay updated on university events, and access past course resources across fragmented channels.",
    process:
      "Engineered a cross-platform mobile & admin portal architecture. Designed clean intuitive dashboards with real-time sync, event signup analytics, and custom AI chat capabilities.",
    solution:
      "Built PeerNet with Flutter for cross-platform mobile access and a responsive admin portal for university management. Integrated cloud backend and AI assistant for instant student inquiry answers.",
    results:
      "Streamlined student event signups, enabled instant peer-to-peer resource sharing, and achieved high engagement during campus hackathons.",
    liveUrl: "https://peernetadmin.netlify.app/",
    githubUrl: "https://github.com/BoladeOlalekan/PeerNet",
    images: ["/images/projects/peernet.png"],
  },
  {
    slug: "chef-bolex",
    title: "Chef Bolex - AI Recipe Generator",
    role: "Frontend Developer",
    category: "web",
    shortDescription:
      "An intelligent culinary assistant that generates gourmet recipes with step-by-step cooking guides and nutritional facts based on your available ingredients.",
    fullDescription:
      "Chef Bolex transforms random pantry items into delicious meals using artificial intelligence. Users can specify available ingredients, dietary preferences, and meal types to receive personalized gourmet recipes instantly.",
    thumbnail: "/images/projects/chef-bolex.png",
    techStack: ["React", "JavaScript", "Tailwind CSS", "AI API", "Netlify"],
    problem:
      "Pantry item waste and meal planning fatigue are common daily challenges. Existing recipe sites are cluttered with ads and hard to search by exact available ingredients.",
    process:
      "Created an interactive ingredient tag input component, real-time diet customizers, and integrated AI endpoint streaming to deliver instant recipe steps and nutritional breakdown cards.",
    solution:
      "Developed a high-performance React web application with responsive dark mode UI, optimistic state handling, and sleek recipe output cards.",
    results:
      "Empowered users to reduce food waste with instant recipe generation in under 2 seconds.",
    liveUrl: "https://chef-bolex.netlify.app/",
    githubUrl: "https://github.com/BoladeOlalekan/CHEF-CLAUDE",
    images: ["/images/projects/chef-bolex.png"],
  },
  {
    slug: "meme-generator",
    title: "Interactive Meme Generator",
    role: "Frontend Developer",
    category: "web",
    shortDescription:
      "A fun, dynamic meme creation studio featuring popular template integration, real-time canvas text editing, font styling, and instant image download.",
    fullDescription:
      "Meme Generator is a lightweight, responsive web application for creating and customizing viral internet memes. It connects to live template APIs and provides intuitive text styling, position controls, and instant export.",
    thumbnail: "/images/projects/meme-generator.png",
    techStack: ["React", "JavaScript", "HTML5 Canvas", "CSS3", "Imgflip API"],
    problem:
      "Many meme creation sites are bloated with aggressive popups, heavy watermarks, and slow rendering on mobile devices.",
    process:
      "Built a component-driven React app leveraging canvas rendering for real-time text overlay, custom font pickers, and clean layout controls.",
    solution:
      "Delivered a watermark-free, instant-load meme editor with live preview capabilities and quick social media export options.",
    results:
      "Achieved fast 60fps canvas text manipulation and instant 1-click image download for users.",
    liveUrl: "https://scr-meme-generator.netlify.app/",
    githubUrl: "https://github.com/BoladeOlalekan/MEME-GENERATOR",
    images: ["/images/projects/meme-generator.png"],
  },
  {
    slug: "flutter-ticket-app",
    title: "Flutter Flight & Event Ticket App",
    role: "Mobile App Developer",
    category: "mobile",
    shortDescription:
      "A cross-platform mobile application for seamless flight booking, seat selection, digital boarding passes with QR codes, and event schedules.",
    fullDescription:
      "Flutter Ticket App is a modern mobile experience for travelers and event attendees. Features include interactive flight search, real-time seat selector, digital boarding passes with dynamic QR validation, and schedule tracking.",
    thumbnail: "/images/projects/ticket-app.png",
    techStack: ["Flutter", "Dart", "Mobile UI/UX", "REST APIs", "Figma"],
    problem:
      "Traditional booking apps are often clunky, require complex navigation, and lack clean digital pass management for offline access.",
    process:
      "Designed pixel-perfect mobile screens in Figma and implemented stateful Flutter widgets for smooth tab navigation, seat matrix selection, and dynamic barcode generation.",
    solution:
      "Built a native-performing Flutter app compatible with both iOS and Android, offering offline boarding pass viewing and fast ticket booking flows.",
    results:
      "Created an intuitive 3-step booking experience with zero lag during seat map interactions.",
    liveUrl: "",
    githubUrl: "https://github.com/BoladeOlalekan/flutter-ticket_app",
    images: ["/images/projects/ticket-app.png"],
  },
  {
    slug: "age-calculator-app",
    title: "Interactive Age Calculator",
    role: "Frontend Developer",
    category: "web",
    shortDescription:
      "A sleek date calculation tool that computes exact age in years, months, and days with interactive form validation and fluid text counter animations.",
    fullDescription:
      "An accurate, micro-animated age calculation web app built as part of the Frontend Mentor challenge. Features robust edge-case validation for leap years and month lengths, coupled with smooth counter number animations.",
    thumbnail: "/images/projects/age-calc.png",
    techStack: ["JavaScript", "HTML5", "CSS3", "Form Validation", "Netlify"],
    problem:
      "Handling date math accurately across irregular month lengths and leap years while maintaining responsive design and accessible form validation.",
    process:
      "Implemented strict JS date object validation for past/future dates, invalid month days (e.g. Feb 31st), and keyframe number tick animations.",
    solution:
      "Built a clean, responsive UI with real-time error messages and smooth number ticker effects upon successful calculation.",
    results:
      "Passed all accessibility and responsive test benchmarks with 100% precision on date algorithms.",
    liveUrl: "https://fem-agecalc.netlify.app/",
    githubUrl: "https://github.com/BoladeOlalekan",
    images: ["/images/projects/age-calc.png"],
  },
  {
    slug: "welcome-back-to-school-flyer",
    title: "Welcome Back To School Flyer",
    role: "Graphic Designer",
    category: "design",
    shortDescription:
      "A vibrant welcome-back promotional flyer designed for NAESS FUTA Chapter, featuring bold typography and dynamic student imagery.",
    fullDescription:
      "Designed an eye-catching welcome-back flyer for the National Association of Edo State Students (NAESS) FUTA Chapter. The design combines bold red-orange gradients with energetic student photography and clear contact information hierarchy.",
    thumbnail: "/images/projects/design-school-flyer.png",
    techStack: ["Photoshop", "Illustrator", "Typography", "Print Design"],
    problem:
      "The student association needed a visually striking flyer to welcome freshers and returning students at the start of a new academic session.",
    process:
      "Selected a warm, inviting color palette with red-orange gradients. Composed student imagery with bold typographic hierarchy to create an energetic, welcoming feel.",
    solution:
      "Delivered a print-ready flyer with clear visual hierarchy, prominent contact details, and brand-consistent association logos.",
    results:
      "Successfully distributed across campus, driving engagement and event awareness for the new session.",
    liveUrl: "https://www.pinterest.com/pin/605171268726294045/",
    githubUrl: "",
    images: ["/images/projects/design-school-flyer.png"],
  },
  {
    slug: "church-anniversary-flyer",
    title: "Church Anniversary Celebration Flyer",
    role: "Graphic Designer",
    category: "design",
    shortDescription:
      "A premium 40th anniversary celebration flyer for Victory Baptist Church, featuring regal blue and gold aesthetics with dynamic photo composition.",
    fullDescription:
      "Created a celebratory event flyer for Victory Baptist Church's 40th anniversary and fundraising launch. The design blends regal blue tones with gold accents, confetti effects, and layered photography for a festive, dignified look.",
    thumbnail: "/images/projects/design-pin2.png",
    techStack: ["Photoshop", "Illustrator", "Event Design", "Print Design"],
    problem:
      "The church needed a flyer that conveyed both celebration and dignity for a milestone 40th anniversary event and fundraising campaign.",
    process:
      "Chose a royal blue and gold palette to evoke prestige. Layered congregant photography with light effects and confetti to create a festive atmosphere while maintaining formality.",
    solution:
      "Produced a polished event flyer with clear date, time, venue, and dress code information, all wrapped in a celebratory visual framework.",
    results:
      "Boosted event attendance and created a memorable visual identity for the church's milestone celebration.",
    liveUrl: "https://www.pinterest.com/pin/605171268725358620/",
    githubUrl: "",
    images: ["/images/projects/design-pin2.png"],
  },
  {
    slug: "kilode-album-cover-art",
    title: "Music Cover Art - KILODE by AJAY",
    role: "Graphic Designer",
    category: "design",
    shortDescription:
      "A surreal, atmospheric album cover design for music artist AJAY's single 'KILODE', featuring impossible architecture and moody visual storytelling.",
    fullDescription:
      "Designed a conceptual album cover for the single 'KILODE' by artist AJAY. The artwork features an Escher-inspired impossible staircase composition with hooded figures in a misty, ethereal landscape, creating a sense of mystery and introspection.",
    thumbnail: "/images/projects/design-pin3.png",
    techStack: ["Photoshop", "Photo Manipulation", "Concept Art", "Album Design"],
    problem:
      "The artist needed a visually compelling and unique album cover that would stand out on streaming platforms and convey the song's contemplative mood.",
    process:
      "Explored surrealist visual concepts, settling on an impossible geometry motif. Composited multiple photographic elements with atmospheric fog and muted tones for a dreamlike quality.",
    solution:
      "Delivered a striking album cover with surreal staircase composition, cohesive color grading, and clean artist/title typography placement.",
    results:
      "Created a distinctive visual identity for the single that resonated with the artist's creative vision and attracted listener attention.",
    liveUrl: "https://www.pinterest.com/pin/605171268729369778/",
    githubUrl: "",
    images: ["/images/projects/design-pin3.png"],
  },
  {
    slug: "peernet-logo-design",
    title: "PeerNet Brand Logo Design",
    role: "Logo & Brand Designer",
    category: "design",
    shortDescription:
      "A modern, clean logo mark for PeerNet - a student networking platform - combining the letter 'P' with a graduation cap and speech bubble motif.",
    fullDescription:
      "Designed the brand identity logo for PeerNet, a student collaboration and networking platform. The mark integrates a stylized letter 'P' with a graduation cap and speech bubble, symbolizing academic community and communication.",
    thumbnail: "/images/projects/design-pin4.png",
    techStack: ["Illustrator", "Figma", "Logo Design", "Branding"],
    problem:
      "PeerNet needed a recognizable, scalable logo that communicated education, community, and digital communication in a single mark.",
    process:
      "Explored multiple lettermark and icon concepts. Iterated on combining the 'P' letterform with academic (graduation cap) and social (speech bubble) visual elements until achieving a balanced, memorable composition.",
    solution:
      "Delivered a clean vector logo on a deep blue background with teal-green accent, optimized for both digital screens and print applications.",
    results:
      "Established a strong, instantly recognizable brand identity used across the PeerNet mobile app and admin dashboard.",
    liveUrl: "https://www.pinterest.com/pin/605171268731518781/",
    githubUrl: "",
    images: ["/images/projects/design-pin4.png"],
  },
  {
    slug: "cultural-day-flyer",
    title: "Cultural Day Anticipation Flyer",
    role: "Graphic Designer",
    category: "design",
    shortDescription:
      "A vibrant cultural celebration flyer for NAESS FUTA featuring traditional African patterns, rich kente cloth textures, and dynamic cultural photography.",
    fullDescription:
      "Created a high-impact promotional flyer for the NAESS FUTA Cultural Day event. The design celebrates African heritage through kente cloth border patterns, traditional attire photography, and warm earth-tone color palettes.",
    thumbnail: "/images/projects/design-pin5.png",
    techStack: ["Photoshop", "Illustrator", "Cultural Design", "Event Design"],
    problem:
      "The student association needed a flyer that authentically represented diverse African cultural heritage while building anticipation for the cultural day event.",
    process:
      "Researched kente cloth patterns and traditional color symbolism. Composed culturally representative photography with layered text effects and authentic textile border elements.",
    solution:
      "Produced a culturally rich event flyer with bold 'CULTURAL DAY' typography, scrolling 'ANTICIPATE' text ribbon, and clear contact/sponsorship details.",
    results:
      "Generated strong campus-wide anticipation and cultural pride, contributing to a well-attended cultural celebration event.",
    liveUrl: "https://www.pinterest.com/pin/605171268727121843/",
    githubUrl: "",
    images: ["/images/projects/design-pin5.png"],
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
    tools: webSkills.map((s) => s.name),
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
    tools: mobileSkills.map((s) => s.name),
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
    tools: designSkills.map((s) => s.name),
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
      "The mobile app delivered was exactly what we envisioned - intuitive, performant, and beautifully designed. The development process was transparent, and every milestone was hit on time. A true professional.",
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
  { name: "GitHub", url: "https://github.com/BoladeOlalekan", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/olalekan-bolade-a7921a243", icon: "linkedin" },
  { name: "Dribbble", url: "https://dribbble.com/Bolexis", icon: "dribbble" },
  { name: "Pinterest", url: "https://www.pinterest.com/bolexi_01/", icon: "pinterest" },
];

