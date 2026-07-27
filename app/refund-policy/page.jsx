import Link from "next/link";
import {
  RotateCcw,
  CreditCard,
  Clock,
  AlertCircle,
  FileText,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Shield,
} from "lucide-react";

export const metadata = {
  title: "Refund & Cancellation Policy | Success Point College Sikar",
  description:
    "Read the refund and cancellation policy of Success Point College Sikar. Learn about fee refund eligibility, timelines, and the process for requesting a refund.",
  keywords: [
    "Refund Policy Success Point College",
    "Cancellation Policy Sikar",
    "Fee Refund College Rajasthan",
    "Tuition Refund Policy",
    "Admission Cancellation Process",
    "Success Point College Refund",
  ],
  alternates: {
    canonical: "https://yourdomain.com/refund-policy",
  },
  openGraph: {
    title: "Refund & Cancellation Policy | Success Point College Sikar",
    description:
      "Understand our fee refund and cancellation procedures. We ensure a transparent and fair refund process for all students.",
    url: "https://yourdomain.com/refund-policy",
    type: "website",
  },
};

export default function RefundPolicyPage() {
  const policyPoints = [
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: "Cancellation Window",
      description:
        "Students can cancel their admission within 15 days of fee payment to be eligible for a full refund. Cancellations after 15 days will be subject to a deduction.",
    },
    {
      icon: <CreditCard className="h-8 w-8 text-indigo-600" />,
      title: "Refund Percentage",
      description:
        "Full refund within 15 days. Between 15-30 days, 75% refund. Between 30-45 days, 50% refund. After 45 days, no refund is applicable.",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-indigo-600" />,
      title: "Processing Time",
      description:
        "Refund requests are processed within 15-20 working days from the date of receiving the written cancellation request.",
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-600" />,
      title: "Application Process",
      description:
        "Refund requests must be submitted in writing (email or physical application) to the accounts department with all relevant payment details.",
    },
  ];

  const stepByStep = [
    "Submit a written cancellation/refund request to the Admissions Office",
    "Provide your admission details, payment receipt, and bank account information",
    "The accounts department will verify the request and calculate the refund amount",
    "Refund will be processed via the same mode of payment (bank transfer, NEFT, or cheque)",
    "You will receive a confirmation email once the refund is initiated",
  ];

  const faqs = [
    {
      q: "Can I get a full refund after paying the fee?",
      a: "Yes, you are eligible for a full refund if you cancel your admission within 15 days of fee payment. After 15 days, a graded deduction applies as per the policy above.",
    },
    {
      q: "How long does it take to receive the refund?",
      a: "Refunds are typically processed within 15-20 working days after receiving your written cancellation request. The timeline may vary depending on the mode of payment.",
    },
    {
      q: "Is the registration fee refundable?",
      a: "The registration fee is non-refundable in all cases. Only the tuition fee component is subject to refund as per the policy.",
    },
    {
      q: "What if I cancel after attending classes?",
      a: "If you have attended classes for more than 15 days after the start of the course, no refund is applicable. All cases are reviewed on a case-by-case basis.",
    },
    {
      q: "How do I submit a refund request?",
      a: "You can submit a formal email or written application to our accounts department. Include your full name, course, admission number, and reason for cancellation.",
    },
  ];

  return (
    <section className="bg-white mt-6">
      {/* Hero */}
      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Refund & Cancellation
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Refund & Cancellation Policy
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-indigo-100">
            We believe in transparency and fairness. This policy outlines the
            terms and conditions for cancellation of admission and fee refunds
            at Success Point College.
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
            <Shield className="h-10 w-10 shrink-0 text-indigo-600" />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Our Commitment to Fairness
              </h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                At Success Point College, we are committed to providing a fair
                and transparent refund process. This policy applies to all
                students who seek to cancel their admission or request a refund
                of the fees paid. We encourage you to read this policy carefully
                before proceeding.
              </p>
              <p className="mt-3 text-gray-700 leading-relaxed">
                This policy is applicable to all courses offered by the college,
                including graduation, post-graduation, professional, and skill
                development programs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Points */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Key Policy Provisions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Understand the timelines and conditions that govern our refund
            process.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {policyPoints.map((point, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50">
                  {point.icon}
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {point.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Refund Schedule Table */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Refund Schedule
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Refund percentage is based on the date of cancellation relative to
            the date of fee payment.
          </p>
          <div className="mt-8 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-200">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Cancellation Period
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Refund Percentage
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-gray-700">Within 15 days of fee payment</td>
                  <td className="px-6 py-4 font-semibold text-green-600">100%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Between 15 to 30 days</td>
                  <td className="px-6 py-4 font-semibold text-indigo-600">75%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-700">Between 30 to 45 days</td>
                  <td className="px-6 py-4 font-semibold text-yellow-600">50%</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 text-gray-700 font-medium">After 45 days</td>
                  <td className="px-6 py-4 font-semibold text-red-600">No Refund</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-500 text-center">
            * Registration and application fees are non-refundable in all cases.
          </p>
        </div>
      </div>

      {/* Steps to Request Refund */}
      <div className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h2 className="flex items-center gap-3 text-3xl font-bold text-gray-900">
              <RotateCcw className="h-8 w-8 text-indigo-600" />
              How to Request a Refund
            </h2>
            <p className="mt-4 text-gray-600">
              Follow these steps to initiate your refund request:
            </p>
            <div className="mt-8 space-y-4">
              {stepByStep.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-100 font-bold text-indigo-700">
                    {idx + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl bg-indigo-50 p-4">
              <p className="flex items-start gap-3 text-sm text-gray-700">
                <AlertCircle className="h-5 w-5 shrink-0 text-indigo-600" />
                <span>
                  <strong>Important:</strong> All refund requests must be
                  accompanied by a copy of the fee receipt and valid government
                  ID proof for verification.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exceptions & Conditions */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <AlertCircle className="h-7 w-7 text-indigo-600" />
                Exceptions
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-gray-700">
                    Refunds are not applicable after the commencement of the
                    course (beyond 15 days of classes).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-gray-700">
                    The registration fee (non-refundable) is excluded from all
                    refund calculations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                  <span className="text-gray-700">
                    Any scholarship or concession amount is not eligible for
                    refund.
                  </span>
                </li>
              </ul>
            </div>
            <div className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-gray-900">
                <Calendar className="h-7 w-7 text-indigo-600" />
                Important Dates
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-indigo-600" />
                  <span className="text-gray-700">
                    <strong>15-day window:</strong> Full refund eligibility
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-indigo-600" />
                  <span className="text-gray-700">
                    <strong>30-day window:</strong> 75% refund eligibility
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-indigo-600" />
                  <span className="text-gray-700">
                    <strong>45-day window:</strong> 50% refund eligibility
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-red-600" />
                  <span className="text-gray-700">
                    <strong>Beyond 45 days:</strong> No refund applicable
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-gray-50 py-16">
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

      {/* Contact for Refund */}
      <div className="py-16">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-600 p-12 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Need Help with a Refund?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-indigo-100">
            Our accounts team is here to assist you with any refund-related
            queries.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:accounts@successpointcollege.com"
              className="rounded-full bg-white px-8 py-3 font-semibold text-indigo-700 shadow-lg transition hover:bg-indigo-50"
            >
              <Mail className="mr-2 inline h-5 w-5" />
              Email Accounts
            </a>
            <a
              href="tel:+919876543210"
              className="rounded-full border border-white/30 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="mr-2 inline h-5 w-5" />
              Call Us
            </a>
          </div>
          <p className="mt-6 text-sm text-indigo-200">
            You can also visit the college administration office for in-person
            assistance.
          </p>
        </div>
      </div>

      {/* Footer Note */}
      <div className="bg-gray-50 py-8">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-gray-500">
          <p>
            This Refund & Cancellation Policy is subject to change. The latest
            version is always available on our website. By applying for
            admission, you agree to abide by this policy.
          </p>
        </div>
      </div>
    </section>
  );
}