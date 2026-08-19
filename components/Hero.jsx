"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Brain,
  Code2,
  Rocket,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

const journey = [
  {
    age: "Age 6–9",
    title: "Explore",
    subtitle: "Logic + Creativity",
    description: "Computer basics, digital creativity, Scratch & problem solving.",
    icon: Brain,
  },
  {
    age: "Age 10–13",
    title: "Create",
    subtitle: "Coding + Projects",
    description: "HTML, CSS, JavaScript, Python & real beginner projects.",
    icon: Code2,
  },
  {
    age: "Age 14–18",
    title: "Develop",
    subtitle: "Development + AI",
    description: "Web development, Python, AI, data, cyber & career exposure.",
    icon: Rocket,
  },
  {
    age: "College Students",
    title: "Specialize",
    subtitle: "Career Technology",
    description: "Full Stack, AI, Data, Cyber Security & professional projects.",
    icon: GraduationCap,
  },
  {
    age: "Career",
    title: "Launch",
    subtitle: "Job + Internship",
    description: "Portfolio, GitHub, interviews, internships & freelancing.",
    icon: BriefcaseBusiness,
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* ================= BACKGROUND ================= */}
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

      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28 lg:px-8">
        {/* ================= HERO TOP ================= */}

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                6+
              </span>

              Year Kids to College Career Technology Ecosystem in Sikar
              <Sparkles size={17} />
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              From First Code
              <br />

              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                to First Career
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-6 max-w-xl text-lg leading-8 text-slate-600"
            >
              A complete tech learning journey for{" "}
              <strong className="text-slate-900">
                kids, teens and college students
              </strong>
              — from creativity and coding to development, AI,
              specialization and career readiness in Sikar.
            </motion.p>

            {/* Journey line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-7 flex flex-wrap items-center gap-2 text-sm font-bold"
            >
              <span className="text-blue-600">Explore</span>
              <ArrowRight size={15} className="text-slate-400" />

              <span className="text-indigo-600">Create</span>
              <ArrowRight size={15} className="text-slate-400" />

              <span className="text-cyan-600">Develop</span>
              <ArrowRight size={15} className="text-slate-400" />

              <span className="text-violet-600">Specialize</span>
              <ArrowRight size={15} className="text-slate-400" />

              <span className="text-emerald-600">Launch</span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                About Us
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* ================= RIGHT VISUAL ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="relative hidden min-h-[460px] items-center justify-center lg:flex"
          >
            {/* Glow */}
            <div className="absolute h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-3xl" />

            {/* Central Journey Circle */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 flex h-[330px] w-[330px] flex-col items-center justify-center rounded-full border-[10px] border-white bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 text-center shadow-[0_25px_80px_rgba(37,99,235,0.3)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <Code2 className="text-white" size={34} />
              </div>

              <h2 className="mt-5 text-3xl font-extrabold text-white">
                Success Point Sikar
              </h2>

              <p className="mt-2 text-sm font-medium text-blue-50">
                Computer Science Ecosystem
              </p>
              <p className="mt-2 text-sm font-medium text-blue-50">
                For Kids, Teens & College Students
              </p>

            </motion.div>

            {/* Floating Labels */}

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.2,
              }}
              className="absolute left-0 top-16 rounded-2xl border border-white bg-white p-4 shadow-xl"
            >
              <p className="text-xs font-medium text-slate-500">
                Starting at
              </p>
              <p className="mt-1 text-lg font-extrabold text-blue-600">
                Age 6+
              </p>
              <p className="text-xs text-slate-500">Logic & Creativity</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: 0.5,
              }}
              className="absolute -right-12 top-28 rounded-2xl border border-white bg-white p-4 shadow-xl"
            >
              <p className="text-xs font-medium text-slate-500">
                Advanced
              </p>
              <p className="mt-1 text-lg font-extrabold text-indigo-600">
                AI + Development
              </p>
              <p className="text-xs text-slate-500">Real Projects</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                delay: 0.8,
              }}
              className="absolute bottom-16 left-8 rounded-2xl border border-white bg-white p-4 shadow-xl"
            >
              <p className="text-xs font-medium text-slate-500">
                17+ Courses
              </p>
              <p className="mt-1 text-lg font-extrabold text-cyan-600">
                Kids & College              </p>
              <p className="text-xs text-slate-500">
                Skills & Job Oriented </p>  </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                delay: 1,
              }}
              className="absolute bottom-8 right-2 rounded-2xl border border-white bg-white p-4 shadow-xl"
            >
              <p className="text-xs font-medium text-slate-500">
                Final Goal
              </p>
              <p className="mt-1 text-lg font-extrabold text-emerald-600">
                Career Launch
              </p>
              <p className="text-xs text-slate-500">
                Job • Internship • Freelancing
              </p>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}