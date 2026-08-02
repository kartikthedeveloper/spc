import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import { BLOG_POSTS } from "@/data/blog";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import Campusvideo from "@/components/Campusvideo";
import Image from "next/image";

export const metadata = {
  title: "Best Coding & Digital Marketing Institute in Sikar, Rajasthan",
  description:
    "BCA, MCA, Digital marketing, Full Stack Web and data analytics courses with dedicated placement support.",
  alternates: { canonical: "/" },
};

const gallery = [
  "/images/first.webp",
  "/images/second.webp",
  "/images/third.webp",
  "/images/fourth.webp",
  "/images/fifth.webp",
  "/images/sixth.webp",
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <Campusvideo/>
      <FeaturedCourses />
      <WhyChooseUs />

      <div className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Campus Gallery
            </h2>

            <p className="mt-4 text-gray-600">
              A glimpse of our learning environment.
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-2">

            {gallery.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src={img}
                  alt={`Success Point Institute Infrastructure ${index + 1}`}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}

          </div>

        </div>

      </div>
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
