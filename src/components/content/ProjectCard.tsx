import Link from "next/link";
import Image from "next/image";
import Card from "../Card";
import type { Project } from "@/content/projects";

export default function ProjectCard({ p }: { p: Project }) {
  const inner = (
    <Card
      className={[
        "p-6 h-[200px] flex flex-col justify-between hover:translate-y-[-2px] transition",
        "hover:border-white/16",
      ].join(" ")}
    >
      {/* Top row: title + image thumbnail */}
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-lg font-semibold text-fg">{p.title}</div>
          <p className="mt-2 text-sm text-muted line-clamp-2">{p.blurb}</p>
        </div>

        {/* Corner image — only shown if provided */}
        {p.image && (
          <div className="shrink-0 h-12 w-12 rounded-xl overflow-hidden">
            <Image
              src={p.image}
              alt={p.title}
              width={48}
              height={48}
              className="object-cover w-full h-full opacity-80"
            />
          </div>
        )}
      </div>

      {/* Tags pinned to bottom */}
      <div className="flex flex-wrap gap-2 mt-3">
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