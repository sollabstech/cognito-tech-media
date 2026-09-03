import Link from "next/link";
import { footerNav, servicesNav, site } from "@/lib/site";
import { Logo } from "@/components/ui/logo";
import { FooterColumn } from "@/components/site/footer-column";

const [websiteGroup, marketingGroup, videoGroup] = servicesNav;

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-soft">
      <div className="hairline h-px w-full opacity-60" />

      <div className="shell py-14 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Brand + description + contact — always visible */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
              {site.name} helps ambitious brands <span className="text-white/80">build</span> fast
              websites, <span className="text-white/80">grow</span> with digital marketing, and{" "}
              <span className="text-white/80">create</span> video that converts.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <a
                href={site.phoneHref}
                className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-white"
              >
                <IconPhone />
                {site.phoneDisplay}
              </a>
              <a
                href={site.emailHref}
                className="flex items-center gap-2.5 text-white/70 transition-colors hover:text-white"
              >
                <IconMail />
                {site.emailDisplay}
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-white/70 transition-colors hover:text-white"
              >
                <IconPin />
                <span>{site.address.full}</span>
              </a>
            </div>

            <div className="mt-6 flex gap-2">
              {site.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/12 text-white/60 transition-colors hover:border-white/30 hover:text-white"
                >
                  <SocialIcon name={s.label} />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups — accordions on mobile, columns on desktop */}
          <div className="grid gap-0 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4 lg:gap-8">
            <FooterColumn title="Quick Links" links={footerNav.quickLinks} />
            <FooterColumn title="Website Development" links={websiteGroup.children} />
            <FooterColumn title="Digital Marketing" links={marketingGroup.children} />
            <FooterColumn title="Video Production" links={videoGroup.children} />
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {footerNav.policies.map((p) => (
              <Link key={p.href} href={p.href} className="transition-colors hover:text-white">
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-brand-300" fill="none">
      <path
        d="M4.5 3h2l1.2 3-1.6 1.2a10 10 0 0 0 4.7 4.7L12 13.3l3 1.2v2a1.5 1.5 0 0 1-1.6 1.5A13.5 13.5 0 0 1 3 6.6 1.5 1.5 0 0 1 4.5 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-brand-300" fill="none">
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="m3 6 7 5 7-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" fill="none">
      <path
        d="M10 17s5.5-4.7 5.5-9A5.5 5.5 0 0 0 4.5 8c0 4.3 5.5 9 5.5 9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function SocialIcon({ name }: { name: string }) {
  const c = "h-4 w-4";
  if (name === "Instagram")
    return (
      <svg viewBox="0 0 24 24" className={c} fill="currentColor" aria-hidden>
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 3.2A6.6 6.6 0 1 0 12 18.6 6.6 6.6 0 0 0 12 5.4Zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6Zm6.8-11.2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    );
  if (name === "Facebook")
    return (
      <svg viewBox="0 0 24 24" className={c} fill="currentColor" aria-hidden>
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3H10v8h3.5Z" />
      </svg>
    );
  if (name === "YouTube")
    return (
      <svg viewBox="0 0 24 24" className={c} fill="currentColor" aria-hidden>
        <path d="M21.6 7.2s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C15.9 4 12 4 12 4s-3.9 0-6.8.3c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2.2 8.8 2.2 10.4v1.2c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.8 2.3.9 1.7.2 6.5.3 6.5.3s3.9 0 6.8-.3c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.2c0-1.6-.2-3.2-.2-3.2ZM9.9 14.6V8.9l5 2.9-5 2.8Z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className={c} fill="currentColor" aria-hidden>
      <path d="M6.9 21H3.4V9h3.5v12ZM5.1 7.4A2 2 0 1 1 5.1 3.4a2 2 0 0 1 0 4ZM21 21h-3.5v-6.2c0-1.6-.6-2.6-2-2.6-1.1 0-1.7.7-2 1.4-.1.3-.1.6-.1 1V21H9.9s.1-10.6 0-12h3.5v1.7c.5-.8 1.3-1.9 3.2-1.9 2.3 0 4.1 1.5 4.1 4.8V21Z" />
    </svg>
  );
}
