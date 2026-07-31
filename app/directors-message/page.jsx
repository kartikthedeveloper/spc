import Image from "next/image";

export const metadata = {
  title: "Leadership Team | Success Point Institute Sikar",
  description:
    "Meet the leadership team of Success Point Institute Sikar. Learn about Founder Mr. Praveen Soni and Co-Founder Mr. Kartik Sharma, their vision, experience and commitment towards quality education.",

  keywords: [
    "Success Point Institute Sikar",
    "Founder Success Point Institute",
    "Praveen Soni",
    "Kartik Sharma",
    "Co-Founder Success Point",
    "BCA College Sikar",
    "MCA College Sikar",
    "Computer Institute Sikar",
    "AI Institute Rajasthan",
    "Digital Marketing Institute Sikar",
    "Cyber Security Institute Rajasthan",
    "Data Analytics Institute Sikar",
  ],

  alternates: {
    canonical:
      "https://successpointsikar.com/leadership",
  },

  openGraph: {
    title: "Leadership Team | Success Point Institute",
    description:
      "Meet the Founder and Co-Founder of Success Point Institute Sikar.",
    url: "https://successpointsikar.com/leadership",
    type: "website",
  },
};

export default function LeadershipPage() {
  return (
    <section className="bg-white mt-6">

      {/* Hero */}

      <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 py-20">

        <div className="mx-auto max-w-7xl px-6 text-center">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            Leadership Team
          </span>

          <h1 className="mt-6 text-4xl font-bold text-white md:text-6xl">
            Meet Our Leadership
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-indigo-100">
            Dedicated leaders committed to empowering students through
            innovation, technology, quality education and career-focused
            learning.
          </p>

        </div>

      </div>

      {/* Leadership */}

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Founder */}

          <div className="overflow-hidden rounded-3xl border bg-white shadow-xl">

            <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 overflow-hidden rounded-full shadow-xl">
              <Image
                src="/images/praveen-soni.jpeg"
                alt="Mr. Praveen Soni Founder Success Point Institute"
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">

              <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                Founder
              </span>

              <h2 className="mt-5 text-3xl font-bold text-gray-900">
                Mr. Praveen Soni
              </h2>

              <p className="mt-2 text-indigo-600 font-medium">
                Founder, Success Point Institute
              </p>

              <div className="mt-6 space-y-4 text-gray-700 leading-8">

                <p>
                  <strong>Experience :</strong> 15+ Years in Education &
                  Academic Leadership
                </p>

                <p>
                  Mr. Praveen Soni has been dedicated to transforming
                  computer education by creating an institution focused on
                  practical learning, professional development and student
                  success. His vision has helped thousands of students
                  build successful careers in technology and management.
                </p>

                <p>
                  Under his leadership, Success Point Institute continues to
                  provide industry-oriented education with a strong emphasis
                  on quality teaching, innovation and ethical values.
                </p>

              </div>

            </div>

          </div>

          {/* Co-Founder */}

          <div className="overflow-hidden  rounded-3xl border bg-white shadow-xl">

            <div className="w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 overflow-hidden rounded-full shadow-xl flex justify-center items-center">
              <Image
                src="/images/kartik-sharma.webp"
                alt="Mr. Kartik Sharma Co-Founder Success Point Institute"
                width={500}
                height={500}
                className="w-full h-full object-cover "
              />
            </div>
            <div className="p-8">
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                Co-Founder
              </span>

              <h2 className="mt-5 text-3xl font-bold text-gray-900">
                Mr. Kartik Sharma
              </h2>

              <p className="mt-2 text-green-600 font-medium">
                Co-Founder & Technology Head
              </p>

              <div className="mt-6 space-y-4 text-gray-700 leading-8">

                <p>
                  <strong>Experience :</strong> 6+ Years in Software
                  Development, AI, Digital Marketing & Technical Training
                </p>

                <p>
                  Mr. Kartik Sharma is a technology educator, software
                  developer and digital marketing professional with
                  expertise in Artificial Intelligence, Full Stack Web
                  Development, Mobile App Development, Data Analytics and
                  Cyber Security.
                </p>

                <p>
                  His mission is to bridge the gap between academics and
                  industry by providing students with hands-on training,
                  live projects, internships and modern AI-powered learning
                  methodologies.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Director Message */}

      <div className="bg-gray-50 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-lg">

          <h2 className="text-4xl font-bold text-center text-gray-900">
            Founder's Message
          </h2>

          <div className="mt-10 space-y-7 text-lg leading-9 text-gray-700">

            <p>Dear Students,</p>

            <p>
              Education is not merely about earning a qualification—it is
              about developing the confidence, knowledge and practical
              skills required to succeed in a rapidly changing world.
            </p>

            <p>
              At Success Point Institute, our commitment is to provide
              industry-focused education that combines academic excellence
              with practical exposure. We believe students should graduate
              with real skills that prepare them for successful careers.
            </p>

            <p>
              As technology continues to evolve through Artificial
              Intelligence, Software Development, Data Analytics, Digital
              Marketing and Cyber Security, our institution remains focused
              on delivering modern education that meets current industry
              standards.
            </p>

            <p>
              Together with our experienced faculty and leadership team, we
              strive to inspire innovation, professionalism and lifelong
              learning in every student.
            </p>

            <p>
              I warmly welcome you to Success Point Institute and invite you
              to become a part of our journey towards excellence.
            </p>

            <div className="pt-8">

              <h3 className="text-2xl font-bold">
                Best Wishes,
              </h3>


              <p className="text-gray-600">
                Success Point Sikar
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Vision & Mission */}

      <div className="py-20">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2">

          <div className="rounded-3xl bg-indigo-50 p-10">

            <h3 className="text-3xl font-bold text-indigo-700">
              Our Vision
            </h3>

            <p className="mt-6 leading-8 text-gray-700">
              To become Rajasthan's most trusted institution for
              technology and professional education by nurturing future
              leaders in Artificial Intelligence, Software Development,
              Cyber Security, Digital Marketing and Data Analytics.
            </p>

          </div>

          <div className="rounded-3xl bg-green-50 p-10">

            <h3 className="text-3xl font-bold text-green-700">
              Our Mission
            </h3>

            <p className="mt-6 leading-8 text-gray-700">
              To provide affordable, practical and industry-oriented
              education through experienced faculty, live projects,
              internships and career guidance that empowers students to
              achieve excellence.
            </p>

          </div>

        </div>

      </div>

      {/* Quote */}

      <div className="pb-20">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <blockquote className="text-3xl font-semibold leading-relaxed text-gray-900 md:text-4xl">
            "Learning never stops. Innovation begins where curiosity meets
            opportunity."
          </blockquote>

          <p className="mt-8 text-lg font-semibold text-indigo-700">
            — Leadership Team, Success Point Institute
          </p>

        </div>

      </div>

    </section>
  );
}