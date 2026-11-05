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

export interface PortfolioItem {
  id: string;
  brand: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  tags: string[];
  industry: string;
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

// ---------------------------------------------------------------------------
// WHO WE BUILD FOR
// ---------------------------------------------------------------------------

export interface BuildForCard {
  /** Stable key, also used as the image alt text. */
  title: string;
  icon: string;
  tag: string;
  image: string;
  text: string;
  highlight: string;
}

export const BUILD_FOR_CARDS: BuildForCard[] = [
  {
    title: "Agencies",
    icon: "/images/ui/6aaa94c9e50f2cf960d45869_build-icon-4.svg",
    tag: "Grow your offering, get more projects",
    image: "/images/ui/6aab97f523a7b38046bf5536_c909f9dc33e9f94bea483fcf8f0dbc73_build-card-wider-1.webp",
    text: "Grow your services, handle more complex projects, and add new features for your clients without the expense of hiring your own development team.",
    highlight: "We offer white label web development services that work under your brand.",
  },
  {
    title: "SMEs & Scaleups",
    icon: "/images/ui/6aaa94c9e06967bb8d4c1435_build-icon-2.svg",
    tag: "Grow fast, without losing control",
    image: "/images/ui/6aab97f32ebdb85a19d554ac_build-card-wider-2.webp",
    text: "We create custom solutions, connect your systems, automate tasks, improve workflows, and add smart AI features to help your business grow.",
    highlight: "Our SME-focused software development makes your technology simpler, connects your systems, and improves your workflows.",
  },
  {
    title: "Startups",
    icon: "/images/ui/6aaa8a13e180b2b29c7b64fb_build-icon-1.svg",
    tag: "Launch faster, validate sooner",
    image: "/images/ui/6aab97f43f0544d42354401d_build-card-wider-3.webp",
    text: "We create MVPs, landing pages, and no-code or low-code solutions quickly, so you can move fast. Our flexible approach lets your project grow and change as you search for product-market fit.",
    highlight: "Our startup software development and MVP development services help you launch working products really fast.",
  },
  {
    title: "Enterprise",
    icon: "/images/ui/6a93d0b2ecafc26748b0ea0a_Web and mobile, together.svg",
    tag: "Complex systems, built right",
    image: "/images/ui/6aab97f405bf88f2a4992f30_build-card-wider-4.webp",
    text: "From custom platforms and system integrations to workflow optimization and smart AI features, we create technology that makes your enterprise work more efficiently.",
    highlight: "Custom enterprise development services help you build and connect complex systems that can grow with your business.",
  },
];

// ---------------------------------------------------------------------------
// WHAT WE DO / SOLUTIONS
// ---------------------------------------------------------------------------

export interface ServiceSubpoint {
  title: string;
  desc?: string;
}

export interface SolutionCategory {
  id: string;
  name: string;
  tag: string;
  description: string;
  isDetailed?: boolean;
  items: ServiceSubpoint[];
}

export const SOLUTIONS: SolutionCategory[] = [
  {
    id: "shopify-dev",
    name: "Shopify Development",
    tag: "Certified Shopify Plus Experts",
    description:
      "Enterprise Shopify and Shopify Plus engineering tailored for global direct-to-consumer and B2B brands. From bespoke Liquid theme architecture to complex custom app ecosystems and performance optimization.",
    items: [
      { title: "Theme Customization" },
      { title: "Theme Development" },
      { title: "App Customization" },
      { title: "App Development" },
      { title: "App Integration" },
      { title: "Shopify Store Setup & Configuration" },
      { title: "Shopify Store Migration" },
      { title: "Shopify Performance Optimization" },
    ],
  },
  {
    id: "wordpress-woo",
    name: "WordPress / WooCommerce Development",
    tag: "High-Performance Content & Commerce",
    description:
      "Full-cycle WordPress and WooCommerce engineering. We build secure, headless and high-converting platforms with bespoke plugin architectures, seamless API pipelines, and custom payment integrations.",
    items: [
      { title: "WordPress Customization" },
      { title: "WordPress Development" },
      { title: "WooCommerce Customization" },
      { title: "WooCommerce Development" },
      { title: "Plugin Customization" },
      { title: "Plugin Development" },
      { title: "Plugin Integration" },
      { title: "API Integration" },
      { title: "Payment Integration" },
    ],
  },
  {
    id: "custom-web-app",
    name: "Custom Web Application",
    tag: "Enterprise Architecture & Portals",
    description:
      "Bespoke full-stack web applications, SaaS platforms, and enterprise portals engineered for high concurrency, rock-solid security, and seamless integration with existing ERP and CRM backbones.",
    items: [
      { title: "Laravel" },
      { title: "Drupal" },
      { title: "PHP" },
      { title: "Next.js" },
      { title: "Node.js" },
      { title: "React" },
      { title: "CakePHP" },
      { title: "Angular" },
      { title: "Sage CRM / ERP" },
    ],
  },
  {
    id: "ai-automation",
    name: "AI & Automation",
    tag: "Intelligent Systems & Workflows",
    description:
      "Empower your enterprise with autonomous AI agents, conversational chatbots, intelligent automation workflows, and custom LLM deployments that streamline business operations and reduce overhead.",
    items: [
      { title: "Intelligent Agent Development" },
      { title: "Conversational AI & Chatbot" },
      { title: "AI Application Development" },
      { title: "AI Integration & Implementation" },
      { title: "AI Strategy & Roadmap Consulting" },
    ],
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    tag: "Data-Driven Growth & AI Search Dominance",
    description:
      "Full-funnel digital marketing strategies combining AI-driven search optimization, high-ROAS paid advertising, performance content marketing, and conversion rate optimization to scale your brand revenue.",
    items: [
      { title: "AI SEO (GEO/AEO)" },
      { title: "Technical SEO Audit" },
      { title: "On-Page & Content SEO" },
      { title: "Local SEO" },
      { title: "Paid Advertising (PPC)" },
      { title: "Social Media Marketing" },
      { title: "Email & Marketing Automation" },
      { title: "Analytics & Conversion Optimization" },
    ],
  },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS (home-page chat-card variant)
// ---------------------------------------------------------------------------

export interface HomeTestimonialMessage {
  text: string;
  time: string;
}

export interface HomeTestimonial {
  name: string;
  position: string;
  avatar: string;
  /** Card background colour behind the brand artwork. */
  bgColor: string;
  brandLogo: string;
  messages: HomeTestimonialMessage[];
}

export const HOME_TESTIMONIALS: HomeTestimonial[] = [
  {
    name: "Robert Whitehead",
    position: "Founder, Whitehead Consulting (AM)",
    avatar: "/images/testimonials/robert-whitehead.jpg",
    bgColor: "#dbbaf4",
    brandLogo: "/images/clients/pari.png",
    messages: [
      { text: "TechForbs team is truly exceptional", time: "4:45 PM" },
      { text: "Our custom platform runs flawlessly", time: "4:56 PM" },
      { text: "Super responsive communication", time: "4:57 PM" },
      { text: "Delivered ahead of schedule", time: "4:58 PM" },
    ],
  },
  {
    name: "Brad",
    position: "E-Commerce Director, High-Growth D2C",
    avatar: "/images/testimonials/brad.jpg",
    bgColor: "#a0eeb0",
    brandLogo: "/images/testimonials/brad.jpg",
    messages: [
      { text: "The Shopify migration was smooth and rapid", time: "2:15 PM" },
      { text: "Conversion rate jumped by 34% in the first month", time: "2:16 PM" },
      { text: "Technical competence across the board", time: "2:20 PM" },
    ],
  },
  {
    name: "Dr. James Meschino",
    position: "Director, Adeeva Health",
    avatar: "/images/clients/adeeva.png",
    bgColor: "#ffb3b3",
    brandLogo: "/images/clients/adeeva.png",
    messages: [
      { text: "Extremely thorough with enterprise healthcare compliance", time: "11:05 AM" },
      { text: "Architecture handled our seasonal traffic surges with zero downtime", time: "11:08 AM" },
      { text: "A truly reliable long-term technology partner", time: "11:12 AM" },
    ],
  },
  {
    name: "Oliver Stueck",
    position: "VP Operations, ALLMAX Nutrition",
    avatar: "/images/clients/allmax-nutrition.jpg",
    bgColor: "#ffde82",
    brandLogo: "/images/clients/allmax-nutrition.png",
    messages: [
      { text: "Our multi-region stores run with exceptional speed", time: "3:30 PM" },
      { text: "Complex ERP integration solved seamlessly", time: "3:32 PM" },
      { text: "High standard of engineering quality", time: "3:35 PM" },
    ],
  },
];

// ---------------------------------------------------------------------------
// TECHNOLOGY ECOSYSTEM TILES (services / technology pages)
// ---------------------------------------------------------------------------

export interface TechEcosystemItem {
  /** Caption under the logo; also the React key. */
  name: string;
  icon: string;
  /** Image alt text. Defaults to "<name> logo". */
  alt?: string;
  /** Tile link. Defaults to "#", which renders as a non-clickable tile. */
  href?: string;
}

export const AI_AUTOMATION_ECOSYSTEM: TechEcosystemItem[] = [
  {
    name: "Make",
    icon: "/images/services/ai-automation/69522e11748d65f95259bf76_make-color 1.svg",
    alt: "Make (Integromat) automation platform logo",
  },
  {
    name: "n8n",
    icon: "/images/services/ai-automation/69522e119ada4a224d43f995_n8n-color 1.svg",
    alt: "n8n workflow automation logo",
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
  {
    name: "Shopify",
    icon: "/images/technologies/6613ba0792d3339b64c8a066_hopify.svg",
    alt: "Shopify logo",
  },
  {
    name: "WooCommerce",
    icon: "/images/technologies/6613b99db664ec9b28788819_woocom.svg",
    alt: "WooCommerce logo",
  },
  {
    name: "PHP",
    icon: "/images/technologies/6613b9a8135ca957aa3d95c4_php.svg",
    alt: "PHP logo",
  },
];
