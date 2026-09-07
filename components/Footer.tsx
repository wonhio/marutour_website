import Link from "next/link";
import Image from "next/image";
import { footerNav, legalLinks, siteConfig } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-paper/80">
      <div className="container-content py-16 md:py-20">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-6">
          <div className="col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/maru-full-logo-white.png"
                alt="MARU Tour"
                width={2168}
                height={622}
                className="h-9 w-auto"
              />
            </Link>
            <p className="body-md mt-5 max-w-xs text-[0.925rem] text-paper/60">
              Dubai-based global travel sourcing and distribution company
              connecting local suppliers with travelers and travel partners
              worldwide.
            </p>
            <p className="body-md mt-6 text-[0.85rem] text-paper/45">
              Operated from Dubai, United Arab Emirates.
            </p>
          </div>

          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title}>
              <h3 className="h-3 text-[0.875rem] text-paper/90">{title}</h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="body-md text-[0.9rem] text-paper/55 transition-colors hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="h-3 text-[0.875rem] text-paper/90">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="body-md text-[0.9rem] text-paper/55">
                {siteConfig.location}
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="body-md text-[0.9rem] text-paper/55 transition-colors hover:text-paper"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-paper/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="body-md text-[0.82rem] text-paper/45">
            © {year} MARU Tour. All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="body-md text-[0.82rem] text-paper/45 transition-colors hover:text-paper/80"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
