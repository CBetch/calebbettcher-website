export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  image?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "LAIRresearch",
    title: "Undergraduate Research",
    blurb: "Classification of Particle Precipitation Events",
    tags: ["Python", "Machine Learning", "Computer Vision", "Distributed Training"],
    image: "/icons/cu.png",
    featured: true
  },
  {
    slug: "featured-project-2",
    title: "Featured Project 2",
    blurb: "Coming soon...",
    tags: [],
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
  return projects.find((p) => p.slug === slug);
}
