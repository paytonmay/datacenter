"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/pros-cons", label: "Pros & Cons" },
  { href: "/basics", label: "The Basics" },
  { href: "/map", label: "Map" },
  { href: "/noise", label: "Noise" },
  { href: "/water", label: "Water" },
  { href: "/power", label: "Power & Rates" },
  { href: "/health", label: "Health" },
  { href: "/communities", label: "Other Towns" },
  { href: "/pikeville", label: "Pikeville" },
  { href: "/sources", label: "Sources" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-extrabold tracking-tight text-slate-900">
          <span className="rounded bg-amber-500 px-1.5 py-0.5 text-sm text-white">DC</span>
          <span className="hidden sm:inline">Data Centers, Explained</span>
          <span className="sm:hidden">DC Explained</span>
        </Link>
        <button
          className="rounded p-2 text-slate-700 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-md px-2.5 py-1.5 text-sm font-semibold ${
                pathname?.startsWith(l.href)
                  ? "bg-amber-100 text-amber-900"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      {open && (
        <div className="border-t border-slate-200 px-4 py-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2 font-semibold ${
                pathname?.startsWith(l.href)
                  ? "bg-amber-100 text-amber-900"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
