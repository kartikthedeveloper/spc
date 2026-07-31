"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowUp, GraduationCap } from "lucide-react";
import { SITE } from "@/data/site";

export default function StickyActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowTop(window.scrollY > 500);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Mobile sticky call + admission bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex lg:hidden border-t border-brass-500/20 bg-navy-950">
        <a
          href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
          className="flex flex-1 items-center justify-center gap-2 py-3 text-sm font-semibold text-white focus-ring"
        >
          <Phone size={16} aria-hidden="true" /> Call Now
        </a>
        <a
          href="/admissions"
          className="flex flex-1 items-center justify-center gap-2 border-l border-white bg-indigo-600 py-3 text-sm font-semibold text-white focus-ring"
        >
          <GraduationCap size={16} aria-hidden="true" /> Apply Now
        </a>
      </div>

      {/* Desktop floating stack */}
      <div className="fixed right-5 bottom-6 z-40 hidden lg:flex flex-col gap-3">
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid h-12 w-12 place-items-center rounded-full bg-pine-500 text-white shadow-premium hover:bg-pine-600 transition-colors focus-ring"
        >
          <MessageCircle size={20} />
        </a>
        <a
          href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
          aria-label="Call Success Point Institute"
          className="grid h-12 w-12 place-items-center rounded-full bg-navy-950 text-brass-300 shadow-premium hover:bg-navy-900 transition-colors focus-ring"
        >
          <Phone size={20} />
        </a>
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-12 w-12 place-items-center rounded-full border border-brass-500/30 bg-ivory-50 text-navy-950 shadow-premium hover:bg-ivory-200 transition-colors focus-ring"
          >
            <ArrowUp size={20} />
          </button>
        )}
      </div>
    </>
  );
}
