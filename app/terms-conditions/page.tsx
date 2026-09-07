import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <section className="bg-paper">
      <div className="container-content max-w-2xl py-24 md:py-32">
        <h1 className="h-1 text-[2.2rem] text-ink">Terms &amp; Conditions</h1>
        <p className="body-lg mt-6 text-[1rem] text-graphite">
          This page outlines the terms governing use of the MARU Tour
          website and services. Full policy content to be finalized prior to
          launch.
        </p>
      </div>
    </section>
  );
}
