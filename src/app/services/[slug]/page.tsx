import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, servicesBySlug } from "@/data/services";
import { ServiceDetail } from "@/components/ServiceDetail";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = servicesBySlug[slug];

  if (!service) return {};

  return buildMetadata({
    title: `${service.title} — OdestaSoft`,
    description: service.lede,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = servicesBySlug[slug];

  if (!service) {
    notFound();
  }

  return <ServiceDetail service={service} />;
}