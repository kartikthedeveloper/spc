import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  ClipboardCheck,
  Users,
  Calendar,
  BookOpen,
  Award,
  Clock,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import AdmissionForm from "@/components/AdmissionForm"; // 👈 new import

export const metadata = {
  title: "Admission Process | Success Point Institute Sikar",
  description:
    "Learn about the easy and transparent admission process at Success Point Institute Sikar. Apply online, document verification, counselling, and enrollment for BCA, MCA, and professional courses.",
  keywords: [
    "Admission Process Success Point Institute",
    "How to apply Success Point Institute",
    "Admission in BCA Sikar",
    "Admission in MCA Sikar",
    "Computer College Admission Sikar",
    "Admission procedure Rajasthan",
    "Success Point Institute admission 2026",
  ],
  alternates: {
    canonical: "https://successpointsikar.com/admission-process",
  },
  openGraph: {
    title: "Admission Process | Success Point Institute Sikar",
    description:
      "Step-by-step guide to admission at Success Point Institute. Apply now for BCA, MCA, and professional courses.",
    url: "https://successpointsikar.com/admission-process",
    type: "website",
  },
};

export default function AdmissionProcessPage() {
  const steps = [
    {
      icon: <FileText className="h-8 w-8 text-indigo-600" />,
      title: "Fill Application Form",
      description:
        "Submit your basic details, educational qualifications, and course preferences through our online or offline application form.",
    },
    {
      icon: <ClipboardCheck className="h-8 w-8 text-indigo-600" />,
      title: "Document Verification",
      description:
        "Our admissions team verifies your academic records, identity proofs, and other required documents.",
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Counseling & Interview",
      description:
        "Attend a personal counseling session to discuss your career goals, course suitability, and any queries you may have.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-indigo-600" />,
      title: "Admission Confirmation",
      description:
        "Upon successful verification and counseling, you will receive an admission offer letter. Confirm your seat by paying the required fee.",
    },
  ];

  const documents = [
    "Class 10th Marksheet & Certificate",
    "Class 12th Marksheet & Certificate (for graduation courses)",
    "Graduation Marksheet & Degree (for post-graduation courses)",
    "Transfer Certificate (TC) from previous institution",
    "Migration Certificate (if applicable)",
    "Character Certificate",
    "Passport-size Photographs (4 copies)",
    "Aadhaar Card Copy",
    "Caste Certificate (if applicable for reservation)",
  ];

  const faqs = [
    {
      q: "What is the admission process for BCA/MCA?",
      a: "The admission process is completely online. You need to fill the application form, submit required documents, attend a counseling session (online/offline), and pay the admission fee to confirm your seat.",
    },
    {
      q: "Is there an entrance exam for admission?",
      a: "No, admission is strictly based on your academic merit and performance in the personal interview/counseling session.",
    },
    {
      q: "Can I apply for multiple courses?",
      a: "Yes, you can apply for multiple courses. You will be given options during the counseling process to choose your preferred program.",
    },
    {
      q: "What are the eligibility criteria for professional courses?",
      a: "Eligibility varies by course. Generally, for certificate and diploma courses you need 10+2 pass, and for PG diploma you need a graduation degree. Detailed criteria are mentioned on each course page.",
    },
    {
      q: "Is there any scholarship or fee concession?",
      a: "Yes, merit-based scholarships and concessions are available for deserving students. Please contact the admissions cell for more details.",
    },
  ];

  return (
    <section className="bg-white mt-6">
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Admissions 2026
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Admission Process
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-indigo-100">
            A transparent, hassle-free admission process designed to help you
            start your journey at Success Point Institute, Sikar.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/course-category/graduation-courses"
              className="rounded-full bg-white px-8 py-4 font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
            >
              Graduation Course
            </Link>
            <Link
              href="/course-category/post-graduation-courses"
              className="rounded-full bg-white px-8 py-4 font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
            >
              Post Graduation Course
            </Link>   <Link
              href="/course-category/computer-courses"
              className="rounded-full bg-white px-8 py-4 font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
            >
              Computer Course
            </Link>   <Link
              href="/course-category/professional-courses"
              className="rounded-full bg-white px-8 py-4 font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
            >
              Professional Course
            </Link>

          </div>

        </div>
      </div>
       
      {/* Steps */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          How to Apply
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
          Follow these simple steps to secure your admission at Success Point
          College.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-3xl border bg-white p-8 shadow-lg transition hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50">
                {step.icon}
              </div>
              <div className="mt-5">
                <span className="text-sm font-semibold text-indigo-600">
                  Step {index + 1}
                </span>
                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ChevronRight className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-indigo-300 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Documents & Eligibility */}
      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Documents */}
            <div className="rounded-3xl bg-white p-10 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900">
                Required Documents
              </h2>
              <p className="mt-3 text-gray-600">
                Please keep these documents ready before you begin the
                application process.
              </p>
              <ul className="mt-8 space-y-4">
                {documents.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility Summary */}
            <div className="rounded-3xl bg-indigo-50 p-10 shadow-lg">
              <h2 className="text-3xl font-bold text-indigo-700">
                Eligibility Criteria
              </h2>
              <p className="mt-3 text-gray-700">
                Basic eligibility requirements for our most popular programs:
              </p>
              <div className="mt-8 space-y-6">
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                    <BookOpen className="h-6 w-6 text-indigo-600" />
                    Graduation Courses (BCA, etc.)
                  </h3>
                  <p className="mt-2 text-gray-700">
                    10+2 (or equivalent) from a recognised board in any stream.
                    Basic mathematics recommended.
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                    <Award className="h-6 w-6 text-indigo-600" />
                    Post Graduation Courses (MCA, etc.)
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Graduation (BCA/B.Sc/B.Com etc.) with mathematics at 10+2 or
                    graduation level.
                  </p>
                </div>
                <div>
                  <h3 className="flex items-center gap-2 text-xl font-bold text-gray-900">
                    <Clock className="h-6 w-6 text-indigo-600" />
                    Professional & Skill Courses
                  </h3>
                  <p className="mt-2 text-gray-700">
                    Passed 12th or graduation (depending on course); no
                    programming background required for most.
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-gray-600">
                * For detailed eligibility, visit individual course pages.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose Success Point Institute?
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <Users className="h-8 w-8 text-indigo-600" />,
                title: "Expert Faculty",
                desc: "Learn from industry professionals with years of teaching and corporate experience.",
              },
              {
                icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
                title: "Practical Learning",
                desc: "Hands-on projects, live training, and internships to build real-world skills.",
              },
              {
                icon: <MapPin className="h-8 w-8 text-indigo-600" />,
                title: "Located in Sikar",
                desc: "A premier educational hub in Rajasthan, with easy accessibility and modern infrastructure.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-3xl border bg-white p-8 text-center shadow-lg transition hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 👇 NEW: Admission Form Section */}
      <div className="bg-gray-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Apply Now – Fill the Admission Form
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Complete the form below and our team will assist you with the next
              steps.
            </p>
          </div>
          <AdmissionForm />
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-gray-50 py-20"> {/* changed bg to white? Actually keep consistent, but we already have bg-gray-50 above, so we can combine or use white for FAQs. I'll keep as is */}
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border bg-white p-6 transition hover:shadow-md"
              >
                <summary className="cursor-pointer font-semibold text-gray-900 flex items-center justify-between">
                  <span>{faq.q}</span>
                  <ChevronRight className="h-5 w-5 text-indigo-600 transition group-open:rotate-90" />
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-600 p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to Take the Next Step?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-indigo-100">
            Start your admission process today and unlock a world of
            opportunities at Success Point Institute, Sikar.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/infrastructure"
              className="rounded-full bg-white px-8 py-4 font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
            >
              Inside Success Point
            </Link>
            <a
              href="tel:+919876543210"
              className="rounded-full border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="mr-2 inline h-5 w-5" />
              Call Us
            </a>
          </div>
          {/* <p className="mt-6 text-sm text-indigo-200">
            For any queries, email us at{" "}
            <a href="mailto:kartik.thedeveloper@gmail.com" className="underline">
              kartik.thedeveloper@gmail.com
            </a>
          </p> */}
        </div>
      </div>
    </section>
  );
}