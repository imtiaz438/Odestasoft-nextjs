import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { siteConfig } from "@/data/nav";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] pt-16 text-slate-400">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-11 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="mb-3.5 flex items-center gap-2.5 text-lg font-extrabold text-white">
              <Image src="/icon-mark.png" alt="OdestaSoft" width={42} height={42} className="rounded-[10px]" />
              <span>Odesta</span>
              <span className="text-brand -ml-2">Soft</span>
            </Link>
            <p className="mb-4 max-w-[250px] text-[13.5px]">
              US-based software engineering and AI solutions for startups, mid-market, and enterprise
              organizations.
            </p>
            <div className="flex flex-col gap-1.5 text-[13.5px]">
              <a href={`tel:${siteConfig.phone}`} className="text-slate-300 hover:text-white">
                {siteConfig.phoneDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-slate-300 hover:text-white">
                {siteConfig.email}
              </a>
            </div>
          </div>

          <FooterCol title="Company">
            <FooterLink href="/about">About</FooterLink>
            <FooterLink href="/solutions">Solutions</FooterLink>
            <FooterLink href="/case-studies">Case Studies</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterCol>

          <FooterCol title="Services">
            {services.map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Resources">
            <FooterLink href="/case-studies">Case Studies</FooterLink>
            <FooterLink href="/contact">Talk to an Expert</FooterLink>
          </FooterCol>

          <FooterCol title="Legal">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms &amp; Conditions</FooterLink>
          </FooterCol>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-7 text-[13px] text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved. Headquartered in{" "}
            {siteConfig.location}.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h5 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-500">{title}</h5>
      <div className="flex flex-col">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="py-1.5 text-sm text-slate-300 transition-colors hover:text-white">
      {children}
    </Link>
  );
}
