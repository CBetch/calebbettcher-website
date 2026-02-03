import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { getProject, projects } from "@/content/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) return notFound();

  return (
    <Container>
      <div className="pt-14">
        <div className="text-xs uppercase tracking-[0.25em] text-muted">Project</div>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-fg">{p.title}</h1>
        <p className="mt-3 text-muted max-w-2xl">{p.blurb}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-xs text-fg/90 bg-white/5 border border-white/10 rounded-full px-3 py-1"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {p.links?.github ? <Button href={p.links.github} variant="ghost">GitHub</Button> : null}
          {p.links?.demo ? <Button href={p.links.demo} variant="ghost">Live demo</Button> : null}
          {p.links?.writeup ? <Button href={p.links.writeup} variant="ghost">Write-up</Button> : null}
          <Button href="/projects">Back to projects</Button>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <Card className="p-6">
            <div className="text-sm font-semibold text-fg">Problem</div>
            <p className="mt-2 text-sm text-muted">{p.body.problem}</p>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold text-fg">Approach</div>
            <p className="mt-2 text-sm text-muted">{p.body.approach}</p>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold text-fg">Results</div>
            <p className="mt-2 text-sm text-muted">{p.body.results}</p>
          </Card>
          <Card className="p-6">
            <div className="text-sm font-semibold text-fg">Next</div>
            <p className="mt-2 text-sm text-muted">{p.body.next}</p>
          </Card>
        </div>
      </div>
    </Container>
  );
}
