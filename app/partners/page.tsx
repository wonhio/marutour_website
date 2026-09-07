import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import PartnerCard from "@/components/PartnerCard";
import {
  distributionBenefits,
  distributionTargets,
  supplierBenefits,
  supplierTargets,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Two ways to work with MARU Tour — as a supplier partner or a distribution partner.",
};

export default function PartnersPage() {
  return (
    <>
      <section className="bg-navy-deep text-paper">
        <div className="container-content py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="heading-display text-[2.6rem] md:text-[3.4rem]">
              Two Ways to Work With MARU Tour
            </h1>
            <p className="body-lg mt-6 text-[1.05rem] text-paper/75">
              Whether you create travel experiences or distribute them, MARU
              Tour offers a path to grow beyond your current market.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-content py-20 md:py-28">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <PartnerCard
              heading="Take Your Travel Products Global"
              targets={supplierTargets}
              benefits={supplierBenefits}
              cta={{
                label: "Become a Supplier",
                href: "https://partner.trateria.com/registration.html",
              }}
              tone="dark"
            />
            <PartnerCard
              heading="Expand Your Travel Inventory"
              targets={distributionTargets}
              benefits={distributionBenefits}
              cta={{
                label: "Become a Distribution Partner",
                href: "mailto:info@marutour.com?subject=Distribution%20Partnership%20Inquiry",
              }}
              tone="light"
            />
          </div>
        </div>
      </section>

      <CTASection
        tone="sand"
        heading="Let's Build the Future of Global Travel Together"
        text="Connect with MARU Tour to distribute your travel products, expand your inventory or explore new global markets."
        buttons={[
          { label: "Contact Our Partnership Team", href: "/contact" },
        ]}
      />
    </>
  );
}
