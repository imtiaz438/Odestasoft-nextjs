import { notFound } from "next/navigation";
import { insights } from "@/data/insights";
import { Breadcrumb } from "@/components/Breadcrumb";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) return {};

  return buildMetadata({
    title: `${insight.title} — OdestaSoft Insights`,
    description: insight.body,
    path: `/insights/${insight.slug}`,
    keywords: [insight.tag.toLowerCase(), "software engineering insights"],
  });
}

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <>
      <Breadcrumb trail={[{ label: "Insights", href: "/insights" }, { label: insight.title }]} />
      <PageHeader eyebrow={insight.tag} title={insight.title} lede={insight.body} />

      <section className="section-major">
        <div className="wrap max-w-[780px]">
          <p className="mb-10 font-mono text-xs font-semibold text-muted">
            {insight.readTime} read · By the OdestaSoft team
          </p>
          {insight.sections.map((s) => (
            <div key={s.heading} className="mb-10">
              <h2 className="mb-4 text-2xl font-bold text-ink">{s.heading}</h2>
              {s.paragraphs.map((p, idx) => (
                <p key={idx} className="mb-4 text-[15.5px] leading-relaxed text-body">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
