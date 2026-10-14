import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHeader } from "@/components/PageHeader";
import { SectionHead } from "@/components/SectionHead";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABand } from "@/components/CTABand";
import { services } from "@/data/services";

export const metadata: Metadata = buildMetadata({
  title: "Services — Custom Software, AI, Cloud & More | OdestaSoft",
  description:
    "Custom software development, AI solutions, SaaS development, cloud applications, API development, and enterprise systems — engineered around business outcomes.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumb trail={[{ label: "Services" }]} />
      <PageHeader
        eyebrow="What we build"
        title="Software engineering that moves your business forward."
        lede="Every service is scoped around a business outcome — not a technology for its own sake. Six disciplines, one accountable team."
        primaryCta={{ label: "Schedule Consultation", href: "/contact" }}
        secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
      />

      <section className="section-major">
        <div className="wrap">
          <SectionHead eyebrow="All services" title="Fourteen services across six disciplines." />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
