import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  Rocket,
  Gamepad2,
  TrendingUp,
  BarChart3,
  Code2,
  Palette,
  Bot,
  Sparkles,
  Star,
  Users,
  Calendar,
  Clock,
  Award,
  Zap,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Laptop,
  Brain,
  Cpu,
  Trophy,
  Heart,
  Smartphone,
  Globe,
  ArrowRight,
  BookOpen,
  Paintbrush,
  Puzzle,
  Monitor,
} from "lucide-react";

// ======================================================================
// SITE CONSTANTS — update these once if the address / phone / socials
// change anywhere else on the site, keep them in sync.
// ======================================================================
const SITE_URL = "https://successpointsikar.com";
const PAGE_PATH = "/little-tech-explorers";
const BUSINESS_NAME = "Success Point Sikar";
const BUSINESS_ADDRESS = {
  streetAddress: "Piprali Rd, Oppo. M.k. Memorial School",
  addressLocality: "Sikar",
  addressRegion: "Rajasthan",
  postalCode: "332001", // TODO: confirm exact PIN code
  addressCountry: "IN",
};
const GEO = { latitude: 27.6094, longitude: 75.1398 }; // Sikar city center — replace with exact campus coordinates from Google Maps for best local SEO signal
const PHONE = "+91-09351540357"; // TODO: add real number — required for LocalBusiness schema + click-to-call SEO value
const OG_IMAGE = `${SITE_URL}//images/little-tech-explorer.webp`; // TODO: add a real 1200x630 OG image

// ============================
//  METADATA — SEO + Local SEO + GEO (AI engine) optimization
// ============================
export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Kids Coding Classes in Sikar (Age 6–9) | Little Tech Explorers – Success Point",
  description:
    "Best kids coding & computer classes in Sikar, Rajasthan for age 6–9. Scratch, Blockly, logic building & creative projects at Success Point Sikar, Piprali Road, Sikar. Book a free trial class today.",
  keywords: [
    "Kids Coding Classes Sikar",
    "Coding Classes for Kids Sikar",
    "Coding Course for Kids Sikar",
    "Best Kids Coding Institute Sikar",
    "Best Coding Institute Sikar",
    "Coding Academy Sikar",
    "Coding Training Institute Sikar",
    "Programming Classes for Kids Sikar",
    "Computer Classes for Kids Sikar",
    "Coding Coaching Sikar",
    "Computer Coaching Sikar",
    "Coding Institute Near Me Sikar",
    "Coding Classes Near Me Sikar",
    "Kids Coding Near Me Sikar",
    "Coding for 6 Year Olds Sikar",
    "Coding for 7 Year Olds Sikar",
    "Coding for 8 Year Olds Sikar",
    "Coding for 9 Year Olds Sikar",
    "Scratch Programming for Kids Sikar",
    "Scratch Coding Classes Sikar",
    "STEM Education Sikar Rajasthan",
    "STEM Classes Sikar",
    "Best Coding Classes for Children Rajasthan",
    "Affordable Coding Classes Sikar",
    "Weekend Coding Classes Sikar",
    "Summer Coding Camp Sikar",
    "Digital Skills for Kids Sikar",
    "Technology Classes for Kids Sikar Rajasthan",
    "Best Computer Institute in Sikar",
    "Top Computer Institute in Sikar",
    "Computer Training Institute Sikar Piprali Road",
    "Success Point Institute Sikar",
    "Success Point Kids Coding Sikar",
    "Little Tech Explorers Sikar",
  ],
  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },
  openGraph: {
    title: "Kids Coding Classes in Sikar (Age 6–9) | Little Tech Explorers",
    description:
      "Fun, project-based coding & computer classes for kids aged 6–9 at Success Point Sikar, Piprali Road, Sikar, Rajasthan. Enroll for the September 2026 batch.",
    url: `${SITE_URL}${PAGE_PATH}`,
    siteName: BUSINESS_NAME,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Kids learning coding at Success Point Sikar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kids Coding Classes in Sikar (Age 6–9) | Little Tech Explorers",
    description:
      "Fun, project-based coding classes for kids aged 6–9 in Sikar, Rajasthan. Scratch, Blockly, logic & creativity — enroll now.",
    images: [OG_IMAGE],
  },
  // Local SEO / GEO meta tags — help map & AI-answer engines pin the exact city
  other: {
    "geo.region": "IN-RJ",
    "geo.placename": "Sikar, Rajasthan",
    "geo.position": `${GEO.latitude};${GEO.longitude}`,
    ICBM: `${GEO.latitude}, ${GEO.longitude}`,
  },
};

// ============================
//  STRUCTURED DATA (JSON-LD) — Course, LocalBusiness, FAQ, Breadcrumb
// This is what powers rich results + AI/GEO answer engines (ChatGPT,
// Perplexity, Google AI Overviews) understanding who/what/where you are.
// ============================
function buildJsonLd({ faqs, testimonials }) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    image: OG_IMAGE,
    telephone: PHONE,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      ...BUSINESS_ADDRESS,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Sikar" },
      { "@type": "State", name: "Rajasthan" },
    ],
    sameAs: [
      // TODO: add real social profile URLs (Facebook, Instagram, YouTube, Google Business Profile)
    ],
  };

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Little Tech Explorers – Kids Coding Program (Age 6–9)",
    description:
      "A 4-level, project-based coding and digital skills program for children aged 6-9, covering computer basics, creative tools, Scratch/Blockly coding, and logical thinking, at Success Point Institute in Sikar, Rajasthan.",
    provider: {
      "@type": "EducationalOrganization",
      name: BUSINESS_NAME,
      sameAs: SITE_URL,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Blended",
      location: {
        "@type": "Place",
        name: BUSINESS_NAME,
        address: { "@type": "PostalAddress", ...BUSINESS_ADDRESS },
      },
      startDate: "2026-09-01",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Courses", item: `${SITE_URL}/courses` },
      {
        "@type": "ListItem",
        position: 3,
        name: "Little Tech Explorers (Age 6–9)",
        item: `${SITE_URL}${PAGE_PATH}`,
      },
    ],
  };

  const reviews = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Little Tech Explorers – Kids Coding Program",
    brand: { "@type": "Brand", name: BUSINESS_NAME },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: testimonials.length,
      bestRating: "5",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: { "@type": "Rating", ratingValue: t.rating, bestRating: "5" },
      reviewBody: t.quote,
    })),
  };

  return [localBusiness, course, faqPage, breadcrumb, reviews];
}

export default function KidsCodingPage() {
  // ============================
  //  DATA FROM PRODUCT ARCHITECTURE
  // ============================

  const curriculumAreas = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Computer Skills",
      items: [
        "Computer basics",
        "Keyboard & mouse",
        "Files & folders",
        "Internet basics",
        "Digital safety",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Paintbrush className="h-8 w-8" />,
      title: "Creative Tools",
      items: [
        "Paint",
        "Canva basics",
        "PowerPoint / Google Slides",
        "Digital storytelling",
      ],
      color: "from-pink-500 to-orange-500",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Coding (Scratch & Blockly)",
      items: [
        "ScratchJr",
        "Scratch",
        "Blockly",
        "Animation",
        "Game creation",
        "Interactive stories",
      ],
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Puzzle className="h-8 w-8" />,
      title: "Logic & Problem Solving",
      items: [
        "Patterns",
        "Sequencing",
        "Algorithms",
        "Debugging",
        "Creative thinking",
      ],
      color: "from-green-500 to-emerald-500",
    },
  ];

  const projects = [
    "Interactive Story",
    "Animation",
    "Simple Game",
    "Quiz",
    "Digital Poster",
    "Presentation",
  ];

  const levels = [
    {
      level: "Level 1",
      name: "Digital Explorer",
      description: "Learn computer basics, digital safety, and creative tools.",
    },
    {
      level: "Level 2",
      name: "Creative Thinker",
      description: "Build presentations, digital art, and storytelling.",
    },
    {
      level: "Level 3",
      name: "Little Coder",
      description: "Start coding with Scratch Jr and Blockly.",
    },
    {
      level: "Level 4",
      name: "Game Creator",
      description: "Build your own games and interactive projects.",
    },
  ];

  const benefits = [
    {
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      title: "Develops Logical Thinking",
      desc: "Children learn to break problems into steps and think systematically.",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "Boosts Creativity",
      desc: "Coding is a canvas for imagination. Kids build stories, games, and art.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Builds Collaboration",
      desc: "Group projects teach teamwork and communication.",
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: "Future Ready",
      desc: "Early exposure to technology builds confidence for the future.",
    },
  ];

  const testimonials = [
    {
      name: "Mrs. Sharma",
      child: "Parent, Sikar",
      quote:
        "My son used to just play games on the tablet. Now he builds his own games! The change in his confidence is amazing.",
      rating: 5,
    },
    {
      name: "Mr. Patel",
      child: "Parent, Sikar",
      quote:
        "She loves the creative projects. She made a digital story about her family and presented it to us. Wonderful experience.",
      rating: 5,
    },
    {
      name: "Mrs. Gupta",
      child: "Parent, Sikar",
      quote:
        "The logical thinking approach has helped him in math as well. He's more organized and curious about how things work.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "Does my child need any prior computer knowledge?",
      a: "Not at all! Our program starts with the very basics—keyboard, mouse, and simple computer usage. We build from there.",
    },
    {
      q: "What if my child already knows Scratch?",
      a: "We have different levels. Your child can start at a higher level after an assessment. We ensure every child learns at their own pace.",
    },
    {
      q: "How long is the course?",
      a: "The complete journey is 3–6 months, divided into 4 levels. Each level builds on the previous one.",
    },
    {
      q: "Will my child get a certificate?",
      a: "Yes! Each child receives a completion certificate and a portfolio of projects they've built.",
    },
    {
      q: "Are classes online or offline?",
      a: "We offer both! Offline classes at our Sikar campus (Piprali Road) and online options for flexibility.",
    },
    {
      q: "Where is Success Point Institute located in Sikar?",
      a: "We're located on Piprali Road, Sikar, Rajasthan — easily reachable from across the city. Parents from nearby areas of Sikar district regularly bring their children for weekend batches.",
    },
  ];

  const jsonLdBlocks = buildJsonLd({ faqs, testimonials });

  return (
    <section className="bg-white overflow-x-hidden">
      {/* Structured data for Google rich results + AI/GEO answer engines */}
      {jsonLdBlocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}

      {/* Breadcrumb nav — visible, crawlable internal links (also helps offpage/internal linking + UX) */}
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-4 text-sm text-gray-500">
        <ol className="flex flex-wrap items-center gap-1">
          <li>
            <Link href="/" className="hover:text-purple-700">Home</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/courses" className="hover:text-purple-700">Courses</Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-gray-700" aria-current="page">
            Little Tech Explorers (Age 6–9)
          </li>
        </ol>
      </nav>

      {/* ============================================================
          HERO SECTION – Colorful & Playful for Young Kids
          ============================================================ */}
      <div className="relative overflow-hidden mt-6 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 py-20">
        {/* Floating shapes */}
        <div className="absolute top-10 left-10 animate-bounce opacity-20" aria-hidden="true">
          <Rocket className="h-20 w-20 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-pulse opacity-20" aria-hidden="true">
          <Gamepad2 className="h-24 w-24 text-white" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5" aria-hidden="true">
          <Code2 className="h-64 w-64 text-white" />
        </div>

        <div className="relative mx-auto mt-6 max-w-7xl px-6 text-center">
          {/* Badge with age */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-white backdrop-blur">
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold">🧒 Age 6–9 • Little Tech Explorers • Sikar, Rajasthan</span>
          </div>

          <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Kids Coding Classes in <br />
            <span className="text-yellow-300">Sikar</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-white/90">
            <strong className="text-yellow-200">
              Your child will learn to think, create and use technology — not just consume it.
            </strong>
            <br />
            Fun, project-based coding &amp; computer classes for kids aged 6–9 at{" "}
            <strong className="text-yellow-100">Success Point Institute, Piprali Road, Sikar</strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#apply-now"
              className="group rounded-full bg-white px-8 py-4 font-bold text-purple-700 shadow-2xl transition hover:scale-105 hover:shadow-2xl"
            >
              <span className="flex items-center gap-2">
                Book Free Trial Class in Sikar
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="#programs"
              className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              View Program
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" aria-hidden="true" />
              <span>50+ Young Explorers in Sikar</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-300" aria-hidden="true" />
              <span>4.9/5 Parent Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" aria-hidden="true" />
              <span>4 Levels • 6–9 Years</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              <span>Piprali Road, Sikar</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          WHY KIDS SHOULD CODE – Benefits Section
          ============================================================ */}
      <div className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Why Little Tech Explorers?
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Screen Time → <span className="text-blue-600">Skill Time</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              At this age, we focus on building a strong foundation in logic,
              creativity, and digital literacy — not just coding. Success Point
              Institute is Sikar&apos;s trusted destination for early childhood
              technology education.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 group-hover:bg-blue-100">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          CURRICULUM – What They Learn
          ============================================================ */}
      <div id="programs" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              Curriculum
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              What Will Your Child <span className="text-purple-600">Learn?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              A balanced mix of computer skills, creative tools, coding, and
              logic — taught in small batches at our Sikar campus.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {curriculumAreas.map((area, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 transition group-hover:opacity-5`}
                  aria-hidden="true"
                />
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${area.color} p-4 text-white`}
                  aria-hidden="true"
                >
                  {area.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {area.title}
                </h3>
                <ul className="mt-2 space-y-1">
                  {area.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Projects section */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8">
            <h3 className="text-2xl font-bold text-gray-900">
              🎯 Projects Your Child Will Build
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {projects.map((project, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-purple-700 shadow-sm"
                >
                  {project}
                </span>
              ))}
            </div>
            <p className="mt-4 text-gray-600">
              Each project reinforces skills and builds a portfolio to showcase
              to family and friends.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================
          LEVEL PROGRESSION
          ============================================================ */}
      <div className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Learning <span className="text-indigo-600">Journey</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              4 progressive levels that take your child from absolute beginner to
              confident creator.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {levels.map((level, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute -top-4 left-6 rounded-full bg-indigo-600 px-4 py-1 text-sm font-bold text-white">
                  {level.level}
                </div>
                <h3 className="mt-4 text-2xl font-bold text-gray-900">
                  {level.name}
                </h3>
                <p className="mt-2 text-gray-600">{level.description}</p>
                {idx < levels.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-indigo-300" aria-hidden="true">
                    <ChevronRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          TESTIMONIALS – Parents Speak
          ============================================================ */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              What Sikar Parents Say <span className="text-blue-600">About Us</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-lg"
              >
                <div className="flex gap-1 text-yellow-500" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 text-lg italic text-gray-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-4 border-t pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.child}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          BATCH DETAILS
          ============================================================ */}
      <div className="py-20 bg-gradient-to-br from-blue-700 to-purple-700">
        <div className="mx-auto max-w-7xl px-6 text-center text-white">
          <h2 className="text-4xl font-bold md:text-5xl">
            🚀 Batch Details — Sikar Campus
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            New batches starting soon at Success Point Institute, Piprali Road,
            Sikar. Give your child the best start.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "New Start Date",
                value: "September 2026",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Duration",
                value: "3–6 Months",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Batch Size",
                value: "8–10 Students",
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-3xl bg-white/10 p-8 backdrop-blur">
                <div className="flex justify-center" aria-hidden="true">{item.icon}</div>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-2xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          LOCATION — Local SEO block (address, map, service area)
          ============================================================ */}
      <div className="py-16 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm">
              Visit Us in Sikar
            </span>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Success Point Sikar
            </h2>
            <p className="mt-3 flex items-start gap-2 text-gray-700">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              Piprali Road, Oppo. M.k. Memorial School, Sikar, Rajasthan 332001
            </p>
            <p className="mt-2 flex items-center gap-2 text-gray-700">
              <Phone className="h-5 w-5 shrink-0 text-blue-600" aria-hidden="true" />
              <a href={`tel:${PHONE}`} className="hover:text-blue-700">{PHONE}</a>
            </p>
            <p className="mt-4 text-gray-600">
              We welcome families from across Sikar city and nearby areas of
              Sikar district. Both offline batches at our campus and online
              batches are available for kids who can&apos;t travel in.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get Directions &amp; Contact
              </Link>
              <Link
                href="/student-projects"
                className="rounded-full border-2 border-blue-600 px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-100"
              >
                Students Projects
              </Link>
            </div>
          </div>
          {/* Embedded map improves local-SEO dwell time + gives parents a real directions tool.
              Replace the query below with the exact Google Business Profile listing name. */}
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <iframe
              title="Success Point Institute location on Piprali Road, Sikar"
              src="https://www.google.com/maps?q=Success+Point+Institute+Piprali+Road+Sikar+Rajasthan&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* ============================================================
          FAQs
          ============================================================ */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border-2 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg"
              >
                <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-blue-600 transition group-open:rotate-90" aria-hidden="true" />
                    {faq.q}
                  </span>
                </summary>
                <p className="mt-3 pl-7 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          CALL TO ACTION – Contact Form
          ============================================================ */}
      <div id="apply-now" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 text-center text-3xl font-bold text-white md:text-4xl">
            Book a Free Trial Class in Sikar
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}