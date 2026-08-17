"use client";

import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Award,
  Trophy,
  Users,
  BriefcaseBusiness,
  Brain,
  GraduationCap,
  Star,
  Calendar,
  MapPin,
  ChevronRight,
  Quote,
  BadgeCheck,
} from "lucide-react";

// ============================================================
//  ACHIEVEMENT DATA
// ============================================================

const stats = [
  { label: "Students Trained", value: "1000+", icon: Users },
  { label: "Awards Won", value: "4+", icon: Trophy },
  { label: "Internships Secured", value: "44+", icon: BriefcaseBusiness },
  { label: "College Placements", value: "30+", icon: GraduationCap },
];

const achievements = [
  {
    student: "Aarav Sharma",
    age: "15",
    achievement: "Completed Web Development Project",
    description:
      "Built a responsive website as part of the web development course and successfully presented the project.",
    year: "2026",
    type: "Project",
    icon: <Trophy size={20} />,
    color: "amber",
  },
  {
    student: "Priya Patel",
    age: "17",
    achievement: "Created a Working AI Project",
    description:
      "Created a simple AI-based project using modern AI tools and demonstrated it during the final project presentation.",
    year: "2026",
    type: "AI Project",
    icon: <Brain size={20} />,
    color: "blue",
  },
  {
    student: "Rohan Kumar",
    age: "18",
    achievement: "Completed Full Stack Project",
    description:
      "Successfully developed and completed a full stack web application using the technologies covered in the course.",
    year: "2025",
    type: "Project",
    icon: <BriefcaseBusiness size={20} />,
    color: "green",
  },
  {
    student: "Abhilasha Mathur",
    age: "19",
    achievement: "Participated in College Hackathon",
    description:
      "Participated in a college-level hackathon and worked with a team to develop and present a technology-based solution.",
    year: "2026",
    type: "Hackathon",
    icon: <Award size={20} />,
    color: "purple",
  },
  {
    student: "Vikram Singh",
    age: "21",
    achievement: "Completed Internship Project",
    description:
      "Successfully completed an internship project and gained practical experience working on real-world development tasks.",
    year: "2025",
    type: "Internship",
    icon: <BriefcaseBusiness size={20} />,
    color: "indigo",
  },
  {
    student: "Ananya Gupta",
    age: "17",
    achievement: "Top Performer in Course",
    description:
      "Achieved one of the highest scores in the batch and consistently performed well in practical assignments.",
    year: "2026",
    type: "Academic",
    icon: <GraduationCap size={20} />,
    color: "rose",
  },
  {
    student: "Karan Mehta",
    age: "19",
    achievement: "Built Data Analytics Dashboard",
    description:
      "Created an interactive data analytics dashboard using real-world datasets as part of the course project.",
    year: "2026",
    type: "Data Analytics",
    icon: <Star size={20} />,
    color: "cyan",
  },
  {
    student: "Divya Jain",
    age: "18",
    achievement: "Successfully Completed Certification",
    description:
      "Successfully completed the course certification after completing practical assignments and the final project.",
    year: "2026",
    type: "Certification",
    icon: <GraduationCap size={20} />,
    color: "emerald",
  },
];
const testimonials = [
  {
    quote:
      "My son Aarav gained confidence and skills that helped him win a national Olympiad. The mentorship here is exceptional.",
    author: "Mr. Sharma",
    location: "Sikar, Rajasthan",
  },
  {
    quote:
      "I landed my internship at Noida because of the rigorous training and project-based learning at Success Point Sikar",
    author: "Karan Mehta",
    location: "Sikar",
  },
  {
    quote:
      "The career launch program helped me build a portfolio that got me placed in a top MNC. Highly recommended!",
    author: "Vikram Singh",
    location: "Sikar, Rajasthan",
  },
];

// ============================================================
//  PAGE COMPONENT
// ============================================================

export default function AchievementsPage() {
  const seoTitle =
    "Student Achievements & Success Stories | Coding ecosystem in Sikar, Rajasthan";
  const seoDescription =
    "See how our students from Sikar, Rajasthan have won Olympiads, secured internships ,built AI projects, and landed top jobs. Real success stories.";

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta
          name="keywords"
          content="student achievements Sikar, coding success stories Rajasthan, computer science education Sikar, best coding classes Sikar, student placements Sikar, internships Sikar"
        />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Sikar" />
        <meta name="geo.position" content="27.6108;75.1406" />
        <meta name="ICBM" content="27.6108, 75.1406" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://successpointsikar.com/achievements" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* JSON-LD for local business (Organization) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Success Point Sikar",
              description:
                "Computer Science Education Ecosystem for Kids, Teens, and College Students in Sikar, Rajasthan.",
              url: "https://successpointsikar.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Sikar",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "27.6108",
                longitude: "75.1406",
              },
              sameAs: [
                "https://www.facebook.com/successpointsikar",
                "https://www.instagram.com/successpointsikar",
              ],
            }),
          }}
        />
        {/* JSON-LD for BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://successpointsikar.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Achievements",
                  item: "https://successpointsikar.com/achievements",
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-slate-50">
        {/* ============================================================
            HERO SECTION (with local geo)
            ============================================================ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
          {/* Background blobs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <motion.div
              animate={{
                x: [-50, 50, -50],
                y: [-20, 20, -20],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]"
            />
            <motion.div
              animate={{
                x: [40, -40, 40],
                y: [20, -20, 20],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-300/20 blur-[150px]"
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-28 lg:px-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
            >
              <MapPin size={16} />
              Success Point Sikar, Rajasthan
              <Sparkles size={17} />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Student{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Achievements
              </span>
              <br />
              from Sikar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
            >
              Our students from Sikar, Rajasthan have gone on to win
              Olympiads, secure internships at top companies, build
              groundbreaking projects, and land dream jobs. Here are their
              stories.
            </motion.p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white/70 p-4 text-center backdrop-blur"
                  >
                    <Icon className="mx-auto h-6 w-6 text-blue-600" />
                    <p className="mt-2 text-2xl font-extrabold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500">{stat.label}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ============================================================
            ACHIEVEMENTS GRID
            ============================================================ */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Success Stories
            </p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Our Students'{" "}
              <span className="text-blue-600">Milestones</span>
            </h2>
            <p className="mt-3 text-slate-600">
              From local competitions to global recognition – every
              achievement inspires the next.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((item, idx) => {
              const colorMap= {
                amber: {
                  bg: "bg-amber-50",
                  border: "border-amber-200",
                  text: "text-amber-700",
                  light: "bg-amber-100/60",
                  ring: "ring-amber-200",
                },
                blue: {
                  bg: "bg-blue-50",
                  border: "border-blue-200",
                  text: "text-blue-700",
                  light: "bg-blue-100/60",
                  ring: "ring-blue-200",
                },
                green: {
                  bg: "bg-green-50",
                  border: "border-green-200",
                  text: "text-green-700",
                  light: "bg-green-100/60",
                  ring: "ring-green-200",
                },
                purple: {
                  bg: "bg-purple-50",
                  border: "border-purple-200",
                  text: "text-purple-700",
                  light: "bg-purple-100/60",
                  ring: "ring-purple-200",
                },
                indigo: {
                  bg: "bg-indigo-50",
                  border: "border-indigo-200",
                  text: "text-indigo-700",
                  light: "bg-indigo-100/60",
                  ring: "ring-indigo-200",
                },
                rose: {
                  bg: "bg-rose-50",
                  border: "border-rose-200",
                  text: "text-rose-700",
                  light: "bg-rose-100/60",
                  ring: "ring-rose-200",
                },
                cyan: {
                  bg: "bg-cyan-50",
                  border: "border-cyan-200",
                  text: "text-cyan-700",
                  light: "bg-cyan-100/60",
                  ring: "ring-cyan-200",
                },
                emerald: {
                  bg: "bg-emerald-50",
                  border: "border-emerald-200",
                  text: "text-emerald-700",
                  light: "bg-emerald-100/60",
                  ring: "ring-emerald-200",
                },
              };
              const colors = colorMap[item.color] || colorMap.blue;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className={`group rounded-2xl border ${colors.border} bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg} ${colors.text}`}
                    >
                      {item.icon}
                    </div>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-extrabold text-slate-900">
                    {item.student}
                  </h3>
                  <p className="text-sm text-slate-500">{item.age} years old</p>

                  <h4 className="mt-2 text-base font-bold text-blue-700">
                    {item.achievement}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                    <Calendar size={14} />
                    <span>{item.year}</span>
                    <span className="mx-1">•</span>
                    <MapPin size={14} />
                    <span>Sikar, Rajasthan</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            TESTIMONIALS
            ============================================================ */}
        <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-cyan-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                What They Say
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                Parent & Student <span className="text-blue-600">Testimonials</span>
              </h2>
            </motion.div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.5 }}
                  className="rounded-2xl bg-white p-6 shadow-md"
                >
                  <Quote className="h-8 w-8 text-blue-300" />
                  <p className="mt-2 text-slate-700 italic">“{t.quote}”</p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 font-bold">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {t.author}
                      </p>
                      <p className="text-xs text-slate-500">{t.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            CTA
            ============================================================ */}
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-10 text-center text-white md:p-16"
          >
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Ready to Write Your Own Success Story?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg text-blue-50">
              Join the best computer science ecosystem in Sikar, Rajasthan.
              Start your journey from first code to first career today.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
              >
                About our Journey
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}