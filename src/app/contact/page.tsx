import { Metadata } from "next";
import { buildMetadata, faqJsonLd } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/data/nav";

export const metadata: Metadata = buildMetadata({
  title: "Contact OdestaSoft — Get a Software Development Quote | Virginia, USA",
  description:
    "Call, email, or send project details to OdestaSoft — a US-based custom software and AI development company. We reply within one business day.",
  path: "/contact",
  keywords: [
    "contact software development company",
    "hire software developers Virginia",
    "request software development quote",
    "OdestaSoft phone number",
    "OdestaSoft contact",
  ],
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqItems)) }}
      />

      <Breadcrumb trail={[{ label: "Contact" }]} />

      <section className="section-tight">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1 className="mb-4 max-w-[760px] text-[38px] font-extrabold text-ink sm:text-5xl">
            Let&rsquo;s talk about what you&rsquo;re building.
          </h1>
          <p className="max-w-[620px] text-lg text-body">
            Call{" "}
            <a href={`tel:${siteConfig.phone}`} className="font-semibold text-brand">
              {siteConfig.phoneDisplay}
            </a>
            , email{" "}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-brand">
              {siteConfig.email}
            </a>
            , or fill out the form below — we reply within one business day.
          </p>
        </div>
      </section>

      <section className="section-major">
        <div className="wrap">
          <ContactForm />
        </div>
      </section>

      <section id="faq" className="section-minor bg-bgsoft">
        <div className="wrap max-w-[820px]">
          <div className="mx-auto mb-14 max-w-[660px] text-center">
            <div className="eyebrow">FAQ</div>
            <h2 className="text-[28px] font-extrabold text-ink sm:text-4xl">Questions you may have.</h2>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
