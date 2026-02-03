import Container from "@/components/Container";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <Container>
      <div className="pt-14">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s talk"
          subtitle="Email is best. Also on GitHub/LinkedIn."
        />

        <div className="grid md:grid-cols-3 gap-5">
          <Card className="p-6">
            <div className="text-sm font-semibold text-fg">Email</div>
            <a className="mt-2 block text-sm text-muted hover:text-fg transition" href={site.links.email}>
              {site.links.email.replace("mailto:", "")}
            </a>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold text-fg">GitHub</div>
            <a className="mt-2 block text-sm text-muted hover:text-fg transition" href={site.links.github} target="_blank" rel="noreferrer">
              {site.links.github}
            </a>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold text-fg">LinkedIn</div>
            <a className="mt-2 block text-sm text-muted hover:text-fg transition" href={site.links.linkedin} target="_blank" rel="noreferrer">
              {site.links.linkedin}
            </a>
          </Card>
        </div>
      </div>
    </Container>
  );
}
