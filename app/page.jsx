import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import { BLOG_POSTS } from "@/data/blog";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";

export const metadata = {
  title: "Best Coding & Digital Marketing Institute in Sikar, Rajasthan",
  description:
    "BCA, MCA, Digital marketing, Full Stack Web and data analytics courses with dedicated placement support.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <FeaturedCourses />
      <WhyChooseUs />
      <section className="bg-ivory-100 pt-32 pb-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
         
              <div className="mt-5">
                <SectionHeading
                  eyebrow="Blog"
                  title="Article on Career guidance and course insights"
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
       
      <CTASection />
    </>
  );
}
