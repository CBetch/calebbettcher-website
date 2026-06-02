export type ProjectCard = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  image?: string;
  featured?: boolean;
};

export const projectCards: ProjectCard[] = [
  {
    slug: "CUQuants",
    title: "CU Quants - Quant Trader",
    blurb: "My Work on CU Quant's Trading Team",
    tags: ["Quantitative Finance", "Market Making", "Cryptocurrency", "Real-Time Systems"],
    image: "/icons/CUQuants.jpg",
    featured: false
  },
  {
    slug: "SurfaceEdge",
    title: "SurfaceEdge",
    blurb: "CNN Options Pricing from Surface Images",
    tags: ["Deep Learning", "Computer Vision", "Options Pricing", "Transformers"],
    featured: true
  },
  {
    slug: "LAIRresearch",
    title: "ML Research",
    blurb: "Classification of Particle Precipitation Events",
    tags: ["Python", "Machine Learning", "Computer Vision", "Distributed Training"],
    image: "/icons/cu.png",
    featured: true
  },
  {
    slug: "InheritanceCost",
    title: "The Cost of Abstraction",
    blurb: "An empirical study on the performance cost of abstraction in object-oriented systems",
    tags: ["Performance Engineering", "Optimization", "Research", "AWS", "Java"],
    featured: true
  },
  {
    slug: "CalebBettcherDotCom",
    title: "Personal Website",
    blurb: "This website! built with Next.js and React, deployed on Vercel.",
    tags: ["React", "Next.js", "TypeScript", "Vercel", "Web Development"],
    image: "/images/CBlogo.png",
    featured: false
  }
];

export function getProject(slug: string) {
  return projectCards.find((project) => project.slug === slug);
}
