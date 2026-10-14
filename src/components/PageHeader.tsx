import Link from "next/link";

export function PageHeader({
  eyebrow,
  title,
  lede,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="section-tight">
      <div className="wrap">
        <div className="eyebrow">{eyebrow}</div>
        <h1 className="mb-5 max-w-[760px] text-[38px] font-extrabold text-ink sm:text-5xl">{title}</h1>
        <p className="mb-7 max-w-[620px] text-lg text-body">{lede}</p>
        {(primaryCta || secondaryCta) && (
          <div className="flex flex-wrap gap-3.5">
            {primaryCta && (
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.label} →
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn-secondary">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
