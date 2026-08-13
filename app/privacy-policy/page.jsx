import Link from "next/link";
import {
  Shield,
  Lock,
  Eye,
  Cookie,
  Database,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Clock,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Success Point Institute Sikar",
  description:
    "Read the privacy policy of Success Point Institute Sikar. Learn how we collect, use, and protect your personal data when you visit our website or apply for admission.",
  keywords: [
    "Privacy Policy Success Point Institute",
    "Data Protection Sikar",
    "Student Privacy",
    "Website Privacy Policy",
    "Information Security Rajasthan",
    "Success Point Institute Privacy",
  ],
  alternates: {
    canonical: "https://successpointsikar.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Success Point Institute Sikar",
    description:
      "We are committed to protecting your privacy. Read our full privacy policy to understand how your data is handled.",
    url: "https://successpointsikar.com/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: <Database className="h-8 w-8 text-indigo-600" />,
      title: "Information We Collect",
      items: [
        "Personal identification details (name, email, phone, address)",
        "Academic records and educational history",
        "Course preferences and application data",
        "Device and browser information (IP, cookies)",
        "Communications you send us via email or contact forms",
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: "How We Use Your Information",
      items: [
        "Process admission applications and enrollment",
        "Communicate important updates about courses, events, and deadlines",
        "Improve our website functionality and user experience",
        "Analyze trends to enhance our educational offerings",
        "Comply with legal and regulatory requirements",
      ],
    },
    {
      icon: <Cookie className="h-8 w-8 text-indigo-600" />,
      title: "Cookies & Tracking Technologies",
      items: [
        "We use essential cookies for website functionality",
        "Analytics cookies help us understand visitor behavior",
        "You can manage cookie preferences in your browser settings",
        "No personal data is collected through cookies without your consent",
      ],
    },
    {
      icon: <Lock className="h-8 w-8 text-indigo-600" />,
      title: "Data Security & Retention",
      items: [
        "We implement industry-standard security measures to protect your data",
        "Personal information is stored securely and accessed only by authorised staff",
        "Data is retained for as long as necessary to fulfil the purposes outlined",
        "We do not sell, rent, or share your data with third parties for marketing purposes",
      ],
    },
  ];

  return (
    <section className="bg-white mt-6">
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Privacy & Security
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-indigo-100">
            At Success Point Institute, we are committed to protecting your
            personal information. This policy explains how we collect, use, and
            safeguard your data.
          </p>
          <p className="mt-4 text-sm text-indigo-200">
            Last updated: 13 August 2026
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl bg-indigo-50 p-10 shadow-lg">
          <div className="flex items-start gap-4">
            <Eye className="h-10 w-10 shrink-0 text-indigo-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Our Commitment to Privacy
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Success Point Institute respects your privacy. This Privacy Policy
                applies to all visitors, students, and users of our website and
                services. By using our website, you agree to the collection and
                use of information in accordance with this policy.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                We collect information to provide better educational services,
                improve our online experience, and communicate effectively with
                you. We handle all data in compliance with applicable Indian
                privacy laws.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Sections */}
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

      {/* Third-Party Links & Updates */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <ExternalLink className="h-7 w-7 text-indigo-600" />
                Third-Party Links
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Our website may contain links to external sites. We are not
                responsible for the privacy practices of those websites. We
                encourage you to review their privacy policies before providing
                any personal information.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <Clock className="h-7 w-7 text-indigo-600" />
                Policy Updates
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-white p-10 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Contact Us About Privacy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            If you have any questions about this Privacy Policy or how your data
            is handled, please reach out to us.
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
              <a href="tel:+919351540357" className="text-indigo-700 hover:underline">
                +91-9351540357
              </a>
            </div>
            <div className="flex flex-col items-center rounded-xl bg-indigo-50 p-6">
              <MapPin className="h-8 w-8 text-indigo-600" />
              <p className="mt-2 font-medium text-gray-900">Address</p>
              <p className="text-center text-sm text-gray-700">
                Success Point Institute, Opp. M.K. Memorial Sr. Sec. School, Piprali Road, Sikar, Rajasthan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final Assurance */}
      <div className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Shield className="mx-auto h-16 w-16 text-indigo-600" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Your Privacy Matters to Us
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            We are dedicated to safeguarding your personal information and
            ensuring transparency in all our data practices. Trust is the
            foundation of our relationship with students and visitors.
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