import Image from "next/image";

export const metadata = {
  title:
    "Director's Message | Success Point College Sikar",
  description:
    "Read the Director's Message from Success Point College Sikar. Learn our vision, mission and commitment towards quality computer education, AI, Digital Marketing, BCA, MCA and career-focused learning.",

  keywords: [
    "Director Message Success Point College",
    "Success Point College Sikar",
    "Director Success Point",
    "BCA College Sikar",
    "MCA College Sikar",
    "Computer Institute Sikar",
    "Digital Marketing Institute",
    "AI Training Institute Rajasthan",
  ],

  alternates: {
    canonical: "https://yourdomain.com/director-message",
  },

  openGraph: {
    title: "Director's Message | Success Point College",
    description:
      "A message from the Director of Success Point College Sikar.",
    type: "website",
    url: "https://yourdomain.com/director-message",
  },
};

export default function DirectorMessage() {
  return (
    <section className="bg-white">

      {/* Hero */}

      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 py-20">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Leadership
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Director's Message
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-indigo-100">
            Inspiring students to learn, innovate and build successful careers
            through quality education and practical knowledge.
          </p>

        </div>

      </div>

      {/* Director */}

      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[380px,1fr]">

        {/* Image */}

        <div className="flex justify-center">

          <div className="overflow-hidden rounded-3xl border bg-white shadow-xl">

            <Image
              src="/images/director.webp"
              alt="Praveen Soni - Director Success Point College Sikar"
              width={420}
              height={520}
              priority
              className="object-cover"
            />

          </div>

        </div>

        {/* Content */}

        <div>

          <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            Director
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Mr. Praveen Soni
          </h2>

          <p className="mt-2 text-lg font-medium text-indigo-600">
            Director, Success Point College, Sikar
          </p>

          <div className="mt-10 space-y-6 text-lg leading-9 text-gray-700">

            <p>
              Dear Students,
            </p>

            <p>
              Education is not only about earning a degree—it is about developing
              the knowledge, confidence and practical skills that help you
              succeed throughout your life. At Success Point College, we are
              committed to providing an educational environment where every
              student can discover their potential and prepare for a successful
              future.
            </p>

            <p>
              Today's world is driven by Artificial Intelligence, Data,
              Software Development, Digital Marketing and Cyber Security.
              Our programs are carefully designed to combine academic learning
              with practical experience so that students are ready to meet the
              expectations of modern industries.
            </p>

            <p>
              We strongly believe that learning should be practical,
              innovative and career-oriented. Our experienced faculty,
              modern computer labs, industry-focused curriculum and project-based
              training help students gain real-world skills rather than just
              theoretical knowledge.
            </p>

            <p>
              Our goal is not only to educate students but also to inspire them
              to become responsible professionals, entrepreneurs and lifelong
              learners. Every student who joins Success Point College becomes a
              part of a learning community focused on excellence, innovation and
              continuous growth.
            </p>

            <p>
              I warmly welcome you to Success Point College and encourage you to
              take the first step toward a bright and successful future. Together,
              let us learn, innovate and achieve excellence.
            </p>

            <div className="pt-6">

              <h3 className="text-2xl font-bold text-gray-900">
                Best Wishes,
              </h3>

              <p className="mt-3 text-xl font-semibold text-indigo-700">
                Mr. Praveen Soni
              </p>

              <p className="text-gray-600">
                Director
              </p>

              <p className="text-gray-600">
                Success Point College, Sikar
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Vision */}

      <div className="bg-gray-50 py-20">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">

          <div className="rounded-3xl bg-white p-10 shadow-sm">

            <h3 className="text-3xl font-bold text-indigo-700">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-gray-700">
              To become one of Rajasthan's leading institutions for
              computer education by nurturing skilled professionals in
              Artificial Intelligence, Software Development, Cyber Security,
              Data Analytics and Digital Marketing.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-10 shadow-sm">

            <h3 className="text-3xl font-bold text-indigo-700">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-gray-700">
              To provide affordable, practical and industry-oriented education
              that enables students to achieve academic excellence, secure
              rewarding careers and contribute positively to society.
            </p>

          </div>

        </div>

      </div>

      {/* Quote */}

      <div className="py-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <blockquote className="text-3xl font-semibold leading-relaxed text-gray-900 md:text-4xl">
            "Success is achieved through continuous learning, practical
            experience and the courage to embrace innovation."
          </blockquote>

          <p className="mt-8 text-lg font-semibold text-indigo-700">
            — Director, Success Point College
          </p>

        </div>

      </div>

    </section>
  );
}