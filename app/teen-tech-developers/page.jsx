
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
} from "lucide-react";

export const metadata = {
  title: "Teen Tech Developers (Age 14–18) | Advanced Coding Classes Sikar",
  description:
    "Build real technology, explore AI, web development, data, and cybersecurity. Career exposure and professional projects for teens in Sikar. Enroll now!",
  keywords: [
    // Primary Local
    "Coding Classes for Teens Sikar",
    "Advanced Coding Classes Sikar",
    "Web Development Classes Sikar",
    "AI Classes for Teens Sikar",
    "Python for Teens Sikar",
    "JavaScript Classes Sikar",
    "React Classes Sikar",
    "Data Science for Teens Sikar",
    "Cybersecurity Classes Sikar",
    // Age specific
    "Coding for 14 Year Olds",
    "Coding for 15 Year Olds",
    "Coding for 16 Year Olds",
    "Coding for 17 Year Olds",
    "Coding for 18 Year Olds",
    "Teen Tech Developers Sikar",
    // Technologies
    "Full Stack Development for Teens",
    "AI and Machine Learning for Teens",
    "Data Analytics for Teens",
    "Cybersecurity for Teens",
    "STEM Education Sikar",
    "Coding Bootcamp for Teens",
    // Parent & student intent
    "Best Coding Classes for Teens",
    "Affordable Coding Classes Sikar",
    "Weekend Coding Classes Sikar",
    "Summer Coding Camp Sikar",
    "Career Oriented Coding Courses",
    "Technology Career Exploration",
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
    "Success Point Teen Tech Developers",
    "Success Point Coding Classes",
  ],
  alternates: {
    canonical: "https://successpointsikar.com/teen-tech-developers",
  },
  openGraph: {
    title: "Teen Tech Developers (Age 14–18) | Advanced Coding Sikar",
    description:
      "Move from learning code to building real technology. Explore web, AI, data, and cyber careers. Project-based learning in Sikar.",
    url: "https://successpointsikar.com/teen-tech-developers",
    type: "website",
  },
};

export default function TeenTechDevelopersPage() {
  // ============================
  //  DATA – PRODUCT ARCHITECTURE
  // ============================

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

  const focusAreas = [
    { label: "Programming", value: "25%" },
    { label: "Real Projects", value: "30%" },
    { label: "Web Development", value: "15%" },
    { label: "AI + Modern Tech", value: "15%" },
    { label: "Career Exploration", value: "10%" },
    { label: "Professional Skills", value: "5%" },
  ];

  const careerMap = [
    { role: "Full Stack Developer", path: "Web Development" },
    { role: "AI Developer", path: "Python + AI" },
    { role: "Data Analyst", path: "Python + Data" },
    { role: "Cybersecurity Analyst", path: "Networking + Security" },
    { role: "UI/UX / Frontend", path: "Design + Frontend" },
  ];

  const benefits = [
    {
      icon: <Brain className="h-6 w-6 text-indigo-600" />,
      title: "Deep Programming Skills",
      desc: "Master JavaScript, Python, and modern frameworks to build production-ready applications.",
    },
    {
      icon: <Layers className="h-6 w-6 text-blue-600" />,
      title: "Real-World Projects",
      desc: "Build full-stack apps, AI tools, data dashboards, and cybersecurity labs.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-purple-600" />,
      title: "Career Exploration",
      desc: "Explore multiple career paths before choosing a specialization.",
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: "Professional Portfolio",
      desc: "Graduate with a portfolio, GitHub profile, and polished resume.",
    },
  ];

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

  const faqs = [
    {
      q: "My teen already knows some coding. Can they join?",
      a: "Yes. We have an assessment to place them at the right level. The program is designed to challenge students at different stages.",
    },
    {
      q: "Will this help with college admissions?",
      a: "Absolutely. The projects, portfolio, and career exploration give your teen a competitive edge for college applications and scholarships.",
    },
    {
      q: "How long is the program?",
      a: "It's a comprehensive 12–18 month journey, but students can choose flexible tracks based on their goals.",
    },
    {
      q: "What if my teen wants to specialize in a specific area?",
      a: "The program allows for specialization after the core foundation. Students can dive deeper into Web Dev, AI, Data, or Cyber.",
    },
    {
      q: "Will they get a certificate and portfolio?",
      a: "Yes, they receive a completion certificate and a digital portfolio that includes all their projects and a GitHub profile.",
    },
    {
      q: "Are classes in person or online?",
      a: "Both. We have offline classes at our Sikar campus and online options for flexibility.",
    },
  ];

  return (
    <section className="bg-white overflow-x-hidden">
      {/* ============================================================
          HERO – Dynamic & Tech-Focused
          ============================================================ */}
      <div className="relative overflow-hidden mt-14 bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 py-20">
        <div className="absolute top-10 left-10 animate-bounce opacity-20">
          <Rocket className="h-20 w-20 text-white" />
        </div>
        <div className="absolute bottom-10 right-10 animate-pulse opacity-20">
          <Bot className="h-24 w-24 text-white" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Code2 className="h-64 w-64 text-white" />
        </div>

        <div className="relative mx-auto mt-6 max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-white backdrop-blur">
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold">🚀 Age 14–18 • Teen Tech Developers</span>
          </div>

          <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Teen Tech <br />
            <span className="text-yellow-300">Developers</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-white/90">
            <strong className="text-yellow-200">
              Move from learning code to building real technology.
            </strong>
            <br />
            Explore web development, AI, data, cybersecurity – and discover
            your career path.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#apply-now"
              className="group rounded-full bg-white px-8 py-4 font-bold text-indigo-700 shadow-2xl transition hover:scale-105 hover:shadow-2xl"
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
          </div>
        </div>
      </div>

      {/* ============================================================
          WHY TEEN TECH DEVELOPERS – Benefits
          ============================================================ */}
      <div className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              Why Teen Tech Developers?
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Explore Technology <span className="text-indigo-600">Careers</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              A balanced program that builds deep technical skills while exposing
              students to real‑world career paths.
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
                <p className="mt-2 text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================
          CURRICULUM – 7 Parts
          ============================================================ */}
      <div id="programs" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              Comprehensive Curriculum
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Your <span className="text-purple-600">Tech Journey</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              7 progressive parts covering everything from programming to
              professional skills.
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
                />
                <div
                  className={`inline-flex rounded-2xl bg-gradient-to-br ${part.color} p-4 text-white`}
                >
                  {part.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {part.title}
                </h3>
                <ul className="mt-2 space-y-1">
                  {part.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 shrink-0" />
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
          FOCUS AREAS – Pie chart representation
          ============================================================ */}
      <div className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              Our <span className="text-indigo-600">Focus</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              A balanced curriculum designed for real‑world readiness.
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
                <p className="mt-1 text-sm text-gray-600">{area.label}</p>
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
              Technology <span className="text-purple-600">Career Map</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Explore different paths and find your calling.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {careerMap.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border-2 border-purple-100 bg-white p-6 transition hover:border-purple-400 hover:shadow-lg"
              >
                <div className="text-3xl">🚀</div>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {item.role}
                </h3>
                <p className="text-sm text-gray-600">{item.path}</p>
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
              Student <span className="text-indigo-600">Testimonials</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white p-8 shadow-lg"
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
      <div className="py-20 bg-gradient-to-br from-indigo-700 to-purple-700">
        <div className="mx-auto max-w-7xl px-6 text-center text-white">
          <h2 className="text-4xl font-bold md:text-5xl">
            🚀 Batch Details
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            New batches starting soon. Prepare your teen for a technology career.
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
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border-2 bg-white p-6 transition hover:border-indigo-300 hover:shadow-lg"
              >
                <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-indigo-600 transition group-open:rotate-90" />
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
      <div id="apply-now" className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="mx-auto max-w-4xl px-6">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}