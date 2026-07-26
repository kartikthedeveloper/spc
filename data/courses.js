// Each course object fully drives /app/courses/[slug]/page.jsx.
// To add a new course: add one object here. No new page code is needed.
// Categories map to /app/course-category/[slug]/page.jsx via `category`.

export const CATEGORIES = [
  {
    slug: "graduation-courses",
    title: "Graduation Courses",
    description:
      "Full-time undergraduate degree programs for students after 12th, building a strong academic foundation for careers or higher studies.",
  },
  {
    slug: "post-graduation-courses",
    title: "Post Graduation Courses",
    description:
      "Advanced degree programs for graduates who want specialised, career-ready qualifications in computer applications and management.",
  },
  {
    slug: "computer-courses",
    title: "Computer Courses",
    description:
      "Certificate and diploma programs covering office productivity, accounting software, and foundational computing skills.",
  },
  {
    slug: "professional-courses",
    title: "Professional Courses",
    description:
      "Industry-oriented programs in digital marketing, web development, and data analytics designed for immediate employability.",
  },
  {
    slug: "skill-development-courses",
    title: "Skill Development Courses",
    description:
      "Focused, shorter-duration courses for working professionals and students to add an in-demand skill to their profile quickly.",
  },
];

export const COURSES = [
  {
    slug: "bca",
    title: "BCA (Bachelor of Computer Applications)",
    shortTitle: "BCA",
    category: "graduation-courses",
    tagline: "A 3-year honours-track degree built around real software development.",
    duration: "3 Years (6 Semesters)",
    eligibility: "Passed 10+2 in any stream from a recognised board; basic mathematics recommended.",
    fees: "Contact admissions cell for the current fee structure and instalment options.",
    overview:
      "The BCA program at Success Point College takes students from programming fundamentals through to full project delivery, combining classroom teaching with hands-on lab work in our computer centre. Students graduate with a working portfolio, not just a transcript.",
    curriculum: [
      "Programming Fundamentals (C, C++)",
      "Data Structures & Algorithms",
      "Database Management Systems (SQL)",
      "Object-Oriented Programming with Java",
      "Web Technologies (HTML, CSS, JavaScript)",
      "Operating Systems & Computer Networks",
      "Python Programming",
      "Software Engineering & UML",
      "Mobile Application Development",
      "Final Year Capstone Project",
    ],
    software: ["VS Code", "MySQL Workbench", "Android Studio", "GitHub", "Eclipse IDE"],
    projects: [
      "A full-stack student management system built in the second year",
      "A capstone project chosen by the student and mentored by faculty in the final semester",
    ],
    certification: "Degree awarded on successful completion; industry certificates offered as electives.",
    placementSupport:
      "Resume building, mock technical interviews, and campus placement drives with our IT and services sector recruiting partners.",
    careers: ["Software Developer", "Web Developer", "Database Administrator", "Systems Analyst", "IT Support Engineer"],
    salaryRange: "₹2.4 LPA – ₹6 LPA for freshers, depending on role and city",
    faqs: [
      {
        q: "Is BCA equivalent to a B.Tech in Computer Science?",
        a: "BCA is a focused computer applications degree, lighter on core engineering mathematics than a B.Tech but strong on programming and software development practice.",
      },
      {
        q: "Can I pursue MCA after BCA?",
        a: "Yes — BCA is the standard and most direct pathway into MCA and most computer-applications postgraduate programs.",
      },
    ],
    related: ["mca", "pgdca", "web-development", "python-for-data-analytics"],
  },
  {
    slug: "mca",
    title: "MCA (Master of Computer Applications)",
    shortTitle: "MCA",
    category: "post-graduation-courses",
    tagline: "A 2-year postgraduate program for graduates aiming at senior software roles.",
    duration: "2 Years (4 Semesters)",
    eligibility: "Graduation (BCA/B.Sc/B.Com or equivalent) with mathematics at 10+2 or graduation level.",
    fees: "Contact admissions cell for the current fee structure and instalment options.",
    overview:
      "MCA builds on undergraduate computing knowledge with advanced subjects in software architecture, cloud systems, and data engineering, preparing students for senior developer and analyst roles or further research.",
    curriculum: [
      "Advanced Data Structures",
      "Advanced Database Management Systems",
      "Java & Enterprise Application Development",
      "Cloud Computing & Virtualization",
      "Machine Learning Foundations",
      "Software Project Management",
      "Mobile & Web Application Architecture",
      "Research Project / Dissertation",
    ],
    software: ["IntelliJ IDEA", "Docker", "AWS Free Tier", "Postman", "Jupyter Notebook"],
    projects: [
      "A cloud-deployed enterprise application in semester 3",
      "A dissertation project in semester 4, published as an internal report",
    ],
    certification: "Postgraduate degree awarded on successful completion of all semesters and the dissertation.",
    placementSupport:
      "Senior-track placement preparation including system design interviews and referrals to partner IT companies.",
    careers: ["Senior Software Engineer", "Systems Architect", "Data Engineer", "Technical Project Lead", "Cloud Engineer"],
    salaryRange: "₹4 LPA – ₹10 LPA for freshers, higher with prior BCA project experience",
    faqs: [
      {
        q: "Is MCA still relevant after the rise of B.Tech CSE?",
        a: "Yes — MCA remains a recognised postgraduate route into core software roles, especially for BCA and B.Sc graduates who did not take the B.Tech route.",
      },
    ],
    related: ["bca", "pgdca", "data-analyst", "cyber-security"],
  },
  {
    slug: "pgdca",
    title: "PGDCA (Post Graduate Diploma in Computer Applications)",
    shortTitle: "PGDCA",
    category: "post-graduation-courses",
    tagline: "A one-year diploma for graduates who need computer proficiency fast.",
    duration: "1 Year (2 Semesters)",
    eligibility: "Graduation in any stream from a recognised university.",
    fees: "Contact admissions cell for the current fee structure and instalment options.",
    overview:
      "PGDCA is built for graduates from non-computer backgrounds — commerce, arts, or science — who need strong, practical computer skills for government exams, office jobs, or further computer study.",
    curriculum: [
      "Computer Fundamentals & Office Automation",
      "Programming in C",
      "Database Management with MS Access & MySQL",
      "Internet & Web Design Basics",
      "Tally with GST",
      "Project Work",
    ],
    software: ["MS Office", "Tally Prime", "MySQL", "Notepad++"],
    projects: ["A small business inventory or billing project built in Tally and MS Access"],
    certification: "Diploma certificate awarded on completion of both semesters and project submission.",
    placementSupport: "Assistance with government exam computer-proficiency requirements and office-role placements.",
    careers: ["Data Entry Operator", "Office Assistant", "Computer Instructor", "Accounts Assistant"],
    salaryRange: "₹1.8 LPA – ₹3.5 LPA for freshers",
    faqs: [
      {
        q: "Is PGDCA useful for government job applications?",
        a: "Many government recruitment notices in Rajasthan ask for a recognised computer certificate — PGDCA satisfies this requirement for most such posts.",
      },
    ],
    related: ["basic-computer", "advanced-computer", "tally-prime-with-gst"],
  },
  {
    slug: "basic-computer",
    title: "Basic Computer Course",
    shortTitle: "Basic Computer",
    category: "computer-courses",
    tagline: "Your first step into computing — for absolute beginners.",
    duration: "3 Months",
    eligibility: "No prior computer knowledge required; open to students after 10th and working adults.",
    fees: "Contact admissions cell for the current fee structure.",
    overview:
      "This course takes complete beginners from switching on a computer to confidently using MS Office, email, and the internet for study or work.",
    curriculum: [
      "Computer Fundamentals & Operating System Basics",
      "MS Word for documents and letters",
      "MS Excel for basic calculations and tables",
      "MS PowerPoint for presentations",
      "Internet, Email & Online Safety Basics",
    ],
    software: ["Windows", "MS Word", "MS Excel", "MS PowerPoint"],
    projects: ["A formatted resume in MS Word", "A simple monthly expense sheet in MS Excel"],
    certification: "Certificate of Completion issued by Success Point College.",
    placementSupport: "Guidance toward entry-level office assistant and data entry roles.",
    careers: ["Office Assistant", "Data Entry Operator", "Computer Operator"],
    salaryRange: "₹1.2 LPA – ₹2.2 LPA for entry-level roles",
    faqs: [
      {
        q: "Can adults with no computer background join this course?",
        a: "Yes, this course is specifically designed for absolute beginners of any age.",
      },
    ],
    related: ["advanced-computer", "pgdca", "ms-office"],
  },
  {
    slug: "tally-prime-with-gst",
    title: "Tally Prime with GST",
    shortTitle: "Tally Prime + GST",
    category: "computer-courses",
    tagline: "Practical accounting and GST compliance on India's most-used accounting software.",
    duration: "2–3 Months",
    eligibility: "Passed 12th (commerce background helpful, not mandatory).",
    fees: "Contact admissions cell for the current fee structure.",
    overview:
      "Learn day-to-day business accounting, inventory management, and GST return preparation on Tally Prime, using realistic company data sets from local trading and service businesses.",
    curriculum: [
      "Accounting Fundamentals & Vouchers",
      "Inventory Management in Tally",
      "GST Concepts, Invoicing & Returns (GSTR-1, GSTR-3B)",
      "TDS Basics in Tally",
      "Payroll Processing",
      "Bank Reconciliation & MIS Reports",
    ],
    software: ["Tally Prime"],
    projects: ["End-to-end books of accounts for a sample trading firm, including GST filing"],
    certification: "Certificate of Completion issued by Success Point College.",
    placementSupport: "Placement guidance for accounts assistant roles with local businesses and CA firms.",
    careers: ["Accounts Assistant", "GST Practitioner Assistant", "Billing Executive", "Junior Accountant"],
    salaryRange: "₹1.8 LPA – ₹3.2 LPA for freshers",
    faqs: [
      {
        q: "Do I need a commerce background to join?",
        a: "It helps but is not required — accounting fundamentals are taught from the ground up.",
      },
    ],
    related: ["basic-computer", "advanced-computer", "ms-office"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    category: "professional-courses",
    tagline: "SEO, paid ads, and social media — one course, five in-demand skills.",
    duration: "3–4 Months",
    eligibility: "Passed 12th or graduation; open to working professionals.",
    fees: "Contact admissions cell for the current fee structure.",
    overview:
      "A hands-on digital marketing course covering SEO, Google Ads, Meta Ads, social media, and content marketing, with students running real campaigns on practice budgets and building a portfolio of live work.",
    curriculum: [
      "Digital Marketing Fundamentals & Strategy",
      "Search Engine Optimization (On-page, Off-page, Technical)",
      "Google Ads & Google Analytics 4",
      "Meta Ads (Facebook & Instagram)",
      "Social Media Marketing & Content Calendars",
      "Email Marketing Automation",
      "Content Marketing & Copywriting Basics",
    ],
    software: ["Google Search Console", "Google Analytics 4", "Meta Business Suite", "Canva", "Mailchimp"],
    projects: ["A complete SEO audit and improvement plan for a local business", "A live small-budget ad campaign with performance report"],
    certification: "Certificate of Completion issued by Success Point College; guidance provided for Google & Meta certifications.",
    placementSupport: "Internship placements with local businesses and digital agencies, plus freelancing guidance.",
    careers: ["SEO Executive", "Social Media Manager", "PPC Executive", "Digital Marketing Executive", "Content Marketer"],
    salaryRange: "₹2 LPA – ₹5 LPA for freshers; higher with a strong portfolio",
    faqs: [
      {
        q: "Can I start freelancing after this course?",
        a: "Yes — many students take on small local-business projects for SEO and social media management alongside job applications.",
      },
    ],
    related: ["seo", "google-ads", "meta-ads", "social-media-marketing"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    category: "professional-courses",
    tagline: "From HTML to full-stack MERN — build and ship real websites.",
    duration: "4–6 Months",
    eligibility: "Passed 12th; basic computer familiarity recommended.",
    fees: "Contact admissions cell for the current fee structure.",
    overview:
      "A project-driven web development course covering frontend, backend, and databases, ending with students deploying their own full-stack applications live on the internet.",
    curriculum: [
      "HTML5, CSS3 & Responsive Design",
      "JavaScript (ES6+) Fundamentals",
      "React.js for Frontend Development",
      "Node.js & Express.js for Backend Development",
      "MongoDB for Databases",
      "Git, GitHub & Deployment (Vercel/Netlify)",
    ],
    software: ["VS Code", "Node.js", "MongoDB Compass", "GitHub", "Postman"],
    projects: ["A responsive personal portfolio site", "A full-stack MERN application with authentication, deployed live"],
    certification: "Certificate of Completion issued by Success Point College.",
    placementSupport: "Portfolio review, mock coding interviews, and referrals to partner web development companies.",
    careers: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Web Designer"],
    salaryRange: "₹2.5 LPA – ₹6 LPA for freshers",
    faqs: [
      {
        q: "Do I need prior coding experience to join?",
        a: "No — the course starts from HTML and CSS fundamentals before moving into JavaScript and frameworks.",
      },
    ],
    related: ["frontend-development", "backend-development", "mern-stack", "wordpress-development"],
  },
  {
    slug: "data-analyst",
    title: "Data Analyst Course",
    shortTitle: "Data Analyst",
    category: "professional-courses",
    tagline: "Turn spreadsheets and databases into business decisions.",
    duration: "3–4 Months",
    eligibility: "Passed 12th or graduation in any stream; basic Excel familiarity helpful.",
    fees: "Contact admissions cell for the current fee structure.",
    overview:
      "This course builds practical data analysis skills across Excel, SQL, Power BI, and Python, so students can clean, analyse, and present business data confidently.",
    curriculum: [
      "Advanced Excel (Pivot Tables, Lookup Functions, Dashboards)",
      "SQL for Data Querying",
      "Power BI for Dashboards & Reporting",
      "Python for Data Analytics (pandas, NumPy)",
      "Data Visualisation & Storytelling",
      "Capstone Analytics Project",
    ],
    software: ["MS Excel", "Power BI Desktop", "MySQL", "Python (Jupyter Notebook)"],
    projects: ["A sales performance dashboard in Power BI", "An end-to-end analysis project using a public dataset"],
    certification: "Certificate of Completion issued by Success Point College.",
    placementSupport: "Portfolio building and interview preparation for analyst roles with local and remote employers.",
    careers: ["Data Analyst", "Business Analyst", "Reporting Analyst", "MIS Executive"],
    salaryRange: "₹2.5 LPA – ₹6 LPA for freshers",
    faqs: [
      {
        q: "Do I need to know programming before starting?",
        a: "No — the course starts with Excel and SQL before introducing Python, so no prior programming knowledge is required.",
      },
    ],
    related: ["advanced-excel", "power-bi", "sql", "python-for-data-analytics"],
  },
  {
    slug: "cyber-security",
    title: "Cyber Security & Ethical Hacking",
    shortTitle: "Cyber Security",
    category: "professional-courses",
    tagline: "Learn to think like an attacker to defend real systems.",
    duration: "4 Months",
    eligibility: "Passed 12th; basic networking or computer knowledge recommended.",
    fees: "Contact admissions cell for the current fee structure.",
    overview:
      "A practical course in networking, ethical hacking methodology, and system defence, using lab environments so students practise safely and legally on isolated systems.",
    curriculum: [
      "Networking Fundamentals & Protocols",
      "Linux for Security Professionals",
      "Ethical Hacking Methodology & Reconnaissance",
      "Web Application Security Basics (OWASP Top 10)",
      "System Hardening & Basic Cloud Security",
      "Capstone Security Assessment (Lab Environment)",
    ],
    software: ["Kali Linux", "Wireshark", "Nmap", "Burp Suite Community"],
    projects: ["A documented vulnerability assessment on a lab-only test environment"],
    certification: "Certificate of Completion issued by Success Point College; guidance for industry certifications provided.",
    placementSupport: "Guidance toward junior security analyst and IT support roles with a security specialisation.",
    careers: ["Junior Security Analyst", "SOC Analyst (Entry Level)", "IT Support Engineer (Security Focus)"],
    salaryRange: "₹2.5 LPA – ₹6 LPA for freshers",
    faqs: [
      {
        q: "Is this course only theory, or is there hands-on practice?",
        a: "The course is lab-driven — students practise techniques in controlled, isolated environments rather than through theory alone.",
      },
    ],
    related: ["ethical-hacking", "networking", "linux", "cloud-computing"],
  },
];

export function getCourseBySlug(slug) {
  return COURSES.find((c) => c.slug === slug);
}

export function getCoursesByCategory(categorySlug) {
  return COURSES.filter((c) => c.category === categorySlug);
}

export function getRelatedCourses(course) {
  return (course.related || [])
    .map((slug) => getCourseBySlug(slug))
    .filter(Boolean);
}
