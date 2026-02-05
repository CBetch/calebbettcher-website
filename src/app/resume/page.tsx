import Container from "@/components/Container";
import Card from "@/components/Card";
import Button from "@/components/Button";
import ResumeBackground from "@/components/ResumeBackground";

export default function ResumePage() {
  return (
    <Container>
      <ResumeBackground />
      <div className="pt-8">
        <div className="flex items-center gap-6 mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-fg">
            Resume
          </h2>
          <div className="flex gap-3">
            <Button href="/resume.pdf">Download</Button>
            <Button href="/contact" variant="ghost">Contact</Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <div className="h-[140vh] w-full">
            <iframe
              src="/resume.pdf"
              className="h-full w-full"
              title="Resume PDF"
            />
          </div>
        </Card>
      </div>
    </Container>
  );
}