import Link from "next/link";
import ContactForm from "@/components/ContactForm";

import {
  Rocket,
  Gamepad2,
   TrendingUp,
  BarChart3,
  Code2,
  Palette,
  Bot,
  Sparkles,
  Star,
  Users,
  Calendar,
  Clock,
  Award,
  Zap,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Laptop,
  Brain,
  Cpu,
  Trophy,
  Heart,
  Smartphone,
  Globe,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Kids Coding Classes in Sikar | Success Point Institute Sikar",
  description:
    "Fun & interactive coding classes for kids (Class 6-12) in Sikar. Learn programming, game development, AI, and robotics. Enroll now for 2026 batch!",
  keywords: [
    // Primary Local Keywords
    "Kids Coding Classes Sikar",
    "Coding Classes for Kids Sikar",
    "Coding Course for Kids Sikar",
    "Best Kids Coding Institute Sikar",
    "Best Coding Institute Sikar",
    "Coding Academy Sikar",
    "Coding Training Institute Sikar",
    "Programming Classes for Kids Sikar",
    "Computer Classes for Kids Sikar",
    "Coding Coaching Sikar",
    "Computer Coaching Sikar",
    "Coding Institute Near Me",
    "Coding Classes Near Me",
    "Kids Coding Near Me",
    "Programming Classes Near Me",

    // School Students
    "Coding Course for School Students Sikar",
    "Coding Classes for School Students",
    "Coding for Beginners Sikar",
    "Coding Classes for Beginners",
    "Coding Classes for Children",
    "Coding Classes for Teenagers",
    "Coding Classes After School",
    "Coding Course After Class 5",
    "Coding Course After Class 6",
    "Coding Course After Class 8",
    "Coding Course After Class 10",
    "Computer Education for Kids",
    "Programming for Kids",
    "Coding for Kids India",

    // Technology Keywords
    "Scratch Programming Classes",
    "Scratch Coding Classes Sikar",
    "Python for Kids",
    "Python Classes for Kids Sikar",
    "Game Development for Kids",
    "Game Development Classes Sikar",
    "Robotics Classes Sikar",
    "STEM Education Sikar",
    "STEM Classes Sikar",
    "AI Classes for Kids",
    "AI Classes for Kids Sikar",
    "Artificial Intelligence for Kids",
    "Block Coding Classes",
    "Creative Coding Classes",
    "Computational Thinking Classes",

    // Parent Search Intent
    "Best Coding Classes for Children",
    "Best Computer Classes for Kids",
    "Affordable Coding Classes Sikar",
    "Weekend Coding Classes Sikar",
    "Summer Coding Camp Sikar",
    "Coding Bootcamp Sikar",
    "Coding Workshop Sikar",
    "Digital Skills for Kids",
    "Future Skills for Students",
    "Technology Classes for Kids",

    // Local SEO
    "Best Computer Institute in Sikar",
    "Top Computer Institute in Sikar",
    "Top Computer Classes in Sikar",
    "Best Computer Coaching Sikar",
    "Computer Training Institute Sikar",
    "Programming Institute Sikar",
    "Coding Education Sikar",
    "Coding Center Sikar",

    // Brand Keywords
    "Success Point Institute Sikar",
    "Success Point Kids Coding Sikar",
    "Success Point Coding Classes",
    "Success Point Computer Institute Sikar",
    "Success Point Programming Classes",
  ],
  alternates: {
    canonical: "https://successpointsikar.com/kids-code-in-sikar",
  },
  openGraph: {
    title: "Kids Coding Classes in Sikar | Success Point College",
    description:
      "Empower your child with future-ready coding skills. Fun, project-based learning for Class 6-12 students.",
    url: "https://successpointsikar.com/kids-code-in-sikar",
    type: "website",
  },
};

export default function KidsCodingPage() {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Digital Marketing",
      desc: "Learn SEO, social media, Google Ads, content strategy, and AI-powered marketing skills used by businesses today.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Full Stack Web Development",
      desc: "Build modern websites and real-world web applications using frontend, backend, databases, APIs, and modern development tools.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      desc: "Create powerful Android and cross-platform mobile applications and learn the technologies driving today's mobile-first world.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analytics",
      desc: "Turn real business data into useful insights using Excel, SQL, Power BI, Python, and modern data analytics tools.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const benefits = [
    {
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      title: "Industry Skills",
      desc: "Learn technologies and skills that companies are using right now.",
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-600" />,
      title: "AI Ready",
      desc: "Understand how AI is transforming development, marketing, analytics, and business.",
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Real-World Learning",
      desc: "Work on practical projects that connect learning with real business problems.",
    },
    {
      icon: <Award className="h-6 w-6 text-green-600" />,
      title: "Future Ready",
      desc: "Build a strong technology foundation for careers, higher education, and entrepreneurship.",
    },
  ];

  const programs = [
    {
      age: "After 6th",
      level: "Career Starter",
      courses: [
        "Digital Marketing",
        "Full Stack Web Development",
        "Mobile App Development",
      ],
      duration: "Job-Ready Programs",
      icon: <Rocket className="h-10 w-10 text-purple-600" />,
    },
    {
      age: "Graduate / Student",
      level: "Tech Professional",
      courses: [
        "Data Analytics",
        "Full Stack Development",
        "CCNA & Networking",
      ],
      duration: "Career-Focused Programs",
      icon: <Code2 className="h-10 w-10 text-blue-600" />,
    },
    {
      age: "Higher Education",
      level: "Advanced Tech",
      courses: [
        "BCA",
        "MCA",
        "Advanced Technology & Career Skills",
      ],
      duration: "Degree + Career Growth",
      icon: <Bot className="h-10 w-10 text-green-600" />,
    },
  ];

  const testimonials = [
    {
      name: "Aarav Vyas",
      child: "Full Stack Development Student",
      quote:
        "I wanted to understand how real websites work. Now I can build complete web applications and understand both frontend and backend development.",
      rating: 5,
    },
    {
      name: "Priya Somani",
      child: "Data Analytics Student",
      quote:
        "Learning Data Analytics with real datasets helped me understand how companies actually use data to make better decisions.",
      rating: 5,
    },
    {
      name: "Rahul Gurjar",
      child: "Digital Marketing Student",
      quote:
        "Digital Marketing is not just about posting on social media. I learned SEO, analytics, advertising, content, and how AI is changing marketing.",
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: "Does my child need any prior coding experience?",
      a: "Not at all! Our courses are designed for absolute beginners. We start with visual programming (Scratch) and gradually move to text-based languages like Python.",
    },
    {
      q: "What equipment does my child need?",
      a: "A laptop or desktop computer with internet access is all they need. We provide all software and learning materials.",
    },
    {
      q: "How are classes conducted?",
      a: "We offer both offline classes at our Sikar campus. Each session includes theory, practical exercises, and projects in morning and evening batches.",
    },
    {
      q: "Will my child get a certificate?",
      a: "Yes! Every student receives a completion certificate and project portfolio to showcase their skills.",
    },
    {
      q: "What is the batch size?",
      a: "We maintain small batches of 10-12 students to ensure individual attention and personalized guidance.",
    },
  ];

  return (
    <section className="bg-white overflow-x-hidden">

      {/* Hero Section - Colorful & Playful */}
      <div className="relative overflow-hidden mt-14 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 py-20">
        {/* Floating shapes for fun effect */}
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
            <span className="font-semibold">🔥 Future Tech Leaders Program</span>
          </div>

          <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Kids Coding <br />
            <span className="text-yellow-300">Classes in Sikar</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-white/90">
            Transform your child's curiosity into creativity! Fun, interactive,
            and future-ready coding courses for <strong className="text-yellow-200">Class 6 to 12</strong> students.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#apply-now"
              className="group rounded-full bg-white px-8 py-4 font-bold text-purple-700 shadow-2xl transition hover:scale-105 hover:shadow-2xl"
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
              View Programs
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>50+ Students Enrolled</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-300" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              <span>100% Project-Based</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Kids Should Code - Benefits Section */}
      <div className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
              Why Choose Us
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Why Should Your Child <span className="text-purple-600">Learn to Code?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Coding isn't just about computers—it's about building the future.
              Here's what your child will gain:
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 group-hover:bg-purple-100">
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

      {/* Programs Section */}
      <div id="programs" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Our Programs
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Coding Programs for <span className="text-blue-600">Every Age</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Age-appropriate courses designed to match your child's learning pace and interests.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className="group rounded-3xl border-2 p-8 transition hover:-translate-y-2 hover:border-purple-300 hover:shadow-2xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-purple-50">
                  {program.icon}
                </div>
                <div className="mt-4">
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                    {program.age}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-gray-900">
                    {program.level}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {program.courses.map((course, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        {course}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between border-t pt-4">
                    <span className="text-sm text-gray-600">
                      <Clock className="mr-1 inline h-4 w-4" />
                      {program.duration}
                    </span>
                    <Link
                      href="#apply-now"
                      className="font-semibold text-purple-600 hover:text-purple-800"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features - Interactive Learning */}
      <div className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
              What Will Your Child <span className="text-purple-600">Learn?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Our curriculum blends creativity with technology. Here's a peek into our courses:
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition group-hover:opacity-5`} />
                <div className={`inline-flex rounded-2xl bg-gradient-to-br ${feature.color} p-4 text-white`}>
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Parents Love Us */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">

            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              What Students Say About <span className="text-yellow-600">Our Program</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-gradient-to-br from-yellow-50 to-orange-50 p-8 shadow-lg"
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
                  {/* <p className="text-sm text-gray-600">Parent of {testimonial.child}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Batch Details */}
      <div className="py-20 bg-gradient-to-br from-purple-700 to-blue-700">
        <div className="mx-auto max-w-7xl px-6 text-center text-white">
          <h2 className="text-4xl font-bold md:text-5xl">
            🚀 Batch Details
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            New batches starting soon. Don't miss this opportunity!
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Start Date",
                value: "August 2026",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Duration",
                value: "6-12 Months",
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Batch Size",
                value: "10-12 Students",
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

      {/* FAQs */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-4xl font-bold text-gray-900 md:text-5xl">
            Frequently Asked <span className="text-purple-600">Questions</span>
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border-2 bg-white p-6 transition hover:border-purple-300 hover:shadow-lg"
              >
                <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <ChevronRight className="h-5 w-5 text-purple-600 transition group-open:rotate-90" />
                    {faq.q}
                  </span>
                </summary>
                <p className="mt-3 pl-7 text-gray-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action - Application Form */}
      <div id="apply-now" className="py-20 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="mx-auto max-w-4xl px-6">
          <ContactForm />

        </div>
      </div>

    </section>
  );
}