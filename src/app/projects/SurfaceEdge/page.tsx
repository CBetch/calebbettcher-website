import Container from "@/components/Container";
import ProjectShowcase from "@/components/content/ProjectShowcase";

import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'SurfaceEdge: CNN Options Pricing Model - Caleb Bettcher',
  description: 'SurfaceEdge - a novel multimodal deep learning model predicting next-day options price changes from options surface images.',
}

export default function SurfaceEdgePage() {
  return (
    <Container>
      <div className="min-h-[calc(100vh-80px)] flex flex-col justify-center py-0">
        <ProjectShowcase
          eyebrow="Caleb Bettcher & Troy Arthur — University of Colorado Boulder"
          title="SurfaceEdge - Options Pricing with Novel CNN"
          description={
            <>
              SurfaceEdge is a novel multimodal deep learning pipeline for predicting
              next-day options contract price changes. Existing approaches treat each
              contract in isolation using scalar features, or apply LSTMs for time-series
              dynamics. Neither approach leverages the full spatial structure of the options surface.
              SurfaceEdge addresses this by encoding each day's options chain as an 60x30 RGB
              image (implied volatility, open interest, volume) and passing it through a
              CNN backbone, fused with contract-level scalar inputs.
              <br /><br />
              Built on a dataset of 200M+ labeled contracts spanning 17 years across 104
              U.S. equity tickers, we designed and compared three architectures: a baseline
              multimodal CNN, a deep residual variant, and a causal self-attention transformer
              that models price history as a sequence prediction problem, similar to
              next-token prediction in LLMs. The transformer finished as our top model,
              achieving a 7.9% improvement in MAE over the naive baseline.
              <br /><br />
              This project extended my prior computer vision research with CU as an RA,
              applying CNN-based image recognition to a quantitative finance problem and
              combining it with the market intuition developed through my work on
              the CU Quants trading fund.
            </>
          }
          tags={["Deep Learning", "Computer Vision", "CNN", "Transformers", "Options Pricing", "Quantitative Finance", "PyTorch", "Python"]}
          pdf="/projects/SurfaceEdge/Poster.pdf"
          links={[
            { label: "Research Poster", href: "/projects/SurfaceEdge/Poster.pdf" },
            { label: "Presentation", href: "/projects/SurfaceEdge/Presentation.pdf" },
            // { label: "Report", href: "/projects/SurfaceEdge/ LINK .pdf" },
            // { label: "GitHub", href: "/projects/SurfaceEdge/ LINK .pdf" },
          ]}
        />
      </div>
    </Container>
  )
}