"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
          className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-400/20 blur-[120px]"
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
          className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-yellow-300/20 blur-[150px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-h-screen items-center gap-12 pt-28 pb-16 lg:grid-cols-2">
          {/* ================= LEFT CONTENT ================= */}

          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700"
            >
              <GraduationCap size={18} />
              Admissions Open 2026–27
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-7xl"
            >
              Build Your
              <br />

              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                Dream Tech Career
              </span>

              <br />

              With IT Industry Skills | Sikar
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg"
            >
              Join Success Point Institute, Sikar for BCA, MCA, PGDCA and Cyber
              Security programs. Learn from industry experts, work on
              live projects, earn industry certifications, and receive
              complete placement assistance to build your successful
              career.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
              >
                Apply Now
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/blog"
                className="rounded-xl border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-blue-600 hover:text-blue-600"
              >
                Explore Blog
              </Link>
            </motion.div>

            {/* Stats */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-14 grid grid-cols-3 gap-6 sm:gap-10"
            >
              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  1000+
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Students Trained
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  95%
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Placement Support
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  8+
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Years Experience
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
            className="relative flex justify-center"
          >
            {/* Background Circle */}

            <div className="absolute h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-3xl sm:h-[500px] sm:w-[500px]" />

            {/* Decorative Circle */}

            <div className="absolute top-6 right-10 h-24 w-24 rounded-full border-8 border-blue-100 hidden lg:block" />

            {/* Floating Image */}

            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex items-center justify-center"
            >
              {/* Animated Gradient Ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute h-[340px] w-[340px] rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-600 p-[6px]"
              >
                <div className="h-full w-full rounded-full bg-white" />
              </motion.div>

              {/* Glow */}
              <div className="absolute h-[360px] w-[360px] rounded-full bg-blue-500/20 blur-3xl" />

              {/* Image */}
              <div className="relative z-10 overflow-hidden rounded-full border-[8px] border-white shadow-[0_20px_60px_rgba(37,99,235,0.35)]">
                <Image
                  src="/images/kartik.webp"
                  alt="Success Point Institute Student"
                  width={650}
                  height={650}
                  priority
                  className="h-[450px] w-[450px] object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </motion.div>
            {/* Floating Card */}

             <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute bottom-12 left-0 hidden rounded-2xl bg-white p-5 shadow-2xl lg:block"
            >
              <p className="text-sm text-slate-500">
                Top Institite in Sikar
              </p>

              <h3 className="mt-1 text-xl font-bold text-blue-600">
                Admission Open
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}