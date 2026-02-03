import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <div className="pt-14">
        <SectionHeader
          eyebrow="Projects"
          title="Coming soon!"
        />
      </div>
    </Container>
  )

  return (
    <Container>
      <div className="pt-14">
        <SectionHeader
          eyebrow="Projects"
          title="What I’ve built"
          subtitle="Short, scannable project pages with problem → approach → results."
        />
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((p) => (
            <ProjectCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </Container>
  );
}
