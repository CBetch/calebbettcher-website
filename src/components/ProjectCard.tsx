import Link from "next/link";
import Card from "./Card";
import type { Project } from "@/content/projects";

export default function ProjectCard({ p }: { p: Project }) {
  const inner = (
    <Card
      className={[
        "p-6 hover:translate-y-[-2px] transition",
        "hover:border-white/16",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold text-fg">{p.title}</div>
          <p className="mt-2 text-sm text-muted">{p.blurb}</p>
        </div>
        <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-a/25 via-b/20 to-white/5 border border-white/10" />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="text-xs text-fg/90 bg-white/5 border border-white/10 rounded-full px-3 py-1"
          >
            {t}
          </span>
        ))}
      </div>
    </Card>
  );

  return (
    <Link href={`/projects/${p.slug}`} className="block">
      {inner}
    </Link>
  );
}
