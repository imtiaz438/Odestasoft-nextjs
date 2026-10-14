import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import { CaseStudy } from "@/types";
import { caseStudies } from "@/data/caseStudies";
import { Breadcrumb } from "./Breadcrumb";
import { CTABand } from "./CTABand";

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  const others = caseStudies.filter((c) => c.slug !== study.slug);
  const gradient = `linear-gradient(135deg, ${study.gradient[0]}, ${study.gradient[1]})`;

  return (
    <>
      <Breadcrumb trail={[{ label: "Case Studies", href: "/case-studies" }, { label: study.title }]} />

      <section className="section-tight">
        <div className="wrap">
          <div className="eyebrow">Case Study — {study.industry}</div>
          <h1 className="mb-4 max-w-[760px] text-[38px] font-extrabold text-ink">{study.title}</h1>
          <p className="mb-9 max-w-[620px] text-lg text-body">{study.lede}</p>

          <div className="relative mb-12 h-[340px] overflow-hidden rounded-cardlg">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          <div className="absolute bottom-7 left-7">
            <span className="rounded-full bg-white/90 px-3.5 py-1.5 font-mono text-xs font-semibold text-ink">
              {study.tag}
            </span>
          </div>
        </div>

          <div className="mb-14 grid grid-cols-2 gap-5 border-b border-line pb-12 lg:grid-cols-4">
            <Summary label="Industry" value={study.industry} />
            <Summary label="Engagement" value={study.engagement} />
            <Summary label="Timeline" value={study.timeline} />
            <Summary label="Technology" value={study.tech.join(", ")} />
          </div>

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.3fr_0.9fr]">
            <div>
              <Heading>The Challenge</Heading>
              <Para>{study.challenge}</Para>
              <Heading>Our Approach</Heading>
              <Para>{study.approach}</Para>
              <Heading>The Solution</Heading>
              <Para>{study.solution}</Para>
              <div className="my-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <Image
                    src={study.challengeImage}
                    alt={`${study.title} challenge`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>

                <div className="relative h-48 overflow-hidden rounded-xl">
                  <Image
                    src={study.solutionImage}
                    alt={`${study.title} solution`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
              </div>
              <Heading>The Outcome</Heading>
              <Para>{study.outcome}</Para>

              <div className="my-8 rounded-card border border-line bg-bgsoft p-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {study.metrics.map((m) => (
                    <div key={m.label}>
                      <b className="block text-[28px] font-extrabold text-brand">{m.value}</b>
                      <span className="text-xs text-muted">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="my-8 border-l-[3px] border-brand pl-5 text-lg italic text-ink">
                &ldquo;{study.quote}&rdquo;
              </blockquote>
              <p className="text-[13px] text-muted">{study.quotePerson}</p>
            </div>

            <aside>
              <SideCard title="Project details">
                <ul className="text-[13.5px] text-body [&>li]:border-t [&>li]:border-line [&>li]:py-1.5 [&>li:first-child]:border-t-0">
                  <li>Industry: {study.industry}</li>
                  <li>Engagement: {study.engagement}</li>
                  <li>Timeline: {study.timeline}</li>
                </ul>
              </SideCard>

              <SideCard title="Technology used">
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((t) => (
                    <span key={t} className="rounded-lg border border-line bg-bg px-3 py-1.5 text-[13px] font-semibold text-ink">
                      {t}
                    </span>
                  ))}
                </div>
              </SideCard>

              <SideCard title="More case studies">
                <div>
                  {others.map((o) => (
                    <Link
                      key={o.slug}
                      href={`/case-studies/${o.slug}`}
                      className="block border-t border-line py-2 text-[13px] text-body first:border-t-0 hover:text-brand"
                    >
                      {o.title} →
                    </Link>
                  ))}
                </div>
              </SideCard>

              <div className="rounded-card bg-ink p-7 text-center text-white dark:bg-brand-softbg dark:text-ink">
                <h4 className="mb-2.5 text-base font-bold text-white dark:text-ink">Have a similar project?</h4>
                <p className="mb-4 text-[13px] text-slate-300 dark:text-body">
                  Let&rsquo;s talk about what you&rsquo;re building.
                </p>
                <Link href="/contact" className="btn-primary w-full justify-center shadow-none">
                  Schedule Consultation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <h5 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">{label}</h5>
      <p className="text-[14.5px] font-semibold text-ink">{value}</p>
    </div>
  );
}

function Heading({ children }: { children: ReactNode }) {
  return <h2 className="mb-3.5 mt-9 text-[23px] font-bold text-ink first:mt-0">{children}</h2>;
}

function Para({ children }: { children: ReactNode }) {
  return <p className="mb-3.5 text-[15.5px] text-body">{children}</p>;
}

function SideCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-5 rounded-card border border-line bg-bgsoft p-6">
      <h4 className="mb-3 text-sm font-bold text-ink">{title}</h4>
      {children}
    </div>
  );
}
