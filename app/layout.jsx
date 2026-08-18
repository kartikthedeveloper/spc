import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import Ganalytics from "@/components/GoogleAnalytics";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { SITE } from "@/data/site";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Best College & Computer Institute in Sikar, Rajasthan`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  verification: {
    google: "ByKQGI0VFAK1A8ZpCp68Rrl0LgHJ1LEkioiya_jGDC0",
  },
  keywords: [
    // Brand
    "Success Point Institute Sikar",
    "Success Point Institute",

    // General
    "best college in Sikar",
    "best computer institute in Sikar",
    "computer courses in Sikar",
    "professional computer training Sikar",
    "IT training institute Sikar",

    // Degree Courses
    "best BCA college in Sikar",
    "BCA admission Sikar",
    "BCA college Rajasthan",
    "best MCA college in Sikar",
    "MCA admission Sikar",
    "MCA college Rajasthan",

    // Diploma Courses
    "DCA course in Sikar",
    "PGDCA course in Sikar",
    "computer diploma course Sikar",

    // Digital Marketing
    "digital marketing institute Sikar",
    "digital marketing course in Sikar",
    "AI digital marketing course",

    // Data Analytics
    "data analytics course in Sikar",
    "data analyst course in Rajasthan",
    "Power BI course in Sikar",
    "Excel course in Sikar",

    // Web Development
    "website development course in Sikar",
    "web development institute Sikar",
    "full stack development course Sikar",
    "MERN Stack course in Sikar",

    // Mobile App Development
    "Android app development course in Sikar",
    "mobile app development course in Sikar",
    "React Native course in Sikar",

    // Cyber Security
    "cyber security course in Sikar",
    "PG Diploma in Cyber Security and Cyber Law",
    "cyber law course in Rajasthan",
    "ethical hacking course in Sikar",

    // Career
    "job oriented computer courses",
    "internship with computer courses",
    "AI integrated computer courses",
    "placement assistance Sikar"
  ],
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} | Best Coding and Digital Marketing Institute in Sikar, Rajasthan`,
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
    sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.linkedin],
  };

  return (
    <html lang="en">
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
                <Ganalytics />

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
