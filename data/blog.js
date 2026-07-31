// Write every blog post here as one object. Nothing else needs to change —
// app/blog/[slug]/page.jsx renders any post from this array automatically,
// and app/blog/page.jsx lists them all.
//
// `sections` = the article body. Each section becomes an <h2> + paragraphs,
// and also appears in the auto-generated Table of Contents (matched by `id`).

export const BLOG_POSTS = [
  {
    slug: "best-computer-courses-after-12th-sikar",
    title: "Best Computer Courses After 12th in Sikar (2026 Guide)",
    excerpt:
      "A practical comparison of the computer courses worth taking after 12th in Sikar — what each one actually teaches, how long it takes, and what job it leads to.",
    category: "Career Guidance",
    image:"/images/best-computer-course-in-sikar.webp",
    author: "Success Point Institute Team",
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
    readingTime: "7 min read",
    keywords: [
      "computer courses after 12th Sikar",
      "best computer course Sikar",
      "computer institute Sikar",
    ],
    tableOfContents: [
      { id: "why-a-computer-course", title: "Why take a computer course right after 12th?" },
      { id: "top-options", title: "Top computer courses to consider" },
      { id: "how-to-choose", title: "How to choose the right one" },
      { id: "next-steps", title: "Next steps" },
    ],
    sections: [
      {
        id: "why-a-computer-course",
        title: "Why take a computer course right after 12th?",
        paragraphs: [
          "Most students finishing 12th in Sikar face the same fork in the road: join a 3-year degree straight away, or spend a few months first building a practical skill. A focused computer course doesn't have to delay your degree — it can run alongside one, or fill the gap before admissions close.",
          "The advantage is speed. A 2–4 month computer course gets you to a usable, resume-worthy skill much faster than waiting for a full degree to finish, which matters if you want part-time work or an internship while you study.",
        ],
      },
      {
        id: "top-options",
        title: "Top computer courses to consider",
        paragraphs: [
          "For students who want office and accounting skills fast, a Basic Computer course followed by Tally Prime with GST covers most entry-level office job requirements in Sikar's local businesses.",
          "For students aiming at IT and software roles, Web Development or a BCA degree are the stronger long-term paths — Web Development for speed, BCA for a recognised degree plus deeper programming foundation.",
          "For students interested in marketing rather than pure technical work, Digital Marketing is typically the fastest route to freelance or agency work, since it doesn't require a programming background.",
        ],
      },
      {
        id: "how-to-choose",
        title: "How to choose the right one",
        paragraphs: [
          "Ask three questions: How much time do you actually have before you need an income or admission decision? Do you want a job quickly, or are you building toward a degree? Do you enjoy working with numbers and logic, or with words and visuals?",
          "If you're unsure, a Basic Computer course is a safe starting point — it's short, inexpensive, and every other course builds on it.",
        ],
      },
      {
        id: "next-steps",
        title: "Next steps",
        paragraphs: [
          "Compare the full curriculum, duration, and career outcomes for each course before enrolling — not just the course name.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I do a computer course while also pursuing a degree?",
        a: "Yes — most computer courses like Basic Computer, Tally Prime with GST, or Digital Marketing run for 2–4 months and are commonly taken alongside a degree program or during a gap before admission.",
      },
      {
        q: "Which computer course has the fastest job placement in Sikar?",
        a: "Tally Prime with GST and Basic Computer typically lead to the fastest local placements, since small businesses and CA firms in Sikar hire for these skills year-round.",
      },
    ],
    relatedSlugs: ["career-after-bca"],
    relatedCourseSlugs: ["basic-computer", "tally-prime-with-gst", "digital-marketing", "bca"],
  },
  {
    slug: "career-after-bca",
    title: "Career After BCA: Jobs, Salary & Higher Study Options",
    excerpt:
      "What actually happens after a BCA degree — the job roles that hire BCA graduates, realistic starting salaries, and whether MCA is worth doing next.",
    category: "Career Guidance",
    image:"/images/career-after-bca-in-sikar.webp",
    author: "Success Point Institute Team",
    publishedAt: "2026-07-29",
    updatedAt: "2026-07-29",
    readingTime: "6 min read",
    keywords: ["career after BCA", "BCA jobs", "BCA salary", "BCA vs MCA"],
    tableOfContents: [
      { id: "job-roles", title: "Job roles open to BCA graduates" },
      { id: "salary", title: "Realistic starting salary" },
      { id: "mca-or-job", title: "Should you do MCA or take a job?" },
    ],
    sections: [
      {
        id: "job-roles",
        title: "Job roles open to BCA graduates",
        paragraphs: [
          "A BCA degree qualifies you for the same entry-level software and IT roles as most computer science graduates: software developer, web developer, database administrator, and IT support roles are the most common first jobs.",
          "The deciding factor for which role you land is usually your project portfolio, not just the degree — recruiters ask BCA candidates to show working code, not just a transcript.",
        ],
      },
      {
        id: "salary",
        title: "Realistic starting salary",
        paragraphs: [
          "Starting salaries for BCA graduates in India typically range from ₹2.4 LPA to ₹6 LPA, depending on the role, city, and — most heavily — the strength of the candidate's portfolio and interview performance.",
          "Candidates with a solid capstone project and a couple of self-built applications on GitHub consistently land toward the higher end of that range.",
        ],
      },
      {
        id: "mca-or-job",
        title: "Should you do MCA or take a job?",
        paragraphs: [
          "If you want to move into senior technical or architecture roles faster, MCA is worth it — it's a direct, recognised postgraduate pathway from BCA.",
          "If you already have strong project experience and a job offer in hand, taking the job and pursuing MCA later (many students do it part-time) is equally valid — there's no single right order.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is BCA enough to get a software developer job, or do I need MCA?",
        a: "BCA alone is enough for most entry-level software developer roles, provided you have a working project portfolio. MCA becomes more relevant when targeting senior or architecture-level roles.",
      },
    ],
    relatedSlugs: ["best-computer-courses-after-12th-sikar"],
    relatedCourseSlugs: ["bca", "mca", "web-development"],
  },
];

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post) {
  return (post.relatedSlugs || []).map((slug) => getPostBySlug(slug)).filter(Boolean);
}