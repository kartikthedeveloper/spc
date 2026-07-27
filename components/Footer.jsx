import Link from "next/link";
import { Facebook, Instagram, Linkedin,Google, MapPin, Phone, Mail } from "lucide-react";
import { SITE, FOOTER_LINKS } from "@/data/site";
import Image from "next/image";


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-blue-700 text-ivory-100">
      <div className="absolute inset-0 blueprint-grid opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3">

              <Image
                src="/images/success-point-logo.png"
                alt="success point logo"
                width={90}
                height={90}
                className=""
              />

            </Link>
            <p className="mt-4 max-w-sm text-sm text-ivory-100/70">{SITE.description}</p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
                { Icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
                { Icon: Linkedin, href: SITE.social.linkedin, label: "LinkedIn" },
                
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-brass-500/25 text-brass-300 hover:bg-brass-500 hover:text-navy-950 transition-colors focus-ring"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Explore" links={FOOTER_LINKS.quickLinks} />

          <div>
            <h3 className="font-display text-sm font-semibold text-brass-300">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-ivory-100/70">
              <li className="flex gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brass-400" aria-hidden="true" />
                <span>
                  {SITE.address.line1}, {SITE.address.line2}
                </span>
              </li>
              {SITE.phones.map((phone) => (
                <li key={phone} className="flex gap-2">
                  <Phone size={16} className="mt-0.5 shrink-0 text-brass-400" aria-hidden="true" />
                  <a href={`tel:${phone.replace(/\s/g, "")}`} className="hover:text-brass-300 focus-ring">
                    {phone}
                  </a>
                </li>
              ))}
              <li className="flex gap-2">
                <Mail size={16} className="mt-0.5 shrink-0 text-brass-400" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="hover:text-brass-300 focus-ring">
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-brass-500/15 pt-6 text-xs text-ivory-100/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-brass-300 focus-ring">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h3 className="font-display text-sm font-semibold text-brass-300">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm text-ivory-100/70">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-brass-300 focus-ring">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
