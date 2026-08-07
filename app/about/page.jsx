import AboutClient from "./AboutClient";

export const metadata = {
  title:
    "About Success Point Institute Sikar | Best Computer Institute for BCA, MCA, AI & Digital Marketing",
  description:
    "Learn about Success Point Institute Sikar. We provide BCA, MCA, DCA, Data Analytics, AI, Digital Marketing, Website Development, Mobile App Development, Cyber Security and career-focused computer education with practical training and internship support.",
  keywords: [
    "Success Point Institute Sikar",
    "About Success Point Institute",
    "Best Computer Institute in Sikar",
    "BCA College Sikar",
    "MCA College Sikar",
    "Digital Marketing Institute Sikar",
    "AI Course Sikar",
    "Data Analytics Course Sikar",
    "Cyber Security Institute Sikar",
    "Computer Classes Sikar",
    "Website Development Course",
    "Mobile App Development Course",
    "DCA Institute",
    "Internship in Sikar",
  ],
  alternates: {
    canonical: "https://successpointsikar.com/about",
  },
  openGraph: {
    title: "About Success Point Institute Sikar",
    description:
      "Empowering students with industry-ready skills in Computer Science, AI, Digital Marketing, Cyber Security and Software Development.",
    url: "https://successpointsikar.com/about",
    siteName: "Success Point Institute",
    type: "website",
  },
};

export default function Page() {
  return <AboutClient />;
}