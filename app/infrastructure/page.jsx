import Image from "next/image";

export const metadata = {
  title: "Infrastructure | Success Point College Sikar",

  description:
    "Explore the modern infrastructure of Success Point College Sikar including smart classrooms, advanced computer labs, digital learning environment, seminar hall, library and career-focused facilities.",

  keywords: [
    "Success Point College Infrastructure",
    "Computer Lab Sikar",
    "Best Computer Institute Sikar",
    "BCA College Infrastructure",
    "MCA College Sikar",
    "AI Lab Rajasthan",
    "Computer Education Sikar",
    "Digital Learning Campus",
    "Success Point Campus",
  ],

  alternates: {
    canonical: "https://successpointsikar.com/infrastructure",
  },

  openGraph: {
    title: "Infrastructure | Success Point College",
    description:
      "Modern classrooms, computer labs and career-focused learning environment.",
    url: "https://successpointsikar.com/infrastructure",
    type: "website",
  },
};

const gallery = [
  "/images/first.webp",
  "/images/second.webp",
  "/images/third.webp",
  "/images/fourth.webp",
  "/images/fifth.webp",
  "/images/sixth.webp",
];

const facilities = [
  {
    title: "Modern Computer Labs",
    desc: "High-performance computer laboratories equipped with the latest software and development tools for practical learning.",
  },
  {
    title: "Smart Classrooms",
    desc: "Technology-enabled classrooms with projectors, digital teaching aids and interactive learning environment.",
  },
  {
    title: "High-Speed Internet",
    desc: "Reliable internet connectivity for coding, AI tools, research, cloud applications and online learning.",
  },
  {
    title: "Project-Based Learning",
    desc: "Students work on real-world projects, internships and industry-oriented practical assignments.",
  },
  {
    title: "Career Guidance",
    desc: "Dedicated career support including resume building, interview preparation and placement assistance.",
  },
  {
    title: "Comfortable Learning Environment",
    desc: "Clean classrooms, spacious campus and student-friendly atmosphere designed for productive learning.",
  },
];

export default function Infrastructure() {
  return (
    <section className="bg-white mt-6">

      {/* Hero */}

      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 py-20">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Campus Infrastructure
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Modern Infrastructure
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-indigo-100">
            A technology-driven learning environment designed to provide
            practical education, innovation and career-focused training.
          </p>

        </div>

      </div>

      {/* Introduction */}

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-4xl font-bold text-gray-900">
            Built for Future Professionals
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-700">

            At Success Point College, we believe that an excellent learning
            environment plays a vital role in student success. Our campus
            combines modern infrastructure with practical training facilities
            to ensure students receive industry-ready education.

          </p>

          <p className="mt-6 text-lg leading-9 text-gray-700">

            From advanced computer laboratories and smart classrooms to
            high-speed internet and project-based learning spaces, every
            facility has been designed to enhance practical knowledge,
            creativity and professional development.

          </p>

        </div>

      </div>

      {/* Gallery */}

      <div className="bg-gray-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Campus Gallery
            </h2>

            <p className="mt-4 text-gray-600">
              A glimpse of our learning environment.
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-2">

            {gallery.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <Image
                  src={img}
                  alt={`Success Point College Infrastructure ${index + 1}`}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Facilities */}

      <div className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-gray-900">
              Our Facilities
            </h2>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {facilities.map((item, index) => (

              <div
                key={index}
                className="rounded-3xl border bg-white p-8 shadow-sm transition hover:shadow-xl"
              >

                <h3 className="text-2xl font-bold text-indigo-700">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-700">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Student Experience */}

      <div className="bg-indigo-700 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <h2 className="text-4xl font-bold text-white">
            Learning Beyond Classrooms
          </h2>

          <p className="mt-8 text-lg leading-9 text-indigo-100">

            Our infrastructure supports practical education through coding
            sessions, AI workshops, digital marketing labs, live projects,
            seminars, technical events and collaborative learning activities.

          </p>

        </div>

      </div>

      {/* Why Choose */}

      <div className="py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 lg:grid-cols-2">

            <div>

              <Image
                src="/images/first.webp"
                alt="Success Point College Campus"
                width={700}
                height={550}
                className="rounded-3xl shadow-xl"
              />

            </div>

            <div className="flex flex-col justify-center">

              <h2 className="text-4xl font-bold text-gray-900">
                Why Our Infrastructure Matters
              </h2>

              <div className="mt-8 space-y-5 text-lg leading-9 text-gray-700">

                <p>✔ Industry-standard Computer Labs</p>

                <p>✔ Practical Training Environment</p>

                <p>✔ AI & Technology Focused Learning</p>

                <p>✔ Comfortable Classrooms</p>

                <p>✔ High-Speed Internet Access</p>

                <p>✔ Modern Teaching Methodology</p>

                <p>✔ Career-Oriented Skill Development</p>

                <p>✔ Professional Learning Atmosphere</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Quote */}

      <div className="bg-gray-50 py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <blockquote className="text-3xl font-semibold leading-relaxed text-gray-900 md:text-4xl">

            "A great learning environment inspires creativity, innovation and
            lifelong success."

          </blockquote>

          <p className="mt-8 text-lg font-semibold text-indigo-700">

            — Success Point, Sikar

          </p>

        </div>

      </div>

    </section>
  );
}