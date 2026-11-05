export interface Technology {
  name: string;
  icon: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  desc?: string;
  href: string;
}

export interface BrandLogo {
  name: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  maxHeight?: string;
  maxWidth?: string;
  link?: string;
}

export interface CustomerCard {
  id: string;
  brand: string;
  logo: string;
  bgImage: string;
  description: string;
}

export interface SolutionTab {
  id: string;
  name: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  tags: string[];
}

export interface PortfolioItem {
  id: string;
  brand?: string;
  title: string;
  description?: string;
  image: string;
  bgColor?: string;
  tags: string[];
  industry?: string;
  link?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  highlights: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

// EXACT 8 TECHNOLOGIES (Change 05)
// Row 1: Shopify | WordPress
// Row 2: WooCommerce | PHP
// Row 3: Laravel | Drupal
// Row 4: Node.js | React
export const TECHNOLOGIES_DATA: Technology[] = [
  { name: "Shopify", icon: "/images/ui/6613ba0792d3339b64c8a066_hopify.svg", href: "/technologies/shopify" },
  { name: "WordPress", icon: "/images/ui/666afa6eb6685d452d4d6e53_wp-36-without-filters.svg", href: "/technologies/wordpress-development-agency" },
  { name: "WooCommerce", icon: "/images/ui/6613b99db664ec9b28788819_woocom.svg", href: "/technologies/woocommerce" },
  { name: "PHP", icon: "/images/ui/6613b9a8135ca957aa3d95c4_php.svg", href: "/technologies/php" },
  { name: "Laravel", icon: "/images/ui/laravel.svg", href: "/technologies/laravel" },
  { name: "Drupal", icon: "/images/ui/drupal.svg", href: "/technologies/drupal" },
  { name: "Node.js", icon: "/images/ui/6613ba19ecc9cd312295669d_nodevg.svg", href: "/technologies/node-js" },
  { name: "React", icon: "/images/ui/6613b9d1ecb1cc050a0e9b21_react.svg", href: "/technologies/react" },
];

// SERVICES DATA
export const SERVICES_SECTIONS = [
  {
    title: "CORE DISCIPLINES",
    items: [
      { title: "AI & automation", desc: "Agents, automation, AI integration", href: "#solutions-section" },
      { title: "Web development", desc: "React, Node, custom platforms", href: "#solutions-section" },
      { title: "Mobile development", desc: "iOS, Android, cross-platform", href: "#solutions-section" },
      { title: "UI/UX design", desc: "Product design, research, prototyping", href: "#solutions-section" },
      { title: "Dedicated teams", desc: "Extend your team with specialists", href: "#solutions-section" },
    ],
  },
  {
    title: "WEB PORTALS",
    items: [
      { title: "Custom web portals", href: "#solutions-section" },
      { title: "Client portals", href: "#solutions-section" },
      { title: "Job portals", href: "#solutions-section" },
      { title: "Custom CRM", href: "#solutions-section" },
      { title: "Ecommerce portals", href: "#solutions-section" },
    ],
  },
  {
    title: "INDUSTRIES",
    items: [
      { title: "Automotive software", href: "#solutions-section" },
      { title: "HR software", href: "#solutions-section" },
      { title: "Media software", href: "#solutions-section" },
      { title: "Edtech software", href: "#solutions-section" },
    ],
  },
  {
    title: "BUILD & SCALE",
    items: [
      { title: "AI-first development", href: "#solutions-section" },
      { title: "White label development", href: "#solutions-section" },
      { title: "MVP development", href: "#solutions-section" },
      { title: "Low code development", href: "#solutions-section" },
      { title: "Vibe coding", href: "#solutions-section" },
    ],
  },
];

// EXACT 10 BRAND LOGOS (Pass #15 +20% visible optical footprint enhancement)
// Row 1: ALLMAX, Adeeva, Kilongwan, GIMA, Bodhi Health
// Row 2: Finarkein, Hype Distribution, Digicio, Bridge Studio, Peddlers
export const BRAND_LOGOS: BrandLogo[] = [
  // ROW 1
  {
    name: "ALLMAX",
    src: "/images/clients/allmax-nutrition.png",
    alt: "ALLMAX Nutrition",
    width: 290,
    height: 68,
    maxHeight: "68px",
    maxWidth: "290px",
  },
  {
    name: "Adeeva",
    src: "/images/clients/adeeva.png",
    alt: "Adeeva Health",
    width: 250,
    height: 78,
    maxHeight: "78px",
    maxWidth: "250px",
  },
  {
    name: "Kilongwan",
    src: "/images/clients/kilongwan.png",
    alt: "Kilongwan",
    width: 290,
    height: 64,
    maxHeight: "64px",
    maxWidth: "290px",
  },
  {
    name: "GIMA",
    src: "/images/clients/gima.png",
    alt: "GIMA",
    width: 270,
    height: 68,
    maxHeight: "68px",
    maxWidth: "270px",
  },
  {
    name: "Bodhi Health",
    src: "/images/clients/bodhi.png",
    alt: "Bodhi Health",
    width: 245,
    height: 86,
    maxHeight: "86px",
    maxWidth: "245px",
  },
  // ROW 2
  {
    name: "Finarkein",
    src: "/images/clients/finarkein.png",
    alt: "Finarkein",
    width: 280,
    height: 70,
    maxHeight: "70px",
    maxWidth: "280px",
  },
  {
    name: "Hype Distribution",
    src: "/images/clients/hype-distribution.png",
    alt: "Hype Distribution",
    width: 225,
    height: 98,
    maxHeight: "98px",
    maxWidth: "225px",
  },
  {
    name: "Digicio",
    src: "/images/clients/digicio.png",
    alt: "Digicio",
    width: 265,
    height: 72,
    maxHeight: "72px",
    maxWidth: "265px",
  },
  {
    name: "Bridge Studio",
    src: "/images/clients/bridge-studio.png",
    alt: "Bridge Studio",
    width: 250,
    height: 78,
    maxHeight: "78px",
    maxWidth: "250px",
  },
  {
    name: "Peddlers",
    src: "/images/clients/peddlers.png",
    alt: "Peddlers",
    width: 275,
    height: 74,
    maxHeight: "74px",
    maxWidth: "275px",
  },
];

// OUR CUSTOMERS CARDS (Change 09)
export const CUSTOMERS_CARDS: CustomerCard[] = [
  {
    id: "whitehead",
    brand: "Whitehead Consulting",
    logo: "/images/clients/whitehead-consulting.png",
    bgImage: "/images/portfolio/aldonexport.png",
    description: "Strategic business advisory & technology partner empowering Fortune-tier enterprises.",
  },
  {
    id: "pari",
    brand: "Pari",
    logo: "/images/clients/pari.png",
    bgImage: "/images/portfolio/black.png",
    description: "High-growth direct-to-consumer lifestyle brand with advanced global e-commerce.",
  },
  {
    id: "allmax",
    brand: "Allmax Nutrition",
    logo: "/images/clients/allmax-nutrition.png",
    bgImage: "/images/portfolio/maxopolis.png",
    description: "Industry-leading sports nutrition enterprise operating high-throughput international web stores.",
  },
  {
    id: "adeeva",
    brand: "Adeeva",
    logo: "/images/clients/adeeva.png",
    bgImage: "/images/portfolio/bodhi.png",
    description: "Comprehensive healthcare and longevity brand powering global professional nutraceutical commerce.",
  },
  {
    id: "kilongwan",
    brand: "Kilongwan",
    logo: "/images/clients/kilongwan.png",
    bgImage: "/images/clients/kilongwan-preview.png",
    description: "Modern apparel brand expanding across international markets with high-conversion Shopify architecture.",
  },
  {
    id: "finarkein",
    brand: "Finarkein",
    logo: "/images/clients/finarkein.png",
    bgImage: "/images/portfolio/finarkein.png",
    description: "Enterprise open-finance data ecosystem facilitating millions of secure API transactions.",
  },
];

// SOLUTIONS / WHAT WE DO (Pass #15 - 5 Exact Service Categories)
export const SOLUTIONS_TABS: SolutionTab[] = [
  {
    id: "tab-shopify",
    name: "Shopify Development",
    category: "Certified Shopify Plus Experts",
    title: "Shopify Development",
    description: "Enterprise Shopify and Shopify Plus engineering tailored for global direct-to-consumer and B2B brands. From bespoke Liquid theme architecture to complex custom app ecosystems and performance optimization.",
    features: [
      "Theme Customization & Development",
      "Custom App Development & Integration",
      "Shopify Store Setup, Migration & Configuration",
      "Core Web Vitals & Store Performance Optimization",
    ],
    tags: [
      "Theme Customization",
      "Theme Development",
      "App Customization",
      "App Development",
      "App Integration",
      "Shopify Store Setup & Configuration",
      "Shopify Store Migration",
      "Shopify Performance Optimization",
    ],
  },
  {
    id: "tab-wordpress",
    name: "WordPress / WooCommerce Development",
    category: "High-Performance Content & Commerce",
    title: "WordPress / WooCommerce Development",
    description: "Full-cycle WordPress and WooCommerce engineering. We build secure, headless and high-converting platforms with bespoke plugin architectures, seamless API pipelines, and custom payment integrations.",
    features: [
      "WordPress & WooCommerce Customization",
      "Custom Plugin Development & Integration",
      "Robust REST & GraphQL API Integration",
      "Global Payment Gateway & Checkout Solutions",
    ],
    tags: [
      "WordPress Customization",
      "WordPress Development",
      "WooCommerce Customization",
      "WooCommerce Development",
      "Plugin Customization",
      "Plugin Development",
      "Plugin Integration",
      "API Integration",
      "Payment Integration",
    ],
  },
  {
    id: "tab-custom-app",
    name: "Custom Web Application",
    category: "Enterprise Architecture & Portals",
    title: "Custom Web Application",
    description: "Bespoke full-stack web applications, SaaS platforms, and enterprise portals engineered for high concurrency, rock-solid security, and seamless integration with existing ERP and CRM backbones.",
    features: [
      "Laravel, Drupal & PHP enterprise backends",
      "Next.js, React & Node.js scalable architectures",
      "Angular & CakePHP application development",
      "Sage CRM / ERP mission-critical enterprise integration",
    ],
    tags: [
      "Laravel",
      "Drupal",
      "PHP",
      "Next.js",
      "Node.js",
      "React",
      "CakePHP",
      "Angular",
      "Sage CRM / ERP",
    ],
  },
  {
    id: "tab-ai-automation",
    name: "AI & Automation",
    category: "Intelligent Systems & Workflows",
    title: "AI & Automation",
    description: "Empower your enterprise with autonomous AI agents, conversational chatbots, intelligent automation workflows, and custom LLM deployments that streamline business operations and reduce overhead.",
    features: [
      "Intelligent Agent Development & Autonomous Workflows",
      "Conversational AI & Custom Enterprise Chatbots",
      "AI Application Development & Model Fine-Tuning",
      "AI Strategy & Executive Roadmap Consulting",
    ],
    tags: [
      "Intelligent Agent Development",
      "Conversational AI & Chatbot",
      "AI Application Development",
      "AI Integration & Implementation",
      "AI Strategy & Roadmap Consulting",
    ],
  },
  {
    id: "tab-digital-marketing",
    name: "Digital Marketing",
    category: "Data-Driven Growth & AI Search Dominance",
    title: "Digital Marketing",
    description: "",
    features: [
      "AI SEO (GEO/AEO)",
      "Technical SEO Audit",
      "On-Page & Content SEO",
      "Local SEO",
      "Paid Advertising (PPC)",
      "Social Media Marketing",
      "Email & Marketing Automation",
      "Analytics & Conversion Optimization",
    ],
    tags: [
      "AI SEO (GEO/AEO)",
      "Technical SEO Audit",
      "On-Page & Content SEO",
      "Local SEO",
      "Paid Advertising (PPC)",
      "Social Media Marketing",
      "Email & Marketing Automation",
      "Analytics & Conversion Optimization",
    ],
  },
];

// EXACT SEVEN PORTFOLIO BRANDS (Change 10B)
// 1. ALLMAX
// 2. Bodhi Health
// 3. Finarkein
// 4. Hype Distribution
// 5. Digicio
// 6. Kilongwan
// 7. GIMA
export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "maxopolis",
    brand: "Maxopolis",
    title: "Maxopolis: Luxury Flagship Store",
    description: "Enterprise luxury flagship store and digital showroom engineered for direct-to-consumer high conversion.",
    image: "/images/portfolio/maxopolis.png",
    bgColor: "#55a090",
    tags: ["HR tech", "Web portals", "AI & Automation", "Database Systems", "Platform Development"],
    industry: "Luxury Retail",
  },
  {
    id: "hype-distribution",
    brand: "Hype Distribution",
    title: "from vision to vintage: building a digital showroom",
    description: "High-capacity digital showroom and retail platform engineered with custom pricing and automated catalog management.",
    image: "/images/portfolio/hype-distribution.png",
    bgColor: "#eefb9f",
    tags: ["Retail", "E-commerce", "UX/UI", "Platform Development"],
    industry: "Fashion & Retail",
  },
  {
    id: "cabspot",
    brand: "Cabspot",
    title: "scalable n8n workflow automation for B2B outreach",
    description: "Scalable workflow automation and custom portal architecture for automated B2B customer acquisition and dispatch.",
    image: "/images/portfolio/cabspot.webp",
    bgColor: "#82c3ec",
    tags: ["Martech", "SaaS", "AI & Automation", "Database Systems", "Custom Web Development"],
    industry: "Mobility & SaaS",
  },
  {
    id: "black",
    brand: "BC hero",
    title: "BC hero: building tomorrow's workspace today",
    description: "High-performance commercial workspace platform engineered with modern headless CMS and SEO optimization.",
    image: "/images/portfolio/black.png",
    bgColor: "#c5b3e6",
    tags: ["Real estate", "Business services", "Custom Web Development", "CMS Development", "SEO"],
    industry: "Commercial Real Estate",
  },
  {
    id: "aldonexport",
    brand: "Black",
    title: "Black: Minimalist Lifestyle Digital Store",
    description: "Minimalist direct-to-consumer lifestyle store with custom Shopify theme architecture and fluid checkout.",
    image: "/images/portfolio/aldonexport.png",
    bgColor: "#e8b4b8",
    tags: ["Retail", "E-commerce", "Custom Web Development", "UX/UI", "Frontend Development"],
    industry: "Lifestyle Retail",
  },
  {
    id: "bodhi",
    brand: "Webflow D2C",
    title: "Webflow membership platform for 500+ verified D2C tools",
    description: "Verified D2C tool directory and membership platform built with complex no-code databases and scalable integrations.",
    image: "/images/portfolio/bodhi.png",
    bgColor: "#a3c4bc",
    tags: ["Web portals", "E-commerce", "No-code development", "Systems Integration", "CMS Development"],
    industry: "E-Commerce Tools",
  },
];

// TESTIMONIALS
export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "dr-james",
    name: "Dr. James Meschino",
    role: "Chief Scientific Officer",
    company: "Bodhi Health Inc.",
    avatar: "/images/testimonials/dr-james-meschino.jpeg",
    quote: "TechForbs delivered an exceptional e-commerce platform that flawlessly communicates our clinical credibility while maximizing consumer conversions. Outstanding engineering precision.",
    highlights: ["Sublingual delivery UX", "Subscription architecture", "High conversion rate"],
  },
  {
    id: "robert-b",
    name: "Robert Bajac",
    role: "Managing Director",
    company: "Whitehead Consulting",
    avatar: "/images/testimonials/robert-bajac.jpeg",
    quote: "Their team's architectural depth and agile delivery exceeded every expectation. They built a mission-critical platform that operates with rock-solid stability.",
    highlights: ["Enterprise architecture", "Scalable data pipeline", "Zero downtime launch"],
  },
  {
    id: "brad-h",
    name: "Brad",
    role: "Co-Founder & VP Operations",
    company: "Hype Distribution",
    avatar: "/images/testimonials/brad.jpeg",
    quote: "From complex wholesale pricing rules to automated inventory synchronization, TechForbs handled our multi-tier requirements seamlessly.",
    highlights: ["B2B wholesale portal", "Automated fulfillment", "Custom ERP integration"],
  },
];

// TEAM DATA (10 authentic photos)
export const TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: "Leadership & Strategy", role: "Executive Direction", image: "/images/team/techforbs-team-1.jpg" },
  { id: 2, name: "Solutions Architect", role: "Engineering Lead", image: "/images/team/techforbs-team-2.jpg" },
  { id: 3, name: "Shopify Plus Specialist", role: "Frontend Architect", image: "/images/team/techforbs-team-3.jpg" },
  { id: 4, name: "Product Design Lead", role: "UI/UX Specialist", image: "/images/team/techforbs-team-4.jpg" },
  { id: 5, name: "Cloud Infrastructure Engineer", role: "DevOps & Cloud", image: "/images/team/techforbs-team-5.jpg" },
  { id: 6, name: "Full-Stack Developer", role: "Backend Systems", image: "/images/team/techforbs-team-6.jpg" },
  { id: 7, name: "Mobile App Architect", role: "iOS & Android", image: "/images/team/techforbs-team-7.jpg" },
  { id: 8, name: "AI Automation Engineer", role: "Workflow Automation", image: "/images/team/techforbs-team-8.jpg" },
  { id: 9, name: "Quality Assurance Lead", role: "Production QA", image: "/images/team/techforbs-team-9.jpg" },
  { id: 10, name: "Client Success Partner", role: "Project Delivery", image: "/images/team/techforbs-team-10.jpg" },
];

// =============================================================================
// AI & AUTOMATION SERVICES DATA (Authentic Webflow/Che IT Group Reference)
// =============================================================================

export const AI_AUTOMATION_CASES: PortfolioItem[] = [
  {
    id: "ai-procurement-assistant",
    title: "procurement co-pilot for AI-powered tender management",
    image: "/images/services/ai-automation/68023525725115f2d217da9f_Card Cover.webp",
    bgColor: "#3269ac",
    tags: ["Government", "Procurement", "Custom Web Development", "AI & Automation"],
    industry: "Government & Procurement",
  },
  {
    id: "time-maestro-platform",
    title: "beyond tracking: building our perfect internal management platform",
    image: "/images/services/ai-automation/681b3e5f8560d4a7e784e232_Card Cover.webp",
    bgColor: "#356445",
    tags: ["IT services", "SaaS", "UX/UI", "Custom Web Development", "Systems Integration"],
    industry: "IT Services & SaaS",
  },
  {
    id: "construction-automation-platform",
    title: "revolutionizing construction project management with automation",
    image: "/images/services/ai-automation/682c6a34d60f448a3c023395_11.webp",
    bgColor: "#cae3fe",
    tags: ["Real estate", "Proptech", "Custom Web Development", "UX/UI", "Systems Integration"],
    industry: "Real Estate & PropTech",
  },
  {
    id: "ai-furniture-design-platform",
    title: "smart spaces: how AI furnished a design revolution",
    image: "/images/services/ai-automation/682ed8126e0fdb65110409a0_Card Cover.webp",
    bgColor: "#86bfff",
    tags: ["Retail", "Manufacturing", "Platform Development", "UX/UI", "AI & Automation"],
    industry: "Retail & Manufacturing",
  },
  {
    id: "lead-generation-platform",
    title: "intelligent B2B lead generation automation",
    image: "/images/services/ai-automation/68381b612098e700ff329e46_Card Cover.webp",
    bgColor: "#65728a",
    tags: ["Martech", "SaaS", "AI & Automation", "UX/UI", "Systems Integration"],
    industry: "MarTech & B2B SaaS",
  },
];

export interface TechEcosystemItem {
  name: string;
  icon: string;
  alt?: string;
  href?: string;
}

export const AI_AUTOMATION_TECHNOLOGIES: TechEcosystemItem[] = [
  {
    name: "Make",
    icon: "/images/services/ai-automation/688c609479d7f378d3a90e0a_make.svg",
    alt: "Make (Integromat) automation platform logo",
  },
  {
    name: "Hubspot",
    icon: "/images/services/ai-automation/664af16516e4c502e7f45038_hubspot.svg",
    alt: "HubSpot logo",
  },
  {
    name: "Zapier",
    icon: "/images/services/ai-automation/664af11caf11aec9d18151c7_zapier.svg",
    alt: "Zapier logo",
  },
  {
    name: "Airtable",
    icon: "/images/services/ai-automation/66963dc71dd45225934947f6_airtable-svgrepo-com (1) 1.svg",
    alt: "Airtable logo",
  },
  {
    name: "n8n",
    icon: "/images/services/ai-automation/69522e119ada4a224d43f995_n8n-color 1.svg",
    alt: "n8n automation platform logo",
  },
  {
    name: "Python",
    icon: "/images/technologies/6613b9be680c55ac4b07fa82_python.svg",
    alt: "Python logo",
  },
  {
    name: "Node.js",
    icon: "/images/technologies/6613ba19ecc9cd312295669d_nodevg.svg",
    alt: "Node.js logo",
  },
  {
    name: "React",
    icon: "/images/technologies/6613b9d1ecb1cc050a0e9b21_react.svg",
    alt: "React logo",
  },
];

export interface ServiceTestimonial {
  name: string;
  position: string;
  avatar: string;
  bgColor: string;
  overview: string;
  messages: { text: string; time: string }[];
}

export const AI_AUTOMATION_TESTIMONIALS: ServiceTestimonial[] = [
  {
    name: "Iryna Kyselova",
    position: "CEO, TechHunt (AM)",
    avatar: "/images/technologies/68502c460e19db138dd98e5a_kiseliova.webp",
    bgColor: "#dbbaf4",
    overview: "/images/technologies/69415648fb54d47025658431_68502c28fbdaa5e4f7401a80_techhunt (1).webp",
    messages: [
      { text: "Ok", time: "4:45 PM" },
      { text: "Site works great", time: "4:56 PM" },
      { text: "On time as promised", time: "4:57 PM" },
      { text: "Reasonable price", time: "4:58 PM" },
      { text: "Will recommend", time: "4:59 PM" },
    ],
  },
  {
    name: "Oleksandra Kozak",
    position: "CXO, Habitat",
    avatar: "/images/technologies/68502b31c839a090ed9cb36d_kozak.webp",
    bgColor: "#a0eeb0",
    overview: "/images/technologies/68502b378775a7fe00bb4fab_habitat.webp",
    messages: [
      { text: "Platform handles 75k users now", time: "12:28 AM" },
      { text: "92% satisfaction!", time: "12:32 AM" },
      { text: "user engagement +45%", time: "12:34 AM" },
      { text: "revenue is growing so fast 🔥", time: "12:45 AM" },
    ],
  },
  {
    name: "Kjartan Pedersen",
    position: "Managing Director, NUCC",
    avatar: "/images/technologies/68502a0bc839a090ed9be559_pedersen.webp",
    bgColor: "#ffb3b3",
    overview: "/images/technologies/694156c8a2a51c888dc8f3d8_68502a3f8efdae84c0a2bfa5_nucc (1).webp",
    messages: [
      { text: "traffic increased tenfold!", time: "11:24 AM" },
      { text: "288 → 3,614 visitors", time: "11:27 AM" },
      { text: "love working with specialists", time: "11:28 AM" },
      { text: "always available", time: "11:31 AM" },
    ],
  },
];


