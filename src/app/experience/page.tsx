import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/content/ExperienceCard";
import Button from "@/components/Button";
import { experiences } from "@/content/experience";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Experience - Caleb Bettcher',
  description: 'My professional experience and career achievements as a Quantitative Finance Software Engineer.',
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

function formatBullets(bullets: string[]) {
  return (
    <>
      {bullets.map((b, i) => (
        <span key={i}>
          • {b}
          {i < bullets.length - 1 && <><div className="py-1" /></>}
        </span>
      ))}
    </>
  );
}

export default function ExperiencePage() {
  return (
    <Container>
      <div className="pt-8 pb-20 w-full md:w-2/3 mx-auto">
        <div className="grid gap-12 md:gap-40 items-center md:grid-cols-2">
          <SectionHeader eyebrow="Work" title="Experience" subtitle="" />
          <Button href="/education">View Education</Button>
        </div>

        <div className="flex flex-col gap-4 mb-16">
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.title}
              title={exp.title}
              desc={exp.desc}
              img={exp.img}
              href={exp.href}
              hrefLabel={exp.hrefLabel}
              date={formatDate(exp.date)}
              subdesc={exp.bullets ? formatBullets(exp.bullets) : undefined}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}