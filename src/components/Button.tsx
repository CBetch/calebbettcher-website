import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export default function Button({ href, children, variant = "primary" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-white/20";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-a/90 to-b/90 text-bg0 shadow-[0_12px_50px_rgba(80,220,255,.16)] hover:shadow-[0_14px_65px_rgba(170,110,255,.20)]"
      : "bg-white/5 text-fg border border-white/10 hover:bg-white/8";

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <Link
        className={`${base} ${styles}`}
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return <button className={`${base} ${styles}`}>{children}</button>;
}
