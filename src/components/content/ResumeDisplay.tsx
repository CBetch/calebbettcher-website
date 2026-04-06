import Link from "next/link";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-3">
      <div className="text-[14.5px] font-bold uppercase tracking-wide border-b border-black pb-0.5 mb-2">
        {title}
      </div>
      {children}
    </div>
  );
}

function Job({
  company, role, location, date, bullets,
}: {
  company: React.ReactNode;
  role: string;
  location: string;
  date: string;
  bullets: string[];
}) {
  return (
    <div className="mt-3.5">
      <div className="flex justify-between items-baseline gap-4">
        <div className="font-bold text-[13px] leading-snug">{company}</div>
        <div className="text-[13px] shrink-0 leading-snug">{date}</div>
      </div>
      <div className="flex justify-between items-baseline gap-4">
        <div className="text-[13px] leading-snug">{role}</div>
        <div className="text-[13px] shrink-0 leading-snug">{location}</div>
      </div>
      <ul className="mt-0.5">
        {bullets.map((b, i) => (
          <li key={i} className="text-[13px] flex gap-1.5 leading-[1.4] mt-0.5">
            <span className="shrink-0">▪</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ResumeDisplay() {
  return (
    <div
      className="bg-white text-black rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,.5)] px-10 py-8 max-w-3xl mx-auto"
      style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
    >
      {/* Header */}
      <h1 className="text-[26px] font-bold leading-tight">Caleb Bettcher</h1>
      <div className="flex items-center justify-center gap-3 mt-1 text-[13px] flex-wrap">
        <a href="mailto:calebbettcher@gmail.com" className="hover:underline">calebbettcher@gmail.com</a>
        <span className="text-gray-300">|</span>
        <Link href="https://calebbettcher.com" className="underline hover:opacity-70">calebbettcher.com</Link>
        <span className="text-gray-300">|</span>
        <span>Boulder, CO</span>
      </div>

      {/* Education */}
      <Section title="Education">
        <div className="mt-1.5">
          <div className="flex justify-between items-baseline gap-4">
            <div className="font-bold text-[13px]">University of Colorado Boulder</div>
            <div className="text-[13px] shrink-0">Boulder, CO</div>
          </div>
          <div className="flex justify-between items-baseline gap-4">
            <div className="text-[13px]">Master of Science in Artificial Intelligence (Concurrent Program)</div>
            <div className="text-[13px] font-bold shrink-0">Aug 2025 - May 2027</div>
          </div>
          <div className="flex justify-between items-baseline gap-4">
            <div className="text-[13px]">Bachelor of Science in Computer Science, Minor in Business</div>
            <div className="text-[13px] font-bold shrink-0">Aug 2023 - May 2026</div>
          </div>
          <div className="ml-7 mt-0.5">
            <div className="text-[13px] leading-[1.35]"><span className="font-bold">Cumulative GPA</span> - 3.92, Dean's List</div>
            <div className="text-[13px] leading-[1.35]"><span className="font-bold">CU Quants</span> - Trader</div>
            <div className="text-[13px] leading-[1.35]"><span className="font-bold">CU Triathlon Team, CU Freeride</span> - Member</div>
          </div>
        </div>
      </Section>

      {/* Work Experience */}
      <Section title="Work Experience">
        <Job
          company="Belvedere Trading (Incoming Role)"
          role="Quantitative Software Engineering Intern"
          location="Boulder, CO"
          date="Summer 2026"
          bullets={[
            "Develop low-latency algorithms for making real time decisions in electronic trading systems",
            "Apply quantitative and statistical methods to identify market inefficiencies",
            "Interface with market data pipelines and APIs in performance-critical environments",
          ]}
        />
        <Job
          company={<>University of Colorado Boulder - <span className="font-normal">College of Engineering & Applied Science</span></>}
          role="Machine Learning Research Assistant"
          location="Boulder, CO"
          date="Aug 2024 – May 2025"
          bullets={[
            "Developed software to generate datasets from multi-dimensional satellite data spanning over 6 years",
            "Trained and evaluated custom YOLO object-detection models in PyTorch to identify particle-precipitation event signatures in optimized plots of satellite data",
            "Investigated false positives/negatives and refined dataset labeling to improve model performance",
            "Leveraged university research HPC clusters for scalable model training and resource management",
            "Presented on the application and optimization of ML/AI to astrophysics at a national research conference",
          ]}
        />
        <Job
          company="Net-Results Marketing Automation"
          role="Full Stack Web Development Intern"
          location="Denver, CO"
          date="May – Aug 2022 & 2023"
          bullets={[
            "Built React frontend and GraphQL backend features enabling customizable automated marketing workflows and CRM integrations for 20,000+ active users",
            "Collaborated with developers to design, build, and implement user-customizable, automated marketing actions",
            "Partnered with customer success team to handle inquiries and solve user issues",
          ]}
        />
        <Job
          company="Handshake AI Solutions"
          role="Prompt Engineer / AI Research Fellow"
          location="Remote"
          date="Aug 2025 - Present"
          bullets={[
            "Design and implement structured, complex prompts in niche academic fields such as SAT/SMT solvers and advanced algorithmic reasoning to evaluate and fine-tune Large Language Models",
            "Analyze and resolve internal model reasoning failures to improve reliability and interpretability of AI systems",
          ]}
        />
        <Job
          company="YouTube"
          role="Content Creator"
          location="Remote"
          date="Apr 2020 – Present"
          bullets={[
            "Built a YouTube channel with over 80,000 subscribers and 10 Million views across 150 videos",
            "Hired, and worked closely with an editor to streamline production process and sustainably increase output",
            "Partnered with Supercell and other companies to generate revenue through sponsorships",
          ]}
        />
      </Section>

      {/* Skills */}
      <Section title="Skills & Expertise">
        <ul className="mt-0.5">
          {[
            ["Languages", "Python, JavaScript, Julia, C++, Java, SQL"],
            ["Frameworks/Libraries", "PyTorch, YOLO, React, Laravel, GraphQL"],
            ["Technical Skills", "Git, HPC Clusters, Machine Learning, Computer Vision, Data Analysis, Financial Analysis"],
            ["Professional Skills", "Critical Thinking, Project Management, Leadership, Communication, Technical Writing"],
            ["Certifications", "TestOut - Network Pro, TestOut - Linux Pro, Handshake - Model Validation 2 (Expert)"],
          ].map(([label, value]) => (
            <li key={label} className="text-[13px] flex gap-1.5 leading-[1.4] mt-0.5">
              <span className="shrink-0">▪</span>
              <span><span className="font-bold">{label}</span> - {value}</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}