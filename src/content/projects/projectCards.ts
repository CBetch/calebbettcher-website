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
    slug: "LAIRresearch",
    title: "ML Research",
    blurb: "Classification of Particle Precipitation Events",
    tags: ["Python", "Machine Learning", "Computer Vision", "Distributed Training"],
    image: "/icons/cu.png",
    featured: true
  },
  {
    slug: "CalebBettcherDotCom",
    title: "Personal Website",
    blurb: "This Website!",
    tags: ["React", "Next.js", "TypeScript", "Vercel", "Web Development"],
    image: "/images/CBlogo.png",
    featured: true
  },
  {
    slug: "featured-project-3",
    title: "Featured Project 3",
    blurb: "Coming soon...",
    tags: [],
    featured: true
  },
  {
    slug: "non-featured-project-1",
    title: "Non-Featured Project 1",
    blurb: "Coming soon...",
    tags: [],
    featured: true
  },
];

export function getProject(slug: string) {
  return projectCards.find((project) => project.slug === slug);
}
