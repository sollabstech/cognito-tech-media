import type { PortfolioClient } from "@/lib/portfolio";

function initials(name: string) {
  const parts = name
    .replace(/[^\p{L}\s]/gu, "")
    .split(/\s+/)
    .filter(Boolean);
  const a = parts[0]?.[0] ?? "";
  const b = parts[1]?.[0] ?? parts[0]?.[1] ?? "";
  return (a + b).toUpperCase();
}

/**
 * A client's brand mark. Shows the real logo when `client.logo` is set
 * (a file in /public/portfolio/), otherwise a coloured monogram.
 */
export function BrandMark({
  client,
  className = "h-12 w-12",
}: {
  client: Pick<PortfolioClient, "name" | "logo" | "brandColor">;
  className?: string;
}) {
  return (
    <span
      className={`grid shrink-0 place-items-center overflow-hidden rounded-full ring-2 ring-white/15 ${className}`}
    >
      {client.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="h-full w-full bg-white object-contain p-1"
        />
      ) : (
        <span
          className="grid h-full w-full place-items-center font-display text-sm font-bold text-white"
          style={{
            background: `radial-gradient(120% 120% at 30% 20%, ${client.brandColor}, ${client.brandColor}cc 55%, #05070e)`,
          }}
        >
          {initials(client.name)}
        </span>
      )}
    </span>
  );
}
