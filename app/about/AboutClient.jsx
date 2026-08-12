"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    GraduationCap,
    Sparkles,
    Cpu,
    ArrowRight,
    Award,
    Users,
    Briefcase,
    Code,
    Megaphone,
    Shield,
    BarChart,
    Globe,
    Zap,
    Star,
    ChevronRight,
    Layers,
    Target,
    Eye,
    BookOpen,
    Monitor,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

// ============================================================
// Animation Variants
// ============================================================

const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
        },
    }),
};

const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: {
        scale: 1.03,
        y: -8,
        transition: {
            duration: 0.3,
            ease: "easeOut",
        },
    },
};

// ============================================================
// Component
// ============================================================

export default function AboutClient() {
    return (
        <section className="bg-white overflow-x-hidden">

            {/* ==========================================================
      HERO SECTION
      ========================================================== */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50/30 py-24 lg:py-32">
                <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-indigo-200/30 blur-3xl" />
                <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-100/20 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-6">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        className="mx-auto max-w-4xl text-center"
                    >
                        <motion.span
                            variants={fadeUp}
                            custom={0}
                            className="inline-flex items-center gap-2 rounded-full bg-indigo-100/80 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold text-indigo-700 border border-indigo-200/50 shadow-sm"
                        >
                            <Sparkles className="h-4 w-4" />
                            About Success Point Institute
                        </motion.span>

                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl"
                        >
                            Building Future Tech
                            <br />
                            Professionals in
                            <span className="relative ml-2 inline-block">
                                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                                    Sikar
                                </span>
                                <motion.span
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                                    className="absolute -bottom-2 left-0 h-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
                                />
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="mt-8 text-lg leading-8 text-gray-600 max-w-2xl mx-auto md:text-xl"
                        >
                            Success Point Institute is one of the leading computer education and
                            professional training institutes in Sikar, Rajasthan. Our mission is
                            to prepare students with practical skills, industry knowledge, AI
                            technologies and real-world experience so they can build successful
                            careers in the digital world.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            custom={3}
                            className="mt-10 flex flex-wrap items-center justify-center gap-4"
                        >
                            <Link
                                href="/infrastructure"
                                className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-700 hover:shadow-indigo-600/40 hover:-translate-y-1"
                            >
                                View Infrastructure
                                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-indigo-200 bg-white/70 backdrop-blur-sm px-7 py-3.5 font-semibold text-indigo-600 transition-all hover:border-indigo-400 hover:bg-white hover:-translate-y-1"
                            >
                                Get in Touch
                            </Link>
                        </motion.div>

                        <motion.div
                            variants={fadeUp}
                            custom={4}
                            className="mt-16 flex flex-wrap justify-center gap-8"
                        >
                            {[
                                { label: "Students Trained", value: "1000+", icon: Users },
                                { label: "Courses Offered", value: "14+", icon: BookOpen },
                                { label: "Expert Faculty", value: "4+", icon: Award },
                                { label: "Placement Rate", value: "95%", icon: Briefcase },
                            ].map((stat) => (
                                <div key={stat.label} className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
                                        <stat.icon className="h-5 w-5" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                                        <div className="text-sm text-gray-500">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ==========================================================
      WHO WE ARE + MISSION / VISION
      ========================================================== */}
            <div className="relative py-24 lg:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/40 via-transparent to-transparent" />

                <div className="relative mx-auto max-w-7xl px-6">
                    <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInLeft}
                            className="space-y-6"
                        >
                            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
                                <Users className="h-4 w-4" />
                                Who We Are
                            </span>
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                                Empowering Careers Through
                                <span className="block text-indigo-600">Practical Education</span>
                            </h2>
                            <p className="text-gray-600 leading-8 text-lg">
                                Success Point Institute provides modern computer education that focuses
                                on practical learning instead of only theoretical knowledge. Every
                                course is designed according to today's industry requirements so that
                                students can confidently work in companies, startups or as
                                freelancers.
                            </p>
                            <p className="text-gray-600 leading-8">
                                We believe every student deserves quality education, experienced
                                mentors, practical projects and career guidance. Our classrooms,
                                workshops and hands-on training sessions help students gain real
                                skills that employers actually need.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                {["Practical Labs", "Live Projects", "Expert Mentors", "Career Support"].map(
                                    (item) => (
                                        <span
                                            key={item}
                                            className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700 border border-indigo-100/50"
                                        >
                                            {item}
                                        </span>
                                    )
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={slideInRight}
                            className="space-y-6"
                        >
                            <motion.div
                                variants={cardHover}
                                initial="rest"
                                whileHover="hover"
                                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-700 p-8 shadow-xl shadow-indigo-600/20 transition-all duration-500"
                            >
                                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
                                <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-white/5 blur-2xl" />

                                <div className="relative">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 backdrop-blur text-white">
                                            <Target className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                                    </div>
                                    <p className="mt-5 text-indigo-100 leading-8 text-lg">
                                        To empower students with practical technology education, AI-powered
                                        learning, professional certifications and industry-ready skills that
                                        help them build successful careers.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                variants={cardHover}
                                initial="rest"
                                whileHover="hover"
                                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl shadow-gray-200/60 border border-gray-100/50 transition-all duration-500"
                            >
                                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-purple-100/30 blur-2xl" />

                                <div className="relative">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-purple-700">
                                            <Eye className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                                    </div>
                                    <p className="mt-5 text-gray-600 leading-8 text-lg">
                                        To become one of Rajasthan's most trusted institutions for computer
                                        education by creating skilled software developers, digital marketers,
                                        cyber security professionals and future technology leaders.
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* ==========================================================
      COURSES SECTION
      ========================================================== */}
            <div className="relative bg-gray-50/80 py-24 lg:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-50/30 via-transparent to-transparent" />

                <div className="relative mx-auto max-w-7xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        className="text-center"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
                            <Layers className="h-4 w-4" />
                            Our Programs
                        </span>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                            Industry Focused Courses
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Career-oriented programs designed to meet the demands of the modern tech industry
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={staggerContainer}
                        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                    >
                        {[
                            {
                                name: "BCA",
                                icon: GraduationCap,
                                color: "indigo",
                                href: "/courses/bca",
                            },
                            {
                                name: "MCA",
                                icon: Cpu,
                                color: "purple",
                                href: "/courses/mca",
                            },
                            {
                                name: "Digital Marketing with AI",
                                icon: Megaphone,
                                color: "pink",
                                href: "/courses/digital-marketing",
                            },
                            {
                                name: "Website Development",
                                icon: Code,
                                color: "blue",
                                href: "/courses/full-stack-web-development",
                            },
                            {
                                name: "Mobile App Development",
                                icon: Monitor,
                                color: "emerald",
                                href: "/courses/mobile-app-development",
                            },
                            {
                                name: "Data Analytics",
                                icon: BarChart,
                                color: "amber",
                                href: "/courses/data-analyst",
                            },
                            {
                                name: "PG Diploma in Cyber Security & Cyber Law",
                                icon: Shield,
                                color: "rose",
                                href: "/courses/pg-diploma-cyber-security",
                            },
                            {
                                name: "DCA",
                                icon: Award,
                                color: "teal",
                                href: "/courses/dca",
                            },
                        ].map((course) => {
                            const colorMap = {
                                indigo: "from-indigo-500 to-indigo-600",
                                purple: "from-purple-500 to-purple-600",
                                pink: "from-pink-500 to-pink-600",
                                blue: "from-blue-500 to-blue-600",
                                emerald: "from-emerald-500 to-emerald-600",
                                amber: "from-amber-500 to-amber-600",
                                rose: "from-rose-500 to-rose-600",
                                teal: "from-teal-500 to-teal-600",
                            };
                            const lightMap = {
                                indigo: "bg-indigo-50 text-indigo-600",
                                purple: "bg-purple-50 text-purple-600",
                                pink: "bg-pink-50 text-pink-600",
                                blue: "bg-blue-50 text-blue-600",
                                emerald: "bg-emerald-50 text-emerald-600",
                                amber: "bg-amber-50 text-amber-600",
                                rose: "bg-rose-50 text-rose-600",
                                teal: "bg-teal-50 text-teal-600",
                            };
                            const gradient = colorMap[course.color] || colorMap.indigo;
                            const light = lightMap[course.color] || lightMap.indigo;

                            return (
                                <motion.div
                                    key={course.name}
                                    variants={fadeUp}
                                    custom={0}
                                    whileHover={{
                                        y: -10,
                                        scale: 1.02,
                                        transition: { duration: 0.3, ease: "easeOut" },
                                    }}
                                    className="group relative rounded-2xl bg-white p-6 shadow-md shadow-gray-200/50 border border-gray-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/30"
                                >
                                    <div className={`inline-flex rounded-xl ${light} p-3`}>
                                        <course.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-4 font-semibold text-gray-900 text-lg leading-snug">
                                        {course.name}
                                    </h3>
                                    <Link
                                        href={course.href}
                                        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 opacity-0 transition-opacity group-hover:opacity-100"
                                    >
                                        Learn More
                                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <div className={`absolute bottom-0 left-0 h-1 w-0 rounded-b-2xl bg-gradient-to-r ${gradient} transition-all duration-500 group-hover:w-full`} />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            {/* ==========================================================
      MSME SECTION
      ========================================================== */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 py-24 lg:py-28">
                <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-pulse" />
                <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl animate-pulse" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

                <div className="relative mx-auto max-w-6xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeIn}
                        className="grid items-center gap-12 lg:grid-cols-2"
                    >
                        <motion.div
                            variants={slideInLeft}
                            className="text-white"
                        >
                            <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-sm border border-white/10">
                                🏛️ Udyam (MSME) Registered Enterprise
                            </span>
                            <h2 className="mt-6 text-4xl font-bold leading-tight">
                                Registered Under the Ministry of MSME,
                                <br />
                                Government of India
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-indigo-100">
                                Success Point Sikar operates through a
                                <strong className="font-semibold text-white"> Udyam Registered Enterprise </strong>
                                under the Ministry of Micro, Small & Medium Enterprises (MSME),
                                Government of India.
                            </p>
                            <p className="mt-4 text-indigo-200 text-sm">
                                This registration identifies the organization as a registered
                                enterprise under the Udyam framework and should not be interpreted
                                as government approval, accreditation or recognition of any
                                educational programme.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={slideInRight}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-2xl"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-500 text-3xl shadow-lg animate-bounce">
                                    ✔
                                </div>
                                <div>
                                    <p className="text-sm uppercase tracking-widest text-indigo-200">
                                        Registration
                                    </p>
                                    <h3 className="text-2xl font-bold text-white">
                                        UDYAM Registered
                                    </h3>
                                </div>
                            </div>
                            <div className="mt-8 rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                                <p className="text-sm text-indigo-200">
                                    Udyam Registration Number
                                </p>
                                <h4 className="mt-2 break-all text-2xl font-bold text-white tracking-wider">
                                    UDYAM-RJ-30-0143823
                                </h4>
                            </div>
                            <a
                                href="https://udyamregistration.gov.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-indigo-700 transition-all hover:scale-105 hover:bg-indigo-50 hover:shadow-xl"
                            >
                                Verify on Official Portal
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ==========================================================
      WHY CHOOSE SECTION
      ========================================================== */}
            <div className="relative py-24 lg:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-50/20 via-transparent to-transparent" />

                <div className="relative mx-auto max-w-7xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        className="text-center"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
                            <Star className="h-4 w-4" />
                            Why Choose Us
                        </span>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                            Why Choose Success Point Institute?
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            We combine practical training with industry expertise to give you a competitive edge
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={staggerContainer}
                        className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {[
                            { name: "Experienced Faculty", icon: Users, color: "indigo" },
                            { name: "AI Integrated Learning", icon: Cpu, color: "purple" },
                            { name: "Practical Computer Labs", icon: Monitor, color: "blue" },
                            { name: "Live Projects", icon: Code, color: "emerald" },
                            { name: "Internship Opportunities", icon: Briefcase, color: "amber" },
                            { name: "Career Guidance", icon: Target, color: "rose" },
                            { name: "Industry-Oriented Curriculum", icon: Layers, color: "teal" },
                            { name: "Skill-Based Training", icon: Zap, color: "orange" },
                            { name: "Affordable Education", icon: Award, color: "pink" },
                        ].map((item) => {
                            const colorMap = {
                                indigo: "bg-indigo-50 text-indigo-600 border-indigo-100",
                                purple: "bg-purple-50 text-purple-600 border-purple-100",
                                blue: "bg-blue-50 text-blue-600 border-blue-100",
                                emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
                                amber: "bg-amber-50 text-amber-600 border-amber-100",
                                rose: "bg-rose-50 text-rose-600 border-rose-100",
                                teal: "bg-teal-50 text-teal-600 border-teal-100",
                                orange: "bg-orange-50 text-orange-600 border-orange-100",
                                pink: "bg-pink-50 text-pink-600 border-pink-100",
                            };
                            const borderMap = {
                                indigo: "hover:border-indigo-300",
                                purple: "hover:border-purple-300",
                                blue: "hover:border-blue-300",
                                emerald: "hover:border-emerald-300",
                                amber: "hover:border-amber-300",
                                rose: "hover:border-rose-300",
                                teal: "hover:border-teal-300",
                                orange: "hover:border-orange-300",
                                pink: "hover:border-pink-300",
                            };
                            const style = colorMap[item.color] || colorMap.indigo;
                            const border = borderMap[item.color] || borderMap.indigo;

                            return (
                                <motion.div
                                    key={item.name}
                                    variants={fadeUp}
                                    custom={0}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                        transition: { duration: 0.3, ease: "easeOut" },
                                    }}
                                    className={`group rounded-2xl border bg-white p-8 shadow-sm shadow-gray-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100/20 ${border}`}
                                >
                                    <div className={`inline-flex rounded-xl ${style} p-3.5`}>
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="mt-5 text-xl font-semibold text-gray-900">
                                        {item.name}
                                    </h3>
                                    <div className="mt-3 h-1 w-12 rounded-full bg-indigo-200 transition-all duration-300 group-hover:w-20 group-hover:bg-indigo-500" />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            {/* ==========================================================
      SEO CONTENT SECTION
      ========================================================== */}
            <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50/80 via-purple-50/40 to-indigo-50/80 py-24 lg:py-28">
                <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-200/20 blur-3xl" />

                <div className="relative mx-auto max-w-5xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        className="text-center"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
                            <Globe className="h-4 w-4" />
                            Future Ready
                        </span>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                            Preparing Students for the Future of Technology
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={staggerContainer}
                        className="mt-10 grid gap-8 md:grid-cols-2"
                    >
                        <motion.div
                            variants={fadeUp}
                            custom={0}
                            className="rounded-3xl bg-white/70 backdrop-blur-sm p-8 shadow-lg shadow-indigo-100/30 border border-white/50"
                        >
                            <p className="leading-8 text-gray-700">
                                Technology is changing rapidly with Artificial Intelligence,
                                automation and cloud computing becoming an essential part of every
                                industry. At Success Point Institute Sikar, students learn practical
                                skills in software development, AI tools, digital marketing, cyber
                                security, website development, mobile application development and
                                data analytics to stay ahead in the modern job market.
                            </p>
                        </motion.div>
                        <motion.div
                            variants={fadeUp}
                            custom={1}
                            className="rounded-3xl bg-white/70 backdrop-blur-sm p-8 shadow-lg shadow-indigo-100/30 border border-white/50"
                        >
                            <p className="leading-8 text-gray-700">
                                Our focus is on real projects, professional development, internships,
                                communication skills and industry exposure so students become
                                confident professionals ready for jobs, higher education and
                                entrepreneurship.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                {["AI & ML", "Cloud Computing", "Cyber Security", "Full Stack", "Data Science"].map(
                                    (tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-indigo-100/70 px-4 py-1.5 text-sm font-medium text-indigo-700 backdrop-blur-sm"
                                        >
                                            {tag}
                                        </span>
                                    )
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ==========================================================
      CTA SECTION
      ========================================================== */}
            <div className="relative py-24 lg:py-32">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-50/30 via-transparent to-transparent" />

                <div className="relative mx-auto max-w-5xl px-6">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        className="text-center"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700">
                            <Sparkles className="h-4 w-4" />
                            Get Started
                        </span>
                        <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
                            Start Your Career with
                            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Success Point Institute
                            </span>
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
                            Admissions are open for career-oriented computer courses. Join us and
                            build your future with practical learning, experienced mentors and
                            industry-ready skills.
                        </p>

                        <motion.div
                            variants={fadeUp}
                            custom={1}
                            className="mt-10 flex flex-wrap justify-center gap-5"
                        >
                            <Link
                                href="/blog"
                                className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-700 hover:shadow-indigo-600/40 hover:-translate-y-1"
                            >
                                Explore Blog
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-full border-2 border-indigo-200 bg-white px-8 py-4 font-semibold text-indigo-600 transition-all hover:border-indigo-400 hover:bg-indigo-50 hover:-translate-y-1 hover:shadow-lg"
                            >
                                Contact Us
                            </Link>
                        </motion.div>

                    </motion.div>
                </div>
            </div>

            <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 4s ease infinite;
          background-size: 200% auto;
        }
      `}</style>

        </section>
    );
}