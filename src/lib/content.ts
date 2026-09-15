/** Home-page content data. Kept factual and non-fabricated — no client names, stats or testimonials. */

export const brandPillars = [
  {
    key: "build",
    title: "Build",
    copy: "Fast, accessible websites — static, dynamic and e-commerce — engineered for Core Web Vitals and built to scale.",
  },
  {
    key: "grow",
    title: "Grow",
    copy: "SEO, AEO & GEO, social media and paid advertising working together so results compound month after month.",
  },
  {
    key: "create",
    title: "Create",
    copy: "Scripting, shooting and editing — video content that earns attention and gives every channel something to say.",
  },
] as const;

export const serviceCards = [
  {
    title: "Website Development",
    href: "/services/website-development",
    copy: "Static, dynamic and e-commerce builds with clean code, fast loads and a CMS your team can actually use.",
    points: ["Static Website", "Dynamic Website", "E-commerce Website"],
  },
  {
    title: "Digital Marketing Services",
    href: "/services/digital-marketing",
    copy: "Search, social and paid channels run as one system — planned, executed and reported against real goals.",
    points: ["SEO, AEO & GEO", "Social Media Marketing", "Paid Advertising"],
  },
  {
    title: "Video Production",
    href: "/services/video-production",
    copy: "From script to final cut — video built for the platform it lives on, not repurposed as an afterthought.",
    points: ["Video Script Writing", "Video Shooting", "Video Editing"],
  },
] as const;

export const capabilities = [
  { title: "One accountable team", copy: "Web, marketing and video under one roof — no hand-off gaps, no finger-pointing." },
  { title: "Performance-first", copy: "Every build is measured against Core Web Vitals and real mobile devices." },
  { title: "Mobile-first, always", copy: "Designed and tested at 320–430px before it ever reaches a desktop review." },
  { title: "Transparent reporting", copy: "Clear dashboards and plain-language updates tied to the goals you care about." },
  { title: "Built to iterate", copy: "We ship, measure and refine — the first version is a starting point, not the finish line." },
  { title: "Own your assets", copy: "Code, content and ad accounts stay yours. No lock-in, no hostage situations." },
] as const;

export const processSteps = [
  { n: "01", title: "Discover", copy: "Goals, audience and constraints. We agree what success looks like before touching design." },
  { n: "02", title: "Build", copy: "Design and development in tight loops, reviewed on real devices at every stage." },
  { n: "03", title: "Grow", copy: "Launch, then marketing and video kick in to drive traffic, leads and retention." },
  { n: "04", title: "Refine", copy: "Data comes back, we prioritise the next round of improvements. Repeat." },
] as const;

/** Digital Marketing Package — deliverables shown as a simple scannable list (no wide pricing table). */
export const packageDeliverables = [
  "8 Videos",
  "Video Script Writing",
  "Video Editing",
  "12 Poster Creatives",
  "Meta Ads",
  "Google Ads Setup",
  "Social Media Page Handling",
  "Organic Growth",
  "Paid Advertising Growth",
] as const;

/**
 * The landing-page "featured reel".
 *
 * `account` numbers below are the REAL Instagram profile stats
 * (instagram.com/cognito_tech_media). The per-reel numbers (`views`, `likes`,
 * `comments`, `shares`, `watchingNow`) are still ⚠️ PLACEHOLDER — set them to a
 * real reel's figures, and point `videoSrc` at that reel exported as .mp4
 * (Instagram's own embed can't muted-autoplay). To be driven by the admin panel.
 */
export const featuredReel = {
  videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", // TODO: real reel .mp4
  posterSrc: "", // optional still image shown before the video loads
  caption: "Behind the scenes on a recent brand film shoot.",
  music: "Original audio · Cognito Tech Media",
  // per-reel engagement — ⚠️ PLACEHOLDER
  views: 1_240_000,
  likes: 84_200,
  comments: 1_940,
  shares: 3_100,
  watchingNow: 1_204,
  // Three Instagram ACCOUNTS + their top reel, shown in the section.
  // ⚠️ PLACEHOLDER — swap for real client handles, follower counts, reel .mp4s,
  // real view counts and the real profile URLs. To be driven by the admin panel.
  reels: [
    {
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "",
      name: "Maya Skincare",
      handle: "maya.skincare",
      verified: true,
      followers: 128_000,
      views: 2_410_000,
      label: "Launch campaign reel",
      url: "https://www.instagram.com/cognito_tech_media",
    },
    {
      videoSrc: "https://www.w3schools.com/html/movie.mp4",
      poster: "",
      name: "IronPeak Fitness",
      handle: "ironpeak.fitness",
      verified: true,
      followers: 74_500,
      views: 1_240_000,
      label: "90-day transformation",
      url: "https://www.instagram.com/cognito_tech_media",
    },
    {
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
      poster: "",
      name: "Saffron Kitchen",
      handle: "saffron.kitchen",
      verified: false,
      followers: 45_200,
      views: 892_000,
      label: "Signature dish teaser",
      url: "https://www.instagram.com/cognito_tech_media",
    },
  ],
  // real profile stats
  account: {
    name: "Cognito Tech Media | Digital Marketing",
    handle: "cognito_tech_media",
    verified: true,
    posts: 101,
    followers: 13_200,
    following: 39,
    url: "https://www.instagram.com/cognito_tech_media",
  },
  // ambient "live activity" ticker — generic, not claiming specific events
  activity: [
    "@ravi.designs liked this",
    "@meraj.travels commented “🔥🔥”",
    "shared to a story",
    "@linga.sweets started following",
    "@apple.supermarket liked this",
    "saved by 42 people",
  ],
} as const;
