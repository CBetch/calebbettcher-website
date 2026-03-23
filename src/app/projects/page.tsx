import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/content/ProjectCard";
import AnimatedNeuralNetBackground from "@/components/backgrounds/AnimatedNeuralNetBackground";
import { projectCards } from "@/content/projects/projectCards";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Projects - Caleb Bettcher',
  description: 'My projects and technical work including my Machine Learning research and Quantitative Finance software engineering projects.',
}

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
          {projectCards.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </Container>
  );
}
