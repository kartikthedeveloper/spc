import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl2 border border-brass-500/15 bg-ivory-50 p-6 shadow-premium transition-shadow hover:shadow-glow"
    >
      <span className="font-mono text-xs uppercase tracking-widest text-brass-600">{post.category}</span>
      <h3 className="mt-2 font-display text-xl font-semibold text-navy-950">{post.title}</h3>
      <p className="mt-2 text-sm text-ink-500 line-clamp-3">{post.excerpt}</p>
      <div className="mt-4 flex items-center gap-2 text-xs text-ink-500">
        <Clock size={14} className="text-brass-500" />
        {post.readingTime}
      </div>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy-950">
        Read Article
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}
