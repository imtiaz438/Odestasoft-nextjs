import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHeader } from "@/components/PageHeader";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CTABand } from "@/components/CTABand";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = buildMetadata({
  title: "Case Studies — Selected Engineering Work | OdestaSoft",
  description:
    "A look at recent OdestaSoft engineering work across logistics, healthcare, and financial services — challenge, approach, solution, and measured outcomes.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumb trail={[{ label: "Case Studies" }]} />
      <PageHeader
        eyebrow="Case studies"
        title="Selected engineering work."
        lede="The case studies below are illustrative examples prepared for review — replace with real, client-approved project details, screenshots, and metrics before publishing."
        primaryCta={{ label: "Schedule Consultation", href: "/contact" }}
        secondaryCta={{ label: "See all services", href: "/services" }}
      />

      <section className="section-major">
        <div className="wrap">
          {caseStudies.map((c) => (
            <CaseStudyCard key={c.slug} study={c} />
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
