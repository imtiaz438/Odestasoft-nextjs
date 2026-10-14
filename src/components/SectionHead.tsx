export function SectionHead({
  eyebrow,
  title,
  body,
  center,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-14 max-w-[660px] ${center ? "mx-auto text-center" : ""}`}>
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="text-[28px] font-extrabold text-ink sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-base text-body">{body}</p>}
    </div>
  );
}
