import Image from "next/image";
import Link from "next/link";
import type { Destination } from "@/lib/content";

export default function DestinationCard({ dest }: { dest: Destination }) {
  return (
    <Link
      href={`/destinations#${dest.slug}`}
      className="group block overflow-hidden bg-white"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 via-navy-deep/0 to-navy-deep/0" />
        <span className="absolute bottom-4 left-4 text-[0.7rem] uppercase tracking-[0.14em] text-paper/80">
          {dest.region}
        </span>
      </div>
      <div className="border border-t-0 border-line px-5 py-5">
        <h3 className="h-3 text-[1.05rem] text-ink">{dest.name}</h3>
        <p className="body-md mt-2 text-[0.875rem] text-graphite line-clamp-2">
          {dest.description}
        </p>
        <span className="mt-3 inline-flex items-center text-[0.85rem] text-brand">
          View Destination
        </span>
      </div>
    </Link>
  );
}
