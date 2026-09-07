import Image from "next/image";
import Link from "next/link";
import BusinessCard from "@/components/BusinessCard";
import CTASection from "@/components/CTASection";
import DestinationCard from "@/components/DestinationCard";
import NetworkGraphic from "@/components/NetworkGraphic";
import RouteFlow from "@/components/RouteFlow";
import StatCard from "@/components/StatCard";
import { b2bFeatures, destinations, whatWeDo, whyDubaiStats } from "@/lib/content";

export default function HomePage() {
  const featured = destinations.slice(0, 8);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=2400&auto=format&fit=crop"
            alt=""
            fill
            priority
            className="object-cover opacity-45"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/40" />
        </div>

        <div className="container-content relative py-28 md:py-36">
          <div className="reveal max-w-2xl">
            <h1 className="heading-display text-[2.5rem] leading-[1.08] text-paper sm:text-[3.25rem] md:text-[3.9rem]">
              Connecting Local Travel Experiences to the World
            </h1>
            <p className="body-lg mt-7 max-w-xl text-[1.05rem] text-paper/75">
              MARU Tour sources trusted travel products from local suppliers
              worldwide and connects them with travelers and distribution
              partners across global markets.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/business"
                className="inline-flex items-center rounded-sm bg-paper px-7 py-3.5 text-[0.95rem] text-navy transition-colors hover:bg-sand"
              >
                Explore Our Business
              </Link>
              <Link
                href="/partners"
                className="inline-flex items-center rounded-sm border border-paper/35 px-7 py-3.5 text-[0.95rem] text-paper transition-colors hover:border-paper/70"
              >
                Become a Partner
              </Link>
            </div>
            <p className="body-md mt-12 text-[0.85rem] text-paper/50">
              Dubai · Global Network · Worldwide Distribution
            </p>
          </div>
        </div>
      </section>

      {/* GLOBAL TRAVEL NETWORK */}
      <section className="bg-paper">
        <div className="container-content grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div>
            <h2 className="heading-1 text-[2rem] text-ink md:text-[2.5rem]">
              A Global Network Built from Local Expertise
            </h2>
            <p className="body-lg mt-6 text-[1rem] text-graphite">
              From our base in Dubai, MARU Tour works with trusted local
              suppliers across key destinations worldwide.
            </p>
            <p className="body-lg mt-4 text-[1rem] text-graphite">
              We source tours, attractions, activities, transportation,
              experiences and destination services directly from local
              operators and make them accessible to global customers and
              travel distribution partners.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {["Middle East", "Asia", "Europe", "Africa", "Americas"].map(
                (r) => (
                  <li key={r} className="body-md text-[0.9rem] text-navy">
                    {r}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="order-first md:order-last">
            <NetworkGraphic />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-sand-light">
        <div className="container-content py-20 md:py-28">
          <h2 className="heading-1 max-w-lg text-[2rem] text-ink md:text-[2.5rem]">
            What We Do
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
            {whatWeDo.map((card) => (
              <BusinessCard
                key={card.title}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS MODEL */}
      <section className="bg-paper">
        <div className="container-content py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="heading-1 text-[2rem] text-ink md:text-[2.5rem]">
              From Local Suppliers to Global Markets
            </h2>
            <p className="body-lg mt-6 text-[1rem] text-graphite">
              MARU Tour simplifies international travel distribution by
              connecting high-quality local inventory with global demand.
            </p>
          </div>
          <div className="mt-16">
            <RouteFlow />
          </div>
        </div>
      </section>

      {/* WHY DUBAI */}
      <section className="bg-navy text-paper">
        <div className="container-content py-20 md:py-28">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            <div>
              <h2 className="heading-1 text-[2rem] md:text-[2.5rem]">
                Dubai at the Center of Global Travel
              </h2>
              <p className="body-lg mt-6 text-[1rem] text-paper/70">
                Dubai is one of the world&rsquo;s most connected travel hubs.
              </p>
              <p className="body-lg mt-4 text-[1rem] text-paper/70">
                From our Dubai base, MARU Tour is positioned between major
                source markets and destination markets, enabling us to build
                efficient partnerships across multiple regions.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whyDubaiStats.map((s) => (
                <StatCard key={s.label} label={s.label} detail={s.detail} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED DESTINATIONS */}
      <section className="bg-paper">
        <div className="container-content py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="heading-1 text-[2rem] text-ink md:text-[2.5rem]">
              Featured Destinations
            </h2>
            <Link
              href="/destinations"
              className="body-md text-[0.9rem] text-brand"
            >
              View all destinations
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((d) => (
              <DestinationCard key={d.slug} dest={d} />
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER SECTION */}
      <section className="bg-sand-light">
        <div className="container-content py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="heading-1 text-[2rem] text-ink md:text-[2.5rem]">
              Grow With MARU Tour
            </h2>
            <p className="body-lg mt-6 text-[1rem] text-graphite">
              We work with tourism businesses that want to expand beyond
              their local market. Whether you operate tours, attractions,
              transportation, activities or destination services, MARU Tour
              can help introduce your products to new customers and
              international distribution channels.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/partners/supplier"
                className="inline-flex items-center rounded-sm bg-navy px-6 py-3.5 text-[0.95rem] text-paper transition-colors hover:bg-navy-soft"
              >
                Become a Supplier Partner
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-sm border border-navy/25 px-6 py-3.5 text-[0.95rem] text-navy transition-colors hover:border-navy/50"
              >
                Contact Our Partnership Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* B2B DISTRIBUTION */}
      <section className="bg-paper">
        <div className="container-content grid grid-cols-1 gap-12 py-20 md:grid-cols-2 md:gap-16 md:py-28">
          <div>
            <h2 className="heading-1 text-[2rem] text-ink md:text-[2.5rem]">
              Built for Travel Partners
            </h2>
            <p className="body-lg mt-6 text-[1rem] text-graphite">
              MARU Tour supports travel agencies, OTAs, resellers and
              distribution partners looking for reliable global travel
              inventory.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center rounded-sm bg-navy px-6 py-3.5 text-[0.95rem] text-paper transition-colors hover:bg-navy-soft"
            >
              Discuss B2B Partnership
            </Link>
          </div>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-4 border-t border-line pt-8 sm:grid-cols-2">
            {b2bFeatures.map((f) => (
              <li
                key={f}
                className="body-md flex gap-3 text-[0.95rem] text-graphite"
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
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
