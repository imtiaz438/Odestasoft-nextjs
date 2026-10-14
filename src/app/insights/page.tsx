import { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHeader } from "@/components/PageHeader";
import { InsightCard } from "@/components/InsightCard";
import { CTABand } from "@/components/CTABand";
import { insights } from "@/data/insights";

export const metadata: Metadata = buildMetadata({
  title: "Insights — Engineering Perspective | OdestaSoft",
  description:
    "Engineering perspective on AI, cloud, software delivery, and security from the OdestaSoft team — not marketing filler.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <Breadcrumb trail={[{ label: "Insights" }]} />
      <PageHeader
        eyebrow="Insights"
        title="Engineering perspective, not marketing filler."
        lede="Notes from the team on AI, cloud, software delivery, and security. Full articles are still being written — these are the topics queued up first."
      />

      <section className="section-major">
        <div className="wrap">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {insights.map((i) => (
              <InsightCard key={i.slug} insight={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
