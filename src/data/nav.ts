import { NavLink } from "@/types";

export const primaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks = [
  { label: "Custom Software", href: "/services/custom-software-development" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "Cloud Applications", href: "/services/cloud-applications" },
];

export const siteConfig = {
  name: "OdestaSoft",
  legalName: "OdestaSoft LLC",
  domain: "odestasoft.com",
  url: "https://www.odestasoft.com",
  description:
    "OdestaSoft designs and develops scalable software, AI-powered solutions, cloud applications, automation, and digital platforms that solve real business challenges.",
  email: "info@odestasoft.com",
  location: "Virginia, United States",
  // Used for tel: links, JSON-LD, and the footer/contact page.
  phone: "+15717062446",
  phoneDisplay: "+1 (571) 706-2446",
  // Default keyword set applied site-wide; individual pages layer more
  // specific terms on top of these via buildMetadata({ keywords: [...] }).
  baseKeywords: [
    "custom software development",
    "software development company Virginia",
    "AI solutions company",
    "cloud application development",
    "SaaS development company",
    "US based software agency",
  ],
};
