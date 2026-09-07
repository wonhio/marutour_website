const steps = [
  {
    title: "Local Suppliers",
    detail: "Tour operators, DMCs, attractions and experience providers",
  },
  {
    title: "MARU Tour Global Sourcing",
    detail: "Product curation, contracting and quality partnerships",
  },
  {
    title: "Distribution Network",
    detail: "Agencies, OTAs, corporate partners and affiliates",
  },
  {
    title: "Travelers & Travel Partners",
    detail: "Global demand, reached through trusted channels",
  },
];

export default function RouteFlow() {
  return (
    <div className="route-line">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
        {steps.map((step, i) => (
          <div key={step.title} className="route-node flex flex-col">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-paper text-[0.8rem] text-brand">
                {i + 1}
              </span>
              {i < steps.length - 1 && (
                <span className="hidden h-px flex-1 bg-line md:block" />
              )}
            </div>
            <h3 className="h-3 mt-4 text-[1.05rem] text-ink">{step.title}</h3>
            <p className="body-md mt-2 text-[0.875rem] text-graphite">
              {step.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
