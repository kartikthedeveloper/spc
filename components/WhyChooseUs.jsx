import { GraduationCap, Briefcase, Laptop, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const REASONS = [
  {
    Icon: GraduationCap,
    title: "Degree + Skill, Together",
    body: "Study for a recognised BCA/MCA degree while stacking industry certifications in the same institute.",
  },
  {
    Icon: Laptop,
    title: "Real Lab Infrastructure",
    body: "Dedicated computer labs with current software — not shared systems or outdated versions.",
  },
  {
    Icon: Briefcase,
    title: "Placement Cell That Follows Up",
    body: "Resume reviews, mock interviews, and direct introductions to hiring partners in Sikar and beyond.",
  },
  {
    Icon: Users,
    title: "Faculty Who Teach Practice",
    body: "Instructors with industry project experience, not only academic backgrounds.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-indigo-600 py-20">
      <div className="absolute inset-0 blueprint-grid opacity-30" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Success Point"
          title="A college built around outcomes, not just attendance"
          light
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ Icon, title, body }) => (
            <div key={title} className="glass-panel rounded-xl2 p-6">
              <div className="grid h-11 w-11 place-items-center rounded-lg bg-brass-500/15 text-brass-300">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-lg font-semibold text-ivory-50">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory-100/65">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
