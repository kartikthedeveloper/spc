import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { BLOG_POSTS, getPostBySlug, getRelatedPosts } from "@/data/blog";
import { getCourseBySlug } from "@/data/courses";
import { SITE } from "@/data/site";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import CourseCard from "@/components/CourseCard";
import Image from "next/image";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE.url}/blog/${post.slug}`,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const relatedCourses = (post.relatedCourseSlugs || [])
    .map((slug) => getCourseBySlug(slug))
    .filter(Boolean);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "Organization", name: SITE.name },
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };

  const faqSchema = post.faqs?.length
    ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE.url}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {/* <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /> */}

      {/* Hero */}
      <section className="relative overflow-hidden bg-indigo-700 pt-32 pb-16">
        <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-widest text-brass-300/80">
            <Link href="/" className=" text-white hover:text-brass-300">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="text-white hover:text-brass-300">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{post.category}</span>
          </nav>

          <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-ivory-50 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-ivory-100/70">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-ivory-100/60">
            <span className="flex items-center gap-2">
              <Calendar size={16} className="text-white" />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-brass-300" />
              {post.readingTime}
            </span>
            <span>By {post.author}</span>
          </div>

        </div>
      </section>
      <div className="my-10 flex justify-center">
        <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-gray-200">
          <Image
            src={post.image}
            alt={post.title}
            width={700}
            height={500}
            className="h-auto w-full max-w-4xl rounded-xl object-cover"
            priority
          />
        </div>
      </div>     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 py-16 lg:grid-cols-4">
          {/* Table of contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 rounded-xl2 border border-brass-500/20 bg-ivory-50 p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-black">On this page</p>
              <ul className="mt-3 space-y-2">
                {post.tableOfContents.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="text-sm text-ink-700 hover:text-brass-600 focus-ring">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Article body */}
          <article className="lg:col-span-3">
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 mb-10">

                <h2 className="font-display text-2xl font-semibold text-navy-950">{section.title}</h2>

                <div className="mt-4 space-y-4 text-base leading-relaxed text-ink-700">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            ))}

            {/* Author box */}
            <div className="mt-10 flex items-center gap-4 rounded-xl2 border border-brass-500/20 bg-ivory-50 p-6">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-navy-950 font-display text-brass-300">
                SP
              </div>
              <div>
                <p className="font-display font-semibold text-navy-950">{post.author}</p>
                <p className="text-sm text-ink-500">
                  Published by {SITE.name}, Sikar — written from direct experience placing students.
                </p>
              </div>
            </div>

            {/* FAQs */}
            {post.faqs?.length > 0 && (
              <div className="mt-12">
                <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
                <div className="mt-6 space-y-4">
                  {post.faqs.map((faq) => (
                    <details key={faq.q} className="group rounded-xl border border-brass-500/20 bg-ivory-50 p-5">
                      <summary className="cursor-pointer font-display text-base font-semibold text-navy-950 focus-ring">
                        {faq.q}
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-ink-700">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Related courses - internal linking for SEO/GEO topic clusters */}
            {relatedCourses.length > 0 && (
              <div className="mt-12">
                <SectionHeading eyebrow="Related Courses" title="Courses mentioned in this article" />
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {relatedCourses.map((course) => (
                    <CourseCard key={course.slug} course={course} />
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>

        {/* Related posts */}
        {related.length > 0 && (
          <div className="border-t border-brass-500/15 py-16">
            <SectionHeading eyebrow="Related Reading" title="More articles" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <BlogCard key={r.slug} post={r} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <section className="bg-ivory-100 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-xl2 bg-indigo-600 px-8 py-12 text-center sm:px-16">
            <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
            <div className="relative">
              <h2 className="font-display text-2xl font-semibold text-ivory-50 sm:text-3xl">
                Have questions about which course fits you?
              </h2>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link
                  href="/admissions/form"
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-6 py-3 font-semibold text-white border-white shadow-glow hover:-translate-y-0.5 transition-transform focus-ring"
                >
                  Apply for Admission <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl glass-panel px-6 py-3 font-semibold text-ivory-50 hover:-translate-y-0.5 transition-transform focus-ring"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}