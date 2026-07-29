import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, Clock, GraduationCap, IndianRupee, ArrowRight } from "lucide-react";
import { COURSES, getCourseBySlug, getRelatedCourses } from "@/data/courses";
import { SITE } from "@/data/site";
import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export function generateMetadata({ params }) {
  const course = getCourseBySlug(params.slug);
  if (!course) return {};

  const title = `${course.title} — Duration, Fees, Curriculum & Careers`;
  const description = `${course.tagline} Duration: ${course.duration}. Eligibility: ${course.eligibility}`;

  return {
    title,
    description,
    alternates: { canonical: `/courses/${course.slug}` },
    openGraph: { title, description, url: `${SITE.url}/courses/${course.slug}` },
  };
}

export default function CoursePage({ params }) {
  const course = getCourseBySlug(params.slug);
  if (!course) notFound();

  const related = getRelatedCourses(course);

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.overview,
    provider: {
      "@type": "CollegeOrUniversity",
      name: SITE.name,
      sameAs: SITE.url,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-16">
        <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-widest text-brass-300/80">
            <Link href="/" className="hover:text-brass-300">Home</Link>
            <span className="mx-2">/</span>
            <Link href={`/course-category/${course.category}`} className="hover:text-brass-300">
              {course.category.replace(/-/g, " ")}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ivory-100/60">{course.shortTitle}</span>
          </nav>

          <h1 className="mt-5 font-display text-4xl font-semibold text-ivory-50 sm:text-5xl">
            {course.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ivory-100/70">{course.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 rounded-lg glass-panel px-4 py-2.5 text-sm text-ivory-50">
              <Clock size={16} className="text-brass-300" /> {course.duration}
            </div>
            <div className="flex items-center gap-2 rounded-lg glass-panel px-4 py-2.5 text-sm text-ivory-50">
              <GraduationCap size={16} className="text-brass-300" /> {course.eligibility}
            </div>
            <div className="flex items-center gap-2 rounded-lg glass-panel px-4 py-2.5 text-sm text-ivory-50">
              <IndianRupee size={16} className="text-brass-300" /> {course.salaryRange}
            </div>
          </div>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/admissions/form"
              className="inline-flex items-center gap-2 rounded-xl bg-brass-500 px-6 py-3.5 font-semibold text-navy-950 shadow-glow hover:-translate-y-0.5 transition-transform focus-ring"
            >
              Apply for {course.shortTitle} <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl glass-panel px-6 py-3.5 font-semibold text-ivory-50 hover:-translate-y-0.5 transition-transform focus-ring"
            >
              Talk to Admissions Cell
            </a>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-ivory-100 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Overview" title={`What you'll learn in ${course.shortTitle}`} />
          <p className="mt-6 text-base leading-relaxed text-ink-700">{course.overview}</p>
          <p className="mt-4 text-sm text-ink-500">{course.fees}</p>
        </div>
      </section>

      {/* Curriculum + Software */}
      <section className="bg-ivory-50 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-950">Curriculum</h2>
            <ul className="mt-5 space-y-3">
              {course.curriculum.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-pine-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold text-navy-950">Software Covered</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {course.software.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-brass-500/25 bg-ivory-100 px-4 py-2 text-sm text-ink-700"
                >
                  {tool}
                </span>
              ))}
            </div>

            <h2 className="mt-8 font-display text-2xl font-semibold text-navy-950">Projects You'll Build</h2>
            <ul className="mt-5 space-y-3">
              {course.projects.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-700">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-pine-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Careers */}
      <section className="bg-navy-950 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            eyebrow="Career Path"
            title="Where this course can take you"
            description={`Certification: ${course.certification} Placement support: ${course.placementSupport}`}
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {course.careers.map((career) => (
              <span key={career} className="rounded-full glass-panel px-4 py-2 text-sm text-ivory-50">
                {career}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-ivory-100 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Common questions" />
          <div className="mt-8 space-y-4">
            {course.faqs.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-brass-500/20 bg-ivory-50 p-5">
                <summary className="cursor-pointer font-display text-base font-semibold text-navy-950 focus-ring">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related courses */}
      {related.length > 0 && (
        <section className="bg-ivory-50 py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Related" title="Courses students also consider" />
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <CourseCard key={r.slug} course={r} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
