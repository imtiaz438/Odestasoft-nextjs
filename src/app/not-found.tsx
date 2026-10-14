import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-[72px] text-center">
      <div className="eyebrow">404</div>
      <h1 className="mb-4 text-4xl font-extrabold text-ink">Page not found.</h1>
      <p className="mb-8 max-w-[420px] text-body">
        The page you&rsquo;re looking for doesn&rsquo;t exist or may have moved.
      </p>
      <Link href="/" className="btn-primary">
        Back to homepage →
      </Link>
    </section>
  );
}
