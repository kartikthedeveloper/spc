
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  Code2,
  Rocket,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  CheckCircle2,
  Orbit,
  Layers3,
  WandSparkles,
} from "lucide-react";

const journey = [
  {
    age: "AGE 06 — 09",
    number: "01",
    title: "Explore",
    focus: "Logic & Creativity",
    description:
      "Build computer confidence, logical thinking, creativity, digital skills and an early interest in coding.",
    icon: Brain,
    gradient: "from-sky-400 to-cyan-500",
    tint: "bg-sky-50",
    color: "text-sky-700",
    tags: ["Digital Skills", "Logic Games", "Creativity"],
  },
  {
    age: "AGE 10 — 13",
    number: "02",
    title: "Create",
    focus: "Coding & Projects",
    description:
      "Learn coding fundamentals with Scratch, HTML, CSS, JavaScript and beginner Python through projects.",
    icon: Code2,
    gradient: "from-violet-400 to-indigo-500",
    tint: "bg-violet-50",
    color: "text-violet-700",
    tags: ["Scratch", "Web Development", "Python"],
  },
  {
    age: "AGE 14 — 18",
    number: "03",
    title: "Develop",
    focus: "AI & Modern Technology",
    description:
      "Explore web development, Python, AI, data analytics, cybersecurity and real-world technology projects.",
    icon: Rocket,
    gradient: "from-fuchsia-400 to-violet-500",
    tint: "bg-fuchsia-50",
    color: "text-fuchsia-700",
    tags: ["AI", "Cybersecurity", "Data Analytics"],
  },
  {
    age: "COLLEGE",
    number: "04",
    title: "Specialize",
    focus: "Career-focused Skills",
    description:
      "Choose a career-focused path such as Full Stack Development, AI, Data Analytics or Cybersecurity.",
    icon: GraduationCap,
    gradient: "from-amber-400 to-orange-500",
    tint: "bg-amber-50",
    color: "text-amber-700",
    tags: ["Full Stack", "AI", "Career Skills"],
  },
  {
    age: "CAREER",
    number: "05",
    title: "Launch",
    focus: "Jobs, Internships & Freelancing",
    description:
      "Build a portfolio, GitHub profile, resume and interview skills to become career ready.",
    icon: BriefcaseBusiness,
    gradient: "from-emerald-400 to-teal-500",
    tint: "bg-emerald-50",
    color: "text-emerald-700",
    tags: ["Portfolio", "GitHub", "Interview Prep"],
  },
];

const ecosystemPoints = [
  "Age-based Computer Science learning",
  "Project-based practical training",
  "Coding, Web Development and Programming",
  "AI, Data Analytics and Cybersecurity exposure",
  "Student projects, challenges and tech events",
  "Career guidance, portfolio and internship preparation",
];

const learningLinks = [
  {
    href: "/kids-code-in-sikar",
    label: "Explore the Kids Learning Journey",
  },
  {
    href: "/junior-code-creators",
    label: "Explore Junior Code Creators",
  },
  {
    href: "/teen-tech-developers",
    label: "Explore Teen Tech Developers",
  },
];

export default function SuccessPointEcosystem() {
  return (
    <section
      id="learning-ecosystem"
      className="relative isolate overflow-hidden bg-[#f7f9ff] py-20 text-slate-800 sm:py-28 lg:py-32"
    >
      {/* Background glow and floating shapes */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-sky-200/50 blur-[100px]" />

        <div className="absolute -left-32 top-[35%] h-80 w-80 rounded-full bg-violet-200/40 blur-[100px]" />

        <div className="absolute -right-32 bottom-[8%] h-96 w-96 rounded-full bg-cyan-200/40 blur-[110px]" />

        <motion.div
          animate={{
            x: [0, 18, 0],
            y: [0, -24, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[12%] top-[12%] h-16 w-16 rounded-2xl border border-white/90 bg-white/50 shadow-[10px_10px_30px_rgba(148,163,184,0.2),-8px_-8px_24px_rgba(255,255,255,0.9)] backdrop-blur-xl"
        />

        <motion.div
          animate={{
            x: [0, -18, 0],
            y: [0, 22, 0],
            rotate: [0, -10, 0],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[18%] left-[8%] h-10 w-10 rounded-full border border-white/90 bg-white/60 shadow-[8px_8px_22px_rgba(148,163,184,0.18),-6px_-6px_18px_rgba(255,255,255,0.9)] backdrop-blur-lg"
        />
      </div>

      <div className="mx-auto max-w-9xl px-5 sm:px-8 lg:px-10">
        {/* Hero section */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/75 px-4 py-2 text-xs font-bold tracking-[0.13em] text-indigo-700 shadow-[5px_5px_14px_rgba(148,163,184,0.16),-5px_-5px_14px_rgba(255,255,255,0.95)] backdrop-blur-xl sm:text-sm">
            <Sparkles size={16} className="text-violet-500" />
            MORE THAN A COMPUTER INSTITUTE IN SIKAR
          </div>

          <h2 className="mt-7 text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-5xl">
            A Complete
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 bg-clip-text pb-2 text-transparent">
              Computer Science Campus
            </span>
            <span className="mt-3 block text-3xl font-bold tracking-tight text-slate-700 sm:text-4xl lg:text-5xl">
              for Every Age of Learning in Sikar
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            <strong className="font-bold text-slate-900">
              Success Point Sikar
            </strong>{" "}
            helps kids, school students, teenagers and college students move
            from digital basics and coding to advanced technology, real-world
            projects and career preparation.
          </p>
        </motion.div>

 

        {/* Vertical zigzag journey */}
        <div className="mx-auto mt-20 max-w-5xl sm:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-violet-700 sm:text-sm">
              The Success Point Learning Journey
            </p>

            <h3 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Explore <span className="text-slate-300">→</span> Create{" "}
              <span className="text-slate-300">→</span> Develop{" "}
              <span className="text-slate-300">→</span> Specialize{" "}
              <span className="text-slate-300">→</span> Launch
            </h3>

          </motion.div>

          <div className="relative">
            {/* Timeline rail */}
            <div className="absolute bottom-8 left-[23px] top-8 w-px bg-gradient-to-b from-sky-300 via-violet-300 to-emerald-300 md:left-1/2 md:-translate-x-1/2" />

            <motion.div
              animate={{ opacity: [0.25, 0.8, 0.25] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-8 left-[21px] top-8 w-[5px] rounded-full bg-gradient-to-b from-sky-300/30 via-violet-300/40 to-emerald-300/30 blur-[3px] md:left-1/2 md:-translate-x-1/2"
            />

            <div className="space-y-8 md:space-y-12">
              {journey.map((item, index) => {
                const Icon = item.icon;
                const isLeft = index % 2 === 0;

                return (
                  <motion.div
                    key={item.number}
                    initial={{
                      opacity: 0,
                      x: isLeft ? -24 : 24,
                      y: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.04,
                    }}
                    className={`relative grid grid-cols-[48px_minmax(0,1fr)] items-start gap-4 md:grid-cols-[1fr_76px_1fr] md:gap-5 ${
                      !isLeft
                        ? "md:[&>div:first-child]:order-3 md:[&>div:nth-child(2)]:order-2 md:[&>div:last-child]:order-1"
                        : ""
                    }`}
                  >
                    {/* Number node */}
                    <div className="relative z-10 flex justify-center md:col-start-2 md:row-start-1">
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                          rotate: 4,
                        }}
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-gradient-to-br ${item.gradient} text-sm font-black text-white shadow-lg ring-4 ring-[#f7f9ff] md:h-[68px] md:w-[68px] md:rounded-[1.4rem]`}
                      >
                        {item.number}
                      </motion.div>
                    </div>

                    {/* Journey card */}
                    <div
                      className={`min-w-0 md:row-start-1 ${
                        isLeft
                          ? "md:col-start-1 md:text-right"
                          : "md:col-start-3 md:text-left"
                      }`}
                    >
                      <motion.div
                        whileHover={{
                          y: -5,
                          scale: 1.008,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        className="group relative overflow-hidden rounded-[1.7rem] border border-white/95 bg-white/70 p-5 text-left shadow-[10px_10px_30px_rgba(148,163,184,0.17),-8px_-8px_24px_rgba(255,255,255,0.95)] backdrop-blur-2xl transition-shadow duration-300 hover:shadow-[16px_18px_40px_rgba(148,163,184,0.24),-8px_-8px_24px_rgba(255,255,255,0.95)] sm:p-7"
                      >
                        <div
                          className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-[0.10] blur-2xl transition-opacity duration-300 group-hover:opacity-25`}
                        />

                        <div className="relative">
                          <div className="flex items-start justify-between gap-3">
                            <div
                              className={`inline-flex items-center gap-2 rounded-full ${item.tint} px-3 py-1.5 text-[10px] font-extrabold tracking-[0.1em] ${item.color} sm:text-xs`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${item.gradient}`}
                              />
                              {item.age}
                            </div>

                            <div
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${item.tint} ${item.color} shadow-[inset_3px_3px_7px_rgba(148,163,184,0.12),inset_-3px_-3px_7px_rgba(255,255,255,0.95)]`}
                            >
                              <Icon size={22} />
                            </div>
                          </div>

                          <h4 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                            {item.title}
                          </h4>

                          <p
                            className={`mt-1 text-sm font-bold ${item.color} sm:text-base`}
                          >
                            {item.focus}
                          </p>

                          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                            {item.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="rounded-lg border border-white bg-white/80 px-2.5 py-1.5 text-[11px] font-semibold text-slate-600 shadow-sm sm:text-xs"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Desktop step marker */}
                    <div
                      className={`hidden items-center md:flex md:row-start-1 ${
                        isLeft
                          ? "md:col-start-3 md:justify-start"
                          : "md:col-start-1 md:justify-end"
                      }`}
                    >
                      <div className="flex items-center gap-2 rounded-full border border-white/90 bg-white/70 px-3 py-2 text-xs font-bold text-slate-500 shadow-sm backdrop-blur-lg">
                        <span
                          className={`h-2 w-2 rounded-full bg-gradient-to-r ${item.gradient}`}
                        />
                        STEP {item.number}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Student experience and benefits */}
        <div className="mx-auto mt-24 grid max-w-6xl items-center gap-10 lg:mt-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white/80 text-violet-700 shadow-[6px_6px_16px_rgba(148,163,184,0.17),-5px_-5px_14px_rgba(255,255,255,0.95)]">
              <WandSparkles size={23} />
            </div>

            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-violet-700 sm:text-sm">
              What Students Experience
            </p>

            <h3 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Learning that grows
              <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                with the student.
              </span>
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              From the first coding activity to advanced projects and career
              preparation, students get opportunities to learn, practice,
              build and demonstrate their skills.
            </p>

            <div className="mt-7 flex flex-col items-start gap-3">
              {learningLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex max-w-full items-center gap-2 rounded-full border border-white bg-white/75 px-4 py-2.5 text-sm font-bold text-slate-700 shadow-[5px_5px_14px_rgba(148,163,184,0.13),-4px_-4px_12px_rgba(255,255,255,0.9)] backdrop-blur-lg transition-all hover:-translate-y-0.5 hover:text-violet-700"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Benefits glass panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-sky-200/50 via-violet-200/40 to-cyan-200/50 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/95 bg-white/70 p-4 shadow-[14px_14px_38px_rgba(148,163,184,0.2),-12px_-12px_32px_rgba(255,255,255,0.95)] backdrop-blur-2xl sm:p-6">
              <div className="mb-4 flex items-center justify-between gap-3 px-1">
                <div>
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-slate-500">
                    The Success Point Advantage
                  </p>
                  <p className="mt-1 text-lg font-black text-slate-900">
                    Skills for the Real World
                  </p>
                </div>

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-lg shadow-violet-200">
                  <Layers3 size={21} />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {ecosystemPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="flex min-h-[76px] items-start gap-3 rounded-2xl border border-white/90 bg-white/70 p-4 shadow-[4px_4px_12px_rgba(148,163,184,0.11),-3px_-3px_10px_rgba(255,255,255,0.9)]"
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 shadow-[inset_2px_2px_5px_rgba(148,163,184,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.95)]">
                      <CheckCircle2 size={17} />
                    </span>

                    <span className="text-sm font-semibold leading-6 text-slate-700">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final call to action */}
      
      </div>
    </section>
  );
}
