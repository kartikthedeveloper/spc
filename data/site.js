import { label } from "framer-motion/client";

export const SITE = {
  name: "Success Point Institute Sikar",
  shortName: "Success Point",
  tagline: "Where Sikar's Careers Begin",
  description:
    "Success Point Institute is a Coding and computer institute in Sikar, Rajasthan, offering graduation, computer, and professional courses with dedicated placement support.",
  url: "https://www.successpointsikar.com",
  address: {
    line1: "Piprali Rd, Opp. M.K. Memorial Sr. Sec. School",
    line2: "Rajasthan, India",
    city: "Sikar",
    state: "Rajasthan",
    country: "India",
    postalCode: "332001",
  },
  phones: ["+91 9351540357"],
  whatsapp: "919351540357",
  email: "successpointsikar@gmail.com",
  social: {
    facebook: "https://www.facebook.com/successpointitandmanagementcollege",
    instagram: "https://www.instagram.com/success_point_sikar",
    linkedin: "https://www.linkedin.com/company/success-point-college-sikar",
    google: "https://g.page/r/CYEGXiXLxfNyEBM/review"
  },
  mapEmbedQuery: "Success Point Institute, Piprali Rd, Sikar, Rajasthan",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Institute", href: "/about" },
      { label: "Director's Message", href: "/directors-message" },
      { label: "Infrastructure", href: "/infrastructure" },
    ],
  },
  {
    label: "Courses",
    href: "/course-category/computer-courses",
    children: [
      { label: "Graduation Courses", href: "/course-category/graduation-courses" },
      { label: "Post Graduation Courses", href: "/course-category/post-graduation-courses" },
      { label: "Computer Courses", href: "/course-category/computer-courses" },
      { label: "Professional Courses", href: "/course-category/professional-courses" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admission Process", href: "/admissions" },
    ],
  },
  { label: "Kid's Code", href: "/kids-code-in-sikar" },
  { label: "Internship", href: "/internship" },
  { label: "Blog", href: "/blog" },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About Institute", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label:"Director's Message", href:"/directors-message"},
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Admission Process", href: "/admissions" },

  ],

  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};
