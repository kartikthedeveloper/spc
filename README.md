# Success Point Institute — Website

Next.js 15 (App Router), JavaScript only, Tailwind CSS, Framer Motion, GSAP-ready, React Three Fiber.

## Run locally
```
npm install
npm run dev
```

## Design identity
Navy (#080B14) + ivory (#FAF7F0) + brass gold (#B8902E) with a "blueprint grid" signature —
a campus site-plan motif that ties the traditional college and the computer institute
together, instead of a generic gradient-blob template. Display face: Fraunces. Body: Inter.

## What's built (Phase 1)
- Full project scaffold, Tailwind theme, fonts, global layout with Navbar (mega menu),
  Footer, sticky call/WhatsApp/admission buttons, scroll progress bar, Lenis smooth scroll.
- **Data-driven course engine**: `data/courses.js` holds every course as one object.
  `app/courses/[slug]/page.jsx` renders ANY course from that data — hero, overview,
  curriculum, software, projects, careers, salary, FAQs (with FAQ schema), related courses.
  Adding a new course is a data entry, not a new page.
- `app/course-category/[slug]/page.jsx` — the 5 category pages, driven by `data/courses.js`.
- Home page: hero (3D wireframe + blueprint grid + animated text reveal), animated stats
  counters, featured courses, "Why Choose Us", admissions CTA.
- Contact page with map embed and form.
- `sitemap.js`, `robots.js`, Organization JSON-LD in the root layout.
- 10 fully written courses across all 5 categories (BCA, MCA, PGDCA, Basic Computer,
  Tally Prime with GST, Digital Marketing, Web Development, Data Analyst, Cyber Security)
  with real curriculum, salary ranges, and FAQs — no placeholder/Lorem Ipsum text.

## Phase 2 (next) — data entry, not new engineering
Because the course/blog templates already exist, finishing the full brief is now mostly
content, not code:
1. Add the remaining ~30 course objects to `data/courses.js` (same shape as the 10 already
   there — PGDCA siblings, all Digital Marketing sub-courses, all Web Dev sub-courses,
   Data Analyst sub-courses, Cyber Security sub-courses, MS Office/Typing/Internet).
2. Build `app/blog/[slug]/page.jsx` the same way — one `data/blog.js` entry per post — then
   write the 100+ posts in batches (10–15 at a time keeps each one genuinely researched
   rather than templated filler).
3. Remaining static pages (About, Chairman/Principal/Director messages, Infrastructure,
   Faculty, Admission Form, Fee Structure, Scholarships, Gallery, Placements, FAQs, legal
   pages) — each is a single content page; can be built in one batch.
4. GA4/GTM/Search Console: drop in the measurement IDs once you have the properties created.

Tell me which phase to run next and I'll continue directly in this project.
