import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-navy-950 px-4 text-center">
      <span className="font-mono text-sm uppercase tracking-[0.3em] text-brass-300">404</span>
      <h1 className="mt-4 font-display text-4xl font-semibold text-ivory-50">Page not found</h1>
      <p className="mt-3 max-w-md text-ivory-100/70">
        The page you're looking for may have moved. Try the homepage or explore our courses.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-brass-500 px-6 py-3 font-semibold text-navy-950 focus-ring"
      >
        Back to Home
      </Link>
    </section>
  );
}
