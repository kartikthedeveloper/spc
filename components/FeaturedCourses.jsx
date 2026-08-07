import Link from "next/link";
import SectionHeading from "./SectionHeading";
import CourseCard from "./CourseCard";
import { COURSES, CATEGORIES } from "@/data/courses";

export default function FeaturedCourses() {
  const featured = COURSES.slice(0, 16);

  return (
    <section className="bg-ivory-100 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Programs"
            title="14+ Computer Science Courses Available in Sikar – Learn, Build & Get Job Ready"
            description="From a 3-year BCA to a 3-month Tally certification — every program includes real projects, not just lectures."
          />
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/course-category/${cat.slug}`}
                className="rounded-full border border-brass-500/25 px-4 py-2 text-xs font-medium text-ink-700 hover:bg-indigo-700 hover:text-white hover:border-navy-950 transition-colors focus-ring"
              >
                {cat.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
