"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ExperienceCardProps = {
  href?: string;
  hrefLabel?: string;
  title: string;
  desc: string;
  img: string;
  /** Use "\n" for line breaks, e.g. "Aug 2023\n-\nMay 2026" */
  date?: string;
  /** When present, the card expands to show these */
  bullets?: string[];
  /** Short blurb shown beside the title (stacks below it on narrow screens) */
  summary?: string;
};

export default function ExperienceCard({ href, hrefLabel = "Learn More", title, desc, img, date, bullets, summary }: ExperienceCardProps) {
  const [open, setOpen] = useState(false);
  const expandable = !!bullets?.length;

  const identity = (
    <div className="flex items-center gap-4 min-w-0">
      <Image
        src={img}
        alt=""
        width={48}
        height={48}
        className="opacity-70 shrink-0 rounded-lg"
      />
      <div className="min-w-0 flex-1">
        <div className="text-xs text-muted uppercase tracking-[0.18em]">{title}</div>
        <div className="mt-1 text-base font-semibold text-fg leading-snug">{desc}</div>
      </div>
    </div>
  );

  const header = summary ? (
    <div className="grid lg:grid-cols-2 gap-x-6 gap-y-3 items-center w-full min-h-[115px]">
      {identity}
      <p className="text-sm text-muted leading-relaxed">{summary}</p>
    </div>
  ) : (
    <div className="flex items-center gap-4 w-full min-h-[72px]">
      <div className="min-w-0 flex-1">{identity}</div>
      <div className="flex items-center gap-4 shrink-0">
        {date && (
          <div className="text-xs text-muted text-center hidden md:block leading-relaxed whitespace-pre-line">{date}</div>
        )}
        {expandable && (
          <button
            onClick={(e) => { e.stopPropagation(); setOpen((o) => !o); }}
            className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-muted hover:text-fg hover:border-white/25 transition shrink-0 !cursor-pointer"
            aria-label={open ? "Collapse" : "Expand"}
          >
            <svg
              width="12" height="12" viewBox="0 0 12 12" fill="none"
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            >
              <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );

  const body = expandable && open && (
    <div className="mt-3 pt-3 border-t border-white/8 text-sm text-muted leading-relaxed">
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
      {href && (
        <div className="mt-3">
          <Link
            href={href}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-xs text-fg/70 hover:text-fg border border-white/10 hover:border-white/25 rounded-lg px-3 py-1.5 transition"
          >
            {hrefLabel} →
          </Link>
        </div>
      )}
    </div>
  );

  const cardClass = `
    w-full rounded-2xl border border-white/10 px-5 py-4 transition
    ${expandable || href ? "hover:border-white/20 hover:bg-white/5" : ""} ${expandable ? "cursor-pointer" : ""}
    ${open ? "border-white/15" : ""}
  `;

  if (!expandable && href) {
    return (
      <Link href={href} className={cardClass}>
        {header}
      </Link>
    );
  }

  return (
    <div
      className={cardClass}
      onClick={() => {
        // Don't toggle when the click finishes a text selection inside the card
        if (!expandable || window.getSelection()?.toString()) return;
        setOpen((o) => !o);
      }}
    >
      {header}
      {body}
    </div>
  );
}