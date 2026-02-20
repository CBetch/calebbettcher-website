import Image from "next/image";
import Link from "next/link";

type ExperienceCardProps = {
  href: string;
  title: string;
  desc: string;
  img: string;
};

export default function ExperienceCard({ href, title, desc, img }: ExperienceCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        w-full
        h-[110px]
        rounded-2xl
        border border-white/10
        bg-white/5
        px-6
        hover:bg-white/10 hover:border-white/20
        transition
        flex items-center
      "
    >
      <div className="flex items-center gap-4 w-full">
        <Image
          src={img}
          alt=""
          width={60}
          height={60}
          className="opacity-60 group-hover:opacity-100 transition shrink-0"
        />

        <div className="min-w-0">
          <div className="text-xs text-muted uppercase tracking-wide">
            {title}
          </div>
          <div className="mt-1.5 text-base md:text-[1.05rem] font-semibold text-fg leading-snug">
            {desc}
          </div>
        </div>
      </div>
    </Link>
  );
}