"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowUpRight,
  Clock3,
  Star,
  Award,
  Calendar,
} from "lucide-react";

export default function CourseCard({ course }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(y, [-50, 50], [8, -8]),
    {
      stiffness: 220,
      damping: 18,
    }
  );

  const rotateY = useSpring(
    useTransform(x, [-50, 50], [-8, 8]),
    {
      stiffness: 220,
      damping: 18,
    }
  );

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();

    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1200,
      }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative h-56 overflow-hidden">
        <Image
          src={course.image}
          alt={course.shortTitle}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-900">
          {course.shortTitle}
        </h3>

        {/* Rating */}

        <div className="mt-3 flex items-center gap-2">

          <div className="flex text-yellow-500">

            {[1,2,3,4,5].map((i)=>(
              <Star
                key={i}
                size={17}
                fill="currentColor"
              />
            ))}

          </div>

          <span className="text-sm text-gray-600">

            {course.rating || "4.9"} Rating

          </span>

        </div>

        {/* Duration & Level */}

        <div className="mt-6 grid grid-cols-2 gap-4">

          <div className="rounded-xl border bg-blue-200 p-4">

            <div className="flex items-center gap-2">

              <Calendar
                className="text-blue-600"
                size={20}
              />

              <span className="font-semibold">
                Duration
              </span>

            </div>

            <p className="mt-2 text-gray-700">
              {course.duration}
            </p>

          </div>

          <div className="rounded-xl border bg-blue-200 p-4">

            <div className="flex items-center gap-2">

              <Award
                className="text-blue-600"
                size={20}
              />

              <span className="font-semibold">
                Level
              </span>

            </div>

            <p className="mt-2 text-gray-700">

              {course.level || "Beginner to Expert"}

            </p>

          </div>

        </div>

        {/* Highlights */}

        <div className="mt-8">

          <h4 className="border-l-4 border-indigo-500 pl-3 text-xl font-bold">
            Highlights
          </h4>

          <ul className="mt-5 space-y-3">

            {course.highlights?.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-700"
              >
                <Clock3
                  size={18}
                  className="mt-0.5 text-orange-500"
                />

                <span>{item}</span>
              </li>
            ))}

          </ul>

        </div>

        {/* Buttons */}

        <div className="mt-8 flex gap-3">

          <Link
            href="/contact"
            className="flex-1 rounded-xl bg-indigo-500 py-3 text-center font-semibold text-white transition hover:bg-indigo-600"
          >
            Enroll Now
          </Link>

          <Link
            href={`/courses/${course.slug}`}
            className="flex-1 rounded-xl border border-indigo-500 py-3 text-center font-semibold text-indigo-600 transition hover:bg-indigo-500 hover:text-white"
          >
            View Course
          </Link>

        </div>

      </div>
    </motion.div>
  );
}