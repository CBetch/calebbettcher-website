import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/content/ProjectCard";
import AnimatedNeuralNetBackground from "@/components/backgrounds/AnimatedNeuralNetBackground";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <Container>
      <AnimatedNeuralNetBackground center={{ x: 0.55, y: 0.65 }} containRadius={450} />
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
