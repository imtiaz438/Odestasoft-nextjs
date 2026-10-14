import Link from "next/link";
import { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="card rounded-card p-7 transition-[box-shadow,transform] hover:-translate-y-1 hover:shadow-[var(--shadow)]">
      <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-[12px] bg-brand-softbg text-[15px] font-bold text-brand">
        {service.icon}
      </div>
      <h3 className="mb-2.5 text-[19px] font-bold text-ink">{service.title}</h3>
      <p className="mb-4 text-sm text-body">{service.lede}</p>
      <Link href={`/services/${service.slug}`} className="text-[13.5px] font-bold text-ink hover:text-brand">
        Learn more →
      </Link>
    </div>
  );
}
