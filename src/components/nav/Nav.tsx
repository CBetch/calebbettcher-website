"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Container from "../Container";
import { site } from "@/lib/site";

const items = [
  { href: "/resume", label: "Resume" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-white/8 bg-bg0/40 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-4 bg-transparent" onClick={() => setOpen(false)}>
            <Image src="/favicon.ico" alt="Caleb Bettcher logo" width={40} height={40} className="rounded-xl" />
            <div className="leading-tight">
              <div className="text-base font-semibold text-fg">{site.name}</div>
              <div className="text-sm text-muted">{site.domain}</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {items.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-base text-muted hover:text-fg hover:underline underline-offset-4 hover:-translate-y-0.5 transition bg-transparent"
              >
                {i.label}
              </Link>
            ))}
            <div className="h-5 w-px bg-white/10 mx-1" />
            <Link href={site.links.linkedin} target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 hover:scale-110 transition bg-transparent">
              <Image src="/icons/linkedin.png" alt="LinkedIn" width={18} height={18} />
            </Link>
            <Link href={site.links.github} target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 hover:scale-110 transition invert bg-transparent">
              <Image src="/icons/github.png" alt="GitHub" width={18} height={18} />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-1.5 p-2 text-muted hover:text-fg transition"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-current transition-transform duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-current transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-current transition-transform duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>

        </div>
      </Container>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-white/8 bg-bg0/60 backdrop-blur-xl">
          <Container>
            <div className="py-4 flex flex-col gap-1">
              {items.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-muted hover:text-fg transition py-2 bg-transparent"
                >
                  {i.label}
                </Link>
              ))}
              <div className="mt-3 pt-3 border-t border-white/8 flex gap-4">
                <Link href={site.links.linkedin} target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 transition bg-transparent">
                  <Image src="/icons/linkedin.png" alt="LinkedIn" width={18} height={18} />
                </Link>
                <Link href={site.links.github} target="_blank" rel="noreferrer" className="opacity-70 hover:opacity-100 transition invert bg-transparent">
                  <Image src="/icons/github.png" alt="GitHub" width={18} height={18} />
                </Link>
              </div>
            </div>
          </Container>
        </div>
      )}
    </div>
  );
}