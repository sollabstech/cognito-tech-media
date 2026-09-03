import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/site/page-hero";
import { BlogList } from "@/components/blog/blog-list";
import { CtaBand } from "@/components/sections/cta-band";

// -> "Blog | Cognito Tech Media" via the title template
export const metadata = pageMetadata({
  title: "Blog",
  description:
    "Practical insights on website development, digital marketing, search, paid advertising and video production from Cognito Tech Media.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Insights & Ideas"
        lead="Practical guidance on website development, digital marketing, search, paid advertising and video production."
      />
      <section className="section">
        <div className="shell">
          <BlogList />
        </div>
      </section>
      <CtaBand
        title="Have a project in mind?"
        copy="Put our thinking to work on your brand. Tell us what you're trying to build or grow."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
