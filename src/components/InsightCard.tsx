import Link from "next/link";
import { Insight } from "@/types";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <div className="overflow-hidden rounded-card border border-line bg-bg transition-transform hover:-translate-y-1">
      <div
        className="flex h-[110px] items-end p-4"
        style={{ background: `linear-gradient(135deg, ${insight.gradient[0]}, ${insight.gradient[1]})` }}
      >
        <span className="rounded-full bg-white/90 px-2.5 py-1 font-mono text-[10.5px] font-semibold text-ink">
          {insight.tag}
        </span>
      </div>
      <div className="p-5">
        <h4 className="mb-2 text-[15px] font-bold text-ink">{insight.title}</h4>
        <p className="mb-3 text-[13px] text-body">{insight.body}</p>
        <Link href="#" className="text-[12.5px] font-bold text-brand">
          Read insight →
        </Link>
      </div>
    </div>
  );
}
