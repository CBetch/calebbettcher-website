import Container from "@/components/Container";
import Button from "@/components/Button";
import ResumeDisplay from "@/components/content/ResumeDisplay";

export const metadata = {
  title: 'Resume — Caleb Bettcher',
  description: 'View and download the resume of Caleb Bettcher, quantitative software engineer and CS researcher.',
}

export default function ResumePage() {
  return (
    <Container>
      <div className="pt-8 pb-20">
        <div className="flex items-center justify-center gap-6 mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-fg leading-tight">Resume</h2>
          <div className="flex gap-3">
            <Button href="/resume.pdf">Download</Button>
            <Button href="/contact" variant="ghost">Contact</Button>
          </div>
        </div>
        <ResumeDisplay />
      </div>
    </Container>
  );
}