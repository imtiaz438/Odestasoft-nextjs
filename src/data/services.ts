import { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "custom-software-development",
    icon: "CS",
    title: "Custom Software Development",
    lede: `Purpose-built systems designed around how your business actually operates, not how an off-the-shelf tool assumes it should.`,
    timeline: `8–16 weeks`,
    team: `3–5 engineers`,
    bestFor: `Operations-heavy businesses outgrowing spreadsheets and off-the-shelf tools`,
    overview: [
      `Off-the-shelf software forces your team to adapt to someone else's workflow. Custom software does the opposite — it's built around how your business already runs, so adoption doesn't require retraining everyone from scratch.`,
      `We start with the operational reality on the ground: who touches the system, what decisions it needs to support, and where the current process breaks down under real volume.`
    ],
    checklist: [
      `Discovery workshops with your operational teams`,
      `Custom data model & system architecture`,
      `Role-based access and permissions`,
      `Integration with existing tools and databases`,
      `Automated testing and QA before launch`,
      `30-day post-launch support window`
    ],
    approach: `We favor boring, well-understood technology choices over trendy ones — the goal is a system your team can maintain for years, not a demo that impresses in the first month.`,
    related: ["saas-development", "enterprise-systems", "api-development"],
    caseStudy: "logistics",
  },
  {
    slug: "ai-solutions",
    icon: "AI",
    title: "AI Solutions",
    lede: `Applied AI that reduces manual work and surfaces decisions faster — built on your own data, not a generic wrapper around a public model.`,
    timeline: `6–12 weeks`,
    team: `2–4 engineers`,
    bestFor: `Teams with high-volume repetitive decisions or manual review work`,
    overview: [
      `Most 'AI features' are a chatbot bolted onto an existing product for the press release. We take a different approach: identify the specific workflow where automation or reasoning creates measurable time or cost savings, then build for that.`,
      `That might mean an internal copilot for your support team, an automated document review pipeline, or a recommendation engine trained on your own historical data.`
    ],
    checklist: [
      `AI opportunity assessment across your workflows`,
      `Model selection matched to the task (not one-size-fits-all)`,
      `Data pipeline & retrieval architecture`,
      `Human-in-the-loop review for high-stakes decisions`,
      `Monitoring for drift and output quality`,
      `Clear documentation of what the system can and can't do`
    ],
    approach: `We're explicit about where AI helps and where it doesn't — overselling AI on a workflow that doesn't need it wastes your budget and erodes trust in the parts that do work.`,
    related: ["generative-ai", "business-automation", "data-dashboards"],
    caseStudy: "healthcare",
  },
  {
    slug: "generative-ai",
    icon: "GA",
    title: "Generative AI",
    lede: `Content, search, and reasoning features built on your own data, designed to stay accurate as that data changes.`,
    timeline: `6–10 weeks`,
    team: `2–3 engineers`,
    bestFor: `Products needing search, summarization, or content generation grounded in proprietary data`,
    overview: [
      `Generative AI features are only as good as the data grounding them. We build retrieval-augmented systems that keep model outputs tied to your actual documents, policies, and product data — not just what a public model was trained on.`,
      `This covers internal knowledge assistants, customer-facing search and summarization, and structured content generation for teams that produce a high volume of similar documents.`
    ],
    checklist: [
      `Retrieval-augmented generation (RAG) architecture`,
      `Source citation and traceability in outputs`,
      `Prompt design and evaluation framework`,
      `Guardrails against hallucination on high-stakes answers`,
      `Ongoing evaluation as your source data changes`,
      `Cost monitoring on model usage`
    ],
    approach: `We treat evaluation as a first-class part of the build, not an afterthought — a generative feature that can't be measured can't be trusted in production.`,
    related: ["ai-solutions", "business-automation", "data-dashboards"],
    caseStudy: "healthcare",
  },
  {
    slug: "business-automation",
    icon: "BA",
    title: "Business Automation",
    lede: `Remove repetitive manual steps from operations, finance, and support — without a fragile pile of one-off scripts.`,
    timeline: `4–10 weeks`,
    team: `2–3 engineers`,
    bestFor: `Teams losing hours weekly to manual data entry, approvals, or handoffs`,
    overview: [
      `Manual handoffs between tools are usually where errors and delays creep into a process. We map the full workflow first, then automate the steps that don't need a human judgment call.`,
      `This often touches invoicing, approval routing, reporting, and data synchronization between systems that weren't built to talk to each other.`
    ],
    checklist: [
      `End-to-end workflow mapping`,
      `Integration between existing tools & platforms`,
      `Exception handling for edge cases`,
      `Audit trail and logging for compliance`,
      `Alerting when a process needs human review`,
      `Documentation for your internal team`
    ],
    approach: `We automate the middle of a process, not the judgment calls at the edges — the goal is fewer manual steps, not less human oversight where it matters.`,
    related: ["ai-solutions", "custom-software-development", "api-development"],
    caseStudy: "healthcare",
  },
  {
    slug: "saas-development",
    icon: "SD",
    title: "SaaS Development",
    lede: `Multi-tenant platforms built to onboard your first customer and your ten-thousandth on the same architecture.`,
    timeline: `10–20 weeks`,
    team: `3–6 engineers`,
    bestFor: `Founders and product teams building a subscription software product`,
    overview: [
      `The architecture decisions that don't matter at 10 customers become expensive to unwind at 1,000. We design multi-tenancy, billing, and permissions correctly from the first sprint, so scaling later doesn't mean a rebuild.`,
      `We've built SaaS platforms across billing models, from simple flat subscriptions to usage-based and tiered enterprise plans.`
    ],
    checklist: [
      `Multi-tenant data architecture`,
      `Subscription billing & usage metering`,
      `Role-based access control`,
      `Onboarding flow & self-serve signup`,
      `Admin tooling for your internal team`,
      `Infrastructure sized for early-stage cost efficiency`
    ],
    approach: `We design for your next two stages of growth, not just the current one — without over-engineering for scale you may never reach.`,
    related: ["cloud-applications", "api-development", "custom-software-development"],
    caseStudy: "fintech",
  },
  {
    slug: "web-applications",
    icon: "WA",
    title: "Web Applications",
    lede: `Fast, accessible applications that hold up under real production traffic, not just a polished demo.`,
    timeline: `6–14 weeks`,
    team: `2–5 engineers`,
    bestFor: `Businesses needing a customer-facing or internal web application`,
    overview: [
      `A web application needs to perform under real usage patterns — concurrent users, slow connections, edge-case inputs — not just look good in a walkthrough.`,
      `We build with accessibility and performance budgets from the start, so neither becomes a late-stage scramble before launch.`
    ],
    checklist: [
      `Responsive, accessible front-end build`,
      `Performance budget & Core Web Vitals targets`,
      `Authentication & session management`,
      `Automated testing coverage`,
      `CI/CD deployment pipeline`,
      `Post-launch monitoring setup`
    ],
    approach: `We treat performance and accessibility as requirements, not nice-to-haves added if time allows.`,
    related: ["custom-software-development", "enterprise-systems", "cloud-applications"],
    caseStudy: "logistics",
  },
  {
    slug: "enterprise-systems",
    icon: "ES",
    title: "Enterprise Systems",
    lede: `Internal platforms that integrate cleanly with what you already run — replacing spreadsheets, not your whole tech stack.`,
    timeline: `10–18 weeks`,
    team: `3–5 engineers`,
    bestFor: `Mid-market and enterprise teams managing complex internal operations`,
    overview: [
      `Enterprise systems fail most often at the integration layer — connecting to legacy databases, existing ERPs, or departmental tools that were never designed to share data.`,
      `We start with an integration audit of your current systems before proposing architecture, so the new platform fits into what already exists rather than fighting it.`
    ],
    checklist: [
      `Legacy system & data integration audit`,
      `Role-based access across departments`,
      `Custom reporting and audit trails`,
      `Single sign-on (SSO) integration`,
      `Change management support for rollout`,
      `Long-term maintenance plan`
    ],
    approach: `We design for the org chart you actually have, with its exceptions and approval chains, not an idealized version of it.`,
    related: ["custom-software-development", "data-dashboards", "api-development"],
    caseStudy: "logistics",
  },
  {
    slug: "cloud-applications",
    icon: "CA",
    title: "Cloud Applications",
    lede: `Cloud-native architecture that scales predictably as demand grows — and doesn't surprise you at renewal.`,
    timeline: `6–12 weeks`,
    team: `2–4 engineers`,
    bestFor: `Teams migrating to the cloud or scaling an existing cloud platform`,
    overview: [
      `Cloud cost overruns usually trace back to a handful of early architecture decisions — not runtime usage. We size infrastructure to your actual traffic patterns and build in cost monitoring from day one.`,
      `Whether you're migrating an existing system or building cloud-native from scratch, we design for the reliability your users expect without over-provisioning for traffic you don't have yet.`
    ],
    checklist: [
      `Cloud architecture design (AWS, Azure, or GCP)`,
      `CI/CD pipeline setup`,
      `Auto-scaling & load balancing`,
      `Cost monitoring and optimization`,
      `Disaster recovery & backup strategy`,
      `Security hardening & access controls`
    ],
    approach: `We right-size infrastructure to real usage data, then revisit it at defined growth checkpoints — not a one-time guess that goes stale in six months.`,
    related: ["saas-development", "api-development", "maintenance-support"],
    caseStudy: "fintech",
  },
  {
    slug: "api-development",
    icon: "API",
    title: "API Development",
    lede: `Documented, versioned APIs that make integration painless for partners and internal teams alike.`,
    timeline: `6–10 weeks`,
    team: `2–3 engineers`,
    bestFor: `Platforms opening data or functionality to partners, or connecting internal systems`,
    overview: [
      `A good API is a product in its own right — it needs documentation, versioning, and predictable behavior that partner engineering teams can build against with confidence.`,
      `We design REST and GraphQL APIs with the integrating developer's experience in mind, including sandbox environments and clear error handling.`
    ],
    checklist: [
      `REST or GraphQL API design`,
      `Authentication & rate limiting`,
      `Versioning strategy for backward compatibility`,
      `Interactive API documentation`,
      `Webhook & event delivery system`,
      `Sandbox environment for partner testing`
    ],
    approach: `We design the API contract before writing implementation code — getting the shape right early avoids breaking changes for partners later.`,
    related: ["cloud-applications", "saas-development", "business-automation"],
    caseStudy: "fintech",
  },
  {
    slug: "wordpress-enterprise",
    icon: "WP",
    title: "WordPress Enterprise",
    lede: `High-performance WordPress builds engineered for editorial and marketing teams operating at scale.`,
    timeline: `4–8 weeks`,
    team: `2–3 engineers`,
    bestFor: `Marketing and content teams needing a fast, flexible CMS at enterprise scale`,
    overview: [
      `WordPress at enterprise scale needs different engineering than a small business site — custom caching, security hardening, and editorial workflows that support multiple content teams working simultaneously.`,
      `We build custom themes and plugins rather than stacking generic ones, keeping the codebase lean and load times fast even with a large content library.`
    ],
    checklist: [
      `Custom theme & plugin development`,
      `Performance optimization & caching strategy`,
      `Security hardening & update management`,
      `Editorial workflow & multi-author permissions`,
      `SEO-friendly architecture`,
      `Headless WordPress option where appropriate`
    ],
    approach: `We build only the plugins you actually need, avoiding the compounding performance cost of a heavily plugin-stacked site.`,
    related: ["ecommerce", "web-applications", "maintenance-support"],
    caseStudy: "logistics",
  },
  {
    slug: "ecommerce",
    icon: "EC",
    title: "E-commerce",
    lede: `Storefronts engineered for conversion, speed, and checkout reliability — where downtime has a direct revenue cost.`,
    timeline: `8–14 weeks`,
    team: `2–4 engineers`,
    bestFor: `Retailers and DTC brands needing a custom or headless commerce platform`,
    overview: [
      `Checkout is the highest-stakes part of any e-commerce build — every added second of load time or friction point has a measurable conversion cost. We treat it accordingly.`,
      `We build on headless or platform-based architecture depending on your catalog complexity and growth plans, integrating payments, inventory, and fulfillment systems cleanly.`
    ],
    checklist: [
      `Storefront design & build (headless or platform-based)`,
      `Payment gateway integration (Stripe and others)`,
      `Inventory & fulfillment system integration`,
      `Performance optimization for checkout flow`,
      `Abandoned cart & conversion tooling`,
      `PCI-aware security practices`
    ],
    approach: `We optimize the checkout path first, then work outward — it's the one part of the site where performance translates directly to revenue.`,
    related: ["wordpress-enterprise", "api-development", "data-dashboards"],
    caseStudy: "fintech",
  },
  {
    slug: "gis-maps",
    icon: "GIS",
    title: "GIS & Maps",
    lede: `Location-intelligent applications for logistics, real estate, and field operations.`,
    timeline: `6–12 weeks`,
    team: `2–4 engineers`,
    bestFor: `Logistics, real estate, and field-service businesses needing location intelligence`,
    overview: [
      `When location data drives real operational decisions — routing, territory planning, asset tracking — a generic map embed isn't enough. We build mapping features tied directly into your operational data.`,
      `This spans route optimization, geofencing and alerts, territory visualization, and real-time asset tracking depending on what your operation needs.`
    ],
    checklist: [
      `Custom map interfaces (Mapbox, Google Maps)`,
      `Geofencing & location-based alerts`,
      `Route optimization logic`,
      `Real-time asset or vehicle tracking`,
      `Territory & coverage visualization`,
      `Integration with existing operational data`
    ],
    approach: `We build mapping as a feature of your operational system, not a standalone tool disconnected from the data that makes it useful.`,
    related: ["custom-software-development", "data-dashboards", "enterprise-systems"],
    caseStudy: "logistics",
  },
  {
    slug: "data-dashboards",
    icon: "DD",
    title: "Data Dashboards",
    lede: `Real-time visibility into the metrics that actually drive decisions — not a chart library dropped onto raw data.`,
    timeline: `4–10 weeks`,
    team: `2–3 engineers`,
    bestFor: `Teams needing internal or client-facing reporting and analytics`,
    overview: [
      `A dashboard is only useful if it answers the specific question someone is trying to make a decision about. We start with the decisions your team needs to make, then design the visualizations backward from there.`,
      `This covers internal operational dashboards, client-facing reporting portals, and executive-level KPI views, built on top of your existing data sources.`
    ],
    checklist: [
      `Data pipeline & warehouse integration`,
      `Real-time or scheduled refresh, as needed`,
      `Role-based dashboard access`,
      `Custom visualizations tied to your metrics`,
      `Exportable reports (CSV, PDF)`,
      `Mobile-responsive dashboard views`
    ],
    approach: `We design each dashboard around one primary decision it needs to support, resisting the urge to cram in every available metric.`,
    related: ["ai-solutions", "enterprise-systems", "cloud-applications"],
    caseStudy: "logistics",
  },
  {
    slug: "maintenance-support",
    icon: "MT",
    title: "Maintenance & Support",
    lede: `Ongoing reliability, security patching, and performance monitoring after launch.`,
    timeline: `Ongoing retainer`,
    team: `Shared engineering pool`,
    bestFor: `Any live product needing dependable long-term upkeep`,
    overview: [
      `Launch is the beginning of a system's life, not the end of the engagement. We offer ongoing support retainers that cover security patching, dependency updates, bug fixes, and performance monitoring.`,
      `Retainers scale from lightweight monitoring for stable systems to more active ongoing feature development for products still evolving quickly.`
    ],
    checklist: [
      `Security patching & dependency updates`,
      `Uptime & performance monitoring`,
      `Bug triage and resolution`,
      `Monthly health & performance reporting`,
      `Priority response for critical issues`,
      `Optional ongoing feature development`
    ],
    approach: `We treat maintenance as a continuation of engineering ownership, not a lower-priority queue separate from the team that built the system.`,
    related: ["cloud-applications", "custom-software-development", "data-dashboards"],
    caseStudy: "healthcare",
  },
];

export const servicesBySlug = Object.fromEntries(services.map(s => [s.slug, s]));
