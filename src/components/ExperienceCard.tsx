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
        rounded-2xl
        border border-white/10
        bg-white/5
        px-6 py-6
        hover:bg-white/10 hover:border-white/20
        transition
      "
    >
      <div className="flex items-start gap-4">
        <Image
          src={img}
          alt=""
          width={80}
          height={80}
          className="mt-1 opacity-60 group-hover:opacity-100 transition"
        />

        <div className="min-w-0">
          <div className="text-sm text-muted uppercase tracking-wide">
            {title}
          </div>
          <div className="mt-2 text-lg md:text-xl font-semibold text-fg">
            {desc}
          </div>
        </div>
      </div>
    </Link>
  );
}