import type { Metadata } from "next";
import DestinationsGrid from "@/components/DestinationsGrid";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Explore destinations connected through the MARU Tour global supplier network.",
};

export default function DestinationsPage() {
  return (
    <>
      <section className="bg-navy-deep text-paper">
        <div className="container-content py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="heading-display text-[2.6rem] md:text-[3.4rem]">
              Travel Experiences Across the World
            </h1>
            <p className="body-lg mt-6 text-[1.05rem] text-paper/75">
              Explore destinations connected through the MARU Tour global
              supplier network.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-content py-16 md:py-20">
          <DestinationsGrid />
        </div>
      </section>
    </>
  );
}
