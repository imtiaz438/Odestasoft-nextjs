import Link from "next/link";
import { Reveal } from "./Reveal";

const INCLUDES = [
  {
    title: "Architecture review",
    body: "Where the system really stands — data model, integrations, infrastructure, and the decisions that are quietly costing you.",
  },
  {
    title: "Code quality pass",
    body: "An honest read on maintainability: what the next engineer will actually inherit if you keep going.",
  },
  {
    title: "Rescue roadmap",
    body: "Fix, rebuild, or walk away — each path scoped with trade-offs, so the decision is yours, not ours.",
  },
];

export function RescueAudit() {
  return (
    <section className="section-major">
      <div className="wrap">
        <Reveal>
          <div className="relative overflow-hidden rounded-cardlg bg-[#17235B] px-7 py-12 text-white sm:px-14">
            <div className="relative z-10 max-w-[680px]">
              <div className="eyebrow text-[#8FA6FF]">Stuck with a half-built product?</div>
              <h2 className="mb-4 text-[28px] font-extrabold text-white sm:text-4xl">
                Get a rescue audit before you write off the investment.
              </h2>
              <p className="mb-7 text-base text-slate-300">
                Tell us where the project stands. We review the codebase and architecture, then hand
                you a straight rescue plan: what&rsquo;s salvageable, what needs rebuilding, and what
                each path would take.
                {/* NOTE: flip this to a paid discovery by editing the line below. */}
                <span className="font-semibold text-white"> Free — no pitch attached.</span>
              </p>
              <div className="mb-10 flex flex-wrap gap-3.5">
                <Link
                  href="/contact"
                  className="rounded-full bg-white px-6 py-3.5 text-[14.5px] font-bold text-[#17235B] hover:bg-brand-softbg"
                >
                  Request a rescue audit →
                </Link>
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {INCLUDES.map((item) => (
                <div key={item.title} className="rounded-[14px] border border-white/15 bg-white/5 p-5">
                  <h4 className="mb-2 text-[15px] font-bold text-white">{item.title}</h4>
                  <p className="text-[13.5px] text-slate-400">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
