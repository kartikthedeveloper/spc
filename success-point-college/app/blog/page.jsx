import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Blog — Career Guidance, Course Insights & Study Tips",
  description:
    "Guides on choosing courses, career paths, and skills for students in Sikar and Rajasthan, from Success Point College.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog | ${SITE.name}`,
    description: "Career guidance and course insights for students in Sikar.",
    url: `${SITE.url}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <section className="bg-ivory-100 pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-widest text-brass-600">
          <Link href="/" className="hover:text-navy-950">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-500">Blog</span>
        </nav>

        <div className="mt-5">
          <SectionHeading
            eyebrow="Blog"
            title="Career guidance and course insights"
            description="Practical, specific articles for students in Sikar deciding on a course or career path — no filler."
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
