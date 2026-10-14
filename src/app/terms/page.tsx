import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { siteConfig } from "@/data/nav";

export const metadata: Metadata = buildMetadata({
  title: "Terms & Conditions — OdestaSoft",
  description: "The terms governing use of the OdestaSoft website.",
  path: "/terms",
});

const LAST_UPDATED = "January 1, 2026";

export default function TermsPage() {
  return (
    <>
      <Breadcrumb trail={[{ label: "Terms & Conditions" }]} />

      <section className="section-tight">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1 className="mb-3 text-[38px] font-extrabold text-ink sm:text-5xl">Terms &amp; Conditions</h1>
          <p className="mb-2 text-sm text-muted">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section-minor">
        <div className="wrap max-w-[760px]">

          <Prose>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using {siteConfig.domain} (the &ldquo;Site&rdquo;), you agree to be bound
              by these Terms &amp; Conditions. If you do not agree, please do not use the Site.
            </p>

            <h2>2. Use of the Website</h2>
            <p>
              The Site and its content are provided for general informational purposes about{" "}
              {siteConfig.legalName} and its services. You agree not to misuse the Site, including
              attempting to gain unauthorized access to it, interfering with its normal operation, or
              using automated systems to scrape or overload it.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on the Site — including text, graphics, logos, and the site design — is the
              property of {siteConfig.legalName} unless otherwise noted, and may not be copied,
              reproduced, or redistributed without prior written permission.
            </p>

            <h2>4. No Guarantee of Outcomes</h2>
            <p>
              Case studies describe past client engagements; timelines and pricing ranges shown on
              the Site are for general guidance only. They do not constitute a binding quote,
              guarantee of results, or offer. Actual project scope, timeline, and cost are
              determined individually through direct discussion and a separate signed agreement.
            </p>

            <h2>5. Third-Party Links</h2>
            <p>
              The Site may link to third-party websites or services we do not control. We are not
              responsible for the content, accuracy, or practices of those third parties.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, {siteConfig.legalName} shall not be liable for
              any indirect, incidental, or consequential damages arising from your use of the Site. The
              Site is provided &ldquo;as is&rdquo; without warranties of any kind, express or implied.
            </p>

            <h2>7. Indemnification</h2>
            <p>
              You agree to indemnify and hold {siteConfig.legalName} harmless from any claims, damages,
              or expenses arising from your misuse of the Site or violation of these Terms.
            </p>

            <h2>8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the Commonwealth of Virginia, United States,
              without regard to its conflict-of-law principles, unless otherwise required by applicable
              law.
            </p>

            <h2>9. Changes to These Terms</h2>
            <p>
              We may revise these Terms from time to time. Continued use of the Site after changes are
              posted constitutes acceptance of the revised Terms.
            </p>

            <h2>10. Contact</h2>
            <p>
              Questions about these Terms can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </Prose>

          <p className="mt-10 text-sm text-body">
            Related: <Link href="/privacy" className="font-semibold text-brand">Privacy Policy</Link>
          </p>
        </div>
      </section>
    </>
  );
}


function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-legal [&_h2]:mb-3 [&_h2]:mt-9 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h2:first-child]:mt-0 [&_p]:mb-4 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-body [&_a]:text-brand [&_a]:underline">
      {children}
    </div>
  );
}
