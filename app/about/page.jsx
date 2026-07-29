import Link from "next/link";

export const metadata = {
  title:
    "About Success Point College Sikar | Best Computer Institute for BCA, MCA, AI & Digital Marketing",
  description:
    "Learn about Success Point College Sikar. We provide BCA, MCA, DCA, Data Analytics, AI, Digital Marketing, Website Development, Mobile App Development, Cyber Security and career-focused computer education with practical training and internship support.",

  keywords: [
    "Success Point College Sikar",
    "About Success Point College",
    "Best Computer Institute in Sikar",
    "BCA College Sikar",
    "MCA College Sikar",
    "Digital Marketing Institute Sikar",
    "AI Course Sikar",
    "Data Analytics Course Sikar",
    "Cyber Security Institute Sikar",
    "Computer Classes Sikar",
    "Website Development Course",
    "Mobile App Development Course",
    "DCA Institute",
    "Internship in Sikar",
  ],

  alternates: {
    canonical: "https://successpointsikar.com/about",
  },

  openGraph: {
    title: "About Success Point College Sikar",
    description:
      "Empowering students with industry-ready skills in Computer Science, AI, Digital Marketing, Cyber Security and Software Development.",
    url: "https://successpointsikar.com/about",
    siteName: "Success Point College",
    type: "website",
  },
};

export default function About() {
  return (
    <section className="bg-white">

      {/* Hero */}

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            About Success Point College
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Building Future Tech Professionals in
            <span className="text-indigo-600"> Sikar</span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Success Point College is one of the leading computer education and
            professional training institutes in Sikar, Rajasthan. Our mission is
            to prepare students with practical skills, industry knowledge, AI
            technologies and real-world experience so they can build successful
            careers in the digital world.
          </p>

        </div>
      </div>

      {/* About */}

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 lg:grid-cols-2">

        <div>

          <h2 className="text-3xl font-bold text-gray-900">
            Who We Are
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Success Point College provides modern computer education that focuses
            on practical learning instead of only theoretical knowledge. Every
            course is designed according to today's industry requirements so that
            students can confidently work in companies, startups or as
            freelancers.
          </p>

          <p className="mt-6 text-gray-600 leading-8">
            We believe every student deserves quality education, experienced
            mentors, practical projects and career guidance. Our classrooms,
            workshops and hands-on training sessions help students gain real
            skills that employers actually need.
          </p>

        </div>

        <div className="rounded-3xl bg-indigo-50 p-10">

          <h3 className="text-2xl font-bold text-indigo-700">
            Our Mission
          </h3>

          <p className="mt-5 text-gray-700 leading-8">
            To empower students with practical technology education, AI-powered
            learning, professional certifications and industry-ready skills that
            help them build successful careers.
          </p>

          <hr className="my-8"/>

          <h3 className="text-2xl font-bold text-indigo-700">
            Our Vision
          </h3>

          <p className="mt-5 text-gray-700 leading-8">
            To become one of Rajasthan's most trusted institutions for computer
            education by creating skilled software developers, digital marketers,
            cyber security professionals and future technology leaders.
          </p>

        </div>

      </div>

      {/* Courses */}

      <div className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-3xl font-bold text-gray-900">
            Industry Focused Courses
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              "BCA",
              "MCA",
              "Digital Marketing with AI",
              "Website Development",
              "Mobile App Development",
              "Data Analytics",
              "PG Diploma in Cyber Security & Cyber Law",
              "DCA",
            ].map((course) => (
              <div
                key={course}
                className="rounded-2xl border bg-white p-6 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <h3 className="font-semibold text-gray-900">{course}</h3>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Why Choose */}

      <div className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-center text-3xl font-bold text-gray-900">
          Why Choose Success Point College?
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
            "Experienced Faculty",
            "AI Integrated Learning",
            "Practical Computer Labs",
            "Live Projects",
            "Internship Opportunities",
            "Career Guidance",
            "Industry-Oriented Curriculum",
            "Skill-Based Training",
            "Affordable Education",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700">
                {item}
              </h3>
            </div>
          ))}

        </div>

      </div>

      {/* SEO Content */}

      <div className="bg-indigo-50 py-20">

        <div className="mx-auto max-w-5xl px-6">

          <h2 className="text-3xl font-bold text-gray-900">
            Preparing Students for the Future of Technology
          </h2>

          <p className="mt-6 leading-8 text-gray-700">
            Technology is changing rapidly with Artificial Intelligence,
            automation and cloud computing becoming an essential part of every
            industry. At Success Point College Sikar, students learn practical
            skills in software development, AI tools, digital marketing, cyber
            security, website development, mobile application development and
            data analytics to stay ahead in the modern job market.
          </p>

          <p className="mt-6 leading-8 text-gray-700">
            Our focus is on real projects, professional development, internships,
            communication skills and industry exposure so students become
            confident professionals ready for jobs, higher education and
            entrepreneurship.
          </p>

        </div>

      </div>

      {/* CTA */}

      <div className="mx-auto max-w-5xl px-6 py-20 text-center">

        <h2 className="text-4xl font-bold text-gray-900">
          Start Your Career with Success Point College
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Admissions are open for career-oriented computer courses. Join us and
          build your future with practical learning, experienced mentors and
          industry-ready skills.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">

          <Link
            href="/blog"
            className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white hover:bg-indigo-700"
          >
            Explore Blog
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-indigo-600 px-8 py-4 font-semibold text-indigo-600 hover:bg-indigo-50"
          >
            Contact Us
          </Link>

        </div>

      </div>

    </section>
  );
}