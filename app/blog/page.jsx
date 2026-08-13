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
    "Success Point Sikar Career Guidance",
    "Success Point Sikar Course Insights",
    "Success Point Sikar Study Tips",
    // Primary Local Keywords
    "Internship in Sikar",
    "Internship in Rajasthan",
    "Best Internship in Sikar",
    "Best Internship in Rajasthan",
    "Live Project Internship Sikar",
    "Live Project Internship Rajasthan",
    "Industrial Training Sikar",
    "Industrial Training Rajasthan",
    "Industrial Internship Sikar",
    "Summer Internship Sikar",
    "Winter Internship Sikar",
    "Professional Internship Sikar",
    "Job Oriented Internship Sikar",
    "internship ",
    // College Students
    "Internship for BCA Students Sikar",
    "Internship for MCA Students Sikar",
    "BCA Internship Rajasthan",
    "MCA Internship Rajasthan",
    "Internship for Computer Science Students Rajasthan",
    "Internship for IT Students Rajasthan",
    "Computer Science Internship Sikar",
    "IT Internship Sikar",

    // Software & Development
    "MERN Stack Internship Sikar",
    "MERN Stack Internship Rajasthan",
    "Full Stack Developer Internship Sikar",
    "Full Stack Internship Rajasthan",
    "React JS Internship Sikar",
    "Node JS Internship Rajasthan",
    "Web Development Internship Sikar",
    "Software Development Internship Rajasthan",
    "Frontend Developer Internship Sikar",
    "Backend Developer Internship Rajasthan",
    "Mobile App Development Internship Rajasthan",

    // Data & AI
    "Data Analyst Internship Sikar",
    "Data Analytics Internship Rajasthan",
    "Artificial Intelligence Internship Rajasthan",
    "Machine Learning Internship Rajasthan",
    "Python Internship Sikar",

    // Cyber Security
    "Cyber Security Internship Sikar",
    "Cyber Security Internship Rajasthan",
    "Ethical Hacking Internship Rajasthan",

    // Digital Marketing
    "Digital Marketing Internship Sikar",
    "Digital Marketing Internship Rajasthan",
    "SEO Internship Rajasthan",
    "Social Media Marketing Internship Sikar",

    // Training Keywords
    "Live Project Training Sikar",
    "Real Time Project Training Rajasthan",
    "Project Based Internship Sikar",
    "Industry Oriented Training Rajasthan",
    "Practical Training Sikar",
    "Software Training Institute Sikar",
    "IT Training Institute Rajasthan",

    // Local Search Intent
    "Internship Near Me",
    "Industrial Training Near Me",
    "Best Internship Institute Sikar",
    "Best Industrial Training Institute Rajasthan",
    "Best Software Training Institute Sikar",
    "Computer Internship Sikar",
    "Software Company Internship Sikar",
    "Internship with Certificate Sikar",
    "Internship with Live Projects Rajasthan",

    // Brand Keywords
    "Success Point Institute Sikar Internship",
    "Success Point College Sikar Internship",
    "Success Point Live Project Internship",
    "Success Point Industrial Training Sikar",
    "Success Point MERN Stack Internship",
    "Success Point Digital Marketing Internship",
    "Success Point Data Analyst Internship",
    "Success Point Cyber Security Internship",
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14">

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 lg:p-10">

          {/* Blog Introduction */}
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-4">
              Success Point Sikar Blog
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">
              Learn. Grow. Build Your Career.
            </h2>

            <div className="w-16 h-1 bg-blue-600 rounded-full mt-4"></div>
          </div>

          {/* Content */}
          <div className="space-y-6 text-gray-600 text-[15px] sm:text-base leading-7 sm:leading-8">

            <p>
              Welcome to the <strong className="text-gray-900">
                Success Point Sikar Blog
              </strong> — a dedicated learning space for students, parents and professionals
              looking for practical career guidance, admission updates, placement
              preparation, higher education insights and industry-focused learning resources.
            </p>

            <p>
              Explore useful articles on{" "}
              <strong className="text-gray-900">
                Digital Marketing, BCA, BBA, MCA, MBA, MSc, Artificial Intelligence,
                Cyber Security, Full Stack Development, Graphic Design and Data Analytics
              </strong>
              {" "}along with other career-oriented courses and skill-development opportunities
              in Sikar.
            </p>

            <p>
              Whether you are planning your{" "}
              <strong className="text-gray-900">
                graduation, preparing for placements, choosing the right course or college,
                or upgrading your professional skills
              </strong>
              , our blog brings practical and easy-to-understand information to help you
              make better career decisions.
            </p>

          </div>

          {/* Bottom Highlight */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <p className="text-sm sm:text-base text-gray-500">
              <span className="font-semibold text-blue-600">
                Explore our latest articles
              </span>{" "}
              for career tips, course information, technology trends and learning
              opportunities in Sikar.
            </p>
          </div>

        </div>

      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}