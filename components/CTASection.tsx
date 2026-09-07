import Link from "next/link";

type CTAButton = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type CTASectionProps = {
  eyebrow?: string;
  heading: string;
  text?: string;
  buttons: CTAButton[];
  tone?: "navy" | "sand";
};

export default function CTASection({
  heading,
  text,
  buttons,
  tone = "navy",
}: CTASectionProps) {
  const isNavy = tone === "navy";

  return (
    <section
      className={`${isNavy ? "bg-navy text-paper" : "bg-sand text-ink"}`}
    >
      <div className="container-content py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="heading-1 text-[2rem] md:text-[2.6rem]">{heading}</h2>
          {text && (
            <p
              className={`body-lg mt-5 text-[1.05rem] ${
                isNavy ? "text-paper/70" : "text-graphite"
              }`}
            >
              {text}
            </p>
          )}
          <div className="mt-9 flex flex-wrap gap-4">
            {buttons.map((btn, i) => {
              const primary = (btn.variant ?? (i === 0 ? "primary" : "secondary")) === "primary";
              return (
                <Link
                  key={btn.href + btn.label}
                  href={btn.href}
                  className={
                    primary
                      ? isNavy
                        ? "inline-flex items-center rounded-sm bg-paper px-6 py-3.5 text-[0.95rem] text-navy transition-colors hover:bg-sand"
                        : "inline-flex items-center rounded-sm bg-navy px-6 py-3.5 text-[0.95rem] text-paper transition-colors hover:bg-navy-soft"
                      : isNavy
                      ? "inline-flex items-center rounded-sm border border-paper/30 px-6 py-3.5 text-[0.95rem] text-paper transition-colors hover:border-paper/60"
                      : "inline-flex items-center rounded-sm border border-navy/25 px-6 py-3.5 text-[0.95rem] text-navy transition-colors hover:border-navy/50"
                  }
                >
                  {btn.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
