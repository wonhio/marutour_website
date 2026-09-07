import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with MARU Tour for supplier partnerships, B2B distribution or general inquiries.",
};

const categories = [
  {
    title: "Supplier Partnership",
    detail: "For tour operators, DMCs, attractions and experience providers.",
  },
  {
    title: "B2B Distribution",
    detail: "For travel agencies, OTAs and distribution partners.",
  },
  {
    title: "Corporate Inquiry",
    detail: "For media, corporate travel and general business inquiries.",
  },
  {
    title: "General Inquiry",
    detail: "For anything else you'd like to ask us.",
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-deep text-paper">
        <div className="container-content py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="h-display text-[2.6rem] md:text-[3.4rem]">
              Let&rsquo;s Connect
            </h1>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="container-content grid grid-cols-1 gap-16 py-20 md:grid-cols-[1fr_1.2fr] md:py-28">
          <div>
            <h2 className="h-3 text-[1.1rem] text-ink">Reach out about</h2>
            <ul className="mt-6 space-y-6 border-t border-line pt-6">
              {categories.map((c) => (
                <li key={c.title}>
                  <p className="h-3 text-[1rem] text-ink">{c.title}</p>
                  <p className="body-md mt-1 text-[0.875rem] text-graphite">
                    {c.detail}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-3 border-t border-line pt-6">
              <p className="body-md text-[0.9rem] text-graphite">
                {siteConfig.location}
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block text-[0.9rem] text-brand"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, "")}`}
                className="block text-[0.9rem] text-brand"
              >
                WhatsApp: {siteConfig.contact.whatsappDisplay}
              </a>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
