// All site copy lives here. Edit this file to update the website.
// Items marked PLACEHOLDER need Narroway's real details before launch.

export const site = {
  name: "Narroway",
  tagline: "Business Solution",
  email: "narrowayoffice@gmail.com",
  phone: "+91 00000 00000", // PLACEHOLDER
  location: "Chennai, Tamil Nadu, India", // PLACEHOLDER: confirm address
  socials: {
    instagram: "https://www.instagram.com/", // PLACEHOLDER
    linkedin: "https://www.linkedin.com/", // PLACEHOLDER
    x: "https://x.com/", // PLACEHOLDER
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Packages", href: "#packages" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  badge: "Built for growing businesses",
  title: "The narrow way to a business that grows",
  subtitle:
    "Strategy, marketing and operations under one roof, so you can stop juggling vendors and start scaling with focus.",
  primaryCta: { label: "Book a free consultation", href: "#contact" },
  secondaryCta: { label: "See how it works", href: "#process" },
  trustLine: "Trusted by founders, NGOs and local brands",
  trustInitials: ["AK", "PR", "SM", "JV"],
};

// PLACEHOLDER numbers: replace with real figures
export const stats = [
  { value: 50, prefix: "", suffix: "+", label: "Businesses supported" },
  { value: 3, prefix: "", suffix: "x", label: "Average lead growth for ad clients" },
  { value: 98, prefix: "", suffix: "%", label: "Clients who stay after month one" },
];

export const services = [
  {
    title: "Business Consulting",
    tag: "Popular",
    description: "Clear plans for pricing, positioning and growth, built around your numbers.",
    icon: "compass",
  },
  {
    title: "Digital Marketing & Meta Ads",
    tag: "New",
    description: "Facebook and Instagram campaigns that turn spend into enquiries you can track.",
    icon: "megaphone",
  },
  {
    title: "Branding & Websites",
    tag: "",
    description: "Logos, brand kits and fast, modern websites that make you look as good as you are.",
    icon: "spark",
  },
  {
    title: "Registration & Compliance",
    tag: "",
    description: "GST, company registration and filings handled on time, every time.",
    icon: "shield",
  },
  {
    title: "Accounts & Finance",
    tag: "",
    description: "Bookkeeping, invoicing and monthly reports so you always know where you stand.",
    icon: "chart",
  },
  {
    title: "CSR & NGO Partnerships",
    tag: "",
    description: "Proposals, impact reports and partner outreach for social-impact programmes.",
    icon: "hands",
  },
];

export const process = {
  intro:
    "Working with us is simpler than you think: one conversation, one plan, and a team that executes it with you.",
  steps: [
    {
      step: "Step 1",
      title: "Discover",
      description: "A free call to understand your business, your goals and what is holding you back.",
    },
    {
      step: "Step 2",
      title: "Plan",
      description: "A focused roadmap with clear priorities, timelines and costs. No fluff.",
    },
    {
      step: "Step 3",
      title: "Grow",
      description: "We execute alongside you, report every month and adjust as results come in.",
    },
  ],
};

// PLACEHOLDER testimonials: replace with real client quotes before launch
export const testimonials = [
  { quote: "Narroway gave us a plan we could actually follow. Enquiries doubled in three months.", name: "Client Name", company: "Retail Brand" },
  { quote: "Our GST and filings used to be a headache. Now we never think about them.", name: "Client Name", company: "Manufacturing Unit" },
  { quote: "The Meta ads finally make sense. We know exactly what each rupee brings back.", name: "Client Name", company: "Clinic" },
  { quote: "A new website and brand in two weeks, and it looks world class.", name: "Client Name", company: "Startup" },
  { quote: "They helped us present our programmes to CSR partners with confidence.", name: "Client Name", company: "NGO" },
  { quote: "One team for marketing, accounts and strategy. It saves us so much time.", name: "Client Name", company: "Services Firm" },
];

// PLACEHOLDER prices
export const packages = [
  {
    name: "Starter",
    blurb: "For new and small businesses",
    price: "₹9,999",
    period: "/ month",
    highlight: false,
    features: ["Business health check", "Social media setup", "GST filing support", "Monthly review call"],
    cta: "Get started",
  },
  {
    name: "Growth",
    blurb: "For businesses ready to scale",
    price: "₹24,999",
    period: "/ month",
    highlight: true,
    badge: "Best value",
    features: [
      "Everything in Starter",
      "Meta ads management",
      "Website and brand refresh",
      "Accounts and compliance",
      "Dedicated consultant",
      "Priority support",
    ],
    cta: "Talk to us",
  },
];

export const faqs = [
  { q: "What kind of businesses do you work with?", a: "Startups, small and medium businesses, and NGOs. If you are building something, we can help it grow." },
  { q: "How soon will I see results?", a: "Compliance and setup work is immediate. Marketing usually shows clear results within 30 to 90 days." },
  { q: "Can I pick just one service?", a: "Yes. Every service is available on its own, and packages simply bundle them at a better price." },
  { q: "Do you work outside Chennai?", a: "Yes. Most of our work happens online, so we support clients across India." },
  { q: "Is the first consultation really free?", a: "Yes. A 30-minute call with no obligation, where you leave with at least one thing to act on." },
];
