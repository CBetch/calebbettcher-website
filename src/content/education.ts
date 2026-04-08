export type EducationEntry = {
  title: string;
  desc: string;
  img: string;
  href?: string;
  hrefLabel?: string;
  date: string;
  bullets?: string[];
};

export const education: EducationEntry[] = [
  {
    title: "Cornell University",
    desc: "MEng Computer Science",
    img: "/icons/cornell.png",
    date: "Aug 2026\n-\nMay 2027",
  },
  {
    title: "University of Colorado Boulder",
    desc: "B.S. Computer Science",
    img: "/icons/cu.png",
    date: "Aug 2023\n-\nMay 2026",
  },
];