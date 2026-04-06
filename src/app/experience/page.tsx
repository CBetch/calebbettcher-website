import Container from "@/components/Container";
import SectionHeader from "@/components/SectionHeader";
import ExperienceCard from "@/components/content/ExperienceCard";
import AnimatedNeuralNetBackground from "@/components/backgrounds/AnimatedNeuralNetBackground";
import Button from "@/components/Button";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Experience - Caleb Bettcher',
  description: 'My professional experience and career achievements as a Quantitaive Finance Software Engineer.',
}

export default function ExperiencePage() {
  return (
    <Container>
      <div className="pt-8 pb-20 w-full md:w-2/3 mx-auto">
 
        {/* Work Experience */}
        <div className="grid gap-12 md:gap-40 items-center md:grid-cols-2">
        <SectionHeader
          eyebrow="Work"
          title="Experience"
          subtitle=""
        />
        <Button href="/education">View Education</Button>
        </div>

        <div className="flex flex-col gap-4 mb-16">
          <ExperienceCard
            href="https://www.belvederetrading.com/about"
            title="Belvedere Trading"
            desc="Quantitative Trading Software Development Intern"
            subdesc={<>
              • Upcoming Summer 2026 internship focused on software engineering in quantitative trading
              </>}
            img="/icons/belvedere.png"
            date={<div className="text-center">Summer 2026</div>}
          />
          <ExperienceCard
            href="/projects/LAIRresearch"
            title="University of Colorado Boulder - LAIR Research Lab"
            desc="Machine Learning Research"
            subdesc={<>
              • Developed software to generate datasets from multi-dimensional satellite data spanning over 6 years
              <div className="py-1"></div>
              • Trained and evaluated custom YOLO object-detection models in PyTorch to identify particle-precipitation event signatures in optimized plots of satellite data
              <div className="py-1"></div>
              • Investigated false positives/negatives and refined dataset labeling to improve model performance
              <div className="py-1"></div>
              • Leveraged university research HPC clusters for scalable model training and resource management
              <div className="py-1"></div>
              • Presented on the application and optimization of ML/AI to astrophysics at a national research conference
              </>}
            img="/icons/cu.png"
            date={<div className="text-center">Aug 2024 <br></br>-<br></br> May 2025</div>}
          />
          <ExperienceCard
            title="Handshake AI"
            desc="Fellowship"
            img="/icons/handshake.png"
            date={<div className="text-center">Aug 2025 <br></br>-<br></br> May 2026</div>}
            subdesc={<>
            • Design and implement structured, complex prompts in niche academic fields such as SAT/SMT 
            solvers and advanced algorithmic reasoning to evaluate and fine-tune Large Language Models
            <div className="py-1"></div>
            • Analyze and resolve internal model reasoning failures to improve reliability and 
            interpretability of AI systems
            <div className="py-1"></div>
            • Integrate feedback from leading AI research labs to iteratively improve workflow and 
            align with state of the art model training methodologies to incorporate described shortcomings
            </>}
          />
          <ExperienceCard
            href="https://www.paminga.com/"
            title="Paminga - Marketing Automation"
            desc="Full-Stack Web Development Intern"
            img="/icons/paminga.jpg"
            date={<div className="text-center">Summer 2023<br></br>&<br></br>Summer 2024</div>}
            subdesc={<>
            • Built React frontend and GraphQL backend features enabling customizable automated marketing 
            workflows and CRM integrations for 20,000+ active users
            <div className="py-1"></div>
            • Collaborated with developers to design, build, and implement user-customizable, automated 
            marketing actions
            <div className="py-1"></div>
            • Partnered with customer success team to handle inquiries and solve user issues
            <div className="py-1"></div>
            • Practiced my web-development skills while making this website!
            </>}
          />
        </div>
      </div>
    </Container>
  );
}