import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";

const alumni = [
  {
    name: "Gautam Sharma",
    role: ".NET Web Developer",
    location: "Noida",
    image: "/images/students/gautam-sharma-web.webp",
  },
  {
    name: "Shivani Tiwari",
    role: "Data Analyst",
    location: "Pune",
    image: "/images/students/shivani-tiwari-data.webp",
  },
  {
    name: "Ankit Soni",
    role: "Senior .Net Developer",
    location: "Surat",
    image: "/images/students/ankit-soni.webp",
  },
];

export default function AlumniHighlight() {
  return (
    <section className="relative overflow-hidden bg-ivory-50 py-20 md:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-brass-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brass-500/20 bg-white px-4 py-2 shadow-sm">
              <GraduationCap className="h-4 w-4 text-indigo-600" />

              <span className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-indigo-600">
                Our Alumni
              </span>
            </div>

            <h2 className="font-display text-4xl font-bold leading-tight text-navy-950 md:text-5xl">
              From Learning Here
              <br />
              <span className="text-indigo-600">
                To Building Careers.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-ink-500 md:text-lg">
              Our alumni are working across different cities and industries,
              turning the skills they learned at Success Point into real-world
              careers.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/placements"
                className="group inline-flex items-center gap-2 rounded-xl bg-navy-950 px-6 py-3.5 text-sm font-semibold text-white shadow-premium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
              >
                Meet Our Alumni

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <span className="text-sm font-medium text-ink-500">
                Real students. Real careers.
              </span>
            </div>
          </div>

          {/* RIGHT ALUMNI CARDS */}
          <div className="relative mx-auto w-full max-w-2xl">
            {/* Main background card */}
            <div className="absolute inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-100/80 via-white to-brass-100/50 blur-sm" />

            <div className="relative grid gap-4 sm:grid-cols-2">

              {/* Main Alumni Card */}
              <div className="group relative overflow-hidden rounded-[1.75rem] border border-brass-500/15 bg-white p-5 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-glow sm:row-span-2">

                <div className="relative aspect-[4/4.6] overflow-hidden rounded-2xl bg-indigo-50">
                  <Image
                    src={alumni[0].image}
                    alt={alumni[0].name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/20 bg-black/45 p-3 text-white backdrop-blur-md">
                    <p className="text-sm font-bold">
                      {alumni[0].name}
                    </p>

                    <p className="mt-0.5 text-xs text-white/80">
                      {alumni[0].role}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50">
                    <BriefcaseBusiness className="h-4 w-4 text-indigo-600" />
                  </div>

                  <div>
                    <p className="text-xs text-ink-500">
                      Currently working in
                    </p>

                    <p className="text-sm font-semibold text-navy-950">
                      {alumni[0].location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Small Card 1 */}
              <AlumniMiniCard alumni={alumni[1]} />

              {/* Small Card 2 */}
              <AlumniMiniCard alumni={alumni[2]} />

            </div>
          </div>
        </div>

        {/* Bottom Trust Line */}
        <div className="mt-16 border-t border-navy-950/10 pt-7">
          <div className="flex flex-col gap-3 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <p className="text-sm text-ink-500">
              <span className="font-semibold text-navy-950">
                Proud of every journey.
              </span>{" "}
              Explore where our students are today.
            </p>

            <Link
              href="/placements"
              className="group inline-flex items-center justify-center gap-1 text-sm font-semibold text-indigo-600"
            >
              View all alumni
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------------------------------------
   Small Alumni Card
---------------------------------------------- */

function AlumniMiniCard({ alumni }) {
  return (
    <div className="group flex items-center gap-4 rounded-[1.5rem] border border-brass-500/15 bg-white p-4 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-glow">

      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-indigo-50">
        <Image
          src={alumni.image}
          alt={alumni.name}
          fill
          sizes="80px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-navy-950">
          {alumni.name}
        </p>

        <p className="mt-1 line-clamp-2 text-xs leading-5 text-ink-500">
          {alumni.role}
        </p>

        <div className="mt-2 inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-indigo-600">
          {alumni.location}
        </div>
      </div>
    </div>
  );
}