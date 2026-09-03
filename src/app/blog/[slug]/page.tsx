import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, postMap } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/sections/cta-band";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postMap.get(slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}` });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = postMap.get(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3);

  return (
    <>
      <article className="section">
        <div className="shell">
          <Reveal className="mx-auto max-w-prose">
            <Link href="/blog" className="text-sm text-brand-300 hover:text-brand-200">
              ← All articles
            </Link>
            <div className="mt-5 flex items-center gap-2 text-xs text-white/45">
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 font-semibold text-white/70">
                {post.category}
              </span>
              <time dateTime={post.date}>{post.dateLabel}</time>
              <span>·</span>
              <span>Cognito Tech Media</span>
            </div>
            <h1 className="mt-4 text-display-2 font-bold text-white">{post.title}</h1>
            <p className="mt-4 text-body-lg text-white/60">{post.excerpt}</p>
          </Reveal>

          <div className="mx-auto mt-10 max-w-prose">
            {post.body ? (
              <div className="space-y-5">
                {post.body.map((block, i) => {
                  if (block.type === "h2")
                    return (
                      <h2 key={i} className="pt-4 text-heading-3 font-semibold text-white">
                        {block.text}
                      </h2>
                    );
                  if (block.type === "ul")
                    return (
                      <ul key={i} className="space-y-2 pl-1">
                        {block.items.map((it) => (
                          <li key={it} className="flex gap-3 text-sm leading-relaxed text-white/70">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    );
                  return (
                    <p key={i} className="text-[15px] leading-relaxed text-white/70">
                      {block.text}
                    </p>
                  );
                })}
              </div>
            ) : (
              <div className="card-surface rounded-3xl p-8 text-center">
                <p className="text-sm leading-relaxed text-white/60">
                  This article is being migrated to the new site. You can read the full
                  version now on our current blog.
                </p>
                <Button
                  href={post.liveUrl}
                  variant="secondary"
                  className="mt-5"
                  withArrow
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the full article
                </Button>
              </div>
            )}
          </div>

          {related.length > 0 && (
            <div className="mx-auto mt-16 max-w-prose border-t border-white/10 pt-8">
              <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-brand-300">
                More in {post.category}
              </h2>
              <ul className="mt-4 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-white/[0.02] p-4 transition-colors hover:border-brand-500/40"
                    >
                      <span className="text-sm font-medium text-white/80 group-hover:text-white">
                        {r.title}
                      </span>
                      <span className="shrink-0 text-xs text-white/40">{r.dateLabel}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </article>

      <CtaBand primaryLabel="Start Your Project" />
    </>
  );
}
