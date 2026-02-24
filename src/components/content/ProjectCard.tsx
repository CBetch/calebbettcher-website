import Link from "next/link";
import Image from "next/image";
import Card from "../Card";
import type { ProjectCard } from "@/content/projects/projectCards";

export default function ProjectCard({ project }: { project: ProjectCard }) {
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
          <div className="text-lg font-semibold text-fg">{project.title}</div>
          <p className="mt-2 text-sm text-muted line-clamp-2">{project.blurb}</p>
        </div>

        {/* Corner image — only shown if provided */}
        {project.image && (
          <div className="shrink-0 h-12 w-12 rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={48}
              height={48}
              className="object-cover w-full h-full opacity-80"
            />
          </div>
        )}
      </div>

      {/* Tags pinned to bottom */}
      <div className="flex flex-wrap gap-2 mt-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs text-fg/90 bg-white/5 border border-white/10 rounded-full px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </Card>
  );

  return (
    <Link href={`/projects/${project.slug}`} className="block bg-transparent">
      {inner}
    </Link>
  );
}