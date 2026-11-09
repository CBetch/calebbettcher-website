export type ProjectCard = {
  slug: string;
  title: string;
  blurb: string;
  image?: string;
  featured?: boolean;
};

export const projectCards: ProjectCard[] = [
  {
    slug: "SurfaceEdge",
    title: "SurfaceEdge",
    blurb: "A novel approach to options contract pricing, built on a dataset of 200M+ contracts over 17 years. Achieved 7.9% improvement in MAE by encoding daily options volatility surfaces into RGB images, using a CNN to extract a context vector, and passing through a causal self-attention transformer.",
    image: "/icons/surfaceedge.png",
    featured: true
  },
  {
    slug: "LAIRresearch",
    title: "CU ML Research",
    blurb: "Machine learning classification of particle precipitation events across 6+ years of multi-dimensional data from the twin ELFIN satellites. Built custom Julia and Python data libraries to train a YOLOv8x model on university HPC clusters, reducing false positives by ~80%.",
    image: "/icons/cu.png",
    featured: true
  },
  {
    slug: "CUQuants",
    title: "CU Quants - Quant Trader",
    blurb: "Live market-making across 12 stablecoin instruments on Kraken US and OKX US. CU Boulder's student trading team maintained a 98.44% uptime across a 1–178 bps spread capture range, achieving 137.63% annualized returns.",
    image: "/icons/CUQuants.jpg",
    featured: true
  },
  {
    slug: "InheritanceCost",
    title: "The Cost of Abstraction",
    blurb: "An empirical study on the performance cost of abstraction in Java object-oriented systems. Explores performance benchmarks on various JVM configurations across abstraction levels using AWS computing and JIT performance analysis.",
    image: "/icons/java.png",
    featured: false
  },
  {
    slug: "CalebBettcherDotCom",
    title: "Personal Website",
    blurb: "A personal portfolio (this website!) built with React, Next.js, and Tailwind CSS, deployed on Vercel. An \"interactive resume\" built with modern code practices and a trial of AI-assisted coding on familiar territory from prior internship experiences.",
    image: "/images/CBlogo.png",
    featured: false
  }
];

export function getProject(slug: string) {
  return projectCards.find((project) => project.slug === slug);
}
