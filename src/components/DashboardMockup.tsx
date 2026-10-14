export function DashboardMockup() {
  return (
    <div className="rounded-cardlg border border-line bg-bgsoft" style={{ boxShadow: "var(--shadow)" }}>
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      <div className="grid grid-cols-[110px_1fr] gap-4 p-5 max-[560px]:grid-cols-1">
        <div className="flex flex-col gap-2 max-[560px]:hidden">
          <div className="h-2.5 rounded bg-brand/80" style={{ width: "70%" }} />
          <div className="h-2.5 rounded bg-bgsoft2" style={{ width: "85%" }} />
          <div className="h-2.5 rounded bg-bgsoft2" style={{ width: "60%" }} />
          <div className="h-2.5 rounded bg-bgsoft2" style={{ width: "75%" }} />
          <div className="h-2.5 rounded bg-bgsoft2" style={{ width: "50%" }} />
        </div>
        <div className="flex flex-col gap-3.5">
          <div className="grid grid-cols-3 gap-2.5">
            <Kpi label="REVENUE" value="$482K" accent />
            <Kpi label="UPTIME" value="99.98%" />
            <Kpi label="LATENCY" value="112ms" accent />
          </div>
          <div className="h-[150px] rounded-[10px] border border-line bg-bg p-3.5">
            <svg viewBox="0 0 300 100" width="100%" height="100%" preserveAspectRatio="none">
              <polyline
                points="0,80 30,70 60,74 90,50 120,58 150,30 180,40 210,20 240,28 270,10 300,18"
                fill="none"
                stroke="#10B981"
                strokeWidth="2.5"
              />
              <polyline
                points="0,80 30,70 60,74 90,50 120,58 150,30 180,40 210,20 240,28 270,10 300,18 300,100 0,100"
                fill="rgba(16,185,129,0.08)"
                stroke="none"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2 rounded-[10px] border border-line bg-bg p-3">
            <Row width={82} />
            <Row width={64} />
            <Row width={91} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Kpi({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-[10px] border border-line bg-bg p-3">
      <div className="mb-1.5 font-mono text-[10px] text-muted">{label}</div>
      <div className={`text-[17px] font-extrabold ${accent ? "text-brand-light" : "text-ink"}`}>{value}</div>
    </div>
  );
}

function Row({ width }: { width: number }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="h-2 w-2 flex-shrink-0 rounded-full bg-brand" />
      <div className="h-2 flex-grow rounded bg-bgsoft2">
        <div
          className="h-full rounded bg-gradient-to-r from-brand to-brand-light"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}
