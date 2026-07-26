import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { SITE } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description: `Contact ${SITE.name} in Sikar, Rajasthan for admissions, course details, and campus visits.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-ivory-100 pt-32 pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to our admissions cell"
          description="Visit our campus in Sikar, call us directly, or send a message — we typically respond within one business day."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <InfoRow Icon={MapPin} label="Campus Address">
              {SITE.address.line1}, {SITE.address.line2}
            </InfoRow>
            <InfoRow Icon={Phone} label="Call Us">
              {SITE.phones.map((p) => (
                <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block hover:text-brass-600 focus-ring">
                  {p}
                </a>
              ))}
            </InfoRow>
            <InfoRow Icon={MessageCircle} label="WhatsApp">
              <a href={`https://wa.me/${SITE.whatsapp}`} className="hover:text-brass-600 focus-ring">
                Chat with admissions
              </a>
            </InfoRow>
            <InfoRow Icon={Mail} label="Email">
              <a href={`mailto:${SITE.email}`} className="hover:text-brass-600 focus-ring">
                {SITE.email}
              </a>
            </InfoRow>

            <div className="overflow-hidden rounded-xl2 border border-brass-500/20">
              <iframe
                title="Success Point College Map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapEmbedQuery)}&output=embed`}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="space-y-4 rounded-xl2 border border-brass-500/20 bg-ivory-50 p-6 shadow-premium">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-ink-700">Full Name</label>
              <input id="name" name="name" type="text" required className="mt-1.5 w-full rounded-lg border border-brass-500/25 px-4 py-2.5 text-sm focus-ring" />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-ink-700">Phone Number</label>
              <input id="phone" name="phone" type="tel" required className="mt-1.5 w-full rounded-lg border border-brass-500/25 px-4 py-2.5 text-sm focus-ring" />
            </div>
            <div>
              <label htmlFor="course" className="text-sm font-medium text-ink-700">Course of Interest</label>
              <input id="course" name="course" type="text" className="mt-1.5 w-full rounded-lg border border-brass-500/25 px-4 py-2.5 text-sm focus-ring" />
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-ink-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1.5 w-full rounded-lg border border-brass-500/25 px-4 py-2.5 text-sm focus-ring" />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-navy-950 px-6 py-3 font-semibold text-brass-300 hover:bg-navy-900 transition-colors focus-ring"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ Icon, label, children }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy-950 text-brass-300">
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-brass-600">{label}</p>
        <div className="mt-1 text-sm text-ink-700">{children}</div>
      </div>
    </div>
  );
}
