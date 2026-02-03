import Container from "@/components/Container";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <Container>
      <div className="pt-14">
        <SectionHeader
          eyebrow="About"
          title="Short, specific, human"
          subtitle="This is where you sound like a real person, not a LinkedIn template."
        />

        <div className="grid md:grid-cols-2 gap-5">
          <Card className="p-6">
            <div className="text-sm font-semibold text-fg">What I do</div>
            <p className="mt-2 text-sm text-muted">
              I build software systems and apply ML when it’s the right tool. I care about
              clear metrics, clean architecture, and shipping.
            </p>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold text-fg">What I like</div>
            <p className="mt-2 text-sm text-muted">
              Technical depth, sharp design, fast feedback loops, and projects with a point.
              Outside of work: climbing and staying active.
            </p>
          </Card>
        </div>
      </div>
    </Container>
  );
}
