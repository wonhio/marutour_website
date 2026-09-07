import Link from "next/link";

type PartnerCardProps = {
  heading: string;
  targets: string[];
  benefits: string[];
  cta: { label: string; href: string };
  tone?: "light" | "dark";
};

export default function PartnerCard({
  heading,
  targets,
  benefits,
  cta,
  tone = "light",
}: PartnerCardProps) {
  const dark = tone === "dark";
  return (
    <div
      className={`flex h-full flex-col p-8 md:p-10 ${
        dark ? "bg-navy text-paper" : "bg-white border border-line text-ink"
      }`}
    >
      <h3 className="h-2 text-[1.6rem]">{heading}</h3>

      <div className="mt-6">
        <p
          className={`text-[0.75rem] uppercase tracking-[0.12em] ${
            dark ? "text-paper/50" : "text-mist"
          }`}
        >
          Who it&rsquo;s for
        </p>
        <p
          className={`body-md mt-2 text-[0.95rem] ${
            dark ? "text-paper/80" : "text-graphite"
          }`}
        >
          {targets.join(" · ")}
        </p>
      </div>

      <ul
        className={`mt-6 space-y-2.5 border-t pt-6 ${
          dark ? "border-paper/15" : "border-line"
        }`}
      >
        {benefits.map((b) => (
          <li
            key={b}
            className={`body-md flex gap-3 text-[0.925rem] ${
              dark ? "text-paper/85" : "text-graphite"
            }`}
          >
            <span
              className={`mt-2 h-1 w-1 shrink-0 rounded-full ${
                dark ? "bg-reef-light" : "bg-brand"
              }`}
            />
            {b}
          </li>
        ))}
      </ul>

      <Link
        href={cta.href}
        className={`mt-8 inline-flex w-fit items-center rounded-sm px-6 py-3 text-[0.9rem] transition-colors ${
          dark
            ? "bg-paper text-navy hover:bg-sand"
            : "bg-navy text-paper hover:bg-navy-soft"
        }`}
      >
        {cta.label}
      </Link>
    </div>
  );
}
