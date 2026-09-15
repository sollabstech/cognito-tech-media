/**
 * ⚠️ DUMMY case-study data — to be made dynamic / managed from the Admin Panel.
 * Replace client names, handles, dates, numbers and copy with real data.
 */

export type WorkArea = { area: string; items: string[] };

export type CaseStudy = {
  id: string;
  client: string;
  logo: string; // "/case-studies/xxx.svg" — empty = monogram fallback
  brandColor: string;
  handle: string; // "" if not an Instagram engagement
  verified: boolean;
  industry: string;
  status: "completed" | "ongoing";

  // headline growth
  metricLabel: string; // "Instagram followers"
  before: number;
  after: number;

  // client journey
  joinedAt: string; // ISO — when the client came to us
  startedAt: string; // ISO — when work began
  completedAt: string; // ISO — when it wrapped / client left ("" if ongoing)

  summary: string; // short "what we did"
  services: string[];
  workHandled: WorkArea[];
  results: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "bloom-botanicals",
    client: "Bloom Botanicals",
    logo: "",
    brandColor: "#0d9488",
    handle: "bloom.botanicals",
    verified: false,
    industry: "Home fragrance",
    status: "completed",
    metricLabel: "Instagram followers",
    before: 0,
    after: 3_200,
    joinedAt: "2024-01-08",
    startedAt: "2024-01-15",
    completedAt: "2024-04-20",
    summary:
      "A brand-new label with an empty page. We built the profile from scratch — visual identity, a 3-reels-a-week cadence and a small launch-week ad push.",
    services: ["Instagram Marketing", "Video Production", "Poster Creatives"],
    workHandled: [
      {
        area: "Digital marketing",
        items: [
          "Profile setup, bio, highlights & grid design",
          "Content calendar — 12 reels + 8 posts / month",
          "Launch-week Meta ads (₹8k test budget)",
          "Hashtag + audio research, weekly reporting",
        ],
      },
      {
        area: "Production",
        items: ["Product + lifestyle reel shoots", "Editing, captions & motion graphics", "Poster creatives for offers"],
      },
    ],
    results: [
      "0 → 3,200 followers in ~3 months",
      "Top reel: 210k views",
      "First 40 DM enquiries came through Instagram",
    ],
  },
  {
    id: "ironpeak-fitness",
    client: "IronPeak Fitness",
    logo: "",
    brandColor: "#475569",
    handle: "ironpeak.fitness",
    verified: true,
    industry: "Gym & coaching",
    status: "completed",
    metricLabel: "Instagram followers",
    before: 1_200,
    after: 84_000,
    joinedAt: "2024-02-05",
    startedAt: "2024-02-12",
    completedAt: "2024-08-18",
    summary:
      "An underused page with good members but no system. We turned member transformations into a weekly reel engine and layered retargeting on top.",
    services: ["Instagram Marketing", "Video Shooting", "Video Editing", "Paid Advertising"],
    workHandled: [
      {
        area: "Digital marketing",
        items: [
          "Weekly on-site shoot days",
          "Transformation + education reel series",
          "Retargeting ads to reel viewers & site visitors",
          "Monthly growth & engagement reports",
        ],
      },
      {
        area: "Production",
        items: ["Multi-angle shooting", "Fast-cut editing, subtitles, hooks", "Thumbnail & cover design"],
      },
    ],
    results: [
      "1,200 → 84,000 followers in 6 months",
      "Avg. reel views: 90k",
      "42 membership sign-ups attributed to Instagram",
    ],
  },
  {
    id: "coastline-cafe",
    client: "Coastline Café",
    logo: "",
    brandColor: "#f59e0b",
    handle: "coastline.cafe",
    verified: false,
    industry: "Café & food",
    status: "completed",
    metricLabel: "Instagram followers",
    before: 40,
    after: 45_200,
    joinedAt: "2024-03-10",
    startedAt: "2024-03-18",
    completedAt: "2024-09-14",
    summary:
      "Near-zero following for a café with a loyal walk-in crowd. Food reels shot in-house plus a local-first targeting plan brought the online audience up to match.",
    services: ["Instagram Marketing", "Video Production", "Poster Creatives"],
    workHandled: [
      {
        area: "Digital marketing",
        items: [
          "Local geo-targeted content + collabs",
          "3 food reels / week, menu launches",
          "Google Business Profile refresh",
          "Weekly reporting",
        ],
      },
      { area: "Production", items: ["In-house food styling & shooting", "Editing + trending audio", "Seasonal poster creatives"] },
    ],
    results: ["40 → 45,200 followers in ~6 months", "Weekend covers up noticeably", "3 reels crossed 800k views"],
  },
  {
    id: "northlane-realty",
    client: "Northlane Realty",
    logo: "",
    brandColor: "#4f46e5",
    handle: "northlane.realty",
    verified: false,
    industry: "Real estate",
    status: "completed",
    metricLabel: "Instagram followers",
    before: 90,
    after: 21_800,
    joinedAt: "2024-04-02",
    startedAt: "2024-04-10",
    completedAt: "2024-09-25",
    summary:
      "Instagram plus a new website. Walkthrough reels drove discovery; the site turned that attention into booked viewings.",
    services: ["Instagram Marketing", "E-commerce Website", "Website Development", "Paid Advertising"],
    workHandled: [
      {
        area: "Digital marketing",
        items: ["Property walkthrough reel series", "Lead-gen ads to a booking form", "CRM + WhatsApp follow-up flow"],
      },
      {
        area: "Development",
        items: ["New dynamic website + listings CMS", "Viewing-request forms & analytics", "Speed & on-page SEO pass"],
      },
    ],
    results: [
      "90 → 21,800 followers in ~5 months",
      "Website live — 38% of enquiries now come from Instagram",
      "Viewing requests up ~2.5×",
    ],
  },
  {
    id: "vertex-apps",
    client: "Vertex Apps",
    logo: "",
    brandColor: "#7c3aed",
    handle: "",
    verified: false,
    industry: "SaaS / mobile",
    status: "ongoing",
    metricLabel: "Monthly active users",
    before: 0,
    after: 12_400,
    joinedAt: "2024-01-20",
    startedAt: "2024-02-01",
    completedAt: "",
    summary:
      "A product build, not a social engagement — cross-platform app plus a marketing site, with a light content layer to support launch.",
    services: ["Mobile App Development", "Website Development", "UI/UX Design"],
    workHandled: [
      {
        area: "Development",
        items: [
          "iOS + Android app (Flutter)",
          "Next.js marketing site + blog",
          "Admin dashboard & analytics",
          "App Store / Play Store submission",
        ],
      },
      { area: "Digital marketing", items: ["Launch landing page + waitlist", "Explainer video", "SEO foundation"] },
    ],
    results: ["0 → 12,400 monthly active users", "4.8★ average store rating", "Ongoing — feature roadmap in progress"],
  },
];
