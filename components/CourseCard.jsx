import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Star } from "lucide-react";

export default function CourseCard({ course }) {
  if (!course?.slug) return null;

  const title = course.title || course.shortTitle || "Computer Course";
  const description =
    course.description ||
    course.tagline ||
    course.overview ||
    "Career-focused computer training with practical learning and real-world projects.";

  const categoryLabel = (course.category || "program")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brass-500/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        href={`/courses/${course.slug}`}
        aria-label={`View ${title} course details`}
        className="block overflow-hidden"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-navy-950">
          {course.image ? (
            <Image
              src={course.image}
              alt={`${title} course at Success Point Institute Sikar`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="grid h-full place-items-center text-sm text-white/70">
              Success Point Institute Sikar
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-950">
            {categoryLabel}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3 text-xs text-ink-500">
          {course.duration ? (
            <span className="flex items-center gap-1.5">
              <Clock size={14} aria-hidden="true" />
              {course.duration}
            </span>
          ) : (
            <span>Career-focused program</span>
          )}

          {course.rating ? (
            <span className="flex items-center gap-1 font-medium text-ink-700">
              <Star size={14} fill="currentColor" aria-hidden="true" />
              {course.rating}
            </span>
          ) : null}
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-navy-950">
          <Link href={`/courses/${course.slug}`} className="hover:text-indigo-700">
            {title}
          </Link>
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-600">
          {description}
        </p>

        <div className="mt-auto pt-5">
          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 transition-colors hover:text-navy-950"
          >
            View course details
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
