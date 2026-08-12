import Link from "next/link";
import {
  FileText,
  Shield,
  Users,
  Scale,
  AlertCircle,
  Briefcase,
  Clock,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Handshake,
} from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Success Point Institute Sikar",
  description:
    "Read the terms and conditions of using the Success Point Institute website and services. Understand your rights, obligations, and our policies regarding content, admissions, and more.",
  keywords: [
    "Terms and Conditions Success Point Institute",
    "Website Terms Sikar",
    "Success Point Institute Policies",
    "User Agreement Rajasthan",
    "College Terms of Use",
    "Acceptable Use Policy",
  ],
  alternates: {
    canonical: "https://successpointsikar.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Success Point Institute Sikar",
    description:
      "Review the terms and conditions for using the Success Point Institute website and accessing our educational services.",
    url: "https://successpointsikar.com/terms-and-conditions",
    type: "website",
  },
};

export default function TermsConditionsPage() {
  const sections = [
    {
      icon: <Scale className="h-8 w-8 text-indigo-600" />,
      title: "Acceptance of Terms",
      items: [
        "By using the Success Point Institute website, you agree to comply with these terms.",
        "If you do not agree with any part of these terms, please refrain from using our website.",
        "We reserve the right to update these terms at any time; continued use constitutes acceptance.",
      ],
    },
    {
      icon: <BookOpen className="h-8 w-8 text-indigo-600" />,
      title: "Intellectual Property",
      items: [
        "All content on this website – including text, graphics, logos, images, and course materials – is the property of Success Point Institute.",
        "You may not reproduce, distribute, or commercially exploit any content without prior written consent.",
        "Course materials provided to students are for personal educational use only.",
      ],
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "User Responsibilities",
      items: [
        "You agree to provide accurate and truthful information during the admission process.",
        "You are solely responsible for maintaining the confidentiality of your account credentials.",
        "Any misuse of the website, including attempts to disrupt services, is strictly prohibited.",
      ],
    },
    {
      icon: <Briefcase className="h-8 w-8 text-indigo-600" />,
      title: "Admission & Fee Policy",
      items: [
        "Admission is confirmed only after completion of the application process and payment of applicable fees.",
        "Fees are subject to change; the fee structure applicable at the time of admission will be communicated.",
        "Refund policies are outlined separately in the Refund Policy document.",
      ],
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-indigo-600" />,
      title: "Disclaimer of Warranties",
      items: [
        "The website and its content are provided on an 'as is' and 'as available' basis without warranties of any kind.",
        "We do not guarantee that the website will be error‑free, secure, or continuously available.",
        "Course outcomes may vary; we do not guarantee specific job placements or career results.",
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "Limitation of Liability",
      items: [
        "Success Point Institute shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services.",
        "Our total liability, in any case, is limited to the total fee paid by the student for the relevant course.",
        "We are not responsible for the content of external websites linked from our site.",
      ],
    },
    {
      icon: <Handshake className="h-8 w-8 text-indigo-600" />,
      title: "Governing Law",
      items: [
        "These terms shall be governed by and construed in accordance with the laws of India.",
        "Any disputes arising under these terms shall be subject to the exclusive jurisdiction of courts in Sikar, Rajasthan.",
      ],
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: "Modifications & Termination",
      items: [
        "We reserve the right to modify or discontinue any part of the website or services at any time.",
        "We may terminate user access for violations of these terms without prior notice.",
        "Any changes to these terms will be posted on this page with an updated revision date.",
      ],
    },
  ];

  return (
    <section className="bg-white mt-6">
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Legal & Policies
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Terms & Conditions
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-indigo-100">
            Please read these terms carefully before using the Success Point
            College website or enrolling in our courses. By using our services,
            you agree to be bound by these terms.
          </p>
          <p className="mt-4 text-sm text-indigo-200">
            Last updated: 01 January 2026
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl bg-indigo-50 p-10 shadow-lg">
          <div className="flex items-start gap-4">
            <FileText className="h-10 w-10 shrink-0 text-indigo-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Understanding Your Agreement
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                This Terms and Conditions agreement governs your use of the
                Success Point Institute website, application forms, and all
                related services. It applies to all visitors, students, and
                users. Please review these terms carefully before proceeding.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                By accessing this website or submitting any admission forms, you
                accept these terms in full. If you disagree with any part, you
                must not use our website or services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sections */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50">
                    {section.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Clauses */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <AlertCircle className="h-7 w-7 text-indigo-600" />
                Entire Agreement
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                These terms constitute the entire agreement between you and
                Success Point Institute regarding the use of our website and
                services. They supersede any prior agreements or understandings.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <Scale className="h-7 w-7 text-indigo-600" />
                Severability
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                If any provision of these terms is found to be invalid or
                unenforceable, the remaining provisions will remain in full
                force and effect.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Have Questions About These Terms?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            If you need clarification on any part of these terms, feel free to
            reach out to us.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-xl bg-indigo-50 p-6">
              <Mail className="h-8 w-8 text-indigo-600" />
              <p className="mt-2 font-medium text-gray-900">Email</p>
              <a
                href="mailto:info@successpointcollege.com"
                className="text-indigo-700 hover:underline"
              >
                info@successpointcollege.com
              </a>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-indigo-50 p-6">
              <Phone className="h-8 w-8 text-indigo-600" />
              <p className="mt-2 font-medium text-gray-900">Phone</p>
              <a href="tel:+919876543210" className="text-indigo-700 hover:underline">
                +91-98765-43210
              </a>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-indigo-50 p-6">
              <MapPin className="h-8 w-8 text-indigo-600" />
              <p className="mt-2 font-medium text-gray-900">Address</p>
              <p className="text-center text-sm text-gray-700">
                Success Point Institute, Sikar, Rajasthan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Handshake className="mx-auto h-16 w-16 text-indigo-600" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Thank You for Choosing Us
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are committed to providing a transparent and trustworthy
            experience. These terms ensure a clear understanding of our
            relationship and your rights.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-indigo-600 px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700"
            >
              Return to Home
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-indigo-600 px-8 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}