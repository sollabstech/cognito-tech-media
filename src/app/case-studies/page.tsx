import { pageMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/case-studies";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import { CtaBand } from "@/components/sections/cta-band";

// -> "Case Studies | Cognito Tech Media" via the title template
export const metadata = pageMetadata({
  title: "Case Studies",
  description:
    "Client journeys in detail — where they started, what we did, the services involved and the growth we achieved.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section">
        <div className="shell">
          <Reveal className="mb-10 flex flex-col gap-3">
            <span className="eyebrow">
              <span className="h-1 w-1 rounded-full bg-accent-500" />
              Case Studies
            </span>
            <h1 className="text-heading-1 sm:text-display-2">Client journeys, start to finish</h1>
          </Reveal>

          <Stagger className="grid gap-6 lg:grid-cols-2" gap={0.1}>
            {caseStudies.map((cs) => (
              <StaggerItem key={cs.id} y={22} className="h-full">
                <CaseStudyCard cs={cs} />
              </StaggerItem>
            ))}
          </Stagger>

          <p className="mt-8 text-xs text-white/35">
            Case studies shown are placeholder examples while real client data is added — this
            section will be managed from the admin panel.
          </p>
        </div>
      </section>

      <CtaBand
        title="Want a story like these?"
        copy="Tell us where you're starting from and what success looks like. We'll map the path."
        primaryLabel="Start Your Project"
      />
    </>
  );
}
