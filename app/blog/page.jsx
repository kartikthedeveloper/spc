import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";
import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/SectionHeading";

import { SITE } from "@/data/site";

export const metadata = {
  title:
    "Success Point Sikar Blog | Career Guidance, Course Insights & Study Tips",

  description:
    "Latest tech career guidance, college updates, admission tips, placement advice, digital marketing, BCA, BBA, MCA, MSc, MBA, skill development and education blogs for students in Sikar, Rajasthan by Success Point Sikar.",

  keywords: [
    "Success Point Sikar Blog",
    "Sikar Education Blog",
    "Career Guidance Sikar",
    "Best College in Sikar",
    "BCA College Sikar",
    "MBA College Sikar",
    "MCA College Sikar",
    "Digital Marketing Course Sikar",
    "Skill Development Sikar",
    "Study Tips",
    "Placement Tips",
    "Career Advice Rajasthan",
    "College Admission Sikar",
    "Student Blog",
    "Higher Education Rajasthan"
  ],

  authors: [
    {
      name: "Success Point Sikar",
      url: SITE.url,
    },
  ],

  creator: "Success Point Sikar",

  publisher: "Success Point Sikar",

  category: "Education",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: `${SITE.url}/blog`,
  },

  openGraph: {
    type: "website",

    locale: "en_IN",

    url: `${SITE.url}/blog`,

    siteName: SITE.name,

    title:
      "Success Point Sikar Blog | Career Guidance, Course Insights & Student Resources",

    description:
      "Explore expert career guidance, admission updates, placement tips, college information, digital marketing, BCA, MBA, MCA and educational resources for students in Sikar and Rajasthan.",

    images: [
      {
        url: `${SITE.url}/images/best-computer-course-in-sikar.webp`,
        width: 1200,
        height: 630,
        alt: "Success Point Sikar Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Success Point Sikar Blog | Career Guidance & Study Resources",

    description:
      "Career guidance, admission updates, placement tips and educational resources for students in Sikar.",

    images: [`${SITE.url}/images/best-computer-course-in-sikar.webp`],
  },
};

export default function BlogIndexPage() {
  return (
    <section className="bg-ivory-100 pt-32 pb-20">
      <div className="max-w-6xl mx-auto mt-10 text-gray-700 leading-8">

        <p>

          Welcome to the official Success Point Sikar Blog, where students, parents and professionals can explore career guidance, admission updates, placement preparation, higher education insights and industry-focused learning resources.

        </p>

        <p className="mt-5">

          Our articles cover Digital Marketing, BCA, BBA, MCA, MBA, MSc, Artificial Intelligence, Cyber Security, Full Stack Development, Graphic Design, Data Analytics and many other career-oriented courses offered in Sikar.

        </p>

        <p className="mt-5">

          Whether you're planning your graduation, preparing for placements, choosing the right college, or looking to upgrade your skills, our blog provides practical and up-to-date information to help you make informed decisions.

        </p>

      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
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