
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
  email: "successpointsikarofficial@gmail.com",
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
    label: "Our Programs",
    href: "/",
    children: [
      { label: "Internship", href: "/internship" },
      { label: "Little Tech Explorers", href: "/kids-code-in-sikar" },
      { label: "Junior Code Creators", href: "/junior-code-creators" },
      { label: "Teen Tech Developers", href: "/teen-tech-developers" },
      { label: "Graduation Courses", href: "/course-category/graduation-courses" },
      { label: "Post Graduation Courses", href: "/course-category/post-graduation-courses" },
      { label: "Computer Courses", href: "/course-category/computer-courses" },
      { label: "Professional Courses", href: "/course-category/professional-courses" },
    ],
  },
  {
    label: "Students",
    href: "/",
    children: [
      { label: "Student Projects", href: "/student-projects" },
      { label: "Student Achievements", href: "/achievements" },

    ],
  },
  {
    label: "Admissions Process", href: "/admissions",
  },
  {
    label: "Free Resources",
    href: "/",
    children: [
      { label: "Tech Blog", href: "/blog" },
      { label: "MCQ's", href: "https://www.codeskipper.in/mcq" },
      { label: "Interview Question", href: "https://www.codeskipper.in/interview" },
      { label: "Tech Roadmap", href: "https://www.codeskipper.in/roadmap" },
    ],
  },
];

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "About Institute", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Director's Message", href: "/directors-message" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Admission Process", href: "/admissions" },

  ],

  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};
