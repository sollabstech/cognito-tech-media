import "server-only";
import { site } from "@/lib/site";

/**
 * Google Business Profile reviews.
 *
 * Real data only. We call the Google Places API (New) on the server and let
 * Next.js cache the response (`next.revalidate`) so we do NOT hit Google on
 * every page load. If the API key / place ID are missing, or the request
 * fails, we return a neutral "not configured" result and the UI shows a
 * fallback — it never invents a rating, a count, or review text.
 *
 * Setup: copy .env.example -> .env.local and set GOOGLE_PLACES_API_KEY and
 * GOOGLE_PLACES_PLACE_ID. See https://developers.google.com/maps/documentation/places/web-service/place-id
 */

export type GoogleReview = {
  id: string;
  author: string;
  authorPhotoUrl: string | null;
  rating: number; // 1..5
  text: string;
  relativeTime: string | null; // e.g. "2 months ago"
  publishedAtISO: string | null;
  sourceUrl: string;
};

export type ReviewsData = {
  /** Both env vars are present. */
  configured: boolean;
  /** A live request succeeded and returned usable data. */
  ok: boolean;
  /** Aggregate rating — only when Google returned one. Never hard-coded. */
  rating: number | null;
  /** Total rating count — only when Google returned one. Never hard-coded. */
  total: number | null;
  /** Where "View more reviews" should point. */
  profileUrl: string;
  reviews: GoogleReview[];
};

const EMPTY: ReviewsData = {
  configured: false,
  ok: false,
  rating: null,
  total: null,
  profileUrl: site.googleProfileUrl,
  reviews: [],
};

const REVALIDATE = Number(process.env.GOOGLE_REVIEWS_REVALIDATE_SECONDS ?? 21600);

type PlacesAuthor = {
  displayName?: string;
  photoUri?: string;
  uri?: string;
};

type PlacesReview = {
  name?: string;
  rating?: number;
  text?: { text?: string };
  originalText?: { text?: string };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  authorAttribution?: PlacesAuthor;
  googleMapsUri?: string;
};

type PlacesResponse = {
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: PlacesReview[];
};

export async function getGoogleReviews(): Promise<ReviewsData> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;

  if (!key || !placeId) return EMPTY;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`,
      {
        headers: {
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask":
            "rating,userRatingCount,googleMapsUri,reviews.rating,reviews.text,reviews.originalText,reviews.relativePublishTimeDescription,reviews.publishTime,reviews.authorAttribution,reviews.googleMapsUri,reviews.name",
        },
        next: { revalidate: REVALIDATE, tags: ["google-reviews"] },
      },
    );

    if (!res.ok) {
      console.warn(`[reviews] Places API responded ${res.status}`);
      return { ...EMPTY, configured: true };
    }

    const data = (await res.json()) as PlacesResponse;
    const profileUrl = data.googleMapsUri ?? site.googleProfileUrl;

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .map((r, i): GoogleReview | null => {
        const text = r.text?.text ?? r.originalText?.text ?? "";
        const rating = typeof r.rating === "number" ? r.rating : 0;
        if (!text || !rating) return null;
        return {
          id: r.name ?? `review-${i}`,
          author: r.authorAttribution?.displayName ?? "Google user",
          authorPhotoUrl: r.authorAttribution?.photoUri ?? null,
          rating,
          text,
          relativeTime: r.relativePublishTimeDescription ?? null,
          publishedAtISO: r.publishTime ?? null,
          sourceUrl: r.googleMapsUri ?? profileUrl,
        };
      })
      .filter((r): r is GoogleReview => r !== null);

    return {
      configured: true,
      ok: reviews.length > 0,
      rating: typeof data.rating === "number" ? data.rating : null,
      total: typeof data.userRatingCount === "number" ? data.userRatingCount : null,
      profileUrl,
      reviews,
    };
  } catch (err) {
    console.warn("[reviews] Places API request failed:", err);
    return { ...EMPTY, configured: true };
  }
}
