import { cn } from "@/lib/cn";

/** The Google "G" — used as a source indicator on review cards. */
export function GoogleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cn("h-4 w-4", className)} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.06 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h6.2a5.3 5.3 0 0 1-2.3 3.48v2.9h3.72c2.18-2 3.44-4.96 3.44-8.64Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.1 0 5.7-1.03 7.62-2.78l-3.72-2.9c-1.03.69-2.36 1.1-3.9 1.1-3 0-5.53-2.02-6.44-4.74H1.72v2.98A11.5 11.5 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.56 14.68a6.9 6.9 0 0 1 0-4.36V7.34H1.72a11.5 11.5 0 0 0 0 10.32l3.84-2.98Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.62c1.69 0 3.2.58 4.4 1.72l3.3-3.3C17.7 1.15 15.1 0 12 0A11.5 11.5 0 0 0 1.72 7.34l3.84 2.98C6.47 6.64 9 4.62 12 4.62Z"
      />
    </svg>
  );
}
