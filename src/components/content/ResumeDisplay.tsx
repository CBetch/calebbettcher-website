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

function Bullets({ items }: { items: React.ReactNode[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="mt-0.5">
      {items.map((b, i) => (
        <li key={i} className="text-[13px] flex gap-1.5 leading-[1.4] mt-0.5">
          <span className="shrink-0">▪</span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Entry({
  title, location, date, bullets = [], children,
}: {
  title: string;
  location?: string;
  date: string;
  bullets?: React.ReactNode[];
  children?: React.ReactNode;
}) {
  return (
    <div className="mt-3 first:mt-1.5">
      <div className="flex flex-wrap justify-between items-baseline gap-x-4">
        <div className="font-bold text-[13px] leading-snug">{title}</div>
        <div className="text-[13px] shrink-0 leading-snug">
          {location && <>{location} <span className="mx-0.5">|</span> </>}
          <span className="font-bold">{date}</span>
        </div>
      </div>
      <Bullets items={bullets} />
      {children}
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
      <div className="flex flex-wrap items-baseline justify-center gap-x-4 gap-y-1">
        <h1 className="text-[26px] font-bold leading-tight">Caleb Bettcher</h1>
        <span className="text-gray-300">|</span>
        <a href="mailto:calebbettcher@gmail.com" className="text-[13px] hover:underline">calebbettcher@gmail.com</a>
        <span className="text-gray-300">|</span>
        <Link href="https://calebbettcher.com" className="text-[13px] underline hover:opacity-70">calebbettcher.com</Link>
      </div>

      {/* Education */}
      <Section title="Education">
        <Entry
          title="Cornell University – Master of Computer Science"
          location="New York, NY"
          date="Aug 2026 – May 2027"
          bullets={["Recipient of a Cornell Tech merit scholarship"]}
        />
        <Entry
          title="University of Colorado Boulder – B.S. Computer Science"
          location="Boulder, CO"
          date="Aug 2023 – May 2026"
          bullets={["3.92 Cumulative GPA, Dean’s List, Summa Cum Laude, Accelerated 3-year track"]}
        >
          <div className="text-[13px] leading-[1.4] mt-0.5 pl-5">
            Minor in Business &nbsp;–&nbsp; CU Quants Trading Team &nbsp;–&nbsp; CU Triathlon Team &amp; CU Freeride - Member
          </div>
        </Entry>
      </Section>

      {/* Work Experience */}
      <Section title="Work Experience">
        <Entry
          title="Chicago Trading Company – Associate Software Engineer"
          location="Chicago, IL"
          date="June 2027 – Present"
        />
        <Entry
          title="Belvedere Trading – Quantitative Software Engineering Intern"
          location="Boulder, CO"
          date="Summer 2026"
          bullets={[
            "Completed Belvedere Trading University (BTU): an intensive crash course in core options pricing theory, delta hedging, and market making principles, including coursework in advanced C++ optimization and Python market making projects",
            "Built a real-time C++ market data pipeline ingesting live data from 20+ exchanges via third-party normalization, sustaining 30K+ exchange messages/sec, spiking to well over 100K/sec during market volatility with sub-10μs average app-processing latency",
            "Designed a fully customizable Signal configuration methodology giving Quants complete control over parameters, per-tradable subscription granularity, multi-threaded dispatch, and Protobuf output, all built for easy extension to future Signals",
            "Implemented and deployed a proprietary logistic model predicting future trade direction using live market data",
          ]}
        />
        <Entry
          title="Handshake AI Solutions – Prompt Engineer / AI Research Fellow"
          date="Aug 2025 – June 2026"
          bullets={[
            "Designed ~20 adversarial prompts accepted into frontier model evaluation datasets for leading AI labs, targeting reasoning gaps in formal verification (SAT/SMT solving) and graph theory, including directed graph reasoning and DPLL/CDCL algorithm application",
            "Identified and documented over 10 recurring model failure modes including test set leakage, result hallucination, eval script manipulation, and action-ideation mismatch, to improve reliability and interpretability of frontier LLM models",
            "Promoted to peer reviewer based on output quality and contribution history, evaluating annotators’ model failure classifications for rubric adherence and justification accuracy while incorporating direct feedback from AI research leads",
          ]}
        />
        <Entry
          title="Machine Learning Research – University of Colorado Boulder"
          date="Aug 2024 – May 2025"
          bullets={[
            "Developed custom Julia and Python libraries for processing multi-dimensional satellite data spanning over 6 years",
            "Iteratively refined a custom YOLOv8x model from a 1-class to 4-class training set, leveraging university supercomputing resources to reduce false-positive detections by ~80% while maintaining a 73.6% training set recall",
            "Presented on the application and optimization of ML/AI to astrophysics at a national research conference",
          ]}
        />
        <Entry
          title="YouTube – Content Creator"
          date="Apr 2020 – June 2026"
          bullets={[
            "Built a YouTube channel with over 80,000 subscribers and 10 Million views across 150 videos, hired an editor to streamline video production, and managed 5-figure annual sponsorship revenue through partnerships with gaming companies such as Supercell",
          ]}
        />
        <Entry
          title="Net-Results Marketing Automation – Full Stack SWE Intern"
          location="Denver, CO"
          date="Summer 2022 & 2023"
          bullets={[
            "Constructed React frontend and Laravel/GraphQL backend systems to handle multi-layered JSON mutations, execute user-customized marketing actions, and synchronize data with Salesforce and Dynamics 365 for 20,000+ active users",
          ]}
        />
      </Section>

      {/* Research Projects */}
      <Section title="Research Projects">
        <Entry
          title="Quantitative Trader – CU Quants"
          location="University of Colorado Boulder"
          date="Jan 2026 – May 2026"
          bullets={[
            "Monitored live market-making systems across 12 stablecoin instruments on Kraken US and OKX US, maintaining 98.44% uptime across a 1-178 bps spread capture range while making real-time decisions helping achieve the team’s 137.63% annualized returns",
          ]}
        />
        <Entry
          title="SurfaceEdge – Novel CNN Options Pricing Model from Surface Images"
          date="Jan 2026 – May 2026"
          bullets={[
            "Engineered a novel multimodal deep learning pipeline combining CNN-encoded options surface images with contract-level scalars across 200M+ labeled contracts from 17 years of historical data, extending prior computer vision research from CU ML lab work",
            "Designed and compared three model architectures achieving 7.9% improvement in MAE over the naive baseline, while enforcing a strict chronological train/test split to prevent lookahead bias",
            "Adapted a causal self-attention transformer to model price history as a sequence prediction problem, finishing as our top model",
          ]}
        />
      </Section>

      {/* Skills */}
      <Section title="Skills & Expertise">
        <Bullets
          items={[
            ["Languages", "Python, C++, Java, JavaScript, SQL, TypeScript, Julia"],
            ["Frameworks", "PyTorch, YOLO, React, Next.js, Laravel, GraphQL, NumPy, Pandas"],
            ["Technical Skills", "Git, AWS, HPC Clusters, JVM/JIT Optimization, Machine Learning, Computer Vision, Data Analysis"],
          ].map(([label, value]) => (
            <span key={label}><span className="font-bold">{label}</span> – {value}</span>
          ))}
        />
      </Section>
    </div>
  );
}
