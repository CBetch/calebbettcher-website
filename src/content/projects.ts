export type Project = {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  featured?: boolean;
  links?: {
    github?: string;
    demo?: string;
    writeup?: string;
  };
  body: {
    problem: string;
    approach: string;
    results: string;
    next: string;
  };
};

export const projects: Project[] = [
  {
    slug: "yolo-stopsign",
    title: "Stop Sign Detection (YOLO)",
    blurb: "Tiny dataset → pragmatic training loop → deployable detector demo.",
    tags: ["Python", "YOLO", "Computer Vision"],
    featured: true,
    links: {
      github: "https://github.com/",
    },
    body: {
      problem:
        "Build a reliable detector with limited training data and clear evaluation.",
      approach:
        "Clean dataset, augmentations, baseline YOLO training, error analysis, and iterative tuning.",
      results:
        "Stable inference pipeline with measurable improvements across training iterations.",
      next:
        "Scale dataset, add hard negatives, and validate across diverse lighting and camera angles.",
    },
  },
  {
    slug: "connect4-rl",
    title: "Connect 4 Agent",
    blurb: "From supervised NN to reinforcement learning direction.",
    tags: ["Python", "RL", "Neural Nets"],
    links: {
      github: "https://github.com/",
    },
    body: {
      problem:
        "Learn strong Connect 4 play without relying on curated labeled datasets.",
      approach:
        "Start with a baseline model, then move toward self-play + RL-style training.",
      results:
        "Baseline working agent and a clean path toward stronger self-play training.",
      next:
        "Implement MCTS + self-play or policy/value training; track Elo over time.",
    },
  },
  {
    slug: "dns-toggle-app",
    title: "Desktop DNS Toggle App",
    blurb: "Simple UI that toggles custom DNS vs automatic settings.",
    tags: ["Python", "Desktop UI", "Networking"],
    links: {
      github: "https://github.com/",
    },
    body: {
      problem:
        "Make a tiny desktop tool for switching DNS settings quickly and safely.",
      approach:
        "Minimal UI, deterministic toggle logic, and clear status feedback.",
      results:
        "One-click toggle behavior with straightforward UX and maintainable structure.",
      next:
        "Add OS-specific adapters, logging, and a background tray mode.",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
