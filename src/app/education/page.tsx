import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/content/ExperienceCard";
import AnimatedNeuralNetBackground from "@/components/backgrounds/AnimatedNeuralNetBackground";
import Button from "@/components/Button";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Education - Caleb Bettcher',
  description: 'My educational background and academic achievements.',
}

export default function EducationPage() {
  return (
    <Container>
      <div className="pt-8 pb-20 w-full md:w-2/3 mx-auto">
        {/* Education */}
        <div className="grid gap-12 md:gap-40 items-center md:grid-cols-2">
        <SectionHeader
          eyebrow="Academics"
          title="Education"
          subtitle=""
        />
        <Button href="/experience">View Experience</Button>
        </div>

        <div className="flex flex-col gap-4">
          <ExperienceCard
            title="Cornell University"
            desc="MEng Computer Science"
            img="/icons/cornell.png"
            date={<div className="text-center">Aug 2026<br></br>-<br></br>May 2027</div>}
          />
          <ExperienceCard
            title="University of Colorado Boulder"
            desc="B.S. Computer Science"
            img="/icons/cu.png"
            date={<div className="text-center">Aug 2023<br></br>-<br></br>May 2026</div>}
          />
        </div>
 
      </div>
    </Container>
  );
}
