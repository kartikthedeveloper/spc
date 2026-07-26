import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-ivory-100 mt-40 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl2 bg-indigo-600 px-8 py-14 text-center sm:px-16">
          <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
          <div className="relative">
            <h2 className="font-display text-3xl font-semibold text-ivory-50 sm:text-4xl">
              Admissions for the new session are open
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ivory-100/70">
              Seats are limited across BCA, MCA, and computer courses. Talk to our admissions cell
              today to lock in your seat and fee slab.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions/form"
                className="inline-flex items-center gap-2 rounded-xl bg-brass-500 px-6 py-3.5 font-semibold text-navy-950 shadow-glow transition-transform hover:-translate-y-0.5 focus-ring"
              >
                Apply for Admission
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl glass-panel px-6 py-3.5 font-semibold text-ivory-50 transition-transform hover:-translate-y-0.5 focus-ring"
              >
                Talk to Admissions Cell
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
