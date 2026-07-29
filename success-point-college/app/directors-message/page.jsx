import Link from "next/link";
import { ArrowRight, Quote, TrendingUp, Handshake, Rocket } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Director's Message",
  description:
    "A message from the Director of Success Point College, Sikar, on placements, industry partnerships, and the road ahead for students.",
  alternates: { canonical: "/directors-message" },
  openGraph: {
    title: `Director's Message | ${SITE.name}`,
    description: "Our Director's perspective on placements, industry ties, and the institution's direction.",
    url: `${SITE.url}/directors-message`,
  },
};

const FOCUS_AREAS = [
  {
    Icon: Handshake,
    title: "Industry Partnerships",
    body: "Building direct relationships with employers in Sikar and beyond, so placement isn't left to chance in the final semester.",
  },
  {
    Icon: TrendingUp,
    title: "Course Relevance",
    body: "Reviewing our computer and professional courses every year against what employers are actually hiring for.",
  },
  {
    Icon: Rocket,
    title: "Student Readiness",
    body: "Making sure every student leaves with a portfolio, mock-interview practice, and a clear next step — not just a certificate.",
  },
];

export default function DirectorsMessagePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE.url}/about` },
      { "@type": "ListItem", position: 3, name: "Director's Message", item: `${SITE.url}/directors-message` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20">
        <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-widest text-brass-300/80">
            <Link href="/" className="hover:text-brass-300">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/about" className="hover:text-brass-300">About</Link>
            <span className="mx-2">/</span>
            <span className="text-ivory-100/60">Director's Message</span>
          </nav>

          <h1 className="mt-5 font-display text-4xl font-semibold text-ivory-50 sm:text-5xl">
            Director's Message
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ivory-100/70">
            On why we measure ourselves by what happens after graduation, not just during it.
          </p>
        </div>
      </section>

      {/* Message body */}
      <section className="bg-ivory-100 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl2 border border-brass-500/20 bg-ivory-50 p-8 shadow-premium sm:p-10">
            <Quote size={28} className="text-brass-500" aria-hidden="true" />
            <div className="mt-4 space-y-5 text-base leading-relaxed text-ink-700">
              <p>
                When we started Success Point College, the question we kept coming back to was
                simple: what happens to a student after they walk out with a certificate or a
                degree in hand? A course is only as good as the job, admission, or opportunity it
                leads to.
              </p>
              <p>
                That's the lens I bring to my role as Director. My focus is on the parts of the
                institution that don't show up on a syllabus — our placement partnerships, how
                closely our computer and professional courses track what employers actually want
                this year, and whether our students are walking into interviews prepared or
                nervous.
              </p>
              <p>
                We're a mid-sized institution in Sikar, and I consider that an advantage. It means
                I can sit in on placement drives, hear directly from recruiters about what's
                working and what isn't, and push those changes back into our classrooms the same
                semester — not years later.
              </p>
              <p>
                My commitment to every student who joins us, whether for a 3-year BCA degree or a
                3-month certificate course, is the same: we will treat your time here as an
                investment we're responsible for protecting.
              </p>
            </div>

            <div className="mt-8 border-t border-brass-500/15 pt-6">
              <p className="font-display text-lg font-semibold text-navy-950">Director</p>
              <p className="text-sm text-ink-500">{SITE.name}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="relative overflow-hidden bg-navy-950 py-16">
        <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading light eyebrow="Where I'm Focused" title="What we're actively working on" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {FOCUS_AREAS.map(({ Icon, title, body }) => (
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
      </section>

      {/* Related leadership links */}
      <section className="bg-ivory-100 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Leadership" title="Read more from our leadership" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <Link
              href="/chairmans-message"
              className="group rounded-xl2 border border-brass-500/15 bg-ivory-50 p-6 shadow-premium transition-shadow hover:shadow-glow"
            >
              <h3 className="font-display text-lg font-semibold text-navy-950">Chairman's Message</h3>
              <p className="mt-2 text-sm text-ink-500">Our founding philosophy and long-term vision.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-950">
                Read message <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/principals-message"
              className="group rounded-xl2 border border-brass-500/15 bg-ivory-50 p-6 shadow-premium transition-shadow hover:shadow-glow"
            >
              <h3 className="font-display text-lg font-semibold text-navy-950">Principal's Message</h3>
              <p className="mt-2 text-sm text-ink-500">How academics and discipline come together day to day.</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-950">
                Read message <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory-100 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-xl2 bg-navy-950 px-8 py-14 text-center sm:px-16">
            <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
            <div className="relative">
              <h2 className="font-display text-3xl font-semibold text-ivory-50 sm:text-4xl">
                Ready to start your admission?
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/admissions/form"
                  className="inline-flex items-center gap-2 rounded-xl bg-brass-500 px-6 py-3.5 font-semibold text-navy-950 shadow-glow hover:-translate-y-0.5 transition-transform focus-ring"
                >
                  Apply for Admission <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl glass-panel px-6 py-3.5 font-semibold text-ivory-50 hover:-translate-y-0.5 transition-transform focus-ring"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
