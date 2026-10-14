import Link from "next/link";

export function Breadcrumb({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <div className="wrap pt-[110px] text-[13px] text-muted">
      <Link href="/" className="hover:text-brand">
        Home
      </Link>
      {trail.map((item) => (
        <span key={item.label}>
          <span className="mx-1.5">/</span>
          {item.href ? (
            <Link href={item.href} className="hover:text-brand">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}
