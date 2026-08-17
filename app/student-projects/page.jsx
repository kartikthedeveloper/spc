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
    User,
    ShoppingBag,
    Star,
    Github,
    ExternalLink,
    Layers,
    Lock,
    Cpu,
    Database,
    Shield,
    Globe,
    Palette,
    Gamepad2,
    Zap,
    Award,
    Users,
} from "lucide-react";

// ============================================================
//  PROJECT DATA
// ============================================================

const stageData = [
    {
        id: "kids-coding",
        slug: "kids-coding",
        ageRange: "Age 6–9",
        stage: "Explore",
        icon: Brain,
        bgGradient: "from-blue-50 via-indigo-50 to-blue-100",
        badgeColor: "bg-blue-100 text-blue-700 border-blue-200",
        iconBg: "bg-blue-50 group-hover:bg-blue-600",
        iconColor: "text-blue-600 group-hover:text-white",
        projects: [
            {
                student: "Aarav",
                age: "7",
                title: "Space Adventure",
                description:
                    "A fun Scratch game where a rocket collects stars while avoiding asteroids.",
                tech: ["Scratch", "Logic", "Creativity"],
                icon: <Gamepad2 size={20} />,
                color: "blue",
            },
            {
                student: "Ananya",
                age: "8",
                title: "Dino Run",
                description:
                    "An endless runner game with a dinosaur dodging obstacles.",
                tech: ["Scratch", "Animations", "Events"],
                icon: <Zap size={20} />,
                color: "indigo",
            },
            {
                student: "Vihaan",
                age: "6",
                title: "Magic Paint",
                description:
                    "A creative digital painting tool with colorful brushes and stamps.",
                tech: ["Scratch", "Art", "Interactivity"],
                icon: <Palette size={20} />,
                color: "purple",
            },
            {
                student: "Myra",
                age: "9",
                title: "Ocean Cleanup",
                description:
                    "A game where players collect trash from the ocean to save marine life.",
                tech: ["Scratch", "Game Design", "Logic"],
                icon: <Globe size={20} />,
                color: "cyan",
            },
            {
                student: "Arjun",
                age: "8",
                title: "Story Creator",
                description:
                    "An interactive storybook where choices change the ending.",
                tech: ["Scratch", "Storytelling", "Variables"],
                icon: <Sparkles size={20} />,
                color: "emerald",
            },
            {
                student: "Sia",
                age: "7",
                title: "Math Quest",
                description:
                    "A math puzzle game that makes learning addition and subtraction fun.",
                tech: ["Scratch", "Math", "Problem Solving"],
                icon: <Brain size={20} />,
                color: "rose",
            },
        ],
    },
    {
        id: "junior-code-creators",
        slug: "junior-code-creators",
        ageRange: "Age 10–13",
        stage: "Create",
        icon: Code2,
        bgGradient: "from-indigo-50 via-purple-50 to-indigo-100",
        badgeColor: "bg-indigo-100 text-indigo-700 border-indigo-200",
        iconBg: "bg-indigo-50 group-hover:bg-indigo-600",
        iconColor: "text-indigo-600 group-hover:text-white",
        projects: [
            {
                student: "Kavya",
                age: "12",
                title: "Personal Portfolio",
                description:
                    "A clean, responsive personal website built with HTML & CSS.",
                tech: ["HTML", "CSS", "Responsive"],
                icon: <User size={20} />,
                color: "indigo",
            },
            {
                student: "Rohan",
                age: "13",
                title: "Weather App",
                description:
                    "A JavaScript app that fetches live weather data from an API.",
                tech: ["JavaScript", "API", "DOM"],
                icon: <Globe size={20} />,
                color: "blue",
            },
            {
                student: "Priya",
                age: "11",
                title: "Tic Tac Toe",
                description:
                    "A classic game with AI opponent and win detection.",
                tech: ["HTML", "CSS", "JavaScript"],
                icon: <Gamepad2 size={20} />,
                color: "purple",
            },
            {
                student: "Aditya",
                age: "12",
                title: "Python Quiz Game",
                description:
                    "A command-line quiz game with multiple categories and scoring.",
                tech: ["Python", "Loops", "Conditionals"],
                icon: <Cpu size={20} />,
                color: "emerald",
            },
            {
                student: "Sneha",
                age: "10",
                title: "Smart Calculator",
                description:
                    "A calculator with basic and scientific operations.",
                tech: ["HTML", "CSS", "JavaScript"],
                icon: <Layers size={20} />,
                color: "cyan",
            },
            {
                student: "Dhruv",
                age: "13",
                title: "To-Do App",
                description:
                    "A task manager with local storage and priority filters.",
                tech: ["JavaScript", "LocalStorage", "CSS"],
                icon: <Zap size={20} />,
                color: "rose",
            },
        ],
    },
    {
        id: "teen-tech-developers",
        slug: "teen-tech-developers",
        ageRange: "Age 14–18",
        stage: "Develop",
        icon: Rocket,
        bgGradient: "from-cyan-50 via-blue-50 to-cyan-100",
        badgeColor: "bg-cyan-100 text-cyan-700 border-cyan-200",
        iconBg: "bg-cyan-50 group-hover:bg-cyan-600",
        iconColor: "text-cyan-600 group-hover:text-white",
        projects: [
            {
                student: "Neha",
                age: "16",
                title: "Task Manager Pro",
                description:
                    "A full-featured React app with drag-and-drop task management.",
                tech: ["React", "Tailwind", "DnD"],
                icon: <Layers size={20} />,
                color: "cyan",
            },
            {
                student: "Vikram",
                age: "17",
                title: "AI Chat Bot",
                description:
                    "A Python chatbot using NLP to answer questions intelligently.",
                tech: ["Python", "NLP", "AI"],
                icon: <Brain size={20} />,
                color: "indigo",
            },
            {
                student: "Rahul",
                age: "18",
                title: "E-Commerce Store",
                description:
                    "A React-based online store with cart and payment integration.",
                tech: ["React", "Node.js", "MongoDB"],
                icon: <ShoppingBag size={20} />,
                color: "blue",
            },
            {
                student: "Meera",
                age: "15",
                title: "Data Dashboard",
                description:
                    "A real-time analytics dashboard with charts and filters.",
                tech: ["Python", "Pandas", "Plotly"],
                icon: <Database size={20} />,
                color: "purple",
            },
            {
                student: "Karan",
                age: "17",
                title: "Network Scanner",
                description:
                    "A cybersecurity tool that scans and maps network devices.",
                tech: ["Python", "Cyber", "Networking"],
                icon: <Shield size={20} />,
                color: "emerald",
            },
            {
                student: "Aisha",
                age: "16",
                title: "Social Feed",
                description:
                    "A social media feed with posts, likes, and comments.",
                tech: ["React", "Firebase", "Tailwind"],
                icon: <Users size={20} />,
                color: "rose",
            },
        ],
    },
    {
        id: "career-tracks",
        slug: "career-tracks",
        ageRange: "College Students",
        stage: "Specialize",
        icon: GraduationCap,
        bgGradient: "from-violet-50 via-purple-50 to-violet-100",
        badgeColor: "bg-violet-100 text-violet-700 border-violet-200",
        iconBg: "bg-violet-50 group-hover:bg-violet-600",
        iconColor: "text-violet-600 group-hover:text-white",
        projects: [
            {
                student: "Amit",
                age: "College",
                title: "Full Stack Blog",
                description:
                    "A complete MERN stack blog platform with authentication.",
                tech: ["React", "Node.js", "MongoDB", "Express"],
                icon: <Globe size={20} />,
                color: "violet",
            },
            {
                student: "Snehal",
                age: "College",
                title: "AI Image Classifier",
                description:
                    "A deep learning model that classifies images with 92% accuracy.",
                tech: ["Python", "TensorFlow", "AI"],
                icon: <Brain size={20} />,
                color: "indigo",
            },
            {
                student: "Raj",
                age: "College",
                title: "Fraud Detection System",
                description:
                    "A data science project detecting fraudulent transactions.",
                tech: ["Python", "Data Science", "ML"],
                icon: <Shield size={20} />,
                color: "red",
            },
            {
                student: "Pooja",
                age: "College",
                title: "Secure Chat App",
                description:
                    "An end-to-end encrypted messaging application.",
                tech: ["React", "Node.js", "Crypto", "WebSockets"],
                icon: <Lock size={20} />,
                color: "cyan",
            },
            {
                student: "Ankit",
                age: "College",
                title: "Smart Home Dashboard",
                description:
                    "An IoT dashboard controlling smart home devices.",
                tech: ["React", "Python", "MQTT", "IoT"],
                icon: <Cpu size={20} />,
                color: "emerald",
            },
            {
                student: "Divya",
                age: "College",
                title: "E-Learning Platform",
                description:
                    "A full-stack platform for online courses and assessments.",
                tech: ["React", "Node.js", "PostgreSQL"],
                icon: <GraduationCap size={20} />,
                color: "blue",
            },
        ],
    },
    {
        id: "career-launch",
        slug: "career-launch",
        ageRange: "Career",
        stage: "Launch",
        icon: BriefcaseBusiness,
        bgGradient: "from-emerald-50 via-teal-50 to-emerald-100",
        badgeColor: "bg-emerald-100 text-emerald-700 border-emerald-200",
        iconBg: "bg-emerald-50 group-hover:bg-emerald-600",
        iconColor: "text-emerald-600 group-hover:text-white",
        projects: [
            {
                student: "Divya",
                age: "Graduate",
                title: "Professional Portfolio",
                description:
                    "A stunning portfolio showcasing 10+ projects and skills.",
                tech: ["React", "Tailwind", "Framer"],
                icon: <User size={20} />,
                color: "emerald",
            },
            {
                student: "Suresh",
                age: "Graduate",
                title: "Freelance Marketplace",
                description:
                    "A platform connecting freelancers with clients.",
                tech: ["Full Stack", "Payments", "Auth"],
                icon: <BriefcaseBusiness size={20} />,
                color: "blue",
            },
            {
                student: "Megha",
                age: "Graduate",
                title: "Interview Prep Hub",
                description:
                    "A tool with coding challenges and mock interviews.",
                tech: ["React", "Node.js", "AI"],
                icon: <Award size={20} />,
                color: "purple",
            },
            {
                student: "Arvind",
                age: "Graduate",
                title: "GitHub Showcase",
                description:
                    "Open-source contributions with 500+ stars across projects.",
                tech: ["Open Source", "Git", "Collaboration"],
                icon: <Github size={20} />,
                color: "slate",
            },
            {
                student: "Neel",
                age: "Graduate",
                title: "Resume Builder Pro",
                description:
                    "A professional resume builder with ATS-friendly templates.",
                tech: ["React", "PDF", "Tailwind"],
                icon: <Layers size={20} />,
                color: "cyan",
            },
            {
                student: "Priya",
                age: "Graduate",
                title: "Tech Blog",
                description:
                    "A technical blog with 50+ articles and 10K+ monthly readers.",
                tech: ["Next.js", "MDX", "Vercel"],
                icon: <Sparkles size={20} />,
                color: "rose",
            },
        ],
    },
];

export default function StudentProjectsPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* ============================================================
            HERO HEADER
            ============================================================ */}
            <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
                {/* Background Blobs */}
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

                        Age 6+  to College Student Projects Showcase
                        <Sparkles size={17} />
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
                    >
                        Real Projects by{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                            Real Students
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="mt-6 max-w-2xl text-lg leading-8 text-slate-600"
                    >
                        See what students build at every stage — from Scratch
                        games to AI models and full-stack apps. Each project is
                        built by a real student in our ecosystem.
                    </motion.p>

                    {/* Quick nav */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="mt-8 flex flex-wrap gap-2"
                    >
                        {stageData.map((stage) => (
                            <a
                                key={stage.id}
                                href={`#${stage.id}`}
                                className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur transition-all hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700"
                            >
                                {stage.ageRange}
                            </a>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ============================================================
            STAGE SECTIONS
            ============================================================ */}
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
                {stageData.map((stage, stageIndex) => {
                    const StageIcon = stage.icon;
                    const isEven = stageIndex % 2 === 0;

                    return (
                        <section
                            key={stage.id}
                            id={stage.id}
                            className="scroll-mt-24"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6 }}
                                className={`relative rounded-3xl bg-gradient-to-br ${stage.bgGradient} p-8 md:p-10 ${stageIndex > 0 ? "mt-16" : ""
                                    }`}
                            >
                                {/* ===== STAGE HEADER ===== */}
                                <div className="flex flex-wrap items-start justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/70 shadow-sm backdrop-blur">
                                            <StageIcon
                                                className="h-7 w-7 text-blue-600"
                                                strokeWidth={2.5}
                                            />
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className={`rounded-full border ${stage.badgeColor} px-3 py-0.5 text-xs font-bold uppercase tracking-wider`}
                                                >
                                                    {stage.stage}
                                                </span>
                                                <span className="text-sm font-medium text-slate-500">
                                                    {stage.ageRange}
                                                </span>
                                            </div>
                                            <h2 className="text-2xl font-extrabold text-slate-900 md:text-3xl">
                                                {stage.ageRange} —{" "}
                                                <span className="text-blue-600">
                                                    {stage.stage}
                                                </span>
                                            </h2>
                                        </div>
                                    </div>

                                    
                                </div>

                                <p className="mt-2 text-slate-600">
                                    {stage.stage === "Explore" &&
                                        "Building logic & creativity through Scratch games and interactive stories."}
                                    {stage.stage === "Create" &&
                                        "Learning core web & programming skills with real beginner projects."}
                                    {stage.stage === "Develop" &&
                                        "Developing advanced apps, AI models, and cybersecurity tools."}
                                    {stage.stage === "Specialize" &&
                                        "Building industry-grade projects in Full Stack, AI, Data, and Cyber."}
                                    {stage.stage === "Launch" &&
                                        "Creating professional portfolios, freelancing, and landing jobs."}
                                </p>

                                {/* ===== PROJECT GRID ===== */}
                                <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                                    {stage.projects.map((project, idx) => {
                                        const colorMap = {
                                            blue: {
                                                bg: "bg-blue-50",
                                                border: "border-blue-200",
                                                text: "text-blue-700",
                                                light: "bg-blue-100/50",
                                                hover: "hover:border-blue-400 hover:shadow-blue-100",
                                            },
                                            indigo: {
                                                bg: "bg-indigo-50",
                                                border: "border-indigo-200",
                                                text: "text-indigo-700",
                                                light: "bg-indigo-100/50",
                                                hover: "hover:border-indigo-400 hover:shadow-indigo-100",
                                            },
                                            purple: {
                                                bg: "bg-purple-50",
                                                border: "border-purple-200",
                                                text: "text-purple-700",
                                                light: "bg-purple-100/50",
                                                hover: "hover:border-purple-400 hover:shadow-purple-100",
                                            },
                                            cyan: {
                                                bg: "bg-cyan-50",
                                                border: "border-cyan-200",
                                                text: "text-cyan-700",
                                                light: "bg-cyan-100/50",
                                                hover: "hover:border-cyan-400 hover:shadow-cyan-100",
                                            },
                                            emerald: {
                                                bg: "bg-emerald-50",
                                                border: "border-emerald-200",
                                                text: "text-emerald-700",
                                                light: "bg-emerald-100/50",
                                                hover: "hover:border-emerald-400 hover:shadow-emerald-100",
                                            },
                                            rose: {
                                                bg: "bg-rose-50",
                                                border: "border-rose-200",
                                                text: "text-rose-700",
                                                light: "bg-rose-100/50",
                                                hover: "hover:border-rose-400 hover:shadow-rose-100",
                                            },
                                            violet: {
                                                bg: "bg-violet-50",
                                                border: "border-violet-200",
                                                text: "text-violet-700",
                                                light: "bg-violet-100/50",
                                                hover: "hover:border-violet-400 hover:shadow-violet-100",
                                            },
                                            red: {
                                                bg: "bg-red-50",
                                                border: "border-red-200",
                                                text: "text-red-700",
                                                light: "bg-red-100/50",
                                                hover: "hover:border-red-400 hover:shadow-red-100",
                                            },
                                            slate: {
                                                bg: "bg-slate-50",
                                                border: "border-slate-200",
                                                text: "text-slate-700",
                                                light: "bg-slate-100/50",
                                                hover: "hover:border-slate-400 hover:shadow-slate-100",
                                            },
                                        };

                                        const colors =
                                            colorMap[project.color] ||
                                            colorMap.blue;

                                        return (
                                            <motion.div
                                                key={`${stage.id}-${idx}`}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: idx * 0.06,
                                                    duration: 0.4,
                                                }}
                                                whileHover={{
                                                    y: -6,
                                                    transition: {
                                                        duration: 0.2,
                                                    },
                                                }}
                                                className={`group rounded-2xl border ${colors.border} bg-white/80 p-5 shadow-sm backdrop-blur transition-all duration-300 ${colors.hover} hover:shadow-xl`}
                                            >
                                                {/* Top row: icon + student */}
                                                <div className="flex items-start justify-between">
                                                    <div
                                                        className={`flex h-11 w-11 items-center justify-center rounded-xl ${colors.bg} ${colors.text} transition-all duration-300 group-hover:scale-110`}
                                                    >
                                                        {project.icon}
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-sm font-bold text-slate-900">
                                                            {project.student}
                                                        </p>
                                                        <p className="text-xs text-slate-400">
                                                            {project.age}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Title */}
                                                <h3 className="mt-3 text-lg font-extrabold text-slate-900">
                                                    {project.title}
                                                </h3>

                                                {/* Description */}
                                                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                                                    {project.description}
                                                </p>

                                                {/* Tech tags */}
                                                <div className="mt-4 flex flex-wrap gap-1.5">
                                                    {project.tech.map(
                                                        (tech, i) => (
                                                            <span
                                                                key={i}
                                                                className={`rounded-full ${colors.light} ${colors.text} px-2.5 py-0.5 text-xs font-medium`}
                                                            >
                                                                {tech}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>


                            </motion.div>
                        </section>
                    );
                })}

                {/* ============================================================
                BOTTOM CTA
                ============================================================ */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-cyan-500 p-10 text-center text-white md:p-16"
                >
                    <h2 className="text-3xl font-extrabold md:text-4xl">
                        Ready to Build Your Own Projects?
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-lg text-blue-50">
                        Join our technology ecosystem and start your journey
                        from first code to first career.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl"
                        >
                            About Us
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/20"
                        >
                            Contact
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}