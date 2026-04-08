import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/content/ExperienceCard";
import Button from "@/components/Button";
import { education } from "@/content/education";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Education - Caleb Bettcher',
  description: 'My educational background and academic achievements.',
}

function formatDate(date: string) {
  const lines = date.split("\n");
  if (lines.length === 1) return <div className="text-center">{date}</div>;
  return (
    <div className="text-center">
      {lines.map((line, i) => (
        <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
      ))}
    </div>
  );
}

export default function EducationPage() {
  return (
    <Container>
      <div className="pt-8 pb-20 w-full md:w-2/3 mx-auto">
        <div className="grid gap-12 md:gap-40 items-center md:grid-cols-2">
          <SectionHeader eyebrow="Academics" title="Education" subtitle="" />
          <Button href="/experience">View Experience</Button>
        </div>

        <div className="flex flex-col gap-4">
          {education.map((edu) => (
            <ExperienceCard
              key={edu.title}
              title={edu.title}
              desc={edu.desc}
              img={edu.img}
              href={edu.href}
              date={formatDate(edu.date)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}