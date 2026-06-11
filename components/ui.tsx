import { ReactNode } from "react";
import Link from "next/link";

export function PageHeader({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede: ReactNode;
}) {
  return (
    <header className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
          {kicker}
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{lede}</p>
      </div>
    </header>
  );
}

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-8">
      <h2 className="text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      <div className="prose-custom mt-4 space-y-4 text-[1.05rem] leading-relaxed text-slate-700">
        {children}
      </div>
    </section>
  );
}

const calloutStyles = {
  info: "border-sky-300 bg-sky-50",
  warning: "border-amber-300 bg-amber-50",
  good: "border-emerald-300 bg-emerald-50",
  neutral: "border-slate-300 bg-slate-50",
} as const;

export function Callout({
  tone = "neutral",
  title,
  children,
}: {
  tone?: keyof typeof calloutStyles;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={`rounded-lg border-l-4 p-4 ${calloutStyles[tone]}`}>
      <p className="font-bold text-slate-900">{title}</p>
      <div className="mt-1 space-y-2 text-[0.97rem] leading-relaxed text-slate-700">
        {children}
      </div>
    </div>
  );
}

/** Big standalone statistic with context line. */
export function Stat({
  value,
  label,
  children,
}: {
  value: string;
  label: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {value}
      </p>
      <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-amber-700">
        {label}
      </p>
      {children ? (
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{children}</p>
      ) : null}
    </div>
  );
}

export function StatGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

/**
 * Evidence label used on the health page so readers always know
 * the strength of a claim.
 */
export function Evidence({
  level,
}: {
  level: "documented" | "alleged" | "no-evidence";
}) {
  const styles = {
    documented: "bg-emerald-100 text-emerald-900 border-emerald-300",
    alleged: "bg-amber-100 text-amber-900 border-amber-300",
    "no-evidence": "bg-slate-100 text-slate-700 border-slate-300",
  } as const;
  const labels = {
    documented: "Documented",
    alleged: "Alleged / unresolved",
    "no-evidence": "No supporting evidence",
  } as const;
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wide ${styles[level]}`}
    >
      {labels[level]}
    </span>
  );
}

/** Simple horizontal bar chart rendered with divs — no chart library needed. */
export function BarChart({
  unit,
  max,
  rows,
}: {
  unit: string;
  max: number;
  rows: { label: string; value: number; display?: string; highlight?: boolean }[];
}) {
  return (
    <div className="space-y-2.5">
      {rows.map((r) => (
        <div key={r.label}>
          <div className="flex items-baseline justify-between gap-2">
            <span
              className={`text-sm ${r.highlight ? "font-bold text-slate-900" : "font-medium text-slate-700"}`}
            >
              {r.label}
            </span>
            <span className="shrink-0 text-sm tabular-nums text-slate-500">
              {r.display ?? `${r.value.toLocaleString()} ${unit}`}
            </span>
          </div>
          <div className="mt-1 h-3 w-full overflow-hidden rounded-full bg-slate-100">
            <div
              className={`h-full rounded-full ${r.highlight ? "bg-amber-500" : "bg-slate-400"}`}
              style={{ width: `${Math.min(100, (r.value / max) * 100)}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export function NextPage({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-10 border-t border-slate-200 pt-6 print:hidden">
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-lg font-bold text-amber-700 hover:text-amber-900"
      >
        Next: {label}
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
}

export function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-3xl px-4 pb-16">{children}</div>;
}
