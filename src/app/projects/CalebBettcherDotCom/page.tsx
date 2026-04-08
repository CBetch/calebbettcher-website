import Container from "@/components/Container";
import ProjectShowcase from "@/components/content/ProjectShowcase";
import AnimatedNeuralNetBackground from "@/components/backgrounds/AnimatedNeuralNetBackground";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Project: calebbettcher.com - Caleb Bettcher',
  description: 'My personal website and portfolio build with react, next.js, and tailwind css.',
}

export default function CalebBettcherDotComPage() {
  return (
    <Container>
      <AnimatedNeuralNetBackground center={{ x: 0.5, y: 0.5 }} containRadius={500} />
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-0">
        {/* <HomepageBackground /> */}
        <ProjectShowcase
          eyebrow="This Website!"
          title="CalebBettcher.com"
          description={
            <>
              This personal portfolio was created to showcase projects not included on my resume, provide 
              additional detail on prior experiences, and practice deploying code in a practical setting. 
              I used modern frameworks including React, Next.js, and Tailwind CSS, and hosted the site on 
              Vercel with domain management through Cloudflare.
              <br/><br/>
              This project also demonstrates my ability to combine prior experience with modern AI tools 
              (mainly Claude and ChatGPT). For example, although I had not previously used Tailwind CSS at 
              scale, I applied existing knowledge to iteratively guide the models toward the final 
              implementation. As I developed new pages and expanded functionality, I directed coding practices 
              and codebase organization - all visible in the public GitHub repository.
              <br/><br/>
              The custom animated background was originally intended to represent a neural network (aligned 
              with my Artificial Intelligence and Machine Learning emphasis), but ended up resembling a 
              "constellation generator". Feel free to play around with it on the TechFlex page!
            </>
          }         
          tags={["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Web Development"]}
          links={[
            { label: "GitHub", href: "https://github.com/CBetch/calebbettcher-website" },
            { label: "TechFlex", href: "/projects/CalebBettcherDotCom/TechFlex" },
          ]}
        />
      </div>
    </Container>
  )
}