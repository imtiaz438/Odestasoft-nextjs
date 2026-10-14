"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DashboardMockup } from "./DashboardMockup";

const SLIDES = [
  {
    badge: "US-Based · Software Engineering & AI Solutions",
    headline: (
      <>
        Engineering <span className="text-brand">intelligent software</span> that helps businesses grow.
      </>
    ),
    sub: "OdestaSoft designs and develops scalable software, AI-powered solutions, cloud applications, automation, and digital platforms that solve real business challenges.",
  },
  {
    badge: "AI · Cloud · Custom Software",
    headline: (
      <>
        Ship the product. <span className="text-brand">Skip</span> the six-vendor relay race.
      </>
    ),
    sub: "One team handles design, engineering, AI, and infrastructure — so scope never gets lost in translation between contractors.",
  },
  {
    badge: "Built for scale",
    headline: (
      <>
        Real engineering, <span className="text-brand">not</span> a template with your logo on it.
      </>
    ),
    sub: "We architect systems meant to hold up under real usage, not just demo well on launch day.",
  },
];

export function Hero() {
  const [slide, setSlide] = useState(0);
  const [visible, setVisible] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Rotate hero copy every ~5.5s, fading out/in between slides.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setSlide((s) => (s + 1) % SLIDES.length);
        setVisible(true);
      }, 300);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  // Lightweight canvas network animation — stands in for a produced brand
  // video without hotlinking external stock footage.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      if (!canvas) return;
      w = canvas.width = canvas.offsetWidth * dpr;
      h = canvas.height = canvas.offsetHeight * dpr;
    }
    resize();
    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: 26 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 2 + 1,
    }));

    let raf = 0;
    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);
      ctx.strokeStyle = "rgba(16,185,129,0.12)";
      ctx.fillStyle = "rgba(16,185,129,0.32)";
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * dpr, 0, Math.PI * 2);
        ctx.fill();
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dist = Math.hypot(n.x - m.x, n.y - m.y);
          if (dist < 160 * dpr) {
            ctx.globalAlpha = 1 - dist / (160 * dpr);
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(m.x, m.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  const current = SLIDES[slide];

  return (
    <section className="relative overflow-hidden bg-bg pb-20 pt-[170px]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-bg to-95% dark:from-[#0f172a]/15 dark:to-[#0f172a]" />
      <div className="wrap relative z-10 grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-brand-softbg px-4 py-1.5 text-[13px] font-semibold text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {current.badge}
          </div>
          <h1 className="mb-6 text-[42px] font-extrabold leading-[1.06] text-ink sm:text-[60px] xl:text-[72px]">
            {current.headline}
          </h1>
          <p className="mb-9 max-w-[520px] text-lg text-body">{current.sub}</p>
          <div className="flex flex-wrap gap-3.5">
            <Link href="/contact" className="btn-primary">
              Schedule Consultation →
            </Link>
            <Link href="/case-studies" className="btn-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
        <DashboardMockup />
      </div>
    </section>
  );
}
