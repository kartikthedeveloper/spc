import Link from "next/link";
import { notFound } from "next/navigation";
import {
    CheckCircle2,
    Clock,
    GraduationCap,
    IndianRupee,
    ArrowRight,
    BookOpen,
    Code2,
    Briefcase,
    Award,
    Users,
    Star,
    MapPin,
    Phone,
    Mail,
    FileCheck,
    Laptop,
    Calendar,
    Building2,
    Target,
    Layers,
    Sparkles,
    ChevronRight,
} from "lucide-react";
import { COURSES, getCourseBySlug, getRelatedCourses, CATEGORIES } from "@/data/courses";
import { SITE } from "@/data/site";
import CourseCard from "@/components/CourseCard";
import SectionHeading from "@/components/SectionHeading";

// ─── Static Params ─────────────────────────────────────────────────────────────
export function generateStaticParams() {
    return COURSES.map((course) => ({ slug: course.slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────────
export function generateMetadata({ params }) {
    const course = getCourseBySlug(params.slug);
    if (!course) return {};

    const title = `${course.title} — ${course.duration} | Fees, Curriculum & Careers | Success Point College Sikar`;
    const description =
        `${course.tagline} ${course.eligibility}. ${course.overview.slice(0, 120)}... Best ${course.shortTitle} course in Sikar, Rajasthan. Enroll now for ${course.duration}.`;

    return {
        title,
        description,
        keywords: `${course.title}, ${course.shortTitle} course, ${course.shortTitle} in Sikar, ${course.shortTitle} Rajasthan, ${course.category.replace(/-/g, " ")}, computer courses Sikar, best coaching Sikar, Success Point College`,
        alternates: {
            canonical: `${SITE.url}/courses/${course.slug}`,
        },
        openGraph: {
            title,
            description,
            url: `${SITE.url}/courses/${course.slug}`,
            siteName: SITE.name,
            type: "website",
            images: [
                {
                    url: course.image || `${SITE.url}/og-default.jpg`,
                    width: 1200,
                    height: 630,
                    alt: course.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [course.image || `${SITE.url}/og-default.jpg`],
        },
        other: {
            "geo.region": "IN-RJ",
            "geo.placename": "Sikar",
            "geo.position": "27.6121;75.1399",
            "ICBM": "27.6121, 75.1399",
        },
    };
}

// ─── Page Component ────────────────────────────────────────────────────────────
export default function CoursePage({ params }) {
    const course = getCourseBySlug(params.slug);
    if (!course) notFound();

    const related = getRelatedCourses(course);

    // ─── Schema: Course ──────────────────────────────────────────────────────
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: course.title,
        description: course.overview,
        provider: {
            "@type": "CollegeOrUniversity",
            name: SITE.name,
            sameAs: SITE.url,
            address: {
                "@type": "PostalAddress",
                addressLocality: "Sikar",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
            },
        },
        duration: course.duration,
        educationalCredentialAwarded: course.certification,
        teaches: course.curriculum,
        occupationalCredentialAwarded: course.careers,
        hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "onsite",
            location: {
                "@type": "Place",
                name: "Success Point College, Sikar",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Sikar",
                    addressRegion: "Rajasthan",
                    addressCountry: "IN",
                },
            },
        },
    };

    // ─── Schema: FAQ ──────────────────────────────────────────────────────────
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: course.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
            },
        })),
    };

    // ─── Schema: Breadcrumb ──────────────────────────────────────────────────
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE.url,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Courses",
                item: `${SITE.url}/courses`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: course.title,
                item: `${SITE.url}/courses/${course.slug}`,
            },
        ],
    };

    // ─── Schema: LocalBusiness (Geo) ────────────────────────────────────────
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: SITE.name,
        description: `Best ${course.shortTitle} course provider in Sikar, Rajasthan. ${course.tagline}`,
        url: SITE.url,
        address: {
            "@type": "PostalAddress",
            addressLocality: "Sikar",
            addressRegion: "Rajasthan",
            postalCode: "332001",
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: 27.6121,
            longitude: 75.1399,
        },
        telephone: SITE.phones?.[0] || "+91-9876543210",
        email: SITE.email || "info@successpointcollege.com",
        priceRange: course.fees || "Contact for fees",
        hasCourse: {
            "@type": "Course",
            name: course.title,
            description: course.overview,
        },
    };

    return (
        <>
            {/* ─── Schema Scripts ──────────────────────────────────────────── */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            {/* ─── HERO ────────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-indigo-700 pt-28 pb-12 md:pt-32 md:pb-20">
                {/* Background pattern */}
                <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
                <div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent"
                    aria-hidden="true"
                />

                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-widest text-indigo-300/70">
                        <ol className="flex flex-wrap items-center gap-1.5">
                            <li>
                                <Link href="/" className="hover:text-indigo-300 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <ChevronRight size={12} className="text-indigo-300/40" />
                            <li>
                                <Link href="/courses" className="hover:text-indigo-300 transition-colors">
                                    Courses
                                </Link>
                            </li>
                            <ChevronRight size={12} className="text-indigo-300/40" />
                            <li>
                                <Link
                                    href={`/course-category/${course.category}`}
                                    className="hover:text-indigo-300 transition-colors"
                                >
                                    {CATEGORIES.find((c) => c.slug === course.category)?.title ||
                                        course.category.replace(/-/g, " ")}
                                </Link>
                            </li>
                            <ChevronRight size={12} className="text-indigo-300/40" />
                            <li className="text-ivory-100/50">{course.shortTitle}</li>
                        </ol>
                    </nav>

                    {/* Title & Tagline */}
                    <div className="mt-6 md:mt-8">
                        <h1 className="font-display text-3xl font-semibold text-ivory-50 sm:text-4xl md:text-5xl">
                            {course.title}
                        </h1>
                        <p className="mt-3 max-w-2xl text-base text-ivory-100/70 sm:text-lg">
                            {course.tagline}
                        </p>
                    </div>

                    {/* Stats chips */}
                    <div className="mt-6 flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-sm text-ivory-50">
                            <Clock size={15} className="text-indigo-300" />
                            {course.duration}
                        </div>
                        <div className="flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-sm text-ivory-50">
                            <GraduationCap size={15} className="text-indigo-300" />
                            {course.eligibility}
                        </div>
                        <div className="flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-sm text-ivory-50">
                            <IndianRupee size={15} className="text-indigo-300" />
                            {course.salaryRange}
                        </div>
                        <div className="flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-sm text-ivory-50">
                            <Users size={15} className="text-indigo-300" />
                            {course.enrolled}+ enrolled
                        </div>
                        <div className="flex items-center gap-2 rounded-full glass-panel px-4 py-2 text-sm text-ivory-50">
                            <Star size={15} className="text-indigo-300" />
                            {course.rating} ★
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link
                            href="/admissions/form"
                            className="inline-flex items-center border-white gap-2 rounded-xl bg-indigo-500 px-6 py-3.5 font-semibold text-white shadow-glow hover:-translate-y-0.5 transition-transform focus-ring"
                        >
                            Apply for {course.shortTitle}
                            <ArrowRight size={18} />
                        </Link>
                        <a
                            href={`tel:${SITE.phones?.[0]?.replace(/\s/g, "") || "+919876543210"}`}
                            className="inline-flex items-center gap-2 rounded-xl glass-panel px-6 py-3.5 font-semibold text-ivory-50 hover:-translate-y-0.5 transition-transform focus-ring"
                        >
                            <Phone size={18} className="text-indigo-300" />
                            Talk to Admissions
                        </a>
                        <Link
                            href="#faqs"
                            className="inline-flex items-center gap-2 rounded-xl border border-ivory-50/20 px-6 py-3.5 font-semibold text-ivory-50 hover:bg-ivory-50/10 transition-colors focus-ring"
                        >
                            <FileCheck size={18} />
                            FAQs
                        </Link>
                    </div>

                    {/* Geo badge */}
                    <div className="mt-6 flex items-center gap-2 text-xs text-ivory-100/40">
                        <MapPin size={14} />
                        <span>Offered at Success Point College, Sikar, Rajasthan</span>
                    </div>
                </div>
            </section>

            {/* ─── OVERVIEW ────────────────────────────────────────────────── */}
            <section className="bg-ivory-100 py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="md:col-span-2">
                            <SectionHeading
                                eyebrow="Overview"
                                title={`What you'll learn in ${course.shortTitle}`}
                            />
                            <p className="mt-4 text-base leading-relaxed text-ink-700">{course.overview}</p>
                            <div className="mt-6 flex items-start gap-3 rounded-xl border border-indigo-500/15 bg-ivory-50/80 p-4 text-sm text-ink-600">
                                <Award size={18} className="mt-0.5 shrink-0 text-indigo-500" />
                                <span>
                                    <strong>Certification:</strong> {course.certification}
                                </span>
                            </div>
                            <div className="mt-3 flex items-start gap-3 rounded-xl border border-indigo-500/15 bg-ivory-50/80 p-4 text-sm text-ink-600">
                                <Briefcase size={18} className="mt-0.5 shrink-0 text-indigo-500" />
                                <span>
                                    <strong>Placement Support:</strong> {course.placementSupport}
                                </span>
                            </div>
                        </div>
                        <div className="space-y-4 rounded-2xl bg-ivory-50 p-6 shadow-sm ring-1 ring-indigo-500/10">
                            <h3 className="font-display text-lg font-semibold text-navy-950">Course at a Glance</h3>
                            <dl className="space-y-5 p-2 text-sm">
                                <div className="flex justify-between gap-2 border-b border-ink-200/50 pb-2">
                                    <dt className="text-ink-500">Duration</dt>
                                    <dd className="font-medium text-navy-950">{course.duration}</dd>
                                </div>
                                <div className="flex justify-between gap-5 border-b border-ink-200/50 pb-2">
                                    <dt className="text-ink-500">Eligibility</dt>
                                    <dd className="font-medium text-navy-950">{course.eligibility}</dd>
                                </div>
                                <div className="flex justify-between gap-5 border-b border-ink-200/50 pb-2">
                                    <dt className="text-ink-500">Fee Structure</dt>
                                    <dd className="font-medium text-navy-950">{course.fees}</dd>
                                </div>
                                <div className="flex justify-between gap-5 border-b border-ink-200/50 pb-2">
                                    <dt className="text-ink-500">Salary Range</dt>
                                    <dd className="font-medium text-navy-950">{course.salaryRange}</dd>
                                </div>
                                <div className="flex justify-between pt-1">
                                    <dt className="text-ink-500">Rating</dt>
                                    <dd className="font-medium text-navy-950 flex items-center gap-1">
                                        <Star size={14} className="text-indigo-500 fill-indigo-500" />
                                        {course.rating} / 5.0
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CURRICULUM + SOFTWARE ────────────────────────────────────── */}
            <section className="bg-ivory-50 py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 md:grid-cols-2">
                        {/* Curriculum */}
                        <div>
                            <div className="flex items-center gap-3">
                                <BookOpen size={26} className="text-indigo-500" />
                                <h2 className="font-display text-2xl font-semibold text-navy-950">Curriculum</h2>
                            </div>
                            <p className="mt-1 text-sm text-ink-500">
                                {course.curriculum.length} modules designed for industry relevance
                            </p>
                            <ul className="mt-5 space-y-2.5">
                                {course.curriculum.map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-start gap-3 rounded-lg bg-ivory-100/60 px-4 py-3 text-sm text-ink-700 transition hover:bg-ivory-100"
                                    >
                                        <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-pine-500" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Software + Projects */}
                        <div className="space-y-10">
                            {/* Software */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <Code2 size={26} className="text-indigo-500" />
                                    <h2 className="font-display text-2xl font-semibold text-navy-950">Software Covered</h2>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {course.software.map((tool) => (
                                        <span
                                            key={tool}
                                            className="rounded-full border border-indigo-500/25 bg-ivory-100 px-4 py-2 text-sm font-medium text-ink-700 shadow-sm transition hover:border-indigo-500/50 hover:bg-ivory-50"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Projects */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <Layers size={26} className="text-indigo-500" />
                                    <h2 className="font-display text-2xl font-semibold text-navy-950">Projects You'll Build</h2>
                                </div>
                                <ul className="mt-4 space-y-2.5">
                                    {course.projects.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 rounded-lg bg-ivory-100/60 px-4 py-3 text-sm text-ink-700 transition hover:bg-ivory-100"
                                        >
                                            <Sparkles size={18} className="mt-0.5 shrink-0 text-indigo-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── CAREERS ────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-indigo-950 py-14 md:py-20">
                <div className="absolute inset-0 blueprint-grid opacity-20" aria-hidden="true" />
                <div
                    className="absolute inset-0 bg-gradient-to-t from-indigo-500/5 via-transparent to-transparent"
                    aria-hidden="true"
                />

                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        light
                        eyebrow="Career Path"
                        title="Where this course can take you"
                        description={`Certification: ${course.certification} · Placement: ${course.placementSupport}`}
                    />

                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {course.careers.map((career) => (
                            <div
                                key={career}
                                className="flex items-center gap-3 rounded-xl glass-panel px-5 py-4 text-ivory-50 transition hover:-translate-y-0.5 hover:shadow-glow"
                            >
                                <Target size={18} className="shrink-0 text-indigo-300" />
                                <span className="text-sm font-medium">{career}</span>
                            </div>
                        ))}
                    </div>

                    {/* Salary range highlight */}
                    <div className="mt-8 rounded-2xl border border-indigo-500/20 bg-navy-900/50 p-6 text-center backdrop-blur-sm">
                        <p className="text-sm uppercase tracking-wider text-indigo-300/60">
                            Expected Fresher Salary Range
                        </p>
                        <p className="mt-1 font-display text-2xl font-semibold text-ivory-50">
                            {course.salaryRange}
                        </p>
                        <p className="mt-1 text-xs text-ivory-100/40">
                            * Varies by role, location, and prior experience
                        </p>
                    </div>
                </div>
            </section>

            {/* ─── WHY CHOOSE US ────────────────────────────────────────────── */}
            <section className="bg-ivory-100 py-14 md:py-20">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading
                        eyebrow="Why Success Point"
                        title="Your learning partner in Sikar"
                        description="We combine academic rigour with real‑world practice to make you career‑ready."
                    />
                    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            {
                                icon: <Users size={28} />,
                                title: "Expert Faculty",
                                desc: "Learn from industry professionals with years of experience.",
                            },
                            {
                                icon: <Laptop size={28} />,
                                title: "Practical Labs",
                                desc: "State‑of‑the‑art computer centre with hands‑on training.",
                            },
                            {
                                icon: <Briefcase size={28} />,
                                title: "Placement Support",
                                desc: "Mock interviews, resume building, and campus drives.",
                            },
                            {
                                icon: <MapPin size={28} />,
                                title: "Local to Global",
                                desc: "Based in Sikar, with opportunities across India and remote.",
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl bg-ivory-50 p-6 text-center shadow-sm ring-1 ring-indigo-500/10 transition hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-500">
                                    {item.icon}
                                </div>
                                <h3 className="mt-4 font-display text-lg font-semibold text-navy-950">{item.title}</h3>
                                <p className="mt-1 text-sm text-ink-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQS ────────────────────────────────────────────────────── */}
            <section id="faqs" className="bg-ivory-50 py-14 md:py-20">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <SectionHeading eyebrow="FAQs" title="Common questions" />
                    <div className="mt-8 space-y-4">
                        {course.faqs.map((faq) => (
                            <details
                                key={faq.q}
                                className="group rounded-2xl border border-indigo-500/20 bg-ivory-100/60 p-5 transition hover:border-indigo-500/40"
                            >
                                <summary className="cursor-pointer font-display text-base font-semibold text-navy-950 focus-ring flex items-center justify-between">
                                    <span>{faq.q}</span>
                                    <span className="ml-4 shrink-0 text-indigo-500 transition group-open:rotate-180">
                                        <ChevronRight size={20} />
                                    </span>
                                </summary>
                                <p className="mt-3 text-sm leading-relaxed text-ink-700">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── RELATED COURSES ──────────────────────────────────────────── */}
            {related.length > 0 && (
                <section className="bg-ivory-100 py-14 md:py-20">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <SectionHeading
                            eyebrow="Related Programs"
                            title="Courses students also consider"
                        />
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {related.map((r) => (
                                <CourseCard key={r.slug} course={r} />
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* ─── FINAL CTA ────────────────────────────────────────────────── */}
            <section className="relative overflow-hidden bg-navy-950 py-14 md:py-20">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent"
                    aria-hidden="true"
                />
                <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="font-display text-3xl font-semibold text-ivory-50 sm:text-4xl">
                        Ready to start your journey?
                    </h2>
                    <p className="mt-3 text-base text-ivory-100/60">
                        Join the best {course.shortTitle} course in Sikar, Rajasthan. Limited seats available.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/admissions/form"
                            className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-8 py-4 font-semibold text-navy-950 shadow-glow hover:-translate-y-0.5 transition-transform focus-ring"
                        >
                            Apply Now for {course.shortTitle}
                            <ArrowRight size={18} />
                        </Link>
                        <a
                            href={`tel:${SITE.phones?.[0]?.replace(/\s/g, "") || "+919876543210"}`}
                            className="inline-flex items-center gap-2 rounded-xl glass-panel px-8 py-4 font-semibold text-ivory-50 hover:-translate-y-0.5 transition-transform focus-ring"
                        >
                            <Phone size={18} className="text-indigo-300" />
                            Call for Details
                        </a>
                    </div>
                    <p className="mt-6 text-xs text-ivory-100/30 flex items-center justify-center gap-2">
                        <MapPin size={14} />
                        Success Point College, Sikar, Rajasthan
                    </p>
                </div>
            </section>
        </>
    );
}