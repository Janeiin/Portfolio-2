import {
  Compass,
  Megaphone,
  Fingerprint,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  summary: string;
  detail: string;
  capabilities: string[];
};

export const services: Service[] = [
  {
    slug: "create-clarity",
    title: "Create Clarity",
    icon: Compass,
    summary:
      "Know where to play, how to win, and what to do first.",
    detail:
      "Before anything is designed, written or launched, we help leadership teams find the real question and answer it. Business strategy, market research and transformation, grounded in evidence and commercial reality rather than assumption.",
    capabilities: [
      "Business strategy",
      "Market research",
      "Transformation",
    ],
  },
  {
    slug: "build-brands",
    title: "Build Brands",
    icon: Fingerprint,
    summary:
      "Positioning, story and identity people actually remember.",
    detail:
      "A brand is a promise kept consistently. We shape positioning, messaging and identity that give an organisation a clear voice, then build the guidance to hold that standard everywhere it appears.",
    capabilities: [
      "Brand strategy",
      "Positioning",
      "Messaging",
      "Identity",
    ],
  },
  {
    slug: "grow-audiences",
    title: "Grow Audiences",
    icon: Megaphone,
    summary:
      "Campaigns and content with a purpose behind every piece.",
    detail:
      "Marketing that begins with a business objective, not a content calendar. We plan, create and run campaigns across content, social media and events, then measure them against outcomes that matter.",
    capabilities: [
      "Campaigns",
      "Content",
      "Social media",
      "Events",
    ],
  },
  {
    slug: "work-smarter",
    title: "Work Smarter",
    icon: Sparkles,
    summary:
      "Practical AI that makes the work sharper, not noisier.",
    detail:
      "We help teams adopt AI where it genuinely improves the work: research and insight at scale, content systems and sensible automation. Grounded in strategy, governed responsibly, measured honestly.",
    capabilities: [
      "Artificial intelligence",
      "Automation",
      "Research",
      "Insights",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Industries                                                          */
/* ------------------------------------------------------------------ */

export type Industry = {
  name: string;
  line: string;
  tone: string; // tailwind gradient classes for the visual treatment
};

export const industries: Industry[] = [
  {
    name: "Healthcare",
    line: "Strategy and transformation for complex care organisations.",
    tone: "from-stone via-pearl to-ivory",
  },
  {
    name: "Luxury",
    line: "Brands where restraint, craft and story carry the value.",
    tone: "from-burgundy-deep via-burgundy to-wine",
  },
  {
    name: "Automotive",
    line: "Marketing for marques defined by performance and heritage.",
    tone: "from-graphite via-ink to-graphite",
  },
  {
    name: "Tourism",
    line: "Destinations and experiences worth travelling for.",
    tone: "from-champagne via-stone to-pearl",
  },
  {
    name: "Education",
    line: "Institutions building reputation through research and results.",
    tone: "from-wine via-burgundy to-burgundy-deep",
  },
];

/* ------------------------------------------------------------------ */
/* Selected work                                                       */
/* ------------------------------------------------------------------ */

export type CaseStudy = {
  slug: string;
  client: string;
  title: string;
  discipline: string;
  industry: string;
  year: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  roles?: string[];
  results?: { value: string; label: string }[];
  tone: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-strategy-launch",
    client: "National Healthcare Organisation",
    title: "A strategy launched as a national conversation",
    discipline: "Strategy · Communications · Events",
    industry: "Healthcare",
    year: "2024",
    summary:
      "Turning a new enterprise strategy into a nationwide engagement campaign across more than fifteen thousand caregivers.",
    challenge:
      "A leading Australian healthcare organisation needed to launch a new enterprise strategy across more than fifteen thousand caregivers, while engaging executives, frontline teams and external audiences at the same time.",
    approach:
      "We built an integrated engagement campaign rather than a document rollout: strategy communication, executive presentations, a public facing strategy document, LinkedIn and Facebook content, internal communications, live event production, panel discussions, video content and nationwide live streaming.",
    outcome:
      "The strategy did not simply launch, it was understood. What might have been a document sent to an inbox became a national conversation the organisation could see, join and respond to.",
    roles: [
      "Corporate strategy",
      "Executive communications",
      "Content strategy",
      "Event management",
      "Campaign delivery",
      "Stakeholder engagement",
      "Video production",
      "Live streaming",
    ],
    results: [
      { value: "15,000+", label: "Caregivers reached" },
      { value: "8,000+", label: "Strategy document views" },
      { value: "4,000+", label: "Live stream viewers" },
      { value: "200+", label: "Employee feedback submissions" },
    ],
    tone: "from-stone via-pearl to-champagne",
  },
  {
    slug: "luxury-automotive",
    client: "Prestige Automotive Portfolio",
    title: "Marketing for marques people dream about",
    discipline: "Marketing · Digital · Account Management",
    industry: "Luxury Automotive",
    year: "2019–2022",
    summary:
      "Digital media, account management and marketing for Mercedes Benz, Ferrari, Lamborghini and Maserati.",
    challenge:
      "Luxury automotive brands demand marketing that matches the product: precise, restrained and quietly confident. Every touchpoint carries the weight of the marque, and the standard of the showroom has to hold online.",
    approach:
      "Managing digital media, account relationships and marketing activity across a portfolio of premium marques, the work centred on understanding luxury audiences, protecting premium brand standards and keeping the customer experience consistent across every digital channel.",
    outcome:
      "A consistent, premium presence across the portfolio, where each brand felt unmistakably itself and every audience was met with the standard it expected.",
    tone: "from-graphite via-ink to-burgundy-deep",
  },
  {
    slug: "shiseido-social-strategy",
    client: "Shiseido",
    title: "A research led social strategy for a beauty house",
    discipline: "Research · Social Strategy",
    industry: "Luxury Beauty",
    year: "2023",
    summary:
      "Market research and social media strategy contributing to a Shiseido product launch.",
    challenge:
      "For a product launch, the question was not what to post but what the channel should achieve, and how the brand's positioning should carry through every audience touchpoint.",
    approach:
      "The work began with market research. Audience insights into how customers discover and evaluate the brand informed the social media strategy, shaping communication and positioning around evidence rather than trend.",
    outcome:
      "A social strategy anchored in audience understanding, where communication and positioning followed the research rather than the algorithm.",
    tone: "from-champagne via-stone to-pearl",
  },
];

/* ------------------------------------------------------------------ */
/* Statistics                                                          */
/* ------------------------------------------------------------------ */

export type Stat = {
  value: number | null;
  suffix: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 8, suffix: "+", label: "Years in Marketing and Strategy" },
  { value: 10, suffix: "+", label: "Brands Managed" },
  { value: 15, suffix: "+", label: "Marketing and Brand Events" },
  { value: null, suffix: "", label: "Enterprise Strategy Leadership" },
];

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Janin brings a rare combination of strategic depth and creative instinct. She asks the questions everyone else skips, and the work is better for it.",
    name: "Group Executive",
    role: "National Healthcare Provider",
  },
  {
    quote:
      "The strategy was grounded in real research, not opinion. For the first time our marketing plan and our business plan were the same document.",
    name: "Marketing Director",
    role: "Luxury Retail Group",
  },
  {
    quote:
      "Precise, elegant and commercially sharp. Third Horizon understood our brand better than we could articulate it ourselves.",
    name: "Founder",
    role: "Hospitality and Tourism Venture",
  },
];

/* ------------------------------------------------------------------ */
/* Insights                                                            */
/* ------------------------------------------------------------------ */

export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "what-problem-are-we-solving",
    title: "What problem are we solving?",
    category: "Philosophy",
    date: "June 2026",
    readingTime: "4 min read",
    excerpt:
      "The single question that separates intentional marketing from expensive noise.",
    body: [
      "Most marketing conversations begin in the wrong place. They begin with channels, formats and calendars: what should we post this week, which platform should we be on, how often should we send the newsletter. These are real questions, but they are third questions, not first ones.",
      "The first question is always the same. What problem are we solving? Sometimes the problem is awareness: the right people simply do not know you exist. Sometimes it is trust: they know you, but they are not yet convinced. Sometimes it is clarity: your offer is strong but your story is confusing. Each problem demands a different strategy, and a campaign designed for the wrong problem will fail no matter how beautiful it is.",
      "Research is how you find the real problem rather than the assumed one. Talk to customers. Study the data. Understand how your audience actually discovers, evaluates and decides. The answers are usually surprising, and they are always more useful than intuition.",
      "When the problem is clear, everything downstream becomes easier. Content has a job. Channels have a role. Budgets have a rationale. And marketing stops being a cost centre defending its existence, and becomes the most commercially interesting conversation in the building.",
    ],
  },
  {
    slug: "ai-belongs-in-the-strategy-room",
    title: "AI belongs in the strategy room, not just the content queue",
    category: "Artificial Intelligence",
    date: "May 2026",
    readingTime: "5 min read",
    excerpt:
      "Most teams use AI to produce more. The smarter ones use it to understand more.",
    body: [
      "The first wave of AI adoption in marketing has been about volume: more posts, more variants, more copy, faster. It is an understandable instinct and a limited one. Producing more of the wrong thing is not progress.",
      "The more valuable application is upstream. AI is extraordinarily good at the unglamorous work that great strategy depends on: synthesising research, mapping competitors, analysing customer conversations at scale, and stress testing positioning before a dollar is spent on media.",
      "Used this way, AI does not replace strategic judgement. It feeds it. The team that can review five hundred customer interviews in an afternoon asks better questions than the team working from a hunch and a mood board.",
      "The discipline is knowing where the human belongs. Taste, judgement, ethics and the final word on the story you tell: those stay with people. Everything mechanical around them is fair game for the machines.",
    ],
  },
  {
    slug: "luxury-brands-earn-attention-slowly",
    title: "Luxury brands earn attention slowly, on purpose",
    category: "Brand",
    date: "April 2026",
    readingTime: "4 min read",
    excerpt:
      "Restraint is not a limitation of luxury marketing. It is the strategy.",
    body: [
      "Luxury marketing looks inefficient from the outside. Fewer posts. Slower campaigns. An almost stubborn refusal to chase trends. This is not conservatism. It is a deliberate economic choice.",
      "Luxury value is built on scarcity, consistency and story. Every piece of communication either deposits into that account or withdraws from it. A trend chased for reach today can cost positioning that took a decade to build.",
      "The practical lesson applies well beyond fashion houses and automotive marques. Decide what your brand will never do. Hold your visual and verbal standard everywhere, including the places you think nobody is looking. And measure success in preference and pricing power, not only in impressions.",
      "Attention that arrives slowly tends to stay. That is the entire point.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Selected Work" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const siteConfig = {
  name: "THIRD HORIZON",
  description:
    "A boutique strategy and marketing consultancy helping ambitious organisations build brands with clarity, creativity and commercial impact through strategy, research, marketing and AI.",
  url: "https://thirdhorizon.consulting",
};
