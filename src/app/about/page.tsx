import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { SectionHead } from "@/components/SectionHead";

export const metadata: Metadata = buildMetadata({
  title: "About OdestaSoft — US-Based Software Engineering & AI Solutions",
  description:
    "OdestaSoft is a US-based software engineering company built around senior engineering talent, transparent delivery, and long-term partnership.",
  path: "/about",
});

const VALUES = [
  { title: "Engineering Integrity", body: "We recommend the architecture that's right for your scale, not the one that's easiest for us to bill." },
  { title: "Business-First Thinking", body: "Every technical decision is filtered through a single question: does this move your business forward?" },
  { title: "Security by Default", body: "Security review isn't a final checklist item — it's built into design decisions from day one." },
  { title: "Radical Transparency", body: "Weekly working demos and direct engineer access, so you always know exactly what's shipping next." },
  { title: "Long-Term Accountability", body: "We stay reachable and responsible for what we build well after the invoice is paid." },
  { title: "Applied, Not Trendy, AI", body: "We use AI where it creates measurable leverage — and say so plainly when it doesn't." },
];

const TIMELINE = [
  { year: "Founding", title: "OdestaSoft is founded", body: "Started with a small team of senior engineers focused on custom software for growing businesses." },
  { year: "Early growth", title: "First enterprise engagements", body: "Expanded from web applications into SaaS platforms and internal enterprise systems." },
  { year: "Cloud & data maturity", title: "Cloud and data practice established", body: "Built out dedicated cloud infrastructure and data engineering capability alongside product work." },
  { year: "AI practice launch", title: "AI solutions became core, not experimental", body: "Formalized an AI practice spanning automation, generative AI, and applied machine learning." },
  { year: "Today", title: "A full-stack engineering partner", body: "Six core disciplines under one roof — software, AI, cloud, data, automation, and ongoing support." },
];

const TEAM = [
  { code: "CEO", title: "Founder & CEO", body: "Company vision & client strategy" },
  { code: "VPE", title: "VP of Engineering", body: "Architecture & delivery quality" },
  { code: "AI", title: "Head of AI", body: "Applied AI & automation strategy" },
  { code: "CLD", title: "Lead Cloud Architect", body: "Infrastructure & DevOps" },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumb trail={[{ label: "About" }]} />

      <section className="section-tight">
        <div className="wrap">
          <div className="eyebrow">About OdestaSoft</div>
          <h1 className="mb-5 max-w-[760px] text-[38px] font-extrabold text-ink sm:text-5xl">
            Software engineering built around long-term partnership.
          </h1>
          <p className="mb-7 max-w-[620px] text-lg text-body">
            We started OdestaSoft on a simple premise: the best software gets built by senior engineers who
            stay close to the business problem, not by a rotating cast of subcontractors optimizing for
            billable hours.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation →
            </Link>
            <Link href="/case-studies" className="btn-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <section className="section-minor">
        <div className="wrap">
          <div className="eyebrow">Our mission</div>
          <p className="max-w-[760px] text-lg font-medium leading-relaxed text-ink">
            To give growing businesses direct access to senior software engineering — without the
            account-management layers, subcontractor hand-offs, or scope creep that slow most agency
            engagements down.
          </p>
        </div>
      </section>

      <section className="section-major bg-bgsoft">
        <div className="wrap">
          <SectionHead eyebrow="What we value" title="Principles that shape every engagement." />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v) => (
              <Reveal key={v.title}>
                <div className="rounded-card border border-line bg-bg p-6">
                  <h4 className="mb-2 text-base font-bold text-ink">{v.title}</h4>
                  <p className="text-[13.5px] text-body">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-minor">
        <div className="wrap">
          <SectionHead eyebrow="Our story" title="How OdestaSoft got here." />
          <div className="ml-1.5 flex flex-col gap-9 border-l-2 border-line pl-8">
            {TIMELINE.map((t) => (
              <div key={t.title} className="relative">
                <span className="absolute -left-[41px] top-1 h-3 w-3 rounded-full bg-brand ring-2 ring-brand" />
                <div className="mb-1.5 font-mono text-[13px] font-semibold text-brand">{t.year}</div>
                <h4 className="mb-1.5 text-base font-bold text-ink">{t.title}</h4>
                <p className="text-sm text-body">{t.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[13px] text-muted">
            Note: replace these milestones with your company&rsquo;s actual founding date and history before
            publishing.
          </p>
        </div>
      </section>

      <section className="section-major bg-bgsoft">
        <div className="wrap">
          <SectionHead
            eyebrow="Our team"
            title="Senior roles, direct access."
            body="Every engagement is staffed by senior practitioners in these disciplines — add real names, photos, and bios once your team page is ready to publish."
          />
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
            {TEAM.map((m) => (
              <div key={m.code} className="text-center">
                <div className="mx-auto mb-3.5 flex h-[88px] w-[88px] items-center justify-center rounded-full bg-brand-softbg text-2xl font-extrabold text-brand">
                  {m.code}
                </div>
                <h4 className="mb-1 text-[15px] font-bold text-ink">{m.title}</h4>
                <p className="text-xs text-muted">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
