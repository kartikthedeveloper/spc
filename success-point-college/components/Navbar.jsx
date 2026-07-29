"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/data/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 rounded-2xl glass-panel-light shadow-premium">
          <div className="flex items-center justify-between px-4 py-3 lg:px-6">
            <Link href="/" className="flex items-center gap-2 focus-ring rounded-lg">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-950 text-brass-300 font-display text-lg">
                SP
              </span>
              <span className="font-display text-lg font-semibold text-navy-950">
                {SITE.shortName}
              </span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(link.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:text-navy-950 hover:bg-ivory-200 transition-colors focus-ring"
                  >
                    {link.label}
                    {link.children && <ChevronDown size={14} aria-hidden="true" />}
                  </Link>

                  <AnimatePresence>
                    {link.children && activeMenu === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full mt-2 w-72 rounded-xl border border-brass-500/15 bg-ivory-50 p-2 shadow-premium"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-lg px-3 py-2 text-sm text-ink-700 hover:bg-ivory-200 hover:text-navy-950 focus-ring"
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

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-ink-700 hover:text-navy-950 focus-ring"
              >
                <Phone size={16} aria-hidden="true" />
                {SITE.phones[0]}
              </a>
              <Link
                href="/admissions/form"
                className="rounded-lg bg-navy-950 px-4 py-2.5 text-sm font-semibold text-brass-300 shadow-glow hover:bg-navy-900 transition-colors focus-ring"
              >
                Apply Now
              </Link>
            </div>

            <button
              type="button"
              className="lg:hidden rounded-lg p-2 text-navy-950 focus-ring"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.nav
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="lg:hidden overflow-hidden border-t border-brass-500/10 px-4 pb-4"
                aria-label="Mobile"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-2.5 text-sm font-medium text-ink-700 hover:text-navy-950 focus-ring"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/admissions/form"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-lg bg-navy-950 px-4 py-2.5 text-center text-sm font-semibold text-brass-300 focus-ring"
                >
                  Apply Now
                </Link>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
