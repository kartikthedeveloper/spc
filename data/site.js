export const SITE = {
  name: "Success Point College",
  shortName: "Success Point",
  tagline: "Where Sikar's Careers Begin",
  description:
    "Success Point College is a premier college and computer institute in Sikar, Rajasthan, offering graduation, computer, and professional courses with dedicated placement support.",
  url: "https://www.successpointcollege.in",
  address: {
    line1: "Piprali Rd, Opp. M.K. Memorial Sr. Sec. School",
    line2: "Jat Colony, Sikar, Rajasthan, India",
    city: "Sikar",
    state: "Rajasthan",
    country: "India",
    postalCode: "332001",
  },
  phones: ["+91 93515 40357", "+91 90575 08560"],
  whatsapp: "919351540357",
  email: "info@successpointcollege.in",
  social: {
    facebook: "https://facebook.com/successpointcollege",
    instagram: "https://instagram.com/successpointcollege",
    youtube: "https://youtube.com/@successpointcollege",
    linkedin: "https://linkedin.com/company/successpointcollege",
  },
  mapEmbedQuery: "Success Point College, Piprali Rd, Sikar, Rajasthan",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About College", href: "/about" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Chairman's Message", href: "/chairmans-message" },
      { label: "Principal's Message", href: "/principals-message" },
      { label: "Director's Message", href: "/directors-message" },
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "Faculty", href: "/faculty" },
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
      { label: "Skill Development Courses", href: "/course-category/skill-development-courses" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Admission Process", href: "/admissions" },
      { label: "Admission Form", href: "/admissions/form" },
      { label: "Fee Structure", href: "/fee-structure" },
      { label: "Scholarships", href: "/scholarships" },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About College", href: "/about" },
    { label: "Faculty", href: "/faculty" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Placement Cell", href: "/placements" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQs", href: "/faqs" },
  ],
  admissions: [
    { label: "Admission Process", href: "/admissions" },
    { label: "Admission Form", href: "/admissions/form" },
    { label: "Fee Structure", href: "/fee-structure" },
    { label: "Scholarships", href: "/scholarships" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};
