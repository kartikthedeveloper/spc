import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import { BLOG_POSTS } from "@/data/blog";
import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import Image from "next/image";
import Script from "next/script";

// ─── METADATA (SEO + Geo + Open Graph + Twitter) ────────────────────────────
export const metadata = {
    title: "Best Coding & Digital Marketing Institute in Sikar | Success Point",
    description:
        "Success Point Sikar offers BCA, MCA, Full Stack Web, Data Analytics & Digital Marketing courses with 100% placement support. Enroll now for career-focused training in Sikar.",
    alternates: { canonical: "/" },
    openGraph: {
        title: "Success Point Sikar -Best Coding & Digital Marketing Institute in Sikar, Rajasthan",
        description:
            "Join Success Point Sikar for industry-ready courses: BCA, MCA, Full Stack Web, Data Analytics & Digital Marketing. Dedicated placement support and modern campus.",
        url: "https://successpoint.com",
        siteName: "Success Point Institute",
        images: [
            {
                url: "/images/third.webp",
                width: 1200,
                height: 630,
                alt: "Success Point Institute Sikar Campus",
            },
        ],
        locale: "hi_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Coding & Digital Marketing Institute in Sikar, Rajasthan | Success Point",
        description:
            "BCA, MCA, Full Stack Web, Data Analytics & Digital Marketing courses with dedicated placement support at Success Point Sikar.",
        images: ["/images/third.webp"],
    },
    // Additional SEO & Geo meta tags (injected via custom <meta> in the component)
};

// ─── GALLERY DATA ──────────────────────────────────────────────────────────────
const gallery = [
    "/images/first.webp",
    "/images/second.webp",
    "/images/third.webp",
    "/images/fourth.webp",
    "/images/fifth.webp",
    "/images/sixth.webp",
];

// ─── JSON‑LD STRUCTURED DATA ──────────────────────────────────────────────────
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        // ── Organization ──
        {
            "@type": "EducationalOrganization",
            "@id": "https://successpoint.com/#organization",
            name: "Success Point Institute",
            url: "https://successpoint.com/",
            logo: "https://successpoint.com/images/logo.webp",
            description:
                "Success Point Sikar offers BCA, MCA, Full Stack Web, Data Analytics & Digital Marketing courses with dedicated placement support.",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Opp. M.K, Memorial School , Piprali Road",
                addressLocality: "Sikar",
                addressRegion: "Rajasthan",
                postalCode: "332001",
                addressCountry: "IN",
            },
            contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9351540357",
                contactType: "Admissions",
                availableLanguage: ["Hindi", "English"],
            },
            sameAs: [
                "https://www.facebook.com/successpointitandmanagementcollege",
                "https://www.instagram.com/success_point_college",
                "https://www.linkedin.com/company/success-point-college-sikar",
            ],
        },
        // ── LocalBusiness (for geo & local SEO) ──
        {
            "@type": "LocalBusiness",
            "@id": "https://successpoint.com/#localbusiness",
            name: "Success Point Institute",
            description:
                "Premier coding and digital marketing institute in Sikar, Rajasthan. Specialising in BCA, MCA, Full Stack Web, Data Analytics, and Digital Marketing.",
            url: "https://successpoint.com/",
            telephone: "+91-9351540357",
            address: {
                "@type": "PostalAddress",
                streetAddress: "Near Collectorate Circle, Opp. City Mall",
                addressLocality: "Sikar",
                addressRegion: "Rajasthan",
                postalCode: "332001",
                addressCountry: "IN",
            },
            geo: {
                "@type": "GeoCoordinates",
                latitude: 27.6075,
                longitude: 75.1489,
            },
            openingHoursSpecification: [
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    opens: "08:00",
                    closes: "20:00",
                },
                {
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: "Sunday",
                    opens: "10:00",
                    closes: "14:00",
                },
            ],
            priceRange: "₹₹",
            paymentAccepted: ["Cash", "Credit Card", "Debit Card", "UPI", "Bank Transfer"],
        },
        // ── Courses (offered) ──
        {
            "@type": "ItemList",
            "@id": "https://successpoint.com/#courses",
            name: "Courses Offered at Success Point Sikar",
            description: "Industry-aligned courses with placement support",
            itemListElement: [
                {
                    "@type": "Course",
                    position: 1,
                    name: "Bachelor of Computer Applications (BCA)",
                    description: "Three-year degree programme covering programming, databases, and web development.",
                    provider: { "@id": "https://successpoint.com/#organization" },
                },
                {
                    "@type": "Course",
                    position: 2,
                    name: "Master of Computer Applications (MCA)",
                    description: "Postgraduate programme focused on advanced programming, data analytics, and system design.",
                    provider: { "@id": "https://successpoint.com/#organization" },
                },
                {
                    "@type": "Course",
                    position: 3,
                    name: "Full Stack Web Development",
                    description: "Comprehensive training on MERN stack, DevOps, and modern frontend/backend technologies.",
                    provider: { "@id": "https://successpoint.com/#organization" },
                },
                {
                    "@type": "Course",
                    position: 4,
                    name: "Digital Marketing",
                    description: "SEO, SEM, social media, content marketing, and analytics with live projects.",
                    provider: { "@id": "https://successpoint.com/#organization" },
                },
                {
                    "@type": "Course",
                    position: 5,
                    name: "Data Analytics",
                    description: "Python, SQL, Power BI, Tableau, and statistical analysis for data-driven decision making.",
                    provider: { "@id": "https://successpoint.com/#organization" },
                },
            ],
        },
        // ── Breadcrumb (homepage) ──
        {
            "@type": "BreadcrumbList",
            "@id": "https://successpoint.com/#breadcrumb",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://successpoint.com/",
                },
            ],
        },
    ],
};

// ─── PAGE COMPONENT ────────────────────────────────────────────────────────────
export default function HomePage() {
    return (
        <>
            {/* ─── Meta Tags (Geo + Additional SEO) ─── */}
            <meta name="geo.region" content="IN-RJ" />
            <meta name="geo.placename" content="Sikar" />
            <meta name="geo.position" content="27.6075;75.1489" />
            <meta name="ICBM" content="27.6075, 75.1489" />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
            <meta name="revisit-after" content="7 days" />
            <meta name="language" content="Hindi, English" />
            <meta name="author" content="Success Point Institute" />
            <link rel="alternate" hrefLang="hi" href="https://successpoint.com/hi" />
            <link rel="alternate" hrefLang="en" href="https://successpoint.com/" />
            <link rel="alternate" hrefLang="x-default" href="https://successpoint.com/" />

            {/* ─── JSON‑LD Structured Data ─── */}
            <Script
                id="schema-org"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                strategy="afterInteractive"
            />

            {/* ─── MAIN CONTENT ────────────────────────────────────────────────── */}
            <main>
                {/* Hero section (contains H1 and primary CTA) */}
                <Hero />

                {/* Stats counter – social proof */}
                <StatsCounter />

                {/* Featured courses – core offering */}
                <FeaturedCourses />

                {/* Why choose us – trust & differentiators */}
                <WhyChooseUs />

                {/* ─── Campus Gallery ─── */}
                <section
                    className="bg-gray-50 py-20"
                    aria-labelledby="gallery-heading"
                >
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="text-center">
                            <h2
                                id="gallery-heading"
                                className="text-4xl font-bold text-gray-900"
                            >
                                Campus Gallery
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                A glimpse of our modern learning environment in Sikar.
                            </p>
                        </div>

                        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                            {gallery.map((img, index) => (
                                <div
                                    key={index}
                                    className="overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                >
                                    <Image
                                        src={img}
                                        alt={`Success Point Institute campus infrastructure – Sikar, Rajasthan – view ${index + 1}`}
                                        width={600}
                                        height={450}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Blog / Career Guidance ─── */}
                <section
                    className="bg-ivory-100 pt-32 pb-20"
                    aria-labelledby="blog-heading"
                >
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mt-5">
                            <SectionHeading
                                eyebrow="Blog"
                                title="Articles on Career Guidance & Course Insights"
                                description="Practical, specific articles for students in Sikar deciding on a course or career path — no filler, just actionable advice."
                            />
                        </div>

                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {BLOG_POSTS.map((post) => (
                                <BlogCard key={post.slug} post={post} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* ─── Final CTA ─── */}
                <CTASection />
            </main>
        </>
    );
}