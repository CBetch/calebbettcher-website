import Container from "@/components/Container";
import ProjectShowcase from "@/components/content/ProjectShowcase";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'CU Quants: Quantitative Trader - Caleb Bettcher',
  description: 'My work as a Quantitative Trader at CU Quants, the University of Colorado Boulder\'s student-run quantitative trading fund.',
}

export default function CUQuantsPage() {
  return (
    <Container>
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-0">
        {/* <HomepageBackground /> */}
        <ProjectShowcase
          eyebrow="University of Colorado Boulder - Quantitative Trading Team"
          title="CU Quants - Trading Team"
          description={
            <>
              CU Quants is the University of Colorado Boulder's student-run quantitative
              finance club. Its live trading fund — split into Trading, Research, Risk
              Management, and Engineering teams — operates with the rigor of a professional
              firm. During treks to quant firms with Boulder offices such as Belvedere
              Trading, we were told the fund runs more like a real company than a student
              club. Since May 2025, the fund has achieved 137.63% annualized returns.
              <br /><br />
              As a member of the Trading team, I was primarily responsible for monitoring
              systems during trading hours, making real-time decisions during periods of
              unexpected market movement, and helping expand our proprietary infrastructure: namely a
              real-time trading dashboard and a custom asset allocation engine ensuring
              optimal supply and demand balance between exchanges. Across 12 instruments on
              Kraken US and OKX US, I helped maintain 98.44% system uptime with spread
              capture ranging from 1 to 178 basis points, and helped prepare our systems
              for expansion onto Gemini US.
              <br /><br />
              As a final sendoff before graduating, I put together a workshop for the
              Trading team on determining the intrinsic value of options contracts. The
              presentation walks through various strategies of increasing complexity, providing
              real-world examples. My favorite section describes a scenario where an uncovered call
              on NVDA is sold right before the stock doubles, illustrating theoretically unlimited 
              loss exposure.
            </>
          }         
          tags={["Quantitative Finance", "Market Making", "Cryptocurrency", "Python", "Real-Time Systems", "Risk Management"]}
          pdf="/projects/CUQuants/Options_Presentation.pdf"
          links={[
            { label: "Intrinsic Value Presentation", href: "/projects/CUQuants/Options_Presentation.pdf" },
            { label: "Q1 2026 Fund Performance", href: "/projects/CUQuants/Fund_Performance_Q1_2026.pdf" }
          ]}
        />
      </div>
    </Container>
  )
}