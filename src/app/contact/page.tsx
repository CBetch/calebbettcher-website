import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { site } from "@/lib/site";
import ProjectShowcase from "@/components/content/ProjectShowcase";
import HomepageBackground from "@/components/backgrounds/HomepageBackground";
import SectionHeader from "@/components/SectionHeader";

const contacts = [
  {
    label: "Email",
    value: site.links.email.replace("mailto:", ""),
    href: site.links.email,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m2 7 10 7 10-7" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "CBetch",
    href: site.links.github,
    icon: <Image src="/icons/github.png" alt="GitHub" width={22} height={22} className="invert opacity-80" />,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "caleb-bettcher",
    href: site.links.linkedin,
    icon: <Image src="/icons/linkedin.png" alt="LinkedIn" width={22} height={22} className="opacity-80" />,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <Container>
      <HomepageBackground />
      <div className="pt-8">
        <SectionHeader
          eyebrow=""
          title="Contact"
          subtitle="Let's talk, I'm always open to projects, collaborations, or other opportunities! Shoot me an email or connect with me on GitHub or LinkedIn."
        />
        <div className="pt-8 grid md:grid-cols-3 gap-5 -mt-6">
          {contacts.map(({ label, value, href, icon, external }) => (
          <Link 
            key={label} 
            href={href} 
            {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
            rel="noreferrer"
            className="group"
          >
            <Card className="p-6 flex items-center gap-4 group-hover:border-white/20 group-hover:bg-white/8 group-hover:-translate-y-0.5 transition">
              <div className="text-muted group-hover:text-fg transition">
                {icon}
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted mb-1">{label}</div>
                <div className="text-base font-medium text-fg/80 group-hover:text-fg transition">{value}</div>
              </div>
            </Card>
          </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}