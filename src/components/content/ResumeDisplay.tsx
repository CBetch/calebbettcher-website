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
  location?: string;
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
        {location && <div className="text-[13px] shrink-0 leading-snug">{location}</div>}
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
        <Link href="https://linkedin.com/in/cbetch/" className="underline hover:opacity-70">linkedin.com/in/cbetch/</Link>
      </div>

      {/* Education */}
      <Section title="Education">
        <div className="mt-1.5">
          <div className="flex justify-between items-baseline gap-4">
            <div className="font-bold text-[13px]">Cornell University</div>
            <div className="text-[13px] shrink-0">Aug 2026 – May 2027</div>
          </div>
          <div className="flex justify-between items-baseline gap-4">
            <div className="text-[13px]">Master of Computer Science</div>
            <div className="text-[13px] shrink-0">New York, NY</div>
          </div>
          <ul className="mt-0.5">
            <li className="text-[13px] flex gap-1.5 leading-[1.4] mt-0.5">
              <span className="shrink-0">▪</span>
              <span>Recipient of a Cornell Tech merit scholarship</span>
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <div className="flex justify-between items-baseline gap-4">
            <div className="font-bold text-[13px]">University of Colorado Boulder</div>
            <div className="text-[13px] shrink-0">Aug 2023 – May 2026</div>
          </div>
          <div className="flex justify-between items-baseline gap-4">
            <div className="text-[13px]">Bachelor of Science in Computer Science, Minor in Business</div>
            <div className="text-[13px] shrink-0">Boulder, CO</div>
          </div>
          <ul className="mt-0.5">
            <li className="text-[13px] flex gap-1.5 leading-[1.4] mt-0.5">
              <span className="shrink-0">▪</span>
              <span>3.92 Cumulative GPA, Dean&apos;s List, Summa Cum Laude, Accelerated 3-year track</span>
            </li>
            <li className="text-[13px] flex gap-1.5 leading-[1.4] mt-0.5">
              <span className="shrink-0">▪</span>
              <span>CU Quants – Trading Team &nbsp;·&nbsp; CU Triathlon Team &nbsp;·&nbsp; CU Freeride</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Work Experience */}
      <Section title="Work Experience">
        <Job
          company="Belvedere Trading"
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
          company="Handshake AI Solutions"
          role="Prompt Engineer / AI Research Fellow"
          date="Aug 2025 – June 2026"
          bullets={[
            "Design and implement structured, complex prompts in niche academic fields such as SAT/SMT solvers and advanced algorithmic reasoning to evaluate and fine-tune Large Language Models",
            "Analyze and resolve internal model reasoning failures to improve reliability and interpretability of AI systems",
          ]}
        />
        <Job
          company="YouTube"
          role="Content Creator"
          date="Apr 2020 – Present"
          bullets={[
            "Built a YouTube channel with over 80,000 subscribers and 10 Million views across 150 videos",
            "Hired an editor to streamline video production, and help generate revenue through sponsorships with companies such as Supercell",
          ]}
        />
        <Job
          company="Net-Results Marketing Automation"
          role="Full Stack Web Development Intern"
          location="Denver, CO"
          date="Summer 2022 & 2023"
          bullets={[
            "Built React frontend and GraphQL backend features enabling customizable automated marketing for 20,000+ active users",
          ]}
        />
      </Section>

      {/* Research & Projects */}
      <Section title="Research & Projects">
        <Job
          company="Quantitative Trader – CU Quants, University of Colorado Boulder"
          role=""
          date="January 2026 – May 2026"
          bullets={[
            "Monitored live market-making systems across 12 stablecoin instruments on Kraken US and OKX US, helping achieve a 98.44% uptime across a 1–178 bps spread capture range",
            "Made real-time decisions during periods of unexpected market movement, contributing to 137.63% annualized returns",
            "Contributed to proprietary trading dashboard and custom asset allocation engine, preparing systems for expansion to Gemini US",
          ]}
        />
        <Job
          company="SurfaceEdge – Novel CNN Options Pricing Model from Surface Images"
          role=""
          date="January 2026 – May 2026"
          bullets={[
            "Engineered a novel multimodal deep learning pipeline combining CNN-encoded options surface images with contract-level scalars across 200M+ labeled contracts from 17 years of historical data, extending prior computer vision research from CU ML lab work",
            "Adapted a causal self-attention transformer to model price history as a sequence prediction problem — analogous to next-token prediction in LLMs — achieving best performance across all architectures",
            "Designed and compared three model architectures achieving 7.9% improvement in MAE over the naive baseline",
          ]}
        />
        <Job
          company="Machine Learning Research – University of Colorado Boulder"
          role=""
          date="Aug 2024 – May 2025"
          bullets={[
            "Developed custom methodology software to generate datasets from multi-dimensional satellite data spanning over 6 years",
            "Trained and evaluated custom YOLO models in PyTorch to identify particle-precipitation signatures in optimized plots of satellite data",
            "Presented on the application and optimization of ML/AI to astrophysics at a national research conference",
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