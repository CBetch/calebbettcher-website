import ExperienceCard from "@/components/content/ExperienceCard";
import type { ExperienceEntry } from "@/content/experience";

export default function ExperienceList({
  entries,
  className = "",
}: {
  entries: ExperienceEntry[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {entries.map((entry) => (
        <ExperienceCard key={entry.title} {...entry} />
      ))}
    </div>
  );
}
