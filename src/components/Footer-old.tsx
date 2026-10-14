import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { footerServiceLinks, siteConfig } from "@/data/nav";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-16 text-slate-400">
      <div className="wrap">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-11 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.7fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="mb-3.5 flex items-center gap-2.5 text-lg font-extrabold text-white"
              aria-label="OdestaSoft Home"
            >
              <Image
                src="/icon-mark.png"
                alt="OdestaSoft"
                width={42}
                height={42}
                className="rounded-[10px]"
              />

              <span>
                Odesta<span className="text-brand">Soft</span>
              </span>
            </Link>

            <p className="mb-5 max-w-[270px] text-[13.5px] leading-6">
              US-based software engineering and AI solutions for startups,
              mid-market, and enterprise organizations.
            </p>

            {/* Phone */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="text-[13.5px] text-slate-300 transition-colors hover:text-white"
            >
              {siteConfig.phoneDisplay}
            </a>
          </div>


          {/* Company */}
          <FooterCol title="Company">
            <FooterLink href="/about">
              About
            </FooterLink>

            <FooterLink href="/solutions">
              Solutions
            </FooterLink>

            <FooterLink href="/case-studies">
              Case Studies
            </FooterLink>

            <FooterLink href="/contact">
              Contact
            </FooterLink>
          </FooterCol>


          {/* Services */}
          <FooterCol title="Services">
            {footerServiceLinks.map((link) => (
              <FooterLink
                key={link.href}
                href={link.href}
              >
                {link.label}
              </FooterLink>
            ))}
          </FooterCol>


          {/* Resources */}
          <FooterCol title="Resources">
            <FooterLink href="/case-studies">
              Case Studies
            </FooterLink>

            <FooterLink href="/contact">
              Talk to an Expert
            </FooterLink>
          </FooterCol>


          {/* Legal */}
          <FooterCol title="Legal">
            <FooterLink href="/privacy">
              Privacy Policy
            </FooterLink>

            <FooterLink href="/terms">
              Terms &amp; Conditions
            </FooterLink>
          </FooterCol>

        </div>


        {/* Copyright */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-7 text-[13px] text-slate-500">
          <p>
            &copy; 2026 {siteConfig.legalName}. All rights reserved.
            Headquartered in {siteConfig.location}.
          </p>
        </div>

      </div>
    </footer>
  );
}


function FooterCol({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h5 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">
        {title}
      </h5>

      <div className="flex flex-col">
        {children}
      </div>
    </div>
  );
}


function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="py-1.5 text-sm leading-5 text-slate-300 transition-colors hover:text-white"
    >
      {children}
    </Link>
  );
}