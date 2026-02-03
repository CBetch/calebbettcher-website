import Container from "@/components/Container";
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import ResumePage from "./resume/page";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";

export default function Home() {
  const featured = [...projects].sort((a, b) => Number(!!b.featured) - Number(!!a.featured)).slice(0, 3);
  return (
    // Temp: show resume page directly instead of AI generated content (since it's live :P)
    <Container>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button href="/projects">View projects</Button>
        <Button href="/resume" variant="ghost">Resume</Button>
        <Button href="/contact" variant="ghost">Contact</Button>
      </div>
      <ResumePage/>
    </Container>
  )


  return (
    <Container>
      <div className="pt-14 md:pt-20">
        {/* Hero */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-xs text-muted">
              <span className="h-2 w-2 rounded-full bg-a/80 shadow-[0_0_20px_rgba(80,220,255,.45)]" />
              Tech-premium portfolio • Projects • Resume • Contact
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight text-fg">
              I build practical systems with an ML edge.
            </h1>

            <p className="mt-4 text-base md:text-lg text-muted max-w-xl">
              {site.tagline}. Clean, measurable work—presented with taste.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/projects">View projects</Button>
              <Button href="/resume" variant="ghost">Resume</Button>
              <Button href="/contact" variant="ghost">Contact</Button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
              {[
                { k: "Focus", v: "ML + Systems" },
                { k: "Style", v: "Clean + Fast" },
                { k: "Signal", v: "Results first" },
              ].map((x) => (
                <Card key={x.k} className="p-4">
                  <div className="text-xs text-muted">{x.k}</div>
                  <div className="mt-1 text-sm font-semibold text-fg">{x.v}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="rounded-2xl p-[1px] bg-gradient-to-r from-a/50 via-b/35 to-white/10 shadow-[0_0_80px_rgba(80,220,255,.10)]">
              <Card className="p-6">
                <div className="text-xs uppercase tracking-[0.25em] text-muted">
                  Featured
                </div>
                <div className="mt-3 text-xl font-semibold text-fg">
                  A portfolio that feels premium.
                </div>
                <p className="mt-2 text-sm text-muted">
                  Strong typography, calm spacing, and subtle glow. Not a template vibe.
                </p>

                <div className="mt-6 space-y-3 text-sm text-muted">
                  <div className="flex items-center justify-between border border-white/10 bg-white/5 rounded-xl px-4 py-3">
                    <span>Projects with outcomes</span>
                    <span className="text-fg">→</span>
                  </div>
                  <div className="flex items-center justify-between border border-white/10 bg-white/5 rounded-xl px-4 py-3">
                    <span>Resume hosted cleanly</span>
                    <span className="text-fg">→</span>
                  </div>
                  <div className="flex items-center justify-between border border-white/10 bg-white/5 rounded-xl px-4 py-3">
                    <span>Fast deploy to your domain</span>
                    <span className="text-fg">→</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16 md:mt-20">
          <SectionHeader
            eyebrow="Work"
            title="Selected projects"
            subtitle="A few builds with a clear point, a clean approach, and measurable progress."
          />
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((p) => (
              <ProjectCard key={p.slug} p={p} />
            ))}
          </div>

          <div className="mt-8">
            <Button href="/projects" variant="ghost">See all projects</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
