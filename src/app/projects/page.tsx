import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/content/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <Container>
      {/* <HomepageBackground /> */}
      <div className="pt-8">
        <SectionHeader
          eyebrow=""
          title="Projects"
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
