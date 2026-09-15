/**
 * ⚠️ PLACEHOLDER portfolio data.
 *
 * Every client below is invented — replace names, @handles, follower counts,
 * timeframes, reel .mp4s and reel URLs with real client data before launch.
 * The point of the section is to show the follower growth we achieved for
 * Instagram clients, plus website / app / other work, filterable by service.
 * To be driven by the admin panel later.
 */

export type PortfolioCategoryKey = "instagram" | "mobile-app" | "website" | "other";

export const portfolioCategories: { key: PortfolioCategoryKey; label: string }[] = [
  { key: "instagram", label: "Instagram Marketing" },
  { key: "mobile-app", label: "Mobile App Development" },
  { key: "website", label: "Website Development" },
  { key: "other", label: "Other services" },
];

export type Reel = {
  videoSrc: string;
  views: number;
  likes: number;
  caption: string;
  url: string; // link to the real reel on Instagram
};

export type PortfolioClient = {
  id: string;
  name: string;
  /** Brand logo — put a file in /public/portfolio/ and set the path here,
   *  e.g. "/portfolio/maya-skincare.svg". Empty = show a monogram fallback. */
  logo: string;
  /** Fallback monogram colour when there's no logo yet. */
  brandColor: string;
  handle: string; // "" when not an Instagram client
  profileUrl: string;
  verified: boolean;
  categories: PortfolioCategoryKey[];
  industry: string;
  services: string[];
  summary: string;
  // Instagram growth story
  followersBefore: number;
  followersAfter: number;
  timeframe: string;
  reels: Reel[];
  // Non-Instagram work
  deliverable?: string;
  resultNote?: string;
  link?: string;
};

const MP4_A = "https://www.w3schools.com/html/mov_bbb.mp4";
const MP4_B = "https://www.w3schools.com/html/movie.mp4";
const IG = (h: string) => `https://www.instagram.com/${h}`;

export const portfolioClients: PortfolioClient[] = [
  {
    id: "maya-skincare",
    name: "Maya Skincare",
    logo: "", // TODO: real brand logo, e.g. /portfolio/xxx.svg
    brandColor: "#e11d48",
    handle: "maya.skincare",
    profileUrl: IG("maya.skincare"),
    verified: true,
    categories: ["instagram"],
    industry: "Beauty & skincare",
    services: ["Instagram Marketing", "Video Production"],
    summary: "Weekly reels + a paid-social layer took a quiet page to a sales channel.",
    followersBefore: 320,
    followersAfter: 128_000,
    timeframe: "in 7 months",
    reels: [
      { videoSrc: MP4_A, views: 2_410_000, likes: 184_000, caption: "The 3-step night routine", url: IG("maya.skincare") },
      { videoSrc: MP4_B, views: 940_000, likes: 61_000, caption: "Founder Q&A: sensitive skin", url: IG("maya.skincare") },
      { videoSrc: MP4_A, views: 1_180_000, likes: 92_000, caption: "Before / after — 30 days", url: IG("maya.skincare") },
    ],
  },
  {
    id: "ironpeak-fitness",
    name: "IronPeak Fitness",
    logo: "", // TODO: real brand logo, e.g. /portfolio/xxx.svg
    brandColor: "#475569",
    handle: "ironpeak.fitness",
    profileUrl: IG("ironpeak.fitness"),
    verified: true,
    categories: ["instagram"],
    industry: "Gym & coaching",
    services: ["Instagram Marketing", "Video Shooting", "Video Editing"],
    summary: "Transformation reels and member stories, shot and edited in-house every week.",
    followersBefore: 1_200,
    followersAfter: 74_500,
    timeframe: "in 5 months",
    reels: [
      { videoSrc: MP4_B, views: 1_240_000, likes: 88_000, caption: "90-day transformation", url: IG("ironpeak.fitness") },
      { videoSrc: MP4_A, views: 520_000, likes: 33_000, caption: "5 mistakes killing your gains", url: IG("ironpeak.fitness") },
      { videoSrc: MP4_B, views: 810_000, likes: 47_000, caption: "A day of eating — 2,400 kcal", url: IG("ironpeak.fitness") },
    ],
  },
  {
    id: "coastline-cafe",
    name: "Coastline Café",
    logo: "", // TODO: real brand logo, e.g. /portfolio/xxx.svg
    brandColor: "#0d9488",
    handle: "coastline.cafe",
    profileUrl: IG("coastline.cafe"),
    verified: false,
    categories: ["instagram"],
    industry: "Café & food",
    services: ["Instagram Marketing", "Video Production", "Poster Creatives"],
    summary: "Started from almost nothing — food reels and a local-first content plan.",
    followersBefore: 40,
    followersAfter: 45_200,
    timeframe: "in 6 months",
    reels: [
      { videoSrc: MP4_A, views: 892_000, likes: 54_000, caption: "Signature dish, plated slow", url: IG("coastline.cafe") },
      { videoSrc: MP4_B, views: 1_020_000, likes: 71_000, caption: "6am — the bake begins", url: IG("coastline.cafe") },
    ],
  },
  {
    id: "greenleaf-organics",
    name: "GreenLeaf Organics",
    logo: "", // TODO: real brand logo, e.g. /portfolio/xxx.svg
    brandColor: "#16a34a",
    handle: "greenleaf.organics",
    profileUrl: IG("greenleaf.organics"),
    verified: false,
    categories: ["instagram", "website"],
    industry: "D2C grocery",
    services: ["Instagram Marketing", "E-commerce Website", "Paid Advertising"],
    summary: "Reels drove discovery; the new store turned that traffic into repeat orders.",
    followersBefore: 210,
    followersAfter: 21_800,
    timeframe: "in 4 months",
    deliverable: "E-commerce website (WooCommerce)",
    resultNote: "38% of orders now come from Instagram",
    link: "https://www.cognitotechmedia.com",
    reels: [
      { videoSrc: MP4_B, views: 430_000, likes: 24_000, caption: "From farm to doorstep in 24h", url: IG("greenleaf.organics") },
      { videoSrc: MP4_A, views: 610_000, likes: 39_000, caption: "What ‘organic’ actually means", url: IG("greenleaf.organics") },
    ],
  },
  {
    id: "boltrides",
    name: "Bolt Rides",
    logo: "", // TODO: real brand logo, e.g. /portfolio/xxx.svg
    brandColor: "#f59e0b",
    handle: "",
    profileUrl: "",
    verified: false,
    categories: ["mobile-app"],
    industry: "Mobility",
    services: ["Mobile App Development", "UI/UX Design"],
    summary: "A cross-platform ride-hailing app — rider, driver and dispatch, built end to end.",
    followersBefore: 0,
    followersAfter: 0,
    timeframe: "",
    deliverable: "iOS + Android app + admin dashboard",
    resultNote: "12k downloads in the first quarter",
    link: "https://www.cognitotechmedia.com",
    reels: [],
  },
  {
    id: "ledgerly",
    name: "Ledgerly",
    logo: "", // TODO: real brand logo, e.g. /portfolio/xxx.svg
    brandColor: "#4f46e5",
    handle: "",
    profileUrl: "",
    verified: false,
    categories: ["mobile-app"],
    industry: "Fintech",
    services: ["Mobile App Development", "Website Development"],
    summary: "A personal-finance app with automatic categorisation and a marketing site to match.",
    followersBefore: 0,
    followersAfter: 0,
    timeframe: "",
    deliverable: "Flutter app + Next.js marketing site",
    resultNote: "4.8★ average rating",
    link: "https://www.cognitotechmedia.com",
    reels: [],
  },
  {
    id: "aurora-interiors",
    name: "Aurora Interiors",
    logo: "", // TODO: real brand logo, e.g. /portfolio/xxx.svg
    brandColor: "#7c3aed",
    handle: "",
    profileUrl: "",
    verified: false,
    categories: ["website"],
    industry: "Interior design",
    services: ["Website Development", "SEO, AEO & GEO"],
    summary: "A fast, image-led portfolio site that ranks for local design searches.",
    followersBefore: 0,
    followersAfter: 0,
    timeframe: "",
    deliverable: "Dynamic website + project CMS",
    resultNote: "Page 1 for ‘interior designer’ + city, in 90 days",
    link: "https://www.cognitotechmedia.com",
    reels: [],
  },
  {
    id: "pulse-events",
    name: "Pulse Events",
    logo: "", // TODO: real brand logo, e.g. /portfolio/xxx.svg
    brandColor: "#ea580c",
    handle: "",
    profileUrl: "",
    verified: false,
    categories: ["other"],
    industry: "Events",
    services: ["Brand Identity", "Video Shooting", "Poster Creatives"],
    summary: "Full brand identity plus on-the-ground event coverage and recap films.",
    followersBefore: 0,
    followersAfter: 0,
    timeframe: "",
    deliverable: "Logo system, print kit, 6 recap films",
    resultNote: "Used across 4 city launches",
    link: "https://www.cognitotechmedia.com",
    reels: [],
  },
];

export function categoryCount(key: PortfolioCategoryKey | "all") {
  return key === "all"
    ? portfolioClients.length
    : portfolioClients.filter((c) => c.categories.includes(key)).length;
}
