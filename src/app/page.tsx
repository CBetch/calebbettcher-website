import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import { projects } from "@/content/projects";
import HomepageBackground from "@/components/HomepageBackground";

export default function Home() {
  const featured = [...projects]
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
    .slice(0, 3);

  return (
    <Container>
      <div className="pt-7 md:pt-10">
        <HomepageBackground />

        {/* Hero */}
        <div className="grid md:grid-cols-[2fr_3fr] gap-10 items-start">
          {/* Left column */}
          <div className="min-w-0">
            <div className="mt-10 md:mt-[120px]">
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-fg">
                Caleb Bettcher
              </h1>
              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                <Button href="/projects">View projects</Button>
                <Button href="/resume" variant="ghost">
                  Resume
                </Button>
                <Button href="/contact" variant="ghost">
                  Contact
                </Button>
              </div>

              <div className="mt-10">
                <Card className="p-6">
                  <div className="text-xs text-muted uppercase tracking-wide mb-3">About Me</div>
                  <div className="text-sm text-fg/80 leading-relaxed space-y-2">
                    <p><span className="font-semibold text-fg">Focus:</span> ML + Systems</p>
                    <p><span className="font-semibold text-fg">Work style:</span> Ship → measure → iterate</p>
                    <p><span className="font-semibold text-fg">Outside work:</span> Competitive climbing</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="min-w-0 md:-mr-10">
            <div className="mt-6 grid gap-6 w-full">
              <ExperienceCard
                href="/resume"
                title="Internship"
                desc="More whatever"
                img="/icons/belvedere.png"
              />
              <ExperienceCard
                href="/resume"
                title="School"
                desc="Whatever"
                img="/icons/cornell.png"
              />
              <ExperienceCard
                href="/resume"
                title="Research"
                desc="Machine learning, idk"
                img="/icons/cu.png"
              />
              <ExperienceCard
                href="/resume"
                title="Fellowship"
                desc="idk"
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
            subtitle="A select few of of my favorite projects that I've recently worked on!"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>

          <div className="mt-8">
            <Button href="/projects" variant="ghost">
              See all projects
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}