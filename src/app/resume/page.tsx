import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import SectionHeader from "@/components/SectionHeader";

export default function ResumePage() {
  return (
    <Container>
      <div className="pt-14">
        <SectionHeader
          eyebrow="Resume"
          title="Resume PDF"
          subtitle="Embedded for viewing, one-click download."
        />

        <div className="flex gap-3 mb-5">
          <Button href="/resume.pdf">Download</Button>
          <Button href="/contact" variant="ghost">Contact</Button>
        </div>

        <Card className="overflow-hidden">
          <div className="h-[75vh] w-full">
            <iframe
              src="/resume.pdf"
              className="h-full w-full"
              title="Resume PDF"
            />
          </div>
        </Card>

        <p className="mt-4 text-sm text-muted">
          Put your PDF at <span className="text-fg">/public/resume.pdf</span>.
        </p>
      </div>
    </Container>
  );
}
