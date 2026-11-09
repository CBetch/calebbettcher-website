import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ExperienceList from "@/components/content/ExperienceList";
import Button from "@/components/Button";
import { education } from "@/content/education";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Education - Caleb Bettcher',
  description: 'My educational background and academic achievements.',
}

export default function EducationPage() {
  return (
    <Container>
      <div className="pt-8 pb-20 w-full md:w-2/3 mx-auto">
        <div className="grid gap-12 md:gap-40 items-center md:grid-cols-2">
          <SectionHeader eyebrow="Academics" title="Education" subtitle="" />
          <Button href="/experience">View Experience</Button>
        </div>

        <ExperienceList entries={education} />
      </div>
    </Container>
  );
}
