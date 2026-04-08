export type ExperienceEntry = {
  title: string;
  desc: string;
  img: string;
  href?: string;
  hrefLabel?: string;
  date: string;
  bullets?: string[];
};

export const experiences: ExperienceEntry[] = [
  {
    title: "Belvedere Trading",
    desc: "Quantitative Trading Software Development Intern",
    img: "/icons/belvedere.png",
    href: "https://www.belvederetrading.com/about",
    date: "Summer 2026",
    bullets: [
      "Upcoming Summer 2026 internship focused on software engineering in quantitative trading",
    ],
  },
  {
    title: "University of Colorado Boulder - LAIR Research Lab",
    desc: "Machine Learning Research",
    img: "/icons/cu.png",
    href: "/projects/LAIRresearch",
    hrefLabel: "View Project",
    date: "Aug 2024\n-\nMay 2025",
    bullets: [
      "Developed software to generate datasets from multi-dimensional satellite data spanning over 6 years",
      "Trained and evaluated custom YOLO object-detection models in PyTorch to identify particle-precipitation event signatures in optimized plots of satellite data",
      "Investigated false positives/negatives and refined dataset labeling to improve model performance",
      "Leveraged university research HPC clusters for scalable model training and resource management",
      "Presented on the application and optimization of ML/AI to astrophysics at a national research conference",
    ],
  },
  {
    title: "Handshake AI",
    desc: "Fellowship",
    img: "/icons/handshake.png",
    date: "Aug 2025\n-\nMay 2026",
    bullets: [
      "Design and implement structured, complex prompts in niche academic fields such as SAT/SMT solvers and advanced algorithmic reasoning to evaluate and fine-tune Large Language Models",
      "Analyze and resolve internal model reasoning failures to improve reliability and interpretability of AI systems",
      "Integrate feedback from leading AI research labs to iteratively improve workflow and align with state of the art model training methodologies to incorporate described shortcomings",
    ],
  },
  {
    title: "Paminga - Marketing Automation",
    desc: "Full-Stack Web Development Intern",
    img: "/icons/paminga.jpg",
    href: "https://www.paminga.com/",
    date: "Summer 2023\n&\nSummer 2024",
    bullets: [
      "Built React frontend and GraphQL backend features enabling customizable automated marketing workflows and CRM integrations for 20,000+ active users",
      "Collaborated with developers to design, build, and implement user-customizable, automated marketing actions",
      "Partnered with customer success team to handle inquiries and solve user issues",
      "Practiced my web-development skills while making this website!",
    ],
  },
];