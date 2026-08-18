import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";
import { CATEGORIES, COURSES } from "@/data/courses";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Computer Courses in Sikar | BCA, MCA, Coding & Professional Courses",
  description:
    "Explore computer courses in Sikar at Success Point Institute, including BCA, MCA, web development, digital marketing, data analytics, cybersecurity and career-focused programs.",
  alternates: {
    canonical: `${SITE.url}/courses`,
  },
  openGraph: {
    title: "Computer Courses in Sikar | Success Point Institute",
    description:
      "Explore BCA, MCA, coding, web development, digital marketing, data analytics and other career-focused courses in Sikar.",
    url: `${SITE.url}/courses`,
    type: "website",
  },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Courses at Success Point Institute Sikar",
  itemListElement: COURSES.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: course.title,
    url: `${SITE.url}/courses/${course.slug}`,
  })),
};

export default function CoursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <section className="bg-ivory-100 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Programs in Sikar"
            title="Computer Courses, Degree Programs & Career Training"
            description="Explore Success Point Institute's programs for school students, graduates and working professionals — from foundational computer skills to advanced software and digital careers."
          />

          <div className="mt-8 flex flex-wrap gap-2">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/course-category/${category.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-brass-500/25 px-4 py-2 text-sm font-medium text-ink-700 transition hover:border-indigo-700 hover:bg-indigo-700 hover:text-white"
              >
                {category.title}
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
