import Link from "next/link";
import { Target, Eye, Award, Building2, Users2, ArrowRight, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/data/site";

export const metadata = {
  title: "About Us — Our Story, Mission & Campus in Sikar",
  description:
    "Success Point College is a college and computer institute in Sikar, Rajasthan, offering BCA, MCA, and job-ready computer, digital marketing, and data analytics courses with dedicated placement support.",
  keywords: [
    "Success Point College Sikar",
    "best college in Sikar",
    "computer institute Sikar about",
    "BCA MCA college Rajasthan",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About Us | ${SITE.name}`,
    description:
      "Learn about Success Point College's mission, faculty, and infrastructure in Sikar, Rajasthan.",
    url: `${SITE.url}/about`,
  },
};

const VALUES = [
  {
    Icon: Target,
    title: "Our Mission",
    body: "To make every student in Sikar employable — not just certified — by pairing recognised degrees with practical, industry-relevant skills and honest placement guidance.",
  },
  {
    Icon: Eye,
    title: "Our Vision",
    body: "To be the college families in Sikar and nearby districts trust first, for both a full degree education and a fast, focused computer or professional course.",
  },
  {
    Icon: Award,
    title: "Our Approach",
    body: "Small batches, lab-first teaching, and faculty who have worked in the industries our students are entering — not just taught about them.",
  },
];

const MILESTONES = [
  { label: "Founded in Sikar", detail: "Started as a dedicated computer institute serving students after 10th and 12th." },
  { label: "Degree programs added", detail: "Expanded into full BCA and MCA degree programs alongside diploma and certificate courses." },
  { label: "Placement cell established", detail: "Built a dedicated placement cell connecting students to local and regional employers." },
  { label: "Today", detail: "A combined college and computer institute serving thousands of students across graduation, computer, and professional courses." },
];

const LEADERSHIP = [
  { title: "Chairman's Message", href: "/chairmans-message", body: "Our founding philosophy and long-term vision for the institution." },
  { title: "Principal's Message", href: "/principals-message", body: "How academics and discipline come together on campus day to day." },
  { title: "Director's Message", href: "/directors-message", body: "The direction we're taking on placements, industry partnerships, and new courses." },
];

const FAQS = [
  {
    q: "Where is Success Point College located?",
    a: `Success Point College is located on Piprali Rd, opposite M.K. Memorial Sr. Sec. School, Jat Colony, Sikar, Rajasthan.`,
  },
  {
    q: "Does Success Point College offer both degree and computer courses?",
    a: "Yes. The college offers full-time degree programs like BCA and MCA alongside shorter computer, digital marketing, and data analytics courses, so students can choose a degree track, a skills track, or both.",
  },
  {
    q: "Is placement support available for all courses?",
    a: "Yes, the placement cell supports students across all programs — degree and certificate alike — with resume preparation, mock interviews, and introductions to hiring partners.",
  },
];

export default function AboutPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "About Us", item: `${SITE.url}/about` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 pt-32 pb-20">
        <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-widest text-brass-300/80">
            <Link href="/" className="hover:text-brass-300">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-ivory-100/60">About Us</span>
          </nav>

          <h1 className="mt-5 font-display text-4xl font-semibold text-ivory-50 sm:text-5xl">
            Built in Sikar, for Sikar's students
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ivory-100/70">
            {SITE.name} is a college and computer institute on Piprali Rd, Sikar — where a
            full-time degree and a job-ready skill are taught under the same roof, by faculty
            who've worked in the fields they teach.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-ivory-100 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:px-8">
          <div className="lg:col-span-3">
            <SectionHeading eyebrow="Our Story" title="Why Success Point College exists" />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-700">
              <p>
                Success Point College started with a simple observation: students in Sikar were
                either choosing a traditional degree with little practical skill-building, or a
                short computer course with no degree behind it. Few options combined both.
              </p>
              <p>
                We built our college around closing that gap — degree programs like BCA and MCA
                that include real project work, and computer, digital marketing, and data
                analytics courses that stand on their own for students who want to enter the
                workforce faster.
              </p>
              <p>
                Every course, whether a 3-year degree or a 3-month certificate, is designed by
                the same standard: students should leave with a portfolio they built themselves,
                not just a certificate that says they attended.
              </p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-xl2 border border-brass-500/20 bg-ivory-50 p-6 shadow-premium">
              <h2 className="font-display text-lg font-semibold text-navy-950">Campus at a Glance</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-700">
                <li className="flex gap-2"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-pine-500" /> Degree + computer institute under one campus</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-pine-500" /> Dedicated computer labs with current software</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-pine-500" /> Placement cell for every course, not only degree students</li>
                <li className="flex gap-2"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-pine-500" /> Located on Piprali Rd, opposite M.K. Memorial Sr. Sec. School</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Approach */}
      <section className="relative overflow-hidden bg-navy-950 py-16">
        <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading light eyebrow="What Drives Us" title="Mission, vision, and how we teach" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {VALUES.map(({ Icon, title, body }) => (
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

      {/* Milestones */}
      <section className="bg-ivory-100 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Journey" title="How the institution has grown" />
          <ol className="mt-10 space-y-8 border-l border-brass-500/25 pl-8">
            {MILESTONES.map((m) => (
              <li key={m.label} className="relative">
                <span className="absolute -left-[2.35rem] top-1 grid h-4 w-4 place-items-center rounded-full bg-brass-500" aria-hidden="true" />
                <h3 className="font-display text-base font-semibold text-navy-950">{m.label}</h3>
                <p className="mt-1 text-sm text-ink-700">{m.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Leadership teaser */}
      <section className="bg-ivory-50 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Leadership" title="Hear from our leadership" />
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {LEADERSHIP.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group rounded-xl2 border border-brass-500/15 bg-ivory-100 p-6 shadow-premium transition-shadow hover:shadow-glow"
              >
                <Users2 size={22} className="text-brass-500" />
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-950">{l.title}</h3>
                <p className="mt-2 text-sm text-ink-500">{l.body}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-navy-950">
                  Read message
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure teaser */}
      <section className="bg-ivory-100 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-6 rounded-xl2 border border-brass-500/20 bg-navy-950 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-brass-500/15 text-brass-300">
                <Building2 size={22} />
              </div>
              <div>
                <h2 className="font-display text-xl font-semibold text-ivory-50">
                  See our labs, classrooms, and library
                </h2>
                <p className="mt-1 text-sm text-ivory-100/65">
                  Explore our infrastructure and facilities in detail.
                </p>
              </div>
            </div>
            <Link
              href="/infrastructure"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-brass-500 px-6 py-3 font-semibold text-navy-950 hover:-translate-y-0.5 transition-transform focus-ring"
            >
              View Infrastructure <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs — GEO/AI-answer friendly */}
      <section className="bg-ivory-50 py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="FAQs" title="Common questions about the college" />
          <div className="mt-8 space-y-4">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-brass-500/20 bg-ivory-100 p-5">
                <summary className="cursor-pointer font-display text-base font-semibold text-navy-950 focus-ring">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">{faq.a}</p>
              </details>
            ))}
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
                Come see the campus for yourself
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-ivory-100/70">
                Visit us on Piprali Rd, Sikar, or speak with our admissions cell to find the
                right course for you.
              </p>
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
