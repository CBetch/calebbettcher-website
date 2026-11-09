import type { ExperienceEntry } from "./experience";

export type EducationEntry = ExperienceEntry;

export const education: EducationEntry[] = [
  {
    title: "Cornell University",
    desc: "Master of Computer Science",
    img: "/icons/cornell.png",
    date: "Aug 2026\n-\nMay 2027",
    bullets: [
      "Recipient of a Cornell Tech merit scholarship",
    ],
  },
  {
    title: "University of Colorado Boulder",
    desc: "B.S. Computer Science",
    img: "/icons/cu.png",
    date: "Aug 2023\n-\nMay 2026",
    bullets: [
      "3.92 Cumulative GPA (Summa Cum Laude)",
      "Accelerated 3-year track",
      "Minor in Business",
      "CU Triathlon Team",
      "CU Freeride Club (Skiing!)",
    ],
  },
];