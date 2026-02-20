import Link from "next/link";
import Image from "next/image";
import Container from "../Container";
import { site } from "@/lib/site";

const items = [
  { href: "/resume", label: "Resume" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/8 bg-bg0/40 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo / Name */}
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/favicon.ico"
              alt="Caleb Bettcher logo"
              width={40}
              height={40}
              className="rounded-xl"
            />
            <div className="leading-tight">
              <div className="text-base font-semibold text-fg">
                {site.name}
              </div>
              <div className="text-sm text-muted">
                {site.domain}
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {items.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-base text-muted hover:text-fg hover:underline underline-offset-4 hover:-translate-y-0.5 transition"              >
                {i.label}
              </Link>
            ))}

            {/* Divider */}
            <div className="h-5 w-px bg-white/10 mx-1" />

            {/* LinkedIn */}
            <Link
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition"
            >
              <Image
                src="/icons/linkedin.png"
                alt="LinkedIn"
                width={18}
                height={18}
              />
            </Link>

            {/* GitHub (inverted for dark background) */}
            <Link
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="opacity-70 hover:opacity-100 hover:scale-110 transition invert"
            >
              <Image
                src="/icons/github.png"
                alt="GitHub"
                width={18}
                height={18}
              />
            </Link>
          </div>

          {/* Mobile placeholder */}
          <div className="md:hidden text-sm text-muted">
            Menu
          </div>
        </div>
      </Container>
    </div>
  );
}
