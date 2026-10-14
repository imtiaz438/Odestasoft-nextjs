import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, caseStudiesBySlug } from "@/data/caseStudies";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudiesBySlug[slug];

  if (!study) return {};

  return buildMetadata({
    title: `${study.title} — OdestaSoft Case Study`,
    description: study.lede,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudiesBySlug[slug];

  if (!study) notFound();

  return <CaseStudyDetail study={study} />;
}