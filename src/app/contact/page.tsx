import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell Cognito Tech Media about your website, marketing or video project and get a plan, a timeline and a clear next step.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're working on"
        lead="Share a few details and we'll come back with a plan, a timeline and a fixed next step — usually within one business day."
      />

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          {/* direct channels — first on mobile */}
          <Reveal className="order-1 flex flex-col gap-3 lg:order-none">
            <ContactCard
              label="Call"
              value={site.phoneDisplay}
              href={site.phoneHref}
              hint="Mon–Sat, business hours IST"
            />
            <ContactCard
              label="Email"
              value={site.emailDisplay}
              href={site.emailHref}
              hint="We reply within one business day"
            />
            <ContactCard
              label="WhatsApp"
              value="Message us"
              href={site.whatsappHref}
              hint="Quick questions welcome"
              external
            />
            <ContactCard
              label="Google"
              value="Business Profile"
              href={site.googleProfileUrl}
              hint="Reviews & directions"
              external
            />

            <div className="card-surface rounded-2xl p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                Office
              </span>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-sm leading-relaxed text-white/75 hover:text-white"
              >
                {site.address.full}
              </a>
              <span className="mt-2 block text-xs text-white/45">{site.hours}</span>
            </div>

            <div className="flex gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl border border-white/12 bg-white/[0.03] py-3 text-center text-xs font-medium text-white/65 transition-colors hover:border-white/30 hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="order-2 lg:order-none">
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="shell">
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-4xl border border-white/10 bg-ink-raised p-6 sm:min-h-[300px] sm:p-8"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:40px_40px] opacity-50"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_20%,rgba(79,91,255,0.25),transparent_70%)]"
            />
            <div className="relative flex items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                  Find us
                </span>
                <p className="mt-2 max-w-sm font-display text-lg font-semibold text-white">
                  {site.address.full}
                </p>
                <p className="mt-1 text-sm text-white/50">Open in Google Maps for directions</p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/15 text-white/70 transition-transform group-hover:translate-x-1 group-hover:text-white">
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none">
                  <path
                    d="M4 10h11M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  label,
  value,
  href,
  hint,
  external,
}: {
  label: string;
  value: string;
  href: string;
  hint: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="card-surface group flex items-center justify-between rounded-2xl p-5 transition-colors hover:border-brand-500/40"
    >
      <span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
          {label}
        </span>
        <span className="mt-1 block font-display text-lg font-semibold text-white">
          {value}
        </span>
        <span className="mt-0.5 block text-xs text-white/45">{hint}</span>
      </span>
      <svg
        viewBox="0 0 20 20"
        className="h-5 w-5 text-white/25 transition-transform group-hover:translate-x-1 group-hover:text-brand-300"
        fill="none"
      >
        <path
          d="M4 10h11M11 5l5 5-5 5"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}
