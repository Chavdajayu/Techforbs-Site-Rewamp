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
    src: "/images/clients/allmax-white.png",
    alt: "ALLMAX",
    width: 260,
    height: 48,
    maxHeight: "48px",
    maxWidth: "260px",
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

// OUR CUSTOMERS CARDS (Pass #14 - 7 Unique Designer Visuals & Normalized Logos)
export const CUSTOMERS_CARDS: CustomerCard[] = [
  {
    id: "customer-01-allmax",
    brand: "ALLMAX Nutrition",
    logo: "/images/customers/logos/allmax-logo-white.png",
    bgImage: "/images/customers/customer-01-allmax.webp",
    description: "Industry-leading sports nutrition enterprise operating high-throughput international web stores.",
  },
  {
    id: "customer-02-gima",
    brand: "GLOBAL Integrative Medicine Academy (GIMA)",
    logo: "/images/customers/logos/gima-logo-white.png",
    bgImage: "/images/customers/customer-02-gima.webp",
    description: "Global integrative medicine academy delivering accredited medical curriculum and interactive digital portals.",
  },
  {
    id: "customer-03-bodhi-health",
    brand: "BODHI Health Inc.",
    logo: "/images/customers/logos/bodhi-health-logo-white.png",
    bgImage: "/images/customers/customer-03-bodhi-health.webp",
    description: "Innovative wellness & bioavailability brand pioneering rapid sublingual oral strip health technologies.",
  },
  {
    id: "customer-04-fintech",
    brand: "Finarkein",
    logo: "/images/customers/logos/finarkein-logo-white.png",
    bgImage: "/images/customers/customer-04-fintech.webp",
    description: "Pioneering open-finance data infrastructure and developer ecosystem powering high-scale transactions.",
  },
  {
    id: "customer-05-hype",
    brand: "HYPE Distribution",
    logo: "/images/customers/logos/hype-logo-white.png",
    bgImage: "/images/customers/customer-05-hype.webp",
    description: "High-capacity wholesale distribution network and digital B2B commerce platform with automated logistics.",
  },
  {
    id: "customer-06-digicio",
    brand: "digicio",
    logo: "/images/customers/logos/digicio-logo-white.png",
    bgImage: "/images/customers/customer-06-digicio.webp",
    description: "Strategic digital transformation partner delivering cloud architecture and bespoke enterprise engineering.",
  },
  {
    id: "customer-07-kilongwan",
    brand: "Kilon'Gwan",
    logo: "/images/customers/logos/kilongwan-logo-white.png",
    bgImage: "/images/customers/customer-07-kilongwan.webp",
    description: "High-growth direct-to-consumer lifestyle and premium fashion brand with seamless global checkout.",
  },
];

// SOLUTIONS / WHAT WE DO (Pass #15 - 5 Exact Service Categories)
// EXACT SEVEN PORTFOLIO BRANDS (Change 10B)
// 1. ALLMAX
// 2. Bodhi Health
// EXACT 10-BRAND PORTFOLIO CAROUSEL (Mandatory Sequence 1-10)
// Slide 01: ALLMAX Nutrition
// Slide 02: Adeeva
// Slide 03: Kilon'Gwan
// Slide 04: GLOBAL Integrative Medicine Academy (GIMA)
// Slide 05: BODHI Health Inc.
// Slide 06: Finarkein
// Slide 07: HYPE Distribution
// Slide 08: digicio (Digital Innovation)
// Slide 09: BRIDGE STUDIO
// Slide 10: Peddlers 30A
export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "01-allmax",
    brand: "ALLMAX Nutrition",
    title: "ALLMAX: High-Performance Sports Nutrition",
    description: "Enterprise high-throughput e-commerce architecture engineered for direct-to-consumer international scale.",
    image: "/images/portfolio/01-allmax.webp",
    bgColor: "#9e9e9e",
    tags: ["Shopify Plus", "E-commerce", "D2C", "Mobile-First", "Performance"],
    industry: "Sports Nutrition",
  },
  {
    id: "03-kilongwan",
    brand: "Kilon'Gwan",
    title: "Kilon'Gwan: Premium Lifestyle Apparel",
    description: "Modern apparel brand expanding across international markets with high-conversion Shopify architecture.",
    image: "/images/portfolio/03-kilongwan.webp",
    bgColor: "#dbb8a7",
    tags: ["Shopify", "Fashion & Retail", "UX/UI", "Mobile Commerce"],
    industry: "Fashion & Apparel",
  },
  {
    id: "04-gima",
    brand: "GLOBAL Integrative Medicine Academy (GIMA)",
    title: "GIMA: Global Integrative Medicine Academy",
    description: "Global education academy & healthcare training platform with comprehensive student portal.",
    image: "/images/portfolio/04-gima.webp",
    bgColor: "#b5d5e8",
    tags: ["Education Tech", "Web Portal", "Custom Platform", "Full-Stack"],
    industry: "Medical Education",
  },
  {
    id: "05-bodhi-health",
    brand: "BODHI Health Inc.",
    title: "Bodhi Health: Precision Sublingual Technology",
    description: "Science-backed supplement platform with breakthrough curcumin oral strips for rapid bioavailability.",
    image: "/images/portfolio/05-bodhi-health.webp",
    bgColor: "#e8f4d1",
    tags: ["Webflow", "E-commerce", "HealthTech", "Subscription UX"],
    industry: "HealthTech & Bioavailability",
  },
  {
    id: "06-finarkein",
    brand: "Finarkein",
    title: "Finarkein: Open-Finance Data Ecosystem",
    description: "Enterprise open-finance data infrastructure and developer platform facilitating high-volume transactions.",
    image: "/images/portfolio/06-finarkein.webp",
    bgColor: "#dedede",
    tags: ["Fintech", "Enterprise Portal", "API Integration", "Data Architecture"],
    industry: "Fintech & Data Infrastructure",
  },
  {
    id: "07-hype-distribution",
    brand: "HYPE Distribution",
    title: "Hype Distribution: Digital Showroom & Wholesale",
    description: "High-capacity digital showroom and retail platform engineered with custom pricing and automated catalog.",
    image: "/images/portfolio/07-hype-distribution.webp",
    bgColor: "#bcadd9",
    tags: ["WooCommerce", "B2B Wholesale", "ERP Integration", "Catalog Automation"],
    industry: "Wholesale & Distribution",
  },
  {
    id: "08-digicio",
    brand: "digicio (Digital Innovation)",
    title: "Digicio: Strategic Technology Innovation Partner",
    description: "Full-service enterprise transformation agency platform engineered with seamless headless integration.",
    image: "/images/portfolio/08-digicio.webp",
    bgColor: "#d6fff3",
    tags: ["Enterprise Platform", "Agency Partner", "Cloud Systems", "Custom Engineering"],
    industry: "Technology & Digital Innovation",
  },
  {
    id: "09-bridge-studio",
    brand: "BRIDGE STUDIO",
    title: "Bridge Studio: Architecture & Spatial Design Portfolio",
    description: "High-performance visual portfolio and spatial design showcase with immersive gallery interactions.",
    image: "/images/portfolio/09-bridge-studio.webp",
    bgColor: "#dedede",
    tags: ["Architecture", "Visual Portfolio", "Interactive UX", "Headless CMS"],
    industry: "Architecture & Design",
  },
  {
    id: "10-peddlers-30a",
    brand: "Peddlers 30A",
    title: "Peddlers 30A: Premier Coastal Bike Rentals & Retail",
    description: "Turnkey fleet rental reservation and coastal e-commerce store with real-time booking pipelines.",
    image: "/images/portfolio/10-peddlers-30a.webp",
    bgColor: "#e2f7fc",
    tags: ["E-Commerce", "Booking Systems", "Shopify", "UX/UI Optimization"],
    industry: "Tourism & Fleet Rentals",
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
    icon: "/images/ui/6a93d0b2ecafc26748b0ea0a_build-icon-enterprise.svg",
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
  {
    id: "white-label",
    name: "White-label development",
    tag: "MORE PROJECTS, SAME TEAM",
    description:
      "As your white label agency partner, we work behind the scenes to help you deliver complex web projects without growing your in-house team. We handle development, integrations, and technical implementation, so you can focus on your clients.",
    items: [
      { title: "Web development" },
      { title: "Integrations" },
      { title: "Technical implementation" },
      { title: "Custom solutions" },
      { title: "Scalable delivery" },
      { title: "Behind-the-scenes support" },
      { title: "No in-house hiring needed" },
      { title: "Focus on your clients" },
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

export interface StackedTestimonial {
  id: string;
  name: string;
  company: string;
  avatar: string;
  logo: string;
  pullQuote: string;
  fullQuote: string;
}

export const STACKED_TESTIMONIALS: StackedTestimonial[] = [
  {
    id: "dr-james-meschino",
    name: "Dr. James Meschino",
    company: "Meschino Health",
    avatar: "/images/testimonials/dr-james-meschino.jpg",
    logo: "/images/testimonials/logos/meschino-health.png",
    pullQuote: "The fastest way to scale our digital health platform",
    fullQuote:
      "“TechForbs transformed our online presence and e-commerce workflow covering custom architecture, seamless user journeys, and store performance. It makes managing and scaling our business much more efficient.”",
  },
  {
    id: "brad",
    name: "Brad",
    company: "Allmax Nutrition",
    avatar: "/images/testimonials/brad.jpg",
    logo: "/images/testimonials/logos/allmax-nutrition.png",
    pullQuote: "Built for high-volume global store conversions",
    fullQuote:
      "“Working with TechForbs gave our brand the exact technical foundation we needed. Their Shopify engineering improved our checkout flow, page speed, and overall product profitability across every market.”",
  },
  {
    id: "robert-whitehead",
    name: "Robert Whitehead",
    company: "Whitehead Consulting",
    avatar: "/images/testimonials/robert-whitehead.jpg",
    logo: "/images/testimonials/logos/whitehead-consulting.png",
    pullQuote: "A reliable partner for complex web engineering",
    fullQuote:
      "“The team delivered every milestone with precision and clarity. From custom integrations to responsive storefront polish, TechForbs made our entire digital transformation smooth and measurable.”",
  },
  {
    id: "adeeva-team",
    name: "Adeeva Nutrition Team",
    company: "Adeeva Health",
    avatar: "/images/testimonials/adeeva-team.jpg",
    logo: "/images/testimonials/logos/adeeva.png",
    pullQuote: "Seamless store migration and faster performance",
    fullQuote:
      "“TechForbs handled our entire store upgrade without a single disruption to our customers. Our new storefront loads faster, converts higher, and gives our team complete control.”",
  },
  {
    id: "gima-academy",
    name: "GIMA Academy",
    company: "Global Integrative Medicine",
    avatar: "/images/testimonials/gima-dr.jpg",
    logo: "/images/testimonials/logos/gima.png",
    pullQuote: "Custom learning and commerce unified in one place",
    fullQuote:
      "“Their engineering team understood our exact requirements from day one. They built a rock-solid platform that handles course enrollments and digital transactions effortlessly.”",
  },
  {
    id: "bodhi-health",
    name: "Bodhi Health",
    company: "Bodhi Health Inc.",
    avatar: "/images/testimonials/bodhi-founder.jpg",
    logo: "/images/testimonials/logos/bodhi.png",
    pullQuote: "Exceptional craftsmanship and ongoing support",
    fullQuote:
      "“From storefront UX to backend optimization, TechForbs exceeded our expectations. They are proactive, fast to respond, and genuinely invested in helping our store win.”",
  },
];

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

export const WEB_DEVELOPMENT_ECOSYSTEM: TechEcosystemItem[] = [
  {
    name: "React",
    icon: "/images/technologies/6613b9d1ecb1cc050a0e9b21_react.svg",
    alt: "React logo",
  },
  {
    name: "Next.js",
    icon: "/images/technologies/664af3b89152d5738e5297e7_nextJS.svg",
    alt: "Next.js logo",
  },
  {
    name: "Node.js",
    icon: "/images/technologies/6613ba19ecc9cd312295669d_nodevg.svg",
    alt: "Node.js logo",
  },
  {
    name: "TypeScript",
    icon: "/images/technologies/6613b9be680c55ac4b07fa82_python.svg",
    alt: "TypeScript / Python logo",
  },
  {
    name: "Laravel",
    icon: "/images/technologies/6630d61c4c4edfd2fc11e5c4_laravel.svg",
    alt: "Laravel logo",
  },
  {
    name: "PHP",
    icon: "/images/technologies/6613b9a8135ca957aa3d95c4_php.svg",
    alt: "PHP logo",
  },
  {
    name: "Shopify",
    icon: "/images/technologies/6613ba0792d3339b64c8a066_hopify.svg",
    alt: "Shopify logo",
  },
  {
    name: "GraphQL",
    icon: "/images/technologies/688c5fea055c5070b38b092a_GraphQL.svg",
    alt: "GraphQL logo",
  },
];

export const MOBILE_DEVELOPMENT_ECOSYSTEM: TechEcosystemItem[] = [
  {
    name: "React Native",
    icon: "/images/technologies/6613b9d1ecb1cc050a0e9b21_react.svg",
    alt: "React Native logo",
  },
  {
    name: "iOS / Swift",
    icon: "/images/technologies/664af3a84d2f0c7a17418625_router.svg",
    alt: "iOS Swift logo",
  },
  {
    name: "Android",
    icon: "/images/technologies/6613ba19ecc9cd312295669d_nodevg.svg",
    alt: "Android logo",
  },
  {
    name: "Node.js Backend",
    icon: "/images/technologies/664af8c8588e94bdb28086bb_expressjs.svg",
    alt: "Node.js Express logo",
  },
  {
    name: "Python APIs",
    icon: "/images/technologies/6613b9be680c55ac4b07fa82_python.svg",
    alt: "Python logo",
  },
  {
    name: "Redux",
    icon: "/images/technologies/664af3c95ceb0875b3d51a46_redux.svg",
    alt: "Redux logo",
  },
  {
    name: "Socket.io",
    icon: "/images/technologies/664af8da6b51cc0561ac1117_socketio.svg",
    alt: "Socket.io logo",
  },
  {
    name: "MySQL / DB",
    icon: "/images/technologies/66963d979771a1787630197d_mysql.svg",
    alt: "MySQL logo",
  },
];

export const UI_UX_DESIGN_ECOSYSTEM: TechEcosystemItem[] = [
  {
    name: "Figma",
    icon: "/images/services/ui-ux-design/6659bf8e881b694e67f1d766_Figma.webp",
    alt: "Figma logo",
  },
  {
    name: "ProtoPie",
    icon: "/images/services/ui-ux-design/6659bf42c31732897b60da1b_ProtoPie.webp",
    alt: "ProtoPie logo",
  },
  {
    name: "InVision",
    icon: "/images/services/ui-ux-design/6659bf221669ae7d9356d6d3_InVision.webp",
    alt: "InVision logo",
  },
  {
    name: "Marvel",
    icon: "/images/services/ui-ux-design/6659bf7379d695426ccb849e_Marvel.webp",
    alt: "Marvel App logo",
  },
  {
    name: "Design Systems",
    icon: "/images/technologies/6613b9d1ecb1cc050a0e9b21_react.svg",
    alt: "Design Systems logo",
  },
  {
    name: "Webflow",
    icon: "/images/services/ui-ux-design/6630d584f41fff43f25a1b5f_webflow.svg",
    alt: "Webflow logo",
  },
  {
    name: "UI Prototyping",
    icon: "/images/services/ui-ux-design/6659bef72b57b9fdd05d90a4_Property 1=hover.webp",
    alt: "UI Prototyping logo",
  },
  {
    name: "Motion Design",
    icon: "/images/services/ui-ux-design/6659bfa668153eed9bf1cb38_Jim.webp",
    alt: "Motion Design logo",
  },
];

export const DEDICATED_TEAM_ECOSYSTEM: TechEcosystemItem[] = [
  {
    name: "React & Next.js",
    icon: "/images/technologies/664af3b89152d5738e5297e7_nextJS.svg",
    alt: "Next.js logo",
  },
  {
    name: "Node.js & Express",
    icon: "/images/technologies/6613ba19ecc9cd312295669d_nodevg.svg",
    alt: "Node.js logo",
  },
  {
    name: "Python & AI",
    icon: "/images/technologies/6613b9be680c55ac4b07fa82_python.svg",
    alt: "Python logo",
  },
  {
    name: "Mobile Native",
    icon: "/images/technologies/6613b9d1ecb1cc050a0e9b21_react.svg",
    alt: "Mobile engineering logo",
  },
  {
    name: "PHP & Laravel",
    icon: "/images/technologies/6630d61c4c4edfd2fc11e5c4_laravel.svg",
    alt: "Laravel logo",
  },
  {
    name: "Cloud & DevOps",
    icon: "/images/technologies/664af961a0988a838786e054_pm2.svg",
    alt: "DevOps logo",
  },
  {
    name: "Automation / n8n",
    icon: "/images/services/ai-automation/69522e119ada4a224d43f995_n8n-color 1.svg",
    alt: "Automation squad logo",
  },
  {
    name: "Database Architecture",
    icon: "/images/technologies/66963d979771a1787630197d_mysql.svg",
    alt: "Database logo",
  },
];
