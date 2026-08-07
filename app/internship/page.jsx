import Link from "next/link";
import {
  Rocket,
  Code2,
  Briefcase,
  Users,
  Target,
  Award,
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  Star,
  Building2,
  GraduationCap,
  Laptop,
  Brain,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Globe,
  Github,
  Linkedin,
  FileText,
  Zap,
  Heart,
  Coffee,
  Crown,
  Lightbulb,
  BarChart,
  PenTool,
  Cloud,
  Shield,
  Database,
  Server,
  Smartphone,
  Palette,
  Video,
  Megaphone,
  Layers,
  Cpu,
} from "lucide-react";

export const metadata = {
  title: "Live Project Internship | Success Point College Sikar",
  description:
    "Industry-focused live project internships in BCA, MCA, Digital Marketing, MERN Stack, Data Analytics, and more. Get hands-on experience with real-world projects at Success Point College, Sikar.",
  keywords: [
    // Primary Local Keywords
    "Internship in Sikar",
    "Internship in Rajasthan",
    "Best Internship in Sikar",
    "Best Internship in Rajasthan",
    "Live Project Internship Sikar",
    "Live Project Internship Rajasthan",
    "Industrial Training Sikar",
    "Industrial Training Rajasthan",
    "Industrial Internship Sikar",
    "Summer Internship Sikar",
    "Winter Internship Sikar",
    "Professional Internship Sikar",
    "Job Oriented Internship Sikar",

    // College Students
    "Internship for BCA Students Sikar",
    "Internship for MCA Students Sikar",
    "BCA Internship Rajasthan",
    "MCA Internship Rajasthan",
    "Internship for Computer Science Students Rajasthan",
    "Internship for IT Students Rajasthan",
    "Computer Science Internship Sikar",
    "IT Internship Sikar",

    // Software & Development
    "MERN Stack Internship Sikar",
    "MERN Stack Internship Rajasthan",
    "Full Stack Developer Internship Sikar",
    "Full Stack Internship Rajasthan",
    "React JS Internship Sikar",
    "Node JS Internship Rajasthan",
    "Web Development Internship Sikar",
    "Software Development Internship Rajasthan",
    "Frontend Developer Internship Sikar",
    "Backend Developer Internship Rajasthan",
    "Mobile App Development Internship Rajasthan",

    // Data & AI
    "Data Analyst Internship Sikar",
    "Data Analytics Internship Rajasthan",
    "Artificial Intelligence Internship Rajasthan",
    "Machine Learning Internship Rajasthan",
    "Python Internship Sikar",

    // Cyber Security
    "Cyber Security Internship Sikar",
    "Cyber Security Internship Rajasthan",
    "Ethical Hacking Internship Rajasthan",

    // Digital Marketing
    "Digital Marketing Internship Sikar",
    "Digital Marketing Internship Rajasthan",
    "SEO Internship Rajasthan",
    "Social Media Marketing Internship Sikar",

    // Training Keywords
    "Live Project Training Sikar",
    "Real Time Project Training Rajasthan",
    "Project Based Internship Sikar",
    "Industry Oriented Training Rajasthan",
    "Practical Training Sikar",
    "Software Training Institute Sikar",
    "IT Training Institute Rajasthan",

    // Local Search Intent
    "Internship Near Me",
    "Industrial Training Near Me",
    "Best Internship Institute Sikar",
    "Best Industrial Training Institute Rajasthan",
    "Best Software Training Institute Sikar",
    "Computer Internship Sikar",
    "Software Company Internship Sikar",
    "Internship with Certificate Sikar",
    "Internship with Live Projects Rajasthan",

    // Brand Keywords
    "Success Point Institute Sikar Internship",
    "Success Point College Sikar Internship",
    "Success Point Live Project Internship",
    "Success Point Industrial Training Sikar",
    "Success Point MERN Stack Internship",
    "Success Point Digital Marketing Internship",
    "Success Point Data Analyst Internship",
    "Success Point Cyber Security Internship",
  ],
  alternates: {
    canonical: "https://successpointsikar.com/internship",
  },
  openGraph: {
    title: "Live Project Internship | Success Point College Sikar",
    description:
      "Build real-world skills with our live project internship program. Work on industry projects, get mentorship, and earn a certificate.",
    url: "https://successpointsikar.com/internship",
    type: "website",
  },
};

export default function InternshipPage() {
  const internshipPrograms = [
    {
      title: "MERN Stack Development",
      icon: <Code2 className="h-8 w-8" />,
      color: "from-blue-600 to-cyan-600",
      duration: "2-3 Months",
      projects: [
        "E-commerce Platform",
        "Social Media Dashboard",
        "Task Management System",
        "Real-time Chat Application",
      ],
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
      outcome: "Full-stack developer ready for industry",
    },
    {
      title: "Data Analytics & Power BI",
      icon: <BarChart className="h-8 w-8" />,
      color: "from-green-600 to-emerald-600",
      duration: "2 Months",
      projects: [
        "Sales Dashboard",
        "Financial Analytics",
        "Customer Segmentation",
        "Real-time Data Visualization",
      ],
      skills: ["Power BI", "SQL", "Excel", "Python", "Data Visualization"],
      outcome: "Data-driven decision making expert",
    },
    {
      title: "Digital Marketing",
      icon: <Megaphone className="h-8 w-8" />,
      color: "from-orange-600 to-red-600",
      duration: "2 Months",
      projects: [
        "Social Media Campaign",
        "SEO Strategy",
        "Google Ads Campaign",
        "Content Marketing Plan",
      ],
      skills: ["SEO", "Google Ads", "Social Media", "Content Strategy", "Analytics"],
      outcome: "Digital marketing specialist",
    },
    {
      title: "Python Development & AI",
      icon: <Cpu className="h-8 w-8" />,
      color: "from-purple-600 to-pink-600",
      duration: "3 Months",
      projects: [
        "AI Chatbot",
        "Face Recognition System",
        "Sentiment Analysis",
        "Automation Scripts",
      ],
      skills: ["Python", "Machine Learning", "Deep Learning", "NLP", "OpenCV"],
      outcome: "AI/ML developer ready",
    },
    {
      title: "Cyber Security",
      icon: <Shield className="h-8 w-8" />,
      color: "from-red-600 to-rose-600",
      duration: "2-3 Months",
      projects: [
        "Vulnerability Assessment",
        "Network Security Audit",
        "Security Awareness",
        "Penetration Testing",
      ],
      skills: ["Network Security", "Ethical Hacking", "Firewall", "Encryption"],
      outcome: "Cyber security analyst",
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="h-8 w-8" />,
      color: "from-teal-600 to-cyan-600",
      duration: "2-3 Months",
      projects: [
        "E-commerce App",
        "Fitness Tracker",
        "Food Delivery App",
        "Social Media App",
      ],
      skills: ["Flutter", "React Native", "Firebase", "REST APIs"],
      outcome: "Mobile app developer",
    },
  ];

  const benefits = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Real-World Experience",
      desc: "Work on actual industry projects that companies are using.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Mentorship",
      desc: "Get guidance from industry experts with 10+ years of experience.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Certification",
      desc: "Earn a recognized internship certificate that boosts your resume.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Placement Support",
      desc: "Top performers get direct placement assistance and referrals.",
    },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      course: "BCA Student",
      internship: "MERN Stack Development",
      quote:
        "The live project internship at Success Point College gave me real-world experience. I built an e-commerce platform from scratch and got hired right after completion!",
      rating: 5,
      image: "👨‍💻",
    },
    {
      name: "Priya Patel",
      course: "MCA Student",
      internship: "Data Analytics",
      quote:
        "I worked on real client data and created dashboards that actually helped businesses. This internship transformed my career path.",
      rating: 5,
      image: "👩‍💻",
    },
    {
      name: "Amit Kumar",
      course: "Digital Marketing Student",
      internship: "Digital Marketing",
      quote:
        "I managed a live social media campaign with a ₹50,000 budget. The experience was amazing and I got placed as a Digital Marketing Executive.",
      rating: 5,
      image: "📱",
    },
  ];

  const companies = [
    "TCS", "Infosys", "Wipro", "Capgemini", "Accenture",
    "Amazon", "Flipkart", "Google", "Microsoft", "IBM"
  ];

  const faqs = [
    {
      q: "Who can apply for the internship program?",
      a: "Our internship is open to BCA, MCA, B.Sc, and graduate students. We also welcome final-year students and fresh graduates looking to gain industry experience.",
    },
    {
      q: "Is this a paid internship?",
      a: "We offer both paid and unpaid internships based on the project and performance. Top performers may also receive stipends and performance bonuses.",
    },
    {
      q: "What is the duration of the internship?",
      a: "Internships typically range from 2 to 3 months, depending on the program and project requirements. Flexible timings are available for students.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, every intern receives a completion certificate and a detailed project report. This adds significant value to your resume.",
    },
    {
      q: "Is this internship online or offline?",
      a: "We offer both online and offline internship options. You can choose based on your convenience and location.",
    },
    {
      q: "What is the selection process?",
      a: "Selection is based on your academic background, skills assessment, and a personal interview. We look for passion and willingness to learn.",
    },
  ];

  return (
    <section className="bg-white overflow-x-hidden">

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-700 py-20">
        {/* Animated elements */}
        <div className="absolute top-10 right-10 animate-float opacity-20">
          <Rocket className="h-24 w-24 text-white" />
        </div>
        <div className="absolute bottom-10 left-10 animate-pulse opacity-20">
          <Code2 className="h-20 w-20 text-white" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Briefcase className="h-64 w-64 text-white" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-white backdrop-blur">
            <Sparkles className="h-4 w-4" />
            <span className="font-semibold">🚀 Limited Seats Available</span>
          </div>

          <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
            Live Project <br />
            <span className="text-yellow-300">Internship Program</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-white/90">
            Build real-world skills with industry projects. Get hands-on experience,
            expert mentorship, and a certificate that <strong className="text-yellow-200">stands out</strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#apply-now"
              className="group rounded-full bg-white px-8 py-4 font-bold text-purple-700 shadow-2xl transition hover:scale-105 hover:shadow-2xl"
            >
              <span className="flex items-center gap-2">
                Apply Now
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
              <span>200+ Interns Placed</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-300" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              <span>50+ Partner Companies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Internship Section */}
      <div className="py-20 bg-gradient-to-b from-white to-indigo-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              Why Internship?
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              Why Choose a <span className="text-indigo-600">Live Project Internship?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Bridge the gap between academic knowledge and industry requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100">
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
              Internship Programs <span className="text-blue-600">By Course</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Choose your domain and work on live projects that match your career goals.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {internshipPrograms.map((program, idx) => (
              <div
                key={idx}
                className="group rounded-3xl border-2 p-8 transition hover:-translate-y-2 hover:border-indigo-300 hover:shadow-2xl"
              >
                <div className={`inline-flex rounded-2xl bg-gradient-to-br ${program.color} p-4 text-white`}>
                  {program.icon}
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {program.title}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{program.duration}</span>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700">Projects:</p>
                    <ul className="mt-2 space-y-1">
                      {program.projects.map((project, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="mt-0.5 h-3 w-3 text-green-500" />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700">Skills:</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {program.skills.slice(0, 4).map((skill, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                      {program.skills.length > 4 && (
                        <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
                          +{program.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 border-t pt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">Outcome:</span> {program.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
              Success Stories
            </span>
            <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
              What Our <span className="text-indigo-600">Interns Say</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{testimonial.image}</span>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.course}</p>
                    <p className="text-sm text-indigo-600">{testimonial.internship}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1 text-yellow-500">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500" />
                  ))}
                </div>
                <p className="mt-3 text-gray-700">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Interns Work With <span className="text-indigo-600">Top Companies</span>
            </h2>
            <p className="mt-3 text-gray-600">
              Our alumni have been placed at leading companies across India.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-8">
            {companies.map((company, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-gray-50 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20 bg-gradient-to-br from-indigo-700 to-purple-700 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              How It <span className="text-yellow-300">Works</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Simple 4-step process to start your internship journey.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Apply",
                desc: "Fill the application form with your details and choose your preferred program.",
                icon: <FileText className="h-8 w-8" />,
              },
              {
                step: "2",
                title: "Assessment",
                desc: "Complete a skills assessment and attend a personal interview.",
                icon: <Brain className="h-8 w-8" />,
              },
              {
                step: "3",
                title: "Join Program",
                desc: "Start your internship with orientation and project allocation.",
                icon: <Users className="h-8 w-8" />,
              },
              {
                step: "4",
                title: "Build & Grow",
                desc: "Work on live projects, get mentored, and earn your certificate.",
                icon: <TrendingUp className="h-8 w-8" />,
              },
            ].map((item, idx) => (
              <div key={idx} className="relative text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 text-3xl font-bold">
                  {item.step}
                </div>
                <div className="mt-4">
                  <div className="flex justify-center text-indigo-200">{item.icon}</div>
                  <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <ChevronRight className="absolute -right-4 top-10 hidden text-indigo-300 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
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

      {/* Application Form */}
      <div id="apply-now" className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-white p-12 shadow-2xl">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-indigo-700">
                <Sparkles className="h-4 w-4" />
                Apply Now
              </div>
              <h2 className="mt-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Start Your Live Project Internship Today!
              </h2>
              <p className="mt-3 text-gray-600">
                Limited seats available. Fill the form below and our team will reach out to you.
              </p>
            </div>

            <form className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    required
                    className="mt-2 w-full rounded-lg border-2 p-3 focus:border-indigo-500 focus:outline-none"
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="mt-2 w-full rounded-lg border-2 p-3 focus:border-indigo-500 focus:outline-none"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="mt-2 w-full rounded-lg border-2 p-3 focus:border-indigo-500 focus:outline-none"
                    placeholder="9876543210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Qualification *
                  </label>
                  <select
                    name="qualification"
                    required
                    className="mt-2 w-full rounded-lg border-2 p-3 focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="">Select Qualification</option>
                    <option value="bca">BCA</option>
                    <option value="mca">MCA</option>
                    <option value="bsc">B.Sc</option>
                    <option value="btech">B.Tech</option>
                    <option value="mtech">M.Tech</option>
                    <option value="graduate">Graduate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Internship Program *
                  </label>
                  <select
                    name="program"
                    required
                    className="mt-2 w-full rounded-lg border-2 p-3 focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="">Select Program</option>
                    <option value="mern">MERN Stack Development</option>
                    <option value="data">Data Analytics & Power BI</option>
                    <option value="digital">Digital Marketing</option>
                    <option value="python">Python Development & AI</option>
                    <option value="cyber">Cyber Security</option>
                    <option value="mobile">Mobile App Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Mode *
                  </label>
                  <select
                    name="mode"
                    required
                    className="mt-2 w-full rounded-lg border-2 p-3 focus:border-indigo-500 focus:outline-none"
                  >
                    <option value="">Select Mode</option>
                    <option value="offline">Offline (Sikar Campus)</option>
                    <option value="online">Online (Anywhere)</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Why do you want to join this internship?
                </label>
                <textarea
                  rows={3}
                  name="message"
                  className="mt-2 w-full rounded-lg border-2 p-3 focus:border-indigo-500 focus:outline-none"
                  placeholder="Tell us about your goals, interests, and what you hope to learn..."
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 py-4 text-lg font-bold text-white transition hover:scale-105 hover:shadow-xl"
              >
                🚀 Apply Now – Limited Seats!
              </button>
              <p className="text-center text-sm text-gray-500">
                We'll contact you within 24 hours. No spam, guaranteed.
              </p>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}