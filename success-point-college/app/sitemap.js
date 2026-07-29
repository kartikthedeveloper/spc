import { COURSES, CATEGORIES } from "@/data/courses";
import { BLOG_POSTS } from "@/data/blog";
import { SITE } from "@/data/site";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/why-choose-us",
    "/chairmans-message",
    "/principals-message",
    "/directors-message",
    "/infrastructure",
    "/admissions",
    "/admissions/form",
    "/fee-structure",
    "/scholarships",
    "/placements",
    "/faculty",
    "/gallery",
    "/blog",
    "/faqs",
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

  const blogRoutes = BLOG_POSTS.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...courseRoutes, ...categoryRoutes, ...blogRoutes];
}
