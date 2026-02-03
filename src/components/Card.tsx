import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl bg-bg1/35 backdrop-blur-xl border border-white/10",
        "shadow-[0_20px_80px_rgba(0,0,0,.45)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
