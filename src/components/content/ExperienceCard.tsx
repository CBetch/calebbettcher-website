"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";

type ExperienceCardProps = {
  href?: string;
  hrefLabel?: string;
  title: string;
  desc: string;
  subdesc?: ReactNode;
  img: string;
  date?: ReactNode;
};

export default function ExperienceCard({ href, hrefLabel = "Learn More", title, desc, subdesc, img, date }: ExperienceCardProps) {
  const [open, setOpen] = useState(false);

  const header = (
    <div className="flex items-center gap-4 w-full min-h-[72px]">
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
      <div className="flex items-center gap-4 shrink-0">
        {date && (
          <div className="text-xs text-muted text-right hidden md:block leading-relaxed">{date}</div>
        )}
        {subdesc && (
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

  const body = subdesc && open && (
    <div className="mt-3 pt-3 border-t border-white/8 text-sm text-muted leading-relaxed">
      {subdesc}
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
    ${subdesc ? `${!open ? "cursor-pointer hover:border-white/20 hover:bg-white/5" : "cursor-default [&_*]:cursor-default"}` : href ? "hover:border-white/20 hover:bg-white/5" : ""}
    ${open ? "border-white/15" : ""}
  `;

  if (!subdesc && href) {
    return (
      <Link href={href} className={cardClass}>
        {header}
      </Link>
    );
  }

  return (
    <div
      className={cardClass}
      onClick={() => subdesc && !open && setOpen(true)}
    >
      {header}
      {body}
    </div>
  );
}