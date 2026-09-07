import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-paper">
      <div className="container-content max-w-2xl py-24 md:py-32">
        <h1 className="h-1 text-[2.2rem] text-ink">Privacy Policy</h1>
        <p className="body-lg mt-6 text-[1rem] text-graphite">
          This page outlines how MARU Tour collects, uses and protects
          information shared through this website. Full policy content to be
          finalized prior to launch.
        </p>
      </div>
    </section>
  );
}
