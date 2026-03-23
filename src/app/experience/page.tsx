import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Experience - Caleb Bettcher',
  description: 'My professional experience and career achievements as a Quantitaive Finance Software Engineer.',
}

export default function ExperiencePage() {
  return (
    <Container>
      <div className="pt-14">
        <SectionHeader
          eyebrow="Experience"
          title="Experience"
          subtitle="This is where I'll showcase my Experience. Might look like the projects page?"
        />
      </div>
    </Container>
  );
}
