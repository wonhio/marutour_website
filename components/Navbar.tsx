"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/site-config";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_rgba(20,27,36,0.08)]" : ""
      }`}
    >
      <div className="container-content flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src="/images/maru-full-logo.png"
            alt="MARU Tour"
            width={2168}
            height={622}
            className="h-[57px] w-auto md:h-[62px]"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {primaryNav.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 text-[0.95rem] font-body transition-colors ${
                  active ? "text-ink" : "text-graphite hover:text-ink"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-brand transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/partners"
            className="inline-flex items-center rounded-sm bg-navy px-5 py-2.5 text-[0.9rem] font-body text-paper transition-colors hover:bg-navy-soft"
          >
            Become a Partner
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center"
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-[1.5px] w-6 bg-ink transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-[1.5px] w-6 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-[1.5px] w-6 bg-ink transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden border-t border-line transition-[max-height] duration-300 ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="container-content flex flex-col py-4">
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-[1rem] text-ink border-b border-line last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/partners"
            className="mt-4 inline-flex items-center justify-center rounded-sm bg-navy px-5 py-3 text-[0.95rem] text-paper"
          >
            Become a Partner
          </Link>
        </nav>
      </div>
    </header>
  );
}
