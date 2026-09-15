import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "accent" | "ghost";
type Size = "md" | "lg";

const base =
  "group relative inline-flex select-none items-center justify-center gap-2 rounded-full font-display font-semibold tracking-tight transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out-expo focus-visible:outline-none disabled:pointer-events-none disabled:opacity-60 active:translate-y-px";

const sizes: Record<Size, string> = {
  // 48px / 56px tall — comfortable touch targets on mobile
  md: "h-12 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-[0_18px_40px_-16px_rgba(79,91,255,0.7)] hover:shadow-[0_22px_60px_-14px_rgba(79,91,255,0.85)] hover:-translate-y-0.5",
  accent:
    "bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow-[0_18px_40px_-16px_rgba(255,106,26,0.7)] hover:shadow-[0_22px_60px_-14px_rgba(255,106,26,0.85)] hover:-translate-y-0.5",
  secondary:
    "border border-white/15 bg-white/[0.06] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] hover:border-white/30 hover:bg-white/[0.1] hover:-translate-y-0.5",
  ghost: "text-white/80 hover:text-white hover:bg-white/[0.06]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  /** Show a chevron that nudges on hover. */
  withArrow?: boolean;
};

type AsLink = CommonProps & { href: string } & Omit<
    ComponentPropsWithoutRef<typeof Link>,
    "href" | "className" | "children"
  >;
type AsButton = CommonProps & { href?: undefined } & Omit<
    ComponentPropsWithoutRef<"button">,
    "className" | "children"
  >;

export function Button(props: AsLink | AsButton) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    withArrow = false,
    ...rest
  } = props;

  const classes = cn(base, sizes[size], variants[variant], className);

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="h-4 w-4 translate-x-0 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
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
      )}
    </>
  );

  if (typeof props.href === "string") {
    const { href, ...linkRest } = rest as Omit<AsLink, keyof CommonProps>;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {inner}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as Omit<AsButton, keyof CommonProps>)}>
      {inner}
    </button>
  );
}
