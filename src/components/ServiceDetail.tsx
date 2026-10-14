import Link from "next/link";
import { ReactNode } from "react";
import { Service } from "@/types";
import { servicesBySlug } from "@/data/services";
import { caseStudiesBySlug } from "@/data/caseStudies";
import { Breadcrumb } from "./Breadcrumb";
import { CTABand } from "./CTABand";

export function ServiceDetail({ service }: { service: Service }) {
  const relatedServices = service.related.map((slug) => servicesBySlug[slug]).filter(Boolean);
  const relatedCase = caseStudiesBySlug[service.caseStudy];

  return (
    <>
      <Breadcrumb trail={[{ label: "Services", href: "/services" }, { label: service.title }]} />

      <section className="section-tight border-b border-line">
        <div className="wrap">
          <div className="eyebrow">Service — {service.icon}</div>
          <h1 className="mb-4 max-w-[760px] text-[38px] font-extrabold text-ink sm:text-[48px]">
            {service.title}
          </h1>
          <p className="mb-6 max-w-[620px] text-lg text-body">{service.lede}</p>
          <div className="mb-7 flex flex-wrap gap-3.5">
            <Chip>Typical timeline: {service.timeline}</Chip>
            <Chip>Team: {service.team}</Chip>
            <Chip>Best for: {service.bestFor}</Chip>
          </div>
          <Link href="/contact" className="btn-primary">
            Schedule Consultation →
          </Link>
        </div>
      </section>

      <section className="section-major">
        <div className="wrap grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_0.9fr]">
          <div>
            <h2 className="mb-3.5 text-2xl font-bold text-ink">Overview</h2>
            {service.overview.map((p) => (
              <p key={p} className="mb-3.5 text-[15.5px] text-body">
                {p}
              </p>
            ))}

            <h2 className="mb-3.5 mt-9 text-2xl font-bold text-ink">What&rsquo;s included</h2>
            <ul className="mb-4">
              {service.checklist.map((item) => (
                <li key={item} className="flex gap-2.5 py-2 text-[14.5px] font-medium text-ink">
                  <span className="text-brand">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mb-3.5 mt-9 text-2xl font-bold text-ink">Our approach</h2>
            <p className="text-[15.5px] text-body">{service.approach}</p>
          </div>

          <aside>
            <SideCard title="At a glance">
              <SideList>
                <li>Typical timeline: {service.timeline}</li>
                <li>Team: {service.team}</li>
                <li>Engagement: Fixed-price or dedicated team</li>
              </SideList>
            </SideCard>

            {relatedServices.length > 0 && (
              <SideCard title="Related services">
                <div className="mt-1">
                  {relatedServices.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block border-t border-line py-2 text-[13px] text-body first:border-t-0 hover:text-brand"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </SideCard>
            )}

            {relatedCase && (
              <SideCard title="Related case study">
                <Link
                  href={`/case-studies/${relatedCase.slug}`}
                  className="block py-1 text-[13px] text-body hover:text-brand"
                >
                  {relatedCase.title} →
                </Link>
              </SideCard>
            )}

            <div className="rounded-card bg-ink p-7 text-center text-white dark:bg-brand-softbg dark:text-ink">
              <h4 className="mb-2.5 text-base font-bold text-white dark:text-ink">Ready to talk specifics?</h4>
              <p className="mb-4 text-[13px] text-slate-300 dark:text-body">
                Get a scoped estimate within one business day.
              </p>
              <Link href="/contact" className="btn-primary w-full justify-center shadow-none">
                Schedule Consultation
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CTABand />
    </>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-bgsoft px-3.5 py-1.5 text-[12.5px] font-semibold text-body">
      {children}
    </span>
  );
}

function SideCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-5 rounded-card border border-line bg-bgsoft p-6">
      <h4 className="mb-3 text-sm font-bold text-ink">{title}</h4>
      {children}
    </div>
  );
}

function SideList({ children }: { children: ReactNode }) {
  return (
    <ul className="text-[13.5px] text-body [&>li]:border-t [&>li]:border-line [&>li]:py-1.5 [&>li:first-child]:border-t-0">
      {children}
    </ul>
  );
}
