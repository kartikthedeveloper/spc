import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Best College & Computer Institute in Sikar, Rajasthan",
  description:
    "Success Point College, Sikar offers BCA, MCA, PGDCA, and job-ready computer, digital marketing, and data analytics courses with dedicated placement support.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <FeaturedCourses />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}
