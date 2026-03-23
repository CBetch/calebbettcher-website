import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/content/ProjectCard";
import ExperienceCard from "@/components/content/ExperienceCard";
import { projectCards } from "@/content/projects/projectCards";
import AnimatedNeuralNetBackground from "@/components/backgrounds/AnimatedNeuralNetBackground";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Caleb Bettcher',
  description: 'Computer science researcher and software engineer focused on machine learning systems, scientific data analysis, and quantitative finance applications.',
}

export default function Home() {
  const featured = [...projectCards]
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
    .slice(0, 3);

  return (
    <Container>
      <div className="pt-7 md:pt-6">
        <AnimatedNeuralNetBackground center={{ x: 0.25, y: 0.55 }} containRadius={500} node_count={50} />

        <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-start">
          {/* Left column */}
          <div className="min-w-0">
            <div className="mt-10 md:mt-[70px] flex flex-col items-center text-center">
              <h1 className="text-5xl md:text-[3.25rem] font-semibold leading-tight text-fg">
                Caleb Bettcher
              </h1>
              <div className="mt-8 flex gap-3 w-full [&>*]:flex-1">
                <Button href="/resume">Resume</Button>
                <Button href="/projects" variant="ghost">Projects</Button>
                <Button href="/contact" variant="ghost">Contact</Button>
              </div>

              <div className="mt-10 w-full text-left">
                <Link href="/about" className="block group">
                  <Card className="p-6 group-hover:border-white/20 group-hover:bg-white/8 transition">
                    <div className="text-xs text-muted uppercase tracking-wide mb-3">About Me</div>
                    <div className="text-sm text-fg/80 leading-relaxed space-y-2">
                      <p>ML Systems | High-Performance Software</p>
                      <p>Computer science researcher and software engineer focused on machine learning systems, scientific data analysis, and quantitative finance applications.</p>
                    </div>
                  </Card>
                </Link>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="min-w-0 md:-mr-10">
            <div className="mt-6 grid gap-6 w-full">
              <ExperienceCard
                href="https://www.belvederetrading.com/about"
                title="Belvedere Trading"
                desc="Quantitative Trading Software Development Intern"
                img="/icons/belvedere.png"
              />
              <ExperienceCard
                href="/education"
                title="Education - University of Colorado Boulder"
                desc="M.S. Computer Science"
                img="/icons/cu.png"
              />
              <ExperienceCard
                href="/projects/LAIRresearch"
                title="Machine Learning Research"
                desc="Classification of High-Energy Particle Precipitation Events Using Computer Vision"
                img="/icons/cu.png"
              />
              <ExperienceCard
                href="/resume"
                title="Handshake AI"
                desc="Fellowship - Page coming soon..."
                img="/icons/handshake.png"
              />
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-4 md:mt-8">
          <SectionHeader
            eyebrow="Projects"
            title="My Best Work"
            subtitle="A select few of my favorite projects that I've recently worked on!"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-8">
            <Button href="/projects">See all projects</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}