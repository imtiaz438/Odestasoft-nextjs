import { Metadata } from "next";
import { siteConfig } from "@/data/nav";

interface BuildMetadataArgs {
  title: string;
  description: string;
  path?: string; // e.g. "/about" — defaults to "/"
  keywords?: string[]; // page-specific keywords, merged with siteConfig.baseKeywords
  noIndex?: boolean;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  noIndex = false,
}: BuildMetadataArgs): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;
  const mergedKeywords = Array.from(new Set([...keywords, ...siteConfig.baseKeywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteConfig.url}/og-image.jpg`],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo-primary.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressRegion: "VA",
      addressCountry: "US",
    },
    sameAs: [],
  };
}

// LocalBusiness / ProfessionalService schema — this is what actually helps
// with local search (Google Maps pack, "near me" queries, local rankings).
// Organization schema alone doesn't give Google enough to place you on a
// map or associate a phone number with local search results the way this
// does. Update the address fields with your real street address once you
// have one to publish.
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.legalName,
    image: `${siteConfig.url}/og-image.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressRegion: "VA",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    description: siteConfig.description,
  };
}

export function serviceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software & AI Engineering",
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      telephone: siteConfig.phone,
    },
    areaServed: "US",
    description:
      "Custom software development, AI solutions, SaaS development, cloud applications, API development, and enterprise systems.",
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}
