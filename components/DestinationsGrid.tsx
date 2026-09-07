"use client";

import { useState } from "react";
import DestinationCard from "@/components/DestinationCard";
import { destinations, regions } from "@/lib/content";

export default function DestinationsGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? destinations
      : destinations.filter((d) => d.region === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-line pb-8">
        {["All", ...regions].map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setActive(r)}
            className={`rounded-full px-4 py-2 text-[0.85rem] transition-colors ${
              active === r
                ? "bg-navy text-paper"
                : "bg-sand-light text-graphite hover:bg-sand"
            }`}
          >
            {r}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((d) => (
          <div key={d.slug} id={d.slug}>
            <DestinationCard dest={d} />
          </div>
        ))}
      </div>
    </div>
  );
}
