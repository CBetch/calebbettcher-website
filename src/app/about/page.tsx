import Container from "@/components/Container";
import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPage() {
  return (
    <Container>
      <div className="pt-14">
        <SectionHeader
          eyebrow="About"
          title="About Me"
          subtitle="This is where I'll write a little bit about me! Right now, there's a lot of placeholder text so this website doesn't look totally AI generated."
        />

        <div className="grid md:grid-cols-2 gap-5">
          <Card className="p-6">
            <div className="text-sm font-semibold text-fg">What I do</div>
            <p className="mt-2 text-sm text-muted">
              I'm a 20 year old senior in my CS undergraduate degree, athlete, incoming grad student, and aspiring AI/ML engineer looking to break into the financial industry!
            </p>
          </Card>

          <Card className="p-6">
            <div className="text-sm font-semibold text-fg">What I like</div>
            <p className="mt-2 text-sm text-muted">
              Skiing, Triathlons, Coding (sometimes), AI, Stocks, and Coffee
            </p>
          </Card>
        </div>
      </div>
    </Container>
  );
}
