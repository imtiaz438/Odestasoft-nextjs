import { Metadata } from "next";
import Link from "next/link";
import { ReactNode } from "react";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumb } from "@/components/Breadcrumb";
import { siteConfig } from "@/data/nav";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy — OdestaSoft",
  description: "How OdestaSoft collects, uses, and protects information submitted through this website.",
  path: "/privacy",
});

const LAST_UPDATED = "January 1, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb trail={[{ label: "Privacy Policy" }]} />

      <section className="section-tight">
        <div className="wrap">
          <div className="eyebrow">Legal</div>
          <h1 className="mb-3 text-[38px] font-extrabold text-ink sm:text-5xl">Privacy Policy</h1>
          <p className="mb-2 text-sm text-muted">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="section-minor">
        <div className="wrap max-w-[760px]">
          

          <Prose>
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how {siteConfig.legalName} (&ldquo;OdestaSoft,&rdquo;
              &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects
              information when you visit {siteConfig.domain} (the &ldquo;Site&rdquo;) or submit
              information through it. By using the Site, you agree to the practices described here.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We collect information in two ways:</p>
            <ul>
              <li>
                <strong>Information you provide directly</strong> — when you submit the contact form,
                we collect your name, email address, and any optional details you choose to share
                (company, phone number, budget, timeline, and project description).
              </li>
              <li>
                <strong>Information collected automatically</strong> — like most websites, our hosting
                and infrastructure providers may automatically log standard technical data such as IP
                address, browser type, device information, and pages visited, typically for security
                and performance purposes.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to project inquiries submitted through the contact form</li>
              <li>Communicate with you about a potential or ongoing engagement</li>
              <li>Maintain the security and proper functioning of the Site</li>
              <li>Comply with legal obligations where applicable</li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2>4. Third-Party Service Providers</h2>
            <p>We rely on the following third-party services to operate the Site:</p>
            <ul>
              <li>
                <strong>Resend</strong> — processes and delivers contact form submissions to our email
                inbox. See{" "}
                <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                  Resend&rsquo;s privacy policy
                </a>
                .
              </li>
              <li>
                <strong>Cloudflare</strong> — provides hosting and content delivery infrastructure for
                the Site. See{" "}
                <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
                  Cloudflare&rsquo;s privacy policy
                </a>
                .
              </li>
            </ul>
            <p>
              If we add analytics, advertising, or other third-party tools in the future, this policy
              will be updated to reflect that.
            </p>

            <h2>5. Cookies &amp; Local Storage</h2>
            <p>
              The Site uses your browser&rsquo;s local storage to remember your light/dark mode
              preference. This is a functional preference only and is not used for tracking or
              advertising. We do not currently use tracking or advertising cookies.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We retain contact form submissions for as long as reasonably necessary to respond to
              your inquiry and maintain business records, unless you request earlier deletion.
            </p>

            <h2>7. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or request
              deletion of the personal information we hold about you. To make a request, contact us
              using the details below.
            </p>

            <h2>8. Data Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect the information you
              share with us. However, no method of transmission over the internet is completely
              secure, and we cannot guarantee absolute security.
            </p>

            <h2>9. Children&rsquo;s Privacy</h2>
            <p>
              The Site is intended for business use and is not directed at individuals under the age
              of 16. We do not knowingly collect personal information from children.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with an updated &ldquo;Last updated&rdquo; date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              Questions about this Privacy Policy can be sent to{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
          </Prose>

          <p className="mt-10 text-sm text-body">
            Related: <Link href="/terms" className="font-semibold text-brand">Terms &amp; Conditions</Link>
          </p>
        </div>
      </section>
    </>
  );
}


function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose-legal [&_h2]:mb-3 [&_h2]:mt-9 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-ink [&_h2:first-child]:mt-0 [&_p]:mb-4 [&_p]:text-[15px] [&_p]:leading-relaxed [&_p]:text-body [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2 [&_li]:text-[15px] [&_li]:text-body [&_a]:text-brand [&_a]:underline [&_strong]:text-ink [&_strong]:font-semibold">
      {children}
    </div>
  );
}
