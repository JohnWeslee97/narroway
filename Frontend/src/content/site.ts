// All site copy lives here. Edit this file to update the website.
// Items marked PLACEHOLDER need Narroway's real details before launch.

export const site = {
  name: "Narroway",
  tagline: "Business Solution",
  email: "narrowayoffice@gmail.com",
  phone: "+91 73058 31401",
  address: "Chennai, Tamil Nadu, India", // PLACEHOLDER: full office address
  socials: {
    x: "https://x.com/", // PLACEHOLDER
    youtube: "https://www.youtube.com/", // PLACEHOLDER
    linkedin: "https://www.linkedin.com/", // PLACEHOLDER
    instagram: "https://www.instagram.com/", // PLACEHOLDER
  },
};

export const nav = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "About", href: "#about", icon: "user" },
  { label: "Services", href: "#services", icon: "layers" },
  { label: "Contact", href: "#contact", icon: "chat" },
] as const;

export const hero = {
  pill: "Trusted Business Partner",
  topCta: "Book a consultation",
  titleStart: "Transforming",
  titleAccent: "Businesses",
  titleEnd: "Through Innovation.",
  subtitle: "You don't need five different agencies. All you need is ",
  subtitleBold: "one focused partner.",
  primary: { label: "View all services", href: "#services" },
  secondary: { label: "See how it works", href: "#process" },
  avatars: [
    { name: "MVKS", logo: "/images/clients/mvks-mark.png", bg: "bg-[#18181b]", imgClass: "object-contain p-1" },
    { name: "Udavi", logo: "/images/clients/udavi.png", bg: "bg-[#428bd9]", imgClass: "object-cover" },
  ],
  morePartners: "+2",
  trust: ["4+ partners trust us", "with their growth"],
};

export const statsBand = {
  statement: ["Designed not just to look good, our solutions are built", "to perform where it matters most"],
  // PLACEHOLDER numbers
  stats: [
    { prefix: "+", value: 50, suffix: "", caption: "Businesses supported across India", icon: "users" },
    { prefix: "₹", value: 2, suffix: "Cr+", caption: "Ad spend managed for clients", icon: "trend" },
    { prefix: "+", value: 120, suffix: "", caption: "Filings and registrations completed", icon: "check" },
  ],
};

export type Service = {
  name: string;
  tag?: "New" | "Popular";
  category: string;
  image: string;
  hoverImage: string;
};

export const services: Service[] = [
  { name: "Digital Marketing", category: "Ads · SEO · Social media", image: "/images/services/digital-marketing.webp", hoverImage: "/images/services/digital-marketing-hover.webp" },
  { name: "Growth Consulting", tag: "Popular", category: "Business strategy", image: "/images/services/growth-consulting.webp", hoverImage: "/images/services/growth-consulting-hover.webp" },
  { name: "Website Development", category: "Websites · Web apps", image: "/images/services/website-development.webp", hoverImage: "/images/services/website-development-hover.webp" },
  { name: "Custom Software", category: "Tools · Automation", image: "/images/services/custom-software.webp", hoverImage: "/images/services/custom-software-hover.webp" },
  { name: "AI Projects", tag: "New", category: "AI solutions", image: "/images/services/ai-projects.webp", hoverImage: "/images/services/ai-projects-hover.webp" },
  { name: "Videography & Editing", category: "Shoot · Edit · Post", image: "/images/services/videography-editing.webp", hoverImage: "/images/services/videography-editing-hover.webp" },
];

export const processSection = {
  // words wrapped in [] render in the accent colour
  intro: "Working with us is simpler than you think — just [book] a free call, [plan] the roadmap together, and watch your business [grow].",
  steps: [
    { step: "Step 1", title: "Book A Free Call", body: "First, tell us about your business, your goals and what is holding you back. It takes 30 minutes." },
    { step: "Step 2", title: "Get Your Roadmap", body: "Then we build a focused plan with priorities, timelines and costs to match your stage." },
    { step: "Step 3", title: "Launch & Grow", body: "Finally, we execute alongside you and report every month. No extra hassle, no juggling vendors." },
  ],
};

// PLACEHOLDER testimonials: replace with real client quotes before launch
export const testimonials = {
  title: ["Loved By Businesses", "Across India"],
  intro: ["Hear from founders and teams who used Narroway to", "launch, scale and reach their goals"],
  rating: "4.9/5 Average Rating",
  items: [
    { logo: "RETAILCO", quote: "Clear plans and honest advice helped us launch faster, win more customers and scale with confidence.", name: "Client Name", company: "Retail Brand" },
    { quote: "Ads live in 2 days...wow", name: "Client Name", company: "Clinic" },
    { logo: "BUILDWELL", quote: "Our GST and filings used to be a headache. Now everything is on time and we never think about it.", name: "Client Name", company: "Manufacturing Unit" },
    { quote: "Loved working together.", name: "Client Name", company: "Startup" },
    { logo: "FRESHKART", quote: "The Meta campaigns finally make sense. We know exactly what each rupee brings back.", name: "Client Name", company: "D2C Store" },
    { logo: "HOPE TRUST", quote: "They helped us present our programmes to CSR partners with confidence and real impact numbers.", name: "Client Name", company: "NGO" },
    { quote: "Highly recommended", name: "Client Name", company: "Services Firm" },
    { logo: "NOVA LABS", quote: "A new brand and website in two weeks. It instantly raised how customers see us.", name: "Client Name", company: "Tech Startup" },
    { logo: "SRI TEXTILES", quote: "One team for marketing, accounts and strategy saves us hours every single week.", name: "Client Name", company: "Textiles" },
  ],
};

// PLACEHOLDER prices
export const pricing = {
  titleStart: "One Partner.",
  titleAccent: "Complete",
  titleEnd: "Growth.",
  sub: "Whether you need one service or the whole engine, we've got you ",
  subBold: "covered.",
  plans: [
    {
      name: "Single Service",
      blurb: "Includes any one service",
      price: "₹9,999",
      oldPrice: "",
      best: false,
      cta: "Choose your service",
      features: ["Choose any one service", "Monthly progress report", "Email and WhatsApp support"],
      note: "For startups, shops and solo founders",
    },
    {
      name: "Complete Growth",
      blurb: "Everything in one package",
      price: "₹24,999",
      oldPrice: "₹45,000",
      best: true,
      cta: "Book a consultation",
      features: ["Consulting, marketing and compliance", "Meta ads management", "Brand and website refresh", "Accounts and monthly reports", "Dedicated consultant", "Priority support"],
      note: "For growing businesses and NGOs",
    },
  ],
};

export const faqs = {
  note: ["Here are a few commonly asked questions,", "answered for you"],
  items: [
    { q: "What kind of businesses do you work with?", a: "Startups, small and medium businesses, and NGOs. If you are building something, we can help it grow." },
    { q: "How soon will I see results?", a: "Compliance and setup work is immediate. Marketing usually shows clear results within 30 to 90 days." },
    { q: "Can I pick just one service?", a: "Yes. Every service is available on its own, and the Complete Growth package bundles them at a better price." },
    { q: "Do you work outside Chennai?", a: "Yes. Most of our work happens online, so we support clients across India." },
    { q: "Is the first consultation really free?", a: "Yes. A 30-minute call with no obligation, and you leave with at least one thing to act on." },
    { q: "How do payments work?", a: "Simple monthly billing with a GST invoice. You can pause or change your plan any month." },
  ],
};

export const discount = {
  title: ["Get Your Free", "Consultation"],
  bullets: [
    { bold: "Free 30-minute", rest: " business health check" },
    { bold: "", rest: "Receive weekly tips to grow your business" },
  ],
  cta: "Claim your consultation",
};

export const aboutUs = {
  title: "About Us",
  intro: "Narroway serves as a dedicated IT and digital team, primarily for NGOs as well as small businesses. From website creation and maintenance to social media, digital marketing, videography, video editing and content creation, we manage every technical detail for you.",
  body: "You focus on your mission and daily work while we run your entire technical and digital side—keeping your websites updated, your content consistent and your outreach growing.",
  values: [
    { title: "Web & Tech Maintenance", text: "Website creation, updates, hosting and ongoing technical support—managed by one dedicated IT team." },
    { title: "Media & Marketing", text: "Social media handling, digital marketing, videography, video editing and content creation under one roof." },
    { title: "NGOs & Small Businesses", text: "Focused primarily on NGOs and small businesses, with clear plans, steady support and honest results." },
  ],
  cta: { label: "Talk to us", href: "/contact" },
};

// Shown in the dark band under the stats. Only details we have are listed; add more as they come in.
export const ngoClients = [
  { name: "Udavi", tagline: "Development Through Participation", logo: "/images/clients/udavi.png", logoWidth: 1024, logoHeight: 1024 },
  { name: "MVKS", tagline: "Makkal Vilipunarvu Kalvi Sangam", location: "Srivilliputhur - 626 125", logo: "/images/clients/mvks.png", logoWidth: 1024, logoHeight: 290 },
];
