import Container from "@/components/Container";
import ProjectShowcase from "@/components/content/ProjectShowcase";
import AnimatedNeuralNetBackground from "@/components/backgrounds/AnimatedNeuralNetBackground";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Project: calebbettcher.com - Caleb Bettcher',
  description: 'My personal website and portfolio build with react, next.js, and tailwind css.',
}

export default function InheritanceCostPage() {
  return (
    <Container>
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-0">
        {/* <HomepageBackground /> */}
        <ProjectShowcase
          eyebrow="Performance Optimization Research"
          title="Quantification of the Abstraction Penalty"
          description={
            <>
              "Quantification of the Abstraction Penalty" is an empirical study by Kerem Gurkan and myself
              investigating the performance cost associated with object-oriented abstractions in the Java Virtual Machine. 
              Using the Java Microbenchmark Harness (JMH), the runtime impact of binding mechanisms and 
              inheritance depth across three distinct JVM tiers: standard JIT, inlining-disabled, and fully 
              interpreted mode were measured using AWS cloud hosting resources for controlled run-time environments. 
              <br/><br/>
              While the basic binding penalty remained a modest 20% under standard JIT, our research 
              identified a sharp "performance cliff" at inheritance depth 16 and beyond. At this threshold, the 
              JIT’s inlining budget becomes saturated, causing execution costs to spike as the compiler can no 
              longer devirtualize the call chain. In fully interpreted environments, these active super() 
              call chains added a linear 17 ns of latency per level, reaching an extreme 3,646% overhead at 
              depth 128 compared to a static baseline. This work provides a quantitative framework for 
              navigating the tradeoff between clean modular architecture and the nanosecond-level performance 
              requirements of low-latency systems.
            </>
          }         
          tags={["Performance Engineering", "Optimization", "Research", "AWS", "Java", "JVM", "JIT Compilation"]}          
          links={[
            { label: "Research Paper", href: "/projects/InheritanceCost/Quantification_of_the_Abstraction_Penalty.pdf" },
            { label: "GitHub", href: "https://github.com/CBetch/inheritance-cost-benchmark" },
          ]}
        />
      </div>
    </Container>
  )
}