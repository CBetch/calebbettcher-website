import Container from "../Container";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <div className="mt-20 border-t border-white/8">
      <Container>
        <div className="py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="text-sm text-muted">
            © {new Date().getFullYear()} {site.name}. Built with Next.js.
          </div>
          <div className="flex gap-4 text-sm">
            <a className="text-muted hover:text-fg transition" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="text-muted hover:text-fg transition" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="text-muted hover:text-fg transition" href={site.links.email}>
              Email
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
