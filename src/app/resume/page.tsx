import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";

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

        <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,.5)]">
          <Image
            src="/resume.jpg"
            alt="Caleb Bettcher Resume"
            width={1200}
            height={1553}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </Container>
  );
}