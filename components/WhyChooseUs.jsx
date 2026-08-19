import { GraduationCap, Briefcase, Laptop, Users, ArrowRight, Clock, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Link from "next/link";
const REASONS = [
  {
    Icon: GraduationCap,
    title: "Degree + Skill, Together",
    body: "Study for a recognised BCA/MCA degree while stacking industry certifications in the same institute.",
  },
  {
    Icon: Laptop,
    title: "Real Lab Infrastructure",
    body: "Dedicated computer labs with current software — not shared systems or outdated versions.",
  },
  {
    Icon: Briefcase,
    title: "Placement Cell That Follows Up",
    body: "Resume reviews, mock interviews, and direct introductions to hiring partners in Sikar and beyond.",
  },
  {
    Icon: Users,
    title: "Faculty Who Teach Practice",
    body: "Instructors with industry project experience, not only academic backgrounds.",
  },
];

export default function WhyChooseUs() {
  return (
    <section>
      <div className="mx-auto grid mb-4 max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {/* Little Tech Explorers */}
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brass-500/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

          <Link
            href="/kids-code-in-sikar"
            aria-label="View Little Tech Explorers course details"
            className="block overflow-hidden"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-navy-950">
              <Image
                src="/images/little-tech-explorer.webp"
                alt="Little Tech Explorers course at Success Point Institute Sikar"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

              <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-950">
                Kids
              </span>
            </div>
          </Link>

          <div className="flex flex-1 flex-col p-5">

            <div className="flex items-center justify-between gap-3 text-xs text-ink-500">
              <span className="flex items-center gap-1.5">
                <Clock size={14} aria-hidden="true" />
                6 Months
              </span>

              <span className="flex items-center gap-1 font-medium text-ink-700">
                <Star size={14} fill="currentColor" aria-hidden="true" />
                4.9
              </span>
            </div>

            <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-navy-950">
              <Link
                href="/kids-code-in-sikar"
                className="hover:text-indigo-700"
              >
                Little Tech Explorers
              </Link>
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-600">
              Your child will learn to think, create and use technology — not just
              consume it.
            </p>

            <div className="mt-auto pt-5">
              <Link
                href="/kids-code-in-sikar"
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


        {/* Junior Code Creators */}
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brass-500/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

          <Link
            href="/junior-code-creators"
            aria-label="View Junior Code Creators course details"
            className="block overflow-hidden"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-navy-950">
              <Image
                src="/images/junior-code-creator.webp"
                alt="Junior Code Creators course at Success Point Institute Sikar"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

              <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-950">
                Kids
              </span>
            </div>
          </Link>

          <div className="flex flex-1 flex-col p-5">

            <div className="flex items-center justify-between gap-3 text-xs text-ink-500">
              <span className="flex items-center gap-1.5">
                <Clock size={14} aria-hidden="true" />
                4 Months
              </span>

              <span className="flex items-center gap-1 font-medium text-ink-700">
                <Star size={14} fill="currentColor" aria-hidden="true" />
                4.9
              </span>
            </div>

            <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-navy-950">
              <Link
                href="/junior-code-creators"
                className="hover:text-indigo-700"
              >
                Junior Code Creators
              </Link>
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-600">
              Introduce your child to the world of coding with fun, interactive
              projects.
            </p>

            <div className="mt-auto pt-5">
              <Link
                href="/junior-code-creators"
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


        {/* Teen Tech Developers */}
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brass-500/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

          <Link
            href="/teen-tech-developers"
            aria-label="View Teen Tech Developers course details"
            className="block overflow-hidden"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-navy-950">
              <Image
                src="/images/teen-tech-creator.webp"
                alt="Teen Tech Developers course at Success Point Institute Sikar"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

              <span className="absolute bottom-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-navy-950">
                Kids
              </span>
            </div>
          </Link>

          <div className="flex flex-1 flex-col p-5">

            <div className="flex items-center justify-between gap-3 text-xs text-ink-500">
              <span className="flex items-center gap-1.5">
                <Clock size={14} aria-hidden="true" />
                6 Months
              </span>

              <span className="flex items-center gap-1 font-medium text-ink-700">
                <Star size={14} fill="currentColor" aria-hidden="true" />
                4.9
              </span>
            </div>

            <h3 className="mt-3 font-display text-xl font-semibold leading-tight text-navy-950">
              <Link
                href="/teen-tech-developers"
                className="hover:text-indigo-700"
              >
                Teen Tech Developers
              </Link>
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink-600">
              Prepare your teenager for a career in technology with hands-on
              experience in coding, app development, and digital marketing.
            </p>

            <div className="mt-auto pt-5">
              <Link
                href="/teen-tech-developers"
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

      </div>
      <div className="relative overflow-hidden bg-indigo-600 py-20">
        <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Success Point"
            title="A college built around outcomes, not just attendance"
            light
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map(({ Icon, title, body }) => (
              <div key={title} className="glass-panel rounded-xl2 p-6">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-brass-500/15 text-brass-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ivory-50">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory-100/65">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
