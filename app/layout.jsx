import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { SITE } from "@/data/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Best College & Computer Institute in Sikar, Rajasthan`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "best college in Sikar",
    "best BCA college in Sikar",
    "computer institute in Sikar",
    "digital marketing institute Sikar",
    "MCA college Rajasthan",
  ],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} | Best College & Computer Institute in Sikar, Rajasthan`,
    description: SITE.description,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.postalCode,
      addressCountry: "IN",
    },
    telephone: SITE.phones[0],
    sameAs: Object.values(SITE.social),
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:rounded-lg focus:bg-navy-950 focus:px-4 focus:py-2 focus:text-brass-300"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <SmoothScrollProvider>
          <ScrollProgressBar />
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <StickyActions />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
