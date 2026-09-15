/**
 * Fixed, non-scrolling page backdrop: one static mesh-gradient paint plus two
 * soft aurora blobs, a faint grid and a vignette. Deliberately static — an
 * animated full-viewport blurred layer behind a scrolling page is the single
 * biggest cause of scroll jank.
 */
export function MeshBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />

      <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] rounded-full bg-brand-600/20 blur-[120px]" />
      <div className="absolute right-[-15%] top-[28%] h-[440px] w-[440px] rounded-full bg-accent-500/12 blur-[120px]" />

      <div className="absolute inset-0 bg-grid-faint [background-size:64px_64px] [mask-image:radial-gradient(circle_at_50%_0%,#000,transparent_75%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,transparent_55%,rgba(5,7,14,0.55))]" />
    </div>
  );
}
