import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { stats, industries } from "@/lib/company";
import { PageHero } from "@/components/site/page-hero";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CheckList } from "@/components/sections/check-list";
import { PillList } from "@/components/sections/pill-list";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Cognito Tech Media is a results-driven digital marketing, web development and video production agency in Madurai, helping businesses build a powerful online presence.",
  path: "/about",
});

const whyUs = [
  "Proven results — from increasing website traffic to improving search rankings and driving conversions.",
  "Customized solutions — strategies tailored to your goals for maximum impact and growth.",
  "Dedicated support — expert guidance at every step so campaigns run smoothly and effectively.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="We transform brands through innovative digital solutions"
        lead="Cognito Tech Media is a results-driven agency dedicated to helping businesses thrive in the digital world. With expertise in digital marketing, video editing, social media marketing, eCommerce solutions and web design & development, we help businesses establish a powerful online presence."
      >
        <Button href="/contact" withArrow>
          Let&apos;s Grow Together
        </Button>
      </PageHero>

      {/* stats */}
      <section className="section">
        <div className="shell">
          <Stagger className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="card-surface rounded-3xl p-6 text-center">
                  <div className="font-display text-3xl font-bold text-white sm:text-4xl">
                    {s.value}
                  </div>
                  <div className="mt-1.5 text-xs leading-snug text-white/50">{s.label}</div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* vision + mission */}
      <section className="section section-muted">
        <div className="shell grid gap-6 lg:grid-cols-2 lg:gap-8">
          {[
            {
              k: "Vision",
              t: "To be a leading digital marketing agency that empowers businesses with innovative, data-driven strategies, helping them build strong brand identities and achieve sustainable growth in the digital landscape.",
            },
            {
              k: "Mission",
              t: "To deliver tailored marketing solutions that drive measurable success — combining creativity, technology and strategic insights to help businesses maximize their online potential and stay ahead of the competition.",
            },
          ].map((b) => (
            <Reveal key={b.k}>
              <div className="card-surface h-full rounded-4xl p-7 sm:p-9">
                <span className="eyebrow">
                  <span className="h-1 w-1 rounded-full bg-accent-500" />
                  {b.k}
                </span>
                <p className="mt-4 text-body-lg text-white/70">{b.t}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CheckList eyebrow="Why choose us" heading="Built to be easy to work with" items={whyUs} columns={1} />

      <PillList
        eyebrow="Industries we serve"
        heading="Experience across sectors"
        items={industries}
        muted
      />

      <CtaBand
        title="Let's grow together"
        copy={`Get in touch today and take your business to new heights. Call ${site.phoneDisplay} or send us a message.`}
        primaryLabel="Get in Touch"
      />
    </>
  );
}
