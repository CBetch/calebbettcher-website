import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ExperienceList from "@/components/content/ExperienceList";
import Button from "@/components/Button";
import { experiences } from "@/content/experience";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Experience - Caleb Bettcher',
  description: 'My professional experience and career achievements as a Quantitative Finance Software Engineer.',
}

export default function ExperiencePage() {
  return (
    <Container>
      <div className="pt-8 pb-20 w-full md:w-2/3 mx-auto">
        <div className="grid gap-12 md:gap-40 items-center md:grid-cols-2">
          <SectionHeader eyebrow="Work" title="Experience" subtitle="" />
          <Button href="/education">View Education</Button>
        </div>

        <ExperienceList entries={experiences} className="mb-16" />
      </div>
    </Container>
  );
}
