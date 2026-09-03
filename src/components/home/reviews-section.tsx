import { getGoogleReviews } from "@/lib/reviews";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { ReviewsCarousel } from "@/components/home/reviews-carousel";
import { GoogleGlyph } from "@/components/home/google-glyph";

/**
 * Server component. Fetches real Google Business Profile reviews (cached in
 * src/lib/reviews.ts) and renders them. If nothing is configured / returned,
 * shows a neutral placeholder — never a hard-coded rating or count.
 */
export async function ReviewsSection() {
  const data = await getGoogleReviews();
  const hasReviews = data.ok && data.reviews.length > 0;

  return (
    <section className="section">
      <div className="shell">
        <SectionHeading
          eyebrow="Social proof"
          title="What Our Clients Say"
          description="See what clients have shared about their experience with Cognito Tech Media."
        />

        {/* rating summary — only when Google actually returned one */}
        {hasReviews && (data.rating !== null || data.total !== null) && (
          <Reveal className="mt-6 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm">
              <GoogleGlyph className="h-4 w-4" />
              {data.rating !== null && (
                <span className="font-semibold text-white">
                  {data.rating.toFixed(1)}
                  <span className="ml-1 text-amber-400" aria-hidden>
                    ★
                  </span>
                </span>
              )}
              {data.total !== null && (
                <span className="text-white/55">
                  {data.total} Google review{data.total === 1 ? "" : "s"}
                </span>
              )}
            </div>
          </Reveal>
        )}

        {hasReviews ? (
          <div className="mt-10">
            <ReviewsCarousel reviews={data.reviews} />
          </div>
        ) : (
          <Reveal className="mx-auto mt-10 max-w-xl">
            <div className="card-surface rounded-3xl p-8 text-center">
              <GoogleGlyph className="mx-auto h-6 w-6" />
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                Verified reviews from our Google Business Profile will appear here.
                In the meantime, you can read them directly on Google.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal className="mt-10 flex justify-center">
          <Button
            href={data.profileUrl}
            variant="secondary"
            withArrow
            target="_blank"
            rel="noopener noreferrer"
          >
            View More Reviews on Google
          </Button>
        </Reveal>

        <p className="mt-4 text-center text-xs text-white/35">
          Reviews are pulled from Google and shown unedited.
        </p>
      </div>
    </section>
  );
}
