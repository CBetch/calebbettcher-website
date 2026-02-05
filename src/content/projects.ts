export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "featured-project-1",
    title: "Featured Project 1",
    blurb: "Coming soon...",
    tags: ["tag1", "tag2", "tag3"],
    featured: true
  },
  {
    slug: "featured-project-2",
    title: "Featured Project 2",
    blurb: "Coming soon...",
    tags: ["tag1", "tag2", "tag3"],
    featured: true
  },
  {
    slug: "featured-project-3",
    title: "Featured Project 3",
    blurb: "Coming soon...",
    tags: ["tag1", "tag2", "tag3"],
    featured: true
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
