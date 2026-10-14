"use client";

import { FormEvent, MouseEvent, ReactNode, useState } from "react";
import { siteConfig } from "@/data/nav";

// Replace with your real Calendly scheduling link.
const CALENDLY_LINK = "";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || json.error) {
        setStatus("error");
        setErrorMsg(json.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  }

  function handleCalendlyClick(e: MouseEvent) {
    e.preventDefault();
    if (CALENDLY_LINK) {
      window.open(CALENDLY_LINK, "_blank");
    } else {
      alert("Add your real Calendly link to CALENDLY_LINK in ContactForm.tsx to activate scheduling.");
    }
  }

  return (
    <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
      <div>
        <div className="eyebrow">Get in touch</div>
        <h2 className="mb-4 text-[32px] font-extrabold text-ink">Let&rsquo;s scope your project.</h2>
        <p className="mb-7 text-[15px] text-body">
          Tell us what you&rsquo;re building and we&rsquo;ll follow up with next steps, usually within one
          business day.
        </p>
        <div className="mb-7 flex flex-col gap-3.5 text-sm text-body">
          <MetaRow label="Phone">
            <a href={`tel:${siteConfig.phone}`} className="hover:text-brand">
              {siteConfig.phoneDisplay}
            </a>
          </MetaRow>
          <MetaRow label="Email">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-brand">
              {siteConfig.email}
            </a>
          </MetaRow>
          <MetaRow label="Headquarters">{siteConfig.location}</MetaRow>
          <MetaRow label="Response Time">Within 1 business day</MetaRow>
        </div>
   
      </div>

      <div className="rounded-cardlg border border-line bg-bgsoft p-9">
        {status === "success" ? (
          <div className="flex h-full min-h-[280px] flex-col items-center justify-center text-center">
            <p className="mb-2 text-lg font-bold text-ink">Thanks — message sent.</p>
            <p className="text-sm text-body">
              We&rsquo;ll get back to you within one business day. You can also reach us directly at{" "}
              <a href={`tel:${siteConfig.phone}`} className="text-brand">
                {siteConfig.phoneDisplay}
              </a>
              .
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            {/* Honeypot — hidden from real users, bots that auto-fill every field will trip it */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <Field label="Full Name" id="name" name="name" type="text" required />
              <Field label="Email" id="email" name="email" type="email" required />
            </div>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <Field label="Company" id="company" name="company" type="text" />
              <Field label="Phone" id="phone" name="phone" type="tel" />
            </div>
            <div>
              <label htmlFor="interest" className="mb-1.5 block font-mono text-xs text-muted">
                I&rsquo;m interested in
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full rounded-[10px] border border-line bg-bg px-3.5 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-brand"
              >
                <option>Website Development</option>
                <option>SaaS Product</option>
                <option>Dashboard / Analytics</option>
                <option>AI Integration</option>
                <option>API Development</option>
                <option>Cloud & DevOps</option>
                <option>Staff Augmentation</option>
                <option>Other</option>
              </select>
            </div>
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              <SelectField
                label="Budget"
                id="budget"
                name="budget"
                options={["Under $25,000", "$25,000 – $75,000", "$75,000 – $150,000", "$150,000+"]}
              />
              <SelectField
                label="Timeline"
                id="timeline"
                name="timeline"
                options={["ASAP", "1–3 months", "3–6 months", "Flexible"]}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-muted">
                Project Description
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="What are you looking to build?"
                className="min-h-[90px] w-full rounded-[10px] border border-line bg-bg px-3.5 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-brand"
              />
            </div>

            {status === "error" && (
              <p className="rounded-lg bg-red-50 px-3.5 py-2.5 text-[13px] text-red-700">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-1 rounded-full bg-brand py-3.5 text-[14.5px] font-bold text-white hover:opacity-90 disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function MetaRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <b className="mb-0.5 block text-xs font-bold uppercase tracking-wide text-ink">{label}</b>
      {children}
    </div>
  );
}

function Field({
  label,
  id,
  name,
  type,
  required,
}: {
  label: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-mono text-xs text-muted">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-[10px] border border-line bg-bg px-3.5 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-brand"
      />
    </div>
  );
}

function SelectField({
  label,
  id,
  name,
  options,
}: {
  label: string;
  id: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block font-mono text-xs text-muted">
        {label}
      </label>
      <select
        id={id}
        name={name}
        className="w-full rounded-[10px] border border-line bg-bg px-3.5 py-3 text-sm text-ink outline-none focus:ring-2 focus:ring-brand"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}
