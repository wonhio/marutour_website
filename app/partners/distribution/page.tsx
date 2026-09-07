import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { distributionBenefits, distributionTargets } from "@/lib/content";

export const metadata: Metadata = {
  title: "Distribution Partners",
  description:
    "Expand your travel inventory with MARU Tour's global supplier network.",
};

export default function DistributionPartnersPage() {
  return (
    <>
      <section className="bg-navy text-paper">
        <div className="container-content py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="heading-display text-[2.6rem] md:text-[3.4rem]">
              Expand Your Travel Inventory
            </h1>
            <p className="body-lg mt-6 text-[1.05rem] text-paper/75">
              For travel agencies, OTAs, corporate travel companies, travel
              platforms, affiliate partners and resellers looking for
              reliable global travel inventory.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-content grid grid-cols-1 gap-16 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h2 className="heading-2 text-[1.5rem] text-ink">Who this is for</h2>
            <ul className="mt-6 space-y-3 border-t border-line pt-6">
              {distributionTargets.map((t) => (
                <li key={t} className="body-md text-[0.95rem] text-graphite">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="heading-2 text-[1.5rem] text-ink">
              What you gain as a partner
            </h2>
            <ul className="mt-6 space-y-3 border-t border-line pt-6">
              {distributionBenefits.map((b) => (
                <li
                  key={b}
                  className="body-md flex gap-3 text-[0.95rem] text-graphite"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        heading="Become a Distribution Partner"
        text="Get access to MARU Tour's global travel inventory and destination network."
        buttons={[{ label: "Contact Our Partnership Team", href: "/contact" }]}
      />
    </>
  );
}
