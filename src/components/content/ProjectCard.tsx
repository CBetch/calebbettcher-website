import Link from "next/link";
import Image from "next/image";
import Card from "../Card";
import type { ProjectCard } from "@/content/projects/projectCards";

export default function ProjectCard({ project }: { project: ProjectCard }) {
  return (
    <Link href={`/projects/${project.slug}`} className="block h-full bg-transparent">
      <Card className="p-6 h-full flex flex-col hover:translate-y-[-2px] hover:border-white/16 transition">
        {/* Title + optional thumbnail */}
        <div className="flex items-center justify-between gap-4 min-h-12">
          <div className="min-w-0 text-lg font-semibold text-fg">{project.title}</div>
          {project.image && (
            <div className="shrink-0 h-12 w-12 rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt=""
                width={48}
                height={48}
                className="object-cover w-full h-full opacity-80"
              />
            </div>
          )}
        </div>

        <p className="mt-3 text-xs text-muted leading-normal">{project.blurb}</p>
      </Card>
    </Link>
  );
}
