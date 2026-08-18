import { BLOG_POSTS } from "@/data/blog";
import { CATEGORIES, COURSES } from "@/data/courses";
import { SITE } from "@/data/site";

export default function sitemap() {
  const staticRoutes = [
    "",
    "/about",
    "/achievements",
    "/admissions",
    "/blog",
    "/contact",
    "/directors-message",
    "/infrastructure",
    "/internship",
    "/junior-code-creators",
    "/kids-code-in-sikar",
    "/student-projects",
    "/teen-tech-developers",
    "/privacy-policy",
    "/terms-and-conditions",
    "/courses",
  ].map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route === "/courses" ? 0.9 : 0.7,
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
    lastModified: new Date(post.updatedAt || post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...courseRoutes, ...categoryRoutes, ...blogRoutes];
}
