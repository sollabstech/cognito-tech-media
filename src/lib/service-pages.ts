/**
 * Full content for every service route — carried over from cognitotechmedia.com.
 * Consumed by src/app/services/[...slug]/page.tsx and the sitemap.
 */

export type ServiceSection = { title: string; copy?: string };
export type TechGroup = { group: string; items: string[] };
export type Faq = { q: string; a: string };

export type ServicePage = {
  slug: string; // path after /services
  eyebrow: string; // parent group label
  title: string;
  lead: string;
  intro?: string;
  offeringsTitle?: string;
  offerings: ServiceSection[];
  highlightsTitle?: string;
  highlights?: string[];
  audienceTitle?: string;
  audience?: string[];
  processTitle?: string;
  process?: ServiceSection[];
  tech?: TechGroup[];
  faqs?: Faq[];
};

export const servicePages: ServicePage[] = [
  // ───────────────────────────── Website Development ─────────────────────────────
  {
    slug: "website-development",
    eyebrow: "Website Development",
    title: "Website Development",
    lead: "Custom, responsive, and high-performing websites built to grow your business online.",
    intro:
      "We design and develop fast, responsive, and SEO-friendly websites that enhance user experience and drive business growth — combining modern aesthetics with real usability.",
    offeringsTitle: "What we build",
    offerings: [
      { title: "Custom Website Design", copy: "Unique, responsive designs that reflect your brand identity." },
      { title: "WordPress Development", copy: "CMS-based solutions for businesses of every size." },
      { title: "eCommerce Website Development", copy: "Online stores with secure payment processing." },
      { title: "Landing Page Design", copy: "High-converting pages built for leads and sales." },
      { title: "Website Maintenance & Support", copy: "Ongoing updates and technical assistance." },
      { title: "SEO-Optimized Development", copy: "Clean code and search optimisation from day one." },
    ],
    highlightsTitle: "Why our builds stand out",
    highlights: [
      "Creative + functional design — modern aesthetics with usability",
      "Custom-built solutions tailored to your brand",
      "Mobile-first approach for responsive experiences",
      "Fast & SEO-ready infrastructure for search visibility",
      "Easy to manage — you stay in control of your content",
    ],
    tech: [
      { group: "Frontend", items: ["HTML5 / CSS3", "JavaScript", "React.js", "Vue.js", "Angular", "Tailwind CSS", "Bootstrap", "Next.js", "Nuxt.js"] },
      { group: "Backend", items: ["Node.js", "Express.js", "PHP", "Laravel", "Python (Django / Flask)", "Ruby on Rails"] },
      { group: "Database", items: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB", "Firebase"] },
    ],
  },
  {
    slug: "website-development/static-website",
    eyebrow: "Website Development",
    title: "Static Website Designing",
    lead: "Professional web designing services that give your business a fast, secure and effective online presence.",
    intro:
      "We specialise in crafting high-quality static websites that provide a robust and effective online presence for your business or personal needs.",
    offeringsTitle: "What's included",
    offerings: [
      { title: "Custom Design" },
      { title: "HTML, CSS & JavaScript" },
      { title: "Responsive Design" },
      { title: "Content Integration" },
      { title: "Search Engine Optimization" },
      { title: "Fast Loading Speed Optimization" },
      { title: "Deployment & Hosting Setup" },
      { title: "Ongoing Support & Maintenance" },
    ],
    audienceTitle: "Ideal for",
    audience: [
      "Small businesses — a professional presence without the complexity of a dynamic site",
      "Brochure websites — showcase products, services and company information",
      "Landing pages — targeted pages for marketing campaigns with clear CTAs",
      "Portfolios — display creative work in a visually appealing format",
      "Personal websites — share a blog, resume or personal information",
      "Documentation websites — clear, concise information for your products",
    ],
    highlightsTitle: "Built to be",
    highlights: ["Fast", "Secure", "Affordable", "Reliable", "Scalable"],
  },
  {
    slug: "website-development/dynamic-website",
    eyebrow: "Website Development",
    title: "Dynamic Website Designing",
    lead: "Websites where content is generated in real time from databases, server-side scripting and user interactions.",
    intro:
      "Dynamic websites display content that updates in real time based on user interactions, database information and server-side scripting — ideal for content-heavy businesses that update regularly.",
    offeringsTitle: "Service components",
    offerings: [
      { title: "Custom Design" },
      { title: "Server-Side Programming", copy: "PHP, Python, Java, Node.js" },
      { title: "CMS Integration", copy: "WordPress, Drupal, Joomla" },
      { title: "E-commerce Development" },
      { title: "API Integration" },
      { title: "Performance Optimization" },
      { title: "Deployment Assistance" },
      { title: "User Authentication Systems" },
    ],
    audienceTitle: "Great for",
    audience: [
      "E-commerce businesses",
      "Membership websites",
      "Online communities and forums",
      "Booking and reservation systems",
      "Learning management systems",
      "Content-heavy businesses requiring regular updates",
    ],
    highlightsTitle: "Our approach",
    highlights: ["Experienced and skilled developers", "Customised solutions", "Scalable architecture"],
    faqs: [
      {
        q: "What's the difference between a dynamic and a static website?",
        a: "A static site serves fixed pages, while a dynamic site generates content in real time from a database and responds to user interactions — making it easier to update and scale.",
      },
      {
        q: "Which CMS platforms do you support?",
        a: "We work with WordPress, Drupal and Joomla, and can build custom solutions where a CMS isn't the right fit.",
      },
    ],
  },
  {
    slug: "website-development/ecommerce-website",
    eyebrow: "Website Development",
    title: "E-commerce Website Development",
    lead: "Online platforms that let you sell products or services directly to customers over the internet.",
    intro:
      "From custom-built online stores to seamless payment integration, we provide complete ecommerce solutions to help businesses thrive in the digital marketplace.",
    offeringsTitle: "Core services",
    offerings: [
      { title: "Custom E-commerce Design" },
      { title: "Platform Selection & Implementation" },
      { title: "Product Catalog Management" },
      { title: "Shopping Cart Development" },
      { title: "Secure Payment Gateway Integration" },
      { title: "Shipping & Tax Configuration" },
      { title: "Search Functionality & Filtering" },
      { title: "Order Management System" },
    ],
    audienceTitle: "Who it's for",
    audience: [
      "Startups & entrepreneurs — scalable, user-friendly, cost-effective stores",
      "Small and medium businesses — customised platforms",
      "Established retailers — upgrading digital presence",
      "B2B companies — custom pricing and bulk features",
      "Marketplace operators — multi-vendor solutions",
      "Niche product sellers — tailored designs",
    ],
    highlightsTitle: "Platforms & payments",
    highlights: [
      "Shopify, WooCommerce (WordPress), Magento, or fully custom builds",
      "Razorpay, PayU, CCAvenue payment gateways",
      "International options: Stripe and PayPal",
    ],
  },

  // ───────────────────────────── Digital Marketing ─────────────────────────────
  {
    slug: "digital-marketing",
    eyebrow: "Digital Marketing Services",
    title: "Digital Marketing Services",
    lead: "Data-driven strategies that increase brand visibility, drive traffic, and improve conversions across every channel.",
    intro:
      "We create data-driven digital marketing strategies that increase brand visibility, drive traffic and improve conversions across multiple online channels — SEO, social media, PPC, email, content and CRO working as one system.",
    offeringsTitle: "What we do",
    offerings: [
      { title: "Search Engine Optimization (SEO)", copy: "Boost your visibility on Google and drive high-quality organic traffic." },
      { title: "Social Media Marketing (SMM)", copy: "Grow your brand presence and connect with your audience on social platforms." },
      { title: "Pay-Per-Click (PPC) Advertising", copy: "Immediate visibility and leads through targeted paid ad campaigns." },
      { title: "Content Marketing", copy: "Meaningful, high-quality content that builds trust." },
      { title: "Email Marketing", copy: "Powerful for nurturing leads and driving repeat sales." },
      { title: "Conversion Rate Optimization (CRO)", copy: "Convert more visitors into customers." },
    ],
    highlightsTitle: "Also handled for you",
    highlights: [
      "Google Business Profile management",
      "Social media scheduling",
      "On-page and off-page SEO optimisation",
      "Keyword research",
      "Targeted ad campaigns across Google and Meta",
    ],
  },
  {
    slug: "digital-marketing/seo-aeo-geo",
    eyebrow: "Digital Marketing Services",
    title: "SEO, AEO & GEO",
    lead: "Rank in classic search, get quoted by answer engines, and show up in generative results — one technical and content programme.",
    intro:
      "Appearing on the first page of Google is no longer optional. Our SEO programme combines content, optimisation, backlinks and user experience so your website reaches the right audience, drives organic traffic and builds long-term visibility.",
    offeringsTitle: "What the programme covers",
    offerings: [
      { title: "Keyword Research", copy: "Target long-tail terms and map intent against your services and your competitors." },
      { title: "On-Page SEO", copy: "Titles, headings, meta, alt text, clean URLs and correct heading hierarchy." },
      { title: "High-Quality Content", copy: "In-depth blogs, guides and FAQs, kept current, with internal and external links." },
      { title: "Technical SEO", copy: "Mobile-friendly, HTTPS, page speed, fixed broken links, XML sitemap, structured data." },
      { title: "Quality Backlinks", copy: "Guest posts on authority sites, share-worthy assets, directory listings, collaborations." },
      { title: "Local SEO", copy: "Google Business Profile, local keywords, real customer reviews, consistent NAP." },
      { title: "Social Amplification", copy: "Distribute content across social platforms to grow visibility and traffic." },
      { title: "Track, Analyze, Improve", copy: "Google Analytics and Search Console monitoring, with old content refreshed." },
    ],
    highlightsTitle: "Good to know",
    highlights: [
      "SEO typically takes 3–6 months to compound",
      "It's an ongoing process, not a one-time task",
      "Reporting ties every action back to rankings, traffic and conversions",
    ],
  },
  {
    slug: "digital-marketing/social-media-marketing",
    eyebrow: "Digital Marketing Services",
    title: "Social Media Marketing",
    lead: "Smart social media. Real business impact.",
    intro:
      "Engage, grow and convert your audience through targeted social media campaigns, content-driven strategies and day-to-day account management.",
    offeringsTitle: "What's included",
    offerings: [
      { title: "Content Creation", copy: "Eye-catching posts, reels, stories and videos tailored to your brand's voice and audience." },
      { title: "Social Media Strategy", copy: "Data-driven strategies to grow your presence, boost engagement and meet your goals." },
      { title: "Account Management", copy: "Scheduling, posting and monitoring — the day-to-day management of all your platforms." },
      { title: "Engagement & Community Building", copy: "Active replies to comments, DMs and stories to build trust and loyalty." },
      { title: "Performance Tracking & Reporting", copy: "Clear monthly reports showing growth, engagement, reach and ROI." },
      { title: "Conversion Rate Optimization (CRO)", copy: "Make your website work harder by converting more visitors into customers." },
    ],
    highlightsTitle: "Platforms we manage",
    highlights: ["Instagram", "Facebook", "LinkedIn", "Twitter (X)", "YouTube", "Pinterest"],
  },
  {
    slug: "digital-marketing/paid-advertising",
    eyebrow: "Digital Marketing Services",
    title: "Paid Advertising",
    lead: "Maximize reach. Minimize wasted spend. Get real results.",
    intro:
      "Paid advertising campaigns across Google, Meta, LinkedIn and YouTube — designed to convert audiences into customers and mapped to measurable return.",
    offeringsTitle: "Platforms we run",
    offerings: [
      { title: "Google Search Ads", copy: "Capture high-intent leads at the top of search results." },
      { title: "Google Display Ads", copy: "Visually engaging ads across millions of websites, apps and videos." },
      { title: "Facebook & Instagram Ads", copy: "Precision targeting with custom creatives on Meta platforms." },
      { title: "YouTube Video Ads", copy: "Video for brand visibility and storytelling." },
      { title: "LinkedIn Ads", copy: "B2B campaigns targeting professionals by job title and industry." },
      { title: "Retargeting & Remarketing", copy: "Re-engage past visitors and convert warm leads." },
    ],
    highlightsTitle: "What's included",
    highlights: [
      "Campaign strategy",
      "Ad creation",
      "Keyword targeting",
      "A/B testing",
      "Daily monitoring",
      "Budget optimisation",
      "Performance reporting",
    ],
    processTitle: "How we work",
    process: [
      { title: "Data-Driven Strategy" },
      { title: "Full-Funnel Expertise" },
      { title: "Transparent Reporting" },
      { title: "Continuous Optimization" },
      { title: "Collaborative Approach" },
    ],
  },

  // ───────────────────────────── Video Production ─────────────────────────────
  {
    slug: "video-production",
    eyebrow: "Video Production",
    title: "Video Production",
    lead: "Bring your brand to life with engaging visual storytelling. Create. Captivate. Convert.",
    intro:
      "From concept to shoot to professional editing, we craft videos that engage, inspire and convert — corporate films, promotional reels and social content with cinematic quality.",
    offeringsTitle: "Videos we produce",
    offerings: [
      { title: "Corporate Videos" },
      { title: "Product Videos" },
      { title: "Social Media Videos" },
      { title: "Explainer Videos" },
      { title: "Training & E-learning Videos" },
      { title: "Event Coverage & Promos" },
    ],
    processTitle: "Our production process",
    process: [
      { title: "Discovery & Planning" },
      { title: "Script & Storyboard" },
      { title: "Production" },
      { title: "Post-Production" },
      { title: "Delivery & Launch" },
    ],
    highlightsTitle: "Why choose us",
    highlights: [
      "End-to-end production expertise",
      "Creative storytelling",
      "High-quality visuals",
      "On-time delivery",
      "Client-centric approach",
    ],
  },
  {
    slug: "video-production/video-script-writing",
    eyebrow: "Video Production",
    title: "Video Script Writing & Pre-Production",
    lead: "Shape your idea into a strong concept before a single frame is shot.",
    intro:
      "A well-structured pre-production plan ensures smooth execution — saving time, money and effort, and keeping a unified visual and narrative style across the finished video.",
    offeringsTitle: "Pre-production services",
    offerings: [
      { title: "Concept Development", copy: "We shape your ideas into strong concepts with scripts and storyboards." },
      { title: "Casting", copy: "We find the perfect talent to match your project's vision and style." },
      { title: "Location Scouting", copy: "From city streets to scenic spots, we secure ideal shoot locations and permits." },
    ],
    highlightsTitle: "Why pre-production matters",
    highlights: [
      "Streamlined workflow — smooth execution, less waste",
      "Creative consistency — one visual and narrative style",
      "Multi-platform readiness — formats for web, mobile, social and broadcast",
    ],
    processTitle: "Timeline",
    process: [{ title: "Pre-production", copy: "Typically 1–2 weeks, depending on project complexity." }],
  },
  {
    slug: "video-production/video-shooting",
    eyebrow: "Video Production",
    title: "Video Shooting",
    lead: "Planned shoots with the right kit for the format — clean footage and usable coverage.",
    intro:
      "We handle the production stage of your video — from shoot planning and filming through to on-set direction — so the edit has everything it needs to perform.",
    offeringsTitle: "On the shoot",
    offerings: [
      { title: "Shoot Planning", copy: "Shot lists, schedules and logistics agreed before the day." },
      { title: "Filming", copy: "Professional cameras, lighting and audio for corporate, product and social content." },
      { title: "Direction", copy: "On-set guidance to get natural performances and the coverage the story needs." },
      { title: "Event Coverage", copy: "Multi-angle capture of launches, conferences and brand events." },
    ],
    highlightsTitle: "Why choose us",
    highlights: [
      "End-to-end production expertise",
      "High-quality visuals",
      "On-time delivery",
      "Client-centric approach",
    ],
    faqs: [
      {
        q: "Do you provide both shooting and editing services?",
        a: "Yes — we handle the entire production process, from video shoot planning and filming to professional editing, colour grading and post-production.",
      },
      {
        q: "Do I need to provide a script?",
        a: "A script is helpful but optional. Our team can assist with script development or provide suggestions.",
      },
    ],
  },
  {
    slug: "video-production/video-editing",
    eyebrow: "Video Production",
    title: "Video Editing",
    lead: "Transform your raw footage into powerful visual stories.",
    intro:
      "High-quality video content creation and post-production — cutting, colour, sound and motion graphics that make footage actually perform. All final videos are delivered 100% watermark-free.",
    offeringsTitle: "Editing services",
    offerings: [
      { title: "Basic Editing", copy: "Trimming, cutting, merging clips, transitions and background music for a clean, professional look." },
      { title: "Motion Graphics & Animation", copy: "Animated text, logos and visuals that make videos more engaging." },
      { title: "Audio Enhancement", copy: "Noise reduction, audio syncing, music and effects." },
      { title: "Color Grading", copy: "Enhanced colours for a cinematic or professional finish." },
      { title: "Social Media Video Formatting", copy: "Edits for Instagram, TikTok and YouTube with subtitles and trendy cuts." },
      { title: "Storytelling & Advanced Editing", copy: "Compelling narrative using voiceovers, B-roll, transitions and pacing." },
    ],
    highlightsTitle: "Commercial formats we edit",
    highlights: [
      "Product & service videos",
      "Brand promotions",
      "Corporate presentations",
      "Social media ads",
      "Event highlights",
      "Client testimonials",
      "Real estate videos",
      "YouTube ads & commercials",
    ],
    processTitle: "Tools we use",
    process: [
      { title: "Adobe Premiere Pro" },
      { title: "Final Cut Pro" },
      { title: "DaVinci Resolve" },
      { title: "iMovie" },
      { title: "CapCut" },
    ],
    faqs: [
      {
        q: "How long will it take to edit my video?",
        a: "From 1–2 days for basic edits to 5–7 days or longer for complex projects with animations and visual effects.",
      },
      {
        q: "Can you work with footage from any camera or format?",
        a: "Yes — DSLRs, GoPros, smartphones and professional video cameras. We accept MP4, MOV, AVI and more.",
      },
      {
        q: "Will there be a watermark on the final video?",
        a: "No. All final edited videos are 100% watermark-free and branded to your guidelines.",
      },
      {
        q: "Can I request revisions?",
        a: "Yes — we offer free revisions, typically 2–3 rounds depending on the package.",
      },
    ],
  },
];

export const servicePageMap = new Map(servicePages.map((p) => [p.slug, p]));
