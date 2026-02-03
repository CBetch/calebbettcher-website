import Link from "next/link";
import Container from "./Container";
import { site } from "@/lib/site";

const items = [
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <div className="sticky top-0 z-50 border-b border-white/8 bg-bg0/40 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-a/50 via-b/40 to-white/10 border border-white/10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-fg">{site.name}</div>
              <div className="text-xs text-muted">{site.domain}</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {items.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-sm text-muted hover:text-fg transition"
              >
                {i.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden text-xs text-muted">Menu</div>
        </div>
      </Container>
    </div>
  );
}
