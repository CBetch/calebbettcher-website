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
    title: "Chicago Trading Company",
    desc: "Associate Software Engineer",
    img: "/icons/ctc.jpg",
    href: "https://www.chicagotrading.com/",
    date: "June 2027\n-\nPresent",
    bullets: [
      "Full-time software engineering role in derivatives market making based out of Chicago",
    ],
  },
  {
    title: "Belvedere Trading",
    desc: "Quantitative Software Engineering Intern",
    img: "/icons/belvedere.png",
    href: "https://www.belvederetrading.com/about",
    date: "Summer 2026",
    bullets: [
      "Completed Belvedere Trading University (BTU): an intensive crash course in core options pricing theory, delta hedging, and market making principles, including coursework in advanced C++ optimization and Python market making projects",
      "Built a real-time C++ market data pipeline ingesting live data from 20+ exchanges via third-party normalization, sustaining 30K+ exchange messages/sec, spiking to well over 100K/sec during market volatility with sub-10μs average app-processing latency",
      "Designed a fully customizable Signal configuration methodology giving Quants complete control over parameters, per-tradable subscription granularity, multi-threaded dispatch, and Protobuf output, all built for easy extension to future Signals",
      "Implemented and deployed a proprietary logistic model predicting future trade direction using live market data",
    ],
  },
  {
    title: "Handshake AI Solutions",
    desc: "Prompt Engineer / AI Research Fellow",
    img: "/icons/handshake.png",
    href: "https://joinhandshake.com/blog/hai/introducing-handshake-ai/",
    date: "Aug 2025\n-\nJune 2026",
    bullets: [
      "Designed ~20 adversarial prompts accepted into frontier model evaluation datasets for leading AI labs, targeting reasoning gaps in formal verification (SAT/SMT solving) and graph theory, including directed graph reasoning and DPLL/CDCL algorithm application",
      "Identified and documented over 10 recurring model failure modes including test set leakage, result hallucination, eval script manipulation, and action-ideation mismatch, to improve reliability and interpretability of frontier LLM models",
      "Promoted to peer reviewer based on output quality and contribution history, evaluating annotators' model failure classifications for rubric adherence and justification accuracy while incorporating direct feedback from AI research leads",
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
      "Developed custom Julia and Python libraries for processing multi-dimensional satellite data from the twin ELFIN satellites spanning over 6 years",
      "Iteratively refined a custom YOLOv8x model from a 1-class to 4-class training set, leveraging university supercomputing resources to reduce false-positive detections by ~80% while maintaining a 73.6% training set recall",
      "Presented on the application and optimization of ML/AI to astrophysics at a national research conference",
    ],
  },
  {
    title: "YouTube",
    desc: "Content Creator",
    img: "/icons/youtube.png",
    date: "Apr 2020\n-\nJune 2026",
    bullets: [
      "Built a YouTube channel with over 80,000 subscribers and 10 Million views across 150 videos, handling planning, creation, posting, performance analysis, and publicity",
      "Hired and worked closely with an editor to streamline the production process and sustainably increase output",
      "Partnered with Supercell and other gaming companies to generate 5-figure annual sponsorship revenue",
    ],
  },
  {
    title: "Paminga (Net-Results) - Marketing Automation",
    desc: "Full Stack SWE Intern",
    img: "/icons/paminga.jpg",
    href: "https://www.paminga.com/",
    date: "Summer 2022\n&\nSummer 2023",
    bullets: [
      "Constructed React frontend and Laravel/GraphQL backend systems to handle multi-layered JSON mutations, execute user-customized marketing actions, and synchronize data with Salesforce and Dynamics 365 for 20,000+ active users",
      "Partnered with customer success team to handle inquiries and solve user issues",
      "Recently practiced my web-development skills while making this website!",
    ],
  },
];