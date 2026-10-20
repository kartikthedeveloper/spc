
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { SITE, FOOTER_LINKS } from "@/data/site";

const leaders = [
  {
    name: "Mr. Praveen Soni",
    role: "Founder",
    designation: "Founder, Success Point Institute",
    image: "/images/praveen-soni.webp",
    alt: "Mr. Praveen Soni Founder Success Point Institute",
    theme: "indigo",
    facebook: "https://www.facebook.com/praveen.soni.338",
    instagram: "https://www.instagram.com/psoni022?dlrf=dnQ3dnFqcTN5dGpq",
  },
  {
    name: "Mr. Kartik Sharma",
    role: "Co-Founder",
    designation:
      "Co-Founder & Technology Head | Cyber Crime Intervention Officer",
    image: "/images/kartik-sharma.webp",
    alt: "Mr. Kartik Sharma Co-Founder Success Point Institute",
    theme: "emerald",
    facebook: "https://www.facebook.com/profile.php?id=61577112728274",
    instagram: "https://www.instagram.com/kartikkrishnasharma",
  },
];

export default function Footer() {
  return (
    <footer>
      {/* ================= LEADERSHIP SECTION ================= */}
      <section className="relative isolate mt-6 overflow-hidden bg-white">

        {/* Ambient background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -left-40 top-48 h-96 w-96 rounded-full bg-indigo-200/40 blur-[100px]" />
          <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-sky-200/50 blur-[110px]" />
          <div className="absolute left-1/2 top-[48%] h-72 w-72 -translate-x-1/2 rounded-full bg-violet-100/40 blur-[100px]" />
        </div>

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-5 py-20 text-center sm:px-8 sm:py-24">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 -top-28 h-80 w-80 rounded-full border border-white/10 sm:h-[28rem] sm:w-[28rem]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -bottom-40 h-96 w-96 rounded-full border border-white/10"
          />
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-sky-300/70 to-transparent"
          />

          <div className="relative mx-auto max-w-5xl">

            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.08] px-5 py-2.5 text-xs font-semibold tracking-wider text-indigo-100 shadow-lg backdrop-blur-xl sm:text-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              Team Behind Success Point Sikar
            </span>

            <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-indigo-300 via-sky-200 to-white bg-clip-text text-transparent">
                Leadership
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
              Dedicated leaders committed to empowering students through
              innovation, technology, quality education and career-focused
              learning.
            </p>

            <div className="mx-auto mt-9 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-400 via-sky-300 to-emerald-300" />
          </div>
        </div>

        {/* Leadership cards */}
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">

          <div className="grid items-stretch gap-9 md:grid-cols-2 lg:gap-12">

            {leaders.map((leader, index) => {
              const isFounder = leader.theme === "indigo";

              return (
                <article
                  key={leader.name}
                  className="group relative isolate h-full"
                  style={{
                    animation: `leadership-enter 700ms ease-out ${
                      index * 180
                    }ms both`,
                  }}
                >
                  {/* Gradient border */}
                  <div
                    aria-hidden="true"
                    className={`absolute -inset-[2px] -z-10 rounded-[2rem] bg-gradient-to-br ${
                      isFounder
                        ? "from-indigo-500 via-blue-400 to-sky-300"
                        : "from-emerald-400 via-teal-400 to-sky-400"
                    } opacity-65 blur-[2px] transition duration-500 group-hover:opacity-100 group-hover:blur-md`}
                  />

                  <div className="relative flex h-full flex-col overflow-hidden rounded-[1.9rem] border border-white/80 bg-white shadow-[0_18px_60px_-20px_rgba(30,41,59,0.24)] transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_30px_80px_-25px_rgba(79,70,229,0.30)]">

                    {/* Portrait panel */}
                    <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-5 pb-9 pt-8 sm:px-9 sm:pb-11 sm:pt-10">

                      <div
                        aria-hidden="true"
                        className={`absolute -right-12 -top-20 h-52 w-52 rounded-full blur-3xl transition duration-700 group-hover:scale-150 ${
                          isFounder ? "bg-indigo-500/25" : "bg-emerald-400/20"
                        }`}
                      />

                      <div
                        aria-hidden="true"
                        className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-sky-400/15 blur-3xl transition duration-700 group-hover:scale-125"
                      />

                      {/* Role and index */}
                      <div className="relative z-10 flex items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-lg sm:text-sm">
                          <span
                            className={`h-2 w-2 rounded-full ${
                              isFounder ? "bg-indigo-300" : "bg-emerald-300"
                            }`}
                          />
                          {leader.role}
                        </span>

                        <span className="select-none text-4xl font-black tracking-tighter text-white/[0.10] sm:text-5xl">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Circular portrait */}
                      <div className="relative mx-auto mt-9 flex justify-center sm:mt-11">
                        <div className="relative">

                          {/* Dashed animated ring */}
                          <div
                            aria-hidden="true"
                            className={`absolute -inset-3 rounded-full border border-dashed ${
                              isFounder
                                ? "border-indigo-200/60"
                                : "border-emerald-200/60"
                            } transition-transform duration-1000 group-hover:rotate-45`}
                          />

                          {/* Image gradient frame */}
                          <div
                            className={`relative h-48 w-48 rounded-full bg-gradient-to-br p-[5px] shadow-[0_0_45px_rgba(99,102,241,0.28)] transition-all duration-500 group-hover:scale-[1.035] sm:h-60 sm:w-60 lg:h-64 lg:w-64 ${
                              isFounder
                                ? "from-white via-indigo-300 to-sky-400"
                                : "from-white via-emerald-300 to-teal-400"
                            }`}
                          >
                            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-slate-950 bg-slate-800">
                              <Image
                                src={leader.image}
                                alt={leader.alt}
                                width={500}
                                height={500}
                                sizes="(max-width: 640px) 192px, 256px"
                                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                              />
                            </div>
                          </div>

                          {/* Initial badge */}
                          <div
                            className={`absolute -bottom-1 -right-1 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 text-xl font-black text-white shadow-xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 ${
                              isFounder
                                ? "bg-gradient-to-br from-indigo-500 to-blue-600"
                                : "bg-gradient-to-br from-emerald-500 to-teal-600"
                            }`}
                          >
                            {isFounder ? "P" : "K"}
                          </div>
                        </div>
                      </div>

                      <div
                        aria-hidden="true"
                        className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-sky-300/70 to-transparent"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-1 flex-col items-center px-5 pb-9 pt-8 text-center sm:px-9 sm:pb-10">

                      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-700 sm:text-3xl">
                        {leader.name}
                      </h2>

                      <div
                        className={`mt-4 h-1 w-14 rounded-full transition-all duration-500 group-hover:w-24 ${
                          isFounder
                            ? "bg-gradient-to-r from-indigo-500 to-blue-400"
                            : "bg-gradient-to-r from-emerald-500 to-teal-400"
                        }`}
                      />

                      <p
                        className={`mt-4 max-w-md text-sm font-semibold leading-7 sm:text-base ${
                          isFounder ? "text-indigo-700" : "text-emerald-700"
                        }`}
                      >
                        {leader.designation}
                      </p>

                      {/* Social links */}
                      <div className="mt-auto flex items-center justify-center gap-4 pt-7">

                        <a
                          href={leader.facebook}
                          aria-label={`${leader.name} Facebook`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          <Facebook size={21} strokeWidth={2} />
                        </a>

                        <a
                          href={leader.instagram}
                          aria-label={`${leader.name} Instagram`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-500 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-500 hover:to-orange-400 hover:text-white hover:shadow-lg hover:shadow-pink-500/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
                        >
                          <Instagram size={21} strokeWidth={2} />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Quote */}
        <div className="relative overflow-hidden px-5 pb-20 sm:pb-24">

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-100/60 blur-[90px]"
          />

          <div className="mx-auto max-w-5xl rounded-[2rem] border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/70 to-sky-50/80 px-6 py-12 text-center shadow-[0_20px_70px_-35px_rgba(79,70,229,0.3)] sm:px-12 sm:py-16">

            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 text-4xl font-serif text-white shadow-lg shadow-indigo-500/25">
              “
            </div>

            <blockquote className="text-2xl font-bold leading-relaxed tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Learning never stops. Innovation begins where curiosity meets
              opportunity.
            </blockquote>

            <div className="mx-auto mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-indigo-500 to-sky-400" />
          </div>
        </div>

        {/* Entrance animation */}
        <style jsx>{`
          @keyframes leadership-enter {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            article {
              animation: none !important;
            }
          }
        `}</style>
      </section>

      {/* ================= EXISTING WEBSITE FOOTER ================= */}
      <div className="relative overflow-hidden bg-blue-700 text-white">

        <div
          className="absolute inset-0 blueprint-grid opacity-40"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <div className="grid gap-10 md:grid-cols-5">

            {/* Brand */}
            <div className="md:col-span-2">

              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/images/success-point-logo.png"
                  alt="Success Point logo"
                  width={90}
                  height={90}
                  className="h-auto w-[90px] object-contain"
                />
              </Link>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/90">
                {SITE.description}
              </p>

              <div className="mt-5 flex gap-3">
                {[
                  {
                    Icon: Facebook,
                    href: SITE.social.facebook,
                    label: "Facebook",
                  },
                  {
                    Icon: Instagram,
                    href: SITE.social.instagram,
                    label: "Instagram",
                  },
                  {
                    Icon: Linkedin,
                    href: SITE.social.linkedin,
                    label: "LinkedIn",
                  },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore */}
            <FooterCol
              title="Explore"
              links={FOOTER_LINKS.quickLinks}
            />

            {/* Contact */}
            <div>
              <h3 className="font-display text-lg font-bold text-white">
                Contact
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-white/90">

                <li className="flex gap-2">
                  <MapPin
                    size={16}
                    className="mt-0.5 shrink-0 text-sky-200"
                    aria-hidden="true"
                  />
                  <span>
                    {SITE.address.line1}, {SITE.address.line2}
                  </span>
                </li>

                {SITE.phones.map((phone) => (
                  <li key={phone} className="flex gap-2">
                    <Phone
                      size={16}
                      className="mt-0.5 shrink-0 text-sky-200"
                      aria-hidden="true"
                    />
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="transition-colors hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                    >
                      {phone}
                    </a>
                  </li>
                ))}

                <li className="flex gap-2">
                  <Mail
                    size={16}
                    className="mt-0.5 shrink-0 text-sky-200"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${SITE.email}`}
                    className="break-all transition-colors hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {SITE.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright and legal */}
          <div className="mt-12 flex flex-col gap-4 border-t border-white/20 pt-6 text-sm text-white/85 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap gap-4">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-lg font-bold text-white">
        {title}
      </h3>

      <ul className="mt-4 space-y-2.5 text-sm text-white/90">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="transition-colors hover:text-sky-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
