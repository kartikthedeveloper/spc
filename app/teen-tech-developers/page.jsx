import Link from "next/link";
import ContactForm from "@/components/ContactForm";

import {
  Rocket,
  Code2,
  Sparkles,
  Star,
  Users,
  Calendar,
  Clock,
  Award,
  Zap,
  ChevronRight,
  CheckCircle2,
  Brain,
  Cpu,
  Trophy,
  Globe,
  ArrowRight,
  BookOpen,
  Terminal,
  Layers,
  Database,
  Server,
  GitBranch,
  Shield,
  BarChart3,
  Bot,
  GraduationCap,
  BriefcaseBusiness,
  Linkedin,
  Github,
  FileText,
  MessageSquare,
  MapPin,
  Phone,
} from "lucide-react";

// ======================================================================
// SITE CONSTANTS
// Keep these values consistent across the website.
// ======================================================================

const SITE_URL = "https://successpointsikar.com";

const PAGE_PATH = "/teen-tech-developers";

const BUSINESS_NAME = "Success Point Sikar";

const BUSINESS_ADDRESS = {
  streetAddress: "Piprali Rd, Oppo. M.k. Memorial School",
  addressLocality: "Sikar",
  addressRegion: "Rajasthan",
  postalCode: "332001",
  addressCountry: "IN",
};

const GEO = {
  latitude: 27.6094,
  longitude: 75.1398,
};

const PHONE = "+91-09351540357";

const OG_IMAGE = `${SITE_URL}/images/teen-tech-developers.webp`;

// ======================================================================
// SEO + LOCAL SEO + GEO / AI SEARCH METADATA
// ======================================================================

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title:
    "Teen Coding Classes in Sikar (Age 14–18) | Web Development, AI & Cybersecurity | Success Point",

  description:
    "Teen coding classes in Sikar for students aged 14–18. Learn Python, JavaScript, React, full-stack web development, AI, data analytics, cybersecurity, GitHub and real-world projects at Success Point Sikar.",

  keywords: [
    // ================================================================
    // PRIMARY SEO
    // ================================================================

    "Teen Coding Classes Sikar",
    "Coding Classes for Teens Sikar",
    "Coding Classes for Teenagers Sikar",
    "Advanced Coding Classes Sikar",
    "Programming Classes for Teens Sikar",
    "Teen Computer Classes Sikar",
    "Teen Technology Classes Sikar",
    "Teen Tech Developers Sikar",
    "Best Coding Classes Sikar",
    "Best Coding Institute Sikar",
    "Coding Academy Sikar",
    "Coding Training Institute Sikar",
    "Programming Institute Sikar",
    "Coding Education Sikar",
    "Coding Center Sikar",

    // ================================================================
    // AGE SPECIFIC
    // ================================================================

    "Coding for 14 Year Olds Sikar",
    "Coding for 15 Year Olds Sikar",
    "Coding for 16 Year Olds Sikar",
    "Coding for 17 Year Olds Sikar",
    "Coding for 18 Year Olds Sikar",

    "Programming for 14 Year Olds Sikar",
    "Programming for 15 Year Olds Sikar",
    "Programming for 16 Year Olds Sikar",
    "Programming for 17 Year Olds Sikar",
    "Programming for 18 Year Olds Sikar",

    "Technology Classes for 14 Year Olds",
    "Technology Classes for 15 Year Olds",
    "Technology Classes for 16 Year Olds",
    "Technology Classes for 17 Year Olds",
    "Technology Classes for 18 Year Olds",

    // ================================================================
    // PROGRAMMING
    // ================================================================

    "Python Classes for Teens Sikar",
    "Python Programming for Teens Sikar",
    "Python Classes Sikar",
    "JavaScript Classes for Teens Sikar",
    "JavaScript Programming Sikar",
    "JavaScript Classes Sikar",
    "React Classes Sikar",
    "React Classes for Students Sikar",
    "Programming Classes Sikar",

    // ================================================================
    // WEB DEVELOPMENT
    // ================================================================

    "Web Development Classes Sikar",
    "Web Development for Teens Sikar",
    "Full Stack Development for Teens Sikar",
    "Full Stack Development Classes Sikar",
    "Frontend Development Classes Sikar",
    "Backend Development Classes Sikar",
    "Node.js Classes Sikar",
    "MongoDB Classes Sikar",
    "HTML CSS JavaScript Classes Sikar",
    "MERN Stack Classes for Teens Sikar",

    // ================================================================
    // AI
    // ================================================================

    "AI Classes for Teens Sikar",
    "Artificial Intelligence Classes Sikar",
    "AI for Students Sikar",
    "Generative AI Classes Sikar",
    "Machine Learning for Teens Sikar",
    "AI Programming for Students Sikar",
    "Prompt Engineering Classes Sikar",
    "AI Course for Teenagers Sikar",
    "Artificial Intelligence for Students Sikar",

    // ================================================================
    // DATA
    // ================================================================

    "Data Analytics Classes Sikar",
    "Data Science for Teens Sikar",
    "Python Data Analytics Sikar",
    "Power BI Classes Sikar",
    "SQL Classes for Students Sikar",
    "Data Analytics for Students Sikar",
    "Data Science Classes Sikar",
    "Data Visualization Classes Sikar",

    // ================================================================
    // CYBERSECURITY
    // ================================================================

    "Cybersecurity Classes Sikar",
    "Cybersecurity for Teens Sikar",
    "Cyber Security Classes for Students Sikar",
    "Cyber Security Training Sikar",
    "Ethical Hacking Basics for Teens Sikar",
    "Cybersecurity Course for Teenagers Sikar",
    "Networking Classes Sikar",
    "Linux Classes for Students Sikar",
    "Web Security Classes Sikar",

    // ================================================================
    // PROJECTS + CAREER
    // ================================================================

    "Coding Projects for Teens Sikar",
    "Real World Coding Projects Sikar",
    "Project Based Coding Classes Sikar",
    "Technology Career Exploration Sikar",
    "Computer Science Career Program Sikar",
    "Career Oriented Coding Courses Sikar",
    "Career Preparation for Students Sikar",
    "Portfolio Building for Students Sikar",
    "GitHub Classes for Students Sikar",
    "LinkedIn Skills for Students Sikar",
    "Resume Building for Students Sikar",
    "Technology Career Program Sikar",
    "Computer Science Program for Teens Sikar",

    // ================================================================
    // PARENT SEARCH INTENT
    // ================================================================

    "Best Coding Course for School Students",
    "Best Technology Course for Teenagers",
    "Computer Course for 14 to 18 Year Olds",
    "Technology Course for School Students",
    "Future Skills for Teenagers",
    "Career Oriented Computer Course Sikar",
    "STEM Education Sikar Rajasthan",
    "Coding Bootcamp for Teens Sikar",
    "Weekend Coding Classes Sikar",
    "Summer Coding Camp Sikar",
    "Affordable Coding Classes Sikar",

    // ================================================================
    // NEAR ME
    // ================================================================

    "Coding Classes Near Me Sikar",
    "Programming Classes Near Me Sikar",
    "Computer Classes Near Me Sikar",
    "Teen Coding Near Me Sikar",
    "Python Classes Near Me Sikar",
    "Web Development Classes Near Me Sikar",

    // ================================================================
    // LOCAL SEO
    // ================================================================

    "Best Computer Institute in Sikar",
    "Top Computer Institute in Sikar",
    "Top Computer Classes in Sikar",
    "Best Computer Coaching Sikar",
    "Computer Training Institute Sikar",
    "Computer Science Institute Sikar Rajasthan",
    "Technology Training Institute Sikar Rajasthan",
    "Coding Institute Sikar Rajasthan",
    "Computer Institute Piprali Road Sikar",
    "Coding Classes Piprali Road Sikar",

    // ================================================================
    // BRAND
    // ================================================================

    "Success Point Sikar",
    "Success Point Institute Sikar",
    "Success Point Coding Classes",
    "Success Point Teen Tech Developers",
    "Teen Tech Developers",
  ],

  authors: [
    {
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
  ],

  creator: BUSINESS_NAME,

  publisher: BUSINESS_NAME,

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: `${SITE_URL}${PAGE_PATH}`,
  },

  openGraph: {
    title:
      "Teen Coding Classes in Sikar (Age 14–18) | Web Development, AI & Cybersecurity",

    description:
      "Project-based technology education for teenagers aged 14–18 in Sikar. Learn programming, web development, AI, data analytics, cybersecurity and professional skills.",

    url: `${SITE_URL}${PAGE_PATH}`,

    siteName: BUSINESS_NAME,

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt:
          "Teen Tech Developers coding and technology program at Success Point Sikar",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Teen Coding Classes in Sikar (Age 14–18) | Teen Tech Developers",

    description:
      "Learn Python, JavaScript, React, web development, AI, data analytics, cybersecurity and real-world technology skills in Sikar.",

    images: [OG_IMAGE],
  },

  // ================================================================
  // GEO / LOCAL SEARCH SIGNALS
  // ================================================================

  other: {
    "geo.region": "IN-RJ",

    "geo.placename": "Sikar, Rajasthan",

    "geo.position": `${GEO.latitude};${GEO.longitude}`,

    ICBM: `${GEO.latitude}, ${GEO.longitude}`,
  },
};

// ======================================================================
// STRUCTURED DATA
// SEO + LOCAL SEO + GEO + AI SEARCH
// ======================================================================

function buildJsonLd({ faqs, testimonials }) {
  // ================================================================
  // EDUCATIONAL ORGANIZATION
  // ================================================================

  const organization = {
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
      {
        "@type": "City",
        name: "Sikar",
      },

      {
        "@type": "State",
        name: "Rajasthan",
      },

      {
        "@type": "Country",
        name: "India",
      },
    ],

    knowsAbout: [
      "Programming",
      "Python",
      "JavaScript",
      "React",
      "Web Development",
      "Full Stack Development",
      "Artificial Intelligence",
      "Generative AI",
      "Data Analytics",
      "Power BI",
      "Cybersecurity",
      "GitHub",
      "Technology Careers",
      "Computer Science",
    ],
  };

  // ================================================================
  // COURSE
  // ================================================================

  const course = {
    "@context": "https://schema.org",

    "@type": "Course",

    "@id": `${SITE_URL}${PAGE_PATH}#course`,

    name:
      "Teen Tech Developers – Technology & Coding Program for Age 14–18",

    description:
      "A project-based technology and coding program for teenagers aged 14–18 in Sikar, Rajasthan. Students learn programming, web development, AI, data analytics, cybersecurity, GitHub, portfolio development and technology career exploration.",

    url: `${SITE_URL}${PAGE_PATH}`,

    educationalLevel: "Secondary education",

    coursePrerequisites:
      "Basic computer knowledge is helpful but students can be assessed and placed according to their current skill level.",

    teaches: [
      "Programming fundamentals",
      "JavaScript",
      "Python",
      "HTML",
      "CSS",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "GitHub",
      "Generative AI",
      "Prompt Engineering",
      "AI Ethics",
      "Data Analytics",
      "SQL",
      "Python Pandas",
      "Power BI",
      "Cybersecurity fundamentals",
      "Networking",
      "Linux",
      "Web Security",
      "Portfolio Development",
      "Technology Career Exploration",
      "Communication",
      "Presentation Skills",
    ],

    audience: {
      "@type": "EducationalAudience",

      educationalRole: "student",

      audienceType:
        "Teenagers and school students aged 14–18",
    },

    provider: {
      "@type": "EducationalOrganization",

      name: BUSINESS_NAME,

      url: SITE_URL,
    },

    hasCourseInstance: {
      "@type": "CourseInstance",

      courseMode: "Blended",

      location: {
        "@type": "Place",

        name: BUSINESS_NAME,

        address: {
          "@type": "PostalAddress",

          ...BUSINESS_ADDRESS,
        },

        geo: {
          "@type": "GeoCoordinates",

          latitude: GEO.latitude,

          longitude: GEO.longitude,
        },
      },

      startDate: "2026-09-01",

      duration: "P12M",
    },
  };

  // ================================================================
  // FAQ
  // ================================================================

  const faqPage = {
    "@context": "https://schema.org",

    "@type": "FAQPage",

    mainEntity: faqs.map((faq) => ({
      "@type": "Question",

      name: faq.q,

      acceptedAnswer: {
        "@type": "Answer",

        text: faq.a,
      },
    })),
  };

  // ================================================================
  // BREADCRUMB
  // ================================================================

  const breadcrumb = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: SITE_URL,
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Courses",

        item: `${SITE_URL}/courses`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: "Teen Tech Developers (Age 14–18)",

        item: `${SITE_URL}${PAGE_PATH}`,
      },
    ],
  };

  // ================================================================
  // CAREER PATH ITEM LIST
  // ================================================================

  const careerItemList = {
    "@context": "https://schema.org",

    "@type": "ItemList",

    name: "Technology Career Paths for Teen Students",

    itemListElement: [
      "Full Stack Developer",
      "AI Developer",
      "Data Analyst",
      "Cybersecurity Analyst",
      "UI/UX / Frontend Developer",
    ].map((name, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name,
    })),
  };

  // ================================================================
  // REVIEWS
  // ================================================================

  const reviews =
    testimonials.length > 0
      ? {
        "@context": "https://schema.org",

        "@type": "Course",

        name:
          "Teen Tech Developers – Student Learning Experience",

        provider: {
          "@type": "EducationalOrganization",

          name: BUSINESS_NAME,

          url: SITE_URL,
        },

        review: testimonials.map((testimonial) => ({
          "@type": "Review",

          author: {
            "@type": "Person",

            name: testimonial.name,
          },

          reviewRating: {
            "@type": "Rating",

            ratingValue: testimonial.rating,

            bestRating: "5",
          },

          reviewBody: testimonial.quote,
        })),
      }
      : null;

  return [
    organization,
    course,
    faqPage,
    breadcrumb,
    careerItemList,

    ...(reviews ? [reviews] : []),
  ];
}

// ======================================================================
// PAGE
// ======================================================================

export default function TeenTechDevelopersPage() {
  // ====================================================================
  // CURRICULUM
  // ====================================================================

  const parts = [
    {
      title: "Part 1 – Strong Programming Foundation",

      icon: <Terminal className="h-8 w-8" />,

      items: [
        "JavaScript (ES6+, functions, arrays, objects, async)",
        "Python (functions, OOP, file handling, APIs)",
        "Focus on programming thinking, not syntax",
      ],

      color: "from-indigo-500 to-purple-500",
    },

    {
      title: "Part 2 – Web Development",

      icon: <Globe className="h-8 w-8" />,

      items: [
        "Frontend: HTML, CSS, JavaScript, React",
        "Backend: Node.js, Express.js",
        "Database: MongoDB",
        "Tools: Git, GitHub, Postman",
      ],

      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "Part 3 – AI Literacy & Technical AI",

      icon: <Bot className="h-8 w-8" />,

      items: [
        "Generative AI, Prompt Engineering",
        "AI Ethics & Safety",
        "Build: AI Study Assistant, Quiz Generator, FAQ Bot",
        "Python + AI APIs",
      ],

      color: "from-purple-500 to-pink-500",
    },

    {
      title: "Part 4 – Data & Analytics",

      icon: <BarChart3 className="h-8 w-8" />,

      items: [
        "Excel → SQL → Python + Pandas → Power BI",
        "Build: Student Performance Dashboard",
        "Sales Dashboard, Sports Analytics",
      ],

      color: "from-green-500 to-emerald-500",
    },

    {
      title: "Part 5 – Cybersecurity",

      icon: <Shield className="h-8 w-8" />,

      items: [
        "Password security, 2FA, phishing, privacy",
        "Networking, Linux, Wireshark, CTF",
        "Web security concepts",
      ],

      color: "from-red-500 to-orange-500",
    },

    {
      title: "Part 6 – Career Exposure",

      icon: <GraduationCap className="h-8 w-8" />,

      items: [
        "Technology Career Map (Full Stack, AI, Data, Cyber)",
        "Explore before choosing",
        "Real-world industry insights",
      ],

      color: "from-teal-500 to-cyan-500",
    },

    {
      title: "Part 7 – Professional Foundation",

      icon: <BriefcaseBusiness className="h-8 w-8" />,

      items: [
        "GitHub, Portfolio, LinkedIn basics",
        "Resume basics, Communication, Presentation",
        "Teamwork, Project documentation",
      ],

      color: "from-yellow-500 to-amber-500",
    },
  ];

  // ====================================================================
  // FOCUS AREAS
  // ====================================================================

  const focusAreas = [
    {
      label: "Programming",
      value: "25%",
    },

    {
      label: "Real Projects",
      value: "30%",
    },

    {
      label: "Web Development",
      value: "15%",
    },

    {
      label: "AI + Modern Tech",
      value: "15%",
    },

    {
      label: "Career Exploration",
      value: "10%",
    },

    {
      label: "Professional Skills",
      value: "5%",
    },
  ];

  // ====================================================================
  // CAREER MAP
  // ====================================================================

  const careerMap = [
    {
      role: "Full Stack Developer",
      path: "Web Development",
    },

    {
      role: "AI Developer",
      path: "Python + AI",
    },

    {
      role: "Data Analyst",
      path: "Python + Data",
    },

    {
      role: "Cybersecurity Analyst",
      path: "Networking + Security",
    },

    {
      role: "UI/UX / Frontend",
      path: "Design + Frontend",
    },
  ];

  // ====================================================================
  // BENEFITS
  // ====================================================================

  const benefits = [
    {
      icon: <Brain className="h-6 w-6 text-indigo-600" />,

      title: "Deep Programming Skills",

      desc:
        "Master JavaScript, Python, and modern frameworks to build production-ready applications.",
    },

    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,

      title: "Real-World Projects",

      desc:
        "Build full-stack apps, AI tools, data dashboards, and cybersecurity labs.",
    },

    {
      icon: <Rocket className="h-6 w-6 text-purple-600" />,

      title: "Career Exploration",

      desc:
        "Explore multiple career paths before choosing a specialization.",
    },

    {
      icon: <Award className="h-6 w-6 text-green-600" />,

      title: "Professional Portfolio",

      desc:
        "Graduate with a portfolio, GitHub profile, and polished resume.",
    },
  ];

  // ====================================================================
  // TESTIMONIALS
  // ====================================================================

  const testimonials = [
    {
      name: "Aarav",

      child: "Student, age 16",

      quote:
        "I built a full-stack student management system and an AI chatbot. This program gave me clarity on what I want to pursue in college.",

      rating: 5,
    },

    {
      name: "Priya",

      child: "Student, age 17",

      quote:
        "The career exposure sessions were eye-opening. I now know I want to be a data analyst. The projects made learning fun.",

      rating: 5,
    },

    {
      name: "Rahul",

      child: "Student, age 18",

      quote:
        "I have a GitHub portfolio and a LinkedIn profile that got me noticed by recruiters. This program is a game-changer.",

      rating: 5,
    },
  ];

  // ====================================================================
  // FAQ
  // ====================================================================

  const faqs = [
    {
      q: "My teen already knows some coding. Can they join?",

      a:
        "Yes. We have an assessment to place them at the right level. The program is designed to challenge students at different stages.",
    },

    {
      q: "Will this help with college admissions?",

      a:
        "Absolutely. The projects, portfolio, and career exploration give your teen a competitive edge for college applications and scholarships.",
    },

    {
      q: "How long is the program?",

      a:
        "It's a comprehensive 12–18 month journey, but students can choose flexible tracks based on their goals.",
    },

    {
      q: "What if my teen wants to specialize in a specific area?",

      a:
        "The program allows for specialization after the core foundation. Students can dive deeper into Web Dev, AI, Data, or Cyber.",
    },

    {
      q: "Will they get a certificate and portfolio?",

      a:
        "Yes, they receive a completion certificate and a digital portfolio that includes all their projects and a GitHub profile.",
    },

    {
      q: "Are classes in person or online?",

      a:
        "Both. We have offline classes at our Sikar campus and online options for flexibility.",
    },

    {
      q: "Where are Teen Tech Developers classes conducted in Sikar?",

      a:
        "Teen Tech Developers classes are available at Success Point Sikar on Piprali Road, near M.K. Memorial School, Sikar, Rajasthan. Online learning options are also available.",
    },

    {
      q: "What technologies will teenagers learn?",

      a:
        "Students explore JavaScript, Python, HTML, CSS, React, Node.js, Express.js, MongoDB, Git, GitHub, AI tools and APIs, data analytics, Power BI, networking, Linux and cybersecurity concepts.",
    },

    {
      q: "Is this program suitable for students who are preparing for college?",

      a:
        "Yes. The program focuses on practical programming, real-world projects, technology career exploration, portfolio development, GitHub and professional communication skills.",
    },

    {
      q: "Is Teen Tech Developers only a coding course?",

      a:
        "No. It is a broader technology education program combining programming, web development, AI, data analytics, cybersecurity, projects, career exploration and professional skills.",
    },
  ];

  // ====================================================================
  // JSON-LD
  // ====================================================================

  const jsonLdBlocks = buildJsonLd({
    faqs,
    testimonials,
  });

  // ====================================================================
  // RETURN
  // ====================================================================

  return (
    <section className="bg-white overflow-x-hidden">

      {/* ============================================================
          STRUCTURED DATA
          Google SEO + Local SEO + GEO + AI Search
          ============================================================ */}

      {jsonLdBlocks.map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(block),
          }}
        />
      ))}

      {/* ============================================================
          BREADCRUMB
          ============================================================ */}

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-6 pt-4 text-sm text-gray-500"
      >
        <ol className="flex flex-wrap items-center gap-1">

          <li>
            <Link
              href="/"
              className="hover:text-indigo-700"
            >
              Home
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li>
            <Link
              href="/courses"
              className="hover:text-indigo-700"
            >
              Courses
            </Link>
          </li>

          <li aria-hidden="true">/</li>

          <li
            className="font-medium text-gray-700"
            aria-current="page"
          >
            Teen Tech Developers (Age 14–18)
          </li>

        </ol>
      </nav>

      {/* ============================================================
          HERO
          ============================================================ */}

      <div className="relative overflow-hidden mt-6 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 py-20">

        <div
          className="absolute top-10 left-10 animate-bounce opacity-20"
          aria-hidden="true"
        >
          <Rocket className="h-20 w-20 text-white" />
        </div>

        <div
          className="absolute bottom-10 right-10 animate-pulse opacity-20"
          aria-hidden="true"
        >
          <Bot className="h-24 w-24 text-white" />
        </div>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5"
          aria-hidden="true"
        >
          <Code2 className="h-64 w-64 text-white" />
        </div>

        <div className="relative mx-auto mt-6 max-w-7xl px-6 text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-white backdrop-blur">
            <Sparkles className="h-4 w-4" />

            <span className="font-semibold">
              🚀 Age 14–18 • Teen Tech Developers • Sikar, Rajasthan
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Teen Coding Classes in <br />

            <span className="text-yellow-300">
              Sikar
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-white/90">

            <strong className="text-yellow-200">
              Move from learning code to building real technology.
            </strong>

            <br />

            Learn Python, JavaScript, React, web development, AI,
            data analytics and cybersecurity through real projects
            at{" "}

            <strong className="text-yellow-100">
              Success Point Sikar, Piprali Road, Rajasthan
            </strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

            <Link
              href="#apply-now"
              className="group rounded-full bg-white px-8 py-4 font-bold text-indigo-700 shadow-2xl transition hover:scale-105 hover:shadow-2xl"
            >
              <span className="flex items-center gap-2">

                Enroll in Success Point Sikar

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />

              </span>
            </Link>

            <Link
              href="#programs"
              className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Explore Tech Program
            </Link>

          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white">

            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>200+ Teen Developers</span>
            </div>

            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-300" />
              <span>4.9/5 Student Rating</span>
            </div>

            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span>7 Parts • Career Ready</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>Sikar, Rajasthan</span>
            </div>

          </div>

        </div>
      </div>

      {/* ============================================================
          WHY TEEN TECH DEVELOPERS
          ============================================================ */}

      <div className="py-20 bg-gradient-to-b from-white to-indigo-50">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              Why Teen Tech Developers?
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Explore Technology{" "}
              <span className="text-indigo-600">
                Careers
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              A balanced program that builds deep technical skills
              while exposing students to real-world career paths.
              Teenagers learn by building projects instead of only
              studying theory.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 group-hover:bg-indigo-100">
                  {benefit.icon}
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-gray-600">
                  {benefit.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ============================================================
          CURRICULUM
          ============================================================ */}

      <div
        id="programs"
        className="py-20 bg-white"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              Comprehensive Curriculum
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Your{" "}
              <span className="text-purple-600">
                Tech Journey
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              7 progressive parts covering everything from
              programming and web development to AI, data,
              cybersecurity and professional skills.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {parts.map((part, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${part.color} opacity-0 transition group-hover:opacity-5`}
                  aria-hidden="true"
                />

                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${part.color} p-4 text-white`}
                  aria-hidden="true"
                >
                  {part.icon}
                </div>

                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {part.title}
                </h3>

                <ul className="mt-2 space-y-1">

                  {part.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >

                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 text-green-500 shrink-0"
                        aria-hidden="true"
                      />

                      {item}

                    </li>
                  ))}

                </ul>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ============================================================
          FOCUS AREAS
          ============================================================ */}

      <div className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Our{" "}
              <span className="text-indigo-600">
                Focus
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              A balanced curriculum designed for practical
              learning, real-world projects and future technology
              readiness.
            </p>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">

            {focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-4 text-center shadow-md transition hover:shadow-xl"
              >

                <div className="text-2xl font-extrabold text-indigo-600">
                  {area.value}
                </div>

                <p className="mt-1 text-sm text-gray-600">
                  {area.label}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ============================================================
          CAREER MAP
          ============================================================ */}

      <div className="py-20 bg-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Technology{" "}
              <span className="text-purple-600">
                Career Map
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore different technology career paths before
              choosing a specialization.
            </p>

          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

            {careerMap.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border-2 border-purple-100 bg-white p-6 transition hover:border-purple-400 hover:shadow-lg"
              >

                <div className="text-3xl">
                  🚀
                </div>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {item.role}
                </h3>

                <p className="text-sm text-gray-600">
                  {item.path}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}

      <div className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Student{" "}
              <span className="text-indigo-600">
                Testimonials
              </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Experiences from students learning technology
              through projects and practical development.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >

                <div
                  className="flex gap-1 text-yellow-500"
                  aria-label={`${testimonial.rating} out of 5 stars`}
                >

                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-500"
                      aria-hidden="true"
                    />
                  ))}

                </div>

                <p className="mt-4 text-lg italic text-gray-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-4 border-t pt-4">

                  <p className="font-bold text-gray-900">
                    {testimonial.name}
                  </p>

                  <p className="text-sm text-gray-600">
                    {testimonial.child}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ============================================================
          BATCH DETAILS
          ============================================================ */}

      <div className="py-20 bg-gradient-to-br from-indigo-700 to-purple-700">

        <div className="mx-auto max-w-7xl px-6 text-center text-white">

          <h2 className="text-4xl font-bold md:text-5xl">
            🚀 Teen Tech Developers Batch
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            New batches starting soon at Success Point Sikar.
            Prepare your teenager for the future of technology.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {[
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Start Date",
                value: "September 2026",
              },

              {
                icon: <Clock className="h-8 w-8" />,
                title: "Duration",
                value: "12–18 Months",
              },

              {
                icon: <Users className="h-8 w-8" />,
                title: "Batch Size",
                value: "8–12 Students",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white/10 p-8 backdrop-blur"
              >

                <div className="flex justify-center">
                  {item.icon}
                </div>

                <h3 className="mt-3 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-2 text-2xl font-bold">
                  {item.value}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>

      {/* ============================================================
          LOCATION — LOCAL SEO + GEO
          ============================================================ */}

      <div className="py-16 bg-indigo-50">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-2">

          <div>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-indigo-700 shadow-sm">
              Computer Science Institute            </span>

            <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Success Point Sikar
            </h2>

            <p className="mt-4 flex items-start gap-2 text-gray-700">

              <Globe
                className="mt-1 h-5 w-5 shrink-0 text-indigo-600"
                aria-hidden="true"
              />

              <span>
                 Success Point Sikar is a technology and coding
                program for students aged 14–18 in Sikar,
                Rajasthan. Students explore programming, web
                development, AI, data analytics, cybersecurity
                and technology careers through practical projects.
              </span>

            </p>

            <p className="mt-3 flex items-start gap-2 text-gray-700">

              <MapPin
                className="mt-1 h-5 w-5 shrink-0 text-indigo-600"
                aria-hidden="true"
              />

              <span>
                Success Point Sikar, Piprali Road, Oppo. M.k.
                Memorial School, Sikar, Rajasthan 332001
              </span>

            </p>

            <p className="mt-3 flex items-center gap-2 text-gray-700">

              <Phone
                className="h-5 w-5 shrink-0 text-indigo-600"
                aria-hidden="true"
              />

              <a
                href={`tel:${PHONE}`}
                className="hover:text-indigo-700"
              >
                {PHONE}
              </a>

            </p>

            <p className="mt-4 text-gray-600">
              Offline classes are available at our Sikar campus,
              with online learning options for students who need
              additional flexibility.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <Link
                href="/contact"
                className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Contact Success Point
              </Link>

              <Link
                href="/student-projects"
                className="rounded-full border-2 border-indigo-600 px-6 py-3 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-100"
              >
                Explore Student Projects
              </Link>

            </div>

          </div>

          <div className="overflow-hidden rounded-3xl shadow-lg">

            <iframe
              title="Success Point Sikar Teen Coding Classes location on Piprali Road"
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
          FAQS
          ============================================================ */}

      <div className="py-20 bg-white">

        <div className="mx-auto max-w-4xl px-6">

          <h2 className="text-center text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked{" "}
            <span className="text-indigo-600">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Common questions about Teen Tech Developers,
            coding classes for teenagers and technology education
            at Success Point Sikar.
          </p>

          <div className="mt-10 space-y-4">

            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border-2 bg-white p-6 transition hover:border-indigo-300 hover:shadow-lg"
              >

                <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">

                  <span className="flex items-center gap-2">

                    <ChevronRight
                      className="h-5 w-5 text-indigo-600 transition group-open:rotate-90"
                      aria-hidden="true"
                    />

                    {faq.q}

                  </span>

                </summary>

                <p className="mt-3 pl-7 text-gray-700">
                  {faq.a}
                </p>

              </details>
            ))}

          </div>

        </div>
      </div>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}

      <div
        id="apply-now"
        className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600"
      >

        <div className="mx-auto max-w-4xl px-6">

          <h2 className="mb-6 text-center text-3xl font-bold text-white md:text-4xl">
            Join Teen Coding Classes in Sikar
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-center text-white/80">
            Help your teenager move from consuming technology
            to building technology. Start the Teen Tech Developers
            journey at Success Point Sikar.
          </p>

          <ContactForm />

        </div>

      </div>

    </section>
  );
}