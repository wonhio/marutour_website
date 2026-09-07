import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import {
  b2bHighlights,
  distributionChannels,
  sourcingProducts,
  technologyPoints,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Business",
  description:
    "How MARU Tour sources travel products from local suppliers and distributes them through a global partner network.",
};

export default function BusinessPage() {
  return (
    <>
      <section className="bg-navy-deep text-paper">
        <div className="container-content py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="h-display text-[2.6rem] md:text-[3.4rem]">
              Global Travel Sourcing &amp; Distribution
            </h1>
            <p className="body-lg mt-6 text-[1.05rem] text-paper/75">
              MARU Tour connects local travel supply with global demand. Our
              business is built around identifying strong local travel
              products, establishing supplier partnerships and distributing
              those products through international channels.
            </p>
          </div>
        </div>
      </section>

      <section id="sourcing" className="scroll-mt-20 bg-paper">
        <div className="container-content grid grid-cols-1 gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div>
            <h2 className="h-1 text-[1.9rem] text-ink md:text-[2.3rem]">
              Travel Product Sourcing
            </h2>
            <p className="body-lg mt-6 text-[1rem] text-graphite">
              We identify, evaluate and contract with local operators to
              build a diverse, reliable portfolio of travel products across
              our network of destinations.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-line pt-8 sm:grid-cols-3">
            {sourcingProducts.map((p) => (
              <li key={p} className="body-md text-[0.9rem] text-graphite">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="distribution" className="scroll-mt-20 bg-sand-light">
        <div className="container-content grid grid-cols-1 gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div>
            <h2 className="h-1 text-[1.9rem] text-ink md:text-[2.3rem]">
              Global Distribution
            </h2>
            <p className="body-lg mt-6 text-[1rem] text-graphite">
              Sourced products reach the market through a mix of direct and
              partner-driven channels, built to match how modern travel
              demand actually moves.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-3 border-t border-line pt-8 sm:grid-cols-2">
            {distributionChannels.map((c) => (
              <li key={c} className="body-md text-[0.9rem] text-graphite">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="b2b" className="scroll-mt-20 bg-navy text-paper">
        <div className="container-content grid grid-cols-1 gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div>
            <h2 className="h-1 text-[1.9rem] md:text-[2.3rem]">
              B2B Travel Solutions
            </h2>
            <p className="body-lg mt-6 text-[1rem] text-paper/70">
              MARU Tour provides curated travel inventory to travel industry
              partners, backed by destination expertise and centralized
              partnership support.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-sm bg-paper px-6 py-3.5 text-[0.95rem] text-navy transition-colors hover:bg-sand"
            >
              Discuss B2B Partnership
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-3 border-t border-paper/15 pt-8 sm:grid-cols-2">
            {b2bHighlights.map((h) => (
              <li key={h} className="body-md text-[0.95rem] text-paper/80">
                {h}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-content grid grid-cols-1 gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div>
            <h2 className="h-1 text-[1.9rem] text-ink md:text-[2.3rem]">
              Technology
            </h2>
            <p className="body-lg mt-6 text-[1rem] text-graphite">
              Technology sits behind the network — making it possible to
              manage supplier relationships and distribution at scale.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-3 border-t border-line pt-8 sm:grid-cols-2">
            {technologyPoints.map((t) => (
              <li key={t} className="body-md text-[0.9rem] text-graphite">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        heading="Let's Build the Future of Global Travel Together"
        text="Connect with MARU Tour to distribute your travel products, expand your inventory or explore new global markets."
        buttons={[
          { label: "Become a Partner", href: "/partners" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
    </>
  );
}
