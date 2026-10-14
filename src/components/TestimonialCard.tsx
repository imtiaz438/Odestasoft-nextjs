import { Testimonial } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="card flex flex-col rounded-card p-7">
      <div className="mb-3.5 text-sm tracking-widest text-amber-500">★★★★★</div>
      <blockquote className="mb-5 flex-grow text-[15.5px] italic leading-relaxed text-ink">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-brand-softbg text-[13px] font-bold text-brand">
          {testimonial.initials}
        </div>
        <div>
          <div className="text-[13.5px] font-bold text-ink">{testimonial.name}</div>
          <div className="text-xs text-muted">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}
