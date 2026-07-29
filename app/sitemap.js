import { COURSES, CATEGORIES } from "@/data/courses";
import { SITE } from "@/data/site";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/admissions",
    "/blog",
    "/directors-message",
    "/contact",
    "/privacy-policy",
    "/refund-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const courseRoutes = COURSES.map((course) => ({
    url: `${SITE.url}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const categoryRoutes = CATEGORIES.map((category) => ({
    url: `${SITE.url}/course-category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...categoryRoutes];
}
