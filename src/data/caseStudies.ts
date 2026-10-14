import { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "logistics",
    title: "Real-Time Fleet Visibility Platform",
    industry: "Logistics",
    gradient: ["#10B981", "#34D399"],
    tag: "Logistics &middot; SaaS Platform",
    image: "/images/case-studies/logistics/ex1-main.png",
    heroImage: "/images/case-studies/logistics/ex1-main.png",
    challengeImage: "/images/case-studies/logistics/ex-1.png",
    solutionImage: "/images/case-studies/logistics/ex-2.png",
    outcomeImage: "/images/case-studies/logistics/ex-3.png",
    engagement: "SaaS Platform Build",
    timeline: "14 weeks",
    tech: ["GPS", "JQuery", "PostgreSQL", "Javascript", "Mapbox"],
    lede: `A regional logistics operator was tracking shipments across spreadsheets and phone calls, causing delayed exception handling and inconsistent customer updates.`,
    challenge: `Dispatchers had no single source of truth for shipment status. Carrier updates arrived by phone or email, exceptions were caught late, and customer-facing status updates were manually compiled — often hours behind reality.`,
    approach: `We started with a two-week discovery phase shadowing dispatchers during peak hours, mapping every data source that fed into a shipment status decision, from carrier APIs to warehouse scan events.`,
    solution: `A real-time dashboard consolidating carrier APIs, warehouse scan data, and driver check-ins into one system, with role-based views for dispatch, drivers, and finance, plus automated exception alerts when a shipment fell outside its expected window.`,
    outcome: `Dispatchers could see and act on exceptions as they happened instead of hours later, and finance gained a reliable source for billing reconciliation without manual cross-referencing.`,
    metrics: [
      { value: "38%", label: "Faster exception response" },
      { value: "4×", label: "Dispatcher capacity" },
      { value: "99.9%", label: "Platform uptime" }
    ],
    quote: `We finally have one screen that tells us what's actually happening, instead of five phone calls to find out.`,
    quotePerson: "VP of Operations, Regional Logistics Client",
  },
  {
    slug: "healthcare",
    title: "AI-Assisted Patient Intake System",
    industry: "Healthcare",
    gradient: ["#0F172A", "#334155"],
    tag: "Healthcare &middot; AI Automation",
    image: "/images/case-studies/healthcare/ex2-main.png",
    heroImage: "/images/case-studies/healthcare/ex2-main.png",
    challengeImage: "/images/case-studies/healthcare/ex2-1.png",
    solutionImage: "/images/case-studies/healthcare/ex2-2.png",
    outcomeImage: "/images/case-studies/healthcare/ex2-3.png",
    engagement: "AI Integration",
    timeline: "10 weeks",
    tech: ["CMS", "Javascript", "SQL", "Managed cloud/CDN infrastructure"],
    lede: `A multi-location clinic group needed to cut administrative time spent on repetitive intake and scheduling questions without compromising accuracy or compliance.`,
    challenge: `Front-desk staff across five locations were spending the majority of their day on repetitive intake questions, insurance eligibility checks, and appointment scheduling — leaving little time for in-person patient support.`,
    approach: `We worked with clinic administrators and compliance staff to map exactly which intake steps could be safely automated and which needed to stay with a human, before writing any code.`,
    solution: `An AI intake assistant integrated with the practice management system, handling routine scheduling and eligibility questions while automatically escalating ambiguous or sensitive cases to staff, all within a HIPAA-aligned architecture.`,
    outcome: `Front-desk teams regained significant time for in-person patient interaction, while escalation paths ensured no compliance-sensitive case was handled without human review.`,
    metrics: [
      { value: "52%", label: "Reduction in admin time" },
      { value: "3.1×", label: "Faster patient intake" },
      { value: "0", label: "Compliance incidents" }
    ],
    quote: `Our front desk team can focus on patients in the room instead of the phone queue.`,
    quotePerson: "Practice Director, Multi-Location Clinic Group",
  },
  {
    slug: "fintech",
    title: "Embedded Payments API Layer",
    industry: "Financial Services",
    gradient: ["#34D399", "#10B981"],
    tag: "FinTech &middot; API Platform",
    
    image: "/images/case-studies/fintech/ex3-3.png",
    heroImage: "/images/case-studies/fintech/ex3-3.png",
    challengeImage: "/images/case-studies/fintech/ex3-1.png",
    solutionImage: "/images/case-studies/fintech/ex3-2.png",
    outcomeImage: "/images/case-studies/fintech/ex3-3.png",

    engagement: "API Development",
    timeline: "12 weeks",
    tech: ["Vue.js", "JavaScript", "Node.js", "PostgreSQL", "Docker", "Redis"],
    lede: `A B2B fintech needed a partner-facing API to let clients embed payment flows directly into their own products without months of custom integration work.`,
    challenge: `Every new partner integration required weeks of one-off custom engineering, slowing partner onboarding and creating a growing maintenance burden across inconsistent implementations.`,
    approach: `We audited the existing ad-hoc integrations to identify the common patterns across partners, then designed a single documented API contract that could serve all of them.`,
    solution: `A documented, versioned REST API with a sandbox environment, webhook-based event delivery, and clear error handling — letting partner engineering teams self-serve most of their integration work.`,
    outcome: `New partners moved from a multi-week custom integration process to a self-serve model backed by sandbox testing and clear documentation, reducing engineering support load on both sides.`,
    metrics: [
      { value: "70%", label: "Faster partner onboarding" },
      { value: "12", label: "Integrated partner platforms" },
      { value: "99.95%", label: "API uptime" }
    ],
    quote: `Partners went from a six-week integration timeline to about ten days.`,
    quotePerson: "Head of Partnerships, B2B FinTech Client",
  },
];

export const caseStudiesBySlug = Object.fromEntries(caseStudies.map(c => [c.slug, c]));
