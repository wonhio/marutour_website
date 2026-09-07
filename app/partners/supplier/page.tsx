import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { supplierBenefits, supplierTargets } from "@/lib/content";

export const metadata: Metadata = {
  title: "Supplier Partners",
  description:
    "Take your travel products global with MARU Tour's international distribution network.",
};

export default function SupplierPartnersPage() {
  return (
    <>
      <section className="bg-navy text-paper">
        <div className="container-content py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="heading-display text-[2.6rem] md:text-[3.4rem]">
              Take Your Travel Products Global
            </h1>
            <p className="body-lg mt-6 text-[1.05rem] text-paper/75">
              For tour operators, DMCs, attractions, activity operators,
              transportation providers and experience creators ready to reach
              travelers beyond their home market.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-content grid grid-cols-1 gap-16 py-20 md:grid-cols-2 md:py-28">
          <div>
            <h2 className="heading-2 text-[1.5rem] text-ink">Who this is for</h2>
            <ul className="mt-6 space-y-3 border-t border-line pt-6">
              {supplierTargets.map((t) => (
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
              {supplierBenefits.map((b) => (
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
        heading="Become a Supplier"
        text="Introduce your travel products to MARU Tour's global distribution network."
        buttons={[{ label: "Contact Our Partnership Team", href: "/contact" }]}
      />
    </>
  );
}
