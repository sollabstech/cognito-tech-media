/**
 * Company content carried over from the live site (cognitotechmedia.com).
 * These are Cognito Tech Media's own published figures, testimonials and lists —
 * not invented here. Update in one place if the business changes them.
 */

export const stats = [
  { value: "200+", label: "Happy clients" },
  { value: "500+", label: "Successful projects" },
  { value: "10+", label: "Years of experience" },
  { value: "95%", label: "ROI-driven results" },
] as const;

export const industries = [
  "E-commerce",
  "Healthcare",
  "Education",
  "Real Estate",
  "Hospitality",
  "Tourism",
  "Retail",
  "Automotive",
  "Entertainment",
  "Food",
  "Fashion",
  "Software",
] as const;

/** Marketing workflow — the four stages from the live site. */
export const workflow = [
  {
    n: "01",
    title: "Discovery & Strategy",
    copy: "Understanding client goals, target audience, and market positioning.",
  },
  {
    n: "02",
    title: "Proposal & Planning",
    copy: "Defining campaign objectives, deliverables, and execution roadmap.",
  },
  {
    n: "03",
    title: "Implementation & Optimization",
    copy: "Launching campaigns, tracking performance, and refining strategies.",
  },
  {
    n: "04",
    title: "Reporting & Growth",
    copy: "Analyzing results, providing insights, and scaling for long-term success.",
  },
] as const;

/** Testimonials published on the live site. */
export const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Marketing Manager",
    quote:
      "Cognito Tech Media transformed our online presence with a sleek, high-performing website. Their team was responsive, professional, and delivered exactly what we envisioned—if not better!",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Manager",
    quote:
      "We were struggling with unauthorized sharing of our content until Cognito Tech Media stepped in. Their video protection solution gave us peace of mind and protected our brand's value.",
  },
  {
    name: "Anita Reddy",
    role: "Founder & CEO",
    quote:
      "Their digital marketing strategy helped us scale quickly. From social media ads to SEO, everything was on point. We saw a 40% increase in leads within the first three months!",
  },
] as const;

/** Brands listed on the live site's "Brands That Trust Us" section. */
export const clients = [
  "SEV Building Products",
  "RevUp",
  "Nice Brindha",
  "Meraj Travels",
  "MF Mart",
  "Linga Sweets",
  "Indian Traditional Spices",
  "Apple Super Market",
  "Vasantham Hypermart",
] as const;

export const faqs = [
  {
    q: "What services does Cognito Tech Media offer?",
    a: "We provide digital marketing solutions, including SEO, social media marketing, video shoot, paid advertising, content marketing, and branding strategies to help businesses grow online.",
  },
  {
    q: "What types of videos do you create?",
    a: "We produce a wide range of videos including corporate films, product videos, promotional ads, social media reels, event highlights, and testimonial videos — all tailored to your brand's goals.",
  },
  {
    q: "Do you provide both shooting and editing services?",
    a: "Yes! We handle the entire production process — from video shoot planning and filming to professional editing, color grading, and post-production.",
  },
  {
    q: "How do you create a marketing strategy for my business?",
    a: "Our team analyzes your industry, competitors, and target audience to craft a customized strategy that aligns with your business goals and ensures maximum ROI.",
  },
  {
    q: "How long does it take to see results?",
    a: "Results vary depending on the service. SEO typically takes 3–6 months, while paid ads and social media campaigns can generate faster engagement and conversions.",
  },
  {
    q: "Do you offer customized marketing plans?",
    a: "Yes, we tailor marketing plans based on your business size, goals, and budget to ensure effective and scalable growth.",
  },
  {
    q: "What industries do you work with?",
    a: "We serve a wide range of industries, including e-commerce, real estate, healthcare, technology, education, and more.",
  },
  {
    q: "How can I track the performance of my campaigns?",
    a: "We provide detailed reports with key performance metrics, insights, and recommendations to help you understand your campaign's effectiveness.",
  },
  {
    q: "How do I get started with Cognito Tech Media?",
    a: "Simply contact us for a free consultation, and we'll guide you through the onboarding process to kickstart your marketing success.",
  },
] as const;
