import Link from "next/link";

export function CTABand() {
  return (
    <section className="section-minor">
      <div className="wrap">
        <div className="rounded-cardlg bg-ink px-8 py-14 text-center text-white dark:bg-brand-softbg dark:text-ink sm:px-14">
          <h2 className="mb-3 text-[28px] font-extrabold text-white dark:text-ink">Let&rsquo;s scope your project.</h2>
          <p className="mb-6 text-[15px] text-slate-300 dark:text-body">
            Tell us what you&rsquo;re building — we&rsquo;ll follow up with next steps within one business day.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation →
            </Link>
            <Link
              href="/case-studies"
              className="rounded-full border border-white/30 px-7 py-3.5 text-[15px] font-semibold text-white hover:border-white dark:border-ink/30 dark:text-ink"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
