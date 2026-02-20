import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

export default function EducationPage() {
  return (
    <Container>
      <div className="pt-14">
        <SectionHeader
          eyebrow="Education"
          title="Education"
          subtitle="This is where I'll showcase my education. May or may not be accessible from the header?"
        />
      </div>
    </Container>
  );
}
