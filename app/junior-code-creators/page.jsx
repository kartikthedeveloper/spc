
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
  Rocket,
  Gamepad2,
  Code2,
  Palette,
  Sparkles,
  Star,
  Users,
  Calendar,
  Clock,
  Award,
  Zap,
  ChevronRight,
  CheckCircle2,
  Laptop,
  Brain,
  Cpu,
  Trophy,
  Smartphone,
  Globe,
  ArrowRight,
  BookOpen,
  Monitor,
  Terminal,
  Layers,
  Database,
  Server,
  GitBranch,
} from "lucide-react";

export const metadata = {
  title: "Junior Code Creators (Age 10–13) | Coding Classes in Sikar",
  description:
    "Learn coding by building real games, websites, and apps. JavaScript, Python, and project-based learning for kids aged 10–13 in Sikar. Enroll now!",
  keywords: [
    // Primary Local
    "Coding Classes for Kids Sikar",
    "Coding Classes for School Students Sikar",
    "Best Coding Institute Sikar",
    "Programming Classes for Kids Sikar",
    "Python for Kids Sikar",
    "Web Development for Kids Sikar",
    "JavaScript for Kids Sikar",
    "HTML CSS Classes Sikar",
    // Age specific
    "Coding for 10 Year Olds",
    "Coding for 11 Year Olds",
    "Coding for 12 Year Olds",
    "Coding for 13 Year Olds",
    "Scratch to Python Sikar",
    "Junior Code Creators Sikar",
    // Technologies
    "Scratch Programming Classes",
    "Python Classes for Kids Sikar",
    "Web Development for Kids",
    "Game Development for Kids",
    "STEM Education Sikar",
    // Parent intent
    "Best Coding Classes for Children",
    "Affordable Coding Classes Sikar",
    "Weekend Coding Classes Sikar",
    "Summer Coding Camp Sikar",
    // Local
    "Best Computer Institute in Sikar",
    "Top Computer Institute in Sikar",
    "Top Computer Classes in Sikar",
    "Best Computer Coaching Sikar",
    "Computer Training Institute Sikar",
    "Programming Institute Sikar",
    "Coding Education Sikar",
    "Coding Center Sikar",
    // Brand
    "Success Point Institute Sikar",
    "Success Point Coding Classes",
    "Success Point Junior Code Creators",
  ],
  alternates: {
    canonical: "https://successpointsikar.com/junior-code-creators",
  },
  openGraph: {
    title: "Junior Code Creators (Age 10–13) | Coding Classes Sikar",
    description:
      "Build games, websites, and apps with JavaScript and Python. Project-based coding for kids in Sikar. Enroll today!",
    url: "https://successpointsikar.com/junior-code-creators",
    type: "website",
  },
};

export default function JuniorCodeCreatorsPage() {
  // ============================
  //  DATA – PRODUCT ARCHITECTURE
  // ============================

  const phases = [
    {
      title: "Phase 1 – Programming Logic",
      icon: <Brain className="h-8 w-8" />,
      items: [
        "Scratch – advanced concepts",
        "Variables, conditions, loops",
        "Events, functions, debugging",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Phase 2 – Web Development",
      icon: <Globe className="h-8 w-8" />,
      items: ["HTML", "CSS", "Responsive design", "Building a personal website"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Phase 3 – JavaScript",
      icon: <Terminal className="h-8 w-8" />,
      items: [
        "Variables, conditions, loops",
        "Functions, DOM manipulation",
        "Events, building interactive apps",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Phase 4 – Python",
      icon: <Code2 className="h-8 w-8" />,
      items: [
        "Variables, loops, functions",
        "Lists, dictionaries",
        "Mini programs and automation",
      ],
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const tools = [
    "VS Code",
    "GitHub basics",
    "Browser DevTools",
    "Online code editors",
  ];

  const projects = [
    { name: "Scratch Game", level: "Beginner" },
    { name: "Personal Website", level: "Intermediate" },
    { name: "Calculator (JavaScript)", level: "JavaScript" },
    { name: "Quiz App", level: "JavaScript" },
    { name: "Number Guessing Game (Python)", level: "Python" },
    { name: "Student Result Program", level: "Python" },
    { name: "Personal Coding Portfolio", level: "Final Project" },
  ];

  const benefits = [
    {
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      title: "Strong Programming Foundation",
      desc: "Master core programming concepts with both visual (Scratch) and text-based languages (Python, JavaScript).",
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: "Real Project Experience",
      desc: "Build 5–10 complete projects that can be showcased to family and future employers.",
    },
    {
      icon: <GitBranch className="h-6 w-6 text-orange-600" />,
      title: "Professional Tools",
      desc: "Learn to use VS Code, GitHub, and DevTools – the same tools used by professional developers.",
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: "Portfolio Ready",
      desc: "By the end, each student has a personal coding portfolio with all their projects.",
    },
  ];

  const testimonials = [
    {
      name: "Mrs. Agarwal",
      child: "Parent of Rohan (age 12)",
      quote:
        "Rohan built his own website and a quiz app within 3 months. He's now more confident in math and logic. Highly recommend!",
      rating: 5,
    },
    {
      name: "Mr. Singh",
      child: "Parent of Kavya (age 11)",
      quote:
        "Kavya loves the Python projects. She created a number guessing game and showed it to her whole class. Great program.",
      rating: 5,
    },
    {
      name: "Mrs. Jain",
      child: "Parent of Arjun (age 13)",
      quote:
        "The structured approach – from Scratch to Python – really helped Arjun understand concepts deeply. He's ready for advanced courses.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "Does my child need any prior coding experience?",
      a: "No, but knowing Scratch or some block coding is helpful. We start with advanced Scratch to transition smoothly to text-based languages.",
    },
    {
      q: "What if my child already knows some Python?",
      a: "We can assess and place them at the appropriate phase. We have flexible paths for different skill levels.",
    },
    {
      q: "How long is the program?",
      a: "The complete journey is 6–12 months, depending on the student's pace. Each phase builds on the previous.",
    },
    {
      q: "Will my child get a certificate?",
      a: "Yes, a completion certificate and a digital portfolio of all projects built.",
    },
    {
      q: "Are classes offline or online?",
      a: "We offer both. Offline at our Sikar campus and online for flexibility.",
    },
  ];

  return (
    <section className="bg-white overflow-x-hidden">
      {/* ============================================================
          HERO – Playful & Techy
          ============================================================ */}
      <div className="relative overflow-hidden mt-14 bg-gradient-to-br from-green-600 via-teal-500 to-blue-600 py-20">
        <div className="absolute top-10 left-10 animate-bounce opacity-20">
          <Code2 className="h-20 w-20 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-pulse opacity-20">
          <Globe className="h-24 w-24 text-white" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Terminal className="h-64 w-64 text-white" />
        </div>

        <div className="relative mx-auto mt-6 max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-white backdrop-blur">
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold">💻 Age 10–13 • Junior Code Creators</span>
          </div>

          <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Junior Code <br />
            <span className="text-yellow-300">Creators</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-white/90">
            <strong className="text-yellow-200">
              Learn coding by building real games, websites, and apps.
            </strong>
            <br />
            From Scratch to Python – a project-based journey for kids aged 10–13.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#apply-now"
              className="group rounded-full bg-white px-8 py-4 font-bold text-teal-700 shadow-2xl transition hover:scale-105 hover:shadow-2xl"
            >
              <span className="flex items-center gap-2">
                Enroll Now
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
              <Users className="h-5 w-5" />
              <span>100+ Young Creators</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-300" />
              <span>4.9/5 Parent Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              <span>5+ Projects • Portfolio</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================
          WHY JUNIOR CODE CREATORS – Benefits
          ============================================================ */}
      <div className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Why Junior Code Creators?
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              From <span className="text-green-600">Scratch</span> to{" "}
              <span className="text-teal-600">Python</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              A structured path that builds a strong foundation in programming,
              web development, and problem solving.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-50 group-hover:bg-green-100">
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
          CURRICULUM – Phases & Tools
          ============================================================ */}
      <div id="programs" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
              Curriculum Roadmap
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Learn <span className="text-teal-600">Step by Step</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Four progressive phases that take your child from block coding to
              building real-world applications.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-0 transition group-hover:opacity-5`}
                />
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${phase.color} p-4 text-white`}
                >
                  {phase.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {phase.title}
                </h3>
                <ul className="mt-2 space-y-1">
                  {phase.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-gray-50 to-teal-50 p-8">
            <h3 className="text-2xl font-bold text-gray-900">
              🛠️ Professional Tools Used
            </h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-teal-700 shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-4 text-gray-600">
              Students learn industry-standard tools that prepare them for
              professional development.
            </p>
          </div>
        </div>
      </div>

      {/* ============================================================
          PROJECTS SHOWCASE
          ============================================================ */}
      <div className="py-20 bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Projects Your Child Will <span className="text-teal-600">Build</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              5–10 projects that form a complete portfolio by the end of the program.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white p-6 shadow-md transition hover:shadow-xl hover:-translate-y-1"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span className="font-bold text-gray-900">{project.name}</span>
                </div>
                <span className="mt-1 inline-block rounded-full bg-teal-100 px-2 py-0.5 text-xs font-semibold text-teal-700">
                  {project.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          TESTIMONIALS
          ============================================================ */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              What Parents Say <span className="text-teal-600">About Us</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-gradient-to-br from-green-50 to-teal-50 p-8 shadow-lg"
              >
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500" />
                  ))}
                </div>
                <p className="mt-4 text-lg italic text-gray-700">
                  "{testimonial.quote}"
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
      <div className="py-20 bg-gradient-to-br from-teal-700 to-blue-700">
        <div className="mx-auto max-w-7xl px-6 text-center text-white">
          <h2 className="text-4xl font-bold md:text-5xl">
            🚀 Batch Details
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Limited seats. Enroll now to secure your child's spot.
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
                value: "6–12 Months",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Batch Size",
                value: "10–12 Students",
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-3xl bg-white/10 p-8 backdrop-blur">
                <div className="flex justify-center">{item.icon}</div>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-2xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          FAQS
          ============================================================ */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border-2 bg-white p-6 transition hover:border-teal-300 hover:shadow-lg"
              >
                <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-teal-600 transition group-open:rotate-90" />
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
          CTA – Contact Form
          ============================================================ */}
      <div id="apply-now" className="py-20 bg-gradient-to-br from-teal-600 to-blue-600">
        <div className="mx-auto max-w-4xl px-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}