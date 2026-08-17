"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Code2,
  Rocket,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const journey = [
  {
    age: "Age 6–9",
    title: "Explore",
    focus: "Logic & Creativity",
    description:
      "Build computer confidence, logical thinking, creativity, digital skills and an early interest in coding.",
    icon: Brain,
  },
  {
    age: "Age 10–13",
    title: "Create",
    focus: "Coding & Projects",
    description:
      "Learn coding fundamentals with Scratch, HTML, CSS, JavaScript and beginner Python through projects.",
    icon: Code2,
  },
  {
    age: "Age 14–18",
    title: "Develop",
    focus: "Development, AI & Technology",
    description:
      "Explore web development, Python, AI, data analytics, cybersecurity and real-world technology projects.",
    icon: Rocket,
  },
  {
    age: "College",
    title: "Specialize",
    focus: "Career Skills",
    description:
      "Choose a career-focused path such as Full Stack Development, AI, Data Analytics or Cybersecurity.",
    icon: GraduationCap,
  },
  {
    age: "Career",
    title: "Launch",
    focus: "Jobs, Internships & Freelancing",
    description:
      "Build a portfolio, GitHub profile, resume and interview skills to become career ready.",
    icon: BriefcaseBusiness,
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

export default function SuccessPointEcosystem() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 sm:py-28">
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        <motion.div
          animate={{
            x: [-30, 30, -30],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [30, -30, 30],
            y: [20, -20, 20],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[130px]"
        />
      </div>

      <div className="relative mx-auto max-w-9xl px-6 lg:px-8">

        {/* ================= INTRO ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
            <Sparkles size={16} />
            More Than a Computer Institute in Sikar
          </div>

          <h2 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            A Complete
            <br />

            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Computer Science Ecosystem
            </span>

            <br />

            for Every Stage of Learning
          </h2>

          <p className="mx-auto mt-7 max-w-4xl text-lg leading-8 text-slate-300 sm:text-xl">
            <strong className="text-white">Success Point Sikar</strong> is more
            than a computer institute. We provide a structured technology
            learning journey for{" "}
            <strong className="text-white">
              kids, school students, teenagers and college students
            </strong>{" "}
            — helping them move from basic digital skills and coding to
            advanced technology, projects and career preparation.
          </p>
        </motion.div>

        {/* ================= CORE MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-14 max-w-5xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl sm:p-10">
            <div className="absolute left-1/2 top-0 h-1 w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

            <div className="text-center">
              <p className="text-lg font-bold uppercase tracking-[0.2em] text-blue-400">
                One Learning Ecosystem
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= JOURNEY ================= */}

        <div className="mt-20">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              The Success Point Learning Journey
            </p>

            <h3 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Explore → Create → Develop → Specialize → Launch
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              A progressive learning path designed to grow with every student.
            </p>
          </motion.div>

          <div className="relative">

            {/* Connecting line */}

            <div className="absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent lg:block" />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

              {journey.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >

                    {/* Icon */}

                    <div className="relative z-10 mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-2xl border border-white/10 bg-slate-900 shadow-xl transition-all duration-300 group-hover:border-blue-400/40">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 group-hover:bg-blue-500 group-hover:text-white">
                        <Icon size={26} />
                      </div>
                    </div>

                    {/* Card */}

                    <div className="mt-5 h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 group-hover:border-blue-400/20 group-hover:bg-white/[0.06]">

                      <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        {item.age}
                      </p>

                      <h4 className="mt-2 text-xl font-extrabold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm font-semibold text-slate-300">
                        {item.focus}
                      </p>

                      <p className="mt-4 text-sm leading-6 text-slate-400">
                        {item.description}
                      </p>
                    </div>

                    {/* Arrow */}

                    {index < journey.length - 1 && (
                      <div className="absolute -right-3 top-[36px] z-20 hidden h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-slate-900 text-blue-400 lg:flex">
                        <ArrowRight size={14} />
                      </div>
                    )}

                  </motion.div>
                );
              })}

            </div>
          </div>
        </div>

        {/* ================= WHAT WE OFFER ================= */}

        <div className="mt-40 max-w-6xl grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
              What Students Experience
            </p>

            <h3 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Learning that grows
              <br />

              <span className="text-blue-400">
                with the student.
              </span>
            </h3>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              From the first coding activity to advanced projects and career
              preparation, students get opportunities to learn, practice,
              build and demonstrate their skills.
            </p>

            <Link
              href="/kids-code-in-sikar"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Explore the kids learning journey
              <ArrowRight size={18} />
            </Link>
             <Link
              href="/junior-code-creators"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Explore the Junior Code learning journey
              <ArrowRight size={18} />
            </Link> <Link
              href="/teen-tech-developers"
              className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Explore the Teen Age learning journey
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {ecosystemPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4"
              >
                <CheckCircle2
                  size={20}
                  className="shrink-0 text-emerald-400"
                />

                <span className="text-sm font-medium text-slate-300">
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
}