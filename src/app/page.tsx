import Link from "next/link";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ContactForm } from "@/components/ContactForm";
import { SectionHead } from "@/components/SectionHead";
import { InsightCard } from "@/components/InsightCard";
import { RescueAudit } from "@/components/RescueAudit";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import { testimonials } from "@/data/testimonials";
import { faqItems } from "@/data/faq";
import { solutions } from "@/data/solutions";
import { insights } from "@/data/insights";

const TRUST_ITEMS = [
  "US-Based Company",
  "Headquartered in Virginia, USA",
  "100+ Successful Projects",
  "10+ Years Engineering Experience",
  "Enterprise-Ready Solutions",
  "Security-Focused Development",
];

const INDUSTRIES = ["Healthcare", "Real Estate", "Financial Services", "Manufacturing", "Logistics", "Professional Services", "Government Contractors", "Startups & SMBs"];

const PROCESS = [
  { n: "01", title: "Discover", body: "Understand goals, users, and constraints." },
  { n: "02", title: "Plan", body: "Define scope, architecture, and roadmap." },
  { n: "03", title: "Design", body: "UX and system design before code." },
  { n: "04", title: "Engineer", body: "Sprint-based build with weekly demos." },
  { n: "05", title: "Test", body: "Functional, security, and load testing." },
  { n: "06", title: "Launch", body: "Production deployment with monitoring." },
  { n: "07", title: "Support", body: "Ongoing maintenance and iteration." },
];

const CLIENT_VIEW = [
  {
    when: "Week one",
    title: "You talk to the engineers",
    body: "Discovery and architecture happen directly with the people who will build it — no account-manager telephone game.",
  },
  {
    when: "Every week",
    title: "You see working software",
    body: "A live demo of what's actually running, not slideware. You set the priorities for the following week.",
  },
  {
    when: "Throughout",
    title: "You always know the status",
    body: "Direct access to the team and a clear view of what's shipping next. No quarterly surprises.",
  },
  {
    when: "After launch",
    title: "We stay reachable",
    body: "Production monitoring from day one, and a team that answers when something needs attention — well after the invoice.",
  },
];

const WHY_US = [
  { title: "Business-First Approach", body: "Every technical decision ties back to a business outcome." },
  { title: "Engineering Excellence", body: "Clean, tested, maintainable code — not just working code." },
  { title: "Transparent Communication", body: "Weekly demos and clear status, not quarterly surprises." },
  { title: "Scalable Architecture", body: "Built to handle your next stage of growth, not just this one." },
  { title: "Security-First Mindset", body: "Security reviewed at every stage, not bolted on at the end." },
  { title: "AI-Enabled Innovation", body: "Applied where it creates real leverage — never for its own sake." },
  { title: "Long-Term Support", body: "We stay accountable for what we build well after launch." },
  { title: "Clean, Maintainable Code", body: "Documented systems the next engineer can actually work with." },
];

const TECH_STACK: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript"],
  Backend: ["Node.js", "Python", "Laravel", "PHP", "WordPress"],
  Data: ["PostgreSQL", "MySQL"],
  "Cloud & DevOps": ["AWS", "Azure", "Google Cloud", "Docker"],
  AI: ["OpenAI", "Claude", "Gemini"],
  Integrations: ["Stripe", "Twilio", "Mapbox", "Google Maps"],
};

const ENGAGEMENT_MODELS = [
  { tag: "FIXED-PRICE", title: "Best for Defined Projects", body: "Clear scope, defined deliverables, and a deadline that can't move.", points: ["Defined scope & fixed budget", "Zero surprise invoices", "Milestone-based delivery"], popular: false },
  { tag: "STAFF AUGMENTATION", title: "Extend Your Team Instantly", body: "We embed engineers directly into your existing team and workflow.", points: ["Fast access to senior talent", "Scales up or down on demand", "Fits your existing tools"], popular: true },
  { tag: "DEDICATED TEAM", title: "Product-Focused Delivery Unit", body: "A team that strategizes, designs, and builds toward your product roadmap.", points: ["Fully dedicated team", "End-to-end ownership", "Built for long-term growth"], popular: false },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Trust strip */}
      <div className="border-y border-line bg-bgsoft py-6">
        <div className="wrap flex flex-wrap justify-center gap-9 text-[13.5px] font-semibold text-body">
          {TRUST_ITEMS.map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <section className="section-minor">
        <div className="wrap grid grid-cols-2 gap-5 lg:grid-cols-4">
          <Metric target={100} suffix="+" label="Projects Delivered" />
          <Metric target={10} suffix="+" label="Years of Engineering Experience" />
          <Metric target={95} suffix="%" label="Client Retention Rate" />
          <Metric target={99} suffix=".9%" label="Average Platform Uptime" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-major bg-bgsoft">
        <div className="wrap">
          <SectionHead
            eyebrow="What we build"
            title="Software engineering that moves your business forward."
            body="Every service is scoped around a business outcome — not a technology for its own sake."
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Reveal key={s.slug}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Hub */}
      <section className="section-minor">
        <div className="wrap">
          <Reveal>
            <div className="relative overflow-hidden rounded-cardlg bg-[#17235B] px-7 py-12 text-white sm:px-14">
              <div className="relative z-10 max-w-[640px]">
                <div className="eyebrow text-[#8FA6FF]">Deploying Intelligence</div>
                <h2 className="mb-4 text-[28px] font-extrabold text-white sm:text-4xl">
                  We build AI into the product, not bolted on after.
                </h2>
                <p className="mb-7 text-base text-slate-300">
                  From your first architecture call, we design where AI actually creates leverage — support,
                  search, automation, or decisioning — instead of adding a chatbot for the sake of a press
                  release.
                </p>
                <div className="mb-10 flex flex-wrap gap-3.5">
                  <Link href="/services" className="rounded-full bg-white px-6 py-3.5 text-[14.5px] font-bold text-[#17235B] hover:bg-brand-softbg">
                    Explore AI services
                  </Link>
                  <Link href="/contact" className="rounded-full border border-white/35 px-6 py-3.5 text-[14.5px] font-semibold text-white hover:border-white">
                    Talk to an engineer
                  </Link>
                </div>
              </div>
              <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <AiCard title="AI Strategy" body="Map where automation actually moves your metrics before we write code." />
                <AiCard title="Custom LLM Features" body="Built on your data and workflows, not a generic wrapper." />
                <AiCard title="AI Agents & Automation" body="Handle repetitive workflows so your team can focus on judgment calls." />
                <AiCard title="AI Integration" body="Layer intelligence into the systems you already run — no rip-and-replace." />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="section-major">
        <div className="wrap">
          <SectionHead eyebrow="Solutions" title="Platforms engineered for how you actually grow." body="Four solution categories cover the majority of engagements we take on." />
          <div className="flex flex-col divide-y divide-line rounded-card border border-line">
            {solutions.map((s) => (
              <div key={s.title} className="grid grid-cols-1 gap-3 p-8 md:grid-cols-[280px_1fr] md:items-center md:gap-8">
                <div>
                  <span className="mb-2 block font-mono text-xs text-brand">{s.tag}</span>
                  <h3 className="text-xl font-bold text-ink">{s.title}</h3>
                </div>
                <p className="text-[14.5px] text-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-minor bg-bgsoft">
        <div className="wrap">
          <SectionHead eyebrow="Industries" title="Domain-aware engineering, not one-size-fits-all builds." />
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-4">
            {INDUSTRIES.map((i) => (
              <div key={i} className="bg-bg px-5 py-6 text-[14.5px] font-semibold text-ink">
                {i}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="section-major">
        <div className="wrap">
          <SectionHead eyebrow="Case studies" title="Selected engineering work." />
          {caseStudies.map((c) => (
            <Reveal key={c.slug}>
              <CaseStudyCard study={c} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section className="section-minor bg-bgsoft">
        <div className="wrap">
          <SectionHead eyebrow="Technology" title="The right stack for the job, not the trend." />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(TECH_STACK).map(([cat, items]) => (
              <div key={cat} className="rounded-[14px] border border-line bg-bg p-6">
                <h4 className="mb-3.5 text-[13px] font-bold uppercase tracking-wide text-muted">{cat}</h4>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-lg border border-line bg-bgsoft px-3 py-1.5 text-[13px] font-semibold text-ink">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-major">
        <div className="wrap">
          <SectionHead eyebrow="Our process" title="One methodology, every engagement." />
          <div className="grid grid-cols-2 gap-3.5 sm:grid-cols-4 lg:grid-cols-7">
            {PROCESS.map((p) => (
              <div key={p.n} className="rounded-[14px] border border-line bg-bg p-5">
                <div className="mb-3 font-mono text-xs font-semibold text-brand">{p.n}</div>
                <h4 className="mb-1.5 text-[14.5px] font-bold text-ink">{p.title}</h4>
                <p className="text-xs text-body">{p.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-card border border-line bg-bgsoft p-8 sm:p-10">
            <h3 className="mb-2 text-xl font-bold text-ink">What it feels like from your side.</h3>
            <p className="mb-8 max-w-[640px] text-[14.5px] text-body">
              The steps above are how we organize the work. This is what you experience while it&rsquo;s
              happening.
            </p>
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {CLIENT_VIEW.map((c) => (
                <div key={c.title}>
                  <div className="mb-2 font-mono text-xs font-semibold text-brand">{c.when}</div>
                  <h4 className="mb-1.5 text-[15px] font-bold text-ink">{c.title}</h4>
                  <p className="text-[13.5px] text-body">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="section-minor bg-bgsoft">
        <div className="wrap">
          <SectionHead eyebrow="Why OdestaSoft" title="An engineering partner built for the long term." center />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_US.map((w) => (
              <div key={w.title} className="rounded-card border border-line bg-bg p-6">
                <h4 className="mb-2 text-[15.5px] font-bold text-ink">{w.title}</h4>
                <p className="text-[13.5px] text-body">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-major">
        <div className="wrap">
          <SectionHead eyebrow="Testimonials" title="What clients say about working with us." center />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section id="insights" className="section-minor bg-bgsoft">
        <div className="wrap">
          <SectionHead eyebrow="Insights" title="Engineering perspective, not marketing filler." />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {insights.map((i) => (
              <InsightCard key={i.slug} insight={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section className="section-major">
        <div className="wrap">
          <SectionHead eyebrow="Engagement models" title="Every project has a model. Find yours." body="Whether you have a fixed scope, need extra engineering firepower, or want a dedicated product team — pick the structure that fits." />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {ENGAGEMENT_MODELS.map((m) => (
              <div
                key={m.title}
                className={`relative rounded-card border p-8 ${m.popular ? "border-brand shadow-[0_20px_50px_rgba(16,185,129,0.12)]" : "border-line"}`}
              >
                {m.popular && (
                  <span className="absolute right-[-1px] top-5 rounded-l-md bg-brand px-3.5 py-1.5 font-mono text-[10px] tracking-wide text-white">
                    MOST POPULAR
                  </span>
                )}
                <div className="mb-2.5 font-mono text-xs text-brand">{m.tag}</div>
                <h3 className="mb-2 text-[19px] font-bold text-ink">{m.title}</h3>
                <p className="mb-5 text-sm text-body">{m.body}</p>
                <ul className="mb-5">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-2 py-1.5 text-[13.5px] text-body">
                      <span className="text-brand">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={m.popular ? "btn-primary block text-center" : "btn-secondary block text-center"}>
                  Let&rsquo;s discuss
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rescue audit */}
      <RescueAudit />

      {/* FAQ */}
      <section id="faq" className="section-minor bg-bgsoft">
        <div className="wrap max-w-[820px]">
          <SectionHead eyebrow="FAQ" title="Questions you may have." center />
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-major">
        <div className="wrap">
          <ContactForm />
        </div>
      </section>
    </>
  );
}

function Metric({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-extrabold text-ink">
        <AnimatedCounter target={target} />
        <span className="text-brand">{suffix}</span>
      </div>
      <div className="mt-2 text-sm font-semibold text-body">{label}</div>
    </div>
  );
}

function AiCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[14px] border border-white/15 bg-white/5 p-5">
      <h4 className="mb-2 text-[15px] font-bold text-white">{title}</h4>
      <p className="text-[13.5px] text-slate-400">{body}</p>
    </div>
  );
}
