import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProjectShowcase from "@/components/content/ProjectShowcase";
import Card from "@/components/Card";
import Button from "@/components/Button";
import HomepageBackground from "@/components/backgrounds/HomepageBackground";
import { about } from "@/content/about";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About - Caleb Bettcher',
  description: 'QuantFi Software Engineer, Researcher, AI Engineer, & Triathlete working towards a Computer Science Master\'s degree from Cornell.',
}

export default function AboutPage() {
  const heroParagraphs = about.hero.bio.split("\n\n");

  return (
    <Container>
      <HomepageBackground />
      <ProjectShowcase
        eyebrow=""
        title={about.hero.title}
        description={
          <>
            {heroParagraphs.map((p, i) => (
              <span key={i}>{p}{i < heroParagraphs.length - 1 && <><br /><br /></>}</span>
            ))}
          </>
        }
        image={about.hero.image}
        imageAlt={about.hero.imageAlt}
      />

      <ProjectShowcase
        eyebrow={about.outside.eyebrow}
        title={about.outside.title}
        description={about.outside.body}
        tags={about.outside.tags}
      />

      {/* Skills Grid */}
      <div className="mt-6">
        <SectionHeader
          eyebrow={about.skills.eyebrow}
          title={about.skills.title}
          subtitle={about.skills.subtitle}
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(about.skills.categories).map(([category, items]) => (
            <Card key={category} className="p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-muted mb-3">
                {category}
              </div>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-sm text-fg/80 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/30 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/contact">Get in Touch</Button>
        <Button href="/experience" variant="ghost">View Experience</Button>
        <Button href="/projects" variant="ghost">Browse Projects</Button>
      </div>
    </Container>
  );
}