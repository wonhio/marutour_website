import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { companyValues } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MARU Tour connects local travel suppliers with international travelers and travel companies, from a Dubai base.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-deep text-paper">
        <div className="container-content py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="heading-display text-[2.6rem] md:text-[3.4rem]">
              Connecting Travel Markets Through Dubai
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-content py-20 md:py-28">
          <div className="max-w-2xl space-y-6">
            <p className="body-lg text-[1.05rem] text-graphite">
              MARU Tour was built around a simple idea: the best travel
              experiences are often created by local experts, but accessing
              global customers can be difficult.
            </p>
            <p className="body-lg text-[1.05rem] text-graphite">
              Based in Dubai, MARU Tour connects these local suppliers with
              international travelers and travel companies.
            </p>
            <p className="body-lg text-[1.05rem] text-graphite">
              Our team works across destinations, cultures and markets to
              source strong travel products and build sustainable
              distribution partnerships.
            </p>
            <p className="body-lg text-[1.05rem] text-graphite">
              Our goal is to create a global travel network where local
              expertise can reach customers anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-sand-light">
        <div className="container-content grid grid-cols-1 gap-10 py-20 md:grid-cols-2 md:py-28">
          <div className="border-t border-line pt-6">
            <h2 className="heading-3 text-[1.05rem] text-mist">Our Mission</h2>
            <p className="heading-2 mt-3 text-[1.4rem] text-ink">
              To connect high-quality local travel experiences with global
              travelers and travel partners.
            </p>
          </div>
          <div className="border-t border-line pt-6">
            <h2 className="heading-3 text-[1.05rem] text-mist">Our Vision</h2>
            <p className="heading-2 mt-3 text-[1.4rem] text-ink">
              To build one of the world&rsquo;s most connected travel product
              distribution networks.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-content grid grid-cols-1 gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div>
            <h2 className="heading-1 text-[1.9rem] text-ink">Our Network</h2>
            <p className="body-lg mt-5 text-[1rem] text-graphite">
              Our team works across destinations, cultures and markets — the
              same reach that lets us source strong local products and build
              distribution partnerships that last.
            </p>
          </div>
          <div>
            <h2 className="heading-1 text-[1.9rem] text-ink">Why Dubai</h2>
            <p className="body-lg mt-5 text-[1rem] text-graphite">
              Dubai gives MARU Tour strategic access to major travel markets
              across the Middle East, Asia, Europe and Africa — positioning
              us between major source markets and destination markets.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy text-paper">
        <div className="container-content py-20 md:py-28">
          <h2 className="heading-1 text-[1.9rem] md:text-[2.3rem]">Our Approach</h2>
          <p className="body-lg mt-5 max-w-xl text-[1rem] text-paper/70">
            Values that guide how we source, partner and grow.
          </p>
          <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-paper/15 pt-8 sm:grid-cols-3">
            {companyValues.map((v) => (
              <li key={v} className="body-md text-[0.95rem] text-paper/85">
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        tone="sand"
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
