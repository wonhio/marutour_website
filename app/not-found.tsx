import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-paper">
      <div className="container-content flex min-h-[60vh] flex-col items-start justify-center py-24">
        <p className="body-md text-[0.85rem] text-mist">404</p>
        <h1 className="h-1 mt-3 text-[2rem] text-ink">Page not found</h1>
        <p className="body-lg mt-4 max-w-md text-[1rem] text-graphite">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have
          moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center rounded-sm bg-navy px-6 py-3.5 text-[0.95rem] text-paper transition-colors hover:bg-navy-soft"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
