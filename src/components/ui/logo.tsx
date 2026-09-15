import Link from "next/link";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

/** The Cognito brand mark — the real logo from /public/logo.png. */
export function LogoMark({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt={`${site.name} logo`}
      width={500}
      height={500}
      className={cn("h-9 w-9 object-contain", className)}
    />
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
