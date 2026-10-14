import Image from "next/image";
import Link from "next/link";
import { CaseStudy } from "@/types";


export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="card mb-6 overflow-hidden rounded-cardlg">
      <div className="grid grid-cols-1 gap-10 p-9 md:grid-cols-2">
        {/* Case Study Image */}
        <div className="relative min-h-[260px] overflow-hidden rounded-[14px]">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

          <div className="absolute bottom-5 left-5">
            <span className="rounded-full bg-white/90 px-3 py-1.5 font-mono text-[11px] font-semibold text-ink">
              {study.tag}
            </span>
          </div>
        </div>
        <div>
          <span className="mb-2.5 block font-mono text-xs text-brand">{study.industry.toUpperCase()}</span>
          <h3 className="mb-3 text-2xl font-bold text-ink">{study.title}</h3>
          <p className="mb-4 text-[14.5px] text-body">{study.lede}</p>
          <div className="mt-4 flex gap-6">
            {study.metrics.map((m) => (
              <div key={m.label}>
                <b className="block text-[22px] font-extrabold text-brand">{m.value}</b>
                <span className="text-xs text-muted">{m.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-7 border-t border-line bg-bgsoft p-7 md:grid-cols-3">
        <DetailBlock label="Challenge" text={study.challenge} />
        <DetailBlock label="Solution" text={study.solution} />
        <DetailBlock label="Technology" text={study.tech.join(", ")} />
      </div>
      <div className="border-t border-line p-7">
        <blockquote className="mb-3 text-base italic text-ink">&ldquo;{study.quote}&rdquo;</blockquote>
        <div className="mb-4 text-[13px] font-semibold text-muted">{study.quotePerson}</div>
        <Link href={`/case-studies/${study.slug}`} className="text-[13.5px] font-bold text-brand">
          Read full case study →
        </Link>
      </div>
    </div>
  );
}

function DetailBlock({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h5 className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">{label}</h5>
      <p className="text-[13.5px] text-body">{text}</p>
    </div>
  );
}
