import Image from "next/image";
import Button from "@/components/Button";
import { ReactNode } from "react";

type LinkItem = {
  label: string;
  href: string;
};

type BaseProps = {
  eyebrow?: string;
  title: string;
  description: ReactNode;
  tags?: string[];
  links?: LinkItem[];
};

type WithImage = BaseProps & {
  image: string;
  imageAlt?: string;
  pdf?: never;
};

type WithPDF = BaseProps & {
  pdf: string;
  image?: never;
  imageAlt?: never;
};

type ProjectShowcaseProps = WithImage | WithPDF;

function MediaPanel({ image, imageAlt, pdf }: { image?: string; imageAlt?: string; pdf?: string }) {
  const cardClass =
    "relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,.5)] bg-bg1/35 backdrop-blur-xl";

  if (pdf) {
    return (
      <div className={cardClass} style={{ height: "520px" }}>
        <object data={pdf} type="application/pdf" className="w-full h-full">
          <div className="flex flex-col items-center justify-center h-full gap-4 p-8 text-center">
            <svg className="w-12 h-12 text-muted opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-sm text-muted">Your browser can&apos;t display this PDF inline.</p>
            <a href={pdf} target="_blank" rel="noreferrer" className="text-sm text-a hover:underline">
              Open PDF →
            </a>
          </div>
        </object>
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]" />
      </div>
    );
  }

  return (
    <div className={`${cardClass} aspect-video`}>
      <Image src={image!} alt={imageAlt ?? ""} fill className="object-cover" />
      <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.3)]" />
    </div>
  );
}

export default function ProjectShowcase({
  eyebrow,
  title,
  description,
  tags = [],
  links = [],
  image,
  imageAlt,
  pdf,
}: ProjectShowcaseProps) {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-0 flex justify-end">
        <div className="w-1/2 h-full bg-gradient-to-l from-a/5 via-b/5 to-transparent" />
      </div>

      <div className="w-full grid md:grid-cols-2 gap-12 md:gap-20 items-center py-10">

        {/* Left: Text */}
        <div className="flex flex-col gap-5">          
            {links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {links.map((link, i) => (
                <Button key={link.href} href={link.href} variant={i === 0 ? "primary" : "ghost"}>
                  {link.label}
                </Button>
              ))}
            </div>
          )}

          {eyebrow && (
            <div className="text-xs uppercase tracking-[0.25em] text-muted">{eyebrow}</div>
          )}

          <h2 className="text-3xl md:text-4xl font-semibold text-fg leading-tight">{title}</h2>
          <p className="text-sm md:text-base text-muted leading-relaxed max-w-prose">{description}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs text-fg/80 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right: Media */}
        <div>
          <MediaPanel image={image} imageAlt={imageAlt} pdf={pdf} />
        </div>

      </div>
    </section>
  );
}