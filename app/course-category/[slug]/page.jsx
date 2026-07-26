import { notFound } from "next/navigation";
import { CATEGORIES, getCoursesByCategory } from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.description,
    alternates: { canonical: `/course-category/${category.slug}` },
  };
}

export default function CategoryPage({ params }) {
  const category = CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const courses = getCoursesByCategory(category.slug);

  return (
    <section className="bg-ivory-100 pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Programs" title={category.title} description={category.description} />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
        {courses.length === 0 && (
          <p className="mt-8 text-sm text-ink-500">
            More courses in this category are being added — contact the admissions cell for details.
          </p>
        )}
      </div>
    </section>
  );
}
