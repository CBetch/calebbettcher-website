import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ProjectShowcase from "@/components/content/ProjectShowcase";
import Card from "@/components/Card";
import Button from "@/components/Button";
import HomepageBackground from "@/components/backgrounds/HomepageBackground";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About - Caleb Bettcher',
  description: 'QuantFi Software Engineer, Researcher, AI Engineer, & Triathlete working towards a Computer Science Master’s degree from Cornell.',
}

const skills = {
  "Languages": ["Python", "JavaScript", "C++", "SQL"],
  "ML / Data": ["PyTorch", "NumPy", "Pandas", "SLURM"],
  "Web & Infra": ["React", "Next.js", "Docker", "Git"],
  "Finance / Quant": ["Algorithmic Trading", "Stocks", "Options Pricing", "Data Analysis"],
};

export default function AboutPage() {
  return (
    <Container>
      <HomepageBackground />
      <ProjectShowcase
        eyebrow=""
        title="About Me 👋"
        description={
          <>
          QuantFi Software Engineer, Researcher, AI Engineer, & Triathlete
          <br /><br />
          Hey there, I’m Caleb. I love Computers, Finances, Math, and solving complex problems. I recently 
          earned my BS in Computer Science from the University of Colorado Boulder and currently work as 
          a software engineering intern at Belvedere Trading in Boulder. From fall 2026 through spring 
          2027, I’ll be pursuing a Master’s degree in CS, and I’m currently deciding between a couple of 
          top choices. While my family is from Colorado, I plan to travel wherever opportunity takes me 
          after graduating.
          <br /><br />
          My academic and professional work revolves around AI and data: building predictive models, 
          experimenting with reinforcement learning, and exploring data-driven strategies in finance. 
          Working with AI and satellite data during my undergraduate research opened my eyes to the 
          possibilities of this new technology, and I’m eager to leverage it in quantitative and applied 
          settings. I’m ready to apply my skills to real-world products that push both my analytical and 
          creative abilities. 
          <br /><br />
          </>
        }
        image="/images/portrait.jpg"
        imageAlt="Caleb Bettcher"
      />

      {/* ── Section 3: Outside of Code ──────────────────────── */}
      <ProjectShowcase
        eyebrow="Outside of Code"
        title="Athlete, Coloradan, Lifelong Learner"
        description={
          <>
          When I’m not coding or toying with AI models, I’m an avid triathlete. I’ll be racing my first 
          half-ironman (1.2 mile swim, 56 mile bike, 13.1 mile run) this June. I also enjoy skiing, 
          climbing, audiobooks, and constantly eating food with Tuna nigiri being my all-time favorite; 
          the best piece I’ve ever had during a trip to Nachikatsuura, Japan. Endurance sports have shaped 
          my day-to-day approach to life, teaching me to balance a rigorous training schedule with an even 
          more intense discipline for my professional goals. I'm always open to projects, collaborations, 
          or opportunities. Shoot me an email at calebbettcher@gmail.com
          </>
        }
        tags={["Triathlete", "Skier", "Coloradan", "Amatuer Stock Trader", "\"Cool Nerd\""]}
      />

      {/* ── Skills Grid ─────────────────────────────────────── */}
      <div className="mt-6">
        <SectionHeader
          eyebrow="Skills"
          title="Languages & Technologies"
          subtitle="My skillset build up over Internships, Research and Projects"
        />
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(skills).map(([category, items]) => (
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

      {/* ── CTA ─────────────────────────────────────────────── */}
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href="/contact">Get in Touch</Button>
        <Button href="/experience" variant="ghost">View Experience</Button>
        <Button href="/projects" variant="ghost">Browse Projects</Button>
      </div>
    </Container>
  );
}