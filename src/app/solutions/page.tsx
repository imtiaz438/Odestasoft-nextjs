import { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHeader } from "@/components/PageHeader";
import { SectionHead } from "@/components/SectionHead";
import { CTABand } from "@/components/CTABand";
import { solutions } from "@/data/solutions";

export const metadata: Metadata = buildMetadata({
  title: "Solutions — AI Platforms, SaaS, Enterprise Systems | OdestaSoft",
  description:
    "Four solution categories cover the majority of OdestaSoft engagements: AI-powered products, multi-tenant SaaS, enterprise systems, and workflow automation.",
  path: "/solutions",
});

const SOLUTION_SERVICE_LINKS: Record<string, { label: string; href: string }[]> = {
  "AI PLATFORMS": [
    { label: "AI Solutions", href: "/services/ai-solutions" },
    { label: "Generative AI", href: "/services/generative-ai" },
  ],
  "SAAS PLATFORMS": [
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "API Development", href: "/services/api-development" },
  ],
  "ENTERPRISE SYSTEMS": [
    { label: "Enterprise Systems", href: "/services/enterprise-systems" },
    { label: "Data Dashboards", href: "/services/data-dashboards" },
  ],
  "AUTOMATION SYSTEMS": [
    { label: "Business Automation", href: "/services/business-automation" },
    { label: "API Development", href: "/services/api-development" },
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <Breadcrumb trail={[{ label: "Solutions" }]} />
      <PageHeader
        eyebrow="Solutions"
        title="Platforms engineered for how you actually grow."
        lede="Four solution categories cover the majority of engagements we take on — each one built from the same core services, assembled around your specific goal."
        primaryCta={{ label: "Schedule Consultation", href: "/contact" }}
        secondaryCta={{ label: "See all services", href: "/services" }}
      />

      <section className="section-major">
        <div className="wrap">
          <SectionHead eyebrow="Solution categories" title="Built from the same core services, assembled around your goal." />
          <div className="flex flex-col gap-6">
            {solutions.map((s) => (
              <div key={s.title} className="rounded-cardlg border border-line bg-bgsoft p-9">
                <span className="mb-3 block font-mono text-xs text-brand">{s.tag}</span>
                <h3 className="mb-3 text-2xl font-bold text-ink">{s.title}</h3>
                <p className="mb-5 max-w-[680px] text-[15px] text-body">{s.body}</p>
                <div className="flex flex-wrap gap-3">
                  {(SOLUTION_SERVICE_LINKS[s.tag] ?? []).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-full border border-line bg-bg px-4 py-2 text-[13px] font-semibold text-ink hover:border-brand hover:text-brand"
                    >
                      {link.label} →
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
