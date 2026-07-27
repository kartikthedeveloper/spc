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
  // -------------------- Graduation Courses --------------------
  {
    slug: "bca",
    title: "BCA (Bachelor of Computer Applications)",
    shortTitle: "BCA",
    category: "graduation-courses",
    image: "/images/bcabanner.webp",
    tagline: "A 3‑year honours‑track degree built around real software development — the best BCA in Sikar.",
    duration: "3 Years (6 Semesters)",
    eligibility: "Passed 10+2 in any stream from a recognised board; basic mathematics recommended.",
    fees: "Contact Success Point College admissions cell for the current fee structure and instalment options.",
    overview:
      "Success Point College, the best coaching institute in Sikar, Rajasthan, offers a BCA program that takes students from programming fundamentals to full project delivery. With a state‑of‑the‑art computer centre and expert faculty, students graduate with a working portfolio, not just a transcript. Our BCA is designed to meet the needs of the local IT industry and prepare you for higher studies.",
    curriculum: [
      "Programming Fundamentals (C, C++)",
      "Data Structures & Algorithms",
      "Database Management Systems (SQL)",
      "Object‑Oriented Programming with Java",
      "Web Technologies (HTML, CSS, JavaScript)",
      "Operating Systems & Computer Networks",
      "Python Programming",
      "Software Engineering & UML",
      "Mobile Application Development",
      "Final Year Capstone Project",
    ],
    software: ["VS Code", "MySQL Workbench", "Android Studio", "GitHub", "Eclipse IDE"],
    projects: [
      "A full‑stack student management system built in the second year",
      "A capstone project chosen by the student and mentored by faculty in the final semester",
    ],
    certification: "Degree awarded on successful completion; industry certificates offered as electives.",
    placementSupport:
      "Resume building, mock technical interviews, and campus placement drives with our IT and services sector recruiting partners in Rajasthan and beyond.",
    careers: ["Software Developer", "Web Developer", "Database Administrator", "Systems Analyst", "IT Support Engineer"],
    salaryRange: "₹2.4 LPA – ₹6 LPA for freshers, depending on role and city",
    rating: 4.8,
    enrolled: 215,
    faqs: [
      {
        q: "Is BCA equivalent to a B.Tech in Computer Science?",
        a: "BCA is a focused computer applications degree, lighter on core engineering mathematics than a B.Tech but strong on programming and software development practice.",
      },
      {
        q: "Can I pursue MCA after BCA?",
        a: "Yes — BCA is the standard and most direct pathway into MCA and most computer‑applications postgraduate programs.",
      },
    ],
    related: ["mca", "pgdca", "full-stack-web-development", "data-analyst"],
  },

  // -------------------- Post Graduation Courses --------------------
  {
    slug: "mca",
    title: "MCA (Master of Computer Applications)",
    shortTitle: "MCA",
    category: "post-graduation-courses",
    image: "/images/mcabanner.webp",
    tagline: "A 2‑year postgraduate program for graduates aiming at senior software roles — top MCA in Sikar.",
    duration: "2 Years (4 Semesters)",
    eligibility: "Graduation (BCA/B.Sc/B.Com or equivalent) with mathematics at 10+2 or graduation level.",
    fees: "Contact Success Point College admissions cell for the current fee structure and instalment options.",
    overview:
      "Success Point College, the best coaching in Sikar, Rajasthan, offers an MCA program that builds on undergraduate computing knowledge with advanced subjects in software architecture, cloud systems, and data engineering. Our MCA prepares students for senior developer, architect, and analyst roles, with a strong focus on practical projects and industry exposure.",
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
      "A cloud‑deployed enterprise application in semester 3",
      "A dissertation project in semester 4, published as an internal report",
    ],
    certification: "Postgraduate degree awarded on successful completion of all semesters and the dissertation.",
    placementSupport:
      "Senior‑track placement preparation including system design interviews and referrals to partner IT companies in Jaipur, Delhi, and remote.",
    careers: ["Senior Software Engineer", "Systems Architect", "Data Engineer", "Technical Project Lead", "Cloud Engineer"],
    salaryRange: "₹4 LPA – ₹10 LPA for freshers, higher with prior BCA project experience",
    rating: 4.7,
    enrolled: 142,
    faqs: [
      {
        q: "Is MCA still relevant after the rise of B.Tech CSE?",
        a: "Yes — MCA remains a recognised postgraduate route into core software roles, especially for BCA and B.Sc graduates who did not take the B.Tech route.",
      },
    ],
    related: ["bca", "pgdca", "data-analyst", "full-stack-web-development"],
  },

  // -------------------- Computer Courses --------------------
  {
    slug: "basic-computer",
    title: "Basic Computer Course",
    shortTitle: "Basic Computer",
    category: "computer-courses",
    image: "/images/basicbanner.webp",
    tagline: "Your first step into computing — for absolute beginners in Sikar.",
    duration: "3 Months",
    eligibility: "No prior computer knowledge required; open to students after 10th and working adults.",
    fees: "Contact Success Point College for the current fee structure.",
    overview:
      "Success Point College, the best computer coaching in Sikar, Rajasthan, offers a Basic Computer Course that takes complete beginners from switching on a computer to confidently using MS Office, email, and the internet. This course is ideal for school leavers, housewives, and professionals who want to become computer‑literate.",
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
    placementSupport: "Guidance toward entry‑level office assistant and data entry roles in Sikar and nearby areas.",
    careers: ["Office Assistant", "Data Entry Operator", "Computer Operator"],
    salaryRange: "₹1.2 LPA – ₹2.2 LPA for entry‑level roles",
    rating: 4.6,
    enrolled: 320,
    faqs: [
      {
        q: "Can adults with no computer background join this course?",
        a: "Yes, this course is specifically designed for absolute beginners of any age.",
      },
    ],
    related: ["advanced-computer", "dca", "pgdca"],
  },
  {
    slug: "advanced-computer",
    title: "Advanced Computer Course",
    shortTitle: "Advanced Computer",
    category: "computer-courses",
    image: "/images/advancebanner.webp",
    tagline: "Master advanced MS Office, internet skills, and more — for professionals in Sikar.",
    duration: "3 Months",
    eligibility: "Basic computer knowledge required; 10+2 passed recommended.",
    fees: "Contact Success Point College for the current fee structure.",
    overview:
      "Success Point College, the leading computer training centre in Sikar, Rajasthan, offers an Advanced Computer Course that goes beyond the basics. You will master advanced features of MS Office, internet research, email management, and basic trouble‑shooting. This course is perfect for office professionals, teachers, and anyone who wants to enhance their productivity.",
    curriculum: [
      "Advanced MS Word (Mail Merge, Macros, Forms)",
      "Advanced MS Excel (Pivot Tables, Lookups, Dashboards)",
      "Advanced MS PowerPoint (Animations, Master Slides)",
      "Internet & Email Management (Filters, Labels, Calendar)",
      "Basic Computer Hardware & Troubleshooting",
      "Introduction to Tally & Accounting Software",
    ],
    software: ["MS Word", "MS Excel", "MS PowerPoint", "Outlook", "Tally Prime (intro)"],
    projects: ["A complete office automation project (letters, invoices, reports)"],
    certification: "Certificate of Completion issued by Success Point College.",
    placementSupport: "Assistance for office‑based job placements in Sikar, Jaipur, and remote roles.",
    careers: ["Senior Office Assistant", "Administrative Executive", "Data Analyst (Entry)", "Computer Teacher"],
    salaryRange: "₹1.8 LPA – ₹3.5 LPA",
    rating: 4.5,
    enrolled: 185,
    faqs: [
      {
        q: "Is this course suitable for working professionals?",
        a: "Absolutely — the course is designed to upskill working professionals with practical office tools.",
      },
    ],
    related: ["basic-computer", "dca", "tally-prime-with-gst"],
  },
  {
    slug: "dca",
    title: "DCA (Diploma in Computer Applications)",
    shortTitle: "DCA",
    category: "computer-courses",
    image: "/images/dcabanner.webp",
    tagline: "A one‑year diploma for comprehensive computer skills — the best DCA in Sikar.",
    duration: "1 Year (2 Semesters)",
    eligibility: "Passed 10+2 in any stream from a recognised board.",
    fees: "Contact Success Point College for the current fee structure.",
    overview:
      "Success Point College, the premier computer education institute in Sikar, Rajasthan, offers a DCA program that covers a wide range of computer applications — from office tools to programming and web design. This diploma is ideal for students who want a strong foundation in computing for government jobs, further studies, or immediate employment.",
    curriculum: [
      "Computer Fundamentals & Operating Systems",
      "MS Office (Word, Excel, PowerPoint, Access)",
      "Programming in C",
      "Database Management Systems (MySQL)",
      "Internet & Web Designing (HTML, CSS)",
      "Tally with GST (basics)",
      "Project Work",
    ],
    software: ["MS Office", "Turbo C", "MySQL", "Notepad++", "Tally Prime"],
    projects: ["A complete business management system using MS Access and MySQL"],
    certification: "Diploma certificate awarded on completion of both semesters and project.",
    placementSupport:
      "Placement guidance for government exam computer‑proficiency requirements and office‑role positions in Rajasthan.",
    careers: ["Computer Operator", "Data Entry Supervisor", "Office Administrator", "Junior Programmer"],
    salaryRange: "₹1.8 LPA – ₹3.2 LPA for freshers",
    rating: 4.7,
    enrolled: 98,
    faqs: [
      {
        q: "Is DCA recognised for government jobs?",
        a: "Yes — DCA is a widely accepted computer diploma for government recruitment in Rajasthan and other states.",
      },
    ],
    related: ["basic-computer", "advanced-computer", "pgdca", "tally-prime-with-gst"],
  },

  // -------------------- Professional Courses --------------------
  {
    slug: "pg-diploma-cyber-security",
    title: "PG Diploma in Cyber Security & Cyber Law",
    shortTitle: "PG Diploma Cyber Security",
    category: "professional-courses",
    image: "/images/cyberbanner.webp",
    tagline: "Become a cyber security expert with legal knowledge — the best PG Diploma in Sikar.",
    duration: "1 Year (2 Semesters)",
    eligibility: "Graduation in any discipline from a recognised university.",
    fees: "Contact Success Point College for the current fee structure.",
    overview:
      "Success Point College, the top coaching institute in Sikar, Rajasthan, offers a Post Graduate Diploma in Cyber Security & Cyber Law. This program combines technical security skills (network security, ethical hacking, cryptography) with an understanding of cyber laws, IT Act, and digital forensics. Ideal for graduates aiming for security analyst roles or legal consultancy.",
    curriculum: [
      "Computer Networks & Security Fundamentals",
      "Ethical Hacking & Penetration Testing",
      "Cryptography & Public Key Infrastructure",
      "Cyber Laws, IT Act, and Regulatory Frameworks",
      "Digital Forensics & Incident Response",
      "Cloud Security Basics",
      "Security Audit & Compliance",
      "Capstone Project on Security Assessment",
    ],
    software: ["Kali Linux", "Wireshark", "Nmap", "Burp Suite", "Metasploit", "Forensic Toolkit"],
    projects: [
      "A vulnerability assessment on a lab‑based network",
      "A case study on a cyber law incident with forensic analysis",
    ],
    certification: "PG Diploma awarded on successful completion; guidance for CEH and CompTIA Security+.",
    placementSupport:
      "Campus placement support with IT security firms, BFSI companies, and government cybersecurity cells in Rajasthan.",
    careers: [
      "Cyber Security Analyst",
      "Network Security Engineer",
      "Information Security Consultant",
      "Digital Forensics Investigator",
      "Compliance Officer",
    ],
    salaryRange: "₹3 LPA – ₹8 LPA for freshers",
    rating: 4.9,
    enrolled: 76,
    faqs: [
      {
        q: "Do I need a technical background to join?",
        a: "A basic understanding of computers is helpful, but the course covers all essential security concepts from scratch.",
      },
    ],
    related: ["cyber-security", "ethical-hacking", "networking", "cloud-computing"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing Course",
    shortTitle: "Digital Marketing",
    category: "professional-courses",
    image: "/images/dmbanner.webp",
    tagline: "SEO, paid ads, and social media — the best digital marketing course in Sikar.",
    duration: "3–4 Months",
    eligibility: "Passed 12th or graduation; open to working professionals.",
    fees: "Contact Success Point College for the current fee structure.",
    overview:
      "Success Point College, the best digital marketing training provider in Sikar, Rajasthan, offers a hands‑on course covering SEO, Google Ads, Meta Ads, social media, and content marketing. Students run real campaigns on practice budgets and build a portfolio of live work, making them job‑ready for the booming digital economy.",
    curriculum: [
      "Digital Marketing Fundamentals & Strategy",
      "Search Engine Optimization (On‑page, Off‑page, Technical)",
      "Google Ads & Google Analytics 4",
      "Meta Ads (Facebook & Instagram)",
      "Social Media Marketing & Content Calendars",
      "Email Marketing Automation",
      "Content Marketing & Copywriting Basics",
    ],
    software: ["Google Search Console", "Google Analytics 4", "Meta Business Suite", "Canva", "Mailchimp"],
    projects: [
      "A complete SEO audit and improvement plan for a local business in Sikar",
      "A live small‑budget ad campaign with performance report",
    ],
    certification: "Certificate of Completion issued by Success Point College; guidance for Google & Meta certifications.",
    placementSupport:
      "Internship placements with local businesses and digital agencies in Sikar, plus freelancing guidance.",
    careers: ["SEO Executive", "Social Media Manager", "PPC Executive", "Digital Marketing Executive", "Content Marketer"],
    salaryRange: "₹2 LPA – ₹5 LPA for freshers; higher with a strong portfolio",
    rating: 4.8,
    enrolled: 230,
    faqs: [
      {
        q: "Can I start freelancing after this course?",
        a: "Yes — many students take on small local‑business projects for SEO and social media management alongside job applications.",
      },
    ],
    related: ["seo", "google-ads", "meta-ads", "social-media-marketing"],
  },
  {
    slug: "data-analyst",
    title: "Data Analyst Course",
    shortTitle: "Data Analyst",
    category: "professional-courses",
    image: "/images/dabanner.webp",
    tagline: "Turn spreadsheets and databases into business decisions — the best data analyst course in Sikar.",
    duration: "3–4 Months",
    eligibility: "Passed 12th or graduation in any stream; basic Excel familiarity helpful.",
    fees: "Contact Success Point College for the current fee structure.",
    overview:
      "Success Point College, the top data analytics training institute in Sikar, Rajasthan, offers a practical Data Analyst course. You will master Excel, SQL, Power BI, and Python to clean, analyse, and visualise business data. This course prepares you for analyst roles across industries, with a focus on real‑world datasets.",
    curriculum: [
      "Advanced Excel (Pivot Tables, Lookup Functions, Dashboards)",
      "SQL for Data Querying",
      "Power BI for Dashboards & Reporting",
      "Python for Data Analytics (pandas, NumPy)",
      "Data Visualisation & Storytelling",
      "Capstone Analytics Project",
    ],
    software: ["MS Excel", "Power BI Desktop", "MySQL", "Python (Jupyter Notebook)"],
    projects: ["A sales performance dashboard in Power BI", "An end‑to‑end analysis project using a public dataset"],
    certification: "Certificate of Completion issued by Success Point College.",
    placementSupport: "Portfolio building and interview preparation for analyst roles with local and remote employers.",
    careers: ["Data Analyst", "Business Analyst", "Reporting Analyst", "MIS Executive"],
    salaryRange: "₹2.5 LPA – ₹6 LPA for freshers",
    rating: 4.6,
    enrolled: 167,
    faqs: [
      {
        q: "Do I need to know programming before starting?",
        a: "No — the course starts with Excel and SQL before introducing Python, so no prior programming knowledge is required.",
      },
    ],
    related: ["advanced-excel", "power-bi", "sql", "python-for-data-analytics"],
  },
  {
    slug: "full-stack-web-development",
    title: "Full Stack Web Development",
    shortTitle: "Full Stack Web Dev",
    category: "professional-courses",
    image: "/images/fullstack.webp",
    tagline: "From HTML to full‑stack MERN — build and ship real websites, the best in Sikar.",
    duration: "4–6 Months",
    eligibility: "Passed 12th; basic computer familiarity recommended.",
    fees: "Contact Success Point College for the current fee structure.",
    overview:
      "Success Point College, the best web development coaching in Sikar, Rajasthan, offers a project‑driven Full Stack Web Development course. You will learn frontend, backend, and databases, and finally deploy your own full‑stack applications live on the internet. This course is designed to make you a job‑ready developer.",
    curriculum: [
      "HTML5, CSS3 & Responsive Design",
      "JavaScript (ES6+) Fundamentals",
      "React.js for Frontend Development",
      "Node.js & Express.js for Backend Development",
      "MongoDB for Databases",
      "Git, GitHub & Deployment (Vercel/Netlify)",
    ],
    software: ["VS Code", "Node.js", "MongoDB Compass", "GitHub", "Postman"],
    projects: [
      "A responsive personal portfolio site",
      "A full‑stack MERN application with authentication, deployed live",
    ],
    certification: "Certificate of Completion issued by Success Point College.",
    placementSupport: "Portfolio review, mock coding interviews, and referrals to partner web development companies.",
    careers: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Web Designer"],
    salaryRange: "₹2.5 LPA – ₹6 LPA for freshers",
    rating: 4.9,
    enrolled: 198,
    faqs: [
      {
        q: "Do I need prior coding experience to join?",
        a: "No — the course starts from HTML and CSS fundamentals before moving into JavaScript and frameworks.",
      },
    ],
    related: ["frontend-development", "backend-development", "mern-stack", "wordpress-development"],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile App Dev",
    category: "professional-courses",
    image: "/images/mobileapp.webp",
    tagline: "Build Android and iOS apps with Flutter or React Native — the best app development course in Sikar.",
    duration: "4–5 Months",
    eligibility: "Passed 12th; basic programming knowledge recommended.",
    fees: "Contact Success Point College for the current fee structure.",
    overview:
      "Success Point College, the best mobile app development training in Sikar, Rajasthan, offers a comprehensive course covering both Android and iOS app development using cross‑platform frameworks like Flutter and React Native. Students build and publish real apps on the Google Play Store and Apple App Store, gaining hands‑on experience.",
    curriculum: [
      "Introduction to Mobile Development & Frameworks (Flutter/React Native)",
      "UI/UX Design Principles for Mobile",
      "State Management & Navigation",
      "Firebase Integration (Auth, Firestore)",
      "Native Device Features (Camera, Location, Notifications)",
      "API Integration & Networking",
      "Testing & Debugging",
      "App Publishing on Play Store & App Store",
      "Capstone Project: Full‑featured Mobile App",
    ],
    software: ["Android Studio", "VS Code", "Firebase Console", "Postman", "GitHub"],
    projects: [
      "A simple to‑do app with Firebase authentication",
      "A full‑featured e‑commerce or social media app published on the store",
    ],
    certification: "Certificate of Completion issued by Success Point College.",
    placementSupport:
      "Portfolio building and interview preparation for mobile developer roles at startups and IT companies.",
    careers: ["Mobile App Developer", "Cross‑Platform Developer", "UI/UX Developer", "React Native Developer"],
    salaryRange: "₹2.5 LPA – ₹7 LPA for freshers",
    rating: 4.8,
    enrolled: 134,
    faqs: [
      {
        q: "Which framework do you teach – Flutter or React Native?",
        a: "We teach both; the course is structured to cover core concepts and then focus on the framework that suits the student's career goals.",
      },
    ],
    related: ["full-stack-web-development", "frontend-development", "react-native", "flutter"],
  },
];

// Helper functions (unchanged)
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