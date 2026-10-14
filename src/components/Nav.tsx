"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { primaryNav } from "@/data/nav";
import { ThemeToggle } from "./ThemeToggle";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close the mobile menu automatically on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-[200] bg-white/90 backdrop-blur-md transition-[border-color,background] dark:bg-[#0f172a]/90 ${
          scrolled ? "border-b border-line" : "border-b border-transparent"
        }`}
      >
        <div className="wrap flex h-[76px] items-center justify-between">
          <Link href="/" className="flex items-center logo-display gap-2.5 text-lg font-extrabold text-ink">
            <Image src="/icon-mark.png" alt="OdestaSoft" width={42} height={42} className="rounded-[10px]" />
            <span className="text-ink">Odesta</span>
            <span className="text-brand -ml-2">Soft</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium text-body lg:flex">
            {primaryNav.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative py-1 transition-colors ${
                    active ? "font-semibold text-brand" : "hover:text-ink"
                  }`}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active-dot"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] rounded-full bg-brand"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3.5">
            <ThemeToggle />
            <Link
              href="/contact"
              className="hidden consult rounded-full bg-ink px-5 py-2.5 text-[13.5px] font-semibold text-bg transition-opacity hover:opacity-85 dark:bg-brand dark:text-white lg:inline-block"
            >
              Schedule Consultation
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="text-xl text-ink lg:hidden"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="scrim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[299] bg-slate-950/40"
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed right-0 top-0 z-[300] h-screen mobile-bg w-[min(340px,88vw)] overflow-y-auto bg-bg px-7 pb-7 pt-[90px] shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="absolute right-6 top-6 text-xl text-ink"
              >
                ✕
              </button>
              {primaryNav.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`block border-b border-line py-3.5 text-base font-semibold ${
                      active ? "text-brand" : "text-ink"
                    }`}
                  >
                    {link.label}
                    {active && <span className="ml-2 text-xs">●</span>}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-6 block rounded-full bg-brand py-3.5 text-center font-semibold text-white"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
