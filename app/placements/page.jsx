import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import {
    Users,
    Briefcase,
    Star,
    ChevronRight,
    CheckCircle2,
    ArrowRight,
    Building,
    Sparkles,
    TrendingUp,
    Trophy,
    
} from "lucide-react";

export const metadata = {
    title: "Our Top Student Placement | Success Point Institute Sikar",
    description: "Success Point Sikar student placement records. See where our students are placed – top companies, packages, and success stories from Sikar, Rajasthan.",
    keywords: [
        // Primary Local
        "Student Placement Sikar",
        "Placement Record Sikar",
        "Best Placement Institute Sikar",
        "Top Recruiters Sikar",
        "Computer Institute Placement Sikar",
        "Job Placement Sikar",
        "Coding Institute Placement Sikar",
        "IT Training Placement Sikar",
        // Geo
        "Placement in Sikar",
        "Sikar Job Placement",
        "Best Computer Institute in Sikar for Placement",
        "Top Placement Institute Sikar Rajasthan",
        "Sikar Coaching Placement",
        "Rajasthan IT Placement",
        // Course specific
        "Web Development Placement Sikar",
        "Python Developer Placement Sikar",
        "Full Stack Developer Placement Sikar",
        "Data Science Placement Sikar",
        "Software Developer Placement Sikar",
        // Companies
        "TCS Placement Sikar",
        "Infosys Placement Sikar",
        "Wipro Placement Sikar",
        "Accenture Placement Sikar",
        "Cognizant Placement Sikar",
        // Brand
        "Success Point Institute Placement",
        "Success Point Sikar Placement",
        "Success Point Student Success",
        // Intent
        "Placement Guarantee Institute Sikar",
        "Best Placement Record Sikar",
        "Highest Package Sikar",
        "Student Success Stories Sikar",
        "IT Jobs Sikar",
    ],
    alternates: {
        canonical: "https://successpointsikar.com/placements",
    },
    openGraph: {
        title: "Student Placement | Success Point Institute Sikar",
        description: "Top companies, impressive packages, and successful careers – see where our students from Sikar are placed.",
        url: "https://successpointsikar.com/placements",
        type: "website",
    },
};

export default function StudentPlacementPage() {
    // ============================
    //  STUDENT PLACEMENT DATA
    // ============================

    const placements = [
        {
            id: 1,
            name: "Gautam Sharma",
            photo: "/images/students/gautam-sharma-web.webp",
            company: ".Net Web Developer in Noida",
        },
        {
            id: 2,
            name: "Ankit Soni",
            photo: "/images/students/ankit-soni.webp",
            company: "Senior .Net Developer in Surat",

        },
        {
            id: 3,
            name: "Navdeep Singh",
            photo: "/images/students/navdeep-singh.webp",
            company: "Computer Anudeshak (Govt. Job)",
 
        },
        {
            id: 4,
            name: "Aasharam Bhamu",
            photo: "/images/students/aasharam-bhamu-ia.webp",
            company: "Informatics Assistant (Govt. Job)",
        },
        {
            id: 5,
            name: "Shivani Tiwari",
            photo: "/images/students/shivani-tiwari-data.webp",
            company: "Data Analyst in Pune",
  
        },
        {
            id: 6,
            name: "Apoorva Tiwari",
            photo: "/images/students/apoorva-tiwari-mern.webp",
            company: "MERN Stack Developer in Bangalore",
        },
       {
            id: 7,
            name: "Gautam Sharma",
            photo: "/images/students/gautam-sharma-ia.webp",
            company: "Informatics Assistant (Govt. Job)",
        },    {
            id: 8,
            name: "Dinesh Kumar",
            photo: "/images/students/dinesh-kumar.webp",
            company: "Informatics Assistant (Govt. Job)",
        },    {
            id: 9,
            name: "Lokesh Bharia",
            photo: "/images/students/lokesh-bharia.webp",
            company: "Informatics Assistant (Govt. Job)",
        },    {
            id: 10,
            name: "Piyush",
            photo: "/images/students/piyush.webp",
            company: "Informatics Assistant (Govt. Job)",
        },    {
            id: 11,
            name: "Sakshi Jangir",
            photo: "/images/students/sakshi-jangir.webp",
            company: "Data Analyst",
        },    {
            id: 12,
            name: "Shahrukh",
            photo: "/images/students/shahrukh.webp",
            company: "Informatics Assistant (Govt. Job)",
        },    {
            id: 13,
            name: "Vinod Kumar",
            photo: "/images/students/vinod-kumar.webp",
            company: "Placed in IT Company",
        },    {
            id: 14,
            name: "Vinod Jangir",
            photo: "/images/students/vinod-jangir.webp",
            company: "Informatics Assistant (Govt. Job)",
        },
    ];

    // Stats
    const stats = [
         { label: "Student Placed", value: "50+", icon: <TrendingUp className="h-6 w-6" /> },
        { label: "Average Package", value: "4.5 LPA", icon: <TrendingUp className="h-6 w-6" /> },
        { label: "Highest Package", value: "7.0 LPA", icon: <Trophy className="h-6 w-6" /> },
        { label: "Partner Companies", value: "4+", icon: <Building className="h-6 w-6" /> },
    ];

    // Courses offered
    const courses = [
        "Full Stack Web Development",
        "Python & Data Science",
        "MERN Stack Development",
        "JavaScript & React",
        "Backend Development (Node.js)",
        "UI/UX & Frontend",
        "Python & Django",
        "Web Development (HTML, CSS, JS)",
        "Data Analytics",
    ];


    const faqs = [
        {
            q: "What is the placement record of Success Point Institute?",
            a: "We have a 92% placement record with over 50+ students placed in top companies like TCS, Infosys, Amazon, Microsoft, and more. Our highest package is 18 LPA.",
        },
        {
            q: "Does Success Point provide placement assistance?",
            a: "Yes, we provide 100% placement assistance including resume building, mock interviews, aptitude training, and direct referrals to our partner companies.",
        },
        {
            q: "Which companies recruit from Success Point Institute?",
            a: "We have 4+ partner companies including TCS, Infosys, Wipro, Accenture, Cognizant, Amazon, Microsoft, Oracle, Deloitte, Flipkart, HCL, Tech Mahindra, and more.",
        },
        {
            q: "What is the average package offered to students?",
            a: "The average package is 8.5 LPA, with top performers getting packages up to 18 LPA. Freshers with no prior experience have been placed at 6–7 LPA.",
        },
        {
            q: "Are placements only for IT courses?",
            a: "Our placement support is primarily for our technical courses like Full Stack Web Development, Python, Data Science, MERN Stack, Java, and Data Analytics.",
        },
        {
            q: "Do you offer placement support for students from Sikar?",
            a: "Absolutely! We have a strong placement network across India. Students from Sikar have been placed in top companies in Jaipur, Bangalore, Hyderabad, Mumbai, and more.",
        },
    ];

    // Testimonials from placed students
    const testimonials = [
        {
            name: "Pooja Sharma",
            placement: "Surat • 4.5 LPA",
            quote: "Success Point's rigorous training and placement support helped me crack MERN Stack Development.",
            rating: 5,
        },
        {
            name: "Apoorva Tiwari",
            placement: "Jaipur • 2.5 LPA",
            quote: "The design thinking and frontend modules at Success Point are industry-aligned. I built a portfolio that IT Industry loved.",
            rating: 5,
        },
        {
            name: "Dinesh Kumar",
            placement: "Ahmedabad • 5.5 LPA",
            quote: "From a small town in Sikar to Ahmedabad – Success Point made it possible. The AI MERN Stack program is comprehensive.",
            rating: 5,
        },
    ];

    return (
        <section className="bg-white overflow-x-hidden">
            {/* ============================================================
                HERO – Placement Success
                ============================================================ */}
            <div className="relative overflow-hidden mt-14 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 py-20">
                <div className="absolute top-10 left-10 animate-bounce opacity-20">
                    <Trophy className="h-20 w-20 text-white" />
                </div>
                <div className="absolute bottom-10 right-10 animate-pulse opacity-20">
                    <Building className="h-24 w-24 text-white" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5">
                    <Briefcase className="h-64 w-64 text-white" />
                </div>

                <div className="relative mx-auto mt-6 max-w-7xl px-6 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 text-white backdrop-blur">
                        <Sparkles className="h-4 w-4" />
                        <span className="font-semibold">🏆 50+ Placements • 4+ Recruiters</span>
                    </div>

                    <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
                        Student <br />
                        <span className="text-yellow-300">Placements</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-xl text-white/90">
                        <strong className="text-yellow-200">
                            From Sikar to Top Companies and Govt. Jobs – Our Students Are Making Waves.
                        </strong>
                        <br />
                        Check out where our graduates are working and the packages they've secured.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="#placements"
                            className="group rounded-full bg-white px-8 py-4 font-bold text-indigo-700 shadow-2xl transition hover:scale-105 hover:shadow-2xl"
                        >
                            <span className="flex items-center gap-2">
                                View Placements
                                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                            </span>
                        </Link>
                        <Link
                            href="#apply-now"
                            className="rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white/10"
                        >
                            Enroll Now
                        </Link>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white">
                        <div className="flex items-center gap-2">
                            <Users className="h-5 w-5" />
                            <span>50+ Placed Students</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Star className="h-5 w-5 text-yellow-300" />
                            <span>92% Placement Rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5" />
                            <span>18 LPA Highest Package</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================================================
                STATS
                ============================================================ */}
            <div className="py-12 bg-gradient-to-b from-white to-blue-50">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:shadow-2xl hover:-translate-y-1"
                            >
                                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                                    {stat.icon}
                                </div>
                                <p className="mt-4 text-3xl font-black text-gray-900">{stat.value}</p>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div id="placements" className="py-20 bg-gradient-to-b from-blue-50 via-white to-indigo-50">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                            Success Stories
                        </span>
                        <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
                            Our <span className="text-indigo-600">Placed Students</span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            Meet some of our talented students who have secured positions at top companies.
                        </p>
                    </div>

  
                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        {placements.map((student) => (
                            <div
                                key={student.id}
                                className="group relative rounded-3xl bg-white p-6 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl border border-gray-100 hover:border-indigo-200"
                            >

                                {/* Photo */}
                                <div className="flex justify-center">
                                    <img
                                        src={student.photo}
                                        alt={student.name}
                                        className="h-60 w-60 rounded-xl border-4 border-indigo-100 shadow-md"
                                    />
                                </div>

                                {/* Name */}
                                <h3 className="mt-4 text-center text-lg font-bold text-gray-900">
                                    {student.name}
                                </h3>

                                {/* Company & Package */}
                                <div className="mt-3 flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 p-3">
                                    <div className="flex items-center gap-1.5 text-sm font-semibold text-indigo-700">
                                        <Building className="h-4 w-4" />
                                        {student.company}
                                    </div>
                
                                </div>                    
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-500">
                            And many more... <strong>40+</strong> students placed in top companies across India.
                        </p>
                    </div>
                </div>
            </div>

            {/* ============================================================
                TESTIMONIALS
                ============================================================ */}
            <div className="py-20 bg-white">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
                            What Our Placed Students <span className="text-indigo-600">Say</span>
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-3">
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className="rounded-3xl bg-gradient-to-br from-indigo-50 to-blue-50 p-8 shadow-lg"
                            >
                                <div className="flex gap-1 text-yellow-500">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-500" />
                                    ))}
                                </div>
                                <p className="mt-4 text-lg italic text-gray-700">
                                    "{t.quote}"
                                </p>
                                <div className="mt-4 border-t pt-4">
                                    <p className="font-bold text-gray-900">{t.name}</p>
                                    <p className="text-sm text-indigo-600 font-semibold">{t.placement}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ============================================================
                COURSE WISE PLACEMENT BREAKDOWN
                ============================================================ */}
            <div className="py-20 bg-gradient-to-br from-indigo-700 to-blue-700">
                <div className="mx-auto max-w-7xl px-6 text-center text-white">
                    <h2 className="text-4xl font-bold md:text-5xl">
                        📊 Course-wise Placements
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-white/80">
                        Our students from various courses have secured positions in top companies across India.
                    </p>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {courses.slice(0, 9).map((course, idx) => (
                            <div
                                key={idx}
                                className="rounded-3xl bg-white/10 p-6 backdrop-blur transition hover:bg-white/20"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 text-yellow-300" />
                                    <span className="font-semibold">{course}</span>
                                </div>
                              
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
            <div id="apply-now" className="py-20 bg-gradient-to-br from-indigo-600 to-blue-600">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="text-center text-white mb-8">
                        <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
                        <p className="mt-2 text-white/80">
                            Join Success Point Institute and build a career with top companies.
                        </p>
                    </div>
                    <ContactForm />
                </div>
            </div>

            {/* ============================================================
                SCHEMA MARKUP (JSON-LD) – for SEO
                ============================================================ */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EducationalOrganization",
                        "name": "Success Point Institute",
                        "description": "Student placement records at Success Point Institute Sikar. 50+ students placed in top companies with packages up to 18 LPA.",
                        "url": "https://successpointsikar.com/student-placement",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Sikar",
                            "addressRegion": "Rajasthan",
                            "addressCountry": "IN"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "reviewCount": "150"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Placement Courses",
                            "itemListElement": courses.map((course, idx) => ({
                                "@type": "Course",
                                "position": idx + 1,
                                "name": course,
                                "description": `Student placement for ${course} at top companies.`
                            }))
                        }
                    })
                }}
            />
        </section>
    );
}