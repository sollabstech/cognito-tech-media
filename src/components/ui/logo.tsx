import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

/** The Cognito mark: an electric-blue ring broken at the lower-left by an orange play triangle. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={cn("h-9 w-9", className)}
      role="img"
      aria-label={`${site.name} logo`}
    >
      <defs>
        <linearGradient id="ctm-ring" x1="6" y1="6" x2="42" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7b86ff" />
          <stop offset="0.55" stopColor="#4f5bff" />
          <stop offset="1" stopColor="#1f2bc9" />
        </linearGradient>
        <linearGradient id="ctm-tri" x1="10" y1="27" x2="22" y2="41" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ff8a3d" />
          <stop offset="1" stopColor="#f04e06" />
        </linearGradient>
      </defs>
      <path
        d="M6.83 29.4 A 18 18 0 1 1 18.58 41.17"
        fill="none"
        stroke="url(#ctm-ring)"
        strokeWidth="7.5"
        strokeLinecap="round"
      />
      <path d="M19.6 27.3 L9.7 31.8 L15.1 41.2 Z" fill="url(#ctm-tri)" />
    </svg>
  );
}

export function Logo({
  className,
  wordmark = true,
}: {
  className?: string;
  wordmark?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-xl py-1 transition-transform duration-300 ease-out-expo hover:scale-[1.02]",
        className,
      )}
    >
      <LogoMark className="h-9 w-9 shrink-0 drop-shadow-[0_6px_16px_rgba(79,91,255,0.45)] transition-transform duration-500 ease-out-expo group-hover:rotate-[8deg]" />
      {wordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.15rem] font-bold tracking-tight text-white">
            cognito
          </span>
          <span className="mt-0.5 text-[0.5rem] font-semibold uppercase tracking-[0.34em] text-brand-300">
            Tech Media
          </span>
        </span>
      )}
    </Link>
  );
}
