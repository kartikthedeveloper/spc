"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg"
            : "bg-white/95 backdrop-blur-md"
        }`}
      >
        <div className="max-w-8xl mx-auto">

          <div className="h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

            {/* Logo */}

            <Link href="/" className="flex items-center gap-3">

              <div className="w-11 h-11 rounded-xl bg-navy-950 flex items-center justify-center text-brass-300 font-bold text-lg">
                SP
              </div>

              <div>
                <h2 className="font-bold text-lg text-navy-950">
                  {SITE.shortName}
                </h2> 
              </div>

            </Link>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-1">

              {NAV_LINKS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-lg px-4 py-2 text-[15px] font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition"
                  >
                    {item.label}

                    {item.children && (
                      <ChevronDown size={16} />
                    )}
                  </Link>

                  <AnimatePresence>

                    {item.children &&
                      activeDropdown === item.label && (

                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: .2 }}
                          className="absolute left-0 mt-2 w-72 rounded-xl bg-white shadow-xl border border-gray-100 overflow-hidden"
                        >

                          {item.children.map((child) => (

                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 transition"
                            >
                              {child.label}
                            </Link>

                          ))}

                        </motion.div>

                      )}

                  </AnimatePresence>

                </div>
              ))}

            </nav>

            {/* Desktop Right */}

            <div className="hidden lg:flex items-center gap-4">

              <a
                href={`tel:${SITE.phones[0]}`}
                className="flex items-center w-34 gap-2 text-gray-700 font-medium"
              >
                <Phone size={16} />
                {SITE.phones[0]}
              </a>

              <Link
                href="/admissions/form"
                className="rounded-xl bg-navy-950 px-5 py-3 text-white font-semibold hover:bg-black transition"
              >
                Apply Now
              </Link>

            </div>

            {/* Mobile Button */}

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: .35 }}
            className="fixed top-0 right-0 z-[60] h-screen w-[85%] max-w-sm bg-white shadow-2xl lg:hidden overflow-y-auto"
          >

            <div className="flex items-center justify-between h-20 px-5 border-b">

              <h2 className="font-bold text-lg">
                Menu
              </h2>

              <button onClick={() => setOpen(false)}>
                <X />
              </button>

            </div>

            <div className="p-5">

              {NAV_LINKS.map((item) => (

                <div key={item.label} className="border-b">

                  <div
                    onClick={() =>
                      item.children
                        ? setMobileDropdown(
                            mobileDropdown === item.label
                              ? null
                              : item.label
                          )
                        : setOpen(false)
                    }
                    className="flex items-center justify-between py-4 cursor-pointer"
                  >

                    <Link
                      href={item.href}
                      className="font-medium text-gray-700"
                    >
                      {item.label}
                    </Link>

                    {item.children && (

                      <ChevronRight
                        className={`transition ${
                          mobileDropdown === item.label
                            ? "rotate-90"
                            : ""
                        }`}
                        size={18}
                      />

                    )}

                  </div>

                  <AnimatePresence>

                    {item.children &&
                      mobileDropdown === item.label && (

                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          className="overflow-hidden pl-4"
                        >

                          {item.children.map((child) => (

                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className="block py-3 text-sm text-gray-600"
                            >
                              {child.label}
                            </Link>

                          ))}

                        </motion.div>

                      )}

                  </AnimatePresence>

                </div>

              ))}

              <a
                href={`tel:${SITE.phones[0]}`}
                className="mt-8 flex items-center gap-2 text-gray-700 font-medium"
              >
                <Phone size={18} />
                {SITE.phones[0]}
              </a>

              <Link
                href="/admissions/form"
                onClick={() => setOpen(false)}
                className="mt-6 block rounded-xl bg-navy-950 py-3 text-center font-semibold text-white"
              >
                Apply Now
              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}